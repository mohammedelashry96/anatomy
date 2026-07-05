/* ============================================================
   BILINGUAL DATA  ·  strings are [English, العربية]
   Anatomical proper terms kept in English inside Arabic text.
   ============================================================ */

const GLOSSARY={
 /* skull */
 neurocranium:{t:["Neurocranium","القحف العصبي (Neurocranium)"],c:"bone",d:["The 8 bones enclosing the brain: frontal, 2 parietal, 2 temporal, occipital, sphenoid, ethmoid.","العظام الثمانية المحيطة بالدماغ: الجبهي، جداريان، صدغيان، القذالي، الوتدي، الغربالي."]},
 pterion:{t:["Pterion","الجفت (Pterion)"],c:"bone",d:["H-shaped junction of frontal, parietal, sphenoid & temporal bones. Thin bone overlying the anterior middle meningeal artery.","ملتقى على شكل حرف H بين الجبهي والجداري والوتدي والصدغي. عظم رقيق يعلو الفرع الأمامي للشريان السحائي الأوسط."]},
 foramen_ovale:{t:["Foramen ovale","الثقبة البيضية"],c:"bone",d:["Transmits the mandibular division of the trigeminal nerve (CN V3).","تنقل الشعبة الفكية السفلية للعصب مثلث التوائم (CN V3)."]},
 jugular_foramen:{t:["Jugular foramen","الثقبة الوداجية"],c:"bone",d:["Transmits CN IX, X, XI and the internal jugular vein.","تنقل الأعصاب IX وX وXI والوريد الوداجي الباطن."]},
 cribriform_plate:{t:["Cribriform plate","الصفيحة المصفوية"],c:"bone",d:["Perforated ethmoid plate transmitting the olfactory nerve filaments (CN I).","صفيحة مثقّبة في الغربالي تنقل خيوط العصب الشمّي (CN I)."]},
 sella_turcica:{t:["Sella turcica","السرج التركي"],c:"bone",d:["Saddle-shaped depression of the sphenoid that houses the pituitary gland.","انخفاض سرجي الشكل في العظم الوتدي يحتضن الغدة النخامية."]},
 /* scalp / face */
 galea:{t:["Galea aponeurotica","الصفاق الإكليلي"],c:"muscle",d:["Tough aponeurosis linking the frontal & occipital bellies of occipitofrontalis.","صفاق متين يربط البطنين الجبهي والقذالي للعضلة القذالية الجبهية."]},
 danger_area:{t:["Danger area of scalp","المنطقة الخطرة في فروة الرأس"],c:"key",d:["The loose areolar layer; emissary veins here let infection spread to the dural venous sinuses.","الطبقة الضامة الرخوة؛ الأوردة الناقلة فيها تسمح بانتقال العدوى إلى الجيوب الوريدية الجافوية."]},
 cn7:{t:["Facial nerve (CN VII)","العصب الوجهي (CN VII)"],c:"nerve",d:["Motor supply to ALL muscles of facial expression (2nd pharyngeal arch).","يغذّي حركياً كل عضلات تعابير الوجه (القوس البلعومي الثاني)."]},
 buccinator:{t:["Buccinator","العضلة البوقية (Buccinator)"],c:"muscle",d:["Compresses the cheek against the teeth. A facial-expression muscle (VII) — not a muscle of mastication.","تضغط الخد على الأسنان. عضلة تعبير وجهي (VII) وليست من عضلات المضغ."]},
 /* parotid */
 parotid_duct:{t:["Parotid (Stensen) duct","قناة النكفة (Stensen)"],c:"key",d:["Pierces buccinator and opens opposite the 2nd upper molar.","تخترق العضلة البوقية وتفتح مقابل الرحى العلوية الثانية."]},
 retromandibular_vein:{t:["Retromandibular vein","الوريد خلف الفكّي"],c:"vein",d:["Middle structure in the parotid; formed by superficial temporal + maxillary veins.","التركيب الأوسط داخل النكفة؛ يتكوّن من الوريدين الصدغي السطحي والفكي."]},
 otic_ganglion:{t:["Otic ganglion","العقدة الأذنية"],c:"nerve",d:["Parasympathetic relay for CN IX secretomotor fibres to the parotid.","محطة نظير ودّية لألياف CN IX الإفرازية الحركية إلى النكفة."]},
 auriculotemporal:{t:["Auriculotemporal nerve","العصب الأُذني الصدغي"],c:"nerve",d:["Branch of V3; carries sensation and the secretomotor fibres to the parotid gland.","فرع من V3؛ ينقل الحس والألياف الإفرازية الحركية إلى الغدة النكفية."]},
 eca:{t:["External carotid artery","الشريان السباتي الظاهر"],c:"artery",d:["Deepest structure in the parotid; ends by dividing into maxillary + superficial temporal arteries.","أعمق تركيب في النكفة؛ ينتهي بانقسامه إلى الشريانين الفكي والصدغي السطحي."]},
 /* oral */
 genioglossus:{t:["Genioglossus","العضلة الذقنية اللسانية"],c:"muscle",d:["Protrudes the tongue; a CN XII lesion makes the tongue deviate toward the weak side.","تُبرز اللسان؛ إصابة CN XII تجعل اللسان ينحرف نحو الجهة الضعيفة."]},
 chorda_tympani:{t:["Chorda tympani","حبل الطبل (Chorda tympani)"],c:"nerve",d:["Branch of CN VII carrying taste from the anterior two-thirds of the tongue.","فرع من CN VII ينقل التذوّق من الثلثين الأماميين للسان."]},
 lingual_nerve:{t:["Lingual nerve","العصب اللساني"],c:"nerve",d:["Branch of V3 giving general sensation to the anterior two-thirds of the tongue.","فرع من V3 يعطي الحس العام للثلثين الأماميين للسان."]},
 hard_palate:{t:["Hard palate","الحنك الصلب"],c:"bone",d:["Palatine process of the maxilla + horizontal plate of the palatine bone.","الناتئ الحنكي للفك العلوي + الصفيحة الأفقية للعظم الحنكي."]},
 palatine_tonsil:{t:["Palatine tonsil","اللوزة الحنكية"],c:"key",d:["Lymphoid tissue in the fossa between the palatoglossal & palatopharyngeal arches.","نسيج لمفاوي في الحفرة بين القوسين الحنكي اللساني والحنكي البلعومي."]},
 /* sinuses */
 cavernous_sinus:{t:["Cavernous sinus","الجيب الكهفي"],c:"vein",d:["Beside the sphenoid: ICA + CN VI pass THROUGH it; CN III, IV, V1, V2 lie in its lateral wall.","بجانب العظم الوتدي: يمرّ خلاله الشريان السباتي الباطن وCN VI؛ وتقع الأعصاب III وIV وV1 وV2 في جداره الجانبي."]},
 superior_sagittal:{t:["Superior sagittal sinus","الجيب السهمي العلوي"],c:"vein",d:["Runs in the attached (superior) margin of the falx cerebri; drains to the confluence.","يجري في الحافة العلوية المثبّتة لمنجل المخ؛ يصبّ في ملتقى الجيوب."]},
 straight_sinus:{t:["Straight sinus","الجيب المستقيم"],c:"vein",d:["Formed by the inferior sagittal sinus + great cerebral vein of Galen.","يتكوّن من الجيب السهمي السفلي + الوريد المخي الكبير (Galen)."]},
 confluence:{t:["Confluence of sinuses","ملتقى الجيوب"],c:"vein",d:["Meeting point that drains to the transverse then sigmoid sinuses.","نقطة التقاء تصبّ في الجيبين المستعرض ثم السيني."]},
 sup_ophthalmic:{t:["Superior ophthalmic vein","الوريد العيني العلوي"],c:"vein",d:["Links the valveless facial vein to the cavernous sinus (route of danger-triangle infection).","يربط الوريد الوجهي عديم الصمّامات بالجيب الكهفي (مسار عدوى مثلث الخطر)."]},
 /* neck */
 carotid_sheath:{t:["Carotid sheath","الغمد السباتي"],c:"key",d:["Contains the common/internal carotid artery, internal jugular vein and vagus nerve.","يحتوي الشريان السباتي المشترك/الباطن والوريد الوداجي الباطن والعصب المبهم."]},
 posterior_triangle:{t:["Posterior triangle","المثلث الخلفي للعنق"],c:"key",d:["Bounded by SCM, trapezius and the clavicle; contains the accessory nerve (XI).","يحدّه العضلة القترائية والشبه منحرفة والترقوة؛ يحوي العصب الإضافي (XI)."]},
 phrenic:{t:["Phrenic nerve","العصب الحجابي"],c:"nerve",d:["C3–C5; sole motor supply to the diaphragm. Runs on scalenus anterior.","C3–C5؛ المموّن الحركي الوحيد للحجاب الحاجز. يجري على العضلة الأخمعية الأمامية."]},
 cn11:{t:["Accessory nerve (CN XI)","العصب الإضافي (CN XI)"],c:"nerve",d:["Motor supply to sternocleidomastoid and trapezius.","يغذّي حركياً العضلة القترائية والعضلة شبه المنحرفة."]},
 cervical_plexus:{t:["Cervical plexus","الضفيرة العنقية"],c:"nerve",d:["C1–C4: gives the ansa cervicalis, phrenic nerve and cutaneous branches.","C1–C4: تعطي العروة العنقية والعصب الحجابي والفروع الجلدية."]},
 /* pharynx */
 stylopharyngeus:{t:["Stylopharyngeus","العضلة الإبرية البلعومية"],c:"muscle",d:["The ONLY pharyngeal muscle supplied by the glossopharyngeal nerve (CN IX).","العضلة البلعومية الوحيدة التي يغذّيها العصب اللساني البلعومي (CN IX)."]},
 constrictors:{t:["Pharyngeal constrictors","العضلات العاصرة البلعومية"],c:"muscle",d:["Superior, middle & inferior; propel the bolus. Supplied by the vagus (X).","علوية ووسطى وسفلية؛ تدفع اللقمة. يغذّيها العصب المبهم (X)."]},
 killian:{t:["Killian's dehiscence","فرجة كيليان"],c:"key",d:["Weak gap between thyropharyngeus & cricopharyngeus → site of a pharyngeal pouch.","فجوة ضعيفة بين thyropharyngeus وcricopharyngeus ← موضع جيب بلعومي."]},
 pharyngeal_plexus:{t:["Pharyngeal plexus","الضفيرة البلعومية"],c:"nerve",d:["Motor from the vagus (X); sensation mainly from the glossopharyngeal (IX).","الحركة من المبهم (X)؛ الحس غالباً من اللساني البلعومي (IX)."]},
 waldeyer:{t:["Waldeyer's ring","حلقة فالداير"],c:"key",d:["Lymphoid ring: pharyngeal (adenoid), tubal, palatine & lingual tonsils.","حلقة لمفاوية: اللوزة البلعومية (الناميات)، الأنبوبية، الحنكية، اللسانية."]},
 /* larynx */
 posterior_cricoarytenoid:{t:["Posterior cricoarytenoid","العضلة الحلقية الطرجهالية الخلفية"],c:"muscle",d:["The ONLY abductor of the vocal folds — opens the rima glottidis.","العضلة الوحيدة الباعدة للطيّتين الصوتيتين — تفتح المزمار."]},
 cricothyroid:{t:["Cricothyroid","العضلة الحلقية الدرقية"],c:"muscle",d:["Tenses the vocal cords; the only intrinsic muscle supplied by the external laryngeal nerve.","تشدّ الحبال الصوتية؛ العضلة الداخلية الوحيدة التي يغذّيها العصب الحنجري الظاهر."]},
 recurrent_laryngeal:{t:["Recurrent laryngeal nerve","العصب الحنجري الراجع"],c:"nerve",d:["Motor to all intrinsic laryngeal muscles except cricothyroid; sensation below the vocal folds.","حركي لكل عضلات الحنجرة الداخلية عدا cricothyroid؛ وحسّي أسفل الطيّتين الصوتيتين."]},
 internal_laryngeal:{t:["Internal laryngeal nerve","العصب الحنجري الداخلي"],c:"nerve",d:["Sensation to the laryngeal mucosa ABOVE the vocal folds.","الحس لمخاطية الحنجرة فوق الطيّتين الصوتيتين."]},
 cricoid:{t:["Cricoid cartilage","الغضروف الحلقي"],c:"bone",d:["The only complete cartilage ring of the airway, at the C6 level.","الحلقة الغضروفية الكاملة الوحيدة في المجرى الهوائي، بمستوى C6."]},
 rima_glottidis:{t:["Rima glottidis","المزمار (Rima glottidis)"],c:"key",d:["The gap between the vocal folds; narrowest part of the adult larynx.","الفتحة بين الطيّتين الصوتيتين؛ أضيق جزء في حنجرة البالغ."]},
 /* spine */
 atlas:{t:["Atlas (C1)","الفقرة الأطلسية (C1)"],c:"bone",d:["Ring-shaped vertebra with no body and no spinous process; carries the skull.","فقرة حلقية بلا جسم وبلا ناتئ شوكي؛ تحمل الجمجمة."]},
 axis:{t:["Axis (C2)","الفقرة المحورية (C2)"],c:"bone",d:["Bears the dens (odontoid process), the pivot for head rotation.","تحمل السنّ (الناتئ السنّي)، محور دوران الرأس."]},
 nucleus_pulposus:{t:["Nucleus pulposus","النواة اللبّية"],c:"key",d:["Gel-like centre of the disc; herniates posterolaterally to compress a nerve root.","المركز الهلامي للقرص؛ ينفتق خلفياً وحشياً ليضغط على جذر عصبي."]},
 annulus_fibrosus:{t:["Annulus fibrosus","الحلقة الليفية"],c:"key",d:["Tough outer fibrous ring of the intervertebral disc.","الحلقة الليفية الخارجية المتينة للقرص بين الفقري."]},
 primary_curve:{t:["Primary curvatures","التحدّبات الأولية"],c:"bone",d:["Thoracic & sacral kyphoses — present from birth.","حدبتا الصدر والعجز — موجودتان منذ الولادة."]},
 /* aoj */
 transverse_ligament:{t:["Transverse ligament of atlas","الرباط المستعرض للأطلس"],c:"key",d:["Holds the dens against the anterior arch of the atlas; rupture endangers the cord.","يثبّت السنّ أمام القوس الأمامي للأطلس؛ تمزّقه يهدّد النخاع."]},
 alar_ligament:{t:["Alar ligaments","الرباطان الجناحيان"],c:"key",d:["Connect the dens to the occipital condyles; check excessive rotation.","يربطان السنّ باللقمتين القذاليتين؛ يكبحان الدوران المفرط."]},
 dens:{t:["Dens (odontoid)","السنّ (Dens)"],c:"bone",d:["Peg of the axis (C2); the pivot of the median atlanto-axial joint.","نتوء الفقرة المحورية (C2)؛ محور المفصل الأطلسي المحوري الأوسط."]},
 atlanto_occipital:{t:["Atlanto-occipital joint","المفصل الأطلسي القذالي"],c:"bone",d:["Between occipital condyles & atlas; flexion–extension ('yes').","بين اللقمتين القذاليتين والأطلس؛ ثني–بسط (إيماءة 'نعم')."]},
 atlanto_axial:{t:["Atlanto-axial joint","المفصل الأطلسي المحوري"],c:"bone",d:["Between C1 & C2; rotation of the head ('no').","بين C1 وC2؛ دوران الرأس (إيماءة 'لا')."]},
 /* prevertebral */
 longus_colli:{t:["Longus colli","العضلة الطويلة للعنق"],c:"muscle",d:["Chief flexor of the neck among the prevertebral muscles.","الثانية الرئيسية للعنق ضمن العضلات أمام الفقرية."]},
 scalene_gap:{t:["Scalene gap (interval)","الفتحة الأخمعية"],c:"key",d:["Between anterior & middle scalene — transmits the subclavian artery + brachial plexus roots.","بين الأخمعيتين الأمامية والوسطى — تنقل الشريان تحت الترقوة وجذور الضفيرة العضدية."]},
 scalenes:{t:["Scalene muscles","العضلات الأخمعية"],c:"muscle",d:["Anterior, middle, posterior; elevate the upper ribs and laterally flex the neck.","أمامية ووسطى وخلفية؛ ترفع الأضلاع العلوية وتثني العنق جانبياً."]},
 thoracic_outlet:{t:["Thoracic outlet syndrome","متلازمة مخرج الصدر"],c:"key",d:["Compression of the brachial plexus / subclavian artery in the scalene interval.","انضغاط الضفيرة العضدية / الشريان تحت الترقوة في الفتحة الأخمعية."]},
 /* back muscles */
 erector_spinae:{t:["Erector spinae","العضلة الناصبة للفقار"],c:"muscle",d:["Iliocostalis, longissimus, spinalis (lateral→medial) — main extensors of the spine.","iliocostalis وlongissimus وspinalis (من الوحشي للإنسي) — الباسطات الرئيسية للعمود."]},
 dorsal_rami:{t:["Dorsal rami","الفروع الظهرية"],c:"nerve",d:["Supply ALL the intrinsic (true) back muscles — a key discriminator.","تغذّي كل عضلات الظهر الحقيقية (الجوهرية) — علامة تمييز مهمة."]},
 transversospinalis:{t:["Transversospinalis","العضلات المستعرضة الشوكية"],c:"muscle",d:["Deep layer: semispinalis, multifidus, rotatores.","الطبقة العميقة: semispinalis وmultifidus وrotatores."]},
 trapezius:{t:["Trapezius","العضلة شبه المنحرفة"],c:"muscle",d:["An extrinsic back muscle moving the scapula; supplied by the accessory nerve (XI).","عضلة ظهر خارجية تحرّك لوح الكتف؛ يغذّيها العصب الإضافي (XI)."]},
 /* brain */
 precentral_gyrus:{t:["Precentral gyrus","التلفيف قبل المركزي"],c:"key",d:["Primary motor cortex, in the frontal lobe.","القشرة الحركية الأولية، في الفصّ الجبهي."]},
 postcentral_gyrus:{t:["Postcentral gyrus","التلفيف بعد المركزي"],c:"key",d:["Primary somatosensory cortex, in the parietal lobe.","القشرة الحسّية الجسدية الأولية، في الفصّ الجداري."]},
 broca:{t:["Broca's area","منطقة بروكا"],c:"key",d:["Motor speech area (frontal); lesion → non-fluent (expressive) aphasia.","منطقة الكلام الحركية (جبهية)؛ إصابتها ← حبسة تعبيرية غير طليقة."]},
 wernicke:{t:["Wernicke's area","منطقة فيرنيكه"],c:"key",d:["Language comprehension (temporal); lesion → fluent (receptive) aphasia.","فهم اللغة (صدغية)؛ إصابتها ← حبسة استقبالية طليقة."]},
 cerebellum:{t:["Cerebellum","المخيخ"],c:"key",d:["Coordinates movement & balance; lesions cause ipsilateral signs.","ينسّق الحركة والتوازن؛ إصاباته تعطي علامات في نفس الجهة."]},
 /* cerebral circulation */
 circle_of_willis:{t:["Circle of Willis","دائرة ويليس"],c:"artery",d:["Anastomotic ring linking the anterior (carotid) & posterior (vertebrobasilar) circulations.","حلقة مفاغرة تربط الدوران الأمامي (السباتي) بالخلفي (الفقري القاعدي)."]},
 mca:{t:["Middle cerebral artery","الشريان الدماغي الأوسط"],c:"artery",d:["Lateral hemisphere: face & arm cortex, Broca/Wernicke areas.","النصف الوحشي: قشرة الوجه والذراع ومنطقتا Broca/Wernicke."]},
 aca:{t:["Anterior cerebral artery","الشريان الدماغي الأمامي"],c:"artery",d:["Medial hemisphere: the leg area of the motor/sensory cortex.","النصف الإنسي: منطقة الساق من القشرة الحركية/الحسّية."]},
 pca:{t:["Posterior cerebral artery","الشريان الدماغي الخلفي"],c:"artery",d:["Supplies the occipital lobe; occlusion → contralateral homonymous hemianopia.","يغذّي الفصّ القذالي؛ انسداده ← عمى شقّي مماثل في الجهة المقابلة."]},
 basilar:{t:["Basilar artery","الشريان القاعدي"],c:"artery",d:["Formed by the union of the two vertebral arteries.","يتكوّن من اتحاد الشريانين الفقريين."]},
 /* cord */
 conus_medullaris:{t:["Conus medullaris","المخروط النخاعي"],c:"key",d:["Tapered end of the spinal cord, at about L1–L2 in adults.","النهاية المدبّبة للنخاع الشوكي، عند L1–L2 تقريباً في البالغ."]},
 cauda_equina:{t:["Cauda equina","ذنب الفرس"],c:"nerve",d:["Bundle of lumbosacral nerve roots below the conus medullaris.","حزمة جذور الأعصاب القطنية العجزية أسفل المخروط النخاعي."]},
 spinothalamic:{t:["Spinothalamic tract","السبيل الشوكي المهادي"],c:"nerve",d:["Ascending tract for pain & temperature.","سبيل صاعد للألم والحرارة."]},
 dorsal_columns:{t:["Dorsal columns","الأعمدة الظهرية"],c:"nerve",d:["Ascending tract for fine touch, vibration & proprioception.","سبيل صاعد للّمس الدقيق والاهتزاز وحسّ الوضع."]},
 corticospinal:{t:["Corticospinal tract","السبيل القشري النخاعي"],c:"nerve",d:["Main descending tract for voluntary motor control.","السبيل النازل الرئيسي للتحكّم الحركي الإرادي."]},
 /* limbic */
 hippocampus:{t:["Hippocampus","الحُصين"],c:"key",d:["Forms new declarative memories; bilateral loss → anterograde amnesia.","يكوّن الذكريات التقريرية الجديدة؛ فقدانه الثنائي ← فقدان ذاكرة تقدّمي."]},
 amygdala:{t:["Amygdala","اللوزة الدماغية"],c:"key",d:["Processes fear and emotional responses.","تعالج الخوف والاستجابات العاطفية."]},
 fornix:{t:["Fornix","القبو (Fornix)"],c:"key",d:["Main output tract of the hippocampus to the mammillary bodies.","السبيل الصادر الرئيسي من الحُصين إلى الأجسام الحلمية."]},
 papez:{t:["Papez circuit","دارة بابيز"],c:"key",d:["Hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate → parahippocampal → back.","الحُصين ← القبو ← الأجسام الحلمية ← المهاد الأمامي ← الحزامي ← جانب الحُصين ← عودة."]},
 mammillary_bodies:{t:["Mammillary bodies","الأجسام الحلمية"],c:"key",d:["Damaged in Korsakoff amnesia (thiamine/B1 deficiency).","تتضرّر في نساوة كورساكوف (عوز الثيامين/B1)."]}
};

const MODULES=[
 {id:"m1",name:["Head & Face","الرأس والوجه"],sub:["Skull · scalp · glands · oral cavity · sinuses","الجمجمة · الفروة · الغدد · جوف الفم · الجيوب"],topics:["skull","scalp","parotid","oral","sinuses"]},
 {id:"m2",name:["Neck & Airway","العنق والمجرى الهوائي"],sub:["Cervical regions · pharynx · larynx","مناطق العنق · البلعوم · الحنجرة"],topics:["neck","pharynx","larynx"]},
 {id:"m3",name:["Back & Spine","الظهر والعمود الفقري"],sub:["Vertebral column · joints · deep muscles","العمود الفقري · المفاصل · العضلات العميقة"],topics:["spine","aoj","prevertebral","backmuscles"]},
 {id:"m4",name:["Neuroanatomy","تشريح الجهاز العصبي"],sub:["Brain · circulation · cord · limbic system","الدماغ · الدوران · النخاع · الجهاز الحوفي"],topics:["brain","cerebral","cord","limbic"]}
];

