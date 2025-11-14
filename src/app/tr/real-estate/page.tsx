import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, DollarSign, Users, Shield, MapPin, BedDouble, Bath, Square, Globe, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emlak - Premium Emlak Hizmetleri | MrForty Travel',
  description: 'Türkiye\'deki premium emlak fırsatlarını keşfedin. Kiralama ve satın alma seçenekleri vatandaşlık yatırım programları ile mevcut. Prime konumlarda lüks özellikler.',
}

export default function RealEstatePage() {
  const rentalProperties = [
    {
      id: 'luxury-apartment-1',
      title: 'Deniz Manzaralı Lüks Daire',
      location: 'İstanbul, Beşiktaş',
      type: 'Daire',
      bedrooms: 3,
      bathrooms: 2,
      area: '180 m²',
      price: '₺15.400/ay',
      image: '/real-estate/luxury-apartment-1.jpg',
      features: ['Deniz Manzarası', 'Eşyalı', 'Otopark', '7/24 Güvenlik']
    },
    {
      id: 'modern-villa-1',
      title: 'Havuzlu Modern Villa',
      location: 'Antalya, Konyaaltı',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '450 m²',
      price: '₺35.200/ay',
      image: '/real-estate/modern-villa-1.jpg',
      features: ['Özel Havuz', 'Bahçe', 'Garaj', 'Akıllı Ev']
    },
    {
      id: 'penthouse-1',
      title: 'Penthouse Süit',
      location: 'İstanbul, Levent',
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '320 m²',
      price: '₺28.600/ay',
      image: '/real-estate/penthouse-1.jpg',
      features: ['Çatı Terası', 'Şehir Manzarası', 'Jakuzi', 'Premium Konum']
    }
  ]

  const saleProperties = [
    {
      id: 'investment-property-1',
      title: 'Yatırım Özellikli Karma',
      location: 'İstanbul, Şişli',
      type: 'Konut Karma',
      bedrooms: 2,
      bathrooms: 1,
      area: '120 m²',
      price: '₺1.890.000',
      image: '/real-estate/investment-property-1.jpg',
      features: ['Yüksek ROI', 'Kira Geliri', 'Şehir Merkezi', 'Yeni Yapı']
    },
    {
      id: 'beach-house-1',
      title: 'Plaj Önü Ev',
      location: 'Bodrum, Yalıkavak',
      type: 'Ev',
      bedrooms: 4,
      bathrooms: 3,
      area: '280 m²',
      price: '₺5.040.000',
      image: '/real-estate/beach-house-1.jpg',
      features: ['Plaj Erişimi', 'Özel Bahçe', 'Deniz Manzarası', 'Lüks Detaylar']
    },
    {
      id: 'commercial-property-1',
      title: 'Ticari Ofis Alanı',
      location: 'İstanbul, Maslak',
      type: 'Ticari',
      bedrooms: 0,
      bathrooms: 2,
      area: '500 m²',
      price: '₺10.500.000',
      image: '/real-estate/commercial-property-1.jpg',
      features: ['İş Merkezi', 'Yüksek Görünürlük', 'Modern Tasarım', 'Otopark']
    }
  ]

  const citizenshipBenefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600" />,
      title: 'Türk Vatandaşlığı',
      description: '$400,000 veya üzeri emlak yatırımı ile Türk vatandaşlığı alın'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'Aile Avantajları',
      description: 'Vatandaşlık başvurusuna eşiniz ve 18 yaş altı çocuklarınızı dahil edin'
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: 'Vizesiz Seyahat',
      description: 'Türk pasaportu ile 110+ ülkeye vizesiz seyahat edin'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-600" />,
      title: 'Yatırım Geri Dönüşü',
      description: 'Potansiyel kira geliri ve emlak değeri artışı'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6" dir="rtl">
              Türkiye'de Premium Emlak
            </h1>
            <p className="text-xl text-gray-200 mb-8" dir="rtl">
              Kiralama ve satın alma için istisnai özellikler keşfedin. 
              Uzman rehberlik ile vatandaşlık yatırım programlarında uzmanlaşmış.
            </p>
            <div className="flex flex-wrap gap-4" dir="rtl">
              <Link 
                href="#rental"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Kiralıkları Görüntüle
                <ArrowRight className="mr-2 w-5 h-5" />
              </Link>
              <Link 
                href="#citizenship"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Vatandaşlık Bilgisi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Citizenship Investment Section */}
      <section id="citizenship" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">Yatırım ile Türk Vatandaşlığı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              Türk emlakına yatırım yapın ve sayısız fayda ile birlikte vatandaşlık kazanın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {citizenshipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" dir="rtl">{benefit.title}</h3>
                <p className="text-gray-600" dir="rtl">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4" dir="rtl">Yatırım Gereksinimleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <p className="text-3xl font-bold mb-2">$400,000</p>
                <p className="text-primary-100" dir="rtl">Minimum Emlak Yatırımı</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">3 Yıl</p>
                <p className="text-primary-100" dir="rtl">Minimum Tutma Süresi</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">6-9 Ay</p>
                <p className="text-primary-100" dir="rtl">İşlem Süresi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Properties Section */}
      <section id="rental" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">Premium Kiralık Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              Prime konumlarda kiralık için özenle seçilmiş lüks özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" dir="rtl">{property.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4" dir="rtl">
                    <MapPin className="w-4 h-4 ml-2" />
                    {property.location}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center" dir="rtl">
                      <BedDouble className="w-4 h-4 ml-1 text-gray-500" />
                      {property.bedrooms} Yatak
                    </div>
                    <div className="flex items-center" dir="rtl">
                      <Bath className="w-4 h-4 ml-1 text-gray-500" />
                      {property.bathrooms} Banyo
                    </div>
                    <div className="flex items-center" dir="rtl">
                      <Square className="w-4 h-4 ml-1 text-gray-500" />
                      {property.area}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Detayları Görüntüle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">Satılık Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              Mükemmel yatırım potansiyeli ile satın alma için özel özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                  <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" dir="rtl">{property.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4" dir="rtl">
                    <MapPin className="w-4 h-4 ml-2" />
                    {property.location}
                  </div>

                  {property.bedrooms > 0 && (
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center" dir="rtl">
                        <BedDouble className="w-4 h-4 ml-1 text-gray-500" />
                        {property.bedrooms} Yatak
                      </div>
                      <div className="flex items-center" dir="rtl">
                        <Bath className="w-4 h-4 ml-1 text-gray-500" />
                        {property.bathrooms} Banyo
                      </div>
                      <div className="flex items-center" dir="rtl">
                        <Square className="w-4 h-4 ml-1 text-gray-500" />
                        {property.area}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Detayları Görüntüle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" dir="rtl">
            Hayalinizdeki Özelliği Bugün Bulun
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto" dir="rtl">
            Kişiselleştirilmiş yardım ve özel emlak listeleri için emlak uzmanlarımızla iletişime geçin
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