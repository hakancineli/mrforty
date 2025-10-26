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
    description: 'تجربة فاخرة لا مثيل لها في قلب اسطنبول حيث يلتقي الأناقة الخالدة بالرقي المعاصر.',
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
      phone: '+90 532 123 4567',
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
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'شارع بايلديم رقم 2، 34357 بشيكتاش، اسطنبول، تركيا'
    }
  },
  3: {
    id: 3,
    name: 'منتجع كهوف كابادوكيا',
    location: 'كابادوكيا، تركيا',
    rating: 4.9,
    reviews: 412,
    price: 280,
    image: '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-1.jpeg',
    gallery: [
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-1.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-2.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-3.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-4 .jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-5 .jpeg'
    ],
    amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
    description: 'تجربة فريدة من نوعها في فندق الكهوف في قلب كابادوكيا.',
    fullDescription: 'استمتع بإقامة فاخرة في الكهوف السحرية لكابادوكيا. يقدم منتجع الكهوف الخاص بنا تجربة أصيلة مع وسائل الراحة الحديثة، مما يجمع بين سحر الكهوف الفريد والراحة المعاصرة. تم تصميم كل غرفة بعناية لتوفير إقامة لا تُنسى في هذه المنطقة الرائعة.',
    features: [
      'غرف كهوف أصلية مع وسائل راحة حديثة',
      'إطلالات خلابة على المداخن الخيالية',
      'مطعم يقدم المطبخ التركي التقليدي',
      'منتجع صحي كامل الخدمات',
      'مكتب سياحي لتنظيم الأنشطة',
      'واي فاي مجاني في جميع أنحاء المنتجع'
    ],
    roomTypes: [
      {
        name: 'جناح الكهف',
        size: '40 متر مربع',
        maxGuests: 2,
        price: 280,
        features: ['سرير كوين', 'إطلالة على المداخن الخيالية', 'حمام حجري', 'ديكور تقليدي']
      },
      {
        name: 'جناح ديلوكس في الكهف',
        size: '55 متر مربع',
        maxGuests: 3,
        price: 350,
        features: ['سرير كينج', 'إطلالة على المداخن الخيالية', 'حمام حجري', 'ديكور تقليدي', 'منطقة جلوس منفصلة']
      },
      {
        name: 'جناح عائلي في الكهف',
        size: '75 متر مربع',
        maxGuests: 4,
        price: 450,
        features: ['سرير كينج', 'سرير كوين', 'إطلالة على المداخن الخيالية', 'حمام حجري', 'ديكور تقليدي', 'منطقة جلوس منفصلة']
      },
      {
        name: 'جناح مميز في الكهف',
        size: '90 متر مربع',
        maxGuests: 4,
        price: 550,
        features: ['سرير كينج', 'سرير كوين', 'إطلالة على المداخن الخيالية', 'حمام حجري', 'ديكور تقليدي', 'منطقة جلوس منفصلة', 'جاكوزي']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'حديقة غوريم الوطنية، 50180 غوريم، نيفشير، تركيا'
    }
  },
  4: {
    id: 4,
    name: 'تيتانيك ماردان بالاس',
    location: 'أنطاليا، تركيا',
    rating: 4.8,
    reviews: 523,
    price: 320,
    image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
    gallery: [
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'منتجع فاخر على طراز القصور على ساحل البحر الأبيض المتوسط مع مرافق عالمية.',
    fullDescription: 'تيتانيك ماردان بالاس هو منتجع رائع على طراز القصور يقع على ساحل البحر الأبيض المتوسط الخلاب في أنطاليا. باعتباره أندق فندق في تركيا، يقدم تجربة لا مثيل لها مع هندسته المعمارية المستوحاة من الإمبراطورية العثمانية، ومسابحه الشاسعة، وشاطئه الخاص، وتناول الطعام على مستوى عالمي. يتميز المنتجع بغرف وأجنحة فاخرة، ومنتجع صحي كامل الخدمات، ومسابح سباحة متعددة بما في ذلك واحد مع ألعاب مائية، وخدمة استثنائية تتجاوز جميع التوقعات.',
    features: [
      'هندسة معمارية على طراز القصور بتصميم مستوحى من العثمانية',
      'شاطئ خاص بمياه البحر الأبيض المتوسط البلورية',
      'مسابح سباحة متعددة بما في ذلك ألعاب مائية',
      'منتجع صحي ورفاهية عالمي المستوى',
      'مطاعم راقية مع مطبخ دولي',
      'نادي أطفال وأنشطة مناسبة للعائلات',
      'مركز لياقة بدنية مجهز بأحدث التقنيات',
      'ترفيه مسائي وعروض'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '45 متر مربع',
        maxGuests: 2,
        price: 320,
        features: ['سرير كينج', 'إطلالة على الحديقة', 'حمام رخام', 'شرفة']
      },
      {
        name: 'غرفة ديلوكس',
        size: '55 متر مربع',
        maxGuests: 3,
        price: 420,
        features: ['سرير كينج', 'إطلالة على البحر', 'حمام رخام', 'شرفة', 'منطقة جلوس']
      },
      {
        name: 'غرفة عائلية',
        size: '75 متر مربع',
        maxGuests: 4,
        price: 580,
        features: ['سرير كينج', 'سرير كوين', 'إطلالة على البحر', 'حمام رخام', 'شرفة', 'منطقة جلوس منفصلة']
      },
      {
        name: 'جنحة ملكية',
        size: '120 متر مربع',
        maxGuests: 6,
        price: 1200,
        features: ['سرير كينج', 'سرير كوين', 'إطلالة على البحر', 'حمام رخام', 'شرفة', 'منطقة جلوس منفصلة', 'وصول للمسبح الخاص']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'كيمر، 07980 أنطاليا، تركيا'
    }
  },
  5: {
    id: 5,
    name: 'ذا لاند أوف ليجندز',
    location: 'بودروم، تركيا',
    rating: 4.8,
    reviews: 167,
    price: 350,
    image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
    gallery: [
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'منتجع شاطئي حصري مع إطلالات خلابة على بحر إيجة',
    fullDescription: 'ذا لاند أوف ليجندز كينغدوم هو منتجع شاطئي حصري يقدم إطلالات خلابة على بحر إيجة. هذه الوجهة الفاخرة تجمع بين المرافق عالمية المستوى والخدمة الاستثنائية لخلق تجربة لا تُنسى. من الشواطئ النقية إلى المطاعم الراقية وخيارات الترفيه المثيرة، تم تصميم كل جانب من إقامتك لتجاوز التوقعات وخلق ذكريات دائمة.',
    features: [
      'موقع شاطئي حصري مع إطلالات على بحر إيجة',
      'مسابح سباحة متعددة بما في ذلك ألعاب مائية',
      'منتجع صحي ورفاهية عالمي المستوى',
      'مطاعم راقية مع مطبخ دولي',
      'مركز لياقة بدنية مجهز بأحدث التقنيات',
      'نادي أطفال مع أنشطة تحت الإشراف',
      'ترفيه مسائي وعروض',
      'وصول إلى الشاطئ الخاص مع وسائل راقية'
    ],
    roomTypes: [
      {
        name: 'غرفة قياسية',
        size: '35 متر مربع',
        maxGuests: 2,
        price: 350,
        features: ['سرير كينج', 'إطلالة على الحديقة', 'حمام رخام', 'شرفة']
      },
      {
        name: 'غرفة ديلوكس',
        size: '45 متر مربع',
        maxGuests: 3,
        price: 450,
        features: ['سرير كينج', 'إطلالة على البحر', 'حمام رخام', 'شرفة', 'منطقة جلوس']
      },
      {
        name: 'جنحة عائلية',
        size: '65 متر مربع',
        maxGuests: 4,
        price: 580,
        features: ['سرير كينج', 'سرير كوين', 'إطلالة على البحر', 'حمام رخام', 'شرفة', 'منطقة جلوس منفصلة']
      },
      {
        name: 'جنحة ملكية',
        size: '90 متر مربع',
        maxGuests: 6,
        price: 850,
        features: ['سرير كينج', 'سرير كوين', 'إطلالة على البحر', 'حمام رخام', 'شرفة', 'منطقة جلوس منفصلة', 'وصول للمسبح الخاص']
      }
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'غوموشوك، بودروم، موغلا، تركيا'
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