import { Metadata } from 'next'
import { Search, Filter, MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'الفنادق - MrForty | السفر الفاخر',
  description: 'فنادق ومنتجعات فاخرة مختارة بعناية في أجمل المواقع في تركيا.',
}

export default function HotelsPage() {
  const hotels = [
    {
      id: 1,
      name: 'ذا ريتز كارلتون اسطنبول',
      location: 'اسطنبول',
      rating: 4.8,
      reviews: 324,
      price: 450,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'فندق فاخر في قلب اسطنبول مع إطلالات خلابة على البوسفور'
    },
    {
      id: 2,
      name: 'سويسوتيل البوسفور',
      location: 'اسطنبول',
      rating: 4.7,
      reviews: 256,
      price: 380,
      image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
      description: 'فندق أنيق يطل على البوسفور مع مرافق عالمية'
    },
    {
      id: 3,
      name: 'منتجع كهوف كابادوكيا',
      location: 'كابادوكيا',
      rating: 4.9,
      reviews: 412,
      price: 280,
      image: '/hotels/Kapadokya Cave Resort/Kapadokya Cave Resort-1.jpeg',
      amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
      description: 'تجربة فندق كهوف فريدة في قلب كابادوكيا'
    },
    {
      id: 4,
      name: 'تيتانيك ماردان بالاس',
      location: 'أنطاليا',
      rating: 4.8,
      reviews: 523,
      price: 320,
      image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
      description: 'منتجع على طراز قصر فاخر على ساحل البحر المتوسط مع مرافق عالمية'
    },
    {
      id: 5,
      name: 'ذا لاند أوف ليجندز كينغدوم',
      location: 'بودروم',
      rating: 4.8,
      reviews: 167,
      price: 350,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
      description: 'منتجع شاطئي حصري مع إطلالات خلابة على بحر إيجه'
    },
    {
      id: 6,
      name: 'فندق CVK Park Bosphorus Hotel Istanbul',
      location: 'اسطنبول',
      rating: 4.7,
      reviews: 289,
      price: 420,
      image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-4.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
      description: 'فندق عصري وحديث مع إطلالات على البوسفور'
    }
  ]

  const amenities = {
    wifi: { icon: Wifi, label: 'واي فاي مجاني' },
    parking: { icon: Car, label: 'مواقف مجانية' },
    spa: { icon: Dumbbell, label: 'سبا وولنس' },
    restaurant: { icon: Coffee, label: 'مطعم' },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <Image
            src="/hotels-hero.jpg"
            alt="فنادق فاخرة"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 pt-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              الفنادق
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              فنادق ومنتجعات فاخرة مختارة بعناية في أجمل المواقع في تركيا
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="البحث في الفنادق..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none" title="وجهة الفندق">
              <option>جميع الوجهات</option>
              <option>اسطنبول</option>
              <option>كابادوكيا</option>
              <option>أنطاليا</option>
              <option>بودروم</option>
            </select>
            
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none" title="فئة الفندق">
              <option>جميع الفئات</option>
              <option>فاخر</option>
              <option>بوتيك</option>
              <option>منتجع</option>
              <option>أعمال</option>
            </select>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                title="تاريخ الوصول"
              />
            </div>
            
            <button className="btn-primary flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              الفلاتر
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            عرض <span className="font-semibold text-gray-900">{hotels.length}</span> فندق فاخر
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">ترتيب حسب: الموصى به</button>
            <button className="text-gray-600 hover:text-gray-900">عرض الخريطة</button>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="card group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">{hotel.price}€</span>
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
                  {hotel.amenities.slice(0, 3).map((amenity) => (
                    <div key={amenity} className="flex items-center gap-1 text-xs text-gray-600">
                      {amenities[amenity as keyof typeof amenities] && (
                        <>
                          {React.createElement(amenities[amenity as keyof typeof amenities].icon, { className: "w-3 h-3" })}
                          <span>{amenities[amenity as keyof typeof amenities].label}</span>
                        </>
                      )}
                    </div>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="text-xs text-gray-500">+{hotel.amenities.length - 3} أكثر</span>
                  )}
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

      {/* Newsletter Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            احصل على عروض الفنادق الحصرية
          </h2>
          <p className="text-xl mb-8 opacity-90">
            اشترك في نشرتنا البريدية للحصول على عروض خاصة وتوصيات الفنادق الفاخرة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل عنوان بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              اشترك
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}