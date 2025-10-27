'use client'

import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Tour data - in a real app, this would come from an API or database
const toursData = {
  1: {
    id: 1,
    title: 'İstanbul Boğaz Turu',
    location: 'İstanbul',
    rating: 4.8,
    reviews: 156,
    price: 89,
    image: '/images/destinations/istanbul.jpg',
    category: 'cruise',
    difficulty: 'Kolay',
    groupSize: '2-20',
    duration: '3 saat',
    highlights: ['Boğaz Köprüsü', 'Dolmabahçe Sarayı', 'Ortaköy Camii'],
    description: 'İstanbul\'un büyüsünü sudan deneyimleyin, akşam yemeği ve eğlence içeren lüks turumuzla.',
    fullDescription: 'Unutulmaz bir akşam Boğaz\'da bize katılın. Lüks gezimiz, Boğaz Köprüsü\'nün heybetli manzarası, Dolmabahçe Sarayı ve Ortaköy Camii gibi İstanbul\'un ikonik simge yapılarının nefes kesen manzaralarını sunuyor. Avrupa ve Asya\'yı ayıran bu su yollarında seyir halindeyken lüks akşam yemeği ve canlı eğlenceye varın.',
    features: [
      'İstanbul\'un simge yapılarının gece manzaraları',
      'Geleneksel Türk mutfağı ile lüks akşam yemeği',
      'Canlı müzik ve dans gösterileri',
      'Rahat koltukları olan lüks yatlar',
      'Tarihi bilgilerle profesyonel rehber',
      'Ücretsiz içecekler ve atıştırmalıklar',
      'Aydınlatılmış İstanbul manzarasıyla fotoğraf fırsatları'
    ],
    itinerary: [
      {
        time: '19:00',
        activity: 'Yanağa Binme',
        description: 'Hoş geldin içecekleri ve mürettebatla tanışma'
      },
      {
        time: '19:30',
        activity: 'Akşam Yemeği Başlangıcı',
        description: 'Türk ve uluslararası mutfaktan çok yemekli akşam yemeği'
      },
      {
        time: '20:30',
        activity: 'Eğlence Gösterisi',
        description: 'Canlı müzik ve geleneksel danslar'
      },
      {
        time: '21:30',
        activity: 'Boğaz Köprüsü Geçişi',
        description: 'Aydınlatılmış köprünün altından geçiş ve fotoğraf çekimi'
      },
      {
        time: '22:00',
        activity: 'Dolmabahçe Sarayı Manzarası',
        description: 'Osmanlı sarayını ve güzel bahçelerini izleme'
      },
      {
        time: '22:30',
        activity: 'Yanağa Dönüş',
        description: 'İniş ve otele dönüş'
      }
    ],
    included: [
      'Lüks yat turu',
      'Lüks akşam yemeği',
      'Canlı eğlence',
      'Hoş geldin içecekleri',
      'Profesyonel rehber',
      'Fotoğraf fırsatları'
    ],
    notIncluded: [
      'Otelden otele transfer',
      'Alkollü içecekler (satın alınabilir)',
      'Bahşişler'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Kabataş Yanağı, İstanbul, Türkiye'
    }
  },
  2: {
    id: 2,
    title: 'Kapadokya Sıcak Hava Balonu',
    location: 'Kapadokya',
    rating: 4.9,
    reviews: 289,
    price: 150,
    image: '/images/destinations/cappadocia.jpg',
    category: 'adventure',
    difficulty: 'Orta',
    groupSize: '4-16',
    duration: 'Bir gün',
    highlights: ['Gün doğumu uçuşu', 'Peri bacaları', 'Yeraltı şehirleri'],
    description: 'Gün doğumunda sıcak hava balonuyla Kapadokya\'nın büyülü manzaralarının üzerinde süzülün.',
    fullDescription: 'Kapadokya\'nın güzelliğini benzersiz bir perspektiften deneyimleyin - peri bacaları ve mağara konaklarının üzerinde gün doğumunda sıcak hava balonuyla süzülün. Deneyimli pilotlarımız, bu harika manzaranın üzerinde sessizce süzülürken güvenli ve unutulmaz bir yolculuk sağlar. Gün doğumu gökyüzünü canlı renklerle boyarken, bu bir ömür boyu unutulmayacak macera geleneksel şampanya kutlaması içerir.',
    features: [
      'Gün doğumu sıcak hava balonu turu',
      'Profesyonel ve deneyimli pilotlar',
      'İnişte şampanya kutlaması',
      'Uçuş sertifikası',
      'Kapsamlı sigorta',
      'Otelden otele transfer hizmeti',
      'Kişisel deneyim için küçük gruplar'
    ],
    itinerary: [
      {
        time: '04:30',
        activity: 'Otel Transferi',
        description: 'Otelinizden alınış ve kalkış alanına transfer'
      },
      {
        time: '05:00',
        activity: 'Hazırlık ve Şişirme',
        description: 'Balon şişirilmesini izleme ve güvenlik talimatları'
      },
      {
        time: '05:30',
        activity: 'Kalkış',
        description: 'Gün doğumuyla birlikte gökyüzüne sakin yükseliş'
      },
      {
        time: '06:00-07:30',
        activity: 'Peri Bacaları Üzerinde Uçuş',
        description: 'Kapadokya\'nın ikonik manzaralarının üzerinde süzülme'
      },
      {
        time: '07:30',
        activity: 'İniş ve Kutlama',
        description: 'Yumuşak iniş ve şampanya kutlaması'
      },
      {
        time: '08:00',
        activity: 'Otele Transfer',
        description: 'Kahvaltı ile otele dönüş'
      }
    ],
    included: [
      'Otelden otele transfer',
      'Sıcak hava balonu turu',
      'Profesyonel pilot',
      'Şampanya kutlaması',
      'Uçuş sertifikası',
      'Sigorta',
      'Hafif kahvaltı'
    ],
    notIncluded: [
      'Ekstra içecekler',
      'Kişisel harcamalar',
      'Pilota bahşiş'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Göreme, Kapadokya, Türkiye'
    }
  },
  3: {
    id: 3,
    title: 'Efes Antik Kent Turu',
    location: 'İzmir',
    rating: 4.7,
    reviews: 198,
    price: 75,
    image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg',
    category: 'cultural',
    difficulty: 'Kolay',
    groupSize: '2-15',
    duration: 'Tam gün',
    highlights: ['Celsus Kütüphanesi', 'Büyük Tiyatro', 'Artemis Tapınağı'],
    description: 'Uzman rehberlerimizle Efes\'in harikalarını keşfedin ve giriş biletleri dahil olsun.',
    fullDescription: 'Zamanda geriye gidin ve Roma İmparatorluğu\'nun ikinci büyük şehri olan Efes\'in harika kalıntılarını keşfedin. Profesyonel rehberlerimiz, antik kentin sokaklarında yürürken tarihe hayat katacak, Celsus Kütüphanesi\'nin etkileyici yapısını, inanılmaz akustiğe sahip Büyük Tiyatro\'yu ve Dünyanın Yedi Harikası\'ndan biri olan Artemis Tapınağı\'nı ziyaret edecekler. Bu kapsamlı tur, hızlı giriş biletleri ve konforlu transfer içerir.',
    features: [
      'Profesyonel arkeoloji rehberi',
      'Tüm siteler için hızlı giriş biletleri',
      'Klimalı transfer',
      'Kişisel deneyim için küçük gruplar',
      'Tüm ana sitelerin ziyareti',
      'Alışveriş ve kişisel keşif için zaman',
      'Kapsamlı tarihi bilgiler'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Otel Transferi',
        description: 'İzmir\'deki otelden alınış'
      },
      {
        time: '09:30',
        activity: 'Efes\'e Varış',
        description: 'Antik kente varış ve tur genel bakışı'
      },
      {
        time: '10:00',
        activity: 'Celsus Kütüphanesi',
        description: 'Ünlü kütüphaneyi ziyaret ve detaylı açıklamalar'
      },
      {
        time: '11:00',
        activity: 'Büyük Tiyatro',
        description: 'Harika korunmuş tiyatronun keşfi'
      },
      {
        time: '12:00',
        activity: 'Öğle Yemeği Molası',
        description: 'Yerel restoranda geleneksel Türk öğle yemeği'
      },
      {
        time: '13:00',
        activity: 'Artemis Tapınağı',
        description: 'Dünyanın Yedi Harikası\'ndan biri olan Artemis Tapınağı ziyareti'
      },
      {
        time: '15:00',
        activity: 'Serbest Zaman',
        description: 'Alışveriş ve kişisel keşif için zaman'
      },
      {
        time: '17:00',
        activity: 'Otele Dönüş',
        description: 'Otele transfer'
      }
    ],
    included: [
      'Uzman rehber',
      'Tüm siteler için giriş biletleri',
      'Transfer',
      'Öğle yemeği',
      'Alışveriş zamanı',
      'Küçük grup'
    ],
    notIncluded: [
      'Kişisel harcamalar',
      'Rehbere bahşiş',
      'Akşam yemeği'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Selçuk, İzmir, Türkiye'
    }
  },
  4: {
    id: 4,
    title: 'Pamukkale Termal Havuzları',
    location: 'Pamukkale',
    rating: 4.8,
    reviews: 234,
    price: 95,
    image: '/images/destinations/pamukkale.jpg',
    category: 'nature',
    difficulty: 'Kolay',
    groupSize: '2-25',
    duration: 'Tam gün',
    highlights: ['Travertenler', 'Hierapolis', 'Kleopatra Havuzu'],
    description: 'Pamukkale\'nin şifalı sularında dinlenin ve antik Hierapolis\'i keşfedin.',
    fullDescription: 'Pamukkale\'nin doğal harikalarını keşfedin, burada kalsiyum açısından zengin termal sular binlerce yıl boyunca beyaz traverten yüzeyler oluşturmuştur. Turumuz, termal havuzlarda dinlenmeyi ve antik Hierapolis şehrini keşfetmeyi birleştiriyor. Mineraller açısından zengin travertenler üzerinde yalınayak yürüyün, şifalı özelliklere sahip olduğu düşünülen ılık sularda yüzün ve harika korunmuş Kleopatra Havuzu\'nu ziyaret edin. Bu tam günlük deneyim transfer, öğle yemeği ve uzman rehberlik içerir.',
    features: [
      'Pamukkale termal havuzlarına erişim',
      'Hierapolis kalıntıları ziyareti',
      'Tarihi içgörülerle profesyonel rehber',
      'Kleopatra Havuzu\'nda yüzme',
      'Travertenlerin keşfi',
      'Siteden transfer',
      'Geleneksel öğle yemeği dahil'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Otel Transferi',
        description: 'Otelinizden alınış'
      },
      {
        time: '10:00',
        activity: 'Pamukkale\'ye Varış',
        description: 'Siteye varış ve güvenlik talimatları'
      },
      {
        time: '10:30',
        activity: 'Traventenler',
        description: 'Beyaz kalsiyum yüzeyler üzerinde yürüyüş turu'
      },
      {
        time: '12:00',
        activity: 'Hierapolis Kalıntıları',
        description: 'Rehberle antik şehri keşfetme'
      },
      {
        time: '13:00',
        activity: 'Öğle Yemeği',
        description: 'Yerel restoranda geleneksel Türk öğle yemeği'
      },
      {
        time: '14:00',
        activity: 'Yüzme Zamanı',
        description: 'Termal havuzlarda yüzme için serbest zaman'
      },
      {
        time: '16:00',
        activity: 'Kleopatra Havuzu',
        description: 'Antik termal havuz ziyareti'
      },
      {
        time: '17:00',
        activity: 'Otele Dönüş',
        description: 'Otele transfer'
      }
    ],
    included: [
      'Transfer',
      'Profesyonel rehber',
      'Giriş ücretleri',
      'Öğle yemeği',
      'Yüzme erişimi',
      'Küçük grup'
    ],
    notIncluded: [
      'Yüzme kıyafetleri ve havlular',
      'Kişisel harcamalar',
      'Rehbere bahşiş'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Pamukkale, Denizli, Türkiye'
    }
  },
  5: {
    id: 5,
    title: 'Mavi Yolculuk Gulet Turu',
    location: 'Bodrum',
    rating: 4.9,
    reviews: 167,
    price: 450,
    image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk Gulet Turu.jpeg',
    category: 'cruise',
    difficulty: 'Kolay',
    groupSize: '2-12',
    duration: '3 gün',
    highlights: ['Geleneksel guletler', 'Yüzme koyları', 'Türk mutfağı'],
    description: 'Geleneksel ahşap guletimizle Ege Denizi\'nin mavi sularında seyrüsefa edin ve ünlü Türk mutfağını tadın.',
    fullDescription: 'Geleneksel ahşap guletimizde nihai Türk deniz macerasını yaşayın. Ege Denizi\'nin muhteşem sahili boyunca yelken açın, kristal berraklığında sularda yüzmek için izole koylarda durun ve gemi aşçımızın hazırladığı otantik Türk mutfağının tadını çıkarın. Bu kapsamlı yolculuk, rahat kabinler, dost canlısı mürettebat, su sporları, balıkçılık ve batan güneşi izlerken güvertede basitçe dinlenme fırsatları sunar.',
    features: [
      'Geleneksel ahşap gulet teknesi',
      'Tüm öğünler ve içecekler dahil',
      'İzole koylarda yüzme molağı',
      'Su sporları ekipmanları',
      'Balıkçılık ekipmanları',
      'Özel banyolu konforlu kabinler',
      'Profesyonel kaptan ve mürettebat',
      'Havlu ve yatak örtüleri'
    ],
    itinerary: [
      {
        time: '09:00',
        activity: 'Tekneye Binme ve Hoş Geldin',
        description: 'Bodrum limanında gulete binme ve hoş geldin içecekleri'
      },
      {
        time: '10:00',
        activity: 'Sabah Seyri',
        description: 'Kahvaltı ile Ege sahili boyunca yelken açma'
      },
      {
        time: '12:00',
        activity: 'Yüzme ve Öğle Yemeği',
        description: 'İzole koyda yüzme molası ve gemide öğle yemeği'
      },
      {
        time: '14:00',
        activity: 'Öğleden Sonra Seyri',
        description: 'Başka bir harika yere devam eden yelken açma'
      },
      {
        time: '16:00',
        activity: 'Akşam Yüzmesi ve Akşam Yemeği',
        description: 'Yüzme molası ardından yerel malzemelerle hazırlanmış akşam yemeği'
      },
      {
        time: '18:00',
        activity: 'Gün Batımı İzleme',
        description: 'İçeceklerle güvertede dinlenme ve gün batımı izleme'
      },
      {
        time: '20:00',
        activity: 'Demirleme Yerinde Konaklama',
        description: 'Sakin bir koyda demirleme ve konforlu kabinlerde uyku'
      },
      {
        time: '08:00',
        activity: 'Kahvaltı ve Dönüş',
        description: 'Bodrum limanına dönüş öncesi gemide kahvaltı'
      }
    ],
    included: [
      'Özel kabinde konaklama',
      'Tüm öğünler ve içecekler',
      'Yüzme mola yerleri ve su sporları ekipmanları',
      'Balıkçılık ekipmanları',
      'Profesyonel kaptan ve mürettebat',
      'Havlu ve örtüler'
    ],
    notIncluded: [
      'Alkollü içecekler (satın alınabilir)',
      'Kişisel harcamalar',
      'Mürettebata bahşiş'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Bodrum Limanı, Muğla, Türkiye'
    }
  },
  6: {
    id: 6,
    title: 'Sapanca Maşukiye Turu',
    location: 'Sapanca',
    rating: 4.8,
    reviews: 125,
    price: 180,
    image: '/tours/Sapanca%20Masukiye/Sapanca%20Masukiye.jpeg',
    category: 'nature',
    difficulty: 'Kolay',
    groupSize: '2-15',
    duration: 'Bir gün',
    highlights: ['Sapanca Gölü', 'Maşukiye Ormanı', 'Doğa manzaraları'],
    description: 'Sapanca Maşukiye\'de bir gün geçirin ve rehberli turumuzla keyifli zamanlar yaşayın.',
    fullDescription: 'İstanbul\'a yakın bulunan Sapanca Maşukiye, doğal bir cennettir. Yeşil çam ormanlarında yürüyüş yapacak, gölün nefes kesen manzaralarının tadını çıkaracak ve göl manzaralı restoranlarda yerel lezzetleri tadacaksınız. Şehrin gürültüsünden kaçmak ve doğanın kucağında dinlenmek için mükemmel bir tur.',
    features: [
      'Otelden otele transfer',
      'Profesyonel rehber',
      'Göl kenarında öğle yemeği',
      'Keşif için serbest zaman',
      'Tarihi bir yer ziyareti',
      'Yerel lezzetleri tatma'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Hareket',
        description: 'Belirlenen buluşma noktasından hareket'
      },
      {
        time: '09:30',
        activity: 'Sapanca\'ya Varış',
        description: 'Sapanca Maşukiye\'ye varış ve tur tanıtımı'
      },
      {
        time: '10:00',
        activity: 'Orman Turu',
        description: 'Yeşil çam ormanlarında yürüyüş'
      },
      {
        time: '12:00',
        activity: 'Göl Kenarında Öğle Yemeği',
        description: 'Göl manzaralı yerel restoranda öğle yemeği'
      },
      {
        time: '14:00',
        activity: 'Serbest Zaman',
        description: 'Keşif veya alışveriş için serbest zaman'
      },
      {
        time: '16:30',
        activity: 'Dönüş',
        description: 'Orijinal buluşma noktasına dönüş'
      }
    ],
    included: [
      'Otelden otele transfer',
      'Profesyonel rehber',
      'Öğle yemeği',
      'Keşif için serbest zaman',
      'Tarihi bir yer ziyareti',
      'Yerel lezzetleri tatma'
    ],
    notIncluded: [
      'Akşam yemeği',
      'İçecekler',
      'Kişisel harcamalar',
      'Rehbere bahşiş'
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Sapanca, İstanbul, Türkiye'
    }
  }
}

