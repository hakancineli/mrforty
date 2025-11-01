import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Users, Fuel, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Araba Kiralama - Premium Araç Kiralama Hizmetleri | MrForty Travel',
  description: 'Premium araç kiralama filomuzu keşfedin: BMW, Audi, Mercedes, Range Rover, Porsche ve Volkswagen Passat. Günlük, haftalık ve aylık kiralama seçenekleri.',
}

export default function RentACarPage() {
  const cars = [
    {
      id: 'bmw',
      name: 'BMW 7 Serisi',
      category: 'Lüks Sedan',
      image: '/rent-a-car/bmw-7-series.jpg',
      features: ['4 Yolcu', 'Otomatik', 'Hibrit', 'Deri Koltuklar'],
      dailyPrice: '',
      weeklyPrice: '',
      monthlyPrice: ''
    },
    {
      id: 'audi',
      name: 'Audi A8',
      category: 'Lüks Sedan',
      image: '/rent-a-car/audi-a8.jpg',
      features: ['4 Yolcu', 'Otomatik', 'Benzin', 'Quattro Çekiş'],
      dailyPrice: '',
      weeklyPrice: '',
      monthlyPrice: ''
    },
    {
      id: 'mercedes',
      name: 'Mercedes S-Serisi',
      category: 'Lüks Sedan',
      image: '/rent-a-car/mercedes-s-class.jpg',
      features: ['4 Yolcu', 'Otomatik', 'Hibrit', 'AIR-BALANCE'],
      dailyPrice: '',
      weeklyPrice: '',
      monthlyPrice: ''
    },
    {
      id: 'range-rover',
      name: 'Range Rover Sport',
      category: 'Lüks SUV',
      image: '/rent-a-car/range-rover-sport.jpg',
      features: ['5 Yolcu', 'Otomatik', 'Dizel', '4WD'],
      dailyPrice: '',
      weeklyPrice: '',
      monthlyPrice: ''
    },
    {
      id: 'porsche',
      name: 'Porsche Panamera',
      category: 'Lüks Spor',
      image: '/rent-a-car/porsche-panamera.jpg',
      features: ['4 Yolcu', 'Otomatik', 'Benzin', 'Sport Chrono'],
      dailyPrice: '',
      weeklyPrice: '',
      monthlyPrice: ''
    },
    {
      id: 'passat',
      name: 'Volkswagen Passat',
      category: 'Premium Sedan',
      image: '/rent-a-car/volkswagen-passat.jpg',
      features: ['5 Yolcu', 'Otomatik', 'Dizel', 'DSG'],
      dailyPrice: '',
      weeklyPrice: '',
      monthlyPrice: ''
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Premium Araç Kiralama Hizmetleri
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Lüks ve konforu premium araç filomuzla deneyimleyin. 
              BMW, Audi, Mercedes, Range Rover, Porsche ve daha fazlası arasından seçim yapın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Hemen Rezervasyon Yap
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#fleet"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Filoyu Görüntüle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Esnek Kiralama</h3>
              <p className="text-gray-600">Günlük, haftalık ve aylık seçenekler</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Hizmet</h3>
              <p className="text-gray-600">7/24 müşteri desteği</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fuel className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">İyi Bakımlı</h3>
              <p className="text-gray-600">Düzenli bakım ve temizlik</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tam Sigorta</h3>
              <p className="text-gray-600">Kapsamlı koruma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section id="fleet" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Filomuz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Konforunuz ve güvenliğiniz için en yüksek standartlarda bakılan, 
              özenle seçilmiş lüks araçlarımız arasından seçim yapın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-500">Günlük</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.dailyPrice || '₺---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Haftalık</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.weeklyPrice || '₺---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Aylık</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.monthlyPrice || '₺---'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Bu Aracı Kirala
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Tarzınızla Sürüşe Hazır mısınız?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Premium kiralık aracınızı rezerve etmek ve üst düzey sürüş deneyimini 
            yaşamak için bugün ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+90506641785" 
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Şimdi Ara: +90 506 641 17 85
            </a>
            <a 
              href="mailto:seyfettin@mrfortytravel.com" 
              className="inline-flex items-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              Bize E-posta Gönderin
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}