const TOPICS={
/* ===================== MODULE 1 ===================== */
skull:{title:["The Skull","الجمجمة"],sub:["Neurocranium, facial skeleton, fossae & foramina","القحف العصبي، الهيكل الوجهي، الحفر والثقب"],color:"--bone",
 terms:["neurocranium","pterion","cribriform_plate","foramen_ovale","jugular_foramen","sella_turcica"],
 notes:[
  {h:["Two divisions","القسمان"],l:[
   ["<span class='t-key'>Neurocranium</span> = 8 bones: <span class='t-bone'>frontal, 2 parietal, 2 temporal, occipital, sphenoid, ethmoid</span>.","<span class='t-key'>Neurocranium</span> = 8 عظام: <span class='t-bone'>الجبهي، جداريان، صدغيان، القذالي، الوتدي، الغربالي</span>."],
   ["<span class='t-key'>Viscerocranium</span> (facial skeleton) = 14 bones: 2 maxillae, 2 zygomatic, 2 nasal, 2 lacrimal, 2 palatine, 2 inferior conchae, vomer, mandible.","<span class='t-key'>Viscerocranium</span> (الهيكل الوجهي) = 14 عظماً: فكّان علويان، وجنيان، أنفيان، دمعيان، حنكيان، محارتان سفليتان، الميكعة، الفك السفلي."],
   ["The mandible and vomer are the only <span class='t-key'>unpaired</span> facial bones.","الفك السفلي والميكعة هما العظمان الوجهيان <span class='t-key'>المفردان</span> الوحيدان."]
  ]},
  {h:["Sutures & fontanelles","الدروز واليوافيخ"],l:[
   ["<span class='t-key'>Coronal</span> (frontal–parietal), <span class='t-key'>sagittal</span> (between parietals), <span class='t-key'>lambdoid</span> (parietal–occipital).","<span class='t-key'>الإكليلي</span> (جبهي–جداري)، <span class='t-key'>السهمي</span> (بين الجداريين)، <span class='t-key'>اللامي</span> (جداري–قذالي)."],
   ["Anterior fontanelle (bregma) closes ~18–24 months; posterior fontanelle (lambda) ~2–3 months.","اليافوخ الأمامي (bregma) ينغلق خلال ~18–24 شهراً؛ والخلفي (lambda) خلال ~2–3 أشهر."],
   ["<span class='t-key'>Pterion</span> = H-shaped junction; thin bone over the <span class='t-artery'>anterior middle meningeal artery</span>.","<span class='t-key'>Pterion</span> = ملتقى على شكل H؛ عظم رقيق يعلو <span class='t-artery'>الفرع الأمامي للشريان السحائي الأوسط</span>."]
  ]},
  {h:["Cranial fossae","الحفر القحفية"],l:[
   ["<span class='t-key'>Anterior fossa</span> — frontal lobes; cribriform plate transmits <span class='t-nerve'>CN I</span>.","<span class='t-key'>الحفرة الأمامية</span> — الفصوص الجبهية؛ الصفيحة المصفوية تنقل <span class='t-nerve'>CN I</span>."],
   ["<span class='t-key'>Middle fossa</span> — temporal lobes; pituitary in the sella turcica.","<span class='t-key'>الحفرة الوسطى</span> — الفصوص الصدغية؛ الغدة النخامية في السرج التركي."],
   ["<span class='t-key'>Posterior fossa</span> — cerebellum & brainstem; foramen magnum.","<span class='t-key'>الحفرة الخلفية</span> — المخيخ وجذع الدماغ؛ الثقبة العظمى."]
  ]},
  {h:["Key foramina & contents","أهم الثقب ومحتوياتها"],l:[
   ["Optic canal — <span class='t-nerve'>CN II</span> + <span class='t-artery'>ophthalmic artery</span>. Superior orbital fissure — <span class='t-nerve'>CN III, IV, V1, VI</span>.","القناة البصرية — <span class='t-nerve'>CN II</span> + <span class='t-artery'>الشريان العيني</span>. الشقّ الحجاجي العلوي — <span class='t-nerve'>CN III, IV, V1, VI</span>."],
   ["Foramen rotundum — <span class='t-nerve'>V2</span>; foramen ovale — <span class='t-nerve'>V3</span>; foramen spinosum — <span class='t-artery'>middle meningeal artery</span>.","الثقبة المدوّرة — <span class='t-nerve'>V2</span>؛ البيضية — <span class='t-nerve'>V3</span>؛ الشوكية — <span class='t-artery'>الشريان السحائي الأوسط</span>."],
   ["Internal acoustic meatus — <span class='t-nerve'>CN VII & VIII</span>. Jugular foramen — <span class='t-nerve'>CN IX, X, XI</span> + <span class='t-vein'>IJV</span>. Hypoglossal canal — <span class='t-nerve'>CN XII</span>.","الصماخ السمعي الباطن — <span class='t-nerve'>CN VII وVIII</span>. الثقبة الوداجية — <span class='t-nerve'>CN IX, X, XI</span> + <span class='t-vein'>الوريد الوداجي الباطن</span>. قناة تحت اللسان — <span class='t-nerve'>CN XII</span>."]
  ]}
 ],
 flash:[
  {q:["How many bones form the neurocranium vs the facial skeleton?","كم عظماً يكوّن القحف العصبي مقابل الهيكل الوجهي؟"],a:["<span class='t-bone'>8</span> neurocranium + <span class='t-bone'>14</span> facial = 22.","<span class='t-bone'>8</span> للقحف العصبي + <span class='t-bone'>14</span> وجهية = 22."]},
  {q:["Which structure is at risk with a pterion fracture?","أي تركيب يتعرّض للخطر عند كسر الـ pterion؟"],a:["The <span class='t-artery'>anterior branch of the middle meningeal artery</span> → extradural haematoma.","<span class='t-artery'>الفرع الأمامي للشريان السحائي الأوسط</span> ← ورم دموي فوق الجافية."]},
  {q:["What passes through the superior orbital fissure?","ماذا يمرّ عبر الشقّ الحجاجي العلوي؟"],a:["<span class='t-nerve'>CN III, IV, V1 and VI</span> + <span class='t-vein'>ophthalmic veins</span>.","<span class='t-nerve'>CN III وIV وV1 وVI</span> + <span class='t-vein'>الأوردة العينية</span>."]},
  {q:["Which nerves exit the jugular foramen?","أي أعصاب تخرج من الثقبة الوداجية؟"],a:["<span class='t-nerve'>CN IX, X and XI</span> with the <span class='t-vein'>internal jugular vein</span>.","<span class='t-nerve'>CN IX وX وXI</span> مع <span class='t-vein'>الوريد الوداجي الباطن</span>."]},
  {q:["Which nerve passes through foramen ovale?","أي عصب يمرّ عبر الثقبة البيضية؟"],a:["<span class='t-nerve'>CN V3</span> (mandibular). Foramen rotundum carries V2.","<span class='t-nerve'>CN V3</span> (الفكية السفلية). والثقبة المدوّرة تنقل V2."]},
  {q:["Name the two unpaired facial bones.","اذكر العظمين الوجهيين المفردين."],a:["The <span class='t-bone'>mandible</span> and the <span class='t-bone'>vomer</span>.","<span class='t-bone'>الفك السفلي</span> و<span class='t-bone'>الميكعة (vomer)</span>."]}
 ],
 quiz:[
  {q:["The cribriform plate of the ethmoid transmits which cranial nerve?","الصفيحة المصفوية للغربالي تنقل أي عصب قحفي؟"],o:[["Optic (II)","البصري (II)"],["Olfactory (I)","الشمّي (I)"],["Trochlear (IV)","البكري (IV)"],["Abducens (VI)","المبعّد (VI)"]],a:1,e:["Olfactory nerve filaments (CN I) pass through the cribriform plate; the optic nerve uses the optic canal.","خيوط العصب الشمّي (CN I) تمرّ عبر الصفيحة المصفوية؛ أما العصب البصري فيمرّ في القناة البصرية."]},
  {q:["A fracture at the pterion most endangers which vessel?","كسر الـ pterion يهدّد أي وعاء أكثر؟"],o:[["Superficial temporal artery","الشريان الصدغي السطحي"],["Middle meningeal artery","الشريان السحائي الأوسط"],["Facial artery","الشريان الوجهي"],["Maxillary vein","الوريد الفكّي"]],a:1,e:["The pterion overlies the anterior division of the middle meningeal artery — a classic cause of extradural haematoma.","يعلو الـ pterion الفرعَ الأمامي للشريان السحائي الأوسط — سبب كلاسيكي للورم الدموي فوق الجافية."]},
  {q:["Which foramen transmits the maxillary division (V2)?","أي ثقبة تنقل الشعبة الفكية العلوية (V2)؟"],o:[["Foramen ovale","الثقبة البيضية"],["Foramen spinosum","الثقبة الشوكية"],["Foramen rotundum","الثقبة المدوّرة"],["Foramen lacerum","الثقبة الممزّقة"]],a:2,e:["V2 → foramen rotundum. V3 → foramen ovale; the middle meningeal artery → foramen spinosum.","V2 ← الثقبة المدوّرة. وV3 ← البيضية؛ والشريان السحائي الأوسط ← الشوكية."]},
  {q:["Which bone does NOT contribute to the neurocranium?","أي عظم لا يشارك في القحف العصبي؟"],o:[["Sphenoid","الوتدي"],["Ethmoid","الغربالي"],["Maxilla","الفك العلوي"],["Occipital","القذالي"]],a:2,e:["The maxilla is a facial bone. Sphenoid, ethmoid and occipital are neurocranial.","الفك العلوي عظم وجهي. أما الوتدي والغربالي والقذالي فقحفية عصبية."]},
  {q:["The internal acoustic meatus transmits which pair of nerves?","الصماخ السمعي الباطن ينقل أي زوج من الأعصاب؟"],o:[["IX and X","IX وX"],["VII and VIII","VII وVIII"],["V and VII","V وVII"],["III and IV","III وIV"]],a:1,e:["CN VII (facial) and CN VIII (vestibulocochlear) enter the internal acoustic meatus.","العصبان VII (الوجهي) وVIII (الدهليزي القوقعي) يدخلان الصماخ السمعي الباطن."]},
  {q:["Which fossa houses the cerebellum and brainstem?","أي حفرة تحوي المخيخ وجذع الدماغ؟"],o:[["Anterior","الأمامية"],["Middle","الوسطى"],["Posterior","الخلفية"],["Pterygopalatine","الجناحية الحنكية"]],a:2,e:["The posterior cranial fossa contains the cerebellum and brainstem.","الحفرة القحفية الخلفية تحوي المخيخ وجذع الدماغ."]}
 ]},

scalp:{title:["Scalp & Muscles of the Face","الفروة وعضلات الوجه"],sub:["Layers, blood supply and facial expression","الطبقات والتروية الدموية وتعابير الوجه"],color:"--muscle",
 terms:["galea","danger_area","cn7","buccinator"],
 notes:[
  {h:["Layers of the scalp (SCALP)","طبقات الفروة (SCALP)"],l:[
   ["<span class='t-key'>S</span>kin · <span class='t-key'>C</span>onnective tissue · <span class='t-key'>A</span>poneurosis (galea) · <span class='t-key'>L</span>oose areolar · <span class='t-key'>P</span>ericranium.","<span class='t-key'>S</span> الجلد · <span class='t-key'>C</span> نسيج ضامّ · <span class='t-key'>A</span> صفاق (galea) · <span class='t-key'>L</span> نسيج رخو · <span class='t-key'>P</span> سمحاق القحف."],
   ["The first three layers move as one unit.","الطبقات الثلاث الأولى تتحرّك كوحدة واحدة."],
   ["The loose areolar layer is the <span class='t-key'>danger area</span> — emissary veins connect it to the dural sinuses.","الطبقة الرخوة هي <span class='t-key'>المنطقة الخطرة</span> — الأوردة الناقلة تصلها بالجيوب الجافوية."]
  ]},
  {h:["Muscle & blood supply","العضلة والتروية"],l:[
   ["<span class='t-muscle'>Occipitofrontalis</span> moves the scalp and wrinkles the forehead.","<span class='t-muscle'>العضلة القذالية الجبهية</span> تحرّك الفروة وتجعّد الجبهة."],
   ["Rich anastomosis: <span class='t-artery'>ECA</span> (superficial temporal, posterior auricular, occipital) + <span class='t-artery'>ICA</span> (supratrochlear, supraorbital).","مفاغرة غنية: <span class='t-artery'>ECA</span> (الصدغي السطحي، الأذني الخلفي، القذالي) + <span class='t-artery'>ICA</span> (فوق البكري، فوق الحجاجي)."],
   ["Scalp wounds bleed heavily — the dense layer holds vessels open.","جروح الفروة تنزف بغزارة — الطبقة الكثيفة تُبقي الأوعية مفتوحة."]
  ]},
  {h:["Muscles of facial expression","عضلات تعابير الوجه"],l:[
   ["All supplied by the <span class='t-nerve'>facial nerve (CN VII)</span>; from the <span class='t-key'>2nd pharyngeal arch</span>.","جميعها يغذّيها <span class='t-nerve'>العصب الوجهي (CN VII)</span>؛ من <span class='t-key'>القوس البلعومي الثاني</span>."],
   ["<span class='t-muscle'>Orbicularis oculi</span> closes the eyelids; <span class='t-muscle'>orbicularis oris</span> closes the lips.","<span class='t-muscle'>الدويرية العينية</span> تغلق الجفنين؛ و<span class='t-muscle'>الدويرية الفموية</span> تغلق الشفتين."],
   ["<span class='t-muscle'>Buccinator</span> compresses the cheek — CN VII, <span class='t-key'>not</span> mastication.","<span class='t-muscle'>البوقية</span> تضغط الخد — CN VII، و<span class='t-key'>ليست</span> من عضلات المضغ."]
  ]},
  {h:["Sensory supply","التغذية الحسّية"],l:[
   ["Anterior scalp: <span class='t-nerve'>trigeminal</span> branches (V1, V2, V3).","الجزء الأمامي: فروع <span class='t-nerve'>العصب مثلث التوائم</span> (V1, V2, V3)."],
   ["Posterior scalp: <span class='t-nerve'>cervical nerves</span> — greater occipital (C2), lesser occipital, greater auricular.","الجزء الخلفي: <span class='t-nerve'>الأعصاب العنقية</span> — القذالي الأكبر (C2)، القذالي الأصغر، الأذني الأكبر."]
  ]}
 ],
 flash:[
  {q:["Give the scalp layers (SCALP).","اذكر طبقات الفروة (SCALP)."],a:["Skin, Connective tissue, Aponeurosis, Loose areolar, Pericranium.","الجلد، نسيج ضامّ، صفاق، نسيج رخو، سمحاق القحف."]},
  {q:["Why is the loose areolar layer the 'danger area'?","لماذا تُعدّ الطبقة الرخوة 'المنطقة الخطرة'؟"],a:["Emissary <span class='t-vein'>veins</span> connect it to the intracranial dural sinuses.","<span class='t-vein'>أوردة</span> ناقلة تصلها بالجيوب الجافوية داخل القحف."]},
  {q:["Which nerve supplies ALL muscles of facial expression?","أي عصب يغذّي كل عضلات تعابير الوجه؟"],a:["The <span class='t-nerve'>facial nerve (CN VII)</span>.","<span class='t-nerve'>العصب الوجهي (CN VII)</span>."]},
  {q:["Is buccinator a muscle of mastication?","هل البوقية من عضلات المضغ؟"],a:["No — it is a facial-expression muscle (<span class='t-nerve'>CN VII</span>).","لا — هي عضلة تعبير وجهي (<span class='t-nerve'>CN VII</span>)."]},
  {q:["Why do scalp lacerations bleed so heavily?","لماذا تنزف تمزّقات الفروة بغزارة؟"],a:["The dense connective layer holds the vessels open, preventing retraction.","الطبقة الضامّة الكثيفة تُبقي الأوعية مفتوحة وتمنع انكماشها."]}
 ],
 quiz:[
  {q:["Which scalp layer is the 'danger area' for infection spread?","أي طبقة هي 'المنطقة الخطرة' لانتشار العدوى؟"],o:[["Skin","الجلد"],["Aponeurosis","الصفاق"],["Loose areolar tissue","النسيج الرخو"],["Pericranium","سمحاق القحف"]],a:2,e:["Emissary veins in the loose areolar layer connect to the dural sinuses.","الأوردة الناقلة في الطبقة الرخوة تتصل بالجيوب الجافوية."]},
  {q:["All muscles of facial expression are supplied by:","كل عضلات تعابير الوجه يغذّيها:"],o:[["Trigeminal (V)","مثلث التوائم (V)"],["Facial (VII)","الوجهي (VII)"],["Glossopharyngeal (IX)","اللساني البلعومي (IX)"],["Accessory (XI)","الإضافي (XI)"]],a:1,e:["CN VII supplies them (2nd pharyngeal arch derivatives).","يغذّيها CN VII (مشتقات القوس البلعومي الثاني)."]},
  {q:["The buccinator is best classified as a muscle of:","تُصنّف البوقية على أنها عضلة:"],o:[["Mastication","المضغ"],["Facial expression","تعبير وجهي"],["The pharynx","البلعوم"],["The soft palate","الحنك الرخو"]],a:1,e:["Buccinator is a facial-expression muscle (CN VII), not a masticatory muscle.","البوقية عضلة تعبير وجهي (CN VII) وليست من عضلات المضغ."]},
  {q:["Which scalp artery is from the internal carotid system?","أي شريان للفروة ينتمي لجهاز السباتي الباطن؟"],o:[["Occipital","القذالي"],["Superficial temporal","الصدغي السطحي"],["Supraorbital","فوق الحجاجي"],["Posterior auricular","الأذني الخلفي"]],a:2,e:["The supraorbital/supratrochlear arteries come from the ophthalmic artery (ICA).","شريانا فوق الحجاج/فوق البكرة من الشريان العيني (فرع السباتي الباطن)."]},
  {q:["The greater occipital nerve arises from:","العصب القذالي الأكبر ينشأ من:"],o:[["V1","V1"],["V2","V2"],["C2","C2"],["C5","C5"]],a:2,e:["It is a branch of the dorsal ramus of C2.","هو فرع من الفرع الظهري لـ C2."]}
 ]},

parotid:{title:["The Parotid Region","المنطقة النكفية"],sub:["Gland, its bed and the structures within it","الغدة وسريرها والتراكيب داخلها"],color:"--vein",
 terms:["parotid_duct","cn7","retromandibular_vein","eca","otic_ganglion","auriculotemporal"],
 notes:[
  {h:["The gland","الغدة"],l:[
   ["Largest salivary gland; <span class='t-key'>serous</span> secretion; tough fibrous capsule.","أكبر غدة لعابية؛ إفراز <span class='t-key'>مصلي</span>؛ محفظة ليفية متينة."],
   ["Lies below the external acoustic meatus, behind the ramus of the mandible.","تقع أسفل الصماخ السمعي الظاهر، خلف الفرع الصاعد للفك السفلي."],
   ["<span class='t-key'>Parotid (Stensen) duct</span> pierces <span class='t-muscle'>buccinator</span> and opens opposite the <span class='t-key'>2nd upper molar</span>.","<span class='t-key'>قناة النكفة (Stensen)</span> تخترق <span class='t-muscle'>البوقية</span> وتفتح مقابل <span class='t-key'>الرحى العلوية الثانية</span>."]
  ]},
  {h:["Structures inside — superficial → deep","التراكيب في الداخل — سطحي ← عميق"],l:[
   ["<span class='t-nerve'>Facial nerve (CN VII)</span> is most superficial — divides the gland and gives 5 branches.","<span class='t-nerve'>العصب الوجهي (CN VII)</span> الأكثر سطحية — يقسم الغدة ويعطي 5 فروع."],
   ["<span class='t-vein'>Retromandibular vein</span> lies in the middle.","<span class='t-vein'>الوريد خلف الفكّي</span> في المنتصف."],
   ["<span class='t-artery'>External carotid artery</span> is deepest — ends as maxillary + superficial temporal.","<span class='t-artery'>الشريان السباتي الظاهر</span> الأعمق — ينتهي كفكّي + صدغي سطحي."],
   ["Mnemonic (superficial→deep): <span class='t-key'>Nerve → Vein → Artery</span>.","تذكّر (سطحي←عميق): <span class='t-key'>عصب ← وريد ← شريان</span>."]
  ]},
  {h:["Nerve supply of the gland","التغذية العصبية للغدة"],l:[
   ["<span class='t-key'>Parasympathetic</span>: <span class='t-nerve'>CN IX</span> → lesser petrosal → <span class='t-key'>otic ganglion</span> → auriculotemporal nerve.","<span class='t-key'>نظير ودّي</span>: <span class='t-nerve'>CN IX</span> ← الصخري الأصغر ← <span class='t-key'>العقدة الأذنية</span> ← العصب الأذني الصدغي."],
   ["<span class='t-key'>Sensory</span>: auriculotemporal (V3) to the gland; great auricular (C2–3) to the capsule/skin.","<span class='t-key'>حسّي</span>: الأذني الصدغي (V3) للغدة؛ والأذني الأكبر (C2–3) للمحفظة/الجلد."]
  ]},
  {h:["Clinical","سريرياً"],l:[
   ["Mumps is painful because the tough capsule resists swelling.","النكاف مؤلم لأن المحفظة المتينة تقاوم التورّم."],
   ["The facial nerve must be identified and preserved in parotid surgery.","يجب تحديد العصب الوجهي والحفاظ عليه في جراحة النكفة."]
  ]}
 ],
 flash:[
  {q:["Where does the parotid duct open?","أين تفتح قناة النكفة؟"],a:["Opposite the <span class='t-key'>2nd upper molar</span>, after piercing buccinator.","مقابل <span class='t-key'>الرحى العلوية الثانية</span>، بعد اختراق البوقية."]},
  {q:["List the parotid contents superficial → deep.","اذكر محتويات النكفة سطحي ← عميق."],a:["<span class='t-nerve'>Facial nerve</span> → <span class='t-vein'>retromandibular vein</span> → <span class='t-artery'>external carotid artery</span>.","<span class='t-nerve'>العصب الوجهي</span> ← <span class='t-vein'>الوريد خلف الفكّي</span> ← <span class='t-artery'>الشريان السباتي الظاهر</span>."]},
  {q:["Trace the parasympathetic supply to the parotid.","تتبّع التغذية نظيرة الودّية للنكفة."],a:["<span class='t-nerve'>CN IX</span> → lesser petrosal → <span class='t-key'>otic ganglion</span> → auriculotemporal.","<span class='t-nerve'>CN IX</span> ← الصخري الأصغر ← <span class='t-key'>العقدة الأذنية</span> ← الأذني الصدغي."]},
  {q:["Which artery terminates within the parotid?","أي شريان ينتهي داخل النكفة؟"],a:["The <span class='t-artery'>external carotid artery</span> (→ maxillary + superficial temporal).","<span class='t-artery'>الشريان السباتي الظاهر</span> (← فكّي + صدغي سطحي)."]},
  {q:["Name the five branches of the facial nerve.","اذكر الفروع الخمسة للعصب الوجهي."],a:["Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical.","الصدغي، الوجني، الشدقي، الفكّي الحافّي، العنقي."]}
 ],
 quiz:[
  {q:["Which structure is MOST superficial within the parotid?","أي تركيب هو الأكثر سطحية داخل النكفة؟"],o:[["External carotid artery","الشريان السباتي الظاهر"],["Retromandibular vein","الوريد خلف الفكّي"],["Facial nerve","العصب الوجهي"],["Auriculotemporal nerve","العصب الأذني الصدغي"]],a:2,e:["Superficial→deep: facial nerve, retromandibular vein, external carotid artery.","سطحي←عميق: العصب الوجهي، الوريد خلف الفكّي، الشريان السباتي الظاهر."]},
  {q:["The parotid duct opens opposite the:","تفتح قناة النكفة مقابل:"],o:[["Lower 1st molar","الرحى السفلية الأولى"],["Upper 2nd molar","الرحى العلوية الثانية"],["Upper canine","الناب العلوي"],["Lower 2nd premolar","الضاحك السفلي الثاني"]],a:1,e:["Stensen's duct pierces buccinator and opens opposite the 2nd upper molar.","قناة Stensen تخترق البوقية وتفتح مقابل الرحى العلوية الثانية."]},
  {q:["Parasympathetic supply to the parotid relays in which ganglion?","التغذية نظيرة الودّية للنكفة تتحوّل في أي عقدة؟"],o:[["Submandibular","تحت الفك"],["Otic","الأذنية"],["Ciliary","الهدبية"],["Pterygopalatine","الجناحية الحنكية"]],a:1,e:["CN IX fibres synapse in the otic ganglion; they reach the gland via the auriculotemporal nerve.","ألياف CN IX تتشابك في العقدة الأذنية وتصل الغدة عبر العصب الأذني الصدغي."]},
  {q:["The external carotid artery terminates in the parotid as:","ينتهي الشريان السباتي الظاهر في النكفة كـ:"],o:[["Facial + lingual","الوجهي + اللساني"],["Maxillary + superficial temporal","الفكّي + الصدغي السطحي"],["Occipital + posterior auricular","القذالي + الأذني الخلفي"],["Ascending pharyngeal + facial","البلعومي الصاعد + الوجهي"]],a:1,e:["The ECA divides into maxillary and superficial temporal arteries.","ينقسم ECA إلى الشريانين الفكّي والصدغي السطحي."]},
  {q:["Which nerve gives sensory supply to the parotid gland itself?","أي عصب يعطي الحس للغدة النكفية نفسها؟"],o:[["Great auricular","الأذني الأكبر"],["Auriculotemporal","الأذني الصدغي"],["Lesser occipital","القذالي الأصغر"],["Buccal branch of VII","الفرع الشدقي لـ VII"]],a:1,e:["The auriculotemporal nerve (V3) carries sensation and secretomotor fibres; the great auricular supplies overlying skin.","العصب الأذني الصدغي (V3) ينقل الحس والألياف الإفرازية؛ والأذني الأكبر يغذّي الجلد فوقها."]}
 ]},

oral:{title:["The Oral Cavity","جوف الفم"],sub:["Vestibule, tongue, palate & innervation","الدهليز واللسان والحنك والتغذية العصبية"],color:"--muscle",
 terms:["genioglossus","chorda_tympani","lingual_nerve","hard_palate","palatine_tonsil"],
 notes:[
  {h:["Boundaries","الحدود"],l:[
   ["<span class='t-key'>Vestibule</span> = slit between lips/cheeks and the teeth.","<span class='t-key'>الدهليز</span> = الشقّ بين الشفتين/الخدين والأسنان."],
   ["<span class='t-key'>Oral cavity proper</span> = inside the dental arches.","<span class='t-key'>جوف الفم الحقيقي</span> = داخل الأقواس السنّية."],
   ["Roof: <span class='t-bone'>hard palate</span> (maxilla + palatine bone) + soft palate.","السقف: <span class='t-bone'>الحنك الصلب</span> (الفك العلوي + العظم الحنكي) + الحنك الرخو."]
  ]},
  {h:["The tongue — muscles","اللسان — العضلات"],l:[
   ["<span class='t-key'>Extrinsic</span>: genioglossus, hyoglossus, styloglossus, palatoglossus.","<span class='t-key'>الخارجية</span>: genioglossus، hyoglossus، styloglossus، palatoglossus."],
   ["Motor: <span class='t-nerve'>hypoglossal (CN XII)</span> to all <span class='t-key'>except palatoglossus</span> (vagus, X).","الحركة: <span class='t-nerve'>تحت اللسان (CN XII)</span> للكل <span class='t-key'>عدا palatoglossus</span> (المبهم، X)."]
  ]},
  {h:["Tongue — sensory (learn the split!)","اللسان — الحس (احفظ التقسيم!)"],l:[
   ["<span class='t-key'>Anterior ⅔</span>: general = <span class='t-nerve'>lingual nerve (V3)</span>; taste = <span class='t-nerve'>chorda tympani (VII)</span>.","<span class='t-key'>الثلثان الأماميان</span>: عام = <span class='t-nerve'>اللساني (V3)</span>؛ تذوّق = <span class='t-nerve'>حبل الطبل (VII)</span>."],
   ["<span class='t-key'>Posterior ⅓</span>: general + taste = <span class='t-nerve'>glossopharyngeal (IX)</span>.","<span class='t-key'>الثلث الخلفي</span>: عام + تذوّق = <span class='t-nerve'>اللساني البلعومي (IX)</span>."],
   ["Root/vallecula: <span class='t-nerve'>vagus (X)</span>.","الجذر/الوهدة: <span class='t-nerve'>المبهم (X)</span>."]
  ]},
  {h:["Vessels, glands & tonsils","الأوعية والغدد واللوز"],l:[
   ["Blood supply: <span class='t-artery'>lingual artery</span> (branch of ECA).","التروية: <span class='t-artery'>الشريان اللساني</span> (فرع من ECA)."],
   ["<span class='t-key'>Palatine tonsils</span> between palatoglossal & palatopharyngeal arches.","<span class='t-key'>اللوزتان الحنكيتان</span> بين القوسين الحنكي اللساني والحنكي البلعومي."]
  ]}
 ],
 flash:[
  {q:["Motor supply to the tongue muscles?","التغذية الحركية لعضلات اللسان؟"],a:["<span class='t-nerve'>Hypoglossal (XII)</span> — all except palatoglossus (<span class='t-nerve'>X</span>).","<span class='t-nerve'>تحت اللسان (XII)</span> — الكل عدا palatoglossus (<span class='t-nerve'>X</span>)."]},
  {q:["Anterior ⅔: general vs taste?","الثلثان الأماميان: عام مقابل تذوّق؟"],a:["General = <span class='t-nerve'>lingual (V3)</span>; taste = <span class='t-nerve'>chorda tympani (VII)</span>.","عام = <span class='t-nerve'>اللساني (V3)</span>؛ تذوّق = <span class='t-nerve'>حبل الطبل (VII)</span>."]},
  {q:["Posterior ⅓ innervation?","تغذية الثلث الخلفي؟"],a:["Both general and taste from <span class='t-nerve'>glossopharyngeal (IX)</span>.","العام والتذوّق معاً من <span class='t-nerve'>اللساني البلعومي (IX)</span>."]},
  {q:["Which bones form the hard palate?","أي عظمين يكوّنان الحنك الصلب؟"],a:["<span class='t-bone'>Palatine process of maxilla</span> + <span class='t-bone'>horizontal plate of palatine bone</span>.","<span class='t-bone'>الناتئ الحنكي للفك العلوي</span> + <span class='t-bone'>الصفيحة الأفقية للعظم الحنكي</span>."]},
  {q:["Which muscle protrudes the tongue?","أي عضلة تُبرز اللسان؟"],a:["<span class='t-muscle'>Genioglossus</span> — XII lesion → deviation toward the weak side.","<span class='t-muscle'>Genioglossus</span> — إصابة XII ← انحراف نحو الجهة الضعيفة."]}
 ],
 quiz:[
  {q:["Taste from the anterior two-thirds is carried by:","التذوّق من الثلثين الأماميين ينقله:"],o:[["Lingual nerve (V3)","اللساني (V3)"],["Chorda tympani (VII)","حبل الطبل (VII)"],["Glossopharyngeal (IX)","اللساني البلعومي (IX)"],["Hypoglossal (XII)","تحت اللسان (XII)"]],a:1,e:["Taste (anterior ⅔) = chorda tympani (VII); general sensation there = lingual nerve (V3).","التذوّق (الثلثان الأماميان) = حبل الطبل (VII)؛ والحس العام هناك = اللساني (V3)."]},
  {q:["All tongue muscles are CN XII EXCEPT:","كل عضلات اللسان CN XII عدا:"],o:[["Genioglossus","Genioglossus"],["Hyoglossus","Hyoglossus"],["Palatoglossus","Palatoglossus"],["Styloglossus","Styloglossus"]],a:2,e:["Palatoglossus is supplied by the vagus (X) via the pharyngeal plexus.","palatoglossus يغذّيها المبهم (X) عبر الضفيرة البلعومية."]},
  {q:["Both general sensation and taste for the posterior third come from:","الحس العام والتذوّق للثلث الخلفي من:"],o:[["Facial","الوجهي"],["Glossopharyngeal","اللساني البلعومي"],["Vagus","المبهم"],["Trigeminal","مثلث التوائم"]],a:1,e:["The glossopharyngeal nerve (IX) supplies both modalities for the posterior third.","اللساني البلعومي (IX) يغذّي كلا النمطين للثلث الخلفي."]},
  {q:["With a right hypoglossal lesion, the tongue on protrusion deviates:","مع إصابة تحت اللسان اليمنى، ينحرف اللسان عند الإبراز:"],o:[["To the left","لليسار"],["To the right","لليمين"],["Straight","مستقيماً"],["Upward","للأعلى"]],a:1,e:["Genioglossus protrudes the tongue; the intact side pushes it toward the weak (right) side.","genioglossus يُبرز اللسان؛ والجهة السليمة تدفعه نحو الجهة الضعيفة (اليمنى)."]},
  {q:["The palatine tonsil lies between which arches?","تقع اللوزة الحنكية بين أي قوسين؟"],o:[["Palatoglossal & palatopharyngeal","الحنكي اللساني والحنكي البلعومي"],["Palatopharyngeal & salpingopharyngeal","الحنكي البلعومي والبوقي البلعومي"],["Two palatoglossal","حنكيين لسانيين"],["Anterior & posterior nasal","أنفيين أمامي وخلفي"]],a:0,e:["It occupies the fossa between the palatoglossal (anterior) and palatopharyngeal (posterior) arches.","تشغل الحفرة بين القوس الحنكي اللساني (الأمامي) والحنكي البلعومي (الخلفي)."]}
 ]},

sinuses:{title:["Cranial Venous Sinuses","الجيوب الوريدية القحفية"],sub:["Dural venous sinuses & the cavernous sinus","الجيوب الوريدية الجافوية والجيب الكهفي"],color:"--vein",
 terms:["superior_sagittal","straight_sinus","confluence","cavernous_sinus","sup_ophthalmic"],
 notes:[
  {h:["What & where","ما هي وأين"],l:[
   ["<span class='t-key'>Dural venous sinuses</span> lie between the periosteal and meningeal dura; they have <span class='t-key'>no valves</span>.","<span class='t-key'>الجيوب الوريدية الجافوية</span> بين الجافية السمحاقية والسحائية؛ <span class='t-key'>بلا صمّامات</span>."],
   ["They drain the brain, orbit, skull and meninges into the <span class='t-vein'>internal jugular vein</span>.","تصرف الدماغ والحجاج والقحف والسحايا إلى <span class='t-vein'>الوريد الوداجي الباطن</span>."]
  ]},
  {h:["Midline drainage chain","سلسلة التصريف الأوسط"],l:[
   ["<span class='t-vein'>Superior sagittal sinus</span> → confluence.","<span class='t-vein'>الجيب السهمي العلوي</span> ← ملتقى الجيوب."],
   ["<span class='t-vein'>Inferior sagittal sinus</span> + great cerebral vein (Galen) → <span class='t-vein'>straight sinus</span> → confluence.","<span class='t-vein'>الجيب السهمي السفلي</span> + الوريد المخي الكبير (Galen) ← <span class='t-vein'>الجيب المستقيم</span> ← الملتقى."],
   ["Confluence → <span class='t-vein'>transverse</span> → <span class='t-vein'>sigmoid</span> → internal jugular vein.","الملتقى ← <span class='t-vein'>المستعرض</span> ← <span class='t-vein'>السيني</span> ← الوريد الوداجي الباطن."]
  ]},
  {h:["The cavernous sinus (high-yield)","الجيب الكهفي (مهمّ جداً)"],l:[
   ["<span class='t-key'>Through the sinus:</span> <span class='t-artery'>internal carotid artery</span> + <span class='t-nerve'>CN VI</span>.","<span class='t-key'>خلال الجيب:</span> <span class='t-artery'>الشريان السباتي الباطن</span> + <span class='t-nerve'>CN VI</span>."],
   ["<span class='t-key'>In the lateral wall</span> (top→bottom): <span class='t-nerve'>CN III, IV, V1, V2</span>.","<span class='t-key'>في الجدار الجانبي</span> (أعلى←أسفل): <span class='t-nerve'>CN III, IV, V1, V2</span>."],
   ["Drains via <span class='t-vein'>superior & inferior petrosal sinuses</span>.","يصرف عبر <span class='t-vein'>الجيبين الصخريين العلوي والسفلي</span>."]
  ]},
  {h:["Clinical connections","روابط سريرية"],l:[
   ["Communicates with the facial vein via the <span class='t-vein'>superior ophthalmic vein</span> — danger triangle infection → cavernous sinus thrombosis.","يتّصل بالوريد الوجهي عبر <span class='t-vein'>الوريد العيني العلوي</span> — عدوى مثلث الخطر ← خثار الجيب الكهفي."],
   ["<span class='t-nerve'>CN VI</span> runs free in the sinus, so it is often affected first.","<span class='t-nerve'>CN VI</span> يجري حرّاً في الجيب، لذا يُصاب غالباً أولاً."]
  ]}
 ],
 flash:[
  {q:["Which two structures pass THROUGH the cavernous sinus?","أي تركيبين يمرّان خلال الجيب الكهفي؟"],a:["The <span class='t-artery'>internal carotid artery</span> and the <span class='t-nerve'>abducens nerve (VI)</span>.","<span class='t-artery'>الشريان السباتي الباطن</span> و<span class='t-nerve'>العصب المبعّد (VI)</span>."]},
  {q:["Which nerves lie in the lateral wall (top to bottom)?","أي أعصاب في الجدار الجانبي (أعلى لأسفل)؟"],a:["<span class='t-nerve'>CN III, IV, V1, V2</span>.","<span class='t-nerve'>CN III, IV, V1, V2</span>."]},
  {q:["What forms the straight sinus?","ما الذي يكوّن الجيب المستقيم؟"],a:["<span class='t-vein'>Inferior sagittal sinus</span> + <span class='t-vein'>great cerebral vein (Galen)</span>.","<span class='t-vein'>الجيب السهمي السفلي</span> + <span class='t-vein'>الوريد المخي الكبير (Galen)</span>."]},
  {q:["Trace outflow from the confluence.","تتبّع التصريف من الملتقى."],a:["Confluence → <span class='t-vein'>transverse</span> → <span class='t-vein'>sigmoid</span> → IJV.","الملتقى ← <span class='t-vein'>المستعرض</span> ← <span class='t-vein'>السيني</span> ← الوداجي الباطن."]},
  {q:["How can facial infection reach the cavernous sinus?","كيف تصل عدوى الوجه للجيب الكهفي؟"],a:["Via the valveless <span class='t-vein'>superior ophthalmic vein</span> → cavernous sinus thrombosis.","عبر <span class='t-vein'>الوريد العيني العلوي</span> عديم الصمّامات ← خثار الجيب الكهفي."]}
 ],
 quiz:[
  {q:["Which structures run THROUGH the cavernous sinus?","أي تراكيب تمرّ خلال الجيب الكهفي؟"],o:[["CN III and IV","CN III وIV"],["Internal carotid artery and CN VI","الشريان السباتي الباطن وCN VI"],["CN V1 and V2","CN V1 وV2"],["Superior ophthalmic vein and CN III","الوريد العيني العلوي وCN III"]],a:1,e:["ICA and CN VI traverse the sinus; III, IV, V1, V2 lie in the lateral wall.","الشريان السباتي الباطن وCN VI يعبران الجيب؛ وتقع III وIV وV1 وV2 في الجدار الجانبي."]},
  {q:["The straight sinus is formed by the inferior sagittal sinus and the:","يتكوّن الجيب المستقيم من الجيب السهمي السفلي و:"],o:[["Superior sagittal sinus","الجيب السهمي العلوي"],["Great cerebral vein of Galen","الوريد المخي الكبير Galen"],["Transverse sinus","الجيب المستعرض"],["Superior petrosal sinus","الجيب الصخري العلوي"]],a:1,e:["Inferior sagittal sinus + great cerebral vein → straight sinus → confluence.","السهمي السفلي + الوريد المخي الكبير ← المستقيم ← الملتقى."]},
  {q:["Dural venous sinuses ultimately drain into the:","تصبّ الجيوب الجافوية في النهاية في:"],o:[["External jugular vein","الوداجي الظاهر"],["Internal jugular vein","الوداجي الباطن"],["Vertebral vein","الفقري"],["Subclavian vein","تحت الترقوة"]],a:1,e:["The sigmoid sinus continues as the internal jugular vein.","يستمرّ الجيب السيني كالوريد الوداجي الباطن."]},
  {q:["Which nerve is often affected FIRST in cavernous sinus thrombosis?","أي عصب يُصاب غالباً أولاً في خثار الجيب الكهفي؟"],o:[["CN III","CN III"],["CN IV","CN IV"],["CN VI","CN VI"],["CN V2","CN V2"]],a:2,e:["CN VI runs free within the sinus beside the ICA, so it is frequently first involved.","CN VI يجري حرّاً داخل الجيب بجوار الشريان السباتي، فيُصاب غالباً أولاً."]},
  {q:["The superior sagittal sinus lies within:","يقع الجيب السهمي العلوي داخل:"],o:[["Free margin of the falx","الحافة الحرّة للمنجل"],["Attached margin of the falx","الحافة المثبّتة للمنجل"],["Tentorium cerebelli","خيمة المخيخ"],["Diaphragma sellae","حجاب السرج"]],a:1,e:["It runs in the attached superior margin of the falx; the inferior sagittal sinus is in the free margin.","يجري في الحافة العلوية المثبّتة للمنجل؛ والجيب السهمي السفلي في الحافة الحرّة."]}
 ]},

/* ===================== MODULE 2 ===================== */
neck:{title:["The Neck","العنق"],sub:["Fascia, triangles and the carotid sheath","اللفافات والمثلثات والغمد السباتي"],color:"--artery",
 terms:["carotid_sheath","posterior_triangle","cn11","phrenic","cervical_plexus"],
 notes:[
  {h:["Cervical fascia","اللفافة العنقية"],l:[
   ["Superficial fascia holds the <span class='t-muscle'>platysma</span> (CN VII).","اللفافة السطحية تحوي <span class='t-muscle'>العضلة الجلدية (platysma)</span> (CN VII)."],
   ["Deep layers: <span class='t-key'>investing, pretracheal, prevertebral</span>, and the <span class='t-key'>carotid sheath</span>.","الطبقات العميقة: <span class='t-key'>المحيطة، أمام الرغامية، أمام الفقرية</span>، و<span class='t-key'>الغمد السباتي</span>."]
  ]},
  {h:["Carotid sheath contents","محتويات الغمد السباتي"],l:[
   ["<span class='t-artery'>Common/internal carotid artery</span>, <span class='t-vein'>internal jugular vein</span>, <span class='t-nerve'>vagus nerve (X)</span>.","<span class='t-artery'>الشريان السباتي المشترك/الباطن</span>، <span class='t-vein'>الوريد الوداجي الباطن</span>، <span class='t-nerve'>العصب المبهم (X)</span>."]
  ]},
  {h:["Anterior triangle","المثلث الأمامي"],l:[
   ["Boundaries: midline, mandible, anterior border of SCM.","الحدود: الخط الأوسط، الفك السفلي، الحافة الأمامية للـ SCM."],
   ["Subdivisions: <span class='t-key'>submental, submandibular, carotid, muscular</span>.","التقسيمات: <span class='t-key'>تحت الذقن، تحت الفك، السباتي، العضلي</span>."],
   ["Carotid bifurcation at ~C3–4 lies in the carotid triangle.","تشعّب السباتي عند ~C3–4 يقع في المثلث السباتي."]
  ]},
  {h:["Posterior triangle & innervation","المثلث الخلفي والتغذية"],l:[
   ["Boundaries: SCM, trapezius, middle ⅓ of clavicle; contains the <span class='t-nerve'>accessory nerve (XI)</span>.","الحدود: SCM، شبه المنحرفة، الثلث الأوسط للترقوة؛ يحوي <span class='t-nerve'>العصب الإضافي (XI)</span>."],
   ["<span class='t-muscle'>SCM & trapezius</span> = motor <span class='t-nerve'>CN XI</span> (proprioception C2–4).","<span class='t-muscle'>SCM وشبه المنحرفة</span> = حركي <span class='t-nerve'>CN XI</span> (الحس العميق C2–4)."],
   ["<span class='t-key'>Cervical plexus (C1–4)</span>: ansa cervicalis, <span class='t-nerve'>phrenic nerve (C3–5)</span>, cutaneous branches.","<span class='t-key'>الضفيرة العنقية (C1–4)</span>: العروة العنقية، <span class='t-nerve'>العصب الحجابي (C3–5)</span>، فروع جلدية."]
  ]}
 ],
 flash:[
  {q:["Three contents of the carotid sheath?","محتويات الغمد السباتي الثلاثة؟"],a:["<span class='t-artery'>Carotid artery</span>, <span class='t-vein'>internal jugular vein</span>, <span class='t-nerve'>vagus (X)</span>.","<span class='t-artery'>الشريان السباتي</span>، <span class='t-vein'>الوريد الوداجي الباطن</span>، <span class='t-nerve'>المبهم (X)</span>."]},
  {q:["Which nerve motor-supplies SCM and trapezius?","أي عصب يغذّي حركياً SCM وشبه المنحرفة؟"],a:["The <span class='t-nerve'>accessory nerve (XI)</span>; C2–4 for proprioception.","<span class='t-nerve'>العصب الإضافي (XI)</span>؛ وC2–4 للحس العميق."]},
  {q:["Boundaries of the posterior triangle?","حدود المثلث الخلفي؟"],a:["Posterior SCM, anterior trapezius, middle ⅓ of the clavicle.","الحافة الخلفية للـ SCM، الأمامية لشبه المنحرفة، الثلث الأوسط للترقوة."]},
  {q:["Which nerve is C3–C5 to the diaphragm?","أي عصب C3–C5 للحجاب الحاجز؟"],a:["The <span class='t-nerve'>phrenic nerve</span> — 'C3,4,5 keeps the diaphragm alive.'","<span class='t-nerve'>العصب الحجابي</span> — 'C3,4,5 يبقي الحجاب حيّاً.'"]},
  {q:["Where does the common carotid bifurcate?","أين يتشعّب السباتي المشترك؟"],a:["At the upper border of the thyroid cartilage (~C3–4).","عند الحافة العليا للغضروف الدرقي (~C3–4)."]}
 ],
 quiz:[
  {q:["Which is NOT within the carotid sheath?","أي مما يلي ليس داخل الغمد السباتي؟"],o:[["Internal jugular vein","الوريد الوداجي الباطن"],["Vagus nerve","العصب المبهم"],["Common carotid artery","الشريان السباتي المشترك"],["Phrenic nerve","العصب الحجابي"]],a:3,e:["The sheath holds the carotid, IJV and vagus; the phrenic lies on scalenus anterior, outside it.","يحوي الغمد السباتي والوداجي الباطن والمبهم؛ والحجابي على الأخمعية الأمامية خارجه."]},
  {q:["The accessory nerve (XI) supplies:","العصب الإضافي (XI) يغذّي:"],o:[["SCM and trapezius","SCM وشبه المنحرفة"],["Platysma and buccinator","الجلدية والبوقية"],["Scalenes and longus colli","الأخمعية وطويلة العنق"],["Digastric and mylohyoid","ذات البطنين واللامية الفكية"]],a:0,e:["CN XI provides motor supply to SCM and trapezius.","يغذّي CN XI حركياً SCM وشبه المنحرفة."]},
  {q:["The phrenic nerve arises mainly from:","ينشأ العصب الحجابي أساساً من:"],o:[["C1–C2","C1–C2"],["C3–C5","C3–C5"],["C5–C7","C5–C7"],["T1–T2","T1–T2"]],a:1,e:["Phrenic nerve = C3, C4, C5; supplies the diaphragm.","العصب الحجابي = C3, C4, C5؛ يغذّي الحجاب الحاجز."]},
  {q:["Which muscle separates the anterior and posterior triangles?","أي عضلة تفصل المثلثين الأمامي والخلفي؟"],o:[["Trapezius","شبه المنحرفة"],["Omohyoid","الكتفية اللامية"],["Sternocleidomastoid","القترائية (SCM)"],["Digastric","ذات البطنين"]],a:2,e:["SCM separates the anterior (front) from the posterior (back) triangle.","تفصل SCM المثلث الأمامي عن الخلفي."]},
  {q:["The carotid triangle is a subdivision of the:","المثلث السباتي أحد تقسيمات:"],o:[["Posterior triangle","المثلث الخلفي"],["Anterior triangle","المثلث الأمامي"],["Submandibular region only","منطقة تحت الفك فقط"],["Occipital triangle","المثلث القذالي"]],a:1,e:["The carotid, muscular, submandibular and submental triangles are subdivisions of the anterior triangle.","السباتي والعضلي وتحت الفك وتحت الذقن كلها تقسيمات للمثلث الأمامي."]}
 ]},

pharynx:{title:["The Pharynx","البلعوم"],sub:["Constrictors, longitudinal muscles & innervation","العضلات العاصرة والطولية والتغذية العصبية"],color:"--muscle",
 terms:["stylopharyngeus","constrictors","pharyngeal_plexus","killian","waldeyer"],
 notes:[
  {h:["Overview","نظرة عامة"],l:[
   ["Muscular tube from the skull base to <span class='t-key'>C6</span>, where it becomes the oesophagus.","أنبوب عضلي من قاعدة الجمجمة إلى <span class='t-key'>C6</span> حيث يصبح المريء."],
   ["Three parts: <span class='t-key'>nasopharynx, oropharynx, laryngopharynx</span>.","ثلاثة أجزاء: <span class='t-key'>الأنفي، الفموي، الحنجري</span>."]
  ]},
  {h:["Muscles","العضلات"],l:[
   ["<span class='t-key'>Constrictors</span> (superior, middle, inferior): all <span class='t-nerve'>vagus (X)</span>.","<span class='t-key'>العاصرات</span> (علوية، وسطى، سفلية): كلها <span class='t-nerve'>المبهم (X)</span>."],
   ["<span class='t-key'>Longitudinal</span>: <span class='t-muscle'>stylopharyngeus</span>, palatopharyngeus, salpingopharyngeus — elevate the pharynx.","<span class='t-key'>الطولية</span>: <span class='t-muscle'>stylopharyngeus</span>، palatopharyngeus، salpingopharyngeus — ترفع البلعوم."],
   ["<span class='t-key'>Only stylopharyngeus</span> = <span class='t-nerve'>glossopharyngeal (IX)</span>; the rest = vagus (X).","<span class='t-key'>stylopharyngeus فقط</span> = <span class='t-nerve'>اللساني البلعومي (IX)</span>؛ والبقية = المبهم (X)."]
  ]},
  {h:["Innervation summary","خلاصة التغذية"],l:[
   ["Motor: <span class='t-nerve'>vagus (X)</span> to all except stylopharyngeus (<span class='t-nerve'>IX</span>).","الحركة: <span class='t-nerve'>المبهم (X)</span> للكل عدا stylopharyngeus (<span class='t-nerve'>IX</span>)."],
   ["Sensory: nasopharynx = <span class='t-nerve'>V2</span>; oropharynx = <span class='t-nerve'>IX</span>; laryngopharynx = <span class='t-nerve'>X</span>.","الحس: الأنفي = <span class='t-nerve'>V2</span>؛ الفموي = <span class='t-nerve'>IX</span>؛ الحنجري = <span class='t-nerve'>X</span>."]
  ]},
  {h:["Waldeyer's ring & clinical","حلقة فالداير وسريرياً"],l:[
   ["Lymphoid ring: <span class='t-key'>pharyngeal (adenoid), tubal, palatine, lingual</span> tonsils.","حلقة لمفاوية: اللوز <span class='t-key'>البلعومي (الناميات)، الأنبوبي، الحنكي، اللساني</span>."],
   ["<span class='t-key'>Killian's dehiscence</span> → pharyngeal pouch (Zenker's).","<span class='t-key'>فرجة كيليان</span> ← جيب بلعومي (Zenker)."]
  ]}
 ],
 flash:[
  {q:["Which pharyngeal muscle is supplied by CN IX?","أي عضلة بلعومية يغذّيها CN IX؟"],a:["<span class='t-muscle'>Stylopharyngeus</span> — the only one; the rest are <span class='t-nerve'>vagus (X)</span>.","<span class='t-muscle'>Stylopharyngeus</span> — الوحيدة؛ والبقية <span class='t-nerve'>المبهم (X)</span>."]},
  {q:["Where does the pharynx become the oesophagus?","أين يصبح البلعوم مريئاً؟"],a:["At the lower border of <span class='t-key'>C6</span> (cricoid level).","عند الحافة السفلية لـ <span class='t-key'>C6</span> (مستوى الغضروف الحلقي)."]},
  {q:["Sensory supply of the oropharynx?","التغذية الحسّية للبلعوم الفموي؟"],a:["The <span class='t-nerve'>glossopharyngeal (IX)</span> — afferent limb of the gag reflex.","<span class='t-nerve'>اللساني البلعومي (IX)</span> — الذراع الواردة لمنعكس الغثيان."]},
  {q:["What is Killian's dehiscence?","ما فرجة كيليان؟"],a:["Weak gap between thyropharyngeus & cricopharyngeus → pharyngeal pouch.","فجوة ضعيفة بين thyropharyngeus وcricopharyngeus ← جيب بلعومي."]},
  {q:["Name the tonsils of Waldeyer's ring.","اذكر لوز حلقة فالداير."],a:["Pharyngeal (adenoid), tubal, palatine, lingual.","البلعومي (الناميات)، الأنبوبي، الحنكي، اللساني."]}
 ],
 quiz:[
  {q:["Which is the ONLY pharyngeal muscle supplied by IX?","أي عضلة بلعومية الوحيدة التي يغذّيها IX؟"],o:[["Palatopharyngeus","Palatopharyngeus"],["Salpingopharyngeus","Salpingopharyngeus"],["Stylopharyngeus","Stylopharyngeus"],["Superior constrictor","العاصرة العلوية"]],a:2,e:["Stylopharyngeus is CN IX; all others are vagus (X).","stylopharyngeus هي CN IX؛ والبقية المبهم (X)."]},
  {q:["The afferent limb of the gag reflex is:","الذراع الواردة لمنعكس الغثيان هي:"],o:[["Trigeminal (V)","مثلث التوائم (V)"],["Facial (VII)","الوجهي (VII)"],["Glossopharyngeal (IX)","اللساني البلعومي (IX)"],["Vagus (X)","المبهم (X)"]],a:2,e:["CN IX is the afferent (sensory) limb; CN X is the efferent (motor) limb.","CN IX هو الذراع الوارد (الحسّي)؛ وCN X هو الصادر (الحركي)."]},
  {q:["The pharynx becomes the oesophagus at the level of:","يصبح البلعوم مريئاً عند مستوى:"],o:[["C3","C3"],["C4","C4"],["C6","C6"],["T1","T1"]],a:2,e:["At the lower border of C6 (cricoid level).","عند الحافة السفلية لـ C6 (مستوى الغضروف الحلقي)."]},
  {q:["A pharyngeal pouch herniates through:","ينفتق الجيب البلعومي عبر:"],o:[["The piriform fossa","الحفرة الكمثرية"],["Killian's dehiscence","فرجة كيليان"],["The thyrohyoid membrane","الغشاء الدرقي اللامي"],["The vallecula","الوهدة"]],a:1,e:["Killian's dehiscence between thyropharyngeus and cricopharyngeus is the weak point.","فرجة كيليان بين thyropharyngeus وcricopharyngeus هي نقطة الضعف."]},
  {q:["Motor supply to the constrictors is from:","التغذية الحركية للعاصرات من:"],o:[["Glossopharyngeal (IX)","اللساني البلعومي (IX)"],["Vagus (X)","المبهم (X)"],["Accessory (XI)","الإضافي (XI)"],["Hypoglossal (XII)","تحت اللسان (XII)"]],a:1,e:["The constrictors are supplied by the vagus via the pharyngeal plexus.","تغذّى العاصرات بالمبهم عبر الضفيرة البلعومية."]}
 ]},

larynx:{title:["The Larynx","الحنجرة"],sub:["Cartilages, folds and the two nerves","الغضاريف والطيّات والعصبان"],color:"--nerve",
 terms:["cricoid","posterior_cricoarytenoid","cricothyroid","recurrent_laryngeal","internal_laryngeal","rima_glottidis"],
 notes:[
  {h:["Cartilages","الغضاريف"],l:[
   ["<span class='t-key'>Unpaired</span>: thyroid, cricoid, epiglottis. <span class='t-key'>Paired</span>: arytenoid, corniculate, cuneiform.","<span class='t-key'>مفردة</span>: الدرقي، الحلقي، لسان المزمار. <span class='t-key'>مزدوجة</span>: الطرجهالي، القرني، الإسفيني."],
   ["The <span class='t-bone'>cricoid</span> is the only complete ring (at C6).","<span class='t-bone'>الحلقي</span> هو الحلقة الكاملة الوحيدة (عند C6)."]
  ]},
  {h:["Cavity & folds","الجوف والطيّات"],l:[
   ["<span class='t-key'>Vestibular folds</span> (false) protect; <span class='t-key'>vocal folds</span> (true) phonate.","<span class='t-key'>الطيّات الدهليزية</span> (كاذبة) تحمي؛ و<span class='t-key'>الطيّات الصوتية</span> (حقيقية) تُصوّت."],
   ["<span class='t-key'>Rima glottidis</span> = gap between the vocal folds; narrowest adult point.","<span class='t-key'>المزمار</span> = الفتحة بين الطيّتين الصوتيتين؛ أضيق نقطة في البالغ."]
  ]},
  {h:["Muscles & actions","العضلات وأفعالها"],l:[
   ["<span class='t-muscle'>Posterior cricoarytenoid</span> = the ONLY abductor (opens the rima).","<span class='t-muscle'>الحلقية الطرجهالية الخلفية</span> = الباعدة الوحيدة (تفتح المزمار)."],
   ["<span class='t-muscle'>Lateral cricoarytenoid</span> + arytenoids = adductors (close).","<span class='t-muscle'>الحلقية الطرجهالية الجانبية</span> + الطرجهاليات = مُقرّبات (إغلاق)."],
   ["<span class='t-muscle'>Cricothyroid</span> tenses the cords (raises pitch).","<span class='t-muscle'>الحلقية الدرقية</span> تشدّ الحبال (ترفع الطبقة الصوتية)."]
  ]},
  {h:["Nerve supply (exam favourite)","التغذية العصبية (مفضّلة في الامتحان)"],l:[
   ["Motor: ALL intrinsic = <span class='t-nerve'>recurrent laryngeal</span> EXCEPT cricothyroid = <span class='t-nerve'>external laryngeal</span>.","الحركة: كل الداخلية = <span class='t-nerve'>الحنجري الراجع</span> عدا cricothyroid = <span class='t-nerve'>الحنجري الظاهر</span>."],
   ["Sensory: above the folds = <span class='t-nerve'>internal laryngeal</span>; below = <span class='t-nerve'>recurrent laryngeal</span>.","الحس: فوق الطيّات = <span class='t-nerve'>الحنجري الداخلي</span>؛ وأسفلها = <span class='t-nerve'>الحنجري الراجع</span>."],
   ["<span class='t-clin'>Unilateral recurrent palsy → hoarseness; bilateral → airway obstruction.</span>","<span class='t-clin'>شلل راجع أحادي ← بحّة؛ وثنائي ← انسداد المجرى الهوائي.</span>"]
  ]}
 ],
 flash:[
  {q:["Which is the only ABDUCTOR of the vocal cords?","ما العضلة الوحيدة الباعدة للحبال الصوتية؟"],a:["<span class='t-muscle'>Posterior cricoarytenoid</span> — opens the rima glottidis.","<span class='t-muscle'>الحلقية الطرجهالية الخلفية</span> — تفتح المزمار."]},
  {q:["Which intrinsic muscle is NOT recurrent laryngeal?","أي عضلة داخلية لا يغذّيها الحنجري الراجع؟"],a:["<span class='t-muscle'>Cricothyroid</span> — supplied by the <span class='t-nerve'>external laryngeal nerve</span>.","<span class='t-muscle'>Cricothyroid</span> — يغذّيها <span class='t-nerve'>العصب الحنجري الظاهر</span>."]},
  {q:["Sensation above vs below the vocal folds?","الحس فوق مقابل أسفل الطيّتين الصوتيتين؟"],a:["Above = <span class='t-nerve'>internal laryngeal</span>; below = <span class='t-nerve'>recurrent laryngeal</span>.","فوق = <span class='t-nerve'>الحنجري الداخلي</span>؛ أسفل = <span class='t-nerve'>الحنجري الراجع</span>."]},
  {q:["The only complete cartilage ring of the airway?","الحلقة الغضروفية الكاملة الوحيدة للمجرى الهوائي؟"],a:["The <span class='t-bone'>cricoid cartilage</span>, at C6.","<span class='t-bone'>الغضروف الحلقي</span>، عند C6."]},
  {q:["Effect of unilateral recurrent laryngeal injury?","أثر إصابة الحنجري الراجع الأحادية؟"],a:["Hoarseness; bilateral injury threatens the airway.","بحّة؛ والإصابة الثنائية تهدّد المجرى الهوائي."]}
 ],
 quiz:[
  {q:["The only muscle that abducts the vocal folds is:","العضلة الوحيدة التي تُبعد الطيّتين الصوتيتين هي:"],o:[["Lateral cricoarytenoid","الحلقية الطرجهالية الجانبية"],["Posterior cricoarytenoid","الحلقية الطرجهالية الخلفية"],["Transverse arytenoid","الطرجهالية المستعرضة"],["Thyroarytenoid","الدرقية الطرجهالية"]],a:1,e:["Posterior cricoarytenoid is the sole abductor — it opens the rima glottidis.","الحلقية الطرجهالية الخلفية هي الباعدة الوحيدة — تفتح المزمار."]},
  {q:["Which intrinsic muscle is supplied by the EXTERNAL laryngeal nerve?","أي عضلة داخلية يغذّيها العصب الحنجري الظاهر؟"],o:[["Posterior cricoarytenoid","الحلقية الطرجهالية الخلفية"],["Vocalis","Vocalis"],["Cricothyroid","الحلقية الدرقية"],["Lateral cricoarytenoid","الحلقية الطرجهالية الجانبية"]],a:2,e:["Cricothyroid is the exception; all others are recurrent laryngeal.","cricothyroid هي الاستثناء؛ وكل البقية للحنجري الراجع."]},
  {q:["Sensation ABOVE the vocal folds is carried by:","الحس فوق الطيّتين الصوتيتين ينقله:"],o:[["Recurrent laryngeal","الحنجري الراجع"],["Internal laryngeal","الحنجري الداخلي"],["External laryngeal","الحنجري الظاهر"],["Glossopharyngeal","اللساني البلعومي"]],a:1,e:["Internal laryngeal above; recurrent laryngeal below the folds.","الحنجري الداخلي فوق؛ والحنجري الراجع أسفل الطيّات."]},
  {q:["The only complete cartilage ring in the airway is the:","الحلقة الغضروفية الكاملة الوحيدة في المجرى هي:"],o:[["Thyroid","الدرقي"],["Cricoid","الحلقي"],["First tracheal ring","أول حلقة رغامية"],["Arytenoid","الطرجهالي"]],a:1,e:["The cricoid is a complete signet ring at C6; tracheal rings are C-shaped.","الحلقي حلقة كاملة عند C6؛ وحلقات الرغامى على شكل C."]},
  {q:["Bilateral recurrent laryngeal injury classically causes:","تسبّب إصابة الحنجري الراجع الثنائية عادةً:"],o:[["Complete aphonia only","فقدان الصوت الكامل فقط"],["Airway obstruction","انسداد المجرى الهوائي"],["Loss of taste","فقدان التذوّق"],["Deviation of the uvula","انحراف اللهاة"]],a:1,e:["With both cords paralysed the airway can be obstructed — an emergency.","مع شلل الحبلين قد ينسدّ المجرى — حالة طارئة."]}
 ]},

/* ===================== MODULE 3 ===================== */
spine:{title:["The Vertebral Column","العمود الفقري"],sub:["Regions, curvatures and a typical vertebra","المناطق والتحدّبات والفقرة النموذجية"],color:"--bone",
 terms:["atlas","axis","primary_curve","nucleus_pulposus","annulus_fibrosus"],
 notes:[
  {h:["Regions (33 vertebrae)","المناطق (33 فقرة)"],l:[
   ["<span class='t-bone'>7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), 4 coccygeal (fused)</span>.","<span class='t-bone'>7 عنقية، 12 صدرية، 5 قطنية، 5 عجزية (مندمجة)، 4 عصعصية (مندمجة)</span>."],
   ["24 are individual (presacral).","24 فقرة مستقلة (قبل العجز)."]
  ]},
  {h:["Curvatures","التحدّبات"],l:[
   ["<span class='t-key'>Primary (kyphoses)</span>, at birth: thoracic & sacral.","<span class='t-key'>الأولية (حدبات)</span>، منذ الولادة: الصدرية والعجزية."],
   ["<span class='t-key'>Secondary (lordoses)</span>: cervical & lumbar.","<span class='t-key'>الثانوية (بأدات)</span>: العنقية والقطنية."]
  ]},
  {h:["A typical vertebra","الفقرة النموذجية"],l:[
   ["<span class='t-bone'>Body</span> + <span class='t-bone'>vertebral arch</span> (2 pedicles + 2 laminae) around the vertebral foramen.","<span class='t-bone'>الجسم</span> + <span class='t-bone'>القوس الفقري</span> (سويقتان + صفيحتان) حول الثقبة الفقرية."],
   ["Processes: 1 spinous, 2 transverse, 4 articular.","النواتئ: شوكي واحد، مستعرضان، 4 مفصلية."]
  ]},
  {h:["Special vertebrae & discs","فقرات خاصة والأقراص"],l:[
   ["<span class='t-key'>C1 (atlas)</span>: no body, no spinous process. <span class='t-key'>C2 (axis)</span>: has the <span class='t-bone'>dens</span>.","<span class='t-key'>C1 (الأطلس)</span>: بلا جسم وبلا ناتئ شوكي. <span class='t-key'>C2 (المحور)</span>: يحمل <span class='t-bone'>السنّ (dens)</span>."],
   ["Disc = <span class='t-key'>annulus fibrosus</span> + <span class='t-key'>nucleus pulposus</span>; posterolateral herniation compresses a root.","القرص = <span class='t-key'>الحلقة الليفية</span> + <span class='t-key'>النواة اللبّية</span>؛ الانفتاق الخلفي الوحشي يضغط جذراً."]
  ]}
 ],
 flash:[
  {q:["Number of vertebrae per region?","عدد الفقرات في كل منطقة؟"],a:["<span class='t-bone'>7 C, 12 T, 5 L, 5 S, 4 Co</span> = 33.","<span class='t-bone'>7 عنقية، 12 صدرية، 5 قطنية، 5 عجزية، 4 عصعصية</span> = 33."]},
  {q:["Primary vs secondary curvatures?","التحدّبات الأولية مقابل الثانوية؟"],a:["Primary: thoracic & sacral. Secondary: cervical & lumbar.","الأولية: الصدرية والعجزية. الثانوية: العنقية والقطنية."]},
  {q:["What is unusual about the atlas (C1)?","ما غير المعتاد في الأطلس (C1)؟"],a:["<span class='t-key'>No body and no spinous process</span>.","<span class='t-key'>بلا جسم وبلا ناتئ شوكي</span>."]},
  {q:["Two parts of an intervertebral disc?","جزءا القرص بين الفقري؟"],a:["Outer <span class='t-key'>annulus fibrosus</span> + inner <span class='t-key'>nucleus pulposus</span>.","<span class='t-key'>الحلقة الليفية</span> الخارجية + <span class='t-key'>النواة اللبّية</span> الداخلية."]},
  {q:["Which vertebra bears the dens?","أي فقرة تحمل السنّ (dens)؟"],a:["The <span class='t-key'>axis (C2)</span>.","<span class='t-key'>المحور (C2)</span>."]}
 ],
 quiz:[
  {q:["How many cervical vertebrae are there?","كم عدد الفقرات العنقية؟"],o:[["5","5"],["7","7"],["12","12"],["8","8"]],a:1,e:["7 cervical vertebrae (but 8 cervical spinal nerves).","7 فقرات عنقية (لكن 8 أعصاب شوكية عنقية)."]},
  {q:["Which are the PRIMARY curvatures present at birth?","أي التحدّبات أولية موجودة منذ الولادة؟"],o:[["Cervical and lumbar","العنقية والقطنية"],["Thoracic and sacral","الصدرية والعجزية"],["Cervical and thoracic","العنقية والصدرية"],["Lumbar and sacral","القطنية والعجزية"]],a:1,e:["Thoracic and sacral kyphoses are primary; cervical and lumbar are secondary.","حدبتا الصدر والعجز أوليتان؛ والعنقية والقطنية ثانويتان."]},
  {q:["The atlas (C1) uniquely lacks a:","يفتقر الأطلس (C1) بشكل فريد إلى:"],o:[["Transverse process","ناتئ مستعرض"],["Vertebral foramen","ثقبة فقرية"],["Body and spinous process","جسم وناتئ شوكي"],["Superior articular facet","سطح مفصلي علوي"]],a:2,e:["C1 has no body and no spinous process; it forms a ring around the dens.","C1 بلا جسم وبلا ناتئ شوكي؛ يشكّل حلقة حول السنّ."]},
  {q:["A posterolateral disc herniation ruptures:","الانفتاق الخلفي الوحشي للقرص يمزّق:"],o:[["Nucleus pulposus through the annulus fibrosus","النواة اللبّية عبر الحلقة الليفية"],["Annulus through the ligamentum flavum","الحلقة عبر الرباط الأصفر"],["Pedicle through the lamina","السويقة عبر الصفيحة"],["Facet through the capsule","السطح المفصلي عبر المحفظة"]],a:0,e:["The nucleus pulposus herniates through a weakened annulus, usually posterolaterally.","تنفتق النواة اللبّية عبر حلقة ليفية ضعيفة، عادةً خلفياً وحشياً."]},
  {q:["The dens is a feature of which vertebra?","السنّ (dens) من سمات أي فقرة؟"],o:[["Atlas (C1)","الأطلس (C1)"],["Axis (C2)","المحور (C2)"],["C7","C7"],["T1","T1"]],a:1,e:["The dens projects from the axis (C2).","يبرز السنّ من المحور (C2)."]}
 ]},

aoj:{title:["Atlanto-occipital & Atlanto-axial Joints","المفصلان الأطلسي القذالي والأطلسي المحوري"],sub:["Joints and ligaments of the upper cervical spine","مفاصل وأربطة أعلى العمود العنقي"],color:"--bone",
 terms:["atlanto_occipital","atlanto_axial","dens","transverse_ligament","alar_ligament"],
 notes:[
  {h:["Atlanto-occipital joint","المفصل الأطلسي القذالي"],l:[
   ["Between the <span class='t-bone'>occipital condyles</span> and the <span class='t-bone'>atlas (C1)</span>; synovial condyloid.","بين <span class='t-bone'>اللقمتين القذاليتين</span> و<span class='t-bone'>الأطلس (C1)</span>؛ زليلي لقمي."],
   ["Movement: <span class='t-key'>flexion–extension</span> ('yes'). <span class='t-key'>No rotation.</span>","الحركة: <span class='t-key'>ثني–بسط</span> ('نعم'). <span class='t-key'>بلا دوران.</span>"]
  ]},
  {h:["Atlanto-axial joint","المفصل الأطلسي المحوري"],l:[
   ["One <span class='t-key'>median</span> (pivot: dens) + two <span class='t-key'>lateral</span> joints.","مفصل <span class='t-key'>أوسط</span> (محور: السنّ) + مفصلان <span class='t-key'>جانبيان</span>."],
   ["Movement: <span class='t-key'>rotation</span> of the head ('no').","الحركة: <span class='t-key'>دوران</span> الرأس ('لا')."]
  ]},
  {h:["Ligaments (dens complex)","الأربطة (مركّب السنّ)"],l:[
   ["<span class='t-key'>Transverse ligament</span> holds the dens forward — prevents posterior displacement.","<span class='t-key'>الرباط المستعرض</span> يثبّت السنّ للأمام — يمنع إزاحته الخلفية."],
   ["Transverse + longitudinal bands = <span class='t-key'>cruciate ligament</span>.","المستعرض + العصابتان الطوليتان = <span class='t-key'>الرباط الصليبي</span>."],
   ["<span class='t-key'>Alar ligaments</span> (dens → occipital condyles) check rotation; <span class='t-key'>apical</span> ligament to the foramen magnum.","<span class='t-key'>الرباطان الجناحيان</span> (السنّ ← اللقمتان القذاليتان) يكبحان الدوران؛ و<span class='t-key'>الرباط القمّي</span> إلى الثقبة العظمى."]
  ]},
  {h:["Clinical","سريرياً"],l:[
   ["Transverse ligament rupture (trauma, RA) lets the dens compress the cord.","تمزّق الرباط المستعرض (رضّ، التهاب مفاصل روماتويدي) يسمح للسنّ بضغط النخاع."]
  ]}
 ],
 flash:[
  {q:["Movement at the atlanto-occipital joint?","حركة المفصل الأطلسي القذالي؟"],a:["<span class='t-key'>Flexion–extension</span> ('yes'); no rotation.","<span class='t-key'>ثني–بسط</span> ('نعم')؛ بلا دوران."]},
  {q:["Movement at the atlanto-axial joint?","حركة المفصل الأطلسي المحوري؟"],a:["<span class='t-key'>Rotation</span> of the head ('no').","<span class='t-key'>دوران</span> الرأس ('لا')."]},
  {q:["What holds the dens against the atlas?","ما الذي يثبّت السنّ أمام الأطلس؟"],a:["The <span class='t-key'>transverse ligament of the atlas</span>.","<span class='t-key'>الرباط المستعرض للأطلس</span>."]},
  {q:["Which ligaments limit head rotation at C1–C2?","أي أربطة تحدّ دوران الرأس عند C1–C2؟"],a:["The <span class='t-key'>alar ligaments</span> (dens → occipital condyles).","<span class='t-key'>الرباطان الجناحيان</span> (السنّ ← اللقمتان القذاليتان)."]},
  {q:["Why is transverse ligament rupture dangerous?","لماذا تمزّق الرباط المستعرض خطير؟"],a:["The dens can shift back and compress the spinal cord.","قد ينزاح السنّ للخلف ويضغط النخاع الشوكي."]}
 ],
 quiz:[
  {q:["Nodding 'yes' occurs mainly at the:","إيماءة 'نعم' تحدث أساساً في:"],o:[["Atlanto-axial joint","المفصل الأطلسي المحوري"],["Atlanto-occipital joint","المفصل الأطلسي القذالي"],["C2–C3 facet joint","مفصل C2–C3 السطحي"],["Costovertebral joint","المفصل الضلعي الفقري"]],a:1,e:["Flexion–extension ('yes') is at the atlanto-occipital joint.","الثني–البسط ('نعم') في المفصل الأطلسي القذالي."]},
  {q:["Rotation ('no') is produced at the:","الدوران ('لا') يحدث في:"],o:[["Atlanto-occipital joint","المفصل الأطلسي القذالي"],["Median atlanto-axial (pivot) joint","المفصل الأطلسي المحوري الأوسط (المحوري)"],["Zygapophyseal joints of C7","مفاصل C7 السطحية"],["Uncovertebral joints","المفاصل غير الفقرية"]],a:1,e:["The median atlanto-axial pivot joint rotates the atlas around the dens.","المفصل الأطلسي المحوري الأوسط يُدوّر الأطلس حول السنّ."]},
  {q:["Which ligament prevents the dens moving back into the canal?","أي رباط يمنع تحرّك السنّ خلفاً نحو القناة؟"],o:[["Alar","الجناحي"],["Apical","القمّي"],["Transverse ligament of the atlas","الرباط المستعرض للأطلس"],["Ligamentum nuchae","الرباط القفوي"]],a:2,e:["The transverse ligament holds the dens forward; its rupture endangers the cord.","الرباط المستعرض يثبّت السنّ للأمام؛ وتمزّقه يهدّد النخاع."]},
  {q:["The alar ligaments run between the dens and the:","يمتدّ الرباطان الجناحيان بين السنّ و:"],o:[["Anterior arch of the atlas","القوس الأمامي للأطلس"],["Occipital condyles","اللقمتان القذاليتان"],["Body of C3","جسم C3"],["Transverse processes of C1","النواتئ المستعرضة لـ C1"]],a:1,e:["Alar ligaments connect the dens to the occipital condyles and check rotation.","يربط الجناحيان السنّ باللقمتين القذاليتين ويكبحان الدوران."]},
  {q:["The cruciate ligament is the transverse ligament plus:","الرباط الصليبي هو الرباط المستعرض مع:"],o:[["Longitudinal bands","العصابات الطولية"],["The alar ligaments","الرباطين الجناحيين"],["The apical ligament","الرباط القمّي"],["The tectorial membrane","الغشاء المظلّي"]],a:0,e:["Superior and inferior longitudinal bands cross the transverse ligament.","تعبر العصابتان الطوليتان العلوية والسفلية الرباط المستعرض."]}
 ]},

prevertebral:{title:["Prevertebral & Scalene Muscles","العضلات أمام الفقرية والأخمعية"],sub:["Deep muscles anterior/lateral to the cervical spine","عضلات عميقة أمام/جانب العمود العنقي"],color:"--muscle",
 terms:["longus_colli","scalenes","scalene_gap","thoracic_outlet"],
 notes:[
  {h:["Location","الموقع"],l:[
   ["<span class='t-key'>Anterior and lateral</span> to the cervical bodies, deep to the prevertebral fascia.","<span class='t-key'>أمام وجانب</span> أجسام الفقرات العنقية، عميقاً للفافة أمام الفقرية."]
  ]},
  {h:["Prevertebral group","المجموعة أمام الفقرية"],l:[
   ["<span class='t-muscle'>Longus colli</span> flexes the neck; <span class='t-muscle'>longus capitis</span> flexes the head.","<span class='t-muscle'>Longus colli</span> تثني العنق؛ و<span class='t-muscle'>longus capitis</span> تثني الرأس."],
   ["<span class='t-muscle'>Rectus capitis anterior & lateralis</span> steady the atlanto-occipital joint.","<span class='t-muscle'>Rectus capitis anterior وlateralis</span> تثبّتان المفصل الأطلسي القذالي."],
   ["Innervation: <span class='t-nerve'>ventral rami of cervical nerves</span>.","التغذية: <span class='t-nerve'>الفروع البطنية للأعصاب العنقية</span>."]
  ]},
  {h:["Scalene group","المجموعة الأخمعية"],l:[
   ["<span class='t-muscle'>Anterior, middle, posterior scalenes</span> → 1st/2nd ribs; elevate ribs & flex neck laterally.","<span class='t-muscle'>الأخمعية الأمامية والوسطى والخلفية</span> ← الضلع 1/2؛ ترفع الأضلاع وتثني العنق جانبياً."],
   ["The <span class='t-key'>scalene gap</span> transmits the <span class='t-artery'>subclavian artery</span> + <span class='t-nerve'>brachial plexus roots</span>; the <span class='t-vein'>subclavian vein</span> passes <span class='t-key'>anterior</span> to anterior scalene.","<span class='t-key'>الفتحة الأخمعية</span> تنقل <span class='t-artery'>الشريان تحت الترقوة</span> + <span class='t-nerve'>جذور الضفيرة العضدية</span>؛ ويمرّ <span class='t-vein'>الوريد تحت الترقوة</span> <span class='t-key'>أمام</span> الأخمعية الأمامية."]
  ]},
  {h:["Clinical","سريرياً"],l:[
   ["<span class='t-clin'>Thoracic outlet syndrome — compression in the scalene gap.</span>","<span class='t-clin'>متلازمة مخرج الصدر — انضغاط في الفتحة الأخمعية.</span>"]
  ]}
 ],
 flash:[
  {q:["Main flexor of the neck (prevertebral)?","الثانية الرئيسية للعنق (أمام الفقرية)؟"],a:["<span class='t-muscle'>Longus colli</span>.","<span class='t-muscle'>Longus colli</span>."]},
  {q:["What passes through the scalene gap?","ماذا يمرّ عبر الفتحة الأخمعية؟"],a:["<span class='t-artery'>Subclavian artery</span> + <span class='t-nerve'>brachial plexus roots</span>.","<span class='t-artery'>الشريان تحت الترقوة</span> + <span class='t-nerve'>جذور الضفيرة العضدية</span>."]},
  {q:["Where does the subclavian vein pass?","أين يمرّ الوريد تحت الترقوة؟"],a:["<span class='t-key'>Anterior</span> to the anterior scalene — not through the gap.","<span class='t-key'>أمام</span> الأخمعية الأمامية — لا عبر الفتحة."]},
  {q:["What innervates the prevertebral muscles?","ما الذي يغذّي العضلات أمام الفقرية؟"],a:["<span class='t-nerve'>Ventral rami of cervical nerves</span>.","<span class='t-nerve'>الفروع البطنية للأعصاب العنقية</span>."]},
  {q:["A clinical syndrome linked to the scalenes?","متلازمة سريرية مرتبطة بالأخمعية؟"],a:["<span class='t-key'>Thoracic outlet syndrome</span>.","<span class='t-key'>متلازمة مخرج الصدر</span>."]}
 ],
 quiz:[
  {q:["What passes between the anterior and middle scalene?","ماذا يمرّ بين الأخمعيتين الأمامية والوسطى؟"],o:[["Subclavian vein and phrenic nerve","الوريد تحت الترقوة والعصب الحجابي"],["Subclavian artery and brachial plexus roots","الشريان تحت الترقوة وجذور الضفيرة العضدية"],["Vagus nerve and IJV","المبهم والوداجي الباطن"],["Common carotid and vagus","السباتي المشترك والمبهم"]],a:1,e:["The scalene gap transmits the subclavian artery and brachial plexus roots; the vein passes in front.","تنقل الفتحة الأخمعية الشريان تحت الترقوة وجذور الضفيرة العضدية؛ ويمرّ الوريد أمامها."]},
  {q:["The chief prevertebral neck flexor is:","الثانية الرئيسية أمام الفقرية للعنق هي:"],o:[["Longus capitis","Longus capitis"],["Longus colli","Longus colli"],["Rectus capitis lateralis","Rectus capitis lateralis"],["Scalenus posterior","الأخمعية الخلفية"]],a:1,e:["Longus colli spans the cervical bodies and is the main flexor.","longus colli تمتدّ على أجسام الفقرات العنقية وهي الثانية الرئيسية."]},
  {q:["The prevertebral muscles are innervated by:","العضلات أمام الفقرية يغذّيها:"],o:[["Dorsal rami","الفروع الظهرية"],["Ventral rami","الفروع البطنية"],["The accessory nerve","العصب الإضافي"],["The vagus nerve","العصب المبهم"]],a:1,e:["They receive ventral rami of cervical spinal nerves.","تتلقّى الفروع البطنية للأعصاب الشوكية العنقية."]},
  {q:["The subclavian vein passes:","الوريد تحت الترقوة يمرّ:"],o:[["Between anterior and middle scalene","بين الأمامية والوسطى"],["Behind the middle scalene","خلف الوسطى"],["Anterior to the anterior scalene","أمام الأخمعية الأمامية"],["Through the middle scalene","عبر الوسطى"]],a:2,e:["Only the vein passes anterior to anterior scalene; artery and plexus go through the gap.","الوريد وحده يمرّ أمام الأخمعية الأمامية؛ والشريان والضفيرة عبر الفتحة."]},
  {q:["Compression in the scalene interval causes:","الانضغاط في الفتحة الأخمعية يسبّب:"],o:[["Bell's palsy","شلل بيل"],["Thoracic outlet syndrome","متلازمة مخرج الصدر"],["Horner's syndrome only","متلازمة هورنر فقط"],["Carpal tunnel syndrome","متلازمة النفق الرسغي"]],a:1,e:["Neurovascular compression at the scalene gap → thoracic outlet syndrome.","انضغاط وعائي عصبي في الفتحة الأخمعية ← متلازمة مخرج الصدر."]}
 ]},

backmuscles:{title:["Muscles of the Spine (Back)","عضلات الظهر"],sub:["Extrinsic vs intrinsic (true) back muscles","العضلات الخارجية مقابل الجوهرية (الحقيقية)"],color:"--muscle",
 terms:["dorsal_rami","erector_spinae","transversospinalis","trapezius"],
 notes:[
  {h:["Two functional groups","مجموعتان وظيفيتان"],l:[
   ["<span class='t-key'>Extrinsic</span> muscles act on the limb/thorax (superficial).","<span class='t-key'>الخارجية</span> تعمل على الطرف/الصدر (سطحية)."],
   ["<span class='t-key'>Intrinsic (true)</span> muscles move the spine — all supplied by <span class='t-nerve'>dorsal rami</span>.","<span class='t-key'>الجوهرية (الحقيقية)</span> تحرّك العمود — كلها تغذّى بالـ <span class='t-nerve'>فروع ظهرية</span>."]
  ]},
  {h:["Extrinsic muscles","العضلات الخارجية"],l:[
   ["<span class='t-muscle'>Trapezius</span> (XI), <span class='t-muscle'>latissimus dorsi</span> (thoracodorsal), levator scapulae & rhomboids (dorsal scapular).","<span class='t-muscle'>شبه المنحرفة</span> (XI)، <span class='t-muscle'>الظهرية العريضة</span> (الظهري الصدري)، رافعة الكتف والمعينيتان (الظهري الكتفي)."],
   ["Supplied by <span class='t-nerve'>ventral rami</span> (and CN XI).","تغذّى بالـ <span class='t-nerve'>فروع بطنية</span> (وCN XI)."]
  ]},
  {h:["Intrinsic muscles — three layers","الجوهرية — ثلاث طبقات"],l:[
   ["<span class='t-key'>Superficial</span>: <span class='t-muscle'>splenius capitis & cervicis</span>.","<span class='t-key'>سطحية</span>: <span class='t-muscle'>splenius capitis وcervicis</span>."],
   ["<span class='t-key'>Intermediate</span>: <span class='t-muscle'>erector spinae</span> = iliocostalis, longissimus, spinalis ('I Love Spaghetti').","<span class='t-key'>متوسطة</span>: <span class='t-muscle'>الناصبة للفقار</span> = iliocostalis، longissimus، spinalis."],
   ["<span class='t-key'>Deep</span>: <span class='t-muscle'>transversospinalis</span> = semispinalis, multifidus, rotatores.","<span class='t-key'>عميقة</span>: <span class='t-muscle'>المستعرضة الشوكية</span> = semispinalis، multifidus، rotatores."]
  ]},
  {h:["Key point","نقطة أساسية"],l:[
   ["<span class='t-clin'>All true back muscles = dorsal rami; the superficial 'back' muscles that move the limb are NOT.</span>","<span class='t-clin'>كل عضلات الظهر الحقيقية = فروع ظهرية؛ أما عضلات الظهر السطحية المحرّكة للطرف فليست كذلك.</span>"]
  ]}
 ],
 flash:[
  {q:["What innervates all the true back muscles?","ما الذي يغذّي كل عضلات الظهر الحقيقية؟"],a:["The <span class='t-nerve'>dorsal rami</span>.","<span class='t-nerve'>الفروع الظهرية</span>."]},
  {q:["Name the erector spinae columns (lateral → medial).","اذكر أعمدة الناصبة للفقار (وحشي ← إنسي)."],a:["<span class='t-muscle'>Iliocostalis, Longissimus, Spinalis</span>.","<span class='t-muscle'>iliocostalis، longissimus، spinalis</span>."]},
  {q:["The transversospinalis group?","مجموعة المستعرضة الشوكية؟"],a:["<span class='t-muscle'>Semispinalis, multifidus, rotatores</span>.","<span class='t-muscle'>semispinalis، multifidus، rotatores</span>."]},
  {q:["Is trapezius a true back muscle?","هل شبه المنحرفة عضلة ظهر حقيقية؟"],a:["No — extrinsic, supplied by the <span class='t-nerve'>accessory nerve (XI)</span>.","لا — خارجية، يغذّيها <span class='t-nerve'>العصب الإضافي (XI)</span>."]},
  {q:["Main action of erector spinae?","الفعل الرئيسي للناصبة للفقار؟"],a:["Extension of the vertebral column.","بسط العمود الفقري."]}
 ],
 quiz:[
  {q:["The intrinsic (true) back muscles are all innervated by:","عضلات الظهر الحقيقية كلها تغذّى بـ:"],o:[["Ventral rami","الفروع البطنية"],["Dorsal rami","الفروع الظهرية"],["The accessory nerve","العصب الإضافي"],["The thoracodorsal nerve","العصب الظهري الصدري"]],a:1,e:["Dorsal ramus innervation defines the deep/true back muscles.","تغذية الفرع الظهري تُميّز عضلات الظهر العميقة/الحقيقية."]},
  {q:["Erector spinae, lateral → medial, is:","الناصبة للفقار، وحشي ← إنسي:"],o:[["Spinalis, longissimus, iliocostalis","spinalis، longissimus، iliocostalis"],["Iliocostalis, longissimus, spinalis","iliocostalis، longissimus، spinalis"],["Longissimus, iliocostalis, spinalis","longissimus، iliocostalis، spinalis"],["Multifidus, rotatores, semispinalis","multifidus، rotatores، semispinalis"]],a:1,e:["Lateral→medial: Iliocostalis, Longissimus, Spinalis.","وحشي←إنسي: iliocostalis، longissimus، spinalis."]},
  {q:["Which is an EXTRINSIC (not true) back muscle?","أي مما يلي عضلة ظهر خارجية (غير حقيقية)؟"],o:[["Multifidus","Multifidus"],["Longissimus","Longissimus"],["Latissimus dorsi","الظهرية العريضة"],["Rotatores","Rotatores"]],a:2,e:["Latissimus dorsi moves the humerus (thoracodorsal nerve).","الظهرية العريضة تحرّك العضد (العصب الظهري الصدري)."]},
  {q:["The transversospinalis group includes:","مجموعة المستعرضة الشوكية تشمل:"],o:[["Splenius capitis and cervicis","splenius capitis وcervicis"],["Iliocostalis and longissimus","iliocostalis وlongissimus"],["Semispinalis, multifidus and rotatores","semispinalis وmultifidus وrotatores"],["Trapezius and rhomboids","شبه المنحرفة والمعينيتان"]],a:2,e:["Semispinalis, multifidus and rotatores form the deep layer.","semispinalis وmultifidus وrotatores تشكّل الطبقة العميقة."]},
  {q:["Trapezius receives motor supply from the:","تتلقّى شبه المنحرفة تغذيتها الحركية من:"],o:[["Dorsal scapular nerve","العصب الظهري الكتفي"],["Accessory nerve (XI)","العصب الإضافي (XI)"],["Dorsal rami of C3–C5","الفروع الظهرية C3–C5"],["Long thoracic nerve","العصب الصدري الطويل"]],a:1,e:["Trapezius is supplied by the accessory nerve (XI) — an extrinsic muscle.","تغذّى شبه المنحرفة بالعصب الإضافي (XI) — عضلة خارجية."]}
 ]},

/* ===================== MODULE 4 ===================== */
brain:{title:["The Brain — Summary","الدماغ — ملخّص"],sub:["Lobes, functional areas and the brainstem","الفصوص والمناطق الوظيفية وجذع الدماغ"],color:"--nerve",
 terms:["precentral_gyrus","postcentral_gyrus","broca","wernicke","cerebellum"],
 notes:[
  {h:["Major divisions","الأقسام الرئيسية"],l:[
   ["<span class='t-key'>Cerebrum</span> (4 lobes), <span class='t-key'>diencephalon</span> (thalamus + hypothalamus), <span class='t-key'>brainstem</span>, <span class='t-key'>cerebellum</span>.","<span class='t-key'>المخ</span> (4 فصوص)، <span class='t-key'>الدماغ البيني</span> (المهاد + تحت المهاد)، <span class='t-key'>جذع الدماغ</span>، <span class='t-key'>المخيخ</span>."]
  ]},
  {h:["Lobes & key areas","الفصوص والمناطق"],l:[
   ["<span class='t-key'>Frontal</span>: motor cortex (precentral gyrus), <span class='t-key'>Broca's area</span>, prefrontal cortex.","<span class='t-key'>الجبهي</span>: القشرة الحركية (التلفيف قبل المركزي)، <span class='t-key'>منطقة بروكا</span>، القشرة أمام الجبهية."],
   ["<span class='t-key'>Parietal</span>: somatosensory cortex (postcentral gyrus).","<span class='t-key'>الجداري</span>: القشرة الحسّية (التلفيف بعد المركزي)."],
   ["<span class='t-key'>Temporal</span>: auditory cortex, <span class='t-key'>Wernicke's area</span>, hippocampus.","<span class='t-key'>الصدغي</span>: القشرة السمعية، <span class='t-key'>منطقة فيرنيكه</span>، الحُصين."],
   ["<span class='t-key'>Occipital</span>: primary visual cortex.","<span class='t-key'>القذالي</span>: القشرة البصرية الأولية."]
  ]},
  {h:["Brainstem & cerebellum","جذع الدماغ والمخيخ"],l:[
   ["Midbrain (III, IV), pons (V, VI, VII, VIII), medulla (IX, X, XII).","الدماغ المتوسط (III, IV)، الجسر (V, VI, VII, VIII)، النخاع المستطيل (IX, X, XII)."],
   ["Cerebellar lesions cause <span class='t-key'>ipsilateral</span> ataxia.","إصابات المخيخ تسبّب رنحاً في <span class='t-key'>نفس الجهة</span>."]
  ]},
  {h:["Speech clinical","سريريات الكلام"],l:[
   ["<span class='t-clin'>Broca = expressive (non-fluent); Wernicke = receptive (fluent) aphasia.</span>","<span class='t-clin'>بروكا = حبسة تعبيرية (غير طليقة)؛ فيرنيكه = حبسة استقبالية (طليقة).</span>"]
  ]}
 ],
 flash:[
  {q:["Where is the primary motor cortex?","أين القشرة الحركية الأولية؟"],a:["The <span class='t-key'>precentral gyrus</span> (frontal lobe).","<span class='t-key'>التلفيف قبل المركزي</span> (الفصّ الجبهي)."]},
  {q:["Where is the primary somatosensory cortex?","أين القشرة الحسّية الجسدية الأولية؟"],a:["The <span class='t-key'>postcentral gyrus</span> (parietal lobe).","<span class='t-key'>التلفيف بعد المركزي</span> (الفصّ الجداري)."]},
  {q:["Broca vs Wernicke — location & deficit?","بروكا مقابل فيرنيكه — الموقع والعجز؟"],a:["Broca = frontal, expressive aphasia. Wernicke = temporal, receptive aphasia.","بروكا = جبهي، حبسة تعبيرية. فيرنيكه = صدغي، حبسة استقبالية."]},
  {q:["Which lobe holds the primary visual cortex?","أي فصّ يحوي القشرة البصرية الأولية؟"],a:["The <span class='t-key'>occipital lobe</span>.","<span class='t-key'>الفصّ القذالي</span>."]},
  {q:["A cerebellar lesion gives signs on which side?","إصابة المخيخ تعطي علامات في أي جهة؟"],a:["<span class='t-key'>Ipsilateral</span> (same side).","<span class='t-key'>نفس الجهة</span>."]}
 ],
 quiz:[
  {q:["The primary motor cortex is in the:","القشرة الحركية الأولية في:"],o:[["Postcentral gyrus","التلفيف بعد المركزي"],["Precentral gyrus","التلفيف قبل المركزي"],["Superior temporal gyrus","التلفيف الصدغي العلوي"],["Cingulate gyrus","التلفيف الحزامي"]],a:1,e:["Precentral gyrus (frontal) = motor; postcentral = sensory.","التلفيف قبل المركزي (جبهي) = حركي؛ وبعد المركزي = حسّي."]},
  {q:["Damage to Broca's area produces:","تلف منطقة بروكا يُنتج:"],o:[["Fluent aphasia, poor comprehension","حبسة طليقة، فهم ضعيف"],["Non-fluent (expressive) aphasia","حبسة غير طليقة (تعبيرية)"],["Complete blindness","عمى كامل"],["Loss of pain sensation","فقدان حسّ الألم"]],a:1,e:["Broca (frontal) → non-fluent/expressive aphasia; comprehension preserved.","بروكا (جبهي) ← حبسة غير طليقة/تعبيرية؛ مع بقاء الفهم."]},
  {q:["The primary visual cortex lies in which lobe?","القشرة البصرية الأولية في أي فصّ؟"],o:[["Frontal","الجبهي"],["Parietal","الجداري"],["Temporal","الصدغي"],["Occipital","القذالي"]],a:3,e:["Occipital lobe, around the calcarine sulcus.","الفصّ القذالي، حول التلم الكلسي."]},
  {q:["Which brainstem part has the nuclei of III and IV?","أي جزء من جذع الدماغ يحوي نوى III وIV؟"],o:[["Medulla","النخاع المستطيل"],["Pons","الجسر"],["Midbrain","الدماغ المتوسط"],["Thalamus","المهاد"]],a:2,e:["The midbrain houses the oculomotor (III) and trochlear (IV) nuclei.","الدماغ المتوسط يحوي نواتي III وIV."]},
  {q:["A unilateral cerebellar lesion causes ataxia that is:","إصابة مخيخية أحادية تسبّب رنحاً:"],o:[["Contralateral","في الجهة المقابلة"],["Ipsilateral","في نفس الجهة"],["Bilateral","ثنائي الجانب"],["Absent","غائب"]],a:1,e:["Cerebellar signs are ipsilateral.","علامات المخيخ في نفس الجهة."]}
 ]},

cerebral:{title:["Cerebral Circulation","الدوران الدماغي"],sub:["Circle of Willis & the cerebral arteries","دائرة ويليس والشرايين الدماغية"],color:"--artery",
 terms:["circle_of_willis","basilar","mca","aca","pca"],
 notes:[
  {h:["Two arterial sources","مصدران شريانيان"],l:[
   ["<span class='t-key'>Anterior</span>: two <span class='t-artery'>internal carotid arteries</span>.","<span class='t-key'>أمامي</span>: <span class='t-artery'>الشريانان السباتيان الباطنان</span>."],
   ["<span class='t-key'>Posterior</span>: two <span class='t-artery'>vertebral arteries</span> → <span class='t-artery'>basilar artery</span>.","<span class='t-key'>خلفي</span>: <span class='t-artery'>الشريانان الفقريان</span> ← <span class='t-artery'>الشريان القاعدي</span>."]
  ]},
  {h:["Circle of Willis","دائرة ويليس"],l:[
   ["Anastomotic ring linking anterior & posterior systems.","حلقة مفاغرة تربط الجهازين الأمامي والخلفي."],
   ["Components: anterior communicating, 2 ACA, 2 ICA, 2 posterior communicating, 2 PCA.","المكوّنات: المُوصِل الأمامي، 2 ACA، 2 ICA، 2 موصِل خلفي، 2 PCA."]
  ]},
  {h:["Territories (know the deficits)","المناطق (احفظ العجوزات)"],l:[
   ["<span class='t-artery'>ACA</span> → medial surface → contralateral <span class='t-key'>leg</span>.","<span class='t-artery'>ACA</span> ← السطح الإنسي ← <span class='t-key'>الساق</span> المقابلة."],
   ["<span class='t-artery'>MCA</span> → lateral surface → contralateral <span class='t-key'>face & arm</span> (± aphasia).","<span class='t-artery'>MCA</span> ← السطح الوحشي ← <span class='t-key'>الوجه والذراع</span> المقابلان (± حبسة)."],
   ["<span class='t-artery'>PCA</span> → occipital lobe → contralateral <span class='t-key'>homonymous hemianopia</span>.","<span class='t-artery'>PCA</span> ← الفصّ القذالي ← <span class='t-key'>عمى شقّي مماثل</span> مقابل."]
  ]},
  {h:["Venous side","الجانب الوريدي"],l:[
   ["Cerebral veins → <span class='t-vein'>dural venous sinuses</span> → internal jugular vein.","الأوردة الدماغية ← <span class='t-vein'>الجيوب الجافوية</span> ← الوريد الوداجي الباطن."]
  ]}
 ],
 flash:[
  {q:["Which two arterial systems supply the brain?","أي جهازين شريانيين يغذّيان الدماغ؟"],a:["Anterior = <span class='t-artery'>internal carotids</span>; posterior = <span class='t-artery'>vertebral → basilar</span>.","أمامي = <span class='t-artery'>السباتيان الباطنان</span>؛ خلفي = <span class='t-artery'>الفقريان ← القاعدي</span>."]},
  {q:["Which artery links the two ACAs?","أي شريان يصل الـ ACA بالآخر؟"],a:["The <span class='t-artery'>anterior communicating artery</span>.","<span class='t-artery'>الشريان الموصِل الأمامي</span>."]},
  {q:["MCA occlusion — which parts weak?","انسداد MCA — أي أجزاء تضعف؟"],a:["Contralateral <span class='t-key'>face & arm</span> (± aphasia).","<span class='t-key'>الوجه والذراع</span> المقابلان (± حبسة)."]},
  {q:["ACA occlusion — which part affected?","انسداد ACA — أي جزء يتأثّر؟"],a:["The contralateral <span class='t-key'>leg</span>.","<span class='t-key'>الساق</span> المقابلة."]},
  {q:["PCA occlusion — visual defect?","انسداد PCA — العجز البصري؟"],a:["Contralateral <span class='t-key'>homonymous hemianopia</span>.","<span class='t-key'>عمى شقّي مماثل</span> مقابل."]}
 ],
 quiz:[
  {q:["The basilar artery is formed by the union of the:","يتكوّن الشريان القاعدي من اتحاد:"],o:[["Two internal carotids","السباتيين الباطنين"],["Two vertebral arteries","الشريانين الفقريين"],["Two posterior cerebral arteries","الشريانين الدماغيين الخلفيين"],["Anterior and posterior communicating","الموصِلين الأمامي والخلفي"]],a:1,e:["The two vertebral arteries unite to form the basilar artery.","يتّحد الفقريان لتكوين الشريان القاعدي."]},
  {q:["MCA occlusion causes weakness mainly of the contralateral:","انسداد MCA يسبّب ضعفاً أساساً في الجهة المقابلة:"],o:[["Leg","الساق"],["Face and arm","الوجه والذراع"],["Both legs","الساقين"],["Trunk only","الجذع فقط"]],a:1,e:["The MCA supplies the lateral cortex (face/arm).","يغذّي MCA القشرة الوحشية (الوجه/الذراع)."]},
  {q:["The anterior communicating artery connects:","الشريان الموصِل الأمامي يصل:"],o:[["The two anterior cerebral arteries","الشريانين الدماغيين الأماميين"],["ICA to PCA","ICA بـ PCA"],["The two posterior cerebral arteries","الشريانين الدماغيين الخلفيين"],["MCA to ACA","MCA بـ ACA"]],a:0,e:["It links the right and left anterior cerebral arteries.","يصل الشريانين الدماغيين الأماميين الأيمن والأيسر."]},
  {q:["A PCA lesion typically produces:","إصابة PCA عادةً تُنتج:"],o:[["Broca's aphasia","حبسة بروكا"],["Contralateral homonymous hemianopia","عمى شقّي مماثل مقابل"],["Contralateral leg weakness","ضعف الساق المقابلة"],["Ipsilateral facial palsy","شلل وجهي في نفس الجهة"]],a:1,e:["PCA supplies the occipital (visual) cortex.","يغذّي PCA القشرة القذالية (البصرية)."]},
  {q:["The anterior cerebral artery mainly supplies the:","الشريان الدماغي الأمامي يغذّي أساساً:"],o:[["Lateral surface of the hemisphere","السطح الوحشي للنصف"],["Medial surface of the hemisphere","السطح الإنسي للنصف"],["Occipital pole","القطب القذالي"],["Cerebellum","المخيخ"]],a:1,e:["ACA runs along the medial surface (leg area).","يجري ACA على السطح الإنسي (منطقة الساق)."]}
 ]},

cord:{title:["The Spinal Cord","النخاع الشوكي"],sub:["Extent, tracts and the meninges","الامتداد والسبل والسحايا"],color:"--nerve",
 terms:["conus_medullaris","cauda_equina","dorsal_columns","spinothalamic","corticospinal"],
 notes:[
  {h:["Extent","الامتداد"],l:[
   ["From the <span class='t-key'>foramen magnum</span> to about <span class='t-key'>L1–L2</span> (conus medullaris).","من <span class='t-key'>الثقبة العظمى</span> إلى نحو <span class='t-key'>L1–L2</span> (المخروط النخاعي)."],
   ["Below the conus: <span class='t-key'>cauda equina</span>; <span class='t-key'>filum terminale</span> anchors it.","أسفل المخروط: <span class='t-key'>ذنب الفرس</span>؛ و<span class='t-key'>الخيط الانتهائي</span> يثبّته."],
   ["Two enlargements: <span class='t-key'>cervical</span> and <span class='t-key'>lumbosacral</span>.","انتفاخان: <span class='t-key'>عنقي</span> و<span class='t-key'>قطني عجزي</span>."]
  ]},
  {h:["Spinal nerves & roots","الأعصاب والجذور الشوكية"],l:[
   ["<span class='t-key'>31 pairs</span>: 8 C, 12 T, 5 L, 5 S, 1 Co.","<span class='t-key'>31 زوجاً</span>: 8 عنقية، 12 صدرية، 5 قطنية، 5 عجزية، 1 عصعصي."],
   ["<span class='t-key'>Dorsal root</span> = sensory; <span class='t-key'>ventral root</span> = motor.","<span class='t-key'>الجذر الظهري</span> = حسّي؛ <span class='t-key'>الجذر البطني</span> = حركي."]
  ]},
  {h:["Internal structure & tracts","البنية الداخلية والسبل"],l:[
   ["Central H-shaped <span class='t-key'>grey matter</span> + surrounding <span class='t-key'>white matter</span>.","<span class='t-key'>مادة رمادية</span> مركزية على شكل H + <span class='t-key'>مادة بيضاء</span> محيطة."],
   ["Ascending: <span class='t-key'>dorsal columns</span> (fine touch/proprioception), <span class='t-key'>spinothalamic</span> (pain/temperature).","صاعدة: <span class='t-key'>الأعمدة الظهرية</span> (لمس دقيق/حسّ وضع)، <span class='t-key'>الشوكي المهادي</span> (ألم/حرارة)."],
   ["Descending: <span class='t-key'>corticospinal tract</span> (voluntary motor).","نازلة: <span class='t-key'>السبيل القشري النخاعي</span> (حركة إرادية)."]
  ]},
  {h:["Meninges & LP","السحايا والبزل"],l:[
   ["Dura, arachnoid, pia; CSF in the <span class='t-key'>subarachnoid space</span>.","الجافية، العنكبوتية، الحنون؛ السائل الدماغي في <span class='t-key'>الحيّز تحت العنكبوتي</span>."],
   ["<span class='t-clin'>Lumbar puncture at L3/4 or L4/5 — below the conus.</span>","<span class='t-clin'>البزل القطني عند L3/4 أو L4/5 — أسفل المخروط.</span>"]
  ]}
 ],
 flash:[
  {q:["Where does the cord end in the adult?","أين ينتهي النخاع في البالغ؟"],a:["About <span class='t-key'>L1–L2</span> (conus medullaris).","نحو <span class='t-key'>L1–L2</span> (المخروط النخاعي)."]},
  {q:["How many pairs of spinal nerves?","كم زوجاً من الأعصاب الشوكية؟"],a:["<span class='t-key'>31</span>: 8 C, 12 T, 5 L, 5 S, 1 Co.","<span class='t-key'>31</span>: 8 عنقية، 12 صدرية، 5 قطنية، 5 عجزية، 1 عصعصي."]},
  {q:["Which tract carries pain and temperature?","أي سبيل ينقل الألم والحرارة؟"],a:["The <span class='t-key'>spinothalamic tract</span>.","<span class='t-key'>السبيل الشوكي المهادي</span>."]},
  {q:["Which tract carries fine touch & proprioception?","أي سبيل ينقل اللمس الدقيق وحسّ الوضع؟"],a:["The <span class='t-key'>dorsal columns</span>.","<span class='t-key'>الأعمدة الظهرية</span>."]},
  {q:["Why LP at L3/4 or L4/5?","لماذا البزل عند L3/4 أو L4/5؟"],a:["It is below the conus (~L1/2), meeting the mobile cauda equina.","لأنه أسفل المخروط (~L1/2)، حيث ذنب الفرس المتحرّك."]}
 ],
 quiz:[
  {q:["In an adult, the conus medullaris usually ends at:","في البالغ، ينتهي المخروط النخاعي عادةً عند:"],o:[["T12","T12"],["L1–L2","L1–L2"],["L3–L4","L3–L4"],["S1","S1"]],a:1,e:["The adult cord ends around L1–L2; below is the cauda equina.","ينتهي نخاع البالغ نحو L1–L2؛ وأسفله ذنب الفرس."]},
  {q:["The dorsal (posterior) root carries:","الجذر الظهري (الخلفي) ينقل:"],o:[["Motor fibres","ألياف حركية"],["Sensory fibres","ألياف حسّية"],["Sympathetic only","ودّية فقط"],["No fibres","لا ألياف"]],a:1,e:["Dorsal root = sensory; ventral root = motor.","الجذر الظهري = حسّي؛ والبطني = حركي."]},
  {q:["Pain and temperature ascend in the:","الألم والحرارة يصعدان في:"],o:[["Dorsal columns","الأعمدة الظهرية"],["Spinothalamic tract","السبيل الشوكي المهادي"],["Corticospinal tract","السبيل القشري النخاعي"],["Spinocerebellar tract","السبيل الشوكي المخيخي"]],a:1,e:["The spinothalamic tract conveys pain and temperature.","السبيل الشوكي المهادي ينقل الألم والحرارة."]},
  {q:["How many pairs of spinal nerves arise?","كم زوجاً من الأعصاب الشوكية ينشأ؟"],o:[["30","30"],["31","31"],["33","33"],["12","12"]],a:1,e:["31 pairs: 8 C, 12 T, 5 L, 5 S, 1 Co.","31 زوجاً: 8 عنقية، 12 صدرية، 5 قطنية، 5 عجزية، 1 عصعصي."]},
  {q:["LP is done at L3/4 or L4/5 because:","يُجرى البزل عند L3/4 أو L4/5 لأنه:"],o:[["The cord is thickest there","النخاع أسمك هناك"],["It is below the conus medullaris","أسفل المخروط النخاعي"],["The dura ends at L2","الجافية تنتهي عند L2"],["There is no CSF above L3","لا سائل فوق L3"]],a:1,e:["Below the conus the needle meets the cauda equina, avoiding the cord.","أسفل المخروط تلاقي الإبرة ذنب الفرس متجنّبةً النخاع."]}
 ]},

limbic:{title:["The Limbic System","الجهاز الحوفي"],sub:["Emotion, memory and the Papez circuit","العاطفة والذاكرة ودارة بابيز"],color:"--nerve",
 terms:["hippocampus","amygdala","fornix","papez","mammillary_bodies"],
 notes:[
  {h:["Functions","الوظائف"],l:[
   ["Governs <span class='t-key'>emotion, memory, motivation, behaviour and olfaction</span>.","ينظّم <span class='t-key'>العاطفة والذاكرة والدافعية والسلوك والشمّ</span>."]
  ]},
  {h:["Main components","المكوّنات الرئيسية"],l:[
   ["<span class='t-key'>Hippocampus</span> — new memories; <span class='t-key'>amygdala</span> — fear/emotion.","<span class='t-key'>الحُصين</span> — ذكريات جديدة؛ <span class='t-key'>اللوزة</span> — الخوف/العاطفة."],
   ["<span class='t-key'>Cingulate & parahippocampal gyri</span>, <span class='t-key'>fornix</span>, mammillary bodies, anterior thalamus, olfactory bulb.","<span class='t-key'>التلفيفان الحزامي وجانب الحُصين</span>، <span class='t-key'>القبو (fornix)</span>، الأجسام الحلمية، المهاد الأمامي، البصلة الشمّية."]
  ]},
  {h:["Papez circuit","دارة بابيز"],l:[
   ["<span class='t-key'>Hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate → parahippocampal → hippocampus.</span>","<span class='t-key'>الحُصين ← القبو ← الأجسام الحلمية ← المهاد الأمامي ← الحزامي ← جانب الحُصين ← الحُصين.</span>"]
  ]},
  {h:["Clinical","سريرياً"],l:[
   ["<span class='t-clin'>Bilateral hippocampal damage → anterograde amnesia.</span>","<span class='t-clin'>تلف الحُصين الثنائي ← فقدان ذاكرة تقدّمي.</span>"],
   ["Mammillary body damage (thiamine deficiency) → Korsakoff amnesia.","تلف الأجسام الحلمية (عوز الثيامين) ← نساوة كورساكوف."]
  ]}
 ],
 flash:[
  {q:["Which structure forms new memories?","أي تركيب يكوّن الذكريات الجديدة؟"],a:["The <span class='t-key'>hippocampus</span>; bilateral loss → anterograde amnesia.","<span class='t-key'>الحُصين</span>؛ فقدانه الثنائي ← فقدان ذاكرة تقدّمي."]},
  {q:["Which structure processes fear?","أي تركيب يعالج الخوف؟"],a:["The <span class='t-key'>amygdala</span>.","<span class='t-key'>اللوزة الدماغية</span>."]},
  {q:["Main output tract of the hippocampus?","السبيل الصادر الرئيسي من الحُصين؟"],a:["The <span class='t-key'>fornix</span> → mammillary bodies.","<span class='t-key'>القبو (fornix)</span> ← الأجسام الحلمية."]},
  {q:["Outline the Papez circuit.","لخّص دارة بابيز."],a:["Hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate → parahippocampal → hippocampus.","الحُصين ← القبو ← الأجسام الحلمية ← المهاد الأمامي ← الحزامي ← جانب الحُصين ← الحُصين."]},
  {q:["Which structures are damaged in Korsakoff's?","أي تراكيب تتضرّر في كورساكوف؟"],a:["The <span class='t-key'>mammillary bodies</span> (thiamine deficiency).","<span class='t-key'>الأجسام الحلمية</span> (عوز الثيامين)."]}
 ],
 quiz:[
  {q:["Bilateral hippocampal damage causes:","تلف الحُصين الثنائي يسبّب:"],o:[["Loss of fear","فقدان الخوف"],["Anterograde amnesia","فقدان ذاكرة تقدّمي"],["Blindness","عمى"],["Aphasia","حبسة"]],a:1,e:["The hippocampus consolidates new memories; bilateral loss → anterograde amnesia.","الحُصين يثبّت الذكريات الجديدة؛ وفقدانه الثنائي ← فقدان ذاكرة تقدّمي."]},
  {q:["Which structure is most linked to fear?","أي تركيب أكثر ارتباطاً بالخوف؟"],o:[["Amygdala","اللوزة"],["Cingulate gyrus","التلفيف الحزامي"],["Fornix","القبو"],["Mammillary body","الجسم الحلمي"]],a:0,e:["The amygdala mediates fear and emotional salience.","اللوزة تتوسّط الخوف والبروز العاطفي."]},
  {q:["The fornix mainly connects the hippocampus to the:","القبو يصل الحُصين أساساً بـ:"],o:[["Occipital cortex","القشرة القذالية"],["Mammillary bodies","الأجسام الحلمية"],["Cerebellum","المخيخ"],["Spinal cord","النخاع الشوكي"]],a:1,e:["The fornix is the main efferent tract to the mammillary bodies.","القبو هو السبيل الصادر الرئيسي إلى الأجسام الحلمية."]},
  {q:["Papez: mammillary bodies → anterior thalamus via the:","بابيز: الأجسام الحلمية ← المهاد الأمامي عبر:"],o:[["Fornix","القبو"],["Mammillothalamic tract","السبيل الحلمي المهادي"],["Stria terminalis","الشريط الانتهائي"],["Corpus callosum","الجسم الثفني"]],a:1,e:["The mammillothalamic tract carries the circuit onward.","السبيل الحلمي المهادي يحمل الدارة إلى الأمام."]},
  {q:["Thiamine deficiency damaging the mammillary bodies causes:","عوز الثيامين المُتلف للأجسام الحلمية يسبّب:"],o:[["Parkinson's disease","داء باركنسون"],["Korsakoff amnesia","نساوة كورساكوف"],["Broca's aphasia","حبسة بروكا"],["Homonymous hemianopia","عمى شقّي مماثل"]],a:1,e:["Thiamine (B1) deficiency damages the mammillary bodies → Wernicke–Korsakoff amnesia.","عوز الثيامين (B1) يتلف الأجسام الحلمية ← نساوة فيرنيكه–كورساكوف."]}
 ]}
};

const UI={
 brand:["Atlas Review","مراجعة الأطلس"], brandTag:["ANATOMY 2","تشريح 2"],
 search:["Search structures…","ابحث عن التراكيب…"],
 exam:["Exam Mode","وضع الاختبار"],
 langLabel:["عربي","EN"],
 heroEyebrow:["Anatomy 2 · Revision Companion","تشريح 2 · رفيق المراجعة"],
 heroH:["Head, Neck &amp; Neuroanatomy,<br>plate by plate.","الرأس والعنق والجهاز العصبي،<br>لوحةً بلوحة."],
 heroP:["Every topic from your course — notes, flashcards and a self-marking quiz, colour-coded like an atlas. Work through a region, then test yourself in Exam Mode.","كل مواضيع مقرّرك — ملاحظات وبطاقات واختبار ذاتي التصحيح، بترميز لوني كالأطلس. راجع منطقةً ثم اختبر نفسك في وضع الاختبار."],
 legNerve:["nerve","عصب"], legArtery:["artery","شريان"], legVein:["vein","وريد"], legMuscle:["muscle","عضلة"], legBone:["bone","عظم"],
 sTopics:["topics","مواضيع"], sFlash:["flashcards","بطاقات"], sQuiz:["quiz items","أسئلة"],
 allTopics:["← All topics","→ كل المواضيع"],
 tNotes:["Notes","الملاحظات"], tFlash:["Flashcards","البطاقات"], tQuiz:["Quiz","الاختبار"],
 keyTerms:["Key terms","المصطلحات الأساسية"], tapTerm:["Tap a term for its explanation.","اضغط مصطلحاً لعرض شرحه."],
 mNotes:["notes","ملاحظة"],
 card:["Card","بطاقة"], of:["of","من"], shuffle:["↺ Shuffle","↺ خلط"],
 qWord:["Question","سؤال"], aWord:["Answer","إجابة"], reveal:["tap to reveal","اضغط للكشف"], flipback:["tap to flip back","اضغط للعودة"],
 prev:["← Prev","السابق ←"], next:["Next →","→ التالي"],
 setup:["Set up your quiz","جهّز اختبارك"], setupP:["Pick how many questions. They're drawn at random across all topics.","اختر عدد الأسئلة. تُسحب عشوائياً من كل المواضيع."],
 numQ:["Number of questions","عدد الأسئلة"], all:["All","الكل"], startQuiz:["Start quiz →","ابدأ الاختبار →"],
 score:["Score","النتيجة"], qShort:["Q","سؤال"], seeResults:["See results","عرض النتائج"], nextBtn:["Next","التالي"],
 correct:["Correct","صحيح"], explanation:["Explanation","التفسير"],
 retake:["↻ Retake","↻ إعادة"], backTopics:["Back to topics","العودة للمواضيع"],
 reviewMiss:["Review your misses","راجع أخطاءك"], youAns:["You:","إجابتك:"], theRight:["Correct:","الصحيح:"],
 examMixed:["Mixed exam","اختبار مختلط"], topicQuiz:["Topic quiz","اختبار الموضوع"], complete:["complete.","اكتمل."],
 quitQuiz:["← Quit quiz","→ إنهاء الاختبار"], mixedTopics:["questions · mixed topics","أسئلة · مواضيع مختلطة"],
 noMatch:["No matches — try another term.","لا نتائج — جرّب كلمة أخرى."], matchWord:["match","نتيجة"], matchesWord:["matches","نتائج"],
 footer:["Built from standard atlas nomenclature (Netter, Atlas of Human Anatomy). Legend — nerve · artery · vein · muscle · bone. Progress is saved in this browser. Verify against your own atlas before the exam.","مبني على مصطلحات الأطلس المعيارية (Netter، أطلس التشريح البشري). المفتاح — عصب · شريان · وريد · عضلة · عظم. يُحفظ التقدّم في هذا المتصفح. تحقّق من أطلسك قبل الامتحان."],
 res85:["Excellent — atlas-ready.","ممتاز — جاهز للاختبار."], res70:["Solid. Review the misses below.","جيد. راجع الأخطاء أدناه."],
 res50:["Getting there — revisit the notes.","تتقدّم — عد للملاحظات."], res0:["Worth another pass through the notes.","يستحقّ مراجعة أخرى للملاحظات."],
 explainShow:["Explain ","اشرح"], explainHide:["Hide explanations","إخفاء الشروح"], Tag:["'s note","شرح"]
};


