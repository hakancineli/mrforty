import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'التجارب - MrForty | السفر الفاخر',
  description: 'أنشطة ومغامرات فريدة في كل وجهة.',
}

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            التجارب
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            أنشطة ومغامرات فريدة في كل وجهة
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">تجاربنا الفريدة</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'عشاء بوسفور على البوسفور',
                location: 'اسطنبول',
                duration: '3 ساعات',
                price: '₺450',
                description: 'استمتع بعشاء رومانسي على البوسفور مع الموسيقى الحية',
                image: '/images/destinations/istanbul.jpg'
              },
              {
                title: 'طيران بالون الهواء في كبادوكيا',
                location: 'كبادوكيا',
                duration: 'ساعة واحدة',
                price: '₺850',
                description: 'مغامرة لا تُنسى بالون الهواء عند شروق الشمس',
                image: '/images/destinations/cappadocia.jpg'
              },
              {
                title: 'غوص في أنهار أنطاليا',
                location: 'أنطاليا',
                duration: '4 ساعات',
                price: '₺350',
                description: 'استكشف الشلالات الخلابة والوديان الخضراء',
                image: '/images/destinations/antalya.jpg'
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      <div>{experience.location}</div>
                      <div>{experience.duration}</div>
                    </div>
                    <div className="text-lg font-bold text-primary-600">{experience.price}</div>
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