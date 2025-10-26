import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VIP Transferler - MrForty | Lüks Seyahat',
  description: 'Profesyonel sürücülerle premium ulaşım hizmetleri. Havalimanı transferleri ve özel şoför hizmetleri.',
}

export default function TransfersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            VIP Transferler
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Profesyonel sürücülerle premium ulaşım hizmetleri
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Transfer Rezervasyonu</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alış Noktası
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Alış Noktası">
                  <option>İstanbul Havalimanı (IST)</option>
                  <option>İstanbul Havalimanı (SAW)</option>
                  <option>Antalya Havalimanı (AYT)</option>
                  <option>İzmir Havalimanı (ADB)</option>
                  <option>Ankara Havalimanı (ESB)</option>
                  <option>Otel</option>
                  <option>Adres</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bırakış Noktası
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Otel adı veya adres"
                  title="Bırakış Noktası"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarih
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="Tarih"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Saat
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="Saat"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Yolcu Sayısı
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Yolcu Sayısı">
                  <option>1-3 Yolcu</option>
                  <option>4-6 Yolcu</option>
                  <option>7+ Yolcu</option>
                </select>
              </div>
            </div>
            
            <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Fiyat Al
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Transfer Hizmetlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Havalimanı Transferleri',
                description: 'Tüm Türkiye havalimanlarından otellere ve adreslere güvenilir transfer hizmeti',
                icon: '✈️'
              },
              {
                title: 'Özel Şoför',
                description: 'Profesyonel şoförler ile özel günler, iş toplantıları ve şehir turları',
                icon: '🚗'
              },
              {
                title: 'Lüks Araçlar',
                description: 'Mercedes, BMW ve premium marka araçlarla konforlu seyahat deneyimi',
                icon: '🏎️'
              },
              {
                title: 'Grup Transferleri',
                description: 'Büyük gruplar için otobüs ve minibüs seçenekleri',
                icon: '🚌'
              },
              {
                title: '24/7 Hizmet',
                description: 'Gece gündüz demeden her zaman ulaşılabilir transfer hizmeti',
                icon: '🕐'
              },
              {
                title: 'Çoklu Dil',
                description: 'İngilizce, Türkçe, Arapça ve Rusça konuşan profesyonel sürücüler',
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

      {/* Fleet */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Araç Filomuz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Economy',
                capacity: '1-4 Yolcu',
                features: ['Klima', 'WiFi', 'Su'],
                price: '₺500-800'
              },
              {
                name: 'Business',
                capacity: '1-3 Yolcu',
                features: ['Deri Koltuk', 'WiFi', 'İçecek', 'Gazete'],
                price: '₺800-1200'
              },
              {
                name: 'VIP',
                capacity: '1-3 Yolcu',
                features: ['Lüks Deri', 'Mini Bar', 'WiFi', 'TV'],
                price: '₺1200-2000'
              },
              {
                name: 'Van/Minibüs',
                capacity: '6-16 Yolcu',
                features: ['Klima', 'WiFi', 'Bagaj Alanı'],
                price: '₺1000-2500'
              }
            ].map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.capacity}</p>
                  <ul className="space-y-2 mb-6">
                    {vehicle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-bold text-primary-600">{vehicle.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}