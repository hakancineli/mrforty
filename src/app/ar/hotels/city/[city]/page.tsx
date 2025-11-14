import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Şehir otelleri verisi
const cityHotelsData = {
  istanbul: [
    {
      id: 1,
      name: 'The Ritz-Carlton İstanbul',
      location: 'إسطنبول، تركيا',
      rating: 4.8,
      reviews: 324,
      price: 8500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'عيش تجربة فاخرة فريدة في قلب إسطنبول حيث تلتقي الأناقة الخالدة بالرقي العصري.',
      fullDescription: 'فندق ذا ريتز كارلتون إسطنبول، الواقع في قلب إسطنبول النابض بالحياة، هو ملجأ للفخامة المكرسة والخدمة المثالية. يجمع فندقنا بين الأناقة الخالدة والراحة العصرية لتقديم تجربة لا تُنسى في واحدة من أكثر مدن العالم سحراً.',
      features: [
        'غرف وجناحات فاخرة بإطلالة على البوسفور',
        'منتجع وولنس صحي حائز على جوائز',
        'مطاعم راقية متعددة',
        'تراس سقف بإطلالة بانورامية على المدينة',
        'مركز لياقة بدنية بأحدث التقنيات',
        'مسبح داخلي',
        'خدمة غرف على مدار 24 ساعة',
        'خدمة كونسيرج خاصة'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'شارع سراسيلفيلر رقم 58، 34367 بشيكتاش، إسطنبول، تركيا'
      }
    },
    {
      id: 2,
      name: 'Swissotel The Bosphorus',
      location: 'إسطنبول، تركيا',
      rating: 4.7,
      reviews: 256,
      price: 7200,
      image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      gallery: [
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'bar', 'gym', 'restaurant'],
      description: 'فندق أنيق بإطلالة على البوسفور ومرافق عالمية المستوى.',
      fullDescription: 'فندق سويسوتيل البوسفور، إسطنبول، يقدم إقامة أنيقة بإطلالة على البوسفور. فندقنا يقدم غرفاً حديثة وخيارات طعام استثنائية ومجموعة من المرافق المصممة لجعل إقامتك مريحة ولا تُنسى.',
      features: [
        'إطلالة على مضيق البوسفور',
        'غرف حديثة بمرافق مميزة',
        'مطاعم وحانات متعددة',
        'مسبح داخلي',
        'منتجع صحي كامل الخدمات',
        'مركز لياقة بدنية'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'شارع بايلديم رقم 2، 34357 بشيكتاش، إسطنبول، تركيا'
      }
    },
    {
      id: 3,
      name: 'CVK Park Bosphorus Hotel',
      location: 'إسطنبول، تركيا',
      rating: 4.7,
      reviews: 289,
      price: 6800,
      image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
      gallery: [
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-2.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-3.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-4.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
      description: 'فندق حديث وأنيق بإطلالة على البوسفور',
      fullDescription: 'فندق CVK Park Bosphorus Hotel إسطنبول هو فندق حديث وأنيق في قلب إسطنبول بإطلالات خلابة على البوسفور. يجمع فندقنا بين التصميم العصري والخدمة الممتازة لتقديم الراحة والفخامة لضيوفنا.',
      features: [
        'غرف وجناحات حديثة بإطلالة على البوسفور',
        'منتجع وولنس صحي كامل الخدمات',
        'مطاعم راقية متعددة',
        'مركز لياقة بدنية بأحدث التقنيات',
        'مسبح داخلي',
        'خدمة غرف على مدار 24 ساعة',
        'خدمة كونسيرج خاصة',
        'قاعات اجتماعات ومناسبات'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'شارع غوموشسوي محلة بالموغجو شك رقم 1، 34349 بشيكتاش، إسطنبول، تركيا'
      }
    },
    {
      id: 4,
      name: 'Mövenpick Hotel Istanbul',
      location: 'إسطنبول، تركيا',
      rating: 4.6,
      reviews: 198,
      price: 5500,
      image: '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
      gallery: [
        '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-2.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-3.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-4.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'فندق عصري بمعايير ضيافة سويسرية',
      fullDescription: 'موفنبيك إسطنبول يجلب معايير الضيافة السويسرية إلى قلب إسطنبول مع مرافق حديثة وخدمة مميزة.',
      features: [
        'غرف عصرية بإطلالات على المدينة',
        'معايير ضيافة سويسرية',
        'مركز لياقة حديث',
        'مسبح داخلي',
        'خيارات طعام متعددة',
        'مركز أعمال'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع بيال باشا رقم 1، 34445 بيوغلو، إسطنبول، تركيا' }
    },
    {
      id: 5,
      name: 'Grand Hyatt Istanbul',
      location: 'إسطنبول، تركيا',
      rating: 4.7,
      reviews: 245,
      price: 7500,
      image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
      gallery: [
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-2.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-3.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-4.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
      description: 'فندق فاخر في قلب المنطقة التجارية بإسطنبول',
      fullDescription: 'جراند حياة إسطنبول يقدم إقامة فاخرة تجمع بين الراحة الحديثة والخدمة المتميزة ومرافق عالمية.',
      features: [
        'غرف فاخرة بإطلالات على المدينة',
        'سبا وولنس عالمي المستوى',
        'خيارات طعام متعددة',
        'مسبح على السطح بإطلالات مدينة',
        'مركز لياقة حديث',
        'مرافق اجتماعات وأعمال'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع طاشكيشلا رقم 1، 34433 تقسيم، إسطنبول، تركيا' }
    },
    {
      id: 6,
      name: 'Conrad Istanbul',
      location: 'إسطنبول، تركيا',
      rating: 4.6,
      reviews: 189,
      price: 6200,
      image: '/hotels/Conrad Istanbul/conrad-1.jpg',
      gallery: [
        '/hotels/Conrad Istanbul/conrad-1.jpg',
        '/hotels/Conrad Istanbul/conrad-2.jpg',
        '/hotels/Conrad Istanbul/conrad-3.jpg',
        '/hotels/Conrad Istanbul/conrad-4.jpg',
        '/hotels/Conrad Istanbul/conrad-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'فندق فاخر بإطلالات على البوسفور',
      fullDescription: 'كونراد إسطنبول يقدم إقامة فاخرة بتصميم عصري وإطلالات على البوسفور مع خدمة متميزة.',
      features: ['غرف بإطلالات على البوسفور', 'سبا فاخر', 'خيارات طعام متعددة', 'مسبح داخلي', 'مركز لياقة', 'مرافق أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع تشراهان رقم 1، 34349 بشيكتاش، إسطنبول، تركيا' }
    },
    {
      id: 7,
      name: 'İstanbul Marriott Hotel',
      location: 'إسطنبول، تركيا',
      rating: 4.5,
      reviews: 167,
      price: 5800,
      image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
      gallery: [
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-2.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-3.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-4.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'إقامة مريحة بمعايير ماريوت',
      fullDescription: 'فندق إسطنبول ماريوت يقدم إقامة مريحة بمعايير ماريوت المعروفة في قلب إسطنبول.',
      features: ['غرف مريحة بوسائل راحة حديثة', 'خدمة ماريوت', 'مركز لياقة', 'مسبح داخلي', 'خيارات طعام متعددة', 'مركز أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع عبيدي حرّيت رقم 175، 34381 شيشلي، إسطنبول، تركيا' }
    },
    {
      id: 8,
      name: 'W İstanbul',
      location: 'إسطنبول، تركيا',
      rating: 4.7,
      reviews: 203,
      price: 8000,
      image: '/hotels/W Istanbul/w-istanbul-1.jpg',
      gallery: [
        '/hotels/W Istanbul/w-istanbul-1.jpg',
        '/hotels/W Istanbul/w-istanbul-2.jpg',
        '/hotels/W Istanbul/w-istanbul-3.jpg',
        '/hotels/W Istanbul/w-istanbul-4.jpg',
        '/hotels/W Istanbul/w-istanbul-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
      description: 'فندق فخم بتصميم عصري أنيق',
      fullDescription: 'يقدم دبليو إسطنبول مزيجاً من التصميم العصري والخدمة الممتازة والمرافق الراقية في قلب المدينة.',
      features: ['غرف أنيقة بتصميم عصري', 'سبا فاخر', 'مطاعم عصرية', 'مسبح على السطح', 'مركز لياقة متطور', 'خدمات كونسيرج'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع سليمان سبا رقم 22، 34357 بشيكتاش، إسطنبول، تركيا' }
    },
    {
      id: 9,
      name: 'Four Seasons İstanbul',
      location: 'إسطنبول، تركيا',
      rating: 4.9,
      reviews: 267,
      price: 9200,
      image: '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
      gallery: [
        '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-2.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-3.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-4.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'فخامة مطلقة في قلب السلطان أحمد التاريخي',
      fullDescription: 'فور سيزونز إسطنبول يجمع بين أناقة عثمانية وراحة عصرية مع خدمة شخصية ومرافق عالمية.',
      features: ['غرف فاخرة بإطلالات تاريخية', 'سبا وولنس عالمي', 'مطاعم فاخرة', 'حديقة داخلية جميلة', 'مركز لياقة', 'خدمة كونسيرج مخصصة', 'تجربة حمام تركي'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع توقيفخانة رقم 1، 34400 السلطان أحمد، إسطنبول، تركيا' }
    },
    {
      id: 10,
      name: 'Çırağan Palace Kempinski',
      location: 'إسطنبول، تركيا',
      rating: 4.9,
      reviews: 312,
      price: 12000,
      image: '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
      gallery: [
        '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-2.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-3.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-4.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'قصر عثماني تحوّل إلى فندق فاخر',
      fullDescription: 'تشيراغان بالاس كمبينسكي هو قصر عثماني سابق تحول إلى فندق فاخر بإطلالات لا مثيل لها على البوسفور وأناقة تاريخية.',
      features: ['غرف فاخرة بإطلالات على البوسفور', 'سبا عالمي', 'مطاعم فاخرة متعددة', 'شاطئ ومسبح خاص', 'هندسة معمارية تاريخية', 'خدمة بتلر شخصية', 'تجربة حمام تركي'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع تشيراغان رقم 32، 34349 بشيكتاش، إسطنبول، تركيا' }
    }
  ],
  trabzon: [
    {
      id: 11,
      name: 'Zorlu Grand Hotel Trabzon',
      location: 'طرابزون، تركيا',
      rating: 4.7,
      reviews: 189,
      price: 4200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'فندق فاخر في قلب طرابزون بإطلالات على المدينة',
      fullDescription: 'يقدم فندق زورلو غراند طرابزون إقامة فاخرة مع وسائل راحة عصرية وخدمة ممتازة.',
      features: ['غرف بإطلالة على المدينة', 'سبا كامل الخدمات', 'مسبح داخلي', 'مركز لياقة'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع ماراش رقم 1، طرابزون، تركيا' }
    },
    {
      id: 12,
      name: 'Novotel Trabzon',
      location: 'طرابزون، تركيا',
      rating: 4.5,
      reviews: 145,
      price: 3500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'فندق حديث بمعايير دولية',
      fullDescription: 'يوفر نوفوتيل طرابزون إقامة مريحة للمسافرين بغرض العمل والترفيه.',
      features: ['غرف بإطلالة على البحر', 'مركز لياقة', 'مسبح داخلي', 'مرافق أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع جمهورييت رقم 95، طرابزون، تركيا' }
    },
    {
      id: 13,
      name: 'Hilton Trabzon',
      location: 'طرابزون، تركيا',
      rating: 4.6,
      reviews: 167,
      price: 4800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'فخامة عالمية بإطلالات على البحر الأسود',
      fullDescription: 'يجمع هيلتون طرابزون بين الخدمة ذات المستوى العالمي والمرافق الحديثة.',
      features: ['غرف بإطلالة على البحر', 'سبا وولنس', 'مسبح داخلي', 'مطاعم راقية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'طرابزون، تركيا' }
    },
    {
      id: 14,
      name: 'Grand Tarabya Hotel',
      location: 'طرابزون، تركيا',
      rating: 4.4,
      reviews: 123,
      price: 3200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'فندق مريح بضيافة تركية تقليدية',
      fullDescription: 'يوفر فندق غراند تارابيا إقامة مريحة مع ضيافة تركية تقليدية في أجواء دافئة.',
      features: ['غرف مريحة', 'ضيافة تقليدية', 'مركز لياقة', 'خيارات طعام متعددة', 'مرافق أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع أوزون رقم 45، طرابزون، تركيا' }
    },
    {
      id: 15,
      name: 'Marriott Hotel Trabzon',
      location: 'طرابزون، تركيا',
      rating: 4.6,
      reviews: 178,
      price: 4500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'جودة ماريوت مع سحر البحر الأسود',
      fullDescription: 'يجمع فندق ماريوت طرابزون بين معايير ماريوت العالمية وسحر البحر الأسود لإقامة راقية.',
      features: ['غرف مطلة على البحر', 'خدمة ماريوت', 'سبا كامل الخدمات', 'مسبح داخلي', 'مرافق أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع غلبهار رقم 123، طرابزون، تركيا' }
    },
    {
      id: 16,
      name: 'Rixos Trabzon',
      location: 'طرابزون، تركيا',
      rating: 4.7,
      reviews: 195,
      price: 5200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
      description: 'منتجع فاخر مع شاطئ خاص',
      fullDescription: 'يقدم ريكسوس طرابزون تجربة منتجع فاخرة مع شاطئ خاص ومرافق عالمية المستوى.',
      features: ['غرف فاخرة مطلة على البحر', 'شاطئ خاص', 'سبا وولنس', 'مسابح متعددة', 'مطاعم فاخرة', 'رياضات مائية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع يالينجاك رقم 99، طرابزون، تركيا' }
    },
    {
      id: 18,
      name: 'Hampton by Hilton Trabzon',
      location: 'طرابزون، تركيا',
      rating: 4.4,
      reviews: 145,
      price: 3000,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
      description: 'راحة عصرية بجودة هامبتون',
      fullDescription: 'يوفر فندق هامبتون باي هيلتون طرابزون راحة عصرية وخدمة موثوقة لإقامة ممتعة.',
      features: ['غرف حديثة', 'مركز لياقة', 'إفطار مجاني', 'مركز أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع تورغوت أوزال رقم 67، طرابزون، تركيا' }
    },
    {
      id: 19,
      name: 'Trabzon Park Hotel',
      location: 'طرابزون، تركيا',
      rating: 4.2,
      reviews: 112,
      price: 2500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'gym', 'restaurant'],
      description: 'فندق مريح بإطلالات على الحديقة',
      fullDescription: 'يوفر فندق طرابزون بارك إقامة مريحة مع إطلالات هادئة على الحديقة في مركز المدينة.',
      features: ['غرف مريحة بإطلالة على الحديقة', 'موقع هادئ', 'مطعم يقدم المأكولات المحلية', 'قاعات اجتماعات'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع كالكنما رقم 34، طرابزون، تركيا' }
    },
    {
      id: 20,
      name: 'Yazıcı Hotel',
      location: 'طرابزون، تركيا',
      rating: 4.3,
      reviews: 128,
      price: 3800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'ضيافة تقليدية براحة عصرية',
      fullDescription: 'يجمع فندق يازجي بين الضيافة التركية التقليدية والراحة العصرية لإقامة مميزة في طرابزون.',
      features: ['غرف مريحة بوسائل راحة حديثة', 'ضيافة تقليدية', 'مركز سبا وولنس', 'مطعم يقدم المأكولات المحلية', 'مرافق أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع غلسوم رقم 12، طرابزون، تركيا' }
    }
  ],
  antalya: [
    {
      id: 21,
      name: 'Mardan Palace',
      location: 'أنطاليا، تركيا',
      rating: 4.8,
      reviews: 523,
      price: 6500,
      image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      gallery: ['/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg'],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
      description: 'منتجع فاخر على طراز القصور على ساحل المتوسط',
      fullDescription: 'منتجع فخم بأسلوب قصري مع شاطئ خاص ومرافق عالمية المستوى.',
      features: ['شاطئ خاص', 'عدة مسابح', 'سبا كامل الخدمات', 'مطاعم راقية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'كيمر، أنطاليا، تركيا' }
    },
    {
      id: 22,
      name: 'Regnum Carya',
      location: 'أنطاليا، تركيا',
      rating: 4.7,
      reviews: 412,
      price: 5800,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: ['/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg'],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'منتجع غولف فاخر على ساحل المتوسط',
      fullDescription: 'ريجنوم كاريا يقدم ملاعب غولف احترافية ومرافق شاطئية مميزة.',
      features: ['ملعب غولف', 'غرف فاخرة', 'سبا وولنس', 'شاطئ خاص'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    },
    {
      id: 23,
      name: 'Maxx Royal Belek',
      location: 'أنطاليا، تركيا',
      rating: 4.8,
      reviews: 489,
      price: 7200,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: ['/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg'],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'منتجع فائق الفخامة مع ملعب غولف',
      fullDescription: 'ماكس رويال بيليك يقدم إقامة فاخرة للغاية مع الغولف والشاطئ.',
      features: ['ملاعب غولف', 'أجنحة فاخرة', 'سبا', 'مسابح'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    },
    {
      id: 24,
      name: 'Susesi Luxury Resort',
      location: 'أنطاليا، تركيا',
      rating: 4.6,
      reviews: 367,
      price: 5200,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'منتجع فاخر على الشاطئ',
      fullDescription: 'سوسيسي لاكشري ريزورت يقدم رفاهية على الشاطئ مع إطلالات على البحر المتوسط ومرافق عالمية المستوى.',
      features: ['غرف فاخرة مطلة على البحر', 'شاطئ خاص', 'سبا وولنس كامل الخدمات', 'مسابح متعددة', 'مطاعم فاخرة', 'رياضات مائية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    },
    {
      id: 25,
      name: 'Calista Luxury Resort',
      location: 'أنطاليا، تركيا',
      rating: 4.7,
      reviews: 398,
      price: 6000,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'منتجع شاطئي فاخر بمرافق متميزة',
      fullDescription: 'كالISTA لاكشري ريزورت يقدم إقامة شاطئية فاخرة مع إطلالات متوسطية ومرافق عالمية.',
      features: ['غرف فاخرة مطلة على البحر', 'شاطئ خاص', 'سبا وولنس', 'مسابح متعددة', 'مطاعم فاخرة', 'أنشطة شاطئية ومائية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    },
    {
      id: 26,
      name: 'Kaya Palazzo',
      location: 'أنطاليا، تركيا',
      rating: 4.6,
      reviews: 345,
      price: 5500,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'منتجع أنيق بطابع متوسطي',
      fullDescription: 'كايا بالازو يقدم إقامة أنيقة بطابع متوسطي مع مرافق متميزة وشاطئ خاص.',
      features: ['غرف أنيقة', 'شاطئ خاص', 'سبا وولنس', 'مسابح متعددة', 'مطاعم راقية', 'رياضات مائية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    },
    {
      id: 27,
      name: 'Rixos Premium Belek',
      location: 'أنطاليا، تركيا',
      rating: 4.7,
      reviews: 423,
      price: 6800,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'منتجع فاخر شامل الخدمات',
      fullDescription: 'ريكسوس بريميوم بيليك يقدم إقامة فاخرة شاملة الخدمات مع إطلالات متوسطية ومرافق عالمية.',
      features: ['غرف مطلة على البحر', 'شاطئ خاص', 'سبا وولنس', 'مسابح متعددة', 'خيارات طعام شاملة', 'ترفيه وأنشطة'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    },
    {
      id: 28,
      name: 'Cornelia Diamond Golf Resort',
      location: 'أنطاليا، تركيا',
      rating: 4.6,
      reviews: 389,
      price: 6200,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'منتجع غولف وشاطئ فاخر',
      fullDescription: 'كورنيليا دايموند يقدم إقامة فاخرة مع مرافق غولف عالمية المستوى وشاطئ خاص.',
      features: ['ملعب غولف احترافي', 'غرف فاخرة مطلة على البحر', 'سبا وولنس', 'مسابح متعددة', 'مطاعم راقية', 'شاطئ خاص'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    },
    {
      id: 29,
      name: 'Land of Legends Kingdom',
      location: 'أنطاليا، تركيا',
      rating: 4.8,
      reviews: 467,
      price: 7500,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
      description: 'منتجع بمنتزه ترفيهي وإقامة فاخرة',
      fullDescription: 'لاند أوف ليجندز كينغدوم يوفر إقامة فاخرة مع دخول للمنتزه الترفيهي ومرافق ترفيه واسعة.',
      features: ['دخول المنتزه الترفيهي', 'غرف فاخرة بديكور مميز', 'حديقة مائية ومنزلقات', 'سبا وولنس', 'خيارات طعام متعددة', 'عروض ترفيهية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'قومكوي، 07400 سيدا، أنطاليا، تركيا' }
    },
    {
      id: 30,
      name: 'Sirene Belek',
      location: 'أنطاليا، تركيا',
      rating: 4.5,
      reviews: 312,
      price: 4800,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'منتجع غولف وشاطئ',
      fullDescription: 'سيرين بيليك يقدم إقامة مريحة مع مرافق غولف وشاطئ وإطلالات متوسطية.',
      features: ['دخول ملعب غولف', 'غرف مريحة مطلة على البحر', 'سبا وولنس', 'مسابح متعددة', 'مطاعم راقية', 'شاطئ خاص'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بيليك، أنطاليا، تركيا' }
    }
  ],
  bursa: [
    {
      id: 31,
      name: 'Hilton Bursa Convention Center',
      location: 'بورصة، تركيا',
      rating: 4.6,
      reviews: 210,
      price: 3800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'فخامة عصرية مع مرافق مؤتمرات',
      fullDescription: 'هيلتون بورصة يقدم راحة عصرية ومرافق فعاليات.',
      features: ['مركز مؤتمرات', 'سبا', 'لياقة'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بورصة، تركيا' }
    },
    {
      id: 32,
      name: 'Crowne Plaza Bursa',
      location: 'بورصة، تركيا',
      rating: 4.5,
      reviews: 180,
      price: 3200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'إقامة مريحة مع سهولة الوصول للمدينة',
      fullDescription: 'كراون بلازا بورصة يوفر إقامة مناسبة لرجال الأعمال والسياح.',
      features: ['غرف حديثة', 'سبا', 'مطعم'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بورصة، تركيا' }
    },
    {
      id: 33,
      name: 'Almira Hotel',
      location: 'بورصة، تركيا',
      rating: 4.4,
      reviews: 150,
      price: 2800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'فندق مريح في مركز المدينة',
      fullDescription: 'فندق الميرا يقدم إقامة مريحة في مركز المدينة.',
      features: ['غرف مريحة', 'سبا', 'مطعم'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'بورصة، تركيا' }
    },
    {
      id: 34,
      name: 'Karinna Hotel',
      location: 'بورصة، تركيا',
      rating: 4.3,
      reviews: 145,
      price: 2500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'فندق بوتيكي بمرافق حرارية',
      fullDescription: 'يوفر فندق كارينّا إقامة بوتيكية مع مرافق سبا حرارية لتجربة ولنس مميزة في بورصة.',
      features: ['غرف بوتيكية بوسائل راحة حديثة', 'مرافق سبا حرارية', 'مطعم يقدم المأكولات المحلية', 'مسابح حرارية', 'مركز ولنس'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع تشكيريجه رقم 67، بورصة، تركيا' }
    },
    {
      id: 35,
      name: 'Grand Yazar Hotel',
      location: 'بورصة، تركيا',
      rating: 4.4,
      reviews: 178,
      price: 3000,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'فندق حديث مع سبا حراري',
      fullDescription: 'غراند يازار هوتيل يقدم إقامة حديثة مع مرافق سبا حرارية للراحة والرفاهية في بورصة.',
      features: ['غرف حديثة بإطلالات على المدينة', 'سبا حراري وولنس', 'مطعم وبار', 'مركز لياقة', 'مرافق أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع ألتيبارماك رقم 89، بورصة، تركيا' }
    },
    {
      id: 36,
      name: 'WOW Bursa',
      location: 'بورصة، تركيا',
      rating: 4.5,
      reviews: 189,
      price: 3500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'فندق بتصميم عصري',
      fullDescription: 'يوفر WOW Bursa إقامة عصرية مع مرافق شاملة لرجال الأعمال والسياح.',
      features: ['غرف بتصميم عصري', 'سبا وولنس', 'مسبح داخلي', 'خيارات طعام متعددة', 'مركز لياقة', 'مرافق أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'طريق أنقرة 8 كم، بورصة، تركيا' }
    },
    {
      id: 37,
      name: 'Gönlüferah Thermal Hotel',
      location: 'بورصة، تركيا',
      rating: 4.3,
      reviews: 156,
      price: 2700,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'فندق حراري تقليدي',
      fullDescription: 'غونلوفراح ثيرمال هوتيل يقدم تجربة سبا حرارية أصيلة مع إقامة مريحة في بورصة.',
      features: ['غرف مريحة بديكور تقليدي', 'مرافق سبا حرارية', 'مطعم يقدم المأكولات المحلية', 'مسابح حرارية', 'مركز ولنس'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع تشكيريجه رقم 123، بورصة، تركيا' }
    },
    {
      id: 38,
      name: 'Kervansaray Thermal Hotel',
      location: 'بورصة، تركيا',
      rating: 4.6,
      reviews: 223,
      price: 4200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'منتجع سبا حراري فاخر',
      fullDescription: 'كيرفانسرای ثيرمال هوتيل يقدم تجربة منتجع سبا حراري فاخر مع مرافق عالمية في بورصة.',
      features: ['غرف فاخرة بوسائل راحة حديثة', 'سبا حراري شامل', 'مسابح متعددة', 'مطاعم راقية', 'مركز لياقة', 'حمام تركي تقليدي'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع تشكيريجه رقم 34، بورصة، تركيا' }
    },
    {
      id: 39,
      name: 'Çelik Palas',
      location: 'بورصة، تركيا',
      rating: 4.4,
      reviews: 198,
      price: 2200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'فندق تاريخي بمرافق حرارية',
      fullDescription: 'تشليك بالاس فندق تاريخي يوفر مرافق سبا حرارية وإقامة مريحة، يجمع بين الأناقة التقليدية والراحة العصرية.',
      features: ['غرف مريحة بديكور تاريخي', 'مرافق سبا حرارية', 'مطعم يقدم المأكولات المحلية', 'مسابح حرارية', 'أجواء تاريخية'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'شارع تشكيريجه رقم 1، بورصة، تركيا' }
    },
    {
      id: 40,
      name: 'Bursa Holiday Inn',
      location: 'بورصة، تركيا',
      rating: 4.3,
      reviews: 145,
      price: 2600,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'فندق مريح بمعايير دولية',
      fullDescription: 'بورصة هوليداي إن يقدم إقامة مريحة بمعايير دولية وخدمات موثوقة.',
      features: ['غرف مريحة بوسائل راحة حديثة', 'معايير خدمة دولية', 'مركز لياقة', 'إفطار مجاني', 'مركز أعمال'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'طريق أنقرة 15 كم، بورصة، تركيا' }
    }
  ]
}

const amenities = {
  wifi: { icon: Wifi, label: 'واي فاي مجاني' },
  parking: { icon: Car, label: 'مواقف مجانية' },
  spa: { icon: Dumbbell, label: 'سبا وولنس' },
  restaurant: { icon: Coffee, label: 'مطعم' },
  bar: { icon: Coffee, label: 'بار وصالة استراحة' },
  pool: { icon: Dumbbell, label: 'مسبح' },
  concierge: { icon: Users, label: 'خدمة الكونسيرج' },
  'room-service': { icon: Coffee, label: 'خدمة الغرف' },
  gym: { icon: Dumbbell, label: 'مركز لياقة بدنية' },
  beach: { icon: MapPin, label: 'شاطئ خاص' },
  'kids-club': { icon: Users, label: 'نادي الأطفال' },
  golf: { icon: Users, label: 'ملف غولف' },
  'water-park': { icon: Users, label: 'متنزه مائي' },
  'beach-club': { icon: Users, label: 'نادي الشاطئ' }
}

export default function CityHotelsPage({ params }: { params: { city: string } }) {
  const cityHotels = cityHotelsData[params.city as keyof typeof cityHotelsData]

  if (!cityHotels) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">الفندق غير موجود</h1>
          <p className="text-gray-600 mb-4">الفندق الذي تبحث عنه غير موجود.</p>
          <p className="text-gray-600 mb-8">الفندق الذي تبحث عنه غير متوفر.</p>
          <Link href="/ar/hotels" className="btn-primary">
            العودة إلى الفنادق
          </Link>
        </div>
      </div>
    )
  }

  const cityNames = {
    istanbul: 'إسطنبول',
    trabzon: 'طرابزون',
    antalya: 'أنطاليا',
    bursa: 'بورصة'
  }

  const cityName = cityNames[params.city as keyof typeof cityNames] || params.city

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">فنادق {cityName}</h1>
            <p className="text-xl opacity-90">اكتشف أفضل الفنادق في {cityName}</p>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">الفنادق الفاخرة في {cityName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              استمتع بخيارات الإقامة الأفضل في {cityName} مع فنادقنا الفاخرة المختارة بعناية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityHotels.map((hotel) => (
              <div key={hotel.id} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary-600">₺{hotel.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-600">/ليلة</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotel.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-gray-600 text-sm">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {amenities[amenity as keyof typeof amenities]?.label || amenity}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      2-4 ضيوف
                    </div>
                    <Link 
                      href={`/ar/hotels/${hotel.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            هل أنت مستعد لحجز إقامتك في {cityName}؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            دع مستشاري السفر الخبراء لدينا يجدون الفندق المثالي لرحلتك إلى {cityName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              احجز الآن
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}