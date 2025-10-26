import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الفنادق - MrForty | السفر الفاخر',
  description: 'فنادق ومنتجعات فاخرة مختارة بعناية في أجمل المواقع في تركيا.',
}

export default function HotelsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            الفنادق
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            فنادق ومنتجعات فاخرة مختارة بعناية في أجمل المواقع في تركيا
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">بحث الفنادق</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الوجهة
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="المدينة أو المنطقة"
                  title="الوجهة"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تاريخ الوصول
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="تاريخ المغادرة"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تاريخ المغادرة
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="تاريخ الوصول"
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
            
            <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              بحث الفنادق
            </button>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">الفنادق المميزة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'فندق سيراجان اسطنبول',
                location: 'اسطنبول',
                rating: 4.8,
                price: '₺2,500',
                image: '/images/destinations/istanbul.jpg'
              },
              {
                name: 'منتجع ماردين كابادوكيا',
                location: 'كبادوكيا',
                rating: 4.9,
                price: '₺3,200',
                image: '/images/destinations/cappadocia.jpg'
              },
              {
                name: 'فندق ريجنس كايا أنطاليا',
                location: 'أنطاليا',
                rating: 4.7,
                price: '₺2,800',
                image: '/images/destinations/antalya.jpg'
              }
            ].map((hotel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-semibold">
                    ⭐ {hotel.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                  <p className="text-gray-600 mb-4">{hotel.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary-600">{hotel.price}</div>
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      احجز الآن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}