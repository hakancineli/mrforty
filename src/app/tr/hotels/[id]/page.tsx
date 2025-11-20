import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Hotel data - in a real app, this would come from an API or database
const hotelsData = {
  1: {
    id: 1,
    name: 'The Ritz-Carlton Istanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.8,
    reviews: 324,
    price: 450,
    image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
    gallery: [
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'İstanbul kalbinde zamansız lüks deneyim yaşayın.',
    fullDescription: 'İstanbul\'in canlı kalbinde yer alan The Ritz-Carlton Istanbul, rafine edilmiş lüks ve kusursuz hizmetin bir sığınağıdır. Otelimiz, zamansız zarafeti çağdaşık konforla birleştirerek, dünyanın en büyüleyici şehirlerinden birinde unutulmaz bir deneyim sunar. Panoramik Boğaz manzaralı çatı terasımızdan dünya sınıfı spa ve yeme mekanlarına kadar, konaklamanızın her yönü beklentileri aşmak için tasarlanmıştır.',
    features: [
      'Boğaz manzaralı lüks odalar ve suitler',
      'Ödüllü spa ve wellness merkezi',
      'Çoklu fine-dining restoranları',
      'Panoramik şehir manzaralı çatı terası',
      'Son teknoloji fitness merkezi',
      'Kapalı yüzme havuzu',
      '24 saat oda servisi',
      'Özel concierge hizmeti'
    ],
    roomTypes: [
      {
        name: 'Deluxe Oda',
        size: '45 m²',
        maxGuests: 2,
        price: 450,
        features: ['King yatak', 'Şehir manzarası', 'Mermer banyo', 'Çalışma masası']
      },
      {
        name: 'Club Oda',
        size: '55 m²',
        maxGuests: 3,
        price: 580,
        features: ['King yatak', 'Boğaz manzarası', 'Club lounge erişimi', 'Mermer banyo']
      },
      {
        name: 'Executive Süit',
        size: '85 m²',
        maxGuests: 4,
        price: 850,
        features: ['Ayrı oturma alanı', 'Boğaz manzarası', 'Club lounge erişimi', 'Misafir banyosu']
      },
      {
        name: 'Presidential Süit',
        size: '180 m²',
        maxGuests: 6,
        price: 2500,
        features: ['İki yatak odası', 'Tam mutfak', 'Boğaz manzarası', 'Özel teras', 'Uşak hizmeti']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'İraselviler Cad. No:58, 34367 Beşiktaş, İstanbul, Türkiye'
    }
  },
  2: {
    id: 2,
    name: 'Swissotel The Bosphorus',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 256,
    price: 380,
    image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
    gallery: [
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
    description: 'Boğaz\'a bakan elegant otel.',
    fullDescription: 'Swissotel The Bosphorus, İstanbul, Boğaz Boğazı\'nın nefis manzaralarıyla elegant konaklama sunmaktadır. Otelimiz, modern odalar, istisnai yemek seçenekleri ve konaklamanızı konforlu ve unutulmaz kılan bir dizi olanak sunmaktadır.',
    features: [
      'Boğaz Boğazı manzaraları',
      'Premium olanaklı modern odalar',
      'Çoklu restoran ve bar',
      'Kapalı yüzme havuzu',
      'Full-service spa',
      'Fitness merkezi'
    ],
    roomTypes: [
      {
        name: 'Standart Oda',
        size: '35 m²',
        maxGuests: 2,
        price: 380,
        features: ['Queen yatak', 'Şehir manzarası', 'Mermer banyo']
      },
      {
        name: 'Deluxe Oda',
        size: '45 m²',
        maxGuests: 2,
        price: 450,
        features: ['King yatak', 'Boğaz manzarası', 'Mermer banyo', 'Çalışma masası']
      },
      {
        name: 'Junior Süit',
        size: '65 m²',
        maxGuests: 3,
        price: 580,
        features: ['King yatak', 'Boğaz manzarası', 'Ayrı oturma alanı', 'Mermer banyo']
      },
      {
        name: 'Executive Süit',
        size: '85 m²',
        maxGuests: 4,
        price: 850,
        features: ['King yatak', 'Boğaz manzarası', 'Ayrı oturma alanı', 'Misafir banyosu']
      }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Bayıldım Cad. No:2, 34357 Beşiktaş, İstanbul, Türkiye'
    }
  },
  3: {
    id: 3,
    name: 'CVK Park Bosphorus Hotel Istanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 289,
    price: 420,
    image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
    gallery: [
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-2.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-3.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-4.jpeg',
      '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
    description: 'Boğaz manzaralı modern ve şık otel.',
    fullDescription: 'CVK Park Bosphorus Hotel İstanbul sizi Taksim ve canlı İstiklal aksının adımlarına yerleştirir. Çoğu oda ve süit, panoramik Boğaz sahneleri sunarkent, spa, hamam ve imza restoranlar şehir merkezinde resort hissi yaratır. İş için mi, hafta sonu kaçamağı mı, kültür, alışveriş ve gece hayatına kolay erişimle rahatlanmış konforlar ve seçkin yemekler bulacaksınız.',
    features: [
      'Boğaz manzaralı modern odalar ve suitler',
      'Full-service spa ve wellness merkezi',
      'Çoklu fine-dining restoranları'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '35 m²', maxGuests: 2, price: 420, features: ['Queen yatak', 'Şehir manzarası', 'Mermer banyo'] },
      { name: 'Deluxe Oda', size: '45 m²', maxGuests: 2, price: 520, features: ['King yatak', 'Boğaz manzarası', 'Mermer banyo', 'Çalışma masası'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Gümüşsuyu Mah. Balmumcu Sk. No:1, 34349 Beşiktaş, İstanbul, Türkiye' }
  },
  4: {
    id: 4,
    name: 'Mövenpick Hotel Istanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.6,
    reviews: 198,
    price: 320,
    image: '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
    gallery: [
      '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-2.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-3.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-4.jpg',
      '/hotels/Movenpick Hotel Istanbul/movenpick-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'İsviçre standartlarında çağdaş otel.',
    fullDescription: 'Mövenpick Hotel İstanbul, İsviçre hassasiyetini İstanbul\'un enerjik ritmine getirir. Parlak, düşüncü tasarlanmış odalar, cömert bir kahvaltı, kaliteli fitness ve wellness alanı ve sakin dinlenme mekanları, iş merkezlerine ve alışveriş bölgelerine hızlı bağlantılarla güvenilir konfor, dikkatli hizmet ve zahmetsiz mobilite arayan gezginler için akıllı bir tabandır.',
    features: [
      'Şehir manzaralı çağdaş odalar',
      'İsviçre misafirperverlik standartları',
      'Modern fitness merkezi',
      'Kapalı yüzme havuzu'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '28 m²', maxGuests: 2, price: 120, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '36 m²', maxGuests: 3, price: 160, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Piyalepaşa Blvd. No:1, 34445 Beyoğlu, İstanbul, Türkiye' }
  },
  5: {
    id: 5,
    name: 'Grand Hyatt Istanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 245,
    price: 350,
    image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
    gallery: [
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-2.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-3.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-4.jpg',
      '/hotels/Grand Hyatt Istanbul/grand-hyatt-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'İstanbul\'un iş merkezinde lüks otel.',
    fullDescription: 'Grand Hyatt İstanbul, iş ve eğlencenin kesişim noktasında, Taksim ve önemli konferans mekanlarına adımlar olarak yer almaktadır. Geniş odalar, manzaralı açık alanlar ve sakin bir spa, şehirdeki bir günün ardından denge sağlar. Refined global mutfaktan cilalı toplantı tesislerine kadar, her detay kusursuz bir üst düzey konaklama için mühendislik edilmiştir.',
    features: [
      'Şehir manzaralı lüks odalar',
      'Dünya sınıfı spa ve wellness',
      'Çoklu yeme mekanları'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '32 m²', maxGuests: 2, price: 150, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 3, price: 190, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Taşıkla Cad. No:1, 34433 Taksim, İstanbul, Türkiye' }
  },
  6: {
    id: 6,
    name: 'Conrad Istanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.6,
    reviews: 189,
    price: 310,
    image: '/hotels/Conrad Istanbul/conrad-1.jpg',
    gallery: [
      '/hotels/Conrad Istanbul/conrad-1.jpg',
      '/hotels/Conrad Istanbul/conrad-2.jpg',
      '/hotels/Conrad Istanbul/conrad-3.jpg',
      '/hotels/Conrad Istanbul/conrad-4.jpg',
      '/hotels/Conrad Istanbul/conrad-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Boğaz manzaralı modern lüks otel.',
    fullDescription: 'Conrad İstanbul, çağdaş tasarımı Boğaz Boğazı ve tarihi yarımada uzanan manzaralarla birleştirir. Zarif odalar, ödüllü bir spa ve hamam ile seçkin restoranlar, kısa şehir tatillerini ve daha uzun iş gezilerini yükseltir. İncelikli hizmet ve düşüncü dokunuşlar boyunca, İstanbul\'un benzersiz ruhunu yansıtan cilalı bir lüks deneyimi sunar.',
    features: [
      'Boğaz manzaralı modern odalar',
      'Lüks spa ve wellness',
      'Çoklu yeme seçenekleri'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 140, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '40 m²', maxGuests: 3, price: 180, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Çırağan Cad. No:1, 34349 Beşiktaş, İstanbul, Türkiye' }
  },
  7: {
    id: 7,
    name: 'İstanbul Marriott Hotel',
    location: 'İstanbul, Türkiye',
    rating: 4.5,
    reviews: 167,
    price: 300,
    image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
    gallery: [
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-2.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-3.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-4.jpg',
      '/hotels/Istanbul Marriott Hotel/istanbul-marriott-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Marriott standartlarında konforlu otel.',
    fullDescription: 'İstanbul Marriott Hotel, markanın güvenilir konforunu merkezi bir konumda sunmaktadır. Akıllı, iyi donanımlı odalar, dostcanlı hizmet ve kapalı havuz ve fitness merkezi gibi tesisler, hem iş gezginleri hem de aileler için ideal bir seçimdir. Verimli ulaşım bağlantıları ve yakındaki yeme mekanları ile şehri keşfetmek kolaydır.',
    features: [
      'Modern olanaklı odalar',
      'Marriott kalite hizmeti',
      'Kapalı yüzme havuzu'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '28 m²', maxGuests: 2, price: 110, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '36 m²', maxGuests: 3, price: 150, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Abide-i Hürriyet Cad. No:175, 34381 Şişli, İstanbul, Türkiye' }
  },
  8: {
    id: 8,
    name: 'W Istanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 203,
    price: 320,
    image: '/hotels/W Istanbul/w-istanbul-1.jpg',
    gallery: [
      '/hotels/W Istanbul/w-istanbul-1.jpg',
      '/hotels/W Istanbul/w-istanbul-2.jpg',
      '/hotels/W Istanbul/w-istanbul-3.jpg',
      '/hotels/W Istanbul/w-istanbul-4.jpg',
      '/hotels/W Istanbul/w-istanbul-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'Çağdaş tasarımlı şık lüks otel.',
    fullDescription: 'W İstanbul, mahallenin yaratıcı nabzını cesaretli tasarım, dikkat çekici aydınlatma ve gündüz ve gece canlanan sosyal mekanlarla yansıtır. Odalar modern yaşam için stilize edilmiştir, imza yemek ve butik spa şehir içinde şık bir kentsel kaçamak tamamlar. Dışarı çıktığınızda, dakikalar içinde kafeler, galeriler ve Boğaz kıyısı sizi bekler.',
    features: [
      'Çağdaş tasarımlı şık odalar',
      'Lüks spa ve wellness',
      'Çatı havuzu'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '28 m²', maxGuests: 2, price: 120, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '36 m²', maxGuests: 3, price: 160, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Süleyman Seba Cad. No:22, 34357 Beşiktaş, İstanbul, Türkiye' }
  },
  9: {
    id: 9,
    name: 'Four Seasons Istanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.9,
    reviews: 267,
    price: 400,
    image: '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
    gallery: [
      '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-2.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-3.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-4.jpg',
      '/hotels/Four Seasons Istanbul/four-seasons-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Tarihi Sultanahmet\'te son lüks.',
    fullDescription: 'Sultanahmet\'teki Four Seasons Hotel İstanbul, şehrin zamansız cazibesini yakalar—taşlı avlular, zarif iç mekanlar ve çatıdan Hagia Sophia ve Mavi Cami\'nin kartpostal manzaraları. Süitler mahallenin mirasını zarif detaylarla yansıtırken, kişiselleştirilmiş hizmet ve destinasyon yemeği unutulmaz bir konaklama tamamlar.',
    features: [
      'Tarihi manzaralı lüks odalar',
      'Dünya sınıfı spa ve wellness',
      'Fine-dining restoranları'
    ],
    roomTypes: [
      { name: 'Deluxe Oda', size: '40 m²', maxGuests: 2, price: 180, features: ['King yatak'] },
      { name: 'Süit', size: '65 m²', maxGuests: 3, price: 260, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Tevkifhane Sok. No:1, 34400 Sultanahmet, İstanbul, Türkiye' }
  },
  10: {
    id: 10,
    name: 'Çırağan Palace Kempinski',
    location: 'İstanbul, Türkiye',
    rating: 4.9,
    reviews: 312,
    price: 480,
    image: '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
    gallery: [
      '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-2.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-3.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-4.jpg',
      '/hotels/Ciragan Palace Kempinski/ciragan-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Lüks otele dönüştürülmüş Osmanlı sarayı.',
    fullDescription: 'Bir zaman Osmanlı imparatorluk konutu olan Çırağan Palace Kempinski, Boğaz\'da saraysal görkenti modern lüksle birleştirir. Mermer sütunlar, bakımlı bahçeler ve sahil kenarında sonsuzluk havuzu ikonik bir sahne yaratırken, rafine odalar ve suitler huzurlu bir sığınak sunar. İmza restoranları Türk ve küresel lezzetleri kutlarken, dikkatli hizmet her anın olağanüstü hissettirir.',
    features: [
      'Boğaz manzaralı saray odaları',
      'Dünya sınıfı spa ve wellness',
      'Çoklu fine-dining restoranları'
    ],
    roomTypes: [
      { name: 'Deluxe Oda', size: '45 m²', maxGuests: 2, price: 220, features: ['King yatak'] },
      { name: 'Süit', size: '70 m²', maxGuests: 3, price: 320, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Çırağan Cad. No:32, 34349 Beşiktaş, İstanbul, Türkiye' }
  },
  21: {
    id: 21,
    name: 'Titanic Mardan Palace',
    location: 'Antalya, Türkiye',
    rating: 4.8,
    reviews: 523,
    price: 650,
    image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
    gallery: [
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'Akdeniz\'de saray tarzı lüks tatil köyü',
    fullDescription: 'Özel plajı ve dünya standartlarında olanaklarıyla Akdeniz kıyısında benzersiz lüks sunan görkemli saray tarzı tatil köyü.',
    features: ['Özel plaj', 'Çok sayıda havuz', 'Full servis spa', 'Gurme restoranlar', 'Saray mimarisi'],
    roomTypes: [
      { name: 'Deluxe Oda', size: '50 sqm', maxGuests: 2, price: 650, features: ['King yatak', 'Deniz manzarası'] },
      { name: 'Saray Süit', size: '85 sqm', maxGuests: 4, price: 950, features: ['Oturma alanı', 'Balkon'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Kemer, Antalya, Türkiye' }
  },
  22: {
    id: 22,
    name: 'Regnum Carya Golf & Spa Resort',
    location: 'Antalya, Türkiye',
    rating: 4.7,
    reviews: 412,
    price: 580,
    image: '/hotels/Antalya/Regnum Carya/Regnum-Carya-1.jpeg',
    gallery: [
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-1.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-2.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-3.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-4.jpeg',
      '/hotels/Antalya/Regnum Carya/Regnum-Carya-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Akdeniz\'de lüks golf tatil köyü',
    fullDescription: 'Regnum Carya şampiyonluk golf sahaları ve premium plaj olanakları ile dünya standartlarında spa hizmetleri ve Akdeniz lüksü sunar.',
    features: ['Şampiyonluk golf', 'Lüks odalar', 'Spa & wellness', 'Özel plaj', 'Golf akademisi'],
    roomTypes: [
      { name: 'Deluxe Oda', size: '45 sqm', maxGuests: 2, price: 580, features: ['King yatak', 'Bahçe manzarası'] },
      { name: 'Golf Villa', size: '120 sqm', maxGuests: 4, price: 1200, features: ['Golf manzarası', 'Özel havuz'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Türkiye' }
  },
  11: {
    id: 11,
    name: 'Zorlu Grand Hotel Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.7,
    reviews: 189,
    price: 420,
    image: '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-1.jpg',
    gallery: [
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-1.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-2.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-3.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-4.jpg',
      '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Trabzon kalbinde lüks otel.',
    fullDescription: 'Zorlu Grand Hotel Trabzon, modern konforlarla kusursuz hizmet sunan lüks konaklamalar sunar.',
    features: [
      'Şehir manzaralı odalar',
      'Full-service spa ve wellness merkezi',
      'Kapalı yüzme havuzu',
      'Fitness merkezi'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '35 m²', maxGuests: 2, price: 120, features: ['Queen yatak', 'Şehir manzarası'] },
      { name: 'Deluxe Oda', size: '45 m²', maxGuests: 3, price: 160, features: ['King yatak', 'Şehir manzarası'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Maraş Cd. No:1, 61000 Trabzon, Türkiye'
    }
  },
  12: {
    id: 12,
    name: 'Novotel Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.5,
    reviews: 145,
    price: 350,
    image: '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-1.jpeg',
    gallery: [
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-1.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-2.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-3.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-4.jpeg',
      '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Modern uluslararası standart otel.',
    fullDescription: 'Novotel Trabzon, iş ve eğlence gezginleri için konforlu konaklamalar sunar.',
    features: ['Deniz manzaralı odalar', 'Fitness merkezi', 'Kapalı yüzme havuzu', 'İş tesisleri'],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 110, features: ['Queen yatak', 'Şehir manzarası'] },
      { name: 'Deluxe Oda', size: '40 m²', maxGuests: 3, price: 150, features: ['King yatak', 'Deniz manzarası'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Cumhuriyet Cd. No:95, 61000 Trabzon, Türkiye'
    }
  },
  13: {
    id: 13,
    name: 'Hilton Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.6,
    reviews: 167,
    price: 480,
    image: '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon.JPEG',
    gallery: [
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon.JPEG',
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon2.jpeg',
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon3.jpeg',
      '/hotels/Trabzon/Hilton Trabzon/aHilton-Trabzon4.jpeg',
      '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Karadeniz manzaralı uluslararası lüks.',
    fullDescription: 'Hilton Trabzon, dünya sınıfı hizmeti modern tesislerle birleştirir.',
    features: ['Deniz manzaralı odalar', 'Spa & wellness', 'Kapalı havuz', 'Fine-dining'],
    roomTypes: [
      { name: 'Standart Oda', size: '32 m²', maxGuests: 2, price: 140, features: ['Queen yatak', 'Deniz manzarası'] },
      { name: 'Executive Oda', size: '48 m²', maxGuests: 3, price: 190, features: ['King yatak', 'Deniz manzarası'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Trabzon, Türkiye'
    }
  },
  14: {
    id: 14,
    name: 'Grand Tarabya Hotel',
    location: 'Trabzon, Türkiye',
    rating: 4.4,
    reviews: 123,
    price: 320,
    image: '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-1.jpeg',
    gallery: [
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-1.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-2.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-3.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-4.jpeg',
      '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Geleneksel misafirperverlikle konforlu otel.',
    fullDescription: 'Grand Tarabya Hotel, sıcak bir ortamda geleneksel Türk misafirperverliği ile konforlu konaklama sunar.',
    features: [
      'Konforlu odalar',
      'Geleneksel misafirperverlik',
      'Fitness merkezi',
      'Yeme seçenekleri'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 110, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '40 m²', maxGuests: 3, price: 150, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Uzun Sok. No:45, Trabzon, Türkiye'
    }
  },
  15: {
    id: 15,
    name: 'Marriott Hotel Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.6,
    reviews: 178,
    price: 450,
    image: '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon1-.jpeg',
    gallery: [
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon1-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon2-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon3-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon4-.jpeg',
      '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon5-.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Karadeniz cazibesiyle Marriott kalitesi.',
    fullDescription: 'Marriott Hotel Trabzon, uluslararası Marriott standartlarını Karadeniz\'in cazibesiyle birleştirir.',
    features: [
      'Deniz manzaralı odalar',
      'Spa & wellness',
      'Kapalı havuz',
      'İş merkezi'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '34 m²', maxGuests: 2, price: 140, features: ['Queen yatak'] },
      { name: 'Executive Oda', size: '50 m²', maxGuests: 3, price: 190, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Gülbahar Cad. No:123, Trabzon, Türkiye'
    }
  },
  16: {
    id: 16,
    name: 'Rixos Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.7,
    reviews: 195,
    price: 520,
    image: '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-1.jpg',
    gallery: [
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-1.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-2.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-3.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-4.jpg',
      '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
    description: 'Özel plajlı lüks resort.',
    fullDescription: 'Rixos Trabzon, özel plajı ve dünya sınıfı tesisleriyle lüks resort deneyimi sunar.',
    features: [
      'Özel plaj',
      'Çoklu havuz',
      'Spa & wellness'
    ],
    roomTypes: [
      { name: 'Deluxe Oda', size: '45 m²', maxGuests: 2, price: 180, features: ['King yatak'] },
      { name: 'Süit', size: '65 m²', maxGuests: 3, price: 240, features: ['King yatak', 'Deniz manzarası'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Yalıncak Cad. No:99, Trabzon, Türkiye'
    }
  },
  17: {
    id: 17,
    name: 'Wyndham Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.3,
    reviews: 134,
    price: 280,
    image: '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-1.jpg',
    gallery: [
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-1.jpg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-2.jpeg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-3.jpg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-4.jpg',
      '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Modern olanaklarla konforlu konaklama.',
    fullDescription: 'Wyndham Trabzon, gezginler için güvenilir hizmet ve kolaylık sunar.',
    features: [
      'Konforlu odalar',
      'Modern tesisler',
      'Fitness merkezi'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '28 m²', maxGuests: 2, price: 95, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '36 m²', maxGuests: 3, price: 130, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Trabzon, Türkiye'
    }
  },
  18: {
    id: 18,
    name: 'Hampton by Hilton Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.4,
    reviews: 145,
    price: 300,
    image: '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-1.jpg',
    gallery: [
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-1.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-2.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-3.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-4.jpg',
      '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Hampton kalitesi ile modern konfor.',
    fullDescription: 'Hampton by Hilton Trabzon, gezginler için modern konfor ve güvenilir hizmet sunar.',
    features: [
      'Modern odalar',
      'Fitness merkezi',
      'Ücretsiz kahvaltı'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '28 m²', maxGuests: 2, price: 100, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '36 m²', maxGuests: 3, price: 135, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Turgut Özal Cad. No:67, Trabzon, Türkiye'
    }
  },
  19: {
    id: 19,
    name: 'Trabzon Park Hotel',
    location: 'Trabzon, Türkiye',
    rating: 4.2,
    reviews: 112,
    price: 250,
    image: '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-1.jpg',
    gallery: [
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-1.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-2.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-3.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-4.jpg',
      '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Bahçe manzaralı konforlu otel.',
    fullDescription: 'Trabzon Park Hotel, şehir merkezinde sakin bahçe manzaralarıyla konforlu konaklama sunar.',
    features: [
      'Bahçe manzaralı odalar',
      'Yerel mutfak restoranı'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '26 m²', maxGuests: 2, price: 90, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '38 m²', maxGuests: 3, price: 125, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Kalkınma Cad. No:34, Trabzon, Türkiye'
    }
  },
  20: {
    id: 20,
    name: 'Yazıcı Hotel',
    location: 'Trabzon, Türkiye',
    rating: 4.3,
    reviews: 128,
    price: 380,
    image: '/hotels/Trabzon/Yazici Hotel/yazici-hotel-1.jpeg',
    gallery: [
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-1.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-2.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-3.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-4.jpeg',
      '/hotels/Trabzon/Yazici Hotel/yazici-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Geleneksel misafirperverlikle modern konfor.',
    fullDescription: 'Yazıcı Hotel, geleneksel Türk misafirperverliğini modern konforla birleştirir.',
    features: [
      'Spa & wellness',
      'Yerel mutfak restoranı'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 120, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 3, price: 155, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Gülsüm Sokak No:12, Trabzon, Türkiye'
    }
  },
  23: {
    id: 23,
    name: 'Maxx Royal Belek',
    location: 'Antalya, Türkiye',
    rating: 4.8,
    reviews: 489,
    price: 720,
    image: '/hotels/Antalya/Maxx Royal Belek/maxx-royal-1.jpeg',
    gallery: [
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-1.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-2.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-3.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-4.jpeg',
      '/hotels/Antalya/Maxx Royal Belek/maxx-royal-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Golf ve plaj erişimi olan ultra-lüks resort.',
    fullDescription: 'Maxx Royal Belek, golf ve plaj erişimiyle ultra-lüks konaklamalar sunar.',
    features: [
      'Golf sahaları',
      'Ultra-lüks suitler',
      'Çoklu havuz'
    ],
    roomTypes: [
      { name: 'Deluxe Oda', size: '45 m²', maxGuests: 2, price: 260, features: ['King yatak', 'Bahçe manzarası'] },
      { name: 'Süit', size: '70 m²', maxGuests: 3, price: 340, features: ['King yatak', 'Deniz manzarası'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Belek, 07500 Antalya, Türkiye'
    }
  },
  24: {
    id: 24,
    name: 'Susesi Luxury Resort',
    location: 'Antalya, Türkiye',
    rating: 4.6,
    reviews: 367,
    price: 520,
    image: '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-1.jpeg',
    gallery: [
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-1.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-2.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-3.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-4.jpeg',
      '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Lüks sahil resort.',
    fullDescription: 'Susesi Luxury Resort, Akdeniz manzaraları ve dünya sınıfı olanaklarla sahil lüksü sunar.',
    features: [
      'Deniz manzaralı lüks odalar',
      'Özel plaj erişimi',
      'Full-service spa ve wellness'
    ],
    roomTypes: [
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 2, price: 180, features: ['King yatak', 'Deniz manzarası'] },
      { name: 'Süit', size: '65 m²', maxGuests: 3, price: 260, features: ['King yatak', 'Balkon'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Belek, 07500 Antalya, Türkiye' }
  },
  25: {
    id: 25,
    name: 'Calista Luxury Resort',
    location: 'Antalya, Türkiye',
    rating: 4.7,
    reviews: 398,
    price: 600,
    image: '/hotels/Antalya/Calista Luxury Resort/calista-luxury-1.jpeg',
    gallery: [
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-1.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-2.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-3.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-4.jpeg',
      '/hotels/Antalya/Calista Luxury Resort/calista-luxury-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Premium sahil resort.',
    fullDescription: 'Calista Luxury Resort, Akdeniz manzaraları ve üst düzey tesisleri ile premium sahil konaklamaları sunar.',
    features: [
      'Deniz manzaralı lüks odalar',
      'Özel plaj erişimi',
      'Her şey dahil yemek'
    ],
    roomTypes: [
      { name: 'Superior Oda', size: '40 m²', maxGuests: 2, price: 170, features: ['Queen yatak'] },
      { name: 'Aile Süiti', size: '60 m²', maxGuests: 4, price: 240, features: ['İki oda'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, 07500 Antalya, Türkiye' }
  },
  26: {
    id: 26,
    name: 'Kaya Palazzo',
    location: 'Antalya, Türkiye',
    rating: 4.6,
    reviews: 345,
    price: 550,
    image: '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-1.jpeg',
    gallery: [
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-1.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-2.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-3.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-4.jpeg',
      '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Elegant Akdeniz resort.',
    fullDescription: 'Kaya Palazzo, premium tesisler ve plaj erişimi ile elegant Akdeniz konaklamaları Sunar.',
    features: [
      'Elegant odalar',
      'Özel plaj',
      'Spa & wellness'
    ],
    roomTypes: [
      { name: 'Deluxe Oda', size: '38 m²', maxGuests: 3, price: 165, features: ['King yatak'] },
      { name: 'Junior Süit', size: '55 m²', maxGuests: 3, price: 230, features: ['King yatak'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, 07500 Antalya, Türkiye' }
  },
  27: {
    id: 27,
    name: 'Rixos Premium Belek',
    location: 'Antalya, Türkiye',
    rating: 4.7,
    reviews: 423,
    price: 680,
    image: '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-1.jpeg',
    gallery: [
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-1.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-2.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-3.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-4.jpeg',
      '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Premium her şey dahil resort.',
    fullDescription: 'Rixos Premium Belek, Akdeniz manzaraları ve dünya sınıfı olanaklarla premium her şey dahil lüks sunar.',
    features: [
      'Her şey dahil yemek',
      'Özel plaj',
      'Çoklu havuz'
    ],
    roomTypes: [
      { name: 'Premium Oda', size: '44 m²', maxGuests: 2, price: 190, features: ['King yatak'] },
      { name: 'Süit', size: '68 m²', maxGuests: 3, price: 260, features: ['Deniz manzarası'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, 07500 Antalya, Türkiye' }
  },
  28: {
    id: 28,
    name: 'Cornelia Diamond Golf Resort',
    location: 'Antalya, Türkiye',
    rating: 4.6,
    reviews: 389,
    price: 620,
    image: '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-1.jpeg',
    gallery: [
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-1.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-2.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-3.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-4.jpeg',
      '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Lüks golf ve plaj resort.',
    fullDescription: 'Cornelia Diamond, dünya sınıfı golf tesisleriyle lüks golf ve plaj resort konaklamaları sunar.',
    features: [
      'Şampiyon golf sahası',
      'Deniz manzaralı odalar',
      'Spa & wellness'
    ],
    roomTypes: [
      { name: 'Deluxe Oda', size: '40 m²', maxGuests: 2, price: 175, features: ['King yatak'] },
      { name: 'Golf Süiti', size: '60 m²', maxGuests: 3, price: 245, features: ['Golf manzarası'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, 07500 Antalya, Türkiye' }
  },
  29: {
    id: 29,
    name: 'Land of Legends Kingdom',
    location: 'Antalya, Türkiye',
    rating: 4.8,
    reviews: 467,
    price: 750,
    image: '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-1.jpeg',
    gallery: [
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-1.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-2.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-3.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-4.jpeg',
      '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
    description: 'Tema park resort ile lüks konaklama.',
    fullDescription: 'Land of Legends Kingdom, tema park erişimi ve geniş eğlence ile lüks konaklama Sunar.',
    features: [
      'Tema park erişimi',
      'Su parkı ve kaydıraklar',
      'Eğlence gösterileri'
    ],
    roomTypes: [
      { name: 'Kingdom Oda', size: '40 m²', maxGuests: 2, price: 185, features: ['Temalı dekor'] },
      { name: 'Aile Süiti', size: '60 m²', maxGuests: 4, price: 255, features: ['Temalı iki oda'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Kumköy, 07400 Side, Antalya, Türkiye' }
  },
  30: {
    id: 30,
    name: 'Sirene Belek',
    location: 'Antalya, Türkiye',
    rating: 4.5,
    reviews: 312,
    price: 480,
    image: '/hotels/Antalya/Sirene Belek/sirene-belek-1.jpeg',
    gallery: [
      '/hotels/Antalya/Sirene Belek/sirene-belek-1.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-2.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-3.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-4.jpeg',
      '/hotels/Antalya/Sirene Belek/sirene-belek-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Golf ve plaj resort.',
    fullDescription: 'Sirene Belek, Akdeniz manzaraları ve mükemmel tesisleriyle konforlu golf ve plaj resort konaklamaları Sunar.',
    features: [
      'Golf sahası erişimi',
      'Deniz manzaralı konfor odaları',
      'Çoklu havuz'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '36 m²', maxGuests: 2, price: 135, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '46 m²', maxGuests: 3, price: 170, features: ['King yatak'] }
    ],
    contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, 07500 Antalya, Türkiye' }
  },
  31: {
    id: 31,
    name: 'Hilton Bursa Convention Center',
    location: 'Bursa, Türkiye',
    rating: 4.6,
    reviews: 210,
    price: 380,
    image: '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-1.jpeg',
    gallery: [
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-1.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-2.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-3.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-4.jpeg',
      '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Kongre tesisleriyle modern lüks.',
    fullDescription: 'Hilton Bursa, modern konfor ve etkinlik tesisleri Sunar.',
    features: [
      'Kongre merkezi',
      'Spa & wellness',
      'Fitness merkezi'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '35 m²', maxGuests: 2, price: 130, features: ['Queen yatak'] },
      { name: 'Executive Oda', size: '50 m²', maxGuests: 3, price: 180, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Bursa, Türkiye'
    }
  },
  32: {
    id: 32,
    name: 'Karinna Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.3,
    reviews: 145,
    price: 250,
    image: '/hotels/Bursa/Karinna Hotel/karinna-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-1.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-2.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-3.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-4.jpeg',
      '/hotels/Bursa/Karinna Hotel/karinna-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Termal tesisleriyle butik otel.',
    fullDescription: 'Karinna Hotel, Bursa\'da termal spa tesisleriyle benzersiz bir wellness deneyimi Sunar.',
    features: ['Termal spa tesisleri', 'Yerel mutfak restoranı'],
    roomTypes: [
      { name: 'Standart Oda', size: '28 m²', maxGuests: 2, price: 95, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '40 m²', maxGuests: 3, price: 130, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:67, Bursa, Türkiye' }
  },
  33: {
    id: 33,
    name: 'Grand Yazar Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 178,
    price: 300,
    image: '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-1.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-2.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-3.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-4.jpeg',
      '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Termal spa ile modern otel.',
    fullDescription: 'Grand Yazar Hotel, Bursa\'da konfor ve wellness için termal spa tesisleriyle modern konaklama Sunar.',
    features: ['Termal spa ve wellness', 'Restoran ve bar'],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 105, features: ['Queen yatak'] },
      { name: 'Executive Oda', size: '44 m²', maxGuests: 3, price: 145, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Altıparmak Cad. No:89, Bursa, Türkiye' }
  },
  34: {
    id: 34,
    name: 'WOW Bursa',
    location: 'Bursa, Türkiye',
    rating: 4.5,
    reviews: 189,
    price: 350,
    image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
    gallery: [
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-2.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-3.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-4.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Çağdaş tasarım oteli.',
    fullDescription: 'WOW Bursa, iş ve eğlence gezginleri için kapsamlı olanaklarla çağdaş konaklama Sunar.',
    features: ['Kapalı havuz', 'Fitness merkezi'],
    roomTypes: [
      { name: 'Superior Oda', size: '34 m²', maxGuests: 2, price: 120, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '46 m²', maxGuests: 3, price: 160, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Ankara Yolu 8. Km, Bursa, Türkiye' }
  },
  35: {
    id: 35,
    name: 'Gönlüferah Thermal Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.3,
    reviews: 156,
    price: 270,
    image: '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-1.jpg',
    gallery: [
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-1.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-2.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-3.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-4.jpg',
      '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Geleneksel termal otel.',
    fullDescription: 'Gönlüferah Thermal Hotel, Bursa\'da otantik termal spa deneyimleriyle konforlu konaklama Sunar.',
    features: ['Termal spa tesisleri', 'Geleneksel dekor'],
    roomTypes: [
      { name: 'Standart Oda', size: '26 m²', maxGuests: 2, price: 95, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '38 m²', maxGuests: 3, price: 130, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:123, Bursa, Türkiye' }
  },
  36: {
    id: 36,
    name: 'Kervansaray Thermal Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.6,
    reviews: 223,
    price: 420,
    image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
    gallery: [
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-2.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-3.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-4.jpg',
      '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Lüks termal spa resort.',
    fullDescription: 'Kervansaray Thermal Hotel, Bursa\'da dünya sınıfı termal spa resort deneyimi Sunar.',
    features: ['Kapsamlı termal spa', 'Çoklu havuz'],
    roomTypes: [
      { name: 'Deluxe Oda', size: '40 m²', maxGuests: 2, price: 140, features: ['King yatak'] },
      { name: 'Süit', size: '60 m²', maxGuests: 3, price: 190, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:34, Bursa, Türkiye' }
  },
  37: {
    id: 37,
    name: 'Çelik Palas',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 198,
    price: 220,
    image: '/hotels/Bursa/Celik Palas/celik-palas-1.jpg',
    gallery: [
      '/hotels/Bursa/Celik Palas/celik-palas-1.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-2.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-3.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-4.jpg',
      '/hotels/Bursa/Celik Palas/celik-palas-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Termal tesisleriyle tarihi otel.',
    fullDescription: 'Çelik Palas, termal spa tesisleri ve konforlu konaklama ile geleneksel zarafeti modern konforla birleştirir.',
    features: ['Termal havuzları', 'Tarihi atmosfer'],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 100, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 3, price: 140, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:1, Bursa, Türkiye' }
  },
  38: {
    id: 38,
    name: 'Bursa Holiday Inn',
    location: 'Bursa, Türkiye',
    rating: 4.3,
    reviews: 145,
    price: 260,
    image: '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-1.jpeg',
    gallery: [
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-1.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-2.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-3.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-4.jpeg',
      '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Uluslararası standartlarda konfor.',
    fullDescription: 'Bursa Holiday Inn, uluslararası hizmet standartları ve modern olanaklarla konforlu konaklama Sunar.',
    features: ['Uluslararası hizmet standartları', 'Fitness merkezi'],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 105, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 3, price: 145, features: ['King yatak'] }
    ],
    contact: { phone: '+90 506 641 17 83', email: 'info@fortytravel.com', address: 'Ankara Yolu 15. Km, Bursa, Türkiye' }
  },
  39: {
    id: 39,
    name: 'Crowne Plaza Bursa',
    location: 'Bursa, Türkiye',
    rating: 4.5,
    reviews: 180,
    price: 320,
    image: '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
    gallery: [
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-2.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-3.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-4.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Şehir merkezine yakın konfor.',
    fullDescription: 'Crowne Plaza Bursa, iş ve eğlence için uygun konaklama Sunar.',
    features: [
      'Modern odalar',
      'Spa',
      'Yeme seçenekleri'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '32 m²', maxGuests: 2, price: 120, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '44 m²', maxGuests: 3, price: 160, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Bursa, Türkiye'
    }
  },
  40: {
    id: 40,
    name: 'Almira Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 150,
    price: 280,
    image: '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-2.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-3.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-4.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Şehir merkezinde konfor.',
    fullDescription: 'Almira Hotel, Bursa şehir merkezinde uygun konaklama Sunar.',
    features: [
      'Konfor odalar',
      'Spa',
      'Restoran'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 110, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 3, price: 150, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Bursa, Türkiye'
    }
  },
  41: {
    id: 41,
    name: 'Crowne Plaza Bursa',
    location: 'Bursa, Türkiye',
    rating: 4.5,
    reviews: 180,
    price: 320,
    image: '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
    gallery: [
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-2.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-3.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-4.jpeg',
      '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Şehir merkezinde konfor.',
    fullDescription: 'Crowne Plaza Bursa, iş ve eğlence için uygun konaklama Sunar.',
    features: [
      'Modern odalar',
      'Spa',
      'Yeme seçenekleri'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '32 m²', maxGuests: 2, price: 120, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '44 m²', maxGuests: 3, price: 160, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Bursa, Türkiye'
    }
  },
  42: {
    id: 42,
    name: 'Almira Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 150,
    price: 280,
    image: '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-2.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-3.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-4.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Şehir merkezinde konfor.',
    fullDescription: 'Almira Hotel, Bursa şehir merkezinde uygun konaklama Sunar.',
    features: [
      'Konfor odalar',
      'Spa',
      'Restoran'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 110, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 3, price: 150, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Bursa, Türkiye'
    }
  },
  43: {
    id: 43,
    name: 'Almira Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 150,
    price: 280,
    image: '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
    gallery: [
      '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-2.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-3.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-4.jpeg',
      '/hotels/Bursa/Almira Hotel/almira-hotel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Şehir merkezinde konfor.',
    fullDescription: 'Almira Hotel, Bursa şehir merkezinde uygun konaklama Sunar.',
    features: [
      'Konfor odalar',
      'Spa',
      'Restoran'
    ],
    roomTypes: [
      { name: 'Standart Oda', size: '30 m²', maxGuests: 2, price: 110, features: ['Queen yatak'] },
      { name: 'Deluxe Oda', size: '42 m²', maxGuests: 3, price: 150, features: ['King yatak'] }
    ],
    contact: {
      phone: '+90 506 641 17 83',
      email: 'info@fortytravel.com',
      address: 'Bursa, Türkiye'
    }
  }
}

const amenities = {
  wifi: { icon: Wifi, label: 'Ücretsiz WiFi' },
  parking: { icon: Car, label: 'Ücretsiz Otopark' },
  spa: { icon: Dumbbell, label: 'Spa & Wellness' },
  restaurant: { icon: Coffee, label: 'Restoran' },
  bar: { icon: Coffee, label: 'Bar & Lounge' },
  pool: { icon: Dumbbell, label: 'Yüzme Havuzu' },
  concierge: { icon: Users, label: 'Concierge Hizmeti' },
  'room-service': { icon: Coffee, label: 'Oda Servisi' },
  gym: { icon: Dumbbell, label: 'Fitness Merkezi' },
  beach: { icon: MapPin, label: 'Özel Plaj' },
  'kids-club': { icon: Users, label: 'Çocuk Kulübü' },
}

// Global contact phone to display on all hotel detail pages
const GLOBAL_CONTACT_PHONE = '+90 506 641 17 83'

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = hotelsData[params.id as unknown as keyof typeof hotelsData]

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Otel Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız otel mevcut değil.</p>
          <Link href="/tr/hotels" className="btn-primary">
            Otellere Geri Dön
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
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{hotel.rating}</span>
                <span className="text-gray-300">({hotel.reviews} değerlendirme)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{hotel.name} Hakkında</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {hotel.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Otel Özellikleri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Oda Türleri & Fiyatlar</h3>
                <div className="space-y-6">
                  {hotel.roomTypes.map((room, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-1">{room.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span>{room.size}</span>
                            <span>•</span>
                            <span>Maksimum {room.maxGuests} misafir</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">€{room.price}</div>
                          <div className="text-sm text-gray-600">gecelik</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, idx) => (
                          <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="btn-primary w-full md:w-auto">
                        Şimdi Rezervasyon Yap
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Galeri</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${hotel.name} - Resim ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{hotel.price}</div>
                  <div className="text-gray-600">gecelik</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Giriş Tarihi
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Giriş Tarihi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Çıkış Tarihi
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Çıkış Tarihi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Misafir Sayısı
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Misafir Sayısı">
                      <option>1 Misafir</option>
                      <option>2 Misafir</option>
                      <option>3 Misafir</option>
                      <option>4+ Misafir</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full btn-primary mb-3">
                  Müsaitlik Kontrol Et
                </button>
                <button className="w-full btn-secondary">
                  Otel ile İletişime Geç
                </button>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Olanaklar</h3>
                <div className="space-y-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {amenities[amenity as keyof typeof amenities] && (
                        <>
                          {React.createElement(amenities[amenity as keyof typeof amenities].icon, { className: "w-5 h-5 text-primary-600" })}
                          <span className="text-gray-700">{amenities[amenity as keyof typeof amenities].label}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{GLOBAL_CONTACT_PHONE}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{hotel.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Hotels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Benzer Oteller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Similar hotels would be displayed here */}
            <div className="text-center text-gray-500 col-span-full">
              Benzer oteller yakında...
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}