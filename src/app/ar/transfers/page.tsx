import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'النقل VIP - MrForty | السفر الفاخر',
  description: 'خدمات النقل الممتازة مع السائقين المحترفين. نقل المطار وخدمات السائق الخاص.',
}

export default function TransfersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            النقل VIP
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            خدمات النقل الممتازة مع السائقين المحترفين
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">حجز النقل</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نقطة الاستلام
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="نقطة الاستلام">
                  <option>مطار اسطنبول (IST)</option>
                  <option>مطار اسطنبول (SAW)</option>
                  <option>مطار أنطاليا (AYT)</option>
                  <option>مطار إزمير (ADB)</option>
                  <option>مطار أنقرة (ESB)</option>
                  <option>الفندق</option>
                  <option>العنوان</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  نقطة التسليم
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="اسم الفندق أو العنوان"
                  title="نقطة التسليم"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  التاريخ
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="التاريخ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الوقت
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="الوقت"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  عدد المسافرين
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="عدد المسافرين">
                  <option>1-3 مسافر</option>
                  <option>4-6 مسافر</option>
                  <option>7+ مسافر</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              احصل على السعر
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">خدمات النقل لدينا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'نقل المطار',
                description: 'خدمة نقل موثوقة من جميع مطارات تركيا إلى الفنادق والعناوين',
                icon: '✈️'
              },
              {
                title: 'سائق خاص',
                description: 'سائقون محترفون ليوم خاص، اجتماعات عمل، وجولات في المدينة',
                icon: '🚗'
              },
              {
                title: 'سيارات فاخرة',
                description: 'تجربة سفر مريحة مع سيارات فاخرة من مرسيدس وبي إم دبليو',
                icon: '🏎️'
              },
              {
                title: 'نقل المجموعات',
                description: 'خيارات الحافلات والمينيبوس للمجموعات الكبيرة',
                icon: '🚌'
              },
              {
                title: 'خدمة 24/7',
                description: 'خدمة نقل متاحة على مدار الساعة ليلاً ونهاراً',
                icon: '🕐'
              },
              {
                title: 'متعدد اللغات',
                description: 'سائقون محترفون يتحدثون الإنجليزية والتركية والعربية والروسية',
                icon: '🌍'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}