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
    difficulty: 'kolay',
    groupSize: '2-20',
    highlights: ['Boğaz Köprüsü', 'Dolmabahçe Sarayı', 'Ortaköy Camii'],
    description: 'Lüks Boğaz turumuzla İstanbulun büyüsünü sudan deneyimleyin.',
    fullDescription: 'Boğaz Boğazı\'nda unutulmaz bir akşam için lüks turumuza katılın. Lüks turumuz, Avrupa ve Asya\'yı ayıran bu tarihi su yolunun üzerindeki İstanbulun ikonik manzaralarından nefes kesici manzaralar sunar. Bunlar arasında görkemli Boğaz Köprüsü, Dolmabahçe Sarayı ve Ortaköy Camii bulunmaktadır. Aydınlatılmış suların üzerinde akşam yemeği ve canlı eğlence eşliğinde seyirken geleneksel ve uluslararası mutfaktan lezzetli bir akşam yemeğinin tadını çıkarın.',
    features: [
      'İstanbulun ikonik manzaralarının gece manzaraları',
      'Geleneksel ve uluslararası mutfakta lezzetli akşam yemeği',
      'Canlı müzik ve eğlence',
      'Rahat oturma alanlarına sahip lüks yat',
      'Tarihi yorumlar içeren profesyonel rehber',
      'Ücretsiz içecekler ve atıştırmalıklar',
      'İstanbulun aydınlatılmış manzarası için fotoğraf fırsatları'
    ],
    itinerary: [
      {
        time: '19:00',
        activity: 'İskelede binme',
        description: 'Ekip ile tanışma ve hoş geldi içecekler'
      },
      {
        time: '19:30',
        activity: 'Akşam yemeği servisi başlar',
        description: 'Türk ve uluslararası mutfaktan çok çeşitli akşam yemeği'
      },
      {
        time: '20:30',
        activity: 'Eğlence gösterisi',
        description: 'Canlı müzik ve geleneksel dans performansları'
      },
      {
        time: '21:30',
        activity: 'Boğaz Köprüsü geçişi',
        description: 'Fotoğraf fırsatlarıyla aydınlatılmış köprü altından geçiş'
      },
      {
        time: '22:00',
        activity: 'Dolmabahçe Sarayı manzaraları',
        description: 'Osmanlı sarayı ve güzel bahçelerinin manzaraları'
      },
      {
        time: '22:30',
        activity: 'İskelede geri dönüş',
        description: 'Otele transfer ve iskeleden iniş'
      }
    ],
    included: [
      'Lüks yat turu',
      'Gurme akşam yemeği',
      'Canlı eğlence',
      'Hoş geldi içecekler',
      'Profesyonel rehber',
      'Fotoğraf fırsatları'
    ],
    notIncluded: [
      'Otel transferleri',
      'Satın alınabilir alkollü içecekler',
      'Bahşişler'
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Kabataş İskelesi, İstanbul, Türkiye'
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
    difficulty: 'orta',
    groupSize: '4-16',
    highlights: ['Gündoğumu Uçuşu', 'Peri Bacaları', 'Yeraltı Şehirleri'],
    description: 'Kapadokyanın büyülü manzaralarını üzerinde sıcak hava balonuyla gezin.',
    fullDescription: 'Kapadokyanın peri bacaları ve mağara evlerinin üzerinde eşsiz bir bakış açısından deneyimleyin. Gün doğumunda sıcak hava balonumuzla bu diğer dünya manzarasının üzerinde süzülün. Deneyimli pilotlarımız, bu büyülü manzara üzerinde barışç bir şekilde süzülürken güvenli ve unutulmaz bir yolculuk sağlar. Bu bir kez ömür boyunca yaşanacak macera, inişte geleneksel şampanya kutlaması ve inişle birlikte tamamlanır.',
    features: [
      'Gündoğumu sıcak hava balonu uçuşu',
      'Profesyonel ve deneyimli pilotlar',
      'İnişte geleneksel şampanya kutlaması',
      'Uçuş sertifikası',
      'Kapsamlı sigorta kapsamı',
      'Otel alış-verişi ve bırma hizmeti',
      'Kişiselleştirilmiş deneyim için küçük grup boyutları'
    ],
    itinerary: [
      {
        time: '04:30',
        activity: 'Otel alış-verişi',
        description: 'Otelinizden alınış ve kalkış yerine transfer'
      },
      {
        time: '05:00',
        activity: 'Hazırlık şişirme ve güvenlik bilgilendirmesi',
        description: 'Balon şişirmesini ve güvenlik bilgilendirmesini izleyin'
      },
      {
        time: '05:30',
        activity: 'Kalkış',
        description: 'Gün doğumuyla birlikte göğe nazikçe başlangıç'
      },
      {
        time: '06:00-07:30',
        activity: 'Peri bacaları üzerinde uçuş',
        description: 'Kapadokyanın ikonik manzarasının üzerinde süzülme'
      },
      {
        time: '07:30',
        activity: 'İniş ve kutlama',
        description: 'Nazikçe iniş ve şampanya kutlaması'
      },
      {
        time: '08:00',
        activity: 'Otele geri dönüş',
        description: 'Otele kahvaltı ile birlikte geri dönüş'
      }
    ],
    included: [
      'Otel alış-verişi ve bırma',
      'Sıcak hava balonu uçuşu',
      'Profesyonel pilot',
      'Şampanya kutlaması',
      'Uçuş sertifikası',
      'Sigorta',
      'Hafif kahvaltı'
    ],
    notIncluded: [
      'Ekstra içecekler',
      'Kişisel harcamalar',
      'Pilot için bahşişler'
    ],
    contact: {
      phone: '+90 532 123 4567',
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
    image: '/images/destinations/pamukkale.jpg',
    category: 'cultural',
    difficulty: 'kolay',
    groupSize: '2-15',
    highlights: ['Celsus Kütüphanesi', 'Büyük Tiyatro', 'Artemis Tapınağı'],
    description: 'Uzman rehberlerle Efesin antik harikalarını keşfedin.',
    fullDescription: 'Zaman içinde geriye gidin ve Roma İmparatorluğu\'nun ikinci büyük şehri olan Efesin muhteşem harabelerini keşfedin. Uzman rehberlerimiz, antik sokaklarda yürürken tarihi yaşatacak. İzlenilen Celsus Kütüphanesi, olağanüstü akustiğe sahip Büyük Tiyatro ve Antik Dünyanın Yedi Harikasından biri olan Artemis Tapınağı gibi etkileyici yerleri ziyaret edin. Bu kapsamlı tur, sıra beklemeden biletler ve rahat ulaşım içerir.',
    features: [
      'Uzman arkeolog rehber',
      'Tüm yerler için sıra beklemeden giriş biletleri',
      'Klimalı ulaşım',
      'Kişiselleştirilmiş deneyim için küçük grup boyutları',
      'Tüm önemli antik yerleri ziyaret',
      'Alışveriş ve keşif için serbest zaman',
      'Kapsamlı tarihi bilgiler'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Otel alış-verişi',
        description: 'İzmir\'deki otelinizden alınış'
      },
      {
        time: '09:30',
        activity: 'Efese varış',
        description: 'Antik şehre varış ve turun genel bakışı'
      },
      {
        time: '10:00',
        activity: 'Celsus Kütüphanesi',
        description: 'Ünlü antik kütüphaneyi ve detaylı açıklamalar'
      },
      {
        time: '11:00',
        activity: 'Büyük Tiyatro',
        description: 'Olağanüstü korunmuş antik tiyatroyu keşfedin'
      },
      {
        time: '12:00',
        activity: 'Öğle molası',
        description: 'Yerel bir restoranda geleneksel Türk öğle yemeği'
      },
      {
        time: '13:00',
        activity: 'Artemis Tapınağı',
        description: 'Antik Dünyanın Yedi Harikasından biri olan tapınağı ziyaret edin'
      },
      {
        time: '15:00',
        activity: 'Serbest zaman',
        description: 'Alışveriş ve kişisel keşif için zaman'
      },
      {
        time: '17:00',
        activity: 'Otele geri dönüş',
        description: 'Otele transfer'
      }
    ],
    included: [
      'Uzman rehber',
      'Tüm yerler için giriş biletleri',
      'Ulaşım',
      'Öğle yemeği',
      'Alışveriş için serbest zaman',
      'Küçük grup boyutu'
    ],
    notIncluded: [
      'Kişisel harcamalar',
      'Rehber için bahşişler',
      'Akşam yemeği'
    ],
    contact: {
      phone: '+90 532 123 4567',
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
    difficulty: 'kolay',
    groupSize: '2-25',
    highlights: ['Traverten Teraslar', 'Hierapolis', 'Kleopatra Havuzu'],
    description: 'Pamukkalenin şifalı sularında dinlenin ve antik Hierapolis\'i keşfedin.',
    fullDescription: 'Pamukkale\'nin doğal harikasını keşfedin, burada kalsiyum açısından zengin termal suları binlerce yıl içinde etkileyici beyaz traverten terasları oluşturmuştur. Turumuz, terapötik havuzlarda rahatlamayı antik Hierapolis şehrini keşfetmeyi birleştirir. Mineral açısından zengin teraslarda çıplak ayaklarla yürüyün, şifalı olduğu düşünülen ılık sularda yüzün ve inanılmaz şekilde korunmuş Kleopatra Havuzu\'nu ziyaret edin. Bu tam günlük deneyim ulaşım, öğle yemeği ve uzman rehberlik içerir.',
    features: [
      'Pamukkale\'nin termal havuzlarına erişim',
      'Antik Hierapolis harabelerini ziyaret',
      'Tarihi içgörüleri olan profesyonel rehber',
      'Kleopatra Havuzu\'nda yüzme',
      'Traverten teras keşfi',
      'Yereye ve siteden ulaşım',
      'Geleneksel öğle yemeği dahil'
    ],
    itinerary: [
      {
        time: '08:00',
        activity: 'Otel alış-verişi',
        description: 'Otelinizden alınış'
      },
      {
        time: '10:00',
        activity: 'Pamukkale\'ye varış',
        description: 'Yereye varış ve güvenlik bilgilendirmesi'
      },
      {
        time: '10:30',
        activity: 'Traverten teraslar',
        description: 'Beyaz kalsiyum teraslarında yürüyüş turu'
      },
      {
        time: '12:00',
        activity: 'Hierapolis harabeleri',
        description: 'Rehber eşliğinde antik şehri keşfi'
      },
      {
        time: '13:00',
        activity: 'Öğle yemeği',
        description: 'Yerel bir restoranda geleneksel Türk öğle yemeği'
      },
      {
        time: '14:00',
        activity: 'Yüzme zamanı',
        description: 'Termal havuzlarda serbest zaman'
      },
      {
        time: '16:00',
        activity: 'Kleopatra Havuzu',
        description: 'Antik termal havuzu ziyareti'
      },
      {
        time: '17:00',
        activity: 'Otele geri dönüş',
        description: 'Otele transfer'
      }
    ],
    included: [
      'Ulaşım',
      'Profesyonel rehber',
      'Giriş ücretleri',
      'Öğle yemeği',
      'Yüzme erişimi',
      'Küçük grup boyutu'
    ],
    notIncluded: [
      'Yüzme takımları ve havlular',
      'Kişisel harcamalar',
      'Rehber için bahşişler'
    ],
    contact: {
      phone: '+90 532 123 4567',
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
    image: '/images/destinations/bodrum.jpg',
    category: 'cruise',
    difficulty: 'kolay',
    groupSize: '2-12',
    highlights: ['Özel Gulet', 'Yüzme Koyları', 'Türk Mutfağı'],
    description: 'Geleneksel ahşap guletimizle Ege Denizi\'nin turkuaz sularında yelken açın.',
    fullDescription: 'Geleneksel tekniklerle yapılmış ahşap guletimizle nihai Türk yelken macerasını yaşayın. Ege Denizi\'nin nefes kesici kıyı şeridi boyunca seyirken, kristal berrak sularda yüzme için izole edilmiş koylarda durun ve gemideki aşçımız tarafından hazırlanan otantik Türk mutfağının tadını çıkarın. Bu her şey dahil yolculuk, rahat kabinler, dostane ekip ve su sporları, balıkçılık ve sadece güverte batan muhteşem gün batışlarını izleme fırsatları sunar.',
    features: [
      'Geleneksel ahşap gulet gemisi',
      'Tüm öğünler ve içecekler dahil',
      'İzole edilmiş koylarda yüzme durakları',
      'Su sporları ekipmanları',
      'Balıkçılık malzemeleri',
      'Rahat kabinler ve en-suite tesisler',
      'Deneyimli kaptan ve ekip',
      'Gün batışı izleme fırsatları'
    ],
    itinerary: [
      {
        time: '09:00',
        activity: 'İskelede binme ve hoş geldi',
        description: 'Bodrum limanındaki gulete binme ve hoş geldi içecekler'
      },
      {
        time: '10:00',
        activity: 'Sabah yelken açma',
        description: 'Kahvaltı ile birlikte Ege kıyı şeridi boyunca yelken açma'
      },
      {
        time: '12:00',
        activity: 'Yüzme ve öğle yemeği',
        description: 'İzole edilmiş bir koyda yüzme ve gemide öğle yemeği'
      },
      {
        time: '14:00',
        content: 'Öğleden yelken açma',
        description: 'Başka manzaralı bir konuma yelken açma'
      },
      {
        time: '16:00',
        activity: 'Akşam yüzmesi ve akşam yemeği',
        description: 'Yüzme durakı, ardından yerel malzemelerle hazırlanmış akşam yemeği'
      },
      {
        time: '18:00',
        activity: 'Gün batışı izleme',
        description: 'İçeceklerle güverte dinlenirken gün batışını izleme'
      },
      {
        time: '20:00',
        activity: 'Demirde kalma',
        description: 'Sakin bir koyda rahat kabinlerde uyuma'
      },
      {
        time: '08:00',
        activity: 'Kahvaltı ve dönüş',
        description: 'Gemide kahvaltı ve Bodrum limanına dönüş'
      }
    ],
    included: [
      'Özel kabinde konaklama',
      'Tüm öğünler ve içecekler',
      'Yüzme ve su sporları ekipmanları',
      'Balıkçılık malzemeleri',
      'Profesyonel kaptan ve ekip',
      'Havlular ve çarşaflar'
    ],
    notIncluded: [
      'Satın alınabilir alkollü içecekler',
      'Kişisel harcamalar',
      'Ekip için bahşişler'
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Bodrum Limanı, Muğla, Türkiye'
    }
  },
  6: {
    id: 6,
    title: 'Ağrı Dağı Trekking',
    location: 'Doğu Anadolu',
    rating: 4.6,
    reviews: 89,
    price: 680,
    image: '/images/destinations/fethiye.jpg',
    category: 'adventure',
    difficulty: 'zorlu',
    groupSize: '4-8',
    highlights: ['Zirve Tırmanışı', 'Buzul Gölleri', 'Kürt Kültürü'],
    description: 'Deneyimli dağ rehberleri eşliğinde Türkiye\'nin en yüksek zirvesini trekking ile kendinize sorun.',
    fullDescription: 'Ömür boyunca yaşanacak bir macera için zorlu Ağrı Dağı trekking seferimize katılın. Bu 5 günlük yolculuk, verimli vadilerden kayalık yamaçlara kadar çeşitli manzaralardan geçerek Türkiye\'nin en yüksek zirvesine (5.137m) tırmanışı içerir. Deneyimli dağ rehberlerimiz güvenliğinizi sağlarken yerel Kürt topluluklarına ve karşılaşacağınız buzul göllerinin jeolojik önemini paylaşırlar. Bu zorlu trek, nefes kesici manzaralar ve muazzam bir başarı hissi ile ödüllendirir.',
    features: [
      'Deneyimli dağ rehberleri',
      'Güvenlik için küçük grup boyutları',
      'Kamp ekipmanları ve öğünler',
      'Kürt topluluklarına kültürel içgörüler',
      'Buzul gölü keşfi',
      'Türkiye\'nin en yüksek zirvesine tırmanış denemesi',
      'Kapsamlı güvenlik ekipmanları',
      'Acil durumlar için destek aracı'
    ],
    itinerary: [
      {
        time: '1. Gün: 08:00',
        activity: 'Kampa varış',
        description: 'Kampa varış, rehberlerle tanışma, ekipman kontrolü'
      },
      {
        time: '1. Gün: 10:00',
        activity: 'Tırmanış başlangıcı',
        description: 'Vadiler ve ormanlardan tırmanış başlangıcı'
      },
      {
        time: '1. Gün: 17:00',
        activity: 'Kurma',
        description: 'İlk dağ kampı kurma'
      },
      {
        time: '2. Gün: 07:00',
        activity: 'Sabah tırmanışı',
        description: 'Kayalık arazide devam eden tırmanış'
      },
      {
        time: '2. Gün: 14:00',
        activity: 'Buzul gölleri',
        description: 'Buzul göllerini keşfi ve dinlenme'
      },
      {
        time: '2. Gün: 17:00',
        activity: 'Dağ kampı',
        description: 'İkinci dağ kampı kurma'
      },
      {
        time: '3. Gün: 06:00',
        activity: 'Son tırmanış',
        description: 'Zirve alanına doğru son itiş'
      },
      {
        time: '3. Gün: 14:00',
        activity: 'Zirve denemesi',
        description: 'Zirve alanına ulaşma ve başarıyı kutlama'
      },
      {
        time: '3. Gün: 17:00',
        activity: 'İniş',
        description: 'Kampa doğru iniş başlangıcı'
      },
      {
        time: '4. Gün: 08:00',
        activity: 'Kültürel keşif',
        description: 'Yerel Kürt köylerini ve kültürel yerlerini ziyaret etme'
      },
      {
        time: '4. Gün: 16:00',
        activity: 'Dinlenme günü',
        description: 'Son tırmanış için dinlenme ve hazırlık'
      },
      {
        time: '5. Gün: 07:00',
        activity: 'Son zirve denemesi',
        description: 'Zirveye ulaşmak için son fırsat'
      },
      {
        time: '5. Gün: 15:00',
        activity: 'Kutlama',
        description: 'Kampa dönüş ve kutlama yemeği'
      },
      {
        time: '5. Gün: 18:00',
        activity: 'Ayrılış',
        description: 'Konaklamaya transfer'
      }
    ],
    included: [
      'Deneyimli dağ rehberleri',
      'Tüm kamp ekipmanları',
      'Trek sırasında tüm öğünler',
      'Destek aracı',
      'Kültürel deneyimler',
      'Güvenlik ekipmanları',
      'Trek öncesi ve sonrası konaklama'
    ],
    notIncluded: [
      'Kişisel trekking ekipmanları',
      'Seyahat sigortası',
      'Rehberler için bahşişler',
      'Kişisel harcamalar'
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Doğubeyazıt, Doğu Anadolu, Türkiye'
    }
  }
}

const amenities = {
  wifi: { icon: Wifi, label: 'Ücretsiz WiFi' },
  parking: { icon: Car, label: 'Ücretsiz Otopark' },
  spa: { icon: Dumbbell, label: 'Spa ve Wellness' },
  restaurant: { icon: Coffee, label: 'Restoran' },
  bar: { icon: Coffee, label: 'Bar ve Lounge' },
  pool: { icon: Dumbbell, label: 'Yüzme Havuzu' },
  concierge: { icon: Users, label: 'Konserj Hizmeti' },
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
          <p className="text-gray-600 mb-8">Aradığınız tur bulunamıyor.</p>
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
                  <h3 className="text-xl font-bold mb-4">Neler Dahil</h3>
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
                  <h3 className="text-xl font-bold mb-4">Neler Dahil Değil</h3>
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
                  <div className="text-gray-600">kişi başına</div>
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
                      Seyahatçi Sayısı
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Seyahatçi Sayısı">
                      <option>1 Seyahatçi</option>
                      <option>2 Seyahatçi</option>
                      <option>3 Seyahatçi</option>
                      <option>4+ Seyahatçi</option>
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
                      <div className="font-semibold text-gray-900">Grup Boyutu</div>
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