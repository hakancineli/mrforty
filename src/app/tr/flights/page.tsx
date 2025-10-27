import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uçuşlar - MrForty | Lüks Seyahat',
  description: 'Türkiye yolculuğunuz için en iyi uçuş fırsatları ve convenient rezervasyon seçenekleri.',
}

export default function FlightsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Uçuşlar
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Türkiye yolculuğunuz için en iyi uçuş fırsatları ve convenient rezervasyon seçenekleri
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Uçuş Arama</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nereden
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Şehir veya havalimanı"
                  title="Nereden"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nereye
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="İstanbul, Türkiye"
                  title="Nereye"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gidiş Tarihi
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="Gidiş Tarihi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dönüş Tarihi
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="Dönüş Tarihi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Yolcu Sayısı
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Yolcu Sayısı">
                  <option>1 Yolcu</option>
                  <option>2 Yolcu</option>
                  <option>3 Yolcu</option>
                  <option>4+ Yolcu</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Uçuşları Ara
            </button>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Popüler Rotalar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                from: 'İstanbul',
                to: 'Antalya',
                price: '₺1,250',
                duration: '1s 15dak',
                image: '/images/destinations/antalya.jpg'
              },
              {
                from: 'Ankara',
                to: 'İstanbul',
                price: '₺850',
                duration: '1s 5dak',
                image: '/images/destinations/istanbul.jpg'
              },
              {
                from: 'İzmir',
                to: 'Cappadocia',
                price: '₺1,100',
                duration: '1s 30dak',
                image: '/images/destinations/cappadocia.jpg'
              },
              {
                from: 'Trabzon',
                to: 'İstanbul',
                price: '₺950',
                duration: '1s 45dak',
                image: '/images/destinations/istanbul.jpg'
              },
              {
                from: 'Adana',
                to: 'Bodrum',
                price: '₺1,050',
                duration: '1s 20dak',
                image: '/images/destinations/bodrum.jpg'
              },
              {
                from: 'Gaziantep',
                to: 'İstanbul',
                price: '₺900',
                duration: '1s 35dak',
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
                    Detayları Gör
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
          <h2 className="text-3xl font-bold mb-12 text-center">Partner Havayolları</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Turkish Airlines',
              'Pegasus Airlines',
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