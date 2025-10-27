'use client'

import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Tour data - in a real app, this would come from an API or database
const toursData = {
  1: {
    id: 1,
    title: 'جولة البوسفور في اسطنبول',
    location: 'اسطنبول',
    rating: 4.8,
    reviews: 156,
    price: 89,
    image: '/images/destinations/istanbul.jpg',
    category: 'cruise',
    difficulty: 'سهل',
    groupSize: '2-20',
    duration: '3 ساعات',
    highlights: ['جسر البوسفور', 'قصر دولماباهçe', 'مسجد أورتاكوي'],
    description: 'تجربة سحر اسطنبول من الماء مع جولتنا الفاخرة التي تشمل العشاء والترفيه.',
    fullDescription: 'انضم إلينا في أمسية لا تُنسى في مضيق البوسفور. رحلتنا الفاخرة تقدم إطلالات خلابة على معالم اسطنبول الأيقونية، بما في ذلك جسر البوسفور المهيب، وقصر دولماباهçe، ومسجد أورتاكوي. استمتع بعشاء فاخر مع الترفيه الحي أثناء الإبحار في هذه الممرات المائية التي تفصل بين أوروبا وآسيا.',
    features: [
      'إطلالات خلابة على معالم اسطنبول ليلاً',
      'عشاء فاخر مع المطبخ التركي التقليدي',
      'ترفيه موسيقية حية وموسيقى',
      'يخوت فاخر مع مقاعد مريحة',
      'دليل محترف مع تعليقات تاريخية',
      'مشروبات ووجبات خفيفة مجانية',
      'فرص تصوير مع أفق اسطنبول المضاء'
    ],
    itinerary: [
      {
        time: '19:00',
        activity: 'الصعود على الرصيف',
        description: 'مشروبات الترحيب وتقديم للطاقم'
      },
      {
        time: '19:30',
        activity: 'بدء خدمة العشاء',
        description: 'عشاء متعدد الأطباق مع المطبخ التركي والدولي'
      },
      {
        time: '20:30',
        activity: 'عرض ترفيهي',
        description: 'موسيقى حية ورقصات تقليدية'
      },
      {
        time: '21:30',
        activity: 'عبور جسر البوسفور',
        description: 'الإبحار تحت الجسر المضاء مع فرص التصوير'
      },
      {
        time: '22:00',
        activity: 'إطلالات على قصر دولماباهçe',
        description: 'مشاهدة القصر العثماني وحدائقه الجميلة'
      },
      {
        time: '22:30',
        activity: 'العودة إلى الرصيف',
        description: 'النزول والعودة إلى الفندق'
      }
    ],
    included: [
      'رحلة يخت فاخر',
      'عشاء فاخر',
      'ترفيه حي',
      'مشروبات الترحيب',
      'دليل محترف',
      'فرص تصوير'
    ],
    notIncluded: [
      'نقل من وإلى الفنادق',
      'المشروبات الكحولية (متاحة للشراء)',
      'الإكراميات'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'رصيف كاباتاش، اسطنبول، تركيا'
    }
  },
  2: {
    id: 2,
    title: 'البالون الحر في كابادوكيا',
    location: 'كابادوكيا',
    rating: 4.9,
    reviews: 289,
    price: 150,
    image: '/images/destinations/cappadocia.jpg',
    category: 'adventure',
    difficulty: 'متوسط',
    groupSize: '4-16',
    duration: 'يوم واحد',
    highlights: ['رحلة شروق الشمس', 'أبراج الخيالية', 'المدن تحت الأرض'],
    description: 'طف فوق المناظر السحرية لكابادوكيا في بالون الحر عند شروق الشمس.',
    fullDescription: 'استمتع بجمال كابادوكيا من منظور فريد - الطفوف فوق أبراج الخيالية ومساكن الكهوف في بالون حر عند شروق الشمس. طيارينا الخبراء يضمنون رحلة آمنة لا تُنسى بينما تطفون بهدوء فوق هذا المنظر الخارق، وشرون الشمس وهو يرسم السماء بألوان زاهية. هذه المغامرة التي تحدث مرة واحدة في العمر تتضمن احتفال شامبانيا تقليدياً عند الهبوط.',
    features: [
      'رحلة بالون الحر عند شروق الشمس',
      'طيارون محترفون وذوو خبرة',
      'احتفال شامبانيا عند الهبوط',
      'شهادة رحلة',
      'تأمين شامل',
      'خدمة النقل من وإلى الفندق',
      'مجموعات صغيرة لتجربة شخصية'
    ],
    itinerary: [
      {
        time: '04:30',
        activity: 'النقل من الفندق',
        description: 'الاستلام من الفندق والنقل إلى موقع الإطلاق'
      },
      {
        time: '05:00',
        activity: 'التحضير والنفخ',
        description: 'مشاهدة نفخ البالون والتعليمات الأمنية'
      },
      {
        time: '05:30',
        activity: 'الإقلاع',
        description: 'الصعود الهادئ إلى السماء مع شروق الشمس'
      },
      {
        time: '06:00-07:30',
        activity: 'الطيران فوق أبراج الخيالية',
        description: 'الطفوف فوق المناظر الأيقونية لكابادوكيا'
      },
      {
        time: '07:30',
        activity: 'الهبوط والاحتفال',
        description: 'الهبوط اللطيف واحتفال شامبانيا'
      },
      {
        time: '08:00',
        activity: 'النقل إلى الفندق',
        description: 'العودة إلى الفندق مع الإفطار'
      }
    ],
    included: [
      'النقل من وإلى الفندق',
      'رحلة بالون الحر',
      'طيار محترف',
      'احتفال شامبانيا',
      'شهادة رحلة',
      'التأمين',
      'إفطار خفيف'
    ],
    notIncluded: [
      'مشروبات إضافية',
      'المصروفات الشخصية',
      'البقش للطيار'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'غوريمي، كابادوكيا، تركيا'
    }
  },
  3: {
    id: 3,
    title: 'جولة مدينة أفسوس القديمة',
    location: 'إزمير',
    rating: 4.7,
    reviews: 198,
    price: 75,
    image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg',
    category: 'cultural',
    difficulty: 'سهل',
    groupSize: '2-15',
    duration: 'يوم كامل',
    highlights: ['مكتبة سلسوس', 'المسرح الكبير', 'معبد أرتميس'],
    description: 'اكتشف عجائب أفسوس القديمة مع أدلائنا الخبراء وتذاكر الدخول.',
    fullDescription: 'عد إلى الوراء في الزمن واستكشف أنقاض أفسوس المذهلة، التي كانت ثاني أكبر مدينة في الإمبراطورية الرومانية. سيقدم أدلاؤنا المحترفون الحياة للتاريخ أثناء سيرك في شوارع المدينة القديمة، وزيارة مكتبة سلسوس المذهلة، والمسرح الكبير ذو الصوتيات المذهلة، ومعبد أرتميس، أحد عجائب الدنيا السبع. هذه الجولة الشاملة تتضمن تذاكر الدخول السريع والنقل المريح.',
    features: [
      'دليل آثار محترف',
      'تذاكر الدخول السريع لجميع المواقع',
      'نقل مكيف',
      'مجموعات صغيرة لتجربة شخصية',
      'زيارة جميع المواقع الرئيسية',
      'وقت للتسوق والاستكشاف الشخصي',
      'معلومات تاريخية شاملة'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'النقل من الفندق',
        description: 'الاستلام من الفندق في إزمير'
      },
      {
        time: '09:30',
        activity: 'الوصول إلى أفسوس',
        description: 'الوصول إلى المدينة القديمة ونظرة عامة على الجولة'
      },
      {
        time: '10:00',
        activity: 'مكتبة سلسوس',
        description: 'زيارة المكتبة الشهيرة مع شروحات مفصلة'
      },
      {
        time: '11:00',
        activity: 'المسرح الكبير',
        description: 'استكشاف المسرح المحافظ بشكل رائع'
      },
      {
        time: '12:00',
        activity: 'استراحة الغداء',
        description: 'غداء تركي تقليدي في مطعم محلي'
      },
      {
        time: '13:00',
        activity: 'معبد أرتميس',
        description: 'زيارة معبد أرتميس، أحد عجائب الدنيا السبع'
      },
      {
        time: '15:00',
        activity: 'وقت فردي',
        description: 'وقت للتسوق والاستكشاف الشخصي'
      },
      {
        time: '17:00',
        activity: 'العودة إلى الفندق',
        description: 'النقل إلى الفندق'
      }
    ],
    included: [
      'دليل خبير',
      'تذاكر الدخول لجميع المواقع',
      'النقل',
      'الغداء',
      'وقت للتسوق',
      'مجموعة صغيرة'
    ],
    notIncluded: [
      'المصروفات الشخصية',
      'البقش للدليل',
      'العشاء'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'سلجوق، إزمير، تركيا'
    }
  },
  4: {
    id: 4,
    title: 'بركات باموكالي الحرارية',
    location: 'باموكالي',
    rating: 4.8,
    reviews: 234,
    price: 95,
    image: '/images/destinations/pamukkale.jpg',
    category: 'nature',
    difficulty: 'سهل',
    groupSize: '2-25',
    duration: 'يوم كامل',
    highlights: ['الأسطح الترافرتينية', 'هييرابوليس', 'بركلة كليوباترا'],
    description: 'استرخ في المياه الشافية لباموكالي واستكشف هييرابوليس القديمة.',
    fullDescription: 'اكتشف عجائب باموكالي الطبيعية، حيث خلقت المياه الحرارية الغنية بالكالسيوم أسطح ترافرتينية بيضاء على مر آلاف السنين. تجمع جولتنا بين الاسترخاء في البرك الحرارية واستكشاف مدينة هييرابوليس القديمة. امش حفاً على الأسطح المعدنية الغنية بالمعادن، وسبح في المياه الدافئة التي يعتقد أنها تمتلك خصائص علاجية، وزيارة بركلة كليوباترا المحافظة بشكل مذهل. هذه التجربة ليوم كامل تتضمن النقل، والغداء، وإرشادات الخبيرة.',
    features: [
      'الوصول إلى بركات باموكالي الحرارية',
      'زيارة أنقاض هييرابوليس',
      'دليل محترف مع رؤى تاريخية',
      'السباحة في بركلة كليوباترا',
      'استكشاف الأسطح الترافرتينية',
      'النقل من وإلى الموقع',
      'غداء تقليدي مشمول'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'النقل من الفندق',
        description: 'الاستلام من الفندق'
      },
      {
        time: '10:00',
        activity: 'الوصول إلى باموكالي',
        description: 'الوصول إلى الموقع والتعليمات الأمنية'
      },
      {
        time: '10:30',
        activity: 'الأسطح الترافرتينية',
        description: 'جولة مشي على الأسطح الكلسيوم البيضاء'
      },
      {
        time: '12:00',
        activity: 'أنقاض هييرابوليس',
        description: 'استكشاف المدينة القديمة مع الدليل'
      },
      {
        time: '13:00',
        activity: 'الغداء',
        description: 'غداء تركي تقليدي في مطعم محلي'
      },
      {
        time: '14:00',
        activity: 'وقت السباحة',
        description: 'وقت فردي للسباحة في البرك الحرارية'
      },
      {
        time: '16:00',
        activity: 'بركلة كليوباترا',
        description: 'زيارة البركة الحرارية القديمة'
      },
      {
        time: '17:00',
        activity: 'العودة إلى الفندق',
        description: 'النقل إلى الفندق'
      }
    ],
    included: [
      'النقل',
      'دليل محترف',
      'رسوم الدخول',
      'الغداء',
      'الوصول للسباحة',
      'مجموعة صغيرة'
    ],
    notIncluded: [
      'ملابس السباحة والمناشف',
      'المصروفات الشخصية',
      'البقش للدليل'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'باموكالي، دينيزلي، تركيا'
    }
  },
  5: {
    id: 5,
    title: 'جولة القلع الزرقاء',
    location: 'بودروم',
    rating: 4.9,
    reviews: 167,
    price: 450,
    image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk Gulet Turu.jpeg',
    category: 'cruise',
    difficulty: 'سهل',
    groupSize: '2-12',
    duration: '3 أيام',
    highlights: ['القلع التقليدية', 'خلع السباحة', 'المطبخ التركي'],
    description: 'أبحر في المياه الزرقاء لبحر إيجة على قلعنا الخشبية التقليدية مع المطبخ التركي الشهير.',
    fullDescription: 'استمتع بالمغامرة التركية البحرية النهائية على قلعنا الخشبية المصنوعة يدوياً بتقنيات عتيقة. انطلق على طول الساحل المذهل لبحر إيجة، وتوقف في خلع معزولة للسباحة في المياه البلورية الشفافة، واستمتع بالمطبخ التركي الأصيل الذي يعده طاهمنا على متن السفينة. هذه الرحلة الشاملة تتميز بأكابين مريحة، وطاقم ودود، وفرص لرياضات مائية، وصيد الأسماك، والاسترخاء البسيط على سطح السفينة مع مشاهدة غروب الشمس الخلابة فوق البحر.',
    features: [
      'سفينة قلع خشبية تقليدية',
      'جميع الوجبات والمشروبات مشمولة',
      'محطات سباحة في خلع معزولة',
      'معدات الرياضات المائية',
      'معدات الصيد',
      'أكابين مريحة مع دورات مياه خاصة',
      'قبان وطاقم محترفون',
      'مناشف وأغطية أسرة'
    ],
    itinerary: [
      {
        time: '09:00',
        activity: 'الصعود على السفينة والترحيب',
        description: 'الصعود على القلع في ميناء بودروم مع مشروبات الترحيب'
      },
      {
        time: '10:00',
        activity: 'الإبحار صباحاً',
        description: 'الإبحار على طول الساحل الإيجة مع الإفطار'
      },
      {
        time: '12:00',
        activity: 'السباحة والغداء',
        description: 'التوقف في خلع معزولة للسباحة والغداء على متن السفينة'
      },
      {
        time: '14:00',
        activity: 'الإبحار بعد الظهر',
        description: 'متابعة الإبحار إلى موقع خلاب آخر'
      },
      {
        time: '16:00',
        activity: 'السباحة المساء والعشاء',
        description: 'محطة سباحة يليها عشاء محضر من مكونات محلية'
      },
      {
        time: '18:00',
        activity: 'مشاهدة غروب الشمس',
        description: 'الاسترخاء على سطح السفينة مع المشروبات ومشاهدة غروب الشمس'
      },
      {
        time: '20:00',
        activity: 'المبيات في مكان رسو',
        description: 'النوم في أكابين مريحة مرساة في خلع هادئ'
      },
      {
        time: '08:00',
        activity: 'الإفطار والعودة',
        description: 'الإفطار على متن السفينة قبل العودة إلى ميناء بودروم'
      }
    ],
    included: [
      'الإقامة في كابينة خاصة',
      'جميع الوجبات والمشروبات',
      'محطات السباحة ومعدات الرياضات المائية',
      'معدات الصيد',
      'قبان وطاقم محترفون',
      'المناشف والأغطية'
    ],
    notIncluded: [
      'المشروبات الكحولية (متاحة للشراء)',
      'المصروفات الشخصية',
      'البقش للطاقم'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'ميناء بودروم، موغلا، تركيا'
    }
  },
  6: {
    id: 6,
    title: 'جولة سابانكا ماسوكيه',
    location: 'سابانكا',
    rating: 4.8,
    reviews: 125,
    price: 180,
    image: '/tours/Sapanca Maşukiye/Sapanca Maşukiye.jpeg',
    category: 'nature',
    difficulty: 'سهل',
    groupSize: '2-15',
    duration: 'يوم واحد',
    highlights: ['بحيرة سابانكا', 'غابة ماسوكيه', 'طبيعة خلابة'],
    description: 'استمتع بيوم واحد في سابانكا ماسوكيه مع جولتنا الموجهة.',
    fullDescription: 'انضم إلينا في جولة ليوم واحد إلى سابانكا ماسوكيه، جنة طبيعية تقع بالقرب من إسطنبول. ستجول في غابات الصنوبر الخضراء، وتستمتع بمناظر البحيرة الخلابة، وتتذوق المأكولات المحلية الشهيرة في المطاعم المطلة على البحيرة. هذه الجولة المثالية للهروب من صخب المدينة والاسترخاء في أحضان الطبيعة.',
    features: [
      'نقل من وإلى الفندق',
      'دليل محترف',
      'وجبة غداء في مطعم بحيرة',
      'وقت فردي للاستكشاف',
      'زيارة معلم تاريخي',
      'تذوق المأكولات المحلية'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'الانطلاق',
        description: 'الانطلاق من مكان التجمع المحدد'
      },
      {
        time: '09:30',
        activity: 'وصول سابانكا',
        description: 'الوصول إلى سابانكا ماسوكيه والتعريف بالجولة'
      },
      {
        time: '10:00',
        activity: 'جولة الغابة',
        description: 'المشي في غابات الصنوبر الخضراء'
      },
      {
        time: '12:00',
        activity: 'غداء بجانب البحيرة',
        description: 'تناول الغداء في مطعم محلي مع منظر البحيرة'
      },
      {
        time: '14:00',
        activity: 'وقت حر',
        description: 'وقت حر للاستكشاف أو التسوق'
      },
      {
        time: '16:30',
        activity: 'العودة',
        description: 'العودة إلى مكان التجمع الأصلي'
      }
    ],
    included: [
      'النقل من وإلى الفندق',
      'دليل محترف',
      'وجبة غداء',
      'وقت حر للاستكشاف',
      'زيارة معلم تاريخي',
      'تذوق المأكولات المحلية'
    ],
    notIncluded: [
      'العشاء',
      'المشروبات',
      'المصروفات الشخصية',
      'البقش للدليل'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'سابانكا، إسطنبول، تركيا'
    }
  }
}

