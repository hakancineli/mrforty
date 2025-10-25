import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight, Heart, Camera, Mountain, Ship, Globe, Hotel, Plane, Car } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ArPage() {
  const hotels = [
    {
      id: 1,
      title: 'فنادق بودروم',
      location: 'اسطنبول',
      price: 180,
      rating: 4.9,
      reviews: 234,
      image: '/hotels/bosphorus-hotel.jpg',
      category: 'luxury',
      amenities: ['WiFi', 'Spa', 'Restaurant', 'Sea View', 'Butler Service'],
      description: 'فندق فاخر يطل على البوسفور مع إطلالة خلابة ومناظر خلابة لإسطنبول.'
    },
    {
      id: 2,
      title: 'فندق سافوان',
      location: 'أنطاليا',
      price: 220,
      rating: 4.8,
      reviews: 189,
      image: '/hotels/savoyan-hotel.jpg',
      category: 'luxury',
      amenities: ['WiFi', 'Spa', 'Private Beach', 'Gourmet Restaurant'],
      description: 'فندق سافوان فاخر يقدم تجربة فاخرة لا مثيل لها مع إطلالة خلابة ومناظر خلابة للبحر الأبيض المتوسط.'
    },
    {
      id: 3,
      title: 'فندق مارماري',
      location: 'مرمريس',
      price: 350,
      rating: 5.0,
      reviews: 156,
      image: '/hotels/marmaris-hotel.jpg',
      category: 'luxury',
      amenities: ['WiFi', 'Spa', 'Private Pool', 'Turkish Bath', 'Helipad'],
      description: 'فندق مارماري الفاخر يقع في قلب مرمريس ويقدم إطلالة خلابة على المدينة التاريخية مع خدمات سبا حصرية.'
    },
    {
      id: 4,
      title: 'فندق هيلتون',
      location: 'أنطاليا',
      price: 280,
      rating: 4.7,
      reviews: 198,
      image: '/hotels/antalya-hotel.jpg',
      category: 'luxury',
      amenities: ['WiFi', 'Spa', 'Water Park', 'Golf Course', 'Private Beach'],
      description: 'فندق هيلتون الفاخر يقع بالقرب من أنطاليا ويوفر إطلالة خلابة مع مناظر خلابة للجبال والمناظر الطبيعية.'
    },
    {
      id: 5,
      title: 'فندق ريفيرا',
      location: 'كابادوكيا',
      price: 420,
      rating: 4.9,
      reviews: 267,
      image: '/hotels/cappadocia-hotel.jpg',
      category: 'luxury',
      amenities: ['WiFi', 'Spa', 'Cave Suite', 'Hot Air Balloon', 'Turkish Night'],
      description: 'فندق ريفيرا الفاخر يقع في قلب كابادوكيا ويوفر غرف فريدة تحت الأرض مع إطلالة خلابة على الصخور البركانية ومناظر منطقة السحراء.'
    },
    {
      id: 6,
      title: 'فندق بورصة',
      location: 'بودروم',
      price: 380,
      rating: 4.6,
      reviews: 145,
      image: '/hotels/bodrum-hotel.jpg',
      category: 'luxury',
      amenities: ['WiFi', 'Spa', 'Private Beach', 'Yacht Club', 'Casino'],
      description: 'فندق بورصة الفاخر يقع في بودروم ويوفر إطلالة خلابة على البحر الأبيض المتوسط مع وصول خاص باليخت.'
    }
  ]

  const tours = [
    {
      id: 1,
      title: 'جولة بالون المنطاد',
      location: 'كابادوكيا',
      duration: 'يوم كامل',
      price: 250,
      rating: 4.9,
      reviews: 289,
      image: '/tours/hot-air-balloon.jpg',
      category: 'adventure',
      difficulty: 'moderate',
      groupSize: '4-16',
      highlights: ['إطلاع الفجر', 'صخور بركانية', 'وجبة فاخرة'],
      description: 'استمتع بتجربة البالون الساخر فوق المناظر السحرية لكابادوكيا مع وجبة فاخرة عند شروق الشمس.'
    },
    {
      id: 2,
      title: 'جولة خاصة باليخت',
      location: 'بودروم',
      duration: 'نصف يوم',
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: '/tours/yacht-tour.jpg',
      category: 'luxury',
      difficulty: 'easy',
      groupSize: '2-8',
      highlights: ['يخت خاص', 'سباحة في الخليج', 'غداء فاخر'],
      description: 'استمتع بيخت خاص في البحر الأبيض المتوسط مع طاقم محترفين ووجبة غداء فاخرة.'
    },
    {
      id: 3,
      title: 'جولة في مدينة أنطاليا',
      location: 'أنطاليا',
      duration: 'يوم كامل',
      price: 180,
      rating: 4.7,
      reviews: 198,
      image: '/tours/istanbul-city.jpg',
      category: 'cultural',
      difficulty: 'easy',
      groupSize: '2-15',
      highlights: ['آيا صوفيا', 'قصر توبكابي', 'الجامع الأزرق'],
      description: 'اكتشف جمال مدينة أنطاليا التاريخية مع زيارة أهم معالمها السياحية والثقافية.'
    },
    {
      id: 4,
      title: 'جولة في باموكالي',
      location: 'باموكالي',
      duration: 'يوم كامل',
      price: 150,
      rating: 4.8,
      reviews: 234,
      image: '/tours/pamukkale.jpg',
      category: 'nature',
      difficulty: 'moderate',
      groupSize: '2-12',
      highlights: ['مياه ساخرة', 'مدرجات بيضاء', 'آثار قديمة'],
      description: 'استمتع بمياه باموكالي الساخرة واستكشف الآثار القديمة في هذه المدينة التاريخية.'
    },
    {
      id: 5,
      title: 'جولة في بودروم',
      location: 'بودروم',
      duration: 'يوم كامل',
      price: 200,
      rating: 4.9,
      reviews: 156,
      image: '/tours/bodrum-city.jpg',
      category: 'cultural',
      difficulty: 'easy',
      groupSize: '2-15',
      highlights: ['قلعة بودروم', 'شواطئ البحر', 'حصن تقليدي'],
      description: 'استمتع بجمال بودروم الساحلي مع زيارة المعالم التاريخية والاستمتاع بالمأكول المحلية.'
    },
    {
      id: 6,
      title: 'جولة في مرمريس',
      location: 'مرمريس',
      duration: 'يوم كامل',
      price: 280,
      rating: 5.0,
      reviews: 189,
      image: '/tours/marmaris-city.jpg',
      category: 'cultural',
      difficulty: 'moderate',
      groupSize: '2-15',
      highlights: ['السوق الكبير', 'المساجد الأزرق', 'جسر غلطة'],
      description: 'اكتشف عاصمة تركيا التجارية والثقافية مع زيارة أسواقها الشهيرة ومعالمها التاريخية.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Luxury Travel Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            اكتشف تركيا مع
            <span className="text-primary-400"> MrForty</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            تجربة السفر الفاخرة والفنادق الحصرية في أجمل الوجهات السياحية في تركيا
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="إلى أين؟"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  title="تاريخ السفر"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  title="عدد الضيوف"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                >
                  <option>2 ضيوف</option>
                  <option>3 ضيوف</option>
                  <option>4 ضيوف</option>
                  <option>5+ ضيوف</option>
                </select>
              </div>
              
              <button className="btn-primary flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                بحث
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">خدماتنا المميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              من الفنادق الفاخرة إلى الجولات الحصرية، نقدم كل ما تحتاجه لرحلة لا تُنسى
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Hotel,
                title: 'فنادق فاخرة',
                description: 'فنادق ومنتجعات مختارة بعناية في أجمل مواقع تركيا',
                link: '/ar/hotels'
              },
              {
                icon: Plane,
                title: 'جولات حصرية',
                description: 'جولات خاصة مع مرشدين وتجارب فريدة حسب تفضيلاتك',
                link: '/ar/tours'
              },
              {
                icon: Car,
                title: 'نقل VIP',
                description: 'خدمات نقل مميزة مع سائقين محترفين',
                link: '/ar/transfers'
              },
              {
                icon: Camera,
                title: 'تجارب',
                description: 'أنشطة فريدة ومغامرات في كل وجهة',
                link: '/ar/experiences'
              }
            ].map((service, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    استكشف
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">الوجهات الشعبية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف مدن تركيا الأيقونية والجواهر الخفية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'إسطنبول',
                image: '/destinations/istanbul.jpg',
                tours: 45,
                rating: 4.8
              },
              {
                name: 'كابادوكيا',
                image: '/destinations/cappadocia.jpg',
                tours: 32,
                rating: 4.9
              },
              {
                name: 'أنطاليا',
                image: '/destinations/antalya.jpg',
                tours: 28,
                rating: 4.7
              },
              {
                name: 'بودروم',
                image: '/destinations/bodrum.jpg',
                tours: 24,
                rating: 4.8
              },
              {
                name: 'باموكالي',
                image: '/destinations/pamukkale.jpg',
                tours: 18,
                rating: 4.9
              },
              {
                name: 'فتحية',
                image: '/destinations/fethiye.jpg',
                tours: 22,
                rating: 4.7
              }
            ].map((destination, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{destination.rating}</span>
                      </div>
                      <span>{destination.tours} جولة</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">فنادقنا الفاخرة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تجربة إقامة لا تُنسى في أرق فنادق تركيا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary-600">€{hotel.price}</span>
                    <span className="text-xs text-gray-600">/ليلة</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.title}</h3>
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

      {/* Tours Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">جولاتنا الحصرية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف تركيا من المدن القديمة إلى العجائب الطبيعية مع مرشدينا الخبراء
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="card group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-secondary-600">€{tour.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {tour.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tour.rating}</span>
                      <span className="text-gray-600 text-sm">({tour.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tour.groupSize}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/ar/tours/${tour.id}`}
                      className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                    >
                      عرض التفاصيل
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            هل تحتاج إلى ترتيبات مخصصة؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            تواصل مع فريقنا للحصول على ترتيبات سفر مخصصة وترتيبات خاصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              احصل على عرض سعر
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              تواصل مع الفريق
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