const amenities = {
  wifi: { icon: Wifi, label: 'Ücretsiz Wi-Fi' },
  parking: { icon: Car, label: 'Ücretsiz Otopark' },
  spa: { icon: Dumbbell, label: 'Spa ve Wellness' },
  restaurant: { icon: Coffee, label: 'Restoran' },
  bar: { icon: Coffee, label: 'Bar ve Lounge' },
  pool: { icon: Dumbbell, label: 'Havuz' },
  concierge: { icon: Users, label: 'Concierge Hizmeti' },
  'room-service': { icon: Coffee, label: 'Oda Servisi' },
  gym: { icon: Dumbbell, label: 'Fitness Merkezi' },
  beach: { icon: MapPin, label: 'Özel Plaj' },
  'kids-club': { icon: Users, label: 'Çocuk Kulübü' },
}

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const tour = toursData[params.id as unknown as keyof typeof toursData]

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Tur Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız tur mevcut değil.</p>
          <Link href="/tr/tours" className="btn-primary">
            Turlara Geri Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{tour.title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{tour.rating}</span>
                <span className="text-gray-300">({tour.reviews}) değerlendirme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{tour.title} Hakkında</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {tour.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Tur Özellikleri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Tur Programı</h3>
                <div className="space-y-6">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary-600 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold">{item.time}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.activity}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included & Not Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Dahil Olanlar</h3>
                  <div className="space-y-2">
                    {tour.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Dahil Olmayanlar</h3>
                  <div className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-gray-700">-</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{tour.price}</div>
                  <div className="text-gray-600">Kişi Başı</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tur Tarihi
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Tur Tarihi"
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
                
                <button className="w-full btn-primary mb-3">
                  Şimdi Rezervasyon Yap
                </button>
                <button className="w-full btn-secondary">
                    Tur ile İletişime Geç
                </button>
              </div>

              {/* Tour Details */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Tur Detayları</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Süre</div>
                      <div className="text-gray-600">{tour.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Grup Büyüklüğü</div>
                      <div className="text-gray-600">{tour.groupSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-600">★</span>
                    <div>
                      <div className="font-semibold text-gray-900">Zorluk</div>
                      <div className="text-gray-600 capitalize">{tour.difficulty}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-600">★</span>
                    <div>
                      <div className="font-semibold text-gray-900">Kategori</div>
                      <div className="text-gray-600 capitalize">{tour.category}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{tour.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{tour.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{tour.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Tours */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Benzer Turlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Similar tours would be displayed here */}
            <div className="text-center text-gray-500 col-span-full">
              Benzer turlar yakında...
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}