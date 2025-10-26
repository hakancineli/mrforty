import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الجولات - MrForty | السفر الفاخر',
  description: 'جولات خاصة مرشدة وتجارب فريدة مصممة حسب تفضيلاتك.',
}

export default function ToursPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            الجولات
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            جولات خاصة مرشدة وتجارب فريدة مصممة حسب تفضيلاتك
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">جولاتنا المميزة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'جولة اسطنبول الكلاسيكية',
                duration: 'يوم واحد',
                price: '₺850',
                description: 'استكشف معالم اسطنبول التاريخية بما في ذلك آيا صوفيا والبازار الكبير',
                image: '/images/destinations/istanbul.jpg'
              },
              {
                title: 'مغامرة كبادوكيا بالون الهواء',
                duration: 'يومان',
                price: '₺2,500',
                description: 'تجربة لا تُنسى بالون الهواء فوق أشكال كبادوكيا الصخرية',
                image: '/images/destinations/cappadocia.jpg'
              },
              {
                title: 'جولة أنطاليا الساحلية',
                duration: '3 أيام',
                price: '₺1,800',
                description: 'استرخِ على شواطئ أنطاليا الخلابة واستكشف المدن القديمة',
                image: '/images/destinations/antalya.jpg'
              }
            ].map((tour, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">{tour.duration}</div>
                    <div className="text-lg font-bold text-primary-600">{tour.price}</div>
                  </div>
                  <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    احجز الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}