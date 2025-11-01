'use client'

import { MapPin, Calendar, Clock, Star, ChevronLeft, Heart, Share2, User, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import BookingModal from '@/components/BookingModal'

// Dinamik veri - gerçek uygulamada bu API'den gelecek
const getExperienceData = (id: string) => {
  const experiences: Record<string, any> = {
    '1': {
      id: 1,
      title: "فجر السماء: تجربة منطاد الهواء في كبادوكيا - Gökyüzünde Şafak: Kapadokya Balon Deneyimi",
      author: "آيش يلماز",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "كاتبة سفر ومحبة للمغامرة. تكتشف أجمل الأماكن في تركيا بخبرة تزيد عن 10 سنوات.",
      date: "15 أكتوبر 2024",
      readTime: "5 دقائق قراءة",
      location: "كبادوكيا",
      duration: "3 ساعات",
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg",
      category: "مغامرة",
      difficulty: "متوسط",
      groupSize: "4-16",
      highlights: ["رحلة الفجر", "أبراج الجن", "إفطار شمبانيا"],
      excerpt: "عش اللحظة السحرية التي تملأ فيها آلاف المنطادات السماء بالألوان. استمتع بسحر شروق الشمس وأنت تطفو فوق أبراج الجن في كبادوكيا...",
      content: `
        <h2>استقبال الشمس من السماء: تجربة فجر سحرية</h2>
        <p>الطيران بالمنطاد في كبادوكيا ليس مجرد نشاط، بل هو تجربة لا تُنسى مدى الحياة تلامس روحك. عندما تصل إلى منطاد إطلاق المنطادات في الصباح الباكر، فإن رؤية عشرات المنطادات تنتفخ في نفس الوقت مع خلفية شروق الشمس هو بحد ذاته احتفال رائع. هذه التجربة الفريدة، حيث أول ضوء النهار يرسم السماء بألوان دافئة، تمنحك فرصة لمشاهدة أروع عرض طبيعي في الصباح من ارتفاع مئات الأمتار فوق الأرض.</p>
        
        <h3>سحر رحلة الفجر</h3>
        <p>لماذا وقت الفجر؟ لأن هذا هو الوقت الذي تؤدي فيه الطبيعة أروع عرضها. منطادات الهواء الساخن التي تقلع مع أول أشعة الصباح مصممة لتلتقط أجمل لحظات شروق الشمس. في طقس الصباح الهادئ، تطفو منطادات الهواء الساخن بهدوء، مقدمة لك مشاهد uninterrupted لمناظر كبادوكيا الفريدة. خلال هذه الرحلة التي تستمر حوالي ساعة واحدة، ستشعر وكأنك تطفو في حلم بينما تشرق الشمس ببطء لتضيء الأبراج والوديان أدناه.</p>
        
        <h3>ماذا تتوقع خلال رحلتك</h3>
        <p>تبدأ مغامرة المنطاد الخاصة بك مع خدمة النقل من الفندق في ساعات الصباح الباكر. عند وصولك إلى موقع الإطلاق، ستشهد بانبهاء بينما يأتي منطادك إلى الحياة، ينمو ويزداد حجمًا مع امتلائه بالهواء الساخن. بعد إيجاز السلامة الشامل من طيارك المحترف، ستدخل إلى السلة المصنوعة من الخيزان وتبدأ صعودك السلس إلى السماء. تستمر الرحلة عادة 45-60 دقيقة، وخلالها ستنقل مع تيارات الرياح فوق أروع المناظر الطبيعية في كبادوكيا.</p>
        
        <h3>حزمة الخدمات الكاملة</h3>
        <ul>
          <li><strong>خدمة النقل من الفندق:</strong> نقل مريح من فندقك إلى موقع الإطلاق والعودة</li>
          <li><strong>تجربة الطيار المحترف:</strong> رحلات تجرى بواسطة طيارين حاصلين على شهادات دولية وذوي خبرة</li>
          <li><strong>إيجاز السلامة الشامل:</strong> تعليمات مفصلة ومعدات سلامة مقدمة</li>
          <li><strong>احتفال الشمبانيا:</strong> تحية شمبانيا تقليدية ووجبة خفيفة بعد الهبوط</li>
          <li><strong>شهادة الرحلة التذكارية:</strong> شهادة شخصية لتتذكر يومك المميز</li>
          <li><strong>تغطية تأمينية كاملة:</strong> تغطية تأمينية كاملة خلال تجربتك</li>
        </ul>
        
        <h3>مسار الرحلة المذهل</h3>
        <p>في هذه الرحلة السحرية التي ستحلق فيها فوق أبراج الجن ووادي إهلارا ودير سليمي، سترى تاريخ كبادوكيا البالغ 3000 عام وجمالها الطبيعي من منظور الطيور. سيقوم طيارك بالتنقل باستخدام تيارات الرياح لعرض أجمل التكوينات في المنطقة. ستحلق فوق وادي الحب والوادي الأحمر ومواقع أيقونية أخرى، مع فرص وفيرة للتصوير التي ستلتقط جوهر هذه المناظر الأخرىworldly. مسار الرحلة يختلف يوميًا بناءً على ظروف الرياح، مما يضمن أن كل رحلة فريدة ومصممة لعرض أفضل مميزات في كبادوكيا.</p>
        
        <h3>أفضل وقت للتجربة</h3>
        <p>بينما تتوفر رحلات المنطاد في كبادوكيا على مدار العام، فإن أفضل الظروف تحدث عادة من أبريل إلى نوفمبر عندما تكون أنماط الطقس الأكثر ملاءمة. الربيع والخريف توفر على وجه الخصوص خلفيات مذهلة مع الأزهار المتفتحة أو ألوان الخريف التي تعزز بالفعل المنظر الدرامي. تعمل الرحلات يوميًا، سماحًا بذلك الطقس، مع أوقات الإقلاق عادة حول شروق الشمس للاستفادة من ظروف الهواء الأكثر هدوءًا.</p>
        
        <h3>لماذا هذه التجربة خاصة</h3>
        <p>ما يميز رحلات المنطاد في كبادوكيا هو مزيج من الدهشة الطبيعية والأهمية الثقافية والتحول الشخصي. هذه ليست مجرد جولة سياحية - بل هي رحلة تربطك بتقاليد الطيران القديمة مع خلق ذكريات تدوم مدى الحياة. الهدوء السلمي للطيران فوق الأرض، الذي ينقطعه فقط الانفجار العرضي للمحرك، يوفر تجربة تأملية لا تستطيع العديد من المغامرات الأخرى مطابقتها. بينما تشاهد المنظر يستيقظ أدناه، ستفهم لماذا ألهمت هذه المنطقة الزوار لآلاف السنين ولماذا أصبح الطيران بالمنطاد هو التجربة الأساسية لكبادوكيا.</p>
      `,
      tags: ["كبادوكيا", "رحلة المنطاد", "الفجر", "مغامرة"],
      gallery: [
        "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg",
        "/images/destinations/cappadocia.jpg",
        "/images/destinations/cappadocia.jpg"
      ],
      relatedExperiences: [
        { id: 2, title: "مغامرة اليخت الخاص في المياه الزرقاء لبحر إيجه", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" },
        { id: 3, title: "سر العثماني: طقوس الحمام التركي التقليدي", image: "/team/seyfettin.jpg" }
      ]
    },
    '2': {
      id: 2,
      title: "مغامرة اليخت الخاص في المياه الزرقاء لبحر إيجه",
      author: "محمد كايا",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "عاشق البحار وقبطان. ينظم رحلات اليخوت الخاصة في بحر إيجه والمتوسط منذ 15 عامًا.",
      date: "12 أكتوبر 2024",
      readTime: "7 دقائق قراءة",
      location: "بودروم",
      duration: "يوم كامل",
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg",
      category: "فاخر",
      difficulty: "سهل",
      groupSize: "2-8",
      highlights: ["يخت خاص", "خلع للسباحة", "غداء راقٍ"],
      excerpt: "اكتشف الخلجان الساحرة في بحر إيجه على يختك الخاص. استمتع برحلة بحرية زرقاء لا تُنسى مع طاقم محترف...",
      content: `
        <h2>جواهر بحر إيجه: رحلتك الخاصة المائية الفاخرة</h2>
        <p>انطلق في مغامرة بحرية استثنائية تتجاوز حدود السفر التقليدي. من مرفأ بودروم الخلابة، نشرع في رحلة لاكتشاف كنوز بحر إيجه المخفية، حيث تحول المياه التركوازية إلى ملعبك الشخصي طوال اليوم الذي سينتهي بمنظر غروب الشمس الذي يرسم الأفق بألوان رائعة.</p>
        
        <h3>حرية اليخوت الخاصة</h3>
        <p>تجربة اليخوت الخاصة تقدم حرية لا مثيل لها، على عكس الجولات التجارية المزدحمة. لديك السيطرة الكاملة على مسار رحلتك، مما يسمح لك باكتشاف الخلجان المنعزلة التي لا تستطيع السفن الكبيرة الوصول إليها، والبقاء لفترات أطول في المواقع التي سحرك، وتصميم عطلتك وفقًا لإيقاعك الخاص. قبطاننا الخبير بهذه المياه معرفة عميقة، وسيرشدك إلى أسرار المنطقة المحفوظة جيدًا.</p>
        
        <h3>برنامج يومي مصمم بعناية</h3>
        <p>ينطلق يومك بعناية فائقة لتسليط جمال بحر إيجه المتنوع. كل توقفة تم اختيارها بعناية لتوازن مثالي بين الاسترخاء والمغامرة والاكتشاف الثقافي:</p>
        <ul>
          <li><strong>09:00 - المغادرة الصباحية:</strong> أبحر في ضوء الصباح الباكر بينما يضيء الحصن التاريخي في بودروم</li>
          <li><strong>10:30 - إفطار جزيرة كارادا:</strong> استمتع بوجبة إفطار تركية تقليدية تقدم على متن اليخت أثناء رسوّه في المياه البلورية الصافية، تليها سباحة وتنفسّس تحت الماء في ظروف مثالية</li>
          <li><strong>13:00 - غداء gourmet في جزيرة أوراك:</strong> تذوق المأكولات البحرية الطازجة والمأكولات المحلية المحضرة بواسطة طاهينا على متن اليخت، مع إطلال خلابية على الساحل التركي</li>
          <li><strong>15:30 - استراحة بعد الظهر في خليج جنّة:</strong> استرخِ في هذا الخليج الخلاب، المثالي للسباحة والتشمس، أو ببساطة الاستمتاع بأشعة الشمس على سطحنا الفسيح</li>
          <li><strong>18:00 - العودة مع غروب الشمس:</strong> أنهِ يومك برحلة بحرية خلابة إلى بودروم، مصحوبًا بالنبيذ المحلي والمقبلات الخفيفة بينما تشاهد اليوم ينتهي في ومضة من الضوء الذهبي</li>
        </ul>
        
        <h3>مواصفات اليخت الفاخرة</h3>
        <p>سفينتنا الفاخر تجمع بين الحرفية التقليدية للقاطب التركي والرفاهية العصرية. بطول 12 متر، تتسع سفينتنا لأربعة ضيوف كحد أقصى، وتحتوي على أربعة كبائن أنيقة ومراحي حديثتين، ومطبخًا مجهزًا بالكامل، ومنطقة سطح واسعة للاستمتاع بالشمس وتناول الطعام في الهواء الطلق. طاقمنا المحترف المكون من ثلاثة أشخاص—قيّاس ماهر، وطاهٍ محترف، ومضيفٍ attentive—يكرسون أنفسهم لتوفير راحتك وأمانك، مع خلق لحظات لا تُنسى طوال رحلتك.</p>
        
        <h3>تجربة تتجاوز المعيار</h3>
        <p>ما يميز رحلة اليخوت الخاصة لدينا هو الاهتمام بالتفاصيل الدقيقة والتجارب المحلية الأصيلة. زيارة على القرى الصغيرة لصيد الأسماك، والاستكشاف الآثار القديمة على طول الساحل، وحتى المشاركة في تحضير وجبات محلية على متن السفينة، وحفلات موسيقى تقليدية تؤديها على السطح—كل جانب من جوانب تجربتك مصمم بعناية لتوفير تجربة ثقافية غامرة حقًا.</p>
      `,
      tags: ["بودروم", "رحلة اليخت", "بحر إيجه", "المغامرة البحرية"],
      gallery: [
        "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg",
        "/images/destinations/bodrum.jpg",
        "/images/destinations/bodrum.jpg"
      ],
      relatedExperiences: [
        { id: 1, title: "فجر السماء: تجربة منطاد الهواء في كبادوكيا", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 4, title: "الطيران فوق الجنة البيضاء: تجربة الطيران الشراعي في باموكالي", image: "/images/destinations/pamukkale.jpg" }
      ]
    },
    '3': {
      id: 3,
      title: "سر العثماني: طقوس الحمام التركي التقليدي",
      author: "زينب دمير",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "مؤرخة ثقافية وخبيرة في العلاجات التقليدية. تدمج ثقافة الحمام العثماني مع الأساليب الحديثة.",
      date: "10 أكتوبر 2024",
      readTime: "4 دقائق قراءة",
      location: "إسطنبول",
      duration: "ساعتان",
      price: 85,
      rating: 4.7,
      reviews: 198,
      image: "/images/destinations/istanbul.jpg",
      category: "ثقافي",
      difficulty: "سهل",
      groupSize: "2-6",
      highlights: ["حمام تاريخي", "تدليك تقليدي", "زيوت عطرية"],
      excerpt: "جرب ثقافة الحمام التركي التي استمرت لقرون. استرخِ وانعش في هذا الطقس التقليدي الذي يجدد جسدك وروحك...",
      content: `
        <h2>قلب الإرث العثماني: تجربة الحمام التركي الأصيل</h2>
        <p>ادخل إلى متحف حي للعافية حيث تستمر تقاليد العثمانية على قيد الحياة منذ أكثر من 600 عام. في هذه الحمامات التقليدية الواقعة في الأحياء التاريخية بإسطنبول، ستشهد طقسًا لم يتغير تقريبًا، حيث يرتفع البخار من الأحواض الرخامية، وتتحرك الأيادي الخبيرة للمدلك (الحمامون)، وتتردد صدى التقاليد داخل هذه الجدران التي شهدت قصصًا لا تحصى.</p>
        
        <h3>الأهمية الثقافية للحمام</h3>
        <p>يمثل الحمام التركي أكثر من مجرد طقس تنقيف؛ إنه تجسيد ثقافي عميق. هذا التقليد لم يكن مجرد تنظيف الجسد—بل كان المكان الذي تُعقد فيه الصفقات التجارية، وتُعزز فيه الصداقات، وتُقوى فيه علاقات المجتمع. اليوم، يستمر هذا التقليد المحبوب، محافظًا على الممارسات الأصيلة مع تبنيه الأساليب الحديثة.</p>
        
        <h3>الفوائد الصحية المعترف بها</h3>
        <p>يتجاوز الحمام التركي الشعور بالاسترخاء الفوري ليقدم فوائد صحية معترف بها علميًا والتي شكلت حجر الزاوية في ممارسات العافية التركية:</p>
        <ul>
          <li><strong>تحسين الدورة الدموية:</strong> مزيج الحرارة والبخار يحفز على تدفق الدم، مما يحسن وظائف القلب والأوعية وينشر الدم المؤكسج بالأكسجين الغني بالأكسجين</li>
          <li><strong>تجديد البشرة وإزالة السموم:</strong> التنظيف العميق يزيل خلايا الجلد الميتة ويفتح المسام، مما يعزز تجديد الخلايا ويمنح بشرتك توهجًا صحيًا ومشرقًا</li>
          <li><strong>تخفيف آلام العضلات والمفاصل:</strong> الحرارة العلاجية تخفف الالتهابات وتقلل الألم المزمن، مما توفر راحة لحالات مثل التهاب المفاصل والروماتيزم</li>
          <li><strong>تقليل التوتر وتوفير الاسترخاء:</strong> البيئة الهادئة والحركات الإيقاعية للتدليك تقلل مستويات الكورتيزول وتعزز إفراز الإندورفين، مما يخلق شعورًا عميقًا بالرفاهية والسكينة</li>
        </ul>
        
        <h3>المراحل الخمسة للطقس التقليدي</h3>
        <p>تجربة الحمام الخاصة بك تتبع تسلسلًا دقيقًا تم إتقانه عبر قرون، حيث كل مرحلة يخدم أغراضًا عملية ورمزية:</p>
        <ul>
          <li><strong>التحضير في قسم التسخين:</strong> ابدأ في الحارة (السخين) حيث يتكيف جسمك تدريجيًا مع ارتفاع درجة الحرارة، استعدادًا لطقس التنظيف القادم</li>
          <li><strong>التقشير بالكيس:</strong> جرب تقشير الكيس التقليدي حيث يستخدم الحمامي قفازًا مصنوعًا خصيصًا لإزالة خلايا الجلد الميتة وتحفيز الدورة الدموية</li>
          <li><strong>التدليك بالرغوة والكوبوك:</strong> استمتع بالرغوة الكثيفة التي تتشكل في كيس خاص (الكوبوك)، متبوعًا بتقنيات التدليك الاحترافية التي تطلق التوتر وتعزز الاسترخاء</li>
          <li><strong>الغسل والراحة:</strong> اغسل جيدًا بالماء الدافئ تليهًا فترة راحة تسمح لجسمك بامتصاص الفوائد الكاملة للعلاجات السابقة</li>
          <li><strong>التدليك بالزيوت العطرية:</strong> أنهِ طقسك بتدليك لطيف باستخدام زيوت عطرية مختارة بعناية، لكل منها خصائص علاجية فريدة وارتباط بتقاليد العافية التركية</li>
        </ul>
        
        <h3>تجربة تتجاوز المعيار</h3>
        <p>تجربة الحمام التركي لدينا تقدم لمسات أصلية تتجاوز العلاجات القياسية. من الوجبات التقليدية التي تُقدم بين المراحل، إلى فرصة للتعرف على الأهمية التاريخية للعناصر المعمارية المختلفة والرموز داخل الحمام، إلى جلسات علاجية بالزيوت الأساسية والعشبية المشتقة محليًا، مما يوفر فهمًا ثقافيًا أعمق واسترخاءً محسّنًا.</p>
      `,
      tags: ["إسطنبول", "الحمام التركي", "ثقافة", "استرخاء"],
      gallery: [
        "/images/destinations/istanbul.jpg",
        "/team/seyfettin.jpg",
        "/images/destinations/istanbul.jpg"
      ],
      relatedExperiences: [
        { id: 1, title: "فجر السماء: تجربة منطاد الهواء في كبادوكيا", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 5, title: "خريطة النكهات في إسطنبول: جولة الطعام في الشوارع", image: "/images/destinations/istanbul.jpg" }
      ]
    },
    '4': {
      id: 4,
      title: "الطيران فوق الجنة البيضاء: تجربة الطيران الشراعي في باموكالي",
      author: "جان أوزكان",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "عاشق الأدرينالين وطيار مظلات. يقوم برحلات جوية في أجمل المناظر الطبيعية في تركيا لأكثر من 10 سنوات.",
      date: "8 أكتوبر 2024",
      readTime: "6 دقائق قراءة",
      location: "باموكالي",
      duration: "نصف يوم",
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: "/images/destinations/pamukkale.jpg",
      category: "مغامرة",
      difficulty: "متوسط",
      groupSize: "2-12",
      highlights: ["البرك الحرارية", "الشرفات البيضاء", "الآثار القديمة"],
      excerpt: "حلّق فوق الشرفات الترافرتينية البيضاء المذهلة في باموكالي بالطائرة الشراعية. اجمع بين الأدرينالين والطبيعة في هذه التجربة الفريدة...",
      content: `
        <h2>الطيران فوق باموكالي</h2>
        <p>التحليق بالطائرة الشراعية فوق الشرفات الترافرتينية البيضاء في باموكالي هو تجربة أجمل من الخيال بكل معنى الكلمة. عندما نرتفع مع طيار محترف، ننغمس في سحر الجنة البيضاء الممتدة تحتنا.</p>
        
        <h3>لماذا باموكالي؟</h3>
        <p>باموكالي، المدرجة في قائمة التراث العالمي لليونسكو، ليست فقط من أجمل الجمال الطبيعي في تركيا، بل في العالم أيضًا. الطائرة الشراعية هي الطريقة المثالية لرؤية هذه المناظر الفريدة من منظور الطيور.</p>
        
        <h3>تجربة الطيران</h3>
        <ul>
          <li>رحلة جوية مع طيار محترف</li>
          <li>إيجاز السلامة والمعدات</li>
          <li>رحلة جوية تستمر 15-20 دقيقة</li>
          <li>منظر بانورامي بزاوية 360 درجة</li>
          <li>إمكانية التصوير الفوتوغرافي والفيديو</li>
        </ul>
        
        <h3>السلامة</h3>
        <p>جميع رحلاتنا الجوية تتم بمعدات تفي بالمعايير الدولية وطيارين ذوي خبرة. سلامتك هي أولويتنا القصوى.</p>
      `,
      tags: ["باموكالي", "الطيران الشراعي", "مغامرة", "طبيعة"],
      gallery: [
        "/images/destinations/pamukkale.jpg",
        "/images/destinations/pamukkale.jpg",
        "/images/destinations/pamukkale.jpg"
      ],
      relatedExperiences: [
        { id: 1, title: "فجر السماء: تجربة منطاد الهواء في كبادوكيا", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 2, title: "مغامرة اليخت الخاص في المياه الزرقاء لبحر إيجه", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" }
      ]
    },
    '5': {
      id: 5,
      title: "خريطة النكهات في إسطنبول: جولة الطعام في الشوارع",
      author: "أليف أقصوي",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "كاتبة طعام وطاهية. تكتشف نكهات الشوارع في إسطنبول لأكثر من 15 عامًا.",
      date: "5 أكتوبر 2024",
      readTime: "8 دقائق قراءة",
      location: "إسطنبول",
      duration: "4 ساعات",
      price: 120,
      rating: 4.6,
      reviews: 156,
      image: "/images/destinations/istanbul.jpg",
      category: "مطبخ",
      difficulty: "سهل",
      groupSize: "4-12",
      highlights: ["الأسواق المحلية", "طعام الشوارع", "مطاعم تقليدية"],
      excerpt: "اكتشف النكهات الخفية في إسطنبول. بدءًا من شبه الجزيرة التاريخية، تذوق أفضل أطعمة الشوارع والنكهات المحلية في المدينة...",
      content: `
        <h2>نكهات الشوارع في إسطنبول</h2>
        <p>الأكل في إسطنبول ليس فقط لإشباع الجوع، بل هو أيضًا رحلة ثقافية. تبدأ جولتنا في الصباح الباكر في إمينونو، حيث السمك بالخبز، المحار، البقلاوة، Turkish delight...</p>
        
        <h3>مسارات النكهة</h3>
        <ul>
          <li>إمينونو - السمك بالخبز والمخلل</li>
          <li>كاراكوي - إسكندر ودونر</li>
          <li>فاتح - السلطان أحمد وشي الكفتة</li>
          <li>قاضي كوي - شي الكفتة والكباب</li>
          <li>بي أوغلو - حلويات إسطنبولية</li>
        </ul>
        
        <h3>الأسواق المحلية</h3>
        <p>سنزور أيضًا الأسواق المحلية في جولتنا. هنا ستحصل على فرصة للتعرف على الفواكه والخضروات الطازجة والأجبان والمنتجات المحلية الأخرى.</p>
      `,
      tags: ["إسطنبول", "جولة الطعام", "مطبخ", "نكهات الشوارع"],
      gallery: [
        "/experiences-gallery/:experiences:1 /gurme-sokak-lezzetleri-1.jpeg",
        "/experiences-gallery/:experiences:1 /gurme-sokak-lezzetleri-2.jpeg",
        "/experiences-gallery/:experiences:1 /gurme-sokak-lezzetleri-3.jpeg"
      ],
      relatedExperiences: [
        { id: 3, title: "سر العثماني: طقوس الحمام التركي التقليدي", image: "/team/seyfettin.jpg" },
        { id: 6, title: "السر الخفي للمتوسط: مغامرة الغوص في كاش", image: "/images/destinations/bodrum.jpg" }
      ]
    },
    '6': {
      id: 6,
      title: "السر الخفي للمتوسط: مغامرة الغوص في كاش",
      author: "باريش يلدز",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "مدرب غوص ومحب مغامرات تحت الماء. يكتشف جمال البحر تحت الماء في المتوسط لأكثر من 15 عامًا.",
      date: "3 أكتوبر 2024",
      readTime: "9 دقائق قراءة",
      location: "كاش",
      duration: "يوم كامل",
      price: 180,
      rating: 4.9,
      reviews: 89,
      image: "/images/destinations/bodrum.jpg",
      category: "مغامرة",
      difficulty: "متوسط",
      groupSize: "2-8",
      highlights: ["مياه صافية كالكريستال", "الحياة البحرية", "مدرب محترف"],
      excerpt: "اكتشف جمال البحر تحت الماء في المتوسط. استمتع بتجربة غوص لا تُنسى في المياه الصافية لكاش مع مدرب محترف...",
      content: `
        <h2>الاستكشاف في المياه الزرقاء للمتوسط: مغامرة الغوص في كاش</h2>
        <p>جهّز نفسك لرحلة استكشافية إلى أحد أروع جنان الغوص في تركيا. كاش تمثل قمة الغوص في المتوسط، حيث المياه الصافية التي يزيد مدى الرؤية عن 40 مترًا تكشف عن عالم تحت الماء المزدهر بالحياة، والحطام القديمة والتكوينات الجيولوجية الفريدة. عندما تصل إلى مركز الغوص الخاص بنا في ضوء الصباح الباكر، أنت لا تبدأ غوصًا فحسب—بل تنطلق في استكشاف لعالم خفي قليل من الزوار حقيقةً اختبروه.</p>
        
        <h3>وجهات الغوص المتميزة</h3>
        <p>كل موقع غوص في كاش يقدم منظرًا تحت المائي فريدًا وتجربة استكشافية متنوعة:</p>
        <ul>
          <li><strong>Blue Cave - كاتدراء الضوء:</strong> ادخل إلى كهف مائي رائع حيث يتسلل ضوء الشمس عبر المياه البلورية الصافية، مما يخلق أضواء زرقاء سحرية تضيء داخل الكهف. هذا الموقع المتقدم للغوص يتميز بتكويناته الصخرية الدرامية وفرص التصوير الفوتوغرافي التي تلتقط اللعب الساحر بين الضوء والظل</li>
          <li><strong>أولوبورون - كبسولة الزمن:</strong> استكشف أحد أقدم حطام السفن في المتوسط، وهو سفينة حربية تعود إلى العصر البرونزي. هنا، يمكنك السباحة بين الآثار البحرية التي لا تزال مرئية تمامًا، وتشاهد عن كثب عن الأواني المحفوظة في مكانها الأصلي</li>
          <li><strong>خليج فنر - أسرار الغسق:</strong> جرب تجربة الغوص المسائي حيث يتغير عالم تحت الماء تمامًا وتكتسب طابعًا مختلفًا تحت أضواء الغوص، مع ظهور الكائنات الليلية النشطة مثل الأخطبوطات وسرطان البحار المتوسط المحمية</li>
          <li><strong>جزيرة كيكوفا - المدينة الغارقة:</strong> اكتشف أجزاء من مستوطنة ليشية قديمة غرقت جزئيًا في الماء، يمكن الوصول إليها بالقارب فقط، مما يوفر مزيجًا فريدًا من علم الآثار واستكشاف البحري</li>
        </ul>
        
        <h3>كنز المتوسط تحت المائي</h3>
        <p>مياه كاش، حيث تتلاقى ثلاثة بحار، تمثل واحدة من أكثر النظم البيئية تنوعًا في المتوسط. هنا، ستصادف أنواع الأسماك التي لا توجد في أي مكان آخر في العالم: مجموعات ضخمة من الأسماك، الأخطبوطات، وسرطان البحار المتوسط المحمية. تكوينات الشعاب المرجانية في هذه المنطقة، على الرغم من أنها ليست شاملة مثل الشعاب المرجانية الاستوائية، تستضيف أنواعًا متكيفة تتكيف مع الظروف المعتدلة، مما يخلق لوحة حية من الألوان الزاهية والأسماك الغريبة التي تجعل تجربة الغوص أكثر لا تُنسى.</p>
        
        <h3>الاحترافية والسلامة المطلقة</h3>
        <p>تُجرى مغامرات الغوص لدينا بواسطة مدربين حاصلين على شهادات دولية وسجلات آلاف الساعات في ظروف الغوص في المتوسط. نحافظ على أعلى معايير السلامة من خلال فحص معداتنا بانتظام وتحديث الشهادات. قبل كل غوص، ستتلقى تعليمات شاملة تغطي ظروف الموقع المحددة، وسلامة المعدات، وإجراءات الطوارئ. مجموعاتنا الصغيرة تضمن لك اهتمام شخصي بينما تضمن لك الوصول إلى أفضل مواقع الغوص التي قد لا تتوفر للعمليات الأكبر.</p>
        
        <h3>ما وراء الغوص - تجربة متكاملة</h3>
        <p>مغامرة الغوص في كاش تتضمن أكثر من مجرد الوقت تحت الماء. نقدم حزمًا شاملة تشمل الإقامة في أماكن تطل على البحر، ووجبات من المأكولات البحرية الطازجة التي تشتهر بها المنطقة، وأنشطة مسائية لاستكشاف البلدة القديمة في كاش. التزامنا هو خلق تجربة غامرة وشاملة تربطك بعمق بأحد أجمل المناطق الساحلية في تركيا، مع ضمان راحتك وأمانك التامين خلال كل لحظة.</p>
      `,
      tags: ["كاش", "الغوص", "المتوسط", "تحت الماء"],
      gallery: [
        "/images/destinations/bodrum.jpg",
        "/images/destinations/bodrum.jpg",
        "/images/destinations/bodrum.jpg"
      ],
      relatedExperiences: [
        { id: 2, title: "مغامرة اليخت الخاص في المياه الزرقاء لبحر إيجه", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" },
        { id: 4, title: "الطيران فوق الجنة البيضاء: تجربة الطيران الشراعي في باموكالي", image: "/images/destinations/pamukkale.jpg" }
      ]
    }
  }

  return experiences[id] || null
}

export default function ArExperienceDetailPage({ params }: { params: { id: string } }) {
  const experience = getExperienceData(params.id)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">لم يتم العثور على التجربة</h1>
          <p className="text-gray-600 mb-8">التجربة التي تبحث عنها غير متوفرة أو قد تم إزالتها.</p>
          <Link href="/ar/experiences" className="btn-tertiary">
            العودة إلى جميع التجارب
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-tertiary-600 to-tertiary-800">
        <div className="absolute inset-0">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <div className="mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                {experience.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
              {experience.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{experience.rating} ({experience.reviews} تقييم)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/ar/experiences" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
              العودة إلى التجارب
            </Link>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
                <Heart className="w-5 h-5" />
                إضافة إلى المفضلة
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                <Share2 className="w-5 h-5" />
                مشاركة
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            {/* Author Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={experience.authorAvatar}
                    alt={experience.author}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{experience.author}</h3>
                  <p className="text-sm text-gray-600">{experience.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{experience.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: experience.content }}
              />
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-6">معرض الصور</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.gallery.map((image: string, index: number) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${experience.title} - ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">التعليقات ({experience.reviews})</h3>
              
              {/* Comment Form */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <input
                    type="text"
                    placeholder="اسمك..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="تعليقك..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent mb-3"
                />
                <button className="btn-tertiary">
                  أضف تعليق
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">أحمد دمير</p>
                      <p className="text-sm text-gray-500">منذ يومين</p>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">
                    تجربة رائعة! خاصة مشاهدة شروق الشمس من المنطاد كانت مذهلة. أوصي بها بشدة.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">آيش كايا</p>
                      <p className="text-sm text-gray-500">منذ أسبوع</p>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">
                    فريق محترف ورحلة آمنة. المناظر تستحق كل شيء!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 lg:sticky lg:top-24 lg:z-10">
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-tertiary-600">€{experience.price}</p>
                <p className="text-gray-600">للشخص الواحد</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">المدة</span>
                  <span className="font-medium">{experience.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">حجم المجموعة</span>
                  <span className="font-medium">{experience.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">الصعوبة</span>
                  <span className="font-medium">{experience.difficulty}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">أبرز المميزات</h4>
                <div className="space-y-2">
                  {experience.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-tertiary-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full btn-tertiary mb-3">
                احجز الآن
              </button>
              <button
                onClick={() => window.open(`https://wa.me/9050641785?text=مرحباً، أود الحصول على معلومات عن ${experience.title}.`, '_blank')}
                className="w-full border border-tertiary-600 text-tertiary-600 py-3 rounded-lg font-semibold hover:bg-tertiary-50 transition-colors flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.9-5.7a2 2 0 0 1 .3-1.47l8.8-8.8a2 2 0 0 1 1.47-.3L21 3"/>
                  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0-2z"/>
                  <path d="M21 3l-6 6m0-6v6m0-6H9"/>
                </svg>
                التواصل عبر واتساب
              </button>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">العلامات</h3>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Experiences */}
            <div className="bg-white rounded-xl shadow-lg p-6 relative lg:z-0">
              <h3 className="text-lg font-semibold mb-4">تجارب ذات صلة</h3>
              <div className="space-y-4">
                {experience.relatedExperiences.map((related: any, index: number) => (
                  <Link key={index} href={`/ar/experiences/${related.id}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-tertiary-600 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-tertiary-600 mt-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}