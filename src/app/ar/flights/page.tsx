import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الرحلات الجوية - MrForty | السفر الفاخر',
  description: 'أفضل صفقات الرحلات الجوية وخيارات الحجز المريحة لرحلتك في تركيا.',
}

export default function FlightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            الرحلات الجوية
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            أفضل صفقات الرحلات الجوية وخيارات الحجز المريحة لرحلتك في تركيا
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">بحث الرحلات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  من
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="المدينة أو المطار"
                  title="من"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  إلى
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="اسطنبول، تركيا"
                  title="إلى"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
                  تاريخ العودة
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="تاريخ العودة"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عدد المسافرين
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="عدد المسافرين">
                  <option>1 مسافر</option>
                  <option>2 مسافر</option>
                  <option>3 مسافر</option>
                  <option>4+ مسافر</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              بحث الرحلات
            </button>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">الطرق الشعبية</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                from: 'اسطنبول',
                to: 'أنطاليا',
                price: '₺1,250',
                duration: '1س 15د',
                image: '/images/destinations/antalya.jpg'
              },
              {
                from: 'أنقرة',
                to: 'اسطنبول',
                price: '₺850',
                duration: '1س 5د',
                image: '/images/destinations/istanbul.jpg'
              },
              {
                from: 'إزمير',
                to: 'كبادوكيا',
                price: '₺1,100',
                duration: '1س 30د',
                image: '/images/destinations/cappadocia.jpg'
              },
              {
                from: 'طرابزون',
                to: 'اسطنبول',
                price: '₺950',
                duration: '1س 45د',
                image: '/images/destinations/istanbul.jpg'
              },
              {
                from: 'أضنة',
                to: 'بودروم',
                price: '₺1,050',
                duration: '1س 20د',
                image: '/images/destinations/bodrum.jpg'
              },
              {
                from: 'غازي عنتاب',
                to: 'اسطنبول',
                price: '₺900',
                duration: '1س 35د',
                image: '/images/destinations/istanbul.jpg'
              }
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={route.image}
                    alt={route.to}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{route.from}</div>
                    <div className="text-lg font-bold">{route.to}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">{route.duration}</div>
                    <div className="text-xl font-bold text-primary-600">{route.price}</div>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airlines Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">شركات الطيران الشريكة</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'الخطوط الجوية التركية',
              'بيغاسوس للطيران',
              'SunExpress',
              'AnadoluJet',
              'AtlasGlobal',
              'Onur Air'
            ].map((airline, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">LOGO</span>
                </div>
                <div className="text-sm font-medium">{airline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}