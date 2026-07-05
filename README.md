# Anatomy 2 — Head, Neck & Neuroanatomy (bilingual study app)

An offline, single-page revision tool covering Head & Face, Neck & Airway, Back & Spine,
and Neuroanatomy — with atlas-style colour coding, a **key-terms rail**, and a full
**English / العربية** toggle (RTL).

## What's inside
- **16 topics** in 4 modules — notes, flashcards, and a self-marking quiz each.
- **81 flashcards** and **81 quiz questions** with explanations.
- **Key terms rail** beside every Notes tab — tap a term for its explanation.
- **AR/EN button** (top bar) flips the whole interface to Arabic, right-to-left.
  Anatomical terms stay in English inside the Arabic text (as taught/examined in the Gulf).
- **Exam Mode** — mixed random quiz (10 / 20 / 30 / all).
- Progress and language choice are saved in the browser (localStorage).

## Files
- `index.html` — the shell (structure + all CSS).
- `data.js` — all bilingual content (glossary, modules, topics, UI strings).
- `app.js` — all logic (language toggle, notes rail, flashcards, quiz engine, search).

Keep the three files together in the same folder.

## Run locally
Just open `index.html` in a browser. (Works from disk — no server needed.)

## Publish free on GitHub Pages
1. Create a new repository and upload **all three files** (`index.html`, `data.js`, `app.js`).
2. Repo **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**,
   **Branch = main**, folder **/ (root)**, then **Save**.
4. Wait ~1 minute; your link appears at the top of the Pages settings
   (`https://<username>.github.io/<repo>/`).

## Note on accuracy
Content follows standard atlas nomenclature (Netter, *Atlas of Human Anatomy*).
Always verify against your own atlas/notes before the exam.
