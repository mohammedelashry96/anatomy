/* ============================================================
   APP LOGIC  ·  bilingual, key-terms rail, quiz engine
   ============================================================ */

/* ---------- language ---------- */
let LANG = 'en';
try{ const s=localStorage.getItem('anat2_lang'); if(s) LANG=s; }catch(e){}
const L = ()=> LANG==='ar' ? 1 : 0;
const T = x => Array.isArray(x) ? (x[L()] ?? x[0]) : x;

function applyLangChrome(){
  const html=document.documentElement;
  html.lang = LANG; html.dir = LANG==='ar' ? 'rtl' : 'ltr';
  document.getElementById('brandName').textContent = T(UI.brand);
  document.getElementById('brandTag').innerHTML = T(UI.brandTag);
  document.getElementById('langLabel').textContent = T(UI.langLabel);
  document.getElementById('searchbox').placeholder = T(UI.search);
  document.getElementById('examBtn').textContent = T(UI.exam);
  document.getElementById('footer').innerHTML = T(UI.footer);
}
function toggleLang(){
  LANG = LANG==='ar' ? 'en' : 'ar';
  try{ localStorage.setItem('anat2_lang', LANG); }catch(e){}
  applyLangChrome();
  buildNav();
  // re-render current view
  if(state.view==='topic') renderTopic(state.arg,true);
  else if(state.view==='exam') renderExamConfig();
  else renderHome();
}

/* ---------- progress store ---------- */
const store = {
  get(k){ try{ return JSON.parse(localStorage.getItem('anat2_'+k)); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem('anat2_'+k, JSON.stringify(v)); }catch(e){} }
};
let done = store.get('done') || {};   // topicId -> best quiz %

/* ---------- state / router ---------- */
const app = document.getElementById('app');
let state = { view:'home', arg:null };

function go(view, arg){
  state = { view, arg };
  window.scrollTo({top:0,behavior:'instant'});
  if(view==='home') renderHome();
  else if(view==='topic') renderTopic(arg);
  else if(view==='exam') renderExamConfig();
}

/* ---------- header nav ---------- */
function buildNav(){
  const nav=document.getElementById('modnav');
  nav.innerHTML = MODULES.map(m=>`<button onclick="scrollModule('${m.id}')">${T(m.name)}</button>`).join('');
}
function scrollModule(id){
  if(state.view!=='home'){ go('home'); setTimeout(()=>doScroll(id),60); } else doScroll(id);
}
function doScroll(id){ const el=document.getElementById('mod-'+id); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }

/* ---------- helpers ---------- */
function counts(t){
  return { flash:t.flash.length, quiz:t.quiz.length,
           notes:t.notes.reduce((n,b)=>n+b.l.length,0) };
}
function totalCounts(){
  let f=0,q=0; Object.values(TOPICS).forEach(t=>{f+=t.flash.length;q+=t.quiz.length;});
  return { topics:Object.keys(TOPICS).length, flash:f, quiz:q };
}
function stripTags(s){ return String(s).replace(/<[^>]*>/g,''); }

/* ===========================================================
   HOME
   =========================================================== */
function renderHome(){
  const tot=totalCounts();
  const legend=[['nerve',UI.legNerve],['artery',UI.legArtery],['vein',UI.legVein],['muscle',UI.legMuscle],['bone',UI.legBone]]
    .map(([c,lbl])=>`<span class="chip"><span class="dot" style="background:var(--${c})"></span>${T(lbl)}</span>`).join('');

  const modules = MODULES.map((m,i)=>{
    const cards = m.topics.map(tid=>{
      const t=TOPICS[tid]; const c=counts(t);
      const badge = done[tid]!=null ? `<span class="badge-done">${done[tid]}%</span>` : '';
      return `<div class="topic-card" onclick="go('topic','${tid}')">
        <span class="accent-line" style="background:var(${t.color})"></span>
        ${badge}
        <h3>${T(t.title)}</h3>
        <p>${T(t.sub)}</p>
        <div class="meta">
          <span>${c.notes} ${T(UI.mNotes)}</span>
          <span>${c.flash} ${T(UI.tFlash)}</span>
          <span>${c.quiz} ${T(UI.tQuiz)}</span>
        </div></div>`;
    }).join('');
    return `<section class="module" id="mod-${m.id}">
      <div class="module-head"><span class="num">0${i+1}</span><h2>${T(m.name)}</h2><em>${T(m.sub)}</em></div>
      <div class="grid">${cards}</div></section>`;
  }).join('');

  app.innerHTML = `
    <section class="hero">
      <div class="eyebrow">${T(UI.heroEyebrow)}</div>
      <h1>${T(UI.heroH)}</h1>
      <p>${T(UI.heroP)}</p>
      <div class="legend">${legend}</div>
      <div class="stats">
        <div class="stat"><b>${tot.topics}</b><span>${T(UI.sTopics)}</span></div>
        <div class="stat"><b>${tot.flash}</b><span>${T(UI.sFlash)}</span></div>
        <div class="stat"><b>${tot.quiz}</b><span>${T(UI.sQuiz)}</span></div>
      </div>
    </section>
    ${modules}`;
}

/* ===========================================================
   TOPIC
   =========================================================== */
let curTab='notes';
function renderTopic(tid, keepTab){
  const t=TOPICS[tid]; if(!t){ go('home'); return; }
  if(!keepTab) curTab='notes';
  app.innerHTML = `
    <div class="detail-head">
      <button class="back" onclick="go('home')">${T(UI.allTopics)}</button>
      <h1>${T(t.title)}</h1>
      <p class="sub">${T(t.sub)}</p>
      <div class="tabs">
        <button data-t="notes" onclick="switchTab('${tid}','notes')">${T(UI.tNotes)}</button>
        <button data-t="flash" onclick="switchTab('${tid}','flash')">${T(UI.tFlash)}</button>
        <button data-t="quiz"  onclick="switchTab('${tid}','quiz')">${T(UI.tQuiz)}</button>
      </div>
    </div>
    <div class="panel" id="panel"></div>`;
  switchTab(tid, curTab);
}
function switchTab(tid, tab){
  curTab=tab;
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.toggle('active', b.dataset.t===tab));
  if(tab==='notes') renderNotes(tid);
  else if(tab==='flash') renderFlash(tid);
  else renderTopicQuizIntro(tid);
}

/* ---------- notes + key-terms rail ---------- */
let explainMode=false;
function toggleExplain(tid){ explainMode=!explainMode; renderNotes(tid); }

function renderNotes(tid){
  const t=TOPICS[tid];
  const ex = (typeof EXPLAIN!=='undefined' && EXPLAIN[tid]) ? EXPLAIN[tid] : null;
  const blocks = t.notes.map((b,bi)=>{
    const items=b.l.map(li=>`<li>${T(li)}</li>`).join('');
    const teach = (explainMode && ex && ex[bi])
      ? `<div class="teach"><div class="teach-tag"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>${T(UI.teacherTag)}</div><p>${T(ex[bi])}</p></div>`
      : '';
    return `<div class="note-block"><h4>${T(b.h)}</h4>${teach}<ul>${items}</ul></div>`;
  }).join('');

  const chips = (t.terms||[]).map(id=>{
    const g=GLOSSARY[id]; if(!g) return '';
    return `<button class="term-chip" id="chip-${id}" onclick="showTerm('${id}')">
      <span class="cdot" style="background:var(--${g.c})"></span>${T(g.t)}</button>`;
  }).join('');

  const explainBtn = ex ? `
    <div class="notes-toolbar">
      <button class="btn-explain ${explainMode?'on':''}" onclick="toggleExplain('${tid}')">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/><path d="M22 10v6"/></svg>
        ${explainMode?T(UI.explainHide):T(UI.explainShow)}
      </button>
    </div>` : '';

  document.getElementById('panel').innerHTML = explainBtn + `
    <div class="notes-layout">
      <div class="notes-main">${blocks}</div>
      <aside class="term-rail">
        <div class="rail-title">${T(UI.keyTerms)}</div>
        <div class="rail-hint">${T(UI.tapTerm)}</div>
        <div id="termDetail" class="term-detail hidden"></div>
        <div class="term-list">${chips}</div>
      </aside>
    </div>`;
}
function showTerm(id){
  const g=GLOSSARY[id]; if(!g) return;
  const box=document.getElementById('termDetail');
  box.classList.remove('hidden');
  box.innerHTML = `<div class="td-term"><span class="td-dot" style="background:var(--${g.c})"></span>${T(g.t)}</div>
                   <div class="td-def">${T(g.d)}</div>`;
  document.querySelectorAll('.term-chip').forEach(c=>c.classList.remove('on'));
  const chip=document.getElementById('chip-'+id); if(chip) chip.classList.add('on');
}

/* ---------- flashcards ---------- */
let fc={list:[],i:0,flip:false,tid:null};
function renderFlash(tid){
  const t=TOPICS[tid];
  fc={list:t.flash.map((c,idx)=>({...c,_o:idx})), i:0, flip:false, tid};
  drawFlash();
}
function drawFlash(){
  const c=fc.list[fc.i];
  document.getElementById('panel').innerHTML = `
    <div class="fc-tools">
      <span class="fc-count">${T(UI.card)} ${fc.i+1} ${T(UI.of)} ${fc.list.length}</span>
      <button class="mini" onclick="shuffleFlash()">${T(UI.shuffle)}</button>
    </div>
    <div class="fc-stage">
      <div class="flashcard ${fc.flip?'flip':''}" onclick="flipCard()">
        <div class="fc-face fc-front">
          <div class="fc-tag">${T(UI.qWord)}</div>
          <div class="fc-q">${T(c.q)}</div>
          <div class="fc-hint">${T(UI.reveal)}</div>
        </div>
        <div class="fc-face fc-back">
          <div class="fc-tag">${T(UI.aWord)}</div>
          <div class="fc-a">${T(c.a)}</div>
          <div class="fc-hint">${T(UI.flipback)}</div>
        </div>
      </div>
    </div>
    <div class="fc-nav">
      <button onclick="prevCard()">${T(UI.prev)}</button>
      <span class="pos">${fc.i+1} / ${fc.list.length}</span>
      <button onclick="nextCard()">${T(UI.next)}</button>
    </div>`;
}
function flipCard(){ fc.flip=!fc.flip; drawFlash(); }
function nextCard(){ fc.i=(fc.i+1)%fc.list.length; fc.flip=false; drawFlash(); }
function prevCard(){ fc.i=(fc.i-1+fc.list.length)%fc.list.length; fc.flip=false; drawFlash(); }
function shuffleFlash(){ for(let i=fc.list.length-1;i>0;i--){const j=(Math.random()*(i+1))|0;[fc.list[i],fc.list[j]]=[fc.list[j],fc.list[i]];} fc.i=0; fc.flip=false; drawFlash(); }

/* ===========================================================
   QUIZ ENGINE  (shared topic + exam)
   =========================================================== */
let quiz={list:[],i:0,score:0,answered:false,wrong:[],mode:'topic',tid:null};

function renderTopicQuizIntro(tid){
  // topic quiz starts immediately
  startTopicQuiz(tid);
}
function startTopicQuiz(tid){
  const t=TOPICS[tid];
  quiz={ list:t.quiz.map(q=>({...q,_topic:t.title})), i:0, score:0, answered:false, wrong:[], mode:'topic', tid };
  shuffle(quiz.list);
  renderQuestion();
}

/* exam config */
function startExam(){ go('exam'); }
let examLen=10;
function renderExamConfig(){
  const opts=[10,20,30,999].map(n=>{
    const lbl = n===999 ? T(UI.all) : n;
    return `<button class="${examLen===n?'on':''}" onclick="pickLen(${n})">${lbl}</button>`;
  }).join('');
  app.innerHTML = `
    <div class="detail-head"><button class="back" onclick="go('home')">${T(UI.allTopics)}</button></div>
    <div class="panel">
      <div class="quiz-config">
        <h3>${T(UI.setup)}</h3>
        <p>${T(UI.setupP)}</p>
        <div class="qopt">
          <label>${T(UI.numQ)}</label>
          <div class="seg" id="lenseg">${opts}</div>
        </div>
        <button class="btn-quiz" style="width:100%;padding:13px" onclick="launchExam()">${T(UI.startQuiz)}</button>
      </div>
    </div>`;
}
function pickLen(n){ examLen=n; document.querySelectorAll('#lenseg button').forEach(b=>b.classList.remove('on')); renderExamConfig(); }
function launchExam(){
  let pool=[];
  Object.values(TOPICS).forEach(t=>t.quiz.forEach(q=>pool.push({...q,_topic:t.title})));
  shuffle(pool);
  const n = examLen===999 ? pool.length : Math.min(examLen,pool.length);
  quiz={ list:pool.slice(0,n), i:0, score:0, answered:false, wrong:[], mode:'exam', tid:null };
  renderQuestion();
}

function renderQuestion(){
  const q=quiz.list[quiz.i];
  const pct=Math.round((quiz.i/quiz.list.length)*100);
  const meta = quiz.mode==='exam'
    ? `${T(UI.examMixed)} · ${T(q._topic)}`
    : `${T(UI.topicQuiz)} · ${T(q._topic)}`;
  const opts=q.o.map((o,idx)=>`
    <button class="opt" data-i="${idx}" onclick="answer(${idx})">
      <span class="key">${'ABCD'[idx]}</span><span>${T(o)}</span>
    </button>`).join('');
  app.innerHTML = `
    <div class="detail-head">
      <button class="back" onclick="quiz.mode==='exam'?go('exam'):go('topic',quiz.tid)">${T(UI.quitQuiz)}</button>
    </div>
    <div class="panel">
      <div class="q-card">
        <div class="q-progress"><i style="width:${pct}%"></i></div>
        <div class="q-meta"><span>${meta}</span><span>${T(UI.qShort)} ${quiz.i+1}/${quiz.list.length} · ${T(UI.score)} ${quiz.score}</span></div>
        <div class="q-text">${T(q.q)}</div>
        <div class="opts" id="opts">${opts}</div>
        <div id="explainSlot"></div>
        <div class="q-next"><button id="nextBtn" onclick="nextQ()" disabled>${quiz.i+1<quiz.list.length?T(UI.nextBtn)+' →':T(UI.seeResults)}</button></div>
      </div>
    </div>`;
  quiz.answered=false;
}
function answer(idx){
  if(quiz.answered) return;
  quiz.answered=true;
  const q=quiz.list[quiz.i];
  const btns=document.querySelectorAll('#opts .opt');
  btns.forEach(b=>{
    b.disabled=true;
    const i=+b.dataset.i;
    if(i===q.a) b.classList.add('correct');
    else if(i===idx) b.classList.add('wrong');
  });
  if(idx===q.a) quiz.score++;
  else quiz.wrong.push({ q:q.q, mine:q.o[idx], right:q.o[q.a], topic:q._topic });
  document.getElementById('explainSlot').innerHTML =
    `<div class="explain"><b>${idx===q.a?T(UI.correct):T(UI.explanation)}</b>${T(q.e)}</div>`;
  document.getElementById('nextBtn').disabled=false;
}
function nextQ(){
  if(quiz.i+1<quiz.list.length){ quiz.i++; renderQuestion(); }
  else renderResults();
}
function renderResults(){
  const total=quiz.list.length;
  const pct=Math.round((quiz.score/total)*100);
  // save best for topic quizzes
  if(quiz.mode==='topic' && quiz.tid){
    if(done[quiz.tid]==null || pct>done[quiz.tid]){ done[quiz.tid]=pct; store.set('done',done); }
  }
  const msg = pct>=85?T(UI.res85):pct>=70?T(UI.res70):pct>=50?T(UI.res50):T(UI.res0);
  const R=68, C=2*Math.PI*R, off=C*(1-pct/100);
  const review = quiz.wrong.length ? `
    <div class="review-list">
      <h4>${T(UI.reviewMiss)}</h4>
      ${quiz.wrong.map(w=>`
        <div class="review-item">
          <div class="rtop">${T(w.topic)}</div>
          <div class="rq">${T(w.q)}</div>
          <div class="ra"><span class="mine">${T(UI.youAns)} ${T(w.mine)}</span> · <span class="right">${T(UI.theRight)} ${T(w.right)}</span></div>
        </div>`).join('')}
    </div>` : '';
  app.innerHTML = `
    <div class="panel">
      <div class="result">
        <div class="score-ring">
          <svg width="150" height="150">
            <circle cx="75" cy="75" r="${R}" fill="none" stroke="var(--paper-2)" stroke-width="11"></circle>
            <circle cx="75" cy="75" r="${R}" fill="none" stroke="var(--accent)" stroke-width="11"
              stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${off}"></circle>
          </svg>
          <div class="pct"><b>${pct}%</b><span>${quiz.score}/${total}</span></div>
        </div>
        <h3>${msg}</h3>
        <p>${(quiz.mode==='exam'?T(UI.examMixed):T(UI.topicQuiz))} ${T(UI.complete)}</p>
        <div class="result-actions">
          <button class="mini" onclick="retakeQuiz()">${T(UI.retake)}</button>
          <button class="btn-quiz" onclick="go('home')">${T(UI.backTopics)}</button>
        </div>
        ${review}
      </div>
    </div>`;
}
function retakeQuiz(){
  if(quiz.mode==='exam') launchExam();
  else startTopicQuiz(quiz.tid);
}
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=(Math.random()*(i+1))|0;[a[i],a[j]]=[a[j],a[i]];} return a; }