const amenities = {
  wifi: { icon: Wifi, label: 'واي فاي مجاني' },
  parking: { icon: Car, label: 'وقوف مجاني' },
  spa: { icon: Dumbbell, label: 'سبا وويلنس' },
  restaurant: { icon: Coffee, label: 'مطعم' },
  bar: { icon: Coffee, label: 'بار ولوونج' },
  pool: { icon: Dumbbell, label: 'مسبح' },
  concierge: { icon: Users, label: 'خدمة الكونسيرج' },
  'room-service': { icon: Coffee, label: 'خدمة الغرف' },
  gym: { icon: Dumbbell, label: 'مركز لياقة' },
  beach: { icon: MapPin, label: 'شاطئ خاص' },
  'kids-club': { icon: Users, label: 'نادي الأطفال' },
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = toursData[params.id as unknown as keyof typeof toursData]

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">الجولة غير موجودة</h1>
          <p className="text-gray-600 mb-8">الجولة التي تبحث عنها غير موجودة.</p>
          <Link href="/ar/tours" className="btn-primary">
            العودة إلى الجولات
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{tour.title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{tour.rating}</span>
                <span className="text-gray-300">({tour.reviews}) تقييم</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">حول {tour.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {tour.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">ميزات الجولة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="text-2xl font-bold mb-6">برنامج الجولة</h3>
                <div className="space-y-6">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary-600 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold">{item.time}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.activity}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included & Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">ما مشمول</h3>
                  <div className="space-y-2">
                    {tour.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">ما غير مشمول</h3>
                  <div className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-gray-700">-</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{tour.price}</div>
                  <div className="text-gray-600">لللشخص الواحد</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تاريخ الجولة
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="تاريخ الجولة"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      عدد المسافرين
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="عدد المسافرين">
                      <option>1 مسافر</option>
                      <option>2 مسافرين</option>
                      <option>3 مسافرين</option>
                      <option>4+ مسافرين</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full btn-primary mb-3">
                  احجز الآن
                </button>
                <button className="w-full btn-secondary">
                  تواصل مع الجولة
                </button>
              </div>

              {/* Tour Details */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">تفاصيل الجولة</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">المدة</div>
                      <div className="text-gray-600">{tour.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">حجم المجموعة</div>
                      <div className="text-gray-600">{tour.groupSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-600">★</span>
                    <div>
                      <div className="font-semibold text-gray-900">الصعوبة</div>
                      <div className="text-gray-600 capitalize">{tour.difficulty}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-600">★</span>
                    <div>
                      <div className="font-semibold text-gray-900">الفئة</div>
                      <div className="text-gray-600 capitalize">{tour.category}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{tour.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{tour.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{tour.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Tours */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">جولات مشابهة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Similar tours would be displayed here */}
            <div className="text-center text-gray-500 col-span-full">
              جولات مشابهة قريباً...
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}