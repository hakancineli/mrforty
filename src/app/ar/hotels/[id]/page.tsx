import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Hotel data - in a real app, this would come from an API or database
const hotelsData = {
  1: {
    id: 1,
    name: 'ذا ريتز كارلتون اسطنبول',
    location: 'اسطنبول، تركيا',
    rating: 4.8,
    reviews: 324,
    price: 450,
    image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
    gallery: [
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'تجربة فاخرة لا مثيل لها في قلب اسطنبول',
    fullDescription: 'يقع فندق ذا ريتز كارلتون اسطنبول في قلب اسطنبول النابض بالحياة، وهو ملاذ للرفاهية الفاخرة والخدمة لا تشوبها شائبة. يجمع فندقنا بين الأناقة الخالدة والراحة المعاصرة، مقدمًا للضيوف تجربة لا تُنسى في إحدى أكثر مدن العالم سحراً. من تراسنا على السطح مع إطلالات بانورامية على البوسفور إلى سبا العالمية ومواقع الطعام لدينا، تم تصميم كل جانب من إقامتك لتجاوز التوقعات.',
    features: [
      'غرف فاخرة وأجنحة مع إطلالات على البوسفور',
      'منتجع صحي ورفاهية حائز على جوائز',
      'مطاعم راقية متعددة',
      'تراس على السطح مع إطلالات بانورامية على المدينة',
      'مركز لياقة بدنية مجهز بأحدث التقنيات',
      'مسبح داخلي',
      'خدمة غرف على مدار 24 ساعة',
      'خدمة كونسيرج مخصصة'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 2,
        price: 450,
        features: ['سرير كينج', 'إطلالة على المدينة', 'حمام رخام', 'منطقة عمل']
      },
      {
        name: 'غرفة كلوب',
        size: '55 متر مربع',
        maxGuests: 3,
        price: 580,
        features: ['سرير كينج', 'إطلالة على البوسفور', 'وصول إلى صالة الكلوب', 'حمام رخام']
      },
      {
        name: 'جنحة تنفيذية',
        size: '85 متر مربع',
        maxGuests: 4,
        price: 850,
        features: ['منطقة جلوس منفصلة', 'إطلالة على البوسفور', 'وصول إلى صالة الكلوب', 'حمام ضيوف']
      },
      {
        name: 'جنحة رئاسية',
        size: '180 متر مربع',
        maxGuests: 6,
        price: 2500,
        features: ['غرفتا نوم', 'مطبخ كامل', 'إطلالة على البوسفور', 'تراس خاص', 'خدمة بوتلر']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع سراسلفيلر رقم 58، 34367 بشيكتاش، اسطنبول، تركيا'
    }
  },
  2: {
    id: 2,
    name: 'فندق سويسوتل البوسفور',
    location: 'اسطنبول، تركيا',
    rating: 4.7,
    reviews: 256,
    price: 380,
    image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
    gallery: [
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
    description: 'فندق أنيق يطل على البوسفور مع مرافق عالمية.',
    fullDescription: 'يقدم فندق سويسوتل البوسفور في اسطنبول إقامة أنيقة مع إطلالات خلابة على مضيق البوسفور. يتميز فندقنا بغرف حديثة ومرافق راقية، مصممة لجعل إقامتك مريحة ولا تُنسى.',
    features: [
      'إطلالات على مضيق البوسفور',
      'غرف حديثة مع وسائل الراحة المميزة',
      'مطاعم وبار متعددة',
      'مسبح داخلي',
      'منتجع صحي ورفاهية',
      'مركز لياقة بدنية'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '35 متر مربع',
        maxGuests: 2,
        price: 380,
        features: ['سرير كوين', 'إطلالة على المدينة', 'حمام رخام']
      },
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 2,
        price: 450,
        features: ['سرير كينج', 'إطلالة على البوسفور', 'حمام رخام', 'منطقة عمل']
      },
      {
        name: 'جنحة جونيور',
        size: '65 متر مربع',
        maxGuests: 3,
        price: 580,
        features: ['سرير كينج', 'إطلالة على البوسفور', 'منطقة جلوس منفصلة', 'حمام رخام']
      },
      {
        name: 'جنحة تنفيذية',
        size: '85 متر مربع',
        maxGuests: 4,
        price: 850,
        features: ['سرير كينج', 'إطلالة على البوسفور', 'منطقة جلوس منفصلة', 'حمام ضيوف']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع بايلديم رقم 2، 34357 بشيكتاش، اسطنبول، تركيا'
    }
  },
  3: {
    id: 3,
    name: 'فندق CVK Park Bosphorus Hotel Istanbul',
    location: 'اسطنبول، تركيا',
    rating: 4.7,
    reviews: 289,
    price: 420,
    image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
    gallery: [
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-2.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-3.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-4.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
    description: 'فندق عصري وحديث مع إطلالات على البوسفور',
    fullDescription: 'فندق CVK Park Bosphorus Hotel Istanbul هو فندق عصري وحديث في قلب اسطنبول مع إطلالات خلابة على البوسفور. يتميز فندقنا بالتصميم المعاصر الذي يجمع بين الراحة والرفاهية، ويقدم خدمة فائقة للضيوف. مع الغرف الأنيقة ومطاعم الطعام الراقية وسبا مجهز بالكامل، ستكون إقامتك لا تُنسى.',
    features: [
      'غرف عصرية وأجنحة مع إطلالات على البوسفور',
      'مركز سبا وولنس بالخدمة الكاملة',
      'عدة مطاعم طعام راقية',
      'مركز لياقة بدنية مجهز بأحدث التقنيات',
      'مسبح داخلي',
      'خدمة غرف على مدار 24 ساعة',
      'خدمة كونسيرج مخصصة',
      'قاعات اجتماعات ومناسبات'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '35 متر مربع',
        maxGuests: 2,
        price: 420,
        features: ['سرير كوين', 'إطلالة على المدينة', 'حمام رخام']
      },
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 2,
        price: 520,
        features: ['سرير كينج', 'إطلالة على البوسفور', 'حمام رخام', 'مكتب عمل']
      },
      {
        name: 'جنحة تنفيذية',
        size: '65 متر مربع',
        maxGuests: 3,
        price: 680,
        features: ['سرير كينج', 'إطلالة على البوسفور', 'منطقة جلوس منفصلة', 'حمام رخام']
      },
      {
        name: 'جنحة رئاسية',
        size: '120 متر مربع',
        maxGuests: 4,
        price: 1200,
        features: ['سرير كينج', 'إطلالة على البوسفور', 'منطقة جلوس منفصلة', 'حمام ضيوف', 'تراس خاص']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'غوموشسويو مح. بالومجو شك. رقم:1، 34349 بشيكتاش، اسطنبول، تركيا'
    }
  },
  4: {
    id: 4,
    name: 'فندق موفينبيك اسطنبول',
    location: 'اسطنبول، تركيا',
    rating: 4.6,
    reviews: 198,
    price: 320,
    image: '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
    gallery: [
      '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-2.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-3.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-4.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق عصري بمعايير سويسرية',
    fullDescription: 'فندق موفينبيك اسطنبول يجلب الدقة السويسرية إلى إيقاع اسطنبول النشط. الغرف المشرقة والمصممة بعناية، والإفطار السخي، ومنطقة اللياقة البدنية والرفاهية عالية الجودة، ومساحات الاسترخاء الهادئة تجعله خيارًا ذكيًا للمسافرين الذين يبحثون عن الراحة الموثوقة والخدمة المميزة والتنقل السهل.',
    features: [
      'غرف عصرية مع إطلالات على المدينة',
      'معايير الضيافة السويسرية',
      'مركز لياقة بدنية حديث',
      'مسبح داخلي'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '28 متر مربع',
        maxGuests: 2,
        price: 120,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '36 متر مربع',
        maxGuests: 3,
        price: 160,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع بيالي باشا بولفارد رقم:1، 34445 بي أوغلو، اسطنبول، تركيا'
    }
  },
  5: {
    id: 5,
    name: 'جراند حياة اسطنبول',
    location: 'اسطنبول، تركيا',
    rating: 4.7,
    reviews: 245,
    price: 350,
    image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
    gallery: [
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-2.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-3.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-4.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'فندق فاخر في مركز أعمال اسطنبول',
    fullDescription: 'فندق جراند حياة اسطنبول يقع عند تقاطع العمل والترفيه، على بعد خطوات من تقسيم ومواقع المؤتمرات الهامة. الغرف الواسعة، والمساحات الخارجية المطلة، والسبا الهادئ يوازن بعد يوم في المدينة. من المطبخ العالمي المكرر إلى مرافق الاجتماعات المصقولة، تم تصميم كل تفصيل لإقامة فاخرة لا تشوبها شائبة.',
    features: [
      'غرف فاخرة مع إطلالات على المدينة',
      'سبا ورفاهية عالمية المستوى',
      'مطاعم متعددة'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '32 متر مربع',
        maxGuests: 2,
        price: 150,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '42 متر مربع',
        maxGuests: 3,
        price: 190,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تشاكرلا رقم:1، 34433 تقسيم، اسطنبول، تركيا'
    }
  },
  6: {
    id: 6,
    name: 'فندق كونراد اسطنبول',
    location: 'اسطنبول، تركيا',
    rating: 4.6,
    reviews: 189,
    price: 310,
    image: '/hotels/Conrad Istanbul/conrad-1.jpg',
    gallery: [
      '/hotels/Conrad Istanbul/conrad-1.jpg',
      '/hotels/Conrad Istanbul/conrad-2.jpg',
      '/hotels/Conrad Istanbul/conrad-3.jpg',
      '/hotels/Conrad Istanbul/conrad-4.jpg',
      '/hotels/Conrad Istanbul/conrad-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق فاخر عصري مع إطلالات على البوسفور',
    fullDescription: 'فندق كونراد اسطنبول يجمع بين التصميم المعاصر مع إطلالات على مضيق البوسفور وشبه الجزيرة التاريخية. الغرف الأنيقة، وسبا وحمام حائز على جوائز، والمطاعم الراقية ترتقي عطلات نهاية الأسبوع القصيرة ورحلات العمل الأطول. من خلال الخدمة المتميزة واللمسات المدروسة، يقدم تجربة فاخرة مصقولة تعكس الروح الفريدة لاسطنبول.',
    features: [
      'غرف عصرية مع إطلالات على البوسفور',
      'سبا ورفاهية فاخرة',
      'خيارات طعام متعددة'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 140,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '40 متر مربع',
        maxGuests: 3,
        price: 180,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تشيران رقم:1، 34349 بشيكتاش، اسطنبول، تركيا'
    }
  },
  7: {
    id: 7,
    name: 'فندق اسطنبول ماريوت',
    location: 'اسطنبول، تركيا',
    rating: 4.5,
    reviews: 167,
    price: 300,
    image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
    gallery: [
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-2.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-3.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-4.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق مريح بمعايير ماريوت',
    fullDescription: 'فندق اسطنبول ماريوت يقدم راحة العلامة التجارية ماريوت في موقع مركزي. غرف ذكية ومجهزة جيداً، وخدمة ودية، ومرافق مثل مسبح داخلي ومركز لياقة بدنية تجعله مثالياً لكل من المسافرين ورجال الأعمال. مع وصلات نقل فعالة ومطاعم قريبة، من السهل استكشاف المدينة بسهولة.',
    features: [
      'غرف مريحة مع وسائل حديثة',
      'خدمة ماريوت الجودة',
      'مسبح داخلي'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '28 متر مربع',
        maxGuests: 2,
        price: 110,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '36 متر مربع',
        maxGuests: 3,
        price: 150,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع عبادي الحرية رقم 175، 34381 شيشلي، اسطنبول، تركيا'
    }
  },
  8: {
    id: 8,
    name: 'فندق دبليو اسطنبول',
    location: 'اسطنبول، تركيا',
    rating: 4.7,
    reviews: 203,
    price: 320,
    image: '/hotels/W Istanbul/w-istanbul-1.jpg',
    gallery: [
      '/hotels/W Istanbul/w-istanbul-1.jpg',
      '/hotels/W Istanbul/w-istanbul-2.jpg',
      '/hotels/W Istanbul/w-istanbul-3.jpg',
      '/hotels/W Istanbul/w-istanbul-4.jpg',
      '/hotels/W Istanbul/w-istanbul-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'فندق فاخر بتصميم عصري',
    fullDescription: 'فندق دبليو اسطنبول ينبض بإبداع الحي مع تصميم جريء وإضاءة مثيرة ومساحات اجتماعية تأتي حياتها ليلاً ونهاراً. الغرف مصممة للمعيشة العصرية، بينما يقدم المطعم المميز ومنتجع الصغير العافية استراحة فاخرة في قلب المدينة. بالخارج، تنتظرك المقاهي والمعارض وشاطئ البوسفور خلال دقائق.',
    features: [
      'غرف أنيقة بتصميم عصري',
      'منتجع صحي ورفاهية فاخر',
      'مسبح على السطح'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '28 متر مربع',
        maxGuests: 2,
        price: 120,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '36 متر مربع',
        maxGuests: 3,
        price: 160,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع سليمان سيبا رقم 22، 34357 بشيكتاش، اسطنبول، تركيا'
    }
  },
  9: {
    id: 9,
    name: 'فور سيزنز اسطنبول',
    location: 'اسطنبول، تركيا',
    rating: 4.9,
    reviews: 267,
    price: 400,
    image: '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
    gallery: [
      '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-2.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-3.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-4.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'الرفاهية المطلقة في سلطان أحمد التاريخي',
    fullDescription: 'فندق فور سيزنز اسطنبول في سلطان أحمد يلتقط سحر اسطنبول الخالد - فناء حجري معروق بالزهور، وديكورات أنيقة، وسطح مع إطلالات بريدية لآيا صوفيا والمسجد الأزرق. تعكس الجناحات تراث الحي مع تفاصيل أنيقة، بينما تقدم الخدمة الشخصية والطعام الوجهة إقامة لا تُنسى في المدينة القديمة.',
    features: [
      'غرف فاخرة مع إطلالات تاريخية',
      'منتجع صحي عالمي المستوى',
      'مطاعم راقية'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '40 متر مربع',
        maxGuests: 2,
        price: 180,
        features: ['سرير كينج']
      },
      {
        name: 'جنحة',
        size: '65 متر مربع',
        maxGuests: 3,
        price: 260,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع توقيفخانه رقم 1، 34400 سلطان أحمد، اسطنبول، تركيا'
    }
  },
  10: {
    id: 10,
    name: 'تشيراغان بالاس كيمبينيسكي',
    location: 'اسطنبول، تركيا',
    rating: 4.9,
    reviews: 312,
    price: 480,
    image: '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
    gallery: [
      '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-2.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-3.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-4.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'قصر عثماني تحول إلى فندق فاخر',
    fullDescription: 'تشيراغان بالاس كيمبينيسكي، الذي كان ذات مرة مسكناً إمبراطورياً عثمانياً، يدمج العظمة القصرية مع الفخامة الحديثة على ضفاف البوسفور. الأعمدة الرخامية، والحدائق المصممة بعناية، ومسبح اللانهاية على شاطئ البحر تخلق مشهداً أيقونياً، بينما تقدم الغرف والجناحات الراقية ملاذاً هادئاً. يحتفل المطعم المميز بالمأكولات التركية والعالمية، وتضمن الخدمة المتميزة أن كل لحظة تشعر بالاستثنائية.',
    features: [
      'غرف قصرية مع إطلالات على البوسفور',
      'منتجع صحي عالمي المستوى',
      'مطاعم راقية متعددة'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 2,
        price: 220,
        features: ['سرير كينج']
      },
      {
        name: 'جنحة',
        size: '70 متر مربع',
        maxGuests: 3,
        price: 320,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تشيراغان رقم 32، 34349 بشيكتاش، اسطنبول، تركيا'
    }
  },
  21: {
    id: 21,
    name: 'قصر تايتانيك ماردان',
    location: 'أنطاليا، تركيا',
    rating: 4.8,
    reviews: 523,
    price: 650,
    image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
    gallery: [
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'منتجع فخم بطراز قصر على البحر المتوسط',
    fullDescription: 'منتجع رائع بطراز قصر مع شاطئ خاص ووسائل راحة عالمية تقدم فخامة لا مثيل لها على ساحل البحر المتوسط.',
    features: ['شاطئ خاص', 'مسابح متعددة', 'سبا كامل الخدمات', 'مطاعم راقية', 'عمارة قصر ملكي'],
    roomTypes: [
      { name: 'غرفة ديلوكس', size: '50 متر مربع', maxGuests: 2, price: 650, features: ['سرير كينج', 'إطلالة على البحر'] },
      { name: 'جناح القصر', size: '85 متر مربع', maxGuests: 4, price: 950, features: ['منطقة معيشة', 'شرفة'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'كمر، أنطاليا، تركيا' }
  },
  22: {
    id: 22,
    name: 'منتجع ريجنوم كاريا للجولف والسبا',
    location: 'أنطاليا، تركيا',
    rating: 4.7,
    reviews: 412,
    price: 580,
    image: '/hotels/Antalya/Regnum Carya/Regnum-Carya-1.jpeg',
    gallery: [
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-1.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-2.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-3.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-4.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع جولف فاخر على البحر المتوسط',
    fullDescription: 'يقدم ريجنوم كاريا جولف البطولة ومرافق شاطئ متميزة مع خدمات سبا عالمية وفخامة البحر المتوسط.',
    features: ['جولف البطولة', 'غرف فاخرة', 'سبا وولنس', 'شاطئ خاص', 'أكاديمية جولف'],
    roomTypes: [
      { name: 'غرفة ديلوكس', size: '45 متر مربع', maxGuests: 2, price: 580, features: ['سرير كينج', 'إطلالة على الحديقة'] },
      { name: 'فيلا الجولف', size: '120 متر مربع', maxGuests: 4, price: 1200, features: ['إطلالة على الجولف', 'مسبح خاص'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
  },
  11: {
    id: 11,
    name: 'فندق زورلو غراند طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.7,
    reviews: 189,
    price: 420,
    image: '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-1.jpg',
    gallery: [
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-1.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-2.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-3.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-4.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق فاخر في قلب طرابزون',
    fullDescription: 'فندق زورلو غراند طرابزون يقدم إقامات فاخرة مع خدمة لا تشوبها شائبة وراحة حديثة.',
    features: [
      'غرف بإطلالات على المدينة',
      'منتجع صحي ورفاهية بالخدمة الكاملة',
      'مسبح داخلي',
      'مركز لياقة بدنية'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '35 متر مربع',
        maxGuests: 2,
        price: 120,
        features: ['سرير كوين', 'إطلالة على المدينة']
      },
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 3,
        price: 160,
        features: ['سرير كينج', 'إطلالة على المدينة']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع مارش رقم:1، 61000 طرابزون، تركيا'
    }
  },
  12: {
    id: 12,
    name: 'فندق نوفوتل طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.5,
    reviews: 145,
    price: 350,
    image: '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-1.jpeg',
    gallery: [
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-1.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-2.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-3.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-4.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق حديث بمعايير دولية',
    fullDescription: 'فندق نوفوتل طرابزون يقدم إقامات مريحة للمسافرين للعمل والترفيه.',
    features: ['غرف بإطلالات على البحر', 'مركز لياقة بدنية', 'مسبح داخلي', 'مرافق عمل'],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 110,
        features: ['سرير كوين', 'إطلالة على المدينة']
      },
      {
        name: 'غرفة ديلوكس',
        size: '40 متر مربع',
        maxGuests: 3,
        price: 150,
        features: ['سرير كينج', 'إطلالة على البحر']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع الجمهورية رقم:95، 61000 طرابزون، تركيا'
    }
  },
  13: {
    id: 13,
    name: 'فندق هيلتون طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.6,
    reviews: 167,
    price: 480,
    image: '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon.JPEG',
    gallery: [
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon.JPEG',
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon2.jpeg',
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon3.jpeg',
      '/hotels/Trabzon/Hilton Trabzon/aHilton-Trabzon4.jpeg',
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'رفاهية دولية مع إطلالات على البحر الأسود',
    fullDescription: 'فندق هيلتون طرابزون يجمع بين الخدمة عالمية المستوى والمرافق الحديثة.',
    features: ['غرف بإطلالات على البحر', 'سبا ورفاهية', 'مسبح داخلي', 'مطاعم فاخرة'],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '32 متر مربع',
        maxGuests: 2,
        price: 140,
        features: ['سرير كوين', 'إطلالة على البحر']
      },
      {
        name: 'غرفة تنفيذية',
        size: '48 متر مربع',
        maxGuests: 3,
        price: 190,
        features: ['سرير كينج', 'إطلالة على البحر']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'طرابزون، تركيا'
    }
  },
  14: {
    id: 14,
    name: 'فندق جراند تارابيا',
    location: 'طرابزون، تركيا',
    rating: 4.4,
    reviews: 123,
    price: 320,
    image: '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-1.jpeg',
    gallery: [
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-1.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-2.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-3.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-4.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق مريح بضيافة تقليدية',
    fullDescription: 'فندق جراند تارابيا يقدم إقامة مريحة بضيافة تركية تقليدية في بيئة دافئة.',
    features: [
      'غرف مريحة',
      'ضيافة تقليدية',
      'مركز لياقة بدنية',
      'خيارات طعام'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 110,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '40 متر مربع',
        maxGuests: 3,
        price: 150,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع أوزون رقم:45، طرابزون، تركيا'
    }
  },
  15: {
    id: 15,
    name: 'فندق ماريوت طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.6,
    reviews: 178,
    price: 450,
    image: '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon1-.jpeg',
    gallery: [
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon1-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon2-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon3-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon4-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon5-.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'جودة ماريوت مع سحر البحر الأسود',
    fullDescription: 'فندق ماريوت طرابزون يجمع بين معايير ماريوت الدولية وسحر البحر الأسود.',
    features: [
      'غرف بإطلالات على البحر',
      'سبا ورفاهية',
      'مسبح داخلي',
      'مركز أعمال'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '34 متر مربع',
        maxGuests: 2,
        price: 140,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة تنفيذية',
        size: '50 متر مربع',
        maxGuests: 3,
        price: 190,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع غولبهار رقم:123، طرابزون، تركيا'
    }
  },
  16: {
    id: 16,
    name: 'فندق ريكوس طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.7,
    reviews: 195,
    price: 520,
    image: '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-1.jpg',
    gallery: [
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-1.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-2.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-3.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-4.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
    description: 'منتجع فاخر بشاطئ خاص',
    fullDescription: 'فندق ريكوس طرابزون يقدم تجربة منتجع فاخر بشاطئ خاص ومرافق عالمية المستوى.',
    features: [
      'شاطئ خاص',
      'مسبح متعدد',
      'سبا ورفاهية'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 2,
        price: 180,
        features: ['سرير كينج']
      },
      {
        name: 'جنحة',
        size: '65 متر مربع',
        maxGuests: 3,
        price: 240,
        features: ['سرير كينج', 'إطلالة على البحر']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع يالينجاك رقم:99، طرابزون، تركيا'
    }
  },
  17: {
    id: 17,
    name: 'فندق ويندام طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.3,
    reviews: 134,
    price: 280,
    image: '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-1.jpg',
    gallery: [
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-1.jpg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-2.jpeg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-3.jpg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-4.jpg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'إقامة مريحة بمرافق حديثة',
    fullDescription: 'فندق ويندام طرابزون يقدم خدمة موثوقة وراحة للمسافرين.',
    features: [
      'غرف مريحة',
      'مرافق حديثة',
      'مركز لياقة بدنية'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '28 متر مربع',
        maxGuests: 2,
        price: 95,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '36 متر مربع',
        maxGuests: 3,
        price: 130,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'طرابزون، تركيا'
    }
  },
  18: {
    id: 18,
    name: 'فندق هامبتون باي هيلتون طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.4,
    reviews: 145,
    price: 300,
    image: '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-1.jpg',
    gallery: [
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-1.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-2.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-3.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-4.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'راحة حديثة بجودة هامبتون',
    fullDescription: 'فندق هامبتون باي هيلتون طرابزون يقدم الراحة الحديثة والخدمة الموثوقة للمسافرين.',
    features: [
      'غرف حديثة',
      'مركز لياقة بدنية',
      'إفطار مجاني'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '28 متر مربع',
        maxGuests: 2,
        price: 100,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '36 متر مربع',
        maxGuests: 3,
        price: 135,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تورغوت أوزال رقم:67، طرابزون، تركيا'
    }
  },
  19: {
    id: 19,
    name: 'فندق طرابزون بارك',
    location: 'طرابزون، تركيا',
    rating: 4.2,
    reviews: 112,
    price: 250,
    image: '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-1.jpg',
    gallery: [
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-1.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-2.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-3.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-4.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'فندق مريح بإطلالات على الحديقة',
    fullDescription: 'فندق طرابزون بارك يقدم إقامة مريحة في وسط المدينة مع إطلالات هادئة على الحديقة.',
    features: [
      'غرف بإطلالات على الحديقة',
      'مطعم يقدم المطبخ المحلي'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '26 متر مربع',
        maxGuests: 2,
        price: 90,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '38 متر مربع',
        maxGuests: 3,
        price: 125,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع كالكينما رقم:34، طرابزون، تركيا'
    }
  },
  20: {
    id: 20,
    name: 'فندق يازيجي',
    location: 'طرابزون، تركيا',
    rating: 4.3,
    reviews: 128,
    price: 380,
    image: '/hotels/Trabzon/Yazici Hotel/yazici-hotel-1.jpeg',
    gallery: [
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-1.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-2.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-3.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-4.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'راحة حديثة بضيافة تقليدية',
    fullDescription: 'فندق يازيجي يجمع بين الضيافة التركية التقليدية والراحة الحديثة.',
    features: [
      'سبا ورفاهية',
      'مطعم يقدم المطبخ المحلي'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 120,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '42 متر مربع',
        maxGuests: 3,
        price: 155,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع غولسوم رقم:12، طرابزون، تركيا'
    }
  },
  23: {
    id: 23,
    name: 'ماكس رويال بيليك',
    location: 'أنطاليا، تركيا',
    rating: 4.8,
    reviews: 489,
    price: 720,
    image: '/hotels/Antalya/Maxx Royal Belek/maxx-royal-1.jpeg',
    gallery: [
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-1.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-2.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-3.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-4.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع فائق فاخر مع إمكانية الوصول إلى الجولف والشاطئ',
    fullDescription: 'ماكس رويال بيليك يقدم إقامات فائقة الفخامة مع إمكانية الوصول إلى الجولف والشاطئ.',
    features: [
      'ملاعب الجولف',
      'أجنحة فائقة الفخامة',
      'مسبح متعدد'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 2,
        price: 260,
        features: ['سرير كينج', 'إطلالة على الحديقة']
      },
      {
        name: 'جنحة',
        size: '70 متر مربع',
        maxGuests: 3,
        price: 340,
        features: ['سرير كينج', 'إطلالة على البحر']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'بيليك، 07500 أنطاليا، تركيا'
    }
  },
  24: {
    id: 24,
    name: 'منتجع سوسي للفنادق الفاخرة',
    location: 'أنطاليا، تركيا',
    rating: 4.6,
    reviews: 367,
    price: 520,
    image: '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-1.jpeg',
    gallery: [
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-1.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-2.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-3.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-4.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع ساحلي فاخر',
    fullDescription: 'منتجع سوسي للفنادق الفاخرة يقدم فخامة ساحلية مع إطلالات على البحر المتوسط ومرافق عالمية المستوى.',
    features: [
      'غرف فاخرة بإطلالات على البحر',
      'وصول خاص إلى الشاطئ',
      'منتجع صحي ورفاهية بالخدمة الكاملة'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '42 متر مربع',
        maxGuests: 2,
        price: 180,
        features: ['سرير كينج', 'إطلالة على البحر']
      },
      {
        name: 'جنحة',
        size: '65 متر مربع',
        maxGuests: 3,
        price: 260,
        features: ['سرير كينج', 'شرفة']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'بيليك، 07500 أنطاليا، تركيا'
    }
  },
  25: {
    id: 25,
    name: 'منتجع كاليستا للفنادق الفاخرة',
    location: 'أنطاليا، تركيا',
    rating: 4.7,
    reviews: 398,
    price: 600,
    image: '/hotels/Antalya/Calista Luxury Resort/calista-luxury-1.jpeg',
    gallery: [
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-1.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-2.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-3.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-4.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع ساحلي متميز',
    fullDescription: 'منتجع كاليستا للفنادق الفاخرة يقدم إقامات ساحلية متميزة مع إطلالات على البحر المتوسط ومرافق فائقة.',
    features: [
      'غرف فاخرة بإطلالات على البحر',
      'وصول خاص إلى الشاطئ',
      'وجبات شاملة'
    ],
    roomTypes: [
      {
        name: 'غرفة ممتازة',
        size: '40 متر مربع',
        maxGuests: 2,
        price: 170,
        features: ['سرير كوين']
      },
      {
        name: 'جنحة عائلية',
        size: '60 متر مربع',
        maxGuests: 4,
        price: 240,
        features: ['غرفتان']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'بيليك، 07500 أنطاليا، تركيا'
    }
  },
  26: {
    id: 26,
    name: 'فندق كايا بالاتسو',
    location: 'أنطاليا، تركيا',
    rating: 4.6,
    reviews: 345,
    price: 550,
    image: '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-1.jpeg',
    gallery: [
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-1.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-2.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-3.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-4.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع متوسطي أنيق',
    fullDescription: 'فندق كايا بالاتسو يقدم إقامات متوسطية أنيقة مع مرافق متميزة ووصول إلى الشاطئ.',
    features: [
      'غرف أنيقة',
      'شاطئ خاص',
      'سبا ورفاهية'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '38 متر مربع',
        maxGuests: 3,
        price: 165,
        features: ['سرير كينج']
      },
      {
        name: 'جنحة جونيور',
        size: '55 متر مربع',
        maxGuests: 3,
        price: 230,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'بيليك، 07500 أنطاليا، تركيا'
    }
  },
  27: {
    id: 27,
    name: 'فندق ريكوس بريميوم بيليك',
    location: 'أنطاليا، تركيا',
    rating: 4.7,
    reviews: 423,
    price: 680,
    image: '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-1.jpeg',
    gallery: [
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-1.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-2.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-3.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-4.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع متميز شامل',
    fullDescription: 'فندق ريكوس بريميوم بيليك يقدم فخامة شاملة مع إطلالات على البحر المتوسط ومرافق عالمية المستوى.',
    features: [
      'وجبات شاملة',
      'شاطئ خاص',
      'مسبح متعدد'
    ],
    roomTypes: [
      {
        name: 'غرفة مميزة',
        size: '44 متر مربع',
        maxGuests: 2,
        price: 190,
        features: ['سرير كينج']
      },
      {
        name: 'جنحة',
        size: '68 متر مربع',
        maxGuests: 3,
        price: 260,
        features: ['إطلالة على البحر']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'بيليك، 07500 أنطاليا، تركيا'
    }
  },
  28: {
    id: 28,
    name: 'منتجع كورنيليا دايموند للجولف',
    location: 'أنطاليا، تركيا',
    rating: 4.6,
    reviews: 389,
    price: 620,
    image: '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-1.jpeg',
    gallery: [
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-1.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-2.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-3.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-4.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع فاخر للجولف والشاطئ',
    fullDescription: 'منتجع كورنيليا دايموند يقدم إقامات فاخرة للجولف والشاطئ مع مرافق جولف عالمية المستوى.',
    features: [
      'ملعب جولف بطولة',
      'غرف بإطلالات على البحر',
      'سبا ورفاهية'
    ],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '40 متر مربع',
        maxGuests: 2,
        price: 175,
        features: ['سرير كينج']
      },
      {
        name: 'جنحة الجولف',
        size: '60 متر مربع',
        maxGuests: 3,
        price: 245,
        features: ['إطلالة على الجولف']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'بيليك، 07500 أنطاليا، تركيا'
    }
  },
  29: {
    id: 29,
    name: 'مملكة أرض الأساطير',
    location: 'أنطاليا، تركيا',
    rating: 4.8,
    reviews: 467,
    price: 750,
    image: '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-1.jpeg',
    gallery: [
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-1.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-2.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-3.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-4.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
    description: 'إقامة فاخرة مع منتزه ترفيهي',
    fullDescription: 'مملكة أرض الأساطير تقدم إقامة فاخرة مع وصول إلى منتزه ترفيهي وترفيه واسع.',
    features: [
      'وصول إلى منتزه ترفيهي',
      'متنزه مائي ومنزلقات',
      'عروض ترفيهية'
    ],
    roomTypes: [
      {
        name: 'غرفة المملكة',
        size: '40 متر مربع',
        maxGuests: 2,
        price: 185,
        features: ['ديكور ترفيهي']
      },
      {
        name: 'جنحة عائلية',
        size: '60 متر مربع',
        maxGuests: 4,
        price: 255,
        features: ['غرفتان ترفيهيتان']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'كومكوي، 07400 سايد، أنطاليا، تركيا'
    }
  },
  30: {
    id: 30,
    name: 'فندق سيرين بيليك',
    location: 'أنطاليا، تركيا',
    rating: 4.5,
    reviews: 312,
    price: 480,
    image: '/hotels/Antalya/Sirene Belek/sirene-belek-1.jpeg',
    gallery: [
      '/hotels/Antalya/Sirene Belek/sirene-belek-1.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-2.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-3.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-4.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع للجولف والشاطئ',
    fullDescription: 'فندق سيرين بيليك يقدم إقامات مريحة للجولف والشاطئ مع إطلالات رائعة على البحر المتوسط ومرافق ممتازة.',
    features: [
      'وصول إلى ملعب الجولف',
      'غرف مريحة بإطلالات على البحر',
      'مسبح متعدد'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '36 متر مربع',
        maxGuests: 2,
        price: 135,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '46 متر مربع',
        maxGuests: 3,
        price: 170,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'بيليك، 07500 أنطاليا، تركيا'
    }
  },
  31: {
    id: 31,
    name: 'فندق هيلتون بورسا للمؤتمرات',
    location: 'بورسا، تركيا',
    rating: 4.6,
    reviews: 210,
    price: 380,
    image: '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-1.jpeg',
    gallery: [
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-1.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-2.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-3.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-4.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'فخامة حديثة مع مرافق للمؤتمرات',
    fullDescription: 'فندق هيلتون بورسا يقدم الراحة الحديثة ومرافق الفعاليات.',
    features: [
      'مركز مؤتمرات',
      'سبا ورفاهية',
      'مركز لياقة بدنية'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '35 متر مربع',
        maxGuests: 2,
        price: 130,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة تنفيذية',
        size: '50 متر مربع',
        maxGuests: 3,
        price: 180,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'بورسا، تركيا'
    }
  },
  32: {
    id: 32,
    name: 'فندق كارينا',
    location: 'بورسا، تركيا',
    rating: 4.3,
    reviews: 145,
    price: 250,
    image: '/hotels/Bursa/Karinna Hotel/karinna-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-1.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-2.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-3.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-4.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'فندق بوتيك بمرافق حرارية',
    fullDescription: 'فندق كارينا يقدم تجربة فريدة من نوعها للرفاهية في بورسا مع مرافق سبا حرارية.',
    features: ['مرافق سبا حرارية', 'مطعم يقدم المطبخ المحلي'],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '28 متر مربع',
        maxGuests: 2,
        price: 95,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '40 متر مربع',
        maxGuests: 3,
        price: 130,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تشيكيرجي رقم:67، بورسا، تركيا'
    }
  },
  33: {
    id: 33,
    name: 'فندق جراند يازار',
    location: 'بورسا، تركيا',
    rating: 4.4,
    reviews: 178,
    price: 300,
    image: '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-1.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-2.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-3.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-4.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق حديث مع سبا حراري',
    fullDescription: 'فندق جراند يازار يقدم إقامة حديثة في بورسا مع مرافق سبا حرارية للراحة والرفاهية.',
    features: ['سبا حراري ورفاهية', 'مطعم وبار'],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 105,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة تنفيذية',
        size: '44 متر مربع',
        maxGuests: 3,
        price: 145,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع ألتينبارماك رقم:89، بورسا، تركيا'
    }
  },
  34: {
    id: 34,
    name: 'فندق واو بورسا',
    location: 'بورسا، تركيا',
    rating: 4.5,
    reviews: 189,
    price: 350,
    image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
    gallery: [
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-2.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-3.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-4.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق بتصميم معاصر',
    fullDescription: 'فندق واو بورسا يقدم إقامة معاصرة مع مرافق شاملة للمسافرين للعمل والترفيه.',
    features: ['مسبح داخلي', 'مركز لياقة بدنية'],
    roomTypes: [
      {
        name: 'غرفة ممتازة',
        size: '34 متر مربع',
        maxGuests: 2,
        price: 120,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '46 متر مربع',
        maxGuests: 3,
        price: 160,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'طريق أنقارة 8 كم، بورسا، تركيا'
    }
  },
  35: {
    id: 35,
    name: 'فندق غونلوفيراه الحراري',
    location: 'بورسا، تركيا',
    rating: 4.3,
    reviews: 156,
    price: 270,
    image: '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-1.jpg',
    gallery: [
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-1.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-2.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-3.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-4.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'فندق حراري تقليدي',
    fullDescription: 'فندق غونلوفيراه الحراري يقدم إقامة مريحة في بورسا مع تجارب سبا حرارية أصيلة.',
    features: ['مرافق سبا حراري', 'ديكور تقليدي'],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '26 متر مربع',
        maxGuests: 2,
        price: 95,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '38 متر مربع',
        maxGuests: 3,
        price: 130,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تشيكيرجي رقم:123، بورسا، تركيا'
    }
  },
  36: {
    id: 36,
    name: 'فندق كرفانساراي الحراري',
    location: 'بورسا، تركيا',
    rating: 4.6,
    reviews: 223,
    price: 420,
    image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
    gallery: [
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-2.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-3.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-4.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'منتجع سبا حراري فاخر',
    fullDescription: 'فندق كرفانساراي الحراري يقدم تجربة منتجع سبا حراري عالمية المستوى في بورسا.',
    features: ['سبا حراري شامل', 'مسبح متعدد'],
    roomTypes: [
      {
        name: 'غرفة ديلوكس',
        size: '40 متر مربع',
        maxGuests: 2,
        price: 140,
        features: ['سرير كينج']
      },
      {
        name: 'جنحة',
        size: '60 متر مربع',
        maxGuests: 3,
        price: 190,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تشيكيرجي رقم:34، بورسا، تركيا'
    }
  },
  37: {
    id: 37,
    name: 'فندق تشيليك بالاس',
    location: 'بورسا، تركيا',
    rating: 4.4,
    reviews: 198,
    price: 220,
    image: '/hotels/Bursa/Celik Palas/celik-palas-1.jpg',
    gallery: [
      '/hotels/Bursa/Celik Palas/celik-palas-1.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-2.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-3.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-4.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق تاريخي بمرافق حرارية',
    fullDescription: 'فندق تشيليك بالاس يجمع بين الأناقة التقليدية والراحة الحديثة مع مرافق سبا حرارية.',
    features: ['مسبح حراري', 'أجواء تاريخية'],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 100,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '42 متر مربع',
        maxGuests: 3,
        price: 140,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'شارع تشيكيرجي رقم:1، بورسا، تركيا'
    }
  },
  38: {
    id: 38,
    name: 'فندق بورسا هوليداي إن',
    location: 'بورسا، تركيا',
    rating: 4.3,
    reviews: 145,
    price: 260,
    image: '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-1.jpeg',
    gallery: [
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-1.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-2.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-3.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-4.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'راحة بمعايير دولية',
    fullDescription: 'فندق بورسا هوليداي إن يقدم إقامة مريحة بمعايير خدمة دولية ومرافق حديثة.',
    features: ['معايير خدمة دولية', 'مركز لياقة بدنية'],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 105,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '42 متر مربع',
        maxGuests: 3,
        price: 145,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'طريق أنقارة 15 كم، بورسا، تركيا'
    }
  },
  39: {
    id: 39,
    name: 'فندق كراون بلازا بورسا',
    location: 'بورسا، تركيا',
    rating: 4.5,
    reviews: 180,
    price: 320,
    image: '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
    gallery: [
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-2.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-3.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-4.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'راحة قريبة من وسط المدينة',
    fullDescription: 'فندق كراون بلازا بورسا يقدم إقامة مناسبة للعمل والترفيه.',
    features: [
      'غرف حديثة',
      'سبا',
      'خيارات طعام'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '32 متر مربع',
        maxGuests: 2,
        price: 120,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '44 متر مربع',
        maxGuests: 3,
        price: 160,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'بورسا، تركيا'
    }
  },
  40: {
    id: 40,
    name: 'فندق ألميرا',
    location: 'بورسا، تركيا',
    rating: 4.4,
    reviews: 150,
    price: 280,
    image: '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-2.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-3.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-4.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'راحة في وسط المدينة',
    fullDescription: 'فندق ألميرا يقدم إقامة مريحة في وسط مدينة بورسا.',
    features: [
      'غرف مريحة',
      'سبا',
      'مطعم'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '30 متر مربع',
        maxGuests: 2,
        price: 110,
        features: ['سرير كوين']
      },
      {
        name: 'غرفة ديلوكس',
        size: '42 متر مربع',
        maxGuests: 3,
        price: 150,
        features: ['سرير كينج']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'بورسا، تركيا'
    }
  }
}

const amenities = {
  wifi: { icon: Wifi, label: 'واي فاي مجاني' },
  parking: { icon: Car, label: 'مواقف مجانية' },
  spa: { icon: Dumbbell, label: 'سبا ورفاهية' },
  restaurant: { icon: Coffee, label: 'مطعم' },
  bar: { icon: Coffee, label: 'بار وصالة استراحة' },
  pool: { icon: Dumbbell, label: 'مسبح' },
  concierge: { icon: Users, label: 'خدمة الكونسيرج' },
  'room-service': { icon: Coffee, label: 'خدمة الغرف' },
  gym: { icon: Dumbbell, label: 'مركز لياقة بدنية' },
  beach: { icon: MapPin, label: 'شاطئ خاص' },
  'kids-club': { icon: Users, label: 'نادي الأطفال' },
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = hotelsData[params.id as unknown as keyof typeof hotelsData]

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">الفندق غير موجود</h1>
          <p className="text-gray-600 mb-8">الفندق الذي تبحث عنه غير موجود.</p>
          <Link href="/ar/hotels" className="btn-primary">
            العودة إلى الفنادق
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
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{hotel.rating}</span>
                <span className="text-gray-300">({hotel.reviews}) تقييم</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">حول {hotel.name}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {hotel.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">مميزات الفندق</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div>
                <h3 className="text-2xl font-bold mb-6">أنواع الغرف والأسعار</h3>
                <div className="space-y-6">
                  {hotel.roomTypes.map((room, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-1">{room.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span>{room.size}</span>
                            <span>•</span>
                            <span>حد أقصى {room.maxGuests} ضيوف</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">€{room.price}</div>
                          <div className="text-sm text-gray-600">لليلة</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, idx) => (
                          <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="btn-primary w-full md:w-auto">
                        احجز الآن
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">معرض الصور</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${hotel.name} - صورة ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{hotel.price}</div>
                  <div className="text-gray-600">لليلة</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تاريخ الوصول
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="تاريخ الوصول"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تاريخ المغادرة
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="تاريخ المغادرة"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      عدد الضيوف
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="عدد الضيوف">
                      <option>1 ضيف</option>
                      <option>2 ضيوف</option>
                      <option>3 ضيوف</option>
                      <option>4+ ضيوف</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full btn-primary mb-3">
                  تحقق من التوفر
                </button>
                <button className="w-full btn-secondary">
                  تواصل مع الفندق
                </button>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">المرافق</h3>
                <div className="space-y-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {amenities[amenity as keyof typeof amenities] && (
                        <>
                          {React.createElement(amenities[amenity as keyof typeof amenities].icon, { className: "w-5 h-5 text-primary-600" })}
                          <span className="text-gray-700">{amenities[amenity as keyof typeof amenities].label}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{hotel.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{hotel.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Hotels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">فنادق مشابهة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Similar hotels would be displayed here */}
            <div className="text-center text-gray-500 col-span-full">
              فنادق مشابهة قريباً...
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}