/* ============================================================
    EXPLANATIONS  ·  one per note block, in note order
   Each entry: [English, العربية]
   ============================================================ */
const EXPLAIN={
skull:[
[`Think of the skull as two teams. The neurocranium is the protective helmet — eight bones fused around the brain. The viscerocranium is the face — fourteen bones that build the orbits, nose, cheeks and jaw. The detail most beginners miss: only two facial bones are single (unpaired) — the mandible and the vomer — everything else comes in left/right pairs. If you can recite "8 + 14 = 22" and name the two unpaired bones, you already control the framework.`,`تخيّل الجمجمة فريقين. القحف العصبي هو الخوذة الواقية — ثمانية عظام ملتحمة حول الدماغ. أما الهيكل الوجهي (viscerocranium) فهو الوجه — أربعة عشر عظماً تبني الحجاج والأنف والوجنتين والفك. والتفصيل الذي يغفله المبتدئ: عظمان وجهيان فقط مفردان — الفك السفلي (mandible) والميكعة (vomer) — والبقية أزواج يمين/يسار. إذا حفظت "8 + 14 = 22" وسمّيت المفردين فقد أتقنت الهيكل العام.`],
[`Sutures are the seams where skull bones meet — name each by the bones it joins: coronal (crown line), sagittal (arrow down the middle), lambdoid (Greek λ at the back). In babies these seams are still soft gaps called fontanelles; the front one stays open up to about two years, which is why an infant's skull can mould during birth and grow with the brain. The pterion is the exam favourite: a thin, H-shaped meeting point on the side of the head with the middle meningeal artery running right beneath it — a blow there can tear the vessel.`,`الدروز هي الخطوط التي تلتقي عندها عظام الجمجمة — سمّ كلاً منها بالعظمين اللذين تصلهما: الإكليلي (خط التاج)، السهمي (سهم في المنتصف)، اللامي (حرف λ اليوناني خلفاً). في الرضّع تبقى هذه الخطوط فجوات لينة تُسمّى اليوافيخ؛ الأمامي يبقى مفتوحاً حتى نحو سنتين، ولذلك تتشكّل جمجمة الرضيع أثناء الولادة وتنمو مع الدماغ. والـ pterion مفضّل الامتحان: نقطة التقاء رقيقة على شكل H في جانب الرأس يجري تحتها الشريان السحائي الأوسط مباشرة — فالضربة هناك قد تمزّق الوعاء.`],
[`The floor of the cranial cavity is stepped like a staircase into three levels, and each step cradles a specific part of the brain. The anterior fossa is highest and holds the frontal lobes; the middle fossa dips down for the temporal lobes and the pituitary in its bony saddle; the posterior fossa is deepest, cupping the cerebellum and brainstem above the foramen magnum. Picture the brain settling onto these three shelves — it makes the nerve exits in the next section far easier to place.`,`أرضية جوف القحف مدرّجة كالسلّم إلى ثلاثة مستويات، وكل درجة تحتضن جزءاً محدداً من الدماغ. الحفرة الأمامية هي الأعلى وتحمل الفصوص الجبهية؛ والوسطى تنخفض للفصوص الصدغية وللغدة النخامية في سرجها العظمي؛ والخلفية هي الأعمق، تحتضن المخيخ وجذع الدماغ فوق الثقبة العظمى. تخيّل الدماغ يستقرّ على هذه الرفوف الثلاثة — فذلك يسهّل كثيراً تحديد مخارج الأعصاب في القسم التالي.`],
[`Every cranial nerve and major vessel needs a doorway out of the skull, and these foramina are prime exam material. Don't memorise them as a random list — group them by fossa and by function. A clean pattern to hold: the trigeminal divisions leave through "R-O-M" — Rotundum for V2, Ovale for V3, with V1 through the superior orbital fissure; the jugular foramen is the "IX-X-XI exit" alongside the internal jugular vein. Learn the contents, not just the holes.`,`كل عصب قحفي ووعاء رئيسي يحتاج باباً للخروج من الجمجمة، وهذه الثقب مادة امتحانية أساسية. لا تحفظها كقائمة عشوائية — بل اجمعها حسب الحفرة والوظيفة. ونمط مفيد: شُعب مثلث التوائم تخرج عبر "R-O-M" — Rotundum لـ V2، وOvale لـ V3، وV1 عبر الشقّ الحجاجي العلوي؛ والثقبة الوداجية هي "مخرج IX-X-XI" بجوار الوريد الوداجي الباطن. احفظ المحتويات لا الثقوب فقط.`]
],
scalp:[
[`The mnemonic SCALP isn't just a spelling trick — each letter is a real layer stacked from outside in, and their properties explain real clinical events. Skin, dense Connective tissue packed with vessels, the Aponeurosis (galea), a Loose areolar layer, then Pericranium on the bone. The top three are bound tightly and move as one sheet, which is why scalp wounds gape open. Understanding the layers is understanding why the scalp bleeds so much and how infection travels — the next points build directly on this.`,`اختصار SCALP ليس مجرّد حيلة إملائية — كل حرف طبقة حقيقية مرتّبة من الخارج للداخل، وخصائصها تفسّر أحداثاً سريرية حقيقية. الجلد (Skin)، النسيج الضامّ الكثيف الغنيّ بالأوعية (Connective)، الصفاق (Aponeurosis/galea)، طبقة رخوة (Loose)، ثم السمحاق (Pericranium) على العظم. الطبقات الثلاث العليا مرتبطة بإحكام وتتحرّك كصفيحة واحدة، ولذلك تتباعد حواف جروح الفروة. فهم الطبقات هو فهم سبب النزف الغزير وكيفية انتقال العدوى — والنقاط التالية تُبنى على هذا مباشرة.`],
[`One muscle, occipitofrontalis, spans the scalp front to back, joined by the tough galea — that is why lifting your eyebrows wrinkles your forehead. The blood supply is extraordinarily rich because it arrives from two directions at once: branches of the external carotid behind and to the side, and the internal carotid at the front. These vessels sit in the dense second layer that holds them open, so even a small cut bleeds dramatically — a genuine first-aid point, not just an exam fact.`,`عضلة واحدة، occipitofrontalis، تمتدّ على الفروة من الأمام للخلف، يصلها الـ galea المتين — ولذلك يجعّد رفعُ الحاجبين الجبهةَ. والتروية غنيّة جداً لأنها تأتي من اتجاهين معاً: فروع السباتي الظاهر خلفاً وجانباً، والسباتي الباطن أماماً. وتستقرّ هذه الأوعية في الطبقة الثانية الكثيفة التي تُبقيها مفتوحة، فحتى الجرح الصغير ينزف بغزارة — نقطة إسعاف حقيقية لا مجرّد معلومة امتحان.`],
[`Here is the single most important rule of the face: every muscle of facial expression is driven by the facial nerve, cranial nerve VII, because they all grow from the same embryonic block, the second pharyngeal arch. So when VII is damaged, as in Bell's palsy, the whole half of the face droops. Watch the classic trap — buccinator sits in the cheek and helps chewing, so students file it under "mastication," but it is VII, a facial-expression muscle. Sort muscles by their nerve and the face becomes simple.`,`إليك أهمّ قاعدة في الوجه: كل عضلة تعبير وجهي يحرّكها العصب الوجهي، العصب القحفي VII، لأنها جميعاً تنشأ من الكتلة الجنينية نفسها، القوس البلعومي الثاني. لذا عند تلف VII، كما في شلل بيل، يتدلّى نصف الوجه بالكامل. وانتبه للفخّ الكلاسيكي — البوقية (buccinator) في الخد وتساعد المضغ، فيصنّفها الطالب تحت "المضغ"، لكنها VII، عضلة تعبير وجهي. صنّف العضلات حسب عصبها يصبح الوجه بسيطاً.`],
[`Sensation to the scalp splits neatly along a line over the top of the head. Everything in front of the ears is trigeminal territory (V1, V2, V3) — the same nerve that feels the face. Everything behind is supplied by cervical nerves from the neck, such as the greater occipital from C2. This front-versus-back logic mirrors how the head is built, and it explains why some headaches are felt at the back (occipital) while others sit over the forehead (trigeminal).`,`ينقسم حسّ الفروة بدقّة على خطّ يمرّ فوق قمّة الرأس. كل ما أمام الأذنين منطقة مثلث التوائم (V1, V2, V3) — العصب نفسه الذي يُحسّ الوجه. وكل ما خلفها تغذّيه أعصاب عنقية من الرقبة، كالقذالي الأكبر من C2. ومنطق "الأمام مقابل الخلف" يعكس بنية الرأس، ويفسّر لماذا يُحسّ بعض الصداع خلفاً (قذالي) بينما يجلس غيره فوق الجبهة (مثلث التوائم).`]
],
parotid:[
[`Start with the big picture: the parotid is the largest salivary gland, wrapped in a tough fibrous capsule and tucked below the ear, behind the vertical branch of the jaw (the ramus). Its watery, serous saliva travels forward through a single tube — Stensen's duct — which pierces the buccinator and opens inside your cheek opposite the second upper molar. Push your tongue to that spot and you can feel where your own saliva enters. That tough capsule matters clinically — hold onto it for the next points.`,`ابدأ بالصورة الكبيرة: النكفة أكبر غدة لعابية، ملفوفة بمحفظة ليفية متينة، مدسوسة أسفل الأذن خلف الفرع الصاعد للفك (ramus). ولعابها المائي المصلي يسير أماماً عبر أنبوب واحد — قناة Stensen — تخترق العضلة البوقية وتفتح داخل الخد مقابل الرحى العلوية الثانية. المس ذلك الموضع بلسانك تشعر بمدخل لعابك. وهذه المحفظة المتينة مهمّة سريرياً — تمسّك بها للنقاط التالية.`],
[`The parotid is famous because three critical structures run through it, and the exam always asks their order from the surface inward. Say it as a rhythm — Nerve, Vein, Artery. The facial nerve (VII) is most superficial and fans into five branches; this is why parotid surgery is so delicate, because cutting it paralyses the face. Beneath it lies the retromandibular vein, and deepest is the external carotid artery. Superficial to deep = VII → vein → artery. Lock that order in.`,`تشتهر النكفة لأن ثلاثة تراكيب حرجة تمرّ خلالها، والامتحان يسأل دائماً عن ترتيبها من السطح للعمق. قلها كإيقاع — عصب، وريد، شريان. العصب الوجهي (VII) الأكثر سطحية ويتفرّع إلى خمسة فروع؛ ولذلك جراحة النكفة دقيقة جداً، لأن قطعه يشلّ الوجه. تحته الوريد خلف الفكّي، والأعمق هو الشريان السباتي الظاهر. سطحي←عميق = VII ← وريد ← شريان. ثبّت هذا الترتيب.`],
[`The gland's own nerve supply is a classic pathway question. The switch-on — parasympathetic, which makes it secrete — starts in cranial nerve IX, relays in the otic ganglion, then hitches a ride on the auriculotemporal nerve, a branch of V3, to reach the gland. Notice the elegance: IX carries the command, but V3's branch delivers it, and that hand-off is exactly what examiners test. General sensation of the gland is also auriculotemporal; the skin over it is the great auricular nerve (C2–C3).`,`تغذية الغدة العصبية سؤال مسار كلاسيكي. التشغيل — النظير الودّي الذي يجعلها تُفرز — يبدأ في العصب القحفي IX، يتحوّل في العقدة الأذنية، ثم يستقلّ العصب الأذني الصدغي، وهو فرع من V3، ليصل الغدة. لاحظ الأناقة: IX يحمل الأمر، لكن فرع V3 يوصّله، وهذا التسليم بالذات ما يختبره الممتحن. والحسّ العام للغدة أيضاً عبر الأذني الصدغي؛ أما جلدها فعبر العصب الأذني الأكبر (C2–C3).`],
[`Now the earlier detail pays off. Because the capsule is tough and won't stretch, swelling of the gland — as in mumps — is genuinely painful, since the gland pushes against an unyielding wall. And because the facial nerve is buried inside the gland, any parotid surgery risks facial paralysis, so surgeons identify and protect VII first. Two facts, one theme: the anatomy predicts the clinical picture.`,`الآن يؤتي التفصيل السابق ثماره. لأن المحفظة متينة ولا تتمدّد، فإن تورّم الغدة — كما في النكاف — مؤلم فعلاً، إذ تدفع الغدة جداراً لا يلين. ولأن العصب الوجهي مدفون داخل الغدة، فإن أي جراحة للنكفة تهدّد بشلل الوجه، لذا يحدّد الجرّاح VII ويحميه أولاً. حقيقتان وموضوع واحد: التشريح يتنبّأ بالصورة السريرية.`]
],
oral:[
[`Divide the mouth into two spaces and everything falls into place. The vestibule is the narrow slit between your lips and cheeks and your teeth — slide your tongue there to feel it. The oral cavity proper is the main space inside the dental arches. The roof is the palate: a bony hard palate in front (maxilla plus palatine bone) and a muscular soft palate behind that lifts to seal off the nose when you swallow. Clear boundaries first, contents second.`,`قسّم الفم إلى حيّزين يتّضح كل شيء. الدهليز هو الشقّ الضيّق بين الشفتين والخدين والأسنان — مرّر لسانك هناك لتشعر به. وجوف الفم الحقيقي هو الحيّز الرئيسي داخل الأقواس السنّية. والسقف هو الحنك: حنك صلب عظمي أماماً (الفك العلوي مع العظم الحنكي) وحنك رخو عضلي خلفاً يرتفع ليغلق الأنف عند البلع. الحدود أولاً، والمحتويات ثانياً.`],
[`The tongue has two muscle sets — intrinsic ones that change its shape and extrinsic ones that move it around, and the extrinsic ones all end in "-glossus." Here is the rule worth gold: every tongue muscle is driven by the hypoglossal nerve (XII) except one — palatoglossus — which belongs to the palate and answers to the vagus (X). So "all XII except palatoglossus." Genioglossus is the one that sticks the tongue out; remember it, because it is the key to the sensory and clinical point that follows.`,`للّسان مجموعتان عضليتان — داخلية تغيّر شكله وخارجية تحرّكه، والخارجية تنتهي كلها بـ "-glossus". وإليك قاعدة ثمينة: كل عضلات اللسان يحرّكها العصب تحت اللسان (XII) عدا واحدة — palatoglossus — التي تتبع الحنك وتخضع للمبهم (X). أي "كلها XII عدا palatoglossus". وgenioglossus هي التي تُبرز اللسان؛ احفظها فهي مفتاح النقطة الحسّية والسريرية التالية.`],
[`Tongue sensation is a favourite because it splits front-back AND touch-taste — four combinations. Anterior two-thirds: ordinary feeling (touch) is the lingual nerve (V3), but taste is chorda tympani (VII) hitching onto it. Posterior third: one nerve does both — glossopharyngeal (IX). The very back near the epiglottis is vagus (X). Draw the tongue, mark the two-thirds/one-third line, and label four arrows — once you see it as a map, you will never confuse touch with taste again.`,`حسّ اللسان مفضّل لأنه ينقسم أمام-خلف وأيضاً لمس-تذوّق — أربع توليفات. الثلثان الأماميان: الإحساس العادي (اللمس) عبر اللساني (V3)، لكن التذوّق عبر حبل الطبل (chorda tympani، VII) الملتصق به. والثلث الخلفي: عصب واحد يفعل الاثنين — اللساني البلعومي (IX). وأقصى الخلف قرب لسان المزمار عبر المبهم (X). ارسم اللسان، وحدّد خطّ الثلثين/الثلث، وضع أربعة أسهم — حين تراه خريطةً لن تخلط اللمس بالتذوّق ثانيةً.`],
[`Round it off with the plumbing and the guard-posts. The tongue's blood comes from the lingual artery, a branch of the external carotid — the same external carotid you met in the parotid. The palatine tonsils sit in a small pocket between the two arches at the back of the mouth, palatoglossal in front and palatopharyngeal behind; these are the tonsils a doctor sees when you say "aah." Connecting the tongue's artery back to the external carotid ties this whole region together.`,`أنهِ المشهد بالسباكة ونقاط الحراسة. دم اللسان من الشريان اللساني، فرع من السباتي الظاهر — نفس السباتي الظاهر الذي قابلته في النكفة. وتجلس اللوزتان الحنكيتان في جيب صغير بين القوسين خلف الفم، الحنكي اللساني أماماً والحنكي البلعومي خلفاً؛ وهما اللوزتان اللتان يراهما الطبيب حين تقول "آه". وربط شريان اللسان بالسباتي الظاهر يجمع هذه المنطقة كلها.`]
],
sinuses:[
[`First, break a common misconception: these "sinuses" are not air spaces — they are venous channels, drainage rivers for blood leaving the brain. They run trapped between two layers of the tough dura mater, and crucially they have no valves, so blood, and sometimes infection, can flow either way. Everything they collect — from the brain, orbit, skull and coverings — eventually pours into the internal jugular vein. Hold "valveless venous channels" in mind; it is the reason facial infections can be dangerous.`,`أولاً صحّح مفهوماً شائعاً: هذه "الجيوب" ليست فراغات هوائية — بل قنوات وريدية، أنهار تصريف للدم الخارج من الدماغ. تجري محصورة بين طبقتي الجافية المتينة، والأهمّ أنها بلا صمّامات، فيمكن أن يجري الدم، وأحياناً العدوى، في الاتجاهين. وكل ما تجمعه — من الدماغ والحجاج والقحف والأغشية — يصبّ في النهاية في الوريد الوداجي الباطن. احفظ "قنوات وريدية بلا صمّامات"؛ فهي سبب خطورة عدوى الوجه.`],
[`Follow one drop of blood down the midline and the sinuses stop being a list. Along the top of the brain runs the superior sagittal sinus heading backward. Underneath, the inferior sagittal sinus joins the great cerebral vein to form the straight sinus. Both arrive at the same crossroads — the confluence — which hands blood to the transverse, then the sigmoid sinus, then out as the internal jugular vein. Trace that route with your finger; the pathway is the whole point.`,`تتبّع قطرة دم واحدة نازلة في الخطّ الأوسط تتوقّف الجيوب عن كونها قائمة. على قمّة الدماغ يجري الجيب السهمي العلوي متجهاً خلفاً. وتحته يلتقي الجيب السهمي السفلي بالوريد المخي الكبير مكوّنَين الجيب المستقيم. وكلاهما يصل المفترق نفسه — الملتقى — الذي يسلّم الدم للجيب المستعرض ثم السيني ثم خارجاً كالوريد الوداجي الباطن. تتبّع الطريق بإصبعك؛ فالمسار هو المقصد كلّه.`],
[`The cavernous sinus is the highest-yield structure here, so slow down. Picture a venous box beside the pituitary, with a busy road running through its middle and passengers riding along its outer wall. Through the middle pass the internal carotid artery and the abducens nerve (VI). In the lateral wall, top to bottom, sit CN III, IV, V1, V2. The single trap students fall for: VI is inside with the artery, not in the wall. Master "through versus wall" and you own this slide.`,`الجيب الكهفي أعلى التراكيب قيمةً هنا، فتمهّل. تخيّل صندوقاً وريدياً بجوار النخامية، طريق مزدحم يمرّ في وسطه وركّاب يسيرون على جداره الخارجي. في الوسط يمرّ الشريان السباتي الباطن والعصب المبعّد (VI). وفي الجدار الجانبي، من أعلى لأسفل، تقع III وIV وV1 وV2. والفخّ الوحيد الذي يسقط فيه الطلاب: VI في الداخل مع الشريان لا في الجدار. أتقن "خلال مقابل الجدار" تملك هذه الشريحة.`],
[`Now connect the box to the face. The cavernous sinus links to the facial vein through the superior ophthalmic vein — and remember, these veins have no valves. So an infected pimple in the "danger triangle" around the nose can, rarely, travel backward into the cavernous sinus and cause a clot (thrombosis). Because the abducens nerve floats freely inside, it is often the first to fail, and the eye can no longer turn outward. Anatomy explaining disease — exactly what exams reward.`,`الآن اربط الصندوق بالوجه. يتّصل الجيب الكهفي بالوريد الوجهي عبر الوريد العيني العلوي — وتذكّر أن هذه الأوردة بلا صمّامات. فبثرة ملتهبة في "مثلث الخطر" حول الأنف قد تسير، نادراً، رجوعاً إلى الجيب الكهفي مسبّبةً خثرة. ولأن العصب المبعّد يطفو حرّاً في الداخل، فهو غالباً أول ما يُصاب، فتعجز العين عن الالتفات خارجاً. تشريح يفسّر المرض — وهو تماماً ما يكافئه الامتحان.`]
],
neck:[
[`The neck is packed tight, so nature wraps its contents in fascial layers — think of them as cling-film sleeves that separate and protect. Just under the skin sits the thin platysma muscle, a muscle of facial expression, so its nerve is VII. Deeper, several layers — investing, pretracheal, prevertebral — plus a special tube, the carotid sheath, organise the neck into compartments. These planes matter because they guide where infection spreads and where a surgeon can safely open.`,`العنق مكتظّ، فتلفّ الطبيعة محتوياته بلفافات — تخيّلها أغلفة تفصل وتحمي. تحت الجلد مباشرة العضلة الجلدية الرقيقة (platysma) وهي عضلة تعبير وجهي، فعصبها VII. وأعمق، عدّة طبقات — المحيطة، أمام الرغامية، أمام الفقرية — إضافةً إلى أنبوب خاص، الغمد السباتي، تنظّم العنق إلى حجرات. وهذه المستويات مهمّة لأنها توجّه انتشار العدوى وأين يفتح الجرّاح بأمان.`],
[`Of all the fascial tubes, memorise the carotid sheath cold, because it bundles the neck's three most important travellers: the carotid artery carrying blood up to the brain, the internal jugular vein carrying it back down, and the vagus nerve (X) riding between them. Feel your own pulse at the side of your neck — you are pressing right over the sheath. If you can name those three contents instantly, you have secured the classic viva question.`,`من بين كل الأنابيب اللفافية، احفظ الغمد السباتي إتقاناً، لأنه يحزم أهمّ ثلاثة مسافرين في العنق: الشريان السباتي حاملاً الدم صعوداً للدماغ، والوريد الوداجي الباطن حاملاً إياه نزولاً، والعصب المبهم (X) راكباً بينهما. تحسّس نبضك جانب رقبتك — أنت تضغط فوق الغمد. إذا سمّيت هذه المحتويات الثلاثة فوراً فقد ضمنت سؤال الشفهي الكلاسيكي.`],
[`Anatomists split each side of the neck into triangles so they can give directions precisely. The anterior triangle is the front region, bounded by the midline, the jaw, and the front edge of the big strap muscle (SCM). It is subdivided again into four smaller triangles — submental, submandibular, carotid and muscular — and the carotid one matters because that is where the common carotid splits into internal and external branches, at about the C3–C4 level. Triangles are just addresses; they make the neck searchable.`,`يقسّم التشريحيون كل جانب من العنق إلى مثلثات ليعطوا اتجاهات بدقّة. المثلث الأمامي هو المنطقة الأمامية، يحدّه الخطّ الأوسط والفك والحافة الأمامية للعضلة الحزامية الكبيرة (SCM). ويُقسَّم ثانيةً إلى أربعة مثلثات أصغر — تحت الذقن، تحت الفك، السباتي، العضلي — والسباتي مهمّ لأن السباتي المشترك ينقسم فيه إلى فرعين باطن وظاهر، عند مستوى C3–C4 تقريباً. المثلثات مجرّد عناوين؛ تجعل العنق قابلاً للبحث.`],
[`The posterior triangle is the region behind the SCM, floored by the clavicle below. Its VIP resident is the accessory nerve (XI), which crosses it superficially and is easily injured here — cut it and the trapezius weakens, dropping the shoulder. This region also delivers the cervical plexus (C1–C4), including the all-important phrenic nerve to the diaphragm. The clinic mnemonic is timeless: "C3, 4, 5 keeps the diaphragm alive."`,`المثلث الخلفي هو المنطقة خلف الـ SCM، أرضيته الترقوة أسفل. ونزيله المهمّ هو العصب الإضافي (XI) الذي يعبره سطحياً ويُصاب بسهولة هنا — قطعُه يُضعف شبه المنحرفة فيهبط الكتف. وتُخرج هذه المنطقة أيضاً الضفيرة العنقية (C1–C4)، ومنها العصب الحجابي بالغ الأهمية إلى الحجاب الحاجز. والقاعدة السريرية خالدة: "C3, 4, 5 يُبقي الحجاب حيّاً."`]
],
pharynx:[
[`Picture the pharynx as a muscular funnel behind the nose and mouth, running from the skull base down to the level of C6, where it narrows into the oesophagus. It has three floors, each named for what opens in front of it: nasopharynx behind the nose, oropharynx behind the mouth, laryngopharynx behind the voice box. It is a shared crossroad for both air and food, which is why swallowing has to be so carefully coordinated — the next points show how the muscles manage that.`,`تخيّل البلعوم قمعاً عضلياً خلف الأنف والفم، يمتدّ من قاعدة الجمجمة نزولاً إلى مستوى C6 حيث يضيق إلى المريء. له ثلاثة طوابق، كلٌّ سُمّي بما يفتح أمامه: الأنفي خلف الأنف، الفموي خلف الفم، الحنجري خلف صندوق الصوت. وهو مفترق مشترك للهواء والطعام، ولذلك يجب أن يكون البلع منسّقاً بدقّة — والنقاط التالية تُظهر كيف تدير العضلات ذلك.`],
[`Two muscle groups run the pharynx. The three constrictors wrap around it like stacked fists and squeeze the food bolus downward — all driven by the vagus (X). The longitudinal muscles run up and down and lift the pharynx during swallowing; they end in "-pharyngeus." Here is the one fact examiners love: of all these muscles, only stylopharyngeus is supplied by the glossopharyngeal nerve (IX); everything else is vagus. "Only stylopharyngeus = IX" is your anchor.`,`مجموعتان عضليتان تديران البلعوم. العاصرات الثلاث تلتفّ حوله كقبضات متراصّة وتعصر لقمة الطعام نزولاً — كلها يحرّكها المبهم (X). والعضلات الطولية تجري صعوداً ونزولاً وترفع البلعوم أثناء البلع؛ وتنتهي بـ "-pharyngeus". وإليك ما يعشقه الممتحن: من كل هذه العضلات، stylopharyngeus وحدها يغذّيها اللساني البلعومي (IX)؛ والبقية للمبهم. "stylopharyngeus فقط = IX" هو مرساتك.`],
[`Now organise the nerves cleanly. Motor is easy: the vagus (X) runs almost everything, with that single stylopharyngeus exception (IX). Sensory follows the three floors: the nasopharynx feels via V2, the oropharynx via IX — this is the trigger zone for the gag reflex — and the laryngopharynx via X. So IX is the great sensory nerve of the middle floor; remember it as the "gag nerve," and the rest slots around it.`,`الآن نظّم الأعصاب بوضوح. الحركة سهلة: المبهم (X) يدير كل شيء تقريباً، مع استثناء stylopharyngeus الوحيد (IX). والحسّ يتبع الطوابق الثلاثة: الأنفي يُحسّ عبر V2، والفموي عبر IX — وهو منطقة إطلاق منعكس الغثيان — والحنجري عبر X. فـ IX هو العصب الحسّي الكبير للطابق الأوسط؛ احفظه كـ "عصب الغثيان"، وينتظم الباقي حوله.`],
[`Guarding the entrance to the throat is a ring of lymphoid tissue — Waldeyer's ring — made of the adenoid, tubal, palatine and lingual tonsils; it is the immune system's border patrol. On the clinical side, there is a weak spot in the lower pharyngeal wall called Killian's dehiscence, where the lining can balloon backward to form a pharyngeal pouch that traps food. A ring of defenders and a weak seam — both are common exam prompts.`,`يحرس مدخل الحلق حلقة من النسيج اللمفاوي — حلقة فالداير — مكوّنة من الناميات واللوز الأنبوبي والحنكي واللساني؛ إنها دورية حدود الجهاز المناعي. وسريرياً، ثمة نقطة ضعف في الجدار البلعومي السفلي تُسمّى فرجة كيليان، حيث قد تنتفخ البطانة خلفاً مكوّنةً جيباً بلعومياً يحبس الطعام. حلقة مدافعين ودرز ضعيف — كلاهما سؤالان امتحانيان شائعان.`]
],
larynx:[
[`The larynx is a cartilage scaffold for the voice box, so start by sorting its cartilages into single and paired. Unpaired: the thyroid (the "Adam's apple" shield), the cricoid, and the epiglottis lid. Paired: arytenoid, corniculate, cuneiform. The star is the cricoid — it is the only complete ring all the way around the airway, sitting at C6. That completeness is why the cricoid is the landmark surgeons rely on; note it now.`,`الحنجرة سقالة غضروفية لصندوق الصوت، فابدأ بفرز غضاريفها إلى مفردة ومزدوجة. المفردة: الدرقي (درع "تفّاحة آدم")، الحلقي، وغطاء لسان المزمار. المزدوجة: الطرجهالي، القرني، الإسفيني. والنجم هو الحلقي — الحلقة الكاملة الوحيدة حول المجرى الهوائي بالكامل، عند C6. وهذا الاكتمال سبب اعتماد الجرّاحين على الحلقي معلماً؛ لاحظه الآن.`],
[`Inside, two shelves of tissue project from each wall. The upper pair are the vestibular, or false, folds — protective. The lower pair are the true vocal folds — these vibrate to make sound. The gap between the vocal folds is the rima glottidis, the narrowest part of an adult's airway, which is exactly why an inhaled object or swelling here is so dangerous. False protects, true phonates — keep those roles straight.`,`في الداخل، رفّان من النسيج يبرزان من كل جدار. العلويان هما الطيّتان الدهليزيتان، أو الكاذبتان — للحماية. والسفليان هما الطيّتان الصوتيتان الحقيقيتان — تهتزّان لصنع الصوت. والفتحة بينهما هي المزمار (rima glottidis)، أضيق جزء في مجرى البالغ، ولهذا فإن جسماً مستنشَقاً أو تورّماً هنا خطير جداً. الكاذبة تحمي والحقيقية تُصوّت — أبقِ الدورين واضحين.`],
[`The intrinsic muscles fine-tune the vocal folds, and one deserves a spotlight: the posterior cricoarytenoid is the ONLY muscle that pulls the folds apart (abduction) to open the airway. Everything else closes them or tenses them — for instance, cricothyroid stretches the folds to raise pitch, like tightening a guitar string. If you remember just one larynx muscle, make it the posterior cricoarytenoid: the sole opener of the airway.`,`العضلات الداخلية تضبط الطيّتين الصوتيتين بدقّة، وواحدة تستحقّ الأضواء: الحلقية الطرجهالية الخلفية هي العضلة الوحيدة التي تُبعد الطيّتين (إبعاد) لتفتح المجرى الهوائي. وكل ما عداها يُغلقهما أو يشدّهما — مثلاً cricothyroid تمطّ الطيّتين لرفع طبقة الصوت، كشدّ وتر جيتار. إن حفظت عضلة حنجرية واحدة فلتكن الحلقية الطرجهالية الخلفية: الفاتحة الوحيدة للمجرى.`],
[`Two branches of the vagus run the larynx, and telling them apart is the classic exam. For movement: the recurrent laryngeal nerve powers every intrinsic muscle except cricothyroid, which is run by the external laryngeal nerve. For feeling: above the vocal folds it is the internal laryngeal nerve; below, it is the recurrent laryngeal. Clinically, damaging one recurrent nerve causes hoarseness; damaging both can block the airway — a real emergency, and a favourite question.`,`فرعان من المبهم يديران الحنجرة، والتمييز بينهما امتحان كلاسيكي. للحركة: العصب الحنجري الراجع يشغّل كل عضلة داخلية عدا cricothyroid التي يشغّلها العصب الحنجري الظاهر. وللإحساس: فوق الطيّتين الصوتيتين العصب الحنجري الداخلي؛ وأسفلهما الحنجري الراجع. وسريرياً، إصابة عصب راجع واحد تسبّب بحّة؛ وإصابة الاثنين قد تسدّ المجرى — طارئ حقيقي وسؤال مفضّل.`]
],
spine:[
[`The vertebral column is 33 building blocks stacked in five regions from top to bottom: 7 cervical in the neck, 12 thoracic in the chest (one per rib pair), 5 lumbar in the lower back, 5 sacral fused into the sacrum, and 4 coccygeal forming the tailbone. Of these, 24 are separate, movable vertebrae; the sacral and coccygeal ones fuse. A quick way to hold the top three: breakfast at 7, lunch at 12, dinner at 5. Numbers first — details follow.`,`العمود الفقري 33 لبنة مرصوصة في خمس مناطق من أعلى لأسفل: 7 عنقية في الرقبة، 12 صدرية في الصدر (واحدة لكل زوج ضلع)، 5 قطنية في أسفل الظهر، 5 عجزية ملتحمة في العجز، 4 عصعصية تكوّن عظم الذنب. ومنها 24 فقرة منفصلة متحرّكة؛ والعجزية والعصعصية تلتحم. وطريقة سريعة لحفظ الأولى: فطور الساعة 7، غداء الساعة 12، عشاء الساعة 5. الأرقام أولاً — والتفاصيل تتبع.`],
[`Seen from the side, the spine is not straight — it curves, and the curves come in two ages. Primary curves (thoracic and sacral, both concave forward, the "kyphoses") are present from birth, matching the fetus's C-shape. Secondary curves (cervical and lumbar, the "lordoses") develop later — the neck curve when a baby lifts its head, the lumbar curve when it stands and walks. So the two curves you are born with are thoracic and sacral; the two you earn are cervical and lumbar.`,`من الجانب، العمود ليس مستقيماً — بل يتحدّب، وتحدّباته من عمرين. الأولية (الصدري والعجزي، مقعّران للأمام، "الحدبات") موجودة منذ الولادة، تطابق شكل الحرف C للجنين. والثانوية (العنقي والقطني، "البأدات") تظهر لاحقاً — العنقي حين يرفع الرضيع رأسه، والقطني حين يقف ويمشي. فالتحدّبان اللذان تولد بهما هما الصدري والعجزي؛ واللذان تكتسبهما هما العنقي والقطني.`],
[`Every ordinary vertebra shares one blueprint. In front is the drum-shaped body that bears weight. Behind it, a bony arch of two pedicles and two laminae encloses the vertebral foramen — the tunnel that, stacked up, houses the spinal cord. Sticking out are seven processes: one spinous (the bump you feel down your back), two transverse, and four articular that link to the neighbours above and below. Learn this one template and every vertebra becomes a variation on it.`,`كل فقرة عادية تشترك في مخطّط واحد. أماماً الجسم الأسطواني الذي يحمل الوزن. وخلفه قوس عظمي من سويقتين وصفيحتين يُحيط بالثقبة الفقرية — النفق الذي يؤوي النخاع الشوكي حين ترصّ. وتبرز سبعة نواتئ: شوكي واحد (النتوء الذي تحسّه على ظهرك)، ومستعرضان، وأربعة مفصلية تربط بالجارتين فوق وتحت. أتقن هذا القالب الواحد تصبح كل فقرة تنويعاً عليه.`],
[`Two vertebrae break the mould so the head can move. C1, the atlas, has no body and no spinous process — it is a ring that carries the skull, like the Titan Atlas holding up the world. C2, the axis, has a peg (the dens) that C1 pivots around for the "no" rotation. Between the bodies sit intervertebral discs: a tough outer ring (annulus fibrosus) around a soft gel core (nucleus pulposus). When the ring weakens, the gel bulges backward and sideways to press on a nerve root — that is a "slipped disc."`,`فقرتان تكسران القالب ليتحرّك الرأس. C1، الأطلس، بلا جسم وبلا ناتئ شوكي — حلقة تحمل الجمجمة، كأطلس الأسطوري يحمل العالم. وC2، المحور، له نتوء (السنّ/dens) يدور حوله C1 لحركة "لا". وبين الأجسام أقراص بين فقرية: حلقة خارجية متينة (annulus fibrosus) حول نواة هلامية طرية (nucleus pulposus). وحين تضعف الحلقة تنتأ النواة خلفاً وجانباً لتضغط جذراً عصبياً — وذلك "الانزلاق الغضروفي".`]
],
aoj:[
[`Between the skull's occipital condyles and the atlas (C1) lies the atlanto-occipital joint. Its cup-in-saucer, condyloid shape lets the head rock forward and back — the "yes" nod — but essentially no rotation. So whenever you nod agreement, this is the joint doing the work. Pair it in your mind with the next joint, which does "no," and the upper neck's two movements are locked in.`,`بين لقمتي العظم القذالي للجمجمة والأطلس (C1) يقع المفصل الأطلسي القذالي. وشكله اللقمي الشبيه بكوب في صحن يسمح للرأس بالتأرجح أماماً وخلفاً — إيماءة "نعم" — دون دوران يُذكر. فكلما أومأت موافقاً فهذا المفصل هو العامل. اقرنه ذهنياً بالمفصل التالي الذي يفعل "لا"، فتُثبَّت حركتا أعلى العنق.`],
[`One level down, between C1 and C2, is the atlanto-axial joint — actually three joints working together: a central pivot where the atlas spins around the dens, plus two side joints. Its job is rotation, the "no" head-shake. So "yes" happens above at the atlanto-occipital joint and "no" happens here at the atlanto-axial joint. That clean pairing is exactly how examiners like it tested.`,`بمستوى أدنى، بين C1 وC2، المفصل الأطلسي المحوري — وهو فعلاً ثلاثة مفاصل معاً: محور مركزي يدور فيه الأطلس حول السنّ، ومفصلان جانبيان. ووظيفته الدوران، هزّة "لا". فـ "نعم" تحدث أعلى عند المفصل الأطلسي القذالي و"لا" تحدث هنا عند المفصل الأطلسي المحوري. وهذا الاقتران النظيف تماماً كما يحبّ الممتحن اختباره.`],
[`The dens is a bony peg sitting dangerously close to the spinal cord, so a set of ligaments straps it safely in place. The transverse ligament is the key seatbelt — it pins the dens forward against the atlas so it cannot slide back into the cord. Add the vertical bands and you get the cross-shaped cruciate ligament. The alar ligaments run from the dens up to the skull and rein in over-rotation. Think of it as a harness keeping a pivot from becoming a weapon.`,`السنّ نتوء عظمي يجلس على مقربة خطيرة من النخاع الشوكي، فتربطه مجموعة أربطة بأمان. الرباط المستعرض هو حزام الأمان الأساسي — يثبّت السنّ أماماً على الأطلس فلا ينزلق خلفاً إلى النخاع. أضف العصابتين العموديتين تحصل على الرباط الصليبي المتصالب. والرباطان الجناحيان يمتدّان من السنّ إلى الجمجمة ويكبحان الدوران الزائد. تخيّله حزاماً يمنع محوراً من أن يصبح سلاحاً.`],
[`Now see why those ligaments matter. If the transverse ligament tears — from trauma, or weakened by rheumatoid arthritis — the dens can slip backward and compress the spinal cord, which is potentially life-threatening. This is why neck injuries near C1–C2 are treated with such caution, and why this small ligament earns a big place in exams: a tiny strap guarding the cord.`,`الآن ترى لماذا تهمّ تلك الأربطة. إذا تمزّق الرباط المستعرض — برضّ، أو ضعفاً بالتهاب المفاصل الروماتويدي — فقد ينزلق السنّ خلفاً ويضغط النخاع الشوكي، وهو مهدّد للحياة. ولهذا تُعالَج إصابات العنق قرب C1–C2 بحذر شديد، ولهذا يحتلّ هذا الرباط الصغير مكانة كبيرة في الامتحان: حزام دقيق يحرس النخاع.`]
],
prevertebral:[
[`Before naming these muscles, fix where they live. The prevertebral muscles lie deep in the neck, directly in front of and beside the cervical vertebral bodies, hidden behind the prevertebral fascia. They are the muscles you never see on the surface but that quietly flex and steady the neck from the inside. Getting the location right first makes their actions obvious.`,`قبل تسمية هذه العضلات، ثبّت أين تقع. العضلات أمام الفقرية تقع عميقاً في العنق، أمام أجسام الفقرات العنقية وجانبها مباشرة، مختبئة خلف اللفافة أمام الفقرية. إنها عضلات لا تراها على السطح لكنها تثني العنق وتثبّته بهدوء من الداخل. وضبط الموقع أولاً يجعل أفعالها بديهية.`],
[`This front group is the neck's deep flexors. Longus colli runs along the vertebral bodies and bends the neck forward; longus capitis does the same for the head; and two small recti steady the atlanto-occipital joint. They are all supplied by the ventral rami of cervical nerves. Bottom line: this group pulls the head and neck forward from deep inside — the counterbalance to the muscles that extend it.`,`هذه المجموعة الأمامية هي ثنّائات العنق العميقة. Longus colli تمتدّ على أجسام الفقرات وتثني العنق أماماً؛ وlongus capitis تفعل ذلك للرأس؛ وعضلتان مستقيمتان صغيرتان تثبّتان المفصل الأطلسي القذالي. وكلها تغذّيها الفروع البطنية للأعصاب العنقية. الخلاصة: هذه المجموعة تسحب الرأس والعنق أماماً من العمق — موازِنة للعضلات الباسطة.`],
[`On the side sit the three scalenes — anterior, middle, posterior — anchored to the first two ribs. They tilt the neck sideways and, importantly, lift the upper ribs to help you breathe hard. The exam gem is the scalene gap between anterior and middle scalene: through it pass the subclavian artery and the brachial plexus roots heading to the arm — but the subclavian VEIN slips in front of the anterior scalene, not through the gap. Artery and nerves through; vein in front.`,`على الجانب تجلس الأخمعيات الثلاث — الأمامية والوسطى والخلفية — مثبّتة إلى أول ضلعين. تميل العنق جانباً، والأهمّ ترفع الأضلاع العلوية لتساعد التنفّس الشديد. وجوهرة الامتحان هي الفتحة الأخمعية بين الأمامية والوسطى: يمرّ عبرها الشريان تحت الترقوة وجذور الضفيرة العضدية متجهةً للذراع — لكن الوريد تحت الترقوة ينزلق أمام الأخمعية الأمامية لا عبر الفتحة. شريان وأعصاب عبر الفتحة؛ والوريد أمامها.`],
[`That scalene gap is also where things go wrong. If the space is crowded — by an extra cervical rib, tight muscles, or poor posture — it can squeeze the nerves and artery passing through, producing thoracic outlet syndrome: tingling, weakness, or a cold hand. So the same gap you learned for anatomy explains a real patient complaint. Anatomy and clinic, one and the same.`,`تلك الفتحة الأخمعية هي أيضاً حيث تسوء الأمور. فإذا ازدحمت — بضلع عنقي زائد أو عضلات مشدودة أو وضعية سيّئة — قد تضغط الأعصاب والشريان المارّة فيها، مسبّبةً متلازمة مخرج الصدر: تنميل أو ضعف أو يد باردة. فالفتحة نفسها التي تعلّمتها تشريحياً تفسّر شكوى مريض حقيقية. تشريح وسريريات، وجهان لعملة واحدة.`]
],
backmuscles:[
[`The big idea before any names: back muscles come in two kinds. Extrinsic muscles sit superficially and actually move the arm or ribs — they only happen to lie on the back. Intrinsic, the true back muscles, run deep and move the spine itself. The single cleanest way to tell them apart is by nerve: every true back muscle is supplied by a dorsal ramus. Sort by that rule and the whole back organises itself.`,`الفكرة الكبرى قبل أي أسماء: عضلات الظهر نوعان. الخارجية تجلس سطحياً وتحرّك فعلاً الذراع أو الأضلاع — إنها فقط تصادف وجودها على الظهر. والجوهرية، عضلات الظهر الحقيقية، تجري عميقاً وتحرّك العمود نفسه. وأنظف طريقة للتمييز هي العصب: كل عضلة ظهر حقيقية يغذّيها فرع ظهري. صنّف بهذه القاعدة ينظّم الظهر كلّه نفسه.`],
[`The extrinsic layer is what you see when you look at a back: trapezius (run by the accessory nerve, XI), latissimus dorsi, plus levator scapulae and the rhomboids. Their job is to move the shoulder girdle and upper limb, so their nerves come from the front (ventral rami and XI), not from dorsal rami. Recognising these as "limb-movers that happen to be on the back" stops you from wrongly calling them true back muscles.`,`الطبقة الخارجية هي ما تراه حين تنظر إلى ظهر: شبه المنحرفة (يديرها العصب الإضافي، XI)، والظهرية العريضة، إضافةً إلى رافعة الكتف والمعينيتين. ووظيفتها تحريك حزام الكتف والطرف العلوي، فأعصابها من الأمام (فروع بطنية وXI) لا من فروع ظهرية. وإدراكها كـ "محرّكات للطرف صادف وجودها على الظهر" يمنعك من تسميتها خطأً عضلات ظهر حقيقية.`],
[`The true back muscles stack in three depths. Superficial: splenius, which turns and extends the head. Intermediate: the erector spinae, three long columns — Iliocostalis, Longissimus, Spinalis, lateral to medial, ("I Love Spaghetti") — the main straighteners of the spine. Deep: the transversospinalis (semispinalis, multifidus, rotatores) that fine-tune and stabilise between vertebrae. Superficial extends broadly, deep stabilises finely.`,`عضلات الظهر الحقيقية تترصّ في ثلاثة أعماق. سطحية: splenius التي تلفّ الرأس وتبسطه. متوسطة: الناصبة للفقار، ثلاثة أعمدة طويلة — Iliocostalis، Longissimus، Spinalis، من الوحشي للإنسي — وهي المقوّمات الرئيسية للعمود. عميقة: المستعرضة الشوكية (semispinalis، multifidus، rotatores) التي تضبط وتثبّت بين الفقرات. السطحية تبسط عموماً، والعميقة تثبّت بدقّة.`],
[`Tie it together with the rule that wins marks: all true, intrinsic back muscles are supplied by dorsal rami — no exceptions. The superficial muscles that also lie on the back but move the limb, like trapezius and latissimus, are NOT dorsal-ramus muscles. When an exam asks you to classify a back muscle, check its nerve first; the answer follows automatically.`,`اجمعها بالقاعدة التي تكسب الدرجات: كل عضلات الظهر الحقيقية الجوهرية تغذّيها الفروع الظهرية — بلا استثناء. أما العضلات السطحية التي تقع على الظهر أيضاً لكنها تحرّك الطرف، كشبه المنحرفة والظهرية العريضة، فليست عضلات فرع ظهري. فحين يطلب الامتحان تصنيف عضلة ظهر، افحص عصبها أولاً؛ يتبع الجواب تلقائياً.`]
],
brain:[
[`Zoom out before the details. The brain has four big parts: the cerebrum, the large wrinkled hemispheres in four lobes, doing thought, movement and sensation; the diencephalon deep in the middle, the thalamus as sensory relay plus the hypothalamus as control panel for hormones and drives; the brainstem, the stalk carrying traffic and running vital reflexes; and the cerebellum at the back for coordination and balance. Fix these four regions and every later detail has a home.`,`ابتعد قبل التفاصيل. للدماغ أربعة أجزاء كبرى: المخ، نصفا الكرة المتغضّنان الكبيران في أربعة فصوص، للتفكير والحركة والإحساس؛ والدماغ البيني في العمق الأوسط، المهاد كمحطّة حسّ وتحت المهاد كلوحة تحكّم بالهرمونات والدوافع؛ وجذع الدماغ، الساق الحاملة للمرور والمشغّلة للمنعكسات الحيوية؛ والمخيخ خلفاً للتنسيق والتوازن. ثبّت هذه المناطق الأربع يجد كل تفصيل لاحق بيتاً له.`],
[`Each cerebral lobe has headline functions worth memorising. Frontal: movement — the precentral gyrus is the motor strip — plus Broca's area for producing speech. Parietal: body sensation, the postcentral gyrus. Temporal: hearing, memory, and Wernicke's area for understanding speech. Occipital: vision. A neat pairing to hold: precentral equals motor, postcentral equals sensory — they sit on either side of the central sulcus like mirror twins.`,`لكل فصّ مخّي وظائف رئيسية تستحقّ الحفظ. الجبهي: الحركة — التلفيف قبل المركزي هو شريط الحركة — إضافةً إلى منطقة بروكا لإنتاج الكلام. الجداري: حسّ الجسم، التلفيف بعد المركزي. الصدغي: السمع والذاكرة ومنطقة فيرنيكه لفهم الكلام. القذالي: الرؤية. واقتران أنيق: قبل المركزي = حركة، وبعد المركزي = حسّ — يجلسان على جانبي التلم المركزي كتوأمين متقابلين.`],
[`The brainstem has three floors, and each launches specific cranial nerves — a favourite exam link. The midbrain gives III and IV; the pons gives V, VI, VII, VIII; the medulla gives IX, X, XII. Behind it, the cerebellum coordinates smooth movement and balance. Remember its odd rule: a cerebellar injury causes clumsiness on the SAME side as the lesion (ipsilateral) — unlike most of the brain, which works on the opposite side.`,`لجذع الدماغ ثلاثة طوابق، وكلٌّ يُطلق أعصاباً قحفية محددة — رابط امتحاني مفضّل. الدماغ المتوسط يعطي III وIV؛ والجسر يعطي V وVI وVII وVIII؛ والنخاع المستطيل يعطي IX وX وXII. وخلفه، ينسّق المخيخ الحركة السلسة والتوازن. تذكّر قاعدته الغريبة: إصابة المخيخ تسبّب خرقاً في الجهة نفسها للإصابة (مماثلة) — على خلاف معظم الدماغ الذي يعمل على الجهة المقابلة.`],
[`Language lives in two spots, and the difference is elegant. Broca's area (frontal) builds speech; damage it and the patient understands fine but struggles to get words out — halting, non-fluent, expressive aphasia. Wernicke's area (temporal) comprehends; damage it and speech flows easily but makes no sense — fluent, receptive aphasia. Broca means can't produce, Wernicke means can't understand: two areas, two opposite pictures.`,`تسكن اللغة موضعين، والفرق أنيق. منطقة بروكا (جبهية) تبني الكلام؛ إصابتها يفهم المريض جيداً لكنه يكافح لإخراج الكلمات — حبسة متعثّرة غير طليقة تعبيرية. ومنطقة فيرنيكه (صدغية) تفهم؛ إصابتها يتدفّق الكلام بسهولة لكن بلا معنى — حبسة طليقة استقبالية. بروكا تعني لا يُنتج، وفيرنيكه تعني لا يفهم: منطقتان، وصورتان متعاكستان.`]
],
cerebral:[
[`The brain is fed from front and back. The front, anterior, supply is the two internal carotid arteries climbing up the neck. The back, posterior, supply is the two vertebral arteries, which join to form a single basilar artery. So four vessels enter, feeding a front territory and a back territory. Getting these two sources clear is the foundation for the safety-ring you will meet next.`,`يُغذّى الدماغ من الأمام والخلف. التغذية الأمامية هي الشريانان السباتيان الباطنان الصاعدان في العنق. والخلفية هي الشريانان الفقريان اللذان يتّحدان مكوّنَين شرياناً قاعدياً واحداً. فأربعة أوعية تدخل، تغذّي منطقة أمامية وأخرى خلفية. وتوضيح هذين المصدرين هو أساس حلقة الأمان التي ستقابلها تالياً.`],
[`Nature links the front and back supplies into a safety ring at the brain's base — the Circle of Willis. Its beauty is redundancy: if one feeding artery narrows, blood can detour around the ring to keep the brain supplied. It is built from the two internal carotids, the two anterior cerebrals joined by the anterior communicating artery, and the two posterior cerebrals joined back by the posterior communicating arteries. A ring, so that no single blockage starves the brain.`,`تربط الطبيعة التغذيتين الأمامية والخلفية في حلقة أمان عند قاعدة الدماغ — دائرة ويليس. وجمالها في التكرار: إذا ضاق شريان مغذٍّ، يستدير الدم حول الحلقة ليبقي الدماغ مغذّى. وتُبنى من السباتيين الباطنين، والدماغيين الأماميين موصولين بالشريان الموصِل الأمامي، والدماغيين الخلفيين موصولين رجوعاً بالشريانين الموصِلين الخلفيين. حلقة، كي لا يُجوّع انسدادٌ واحد الدماغ.`],
[`Three cerebral arteries split the hemisphere between them, and each stroke has a signature. The anterior cerebral (ACA) feeds the inner surface — the leg area — so its stroke weakens the opposite leg. The middle cerebral (MCA) feeds the outer surface — face and arm, plus the speech areas — so its stroke weakens the opposite face and arm, often with aphasia. The posterior cerebral (PCA) feeds the occipital lobe, so its stroke steals part of the visual field. Territory predicts deficit.`,`ثلاثة شرايين دماغية تقتسم نصف الكرة، ولكل سكتة بصمة. الدماغي الأمامي (ACA) يغذّي السطح الداخلي — منطقة الساق — فسكتته تُضعف الساق المقابلة. والأوسط (MCA) يغذّي السطح الخارجي — الوجه والذراع ومناطق الكلام — فسكتته تُضعف الوجه والذراع المقابلين، غالباً مع حبسة. والخلفي (PCA) يغذّي الفصّ القذالي، فسكتته تسرق جزءاً من المجال البصري. المنطقة تتنبّأ بالعجز.`],
[`Don't forget the return trip. After feeding the tissue, blood collects into cerebral veins, which empty into the dural venous sinuses you studied earlier, and those funnel out through the internal jugular vein. So the cerebral circulation is a full loop: carotids and vertebrals in, sinuses and jugular out. Closing the loop keeps the whole picture coherent.`,`لا تنسَ رحلة العودة. بعد تغذية النسيج، يتجمّع الدم في أوردة دماغية تصبّ في الجيوب الوريدية الجافوية التي درستها سابقاً، وتلك تصرف خارجاً عبر الوريد الوداجي الباطن. فالدوران الدماغي حلقة كاملة: السباتيان والفقريان دخولاً، والجيوب والوداجي خروجاً. وإغلاق الحلقة يبقي الصورة كلّها متماسكة.`]
],
cord:[
[`Know exactly where the spinal cord begins and ends, because it explains a common procedure. It starts at the foramen magnum, continuous with the brainstem, and in an adult ends around L1–L2 as a tapered tip, the conus medullaris. Below that, loose nerve roots hang down like a horse's tail — the cauda equina. There are also two swellings, cervical and lumbosacral, where the limb nerves emerge. Remember "cord ends at L1–L2"; the lumbar puncture point depends on it.`,`اعرف بالضبط أين يبدأ النخاع الشوكي وأين ينتهي، فذلك يفسّر إجراءً شائعاً. يبدأ عند الثقبة العظمى، متّصلاً بجذع الدماغ، وفي البالغ ينتهي نحو L1–L2 كطرف مدبّب، المخروط النخاعي. وأسفله تتدلّى جذور عصبية رخوة كذيل الفرس — ذنب الفرس. وثمة انتفاخان، عنقي وقطني عجزي، حيث تخرج أعصاب الطرفين. احفظ "النخاع ينتهي عند L1–L2"؛ فموضع البزل القطني يعتمد عليه.`],
[`Thirty-one pairs of spinal nerves branch off in an orderly count: 8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal. Each nerve is built from two roots with a clean division of labour: the dorsal, or posterior, root is sensory — carrying information in — and the ventral, or anterior, root is motor — carrying commands out. "Dorsal in, ventral out" is a rule you will use constantly in neurology.`,`واحد وثلاثون زوجاً من الأعصاب الشوكية تتفرّع بعدّ منظّم: 8 عنقية، 12 صدرية، 5 قطنية، 5 عجزية، 1 عصعصي. وكل عصب من جذرين بتقسيم واضح للعمل: الجذر الظهري، أو الخلفي، حسّي — يحمل المعلومات داخلاً — والبطني، أو الأمامي، حركي — يحمل الأوامر خارجاً. "الظهري داخلاً، البطني خارجاً" قاعدة ستستعملها دائماً في العصبيات.`],
[`Slice the cord and you see grey matter shaped like an H in the centre (nerve cell bodies) surrounded by white matter (the cabling of tracts). Three tracts are must-knows. Ascending: the dorsal columns carry fine touch, vibration and position sense; the spinothalamic tract carries pain and temperature. Descending: the corticospinal tract carries voluntary movement commands down. Sensory up, motor down — and know which sensation travels in which lane.`,`اقطع النخاع ترَ مادة رمادية على شكل H في المركز (أجسام الخلايا العصبية) محاطة بمادة بيضاء (أسلاك السبل). وثلاثة سبل يجب معرفتها. صاعدة: الأعمدة الظهرية تحمل اللمس الدقيق والاهتزاز وحسّ الوضع؛ والسبيل الشوكي المهادي يحمل الألم والحرارة. نازل: السبيل القشري النخاعي يحمل أوامر الحركة الإرادية نزولاً. الحسّ صاعد، والحركة نازلة — واعرف أي إحساس يسير في أي مسار.`],
[`Three protective membranes wrap the cord — dura outside, arachnoid, and pia hugging the cord — with cerebrospinal fluid cushioning it in the subarachnoid space. This anatomy dictates the lumbar puncture: because the adult cord stops at about L1–L2, doctors insert the needle lower, at L3/4 or L4/5, into the fluid among the harmless, floating cauda equina roots. Same reason, one clean rule: go below the cord to sample the fluid safely.`,`ثلاثة أغشية واقية تلفّ النخاع — الجافية خارجاً، والعنكبوتية، والحنون الملاصقة للنخاع — مع سائل دماغي شوكي يوسّده في الحيّز تحت العنكبوتي. وهذا التشريح يملي البزل القطني: لأن نخاع البالغ يتوقّف عند نحو L1–L2، يُدخل الطبيب الإبرة أدنى، عند L3/4 أو L4/5، في السائل بين جذور ذنب الفرس الطافية غير المؤذية. سبب واحد وقاعدة نظيفة: انزل أسفل النخاع لسحب السائل بأمان.`]
],
limbic:[
[`Before the parts, grasp the purpose. The limbic system is the brain's emotional and memory core — it governs feelings, the laying-down of new memories, motivation and drives, behaviour, and, uniquely close to it, the sense of smell. It is the bridge between raw emotion and conscious thought. Knowing the system's job makes each component's role click into place.`,`قبل الأجزاء، افهم الغرض. الجهاز الحوفي هو نواة الدماغ العاطفية والذاكرية — يحكم المشاعر، وترسيخ الذكريات الجديدة، والدافعية والغرائز، والسلوك، وبقربٍ فريد منه، حاسّة الشمّ. إنه الجسر بين العاطفة الخام والفكر الواعي. ومعرفة وظيفة الجهاز تجعل دور كل مكوّن يستقرّ في مكانه.`],
[`Two structures headline. The hippocampus is your memory-maker — it converts experiences into lasting memories. The amygdala is your fear-and-emotion centre — it flags threats and colours events emotionally. Around them work the cingulate and parahippocampal gyri, the fornix (the hippocampus's main output cable), the mammillary bodies, the anterior thalamus, and the olfactory bulb. Learn the two stars first; the supporting cast connects them into a circuit.`,`تركيبان يتصدّران. الحُصين صانع ذاكرتك — يحوّل التجارب إلى ذكريات دائمة. واللوزة مركز الخوف والعاطفة — تُنذر بالتهديدات وتصبغ الأحداث عاطفياً. وحولهما يعمل التلفيفان الحزامي وجانب الحُصين، والقبو (fornix، كابل الخرج الرئيسي للحُصين)، والأجسام الحلمية، والمهاد الأمامي، والبصلة الشمّية. احفظ النجمين أولاً؛ ويربطهما الطاقم المساند في دارة.`],
[`Those parts are not random — they form a loop, the Papez circuit, that carries emotion and memory around. Trace it once and it sticks: hippocampus → fornix → mammillary bodies → anterior thalamus → cingulate gyrus → parahippocampal gyrus → back to the hippocampus. Think of it as a memory-and-emotion racetrack; naming the stations in order is a classic exam ask.`,`تلك الأجزاء ليست عشوائية — بل تشكّل حلقة، دارة بابيز، تحمل العاطفة والذاكرة دوراناً. تتبّعها مرّة تثبت: الحُصين ← القبو ← الأجسام الحلمية ← المهاد الأمامي ← التلفيف الحزامي ← جانب الحُصين ← عودة للحُصين. تخيّلها مضمار سباق للذاكرة والعاطفة؛ وتسمية المحطّات بالترتيب سؤال امتحاني كلاسيكي.`],
[`The clinic proves the anatomy. Destroy both hippocampi and a person can no longer form new memories — they live in the present, unable to record new events, which is anterograde amnesia. Damage the mammillary bodies, classically from thiamine (vitamin B1) deficiency in chronic alcoholism, and you get the amnesia of Korsakoff's syndrome. Memory structures fail, memory fails: the limbic system's jobs are visible in its diseases.`,`السريريات تُثبت التشريح. دمّر الحُصينين معاً يعجز الشخص عن تكوين ذكريات جديدة — يعيش في الحاضر عاجزاً عن تسجيل أحداث جديدة، وهو فقدان الذاكرة التقدّمي. وأتلف الأجسام الحلمية، كلاسيكياً من عوز الثيامين (فيتامين B1) في إدمان الكحول المزمن، تحصل على نساوة متلازمة كورساكوف. تفشل تراكيب الذاكرة، تفشل الذاكرة: وظائف الجهاز الحوفي ظاهرة في أمراضه.`]
]
};