/* ===========================================================
   SEARCH
   =========================================================== */
const sb=document.getElementById('searchbox');
sb.addEventListener('input',e=>{
  const term=e.target.value.trim().toLowerCase();
  if(!term){ if(state.view==='home') renderHome(); return; }
  const hits=[];
  Object.entries(TOPICS).forEach(([id,t])=>{
    const hay=[stripTags(T(t.title)),stripTags(T(t.sub))];
    t.notes.forEach(b=>b.l.forEach(li=>hay.push(stripTags(T(li)))));
    t.flash.forEach(c=>hay.push(stripTags(T(c.q))));
    if(hay.join(' ').toLowerCase().includes(term)) hits.push({id,t});
  });
  const label = hits.length===1?T(UI.matchWord):T(UI.matchesWord);
  app.innerHTML = `<div class="search-results">
    <div class="module-head"><h2>${hits.length} ${label}</h2></div>
    ${hits.length? hits.map(h=>`
      <div class="sr-item" onclick="clearSearch();go('topic','${h.id}')">
        <div class="sr-topic">${T(h.t.sub)}</div><h4>${T(h.t.title)}</h4></div>`).join('')
      : `<p style="color:var(--ink-soft)">${T(UI.noMatch)}</p>`}
  </div>`;
});
sb.addEventListener('keydown',e=>{ if(e.key==='Escape') clearSearch(); });
function clearSearch(){ sb.value=''; go('home'); }

/* ---------- init ---------- */
applyLangChrome();
buildNav();
renderHome();
