import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// المدن الشعبية
const cities = [
  {
    name: 'إسطنبول',
    description: 'فنادق فاخرة في شبه الجزيرة التاريخية مع إطلالة على البوسفور',
    image: '/images/destinations/istanbul.jpg',
    hotelCount: 10,
    link: '/ar/hotels/city/istanbul'
  },
  {
    name: 'طرابزون',
    description: 'لؤلؤة البحر الأسود، فنادق محاطة بالجمال الطبيعي',
    image: '/images/destinations/trabzon.jpg',
    hotelCount: 10,
    link: '/ar/hotels/city/trabzon'
  },
  {
    name: 'أنطاليا',
    description: 'جنة السياحة في البحر الأبيض المتوسط، فنادق الشاطئ والمنتجعات',
    image: '/images/destinations/antalya.jpg',
    hotelCount: 10,
    link: '/ar/hotels/city/antalya'
  },
  {
    name: 'بورصة',
    description: 'فنادق thermal ومؤتمرات عند سفوح جبل أولوداغ',
    image: '/images/destinations/bursa.jpg',
    hotelCount: 10,
    link: '/ar/hotels/city/bursa'
  }
]

// جميع الفنادق من جميع المدن
const allCityHotels = [
  // فنادق إسطنبول
  {
    id: 1,
    name: 'ذا ريتز كارلتون إسطنبول',
    location: 'إسطنبول، تركيا',
    rating: 4.8,
    reviews: 324,
    price: 8500,
    image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'تجربة فاخرة فريدة من الأناقة الخالدة blended مع الرقي الحديث في قلب إسطنبول.',
  },
  {
    id: 2,
    name: 'سويسوتيل البوسفور',
    location: 'إسطنبول، تركيا',
    rating: 4.7,
    reviews: 256,
    price: 7200,
    image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar', 'gym', 'restaurant'],
    description: 'فندق أنيق مع إطلالة على البوسفور ومرافق عالمية المستوى.',
  },
  {
    id: 3,
    name: 'فندق CVK بارك البوسفور',
    location: 'إسطنبول، تركيا',
    rating: 4.7,
    reviews: 289,
    price: 6800,
    image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
    description: 'فندق عصري وأنيق مع إطلالة على البوسفور.',
  },
  {
    id: 4,
    name: 'فندق موفنبيك إسطنبول',
    location: 'إسطنبول، تركيا',
    rating: 4.6,
    reviews: 198,
    price: 5500,
    image: '/hotels/Movenpick Hotel Istanbul/movenpick-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق عصري بمعايير ضيافة سويسرية.',
  },
  {
    id: 5,
    name: 'جراند حياة إسطنبول',
    location: 'إسطنبول، تركيا',
    rating: 4.7,
    reviews: 245,
    price: 7500,
    image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'فندق فاخر في قلب مركز الأعمال في إسطنبول.',
  },
  {
    id: 6,
    name: 'كونراد إسطنبول',
    location: 'إسطنبول، تركيا',
    rating: 4.6,
    reviews: 189,
    price: 6200,
    image: '/hotels/Conrad Istanbul/conrad-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق فاخر عصري مع إطلالة على البوسفور.',
  },
  {
    id: 7,
    name: 'فندق ماريوت إسطنبول',
    location: 'إسطنبول، تركيا',
    rating: 4.5,
    reviews: 167,
    price: 5800,
    image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق مريح بمعايير ماريوت.',
  },
  {
    id: 8,
    name: 'دبليو إسطنبول',
    location: 'إسطنبول، تركيا',
    rating: 4.7,
    reviews: 203,
    price: 8000,
    image: '/hotels/W Istanbul/w-istanbul-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'فندق فاخر أنيق بتصميم عصري.',
  },
  {
    id: 9,
    name: 'فور سيزنز إسطنبول',
    location: 'إسطنبول، تركيا',
    rating: 4.9,
    reviews: 267,
    price: 9200,
    image: '/hotels/Four Seasons Istanbul/four-seasons-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'الفخامة المطلقة في السلطان أحمد التاريخي.',
  },
  {
    id: 10,
    name: 'قصر تشيراغان كيمبينسكي',
    location: 'إسطنبول، تركيا',
    rating: 4.9,
    reviews: 312,
    price: 12000,
    image: '/hotels/Ciragan Palace Kempinski/ciragan-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'قصر عثماني تم تحويله إلى فندق فاخر.',
  },
  // فنادق طرابزون
  {
    id: 11,
    name: 'زورلو جراند هوتل طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.7,
    reviews: 189,
    price: 4200,
    image: '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق فاخر في قلب طرابزون.',
  },
  {
    id: 12,
    name: 'نوفوتل طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.5,
    reviews: 145,
    price: 3500,
    image: '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق عصري بمعايير دولية.',
  },
  {
    id: 13,
    name: 'هيلتون طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.6,
    reviews: 167,
    price: 4800,
    image: '/hotels/Trabzon/Hilton Trabzon/hilton-trabzon-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فخامة دولية مع إطلالة على البحر الأسود.',
  },
  {
    id: 14,
    name: 'جراند ترابيا هوتل',
    location: 'طرابزون، تركيا',
    rating: 4.4,
    reviews: 123,
    price: 3200,
    image: '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق مريح بالضيافة التقليدية.',
  },
  {
    id: 15,
    name: 'فندق ماريوت طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.6,
    reviews: 178,
    price: 4500,
    image: '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon2-.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'جودة ماريوت مع سحر البحر الأسود.',
  },
  {
    id: 16,
    name: 'ريكسوس طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.7,
    reviews: 195,
    price: 5200,
    image: '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
    description: 'منتجع فاخر بشاطئ خاص.',
  },
  {
    id: 17,
    name: 'ويندام طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.3,
    reviews: 134,
    price: 2800,
    image: '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-2.jpeg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
    description: 'إقامة مريحة بمرافق حديثة.',
  },
  {
    id: 18,
    name: 'هامبتون باي هيلتون طرابزون',
    location: 'طرابزون، تركيا',
    rating: 4.4,
    reviews: 145,
    price: 3000,
    image: '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-2.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
    description: 'راحة حديثة بجودة هامبتون.',
  },
  {
    id: 19,
    name: 'فندق طرابزون بارك',
    location: 'طرابزون، تركيا',
    rating: 4.2,
    reviews: 112,
    price: 2500,
    image: '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-2.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant'],
    description: 'فندق مريح بإطلالة على الحديقة.',
  },
  {
    id: 20,
    name: 'فندق يازيجي',
    location: 'طرابزون، تركيا',
    rating: 4.3,
    reviews: 128,
    price: 3800,
    image: '/hotels/Trabzon/Yazici Hotel/yazici-hotel-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'الضيافة التقليدية مع الراحة الحديثة.',
  },
  // فنادق أنطاليا
  {
    id: 21,
    name: 'قصر مردان',
    location: 'أنطاليا، تركيا',
    rating: 4.8,
    reviews: 523,
    price: 6500,
    image: '/hotels/Antalya/Mardan Palace/mardan-palace-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'منتجع فاخر على طراز القصر على ساحل البحر الأبيض المتوسط.',
  },
  {
    id: 22,
    name: 'ريجنوم كاريا',
    location: 'أنطاليا، تركيا',
    rating: 4.7,
    reviews: 412,
    price: 5800,
    image: '/hotels/Antalya/Regnum Carya/Regnum-Carya-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع غولف فاخر على ساحل البحر الأبيض المتوسط.',
  },
  {
    id: 23,
    name: 'ماكس رويال بليك',
    location: 'أنطاليا، تركيا',
    rating: 4.8,
    reviews: 489,
    price: 7200,
    image: '/hotels/Antalya/Maxx Royal Belek/maxx-royal-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع غولف فاخر جداً.',
  },
  {
    id: 24,
    name: 'منتجع سوسي لوكسري',
    location: 'أنطاليا، تركيا',
    rating: 4.6,
    reviews: 367,
    price: 5200,
    image: '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع شاطئي فاخر.',
  },
  {
    id: 25,
    name: 'منتجع كاليستا لوكسري',
    location: 'أنطاليا، تركيا',
    rating: 4.7,
    reviews: 398,
    price: 6000,
    image: '/hotels/Antalya/Calista Luxury Resort/calista-luxury-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع شاطئي متميز بمرافق فاخرة.',
  },
  {
    id: 26,
    name: 'قايا بالازو',
    location: 'أنطاليا، تركيا',
    rating: 4.6,
    reviews: 345,
    price: 5500,
    image: '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع أنيق بسحر البحر الأبيض المتوسط.',
  },
  {
    id: 27,
    name: 'ريكسوس بريميوم بليك',
    location: 'أنطاليا، تركيا',
    rating: 4.7,
    reviews: 423,
    price: 6800,
    image: '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'منتجع فاخر شامل جميع الخدمات.',
  },
  {
    id: 28,
    name: 'منتجع كورنيليا دايموند غولف',
    location: 'أنطاليا، تركيا',
    rating: 4.6,
    reviews: 389,
    price: 6200,
    image: '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع غولف وشاطئي فاخر.',
  },
  {
    id: 29,
    name: 'مملكة أرض الأساطير',
    location: 'أنطاليا، تركيا',
    rating: 4.8,
    reviews: 467,
    price: 7500,
    image: '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
    description: 'منتجع فاخر مع مدينة ملاهي.',
  },
  {
    id: 30,
    name: 'سيرين بليك',
    location: 'أنطاليا، تركيا',
    rating: 4.5,
    reviews: 312,
    price: 4800,
    image: '/hotels/Antalya/Sirene Belek/sirene-belek-2.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'منتجع غولف وشاطئي.',
  },
  // فنادق بورصة
  {
    id: 31,
    name: 'هيلتون بورصة مركز المؤتمرات',
    location: 'بورصة، تركيا',
    rating: 4.6,
    reviews: 234,
    price: 3800,
    image: '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق عصري بمرافق مؤتمرات.',
  },
  {
    id: 32,
    name: 'كراون بلازا بورصة',
    location: 'بورصة، تركيا',
    rating: 4.5,
    reviews: 198,
    price: 3200,
    image: '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق أعمال بمرافق حديثة.',
  },
  {
    id: 33,
    name: 'فندق ألميرا',
    location: 'بورصة، تركيا',
    rating: 4.4,
    reviews: 167,
    price: 2800,
    image: '/hotels/Bursa/Almira Hotel/almira-hotel-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق مريح بالسبا thermal.',
  },
  {
    id: 34,
    name: 'فندق كارينا',
    location: 'بورصة، تركيا',
    rating: 4.3,
    reviews: 145,
    price: 2500,
    image: '/hotels/Bursa/Karinna Hotel/karinna-hotel-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'فندق بوتيك بمرافق thermal.',
  },
  {
    id: 35,
    name: 'جراند يازار هوتل',
    location: 'بورصة، تركيا',
    rating: 4.4,
    reviews: 178,
    price: 3000,
    image: '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق عصري بالسبا thermal.',
  },
  {
    id: 36,
    name: 'وو بورصة',
    location: 'بورصة، تركيا',
    rating: 4.5,
    reviews: 189,
    price: 3500,
    image: '/hotels/Bursa/WOW Bursa/wow-bursa-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'فندق عصري بتصميم معاصر.',
  },
  {
    id: 37,
    name: 'فندق غونلوفيراه thermal',
    location: 'بورصة، تركيا',
    rating: 4.3,
    reviews: 156,
    price: 2700,
    image: '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'فندق thermal تقليدي.',
  },
  {
    id: 38,
    name: 'فندق كرفانساراي thermal',
    location: 'بورصة، تركيا',
    rating: 4.6,
    reviews: 223,
    price: 4200,
    image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'منتجع سبا thermal فاخر.',
  },
  {
    id: 39,
    name: 'تشليك قصر',
    location: 'بورصة، تركيا',
    rating: 4.4,
    reviews: 198,
    price: 2200,
    image: '/hotels/Bursa/Celik Palas/celik-palas-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق تاريخي بمرافق thermal.',
  },
  {
    id: 40,
    name: 'هوليد إن بورصة',
    location: 'بورصة، تركيا',
    rating: 4.3,
    reviews: 145,
    price: 2600,
    image: '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-2.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'فندق مريح بمعايير دولية.',
  }
]

const amenities = {
  wifi: { icon: Wifi, label: 'واي فاي مجاني' },
  parking: { icon: Car, label: 'موقف سيارات مجاني' },
  spa: { icon: Dumbbell, label: 'سبا وويلنس' },
  restaurant: { icon: Coffee, label: 'مطعم' },
  bar: { icon: Coffee, label: 'بار وصالة استراحة' },
  pool: { icon: Dumbbell, label: 'مسبح' },
  concierge: { icon: Users, label: 'خدمة الكونسيرج' },
  'room-service': { icon: Coffee, label: 'خدمة الغرف' },
  gym: { icon: Dumbbell, label: 'مركز لياقة بدنية' },
  beach: { icon: MapPin, label: 'شاطئ خاص' },
  'kids-club': { icon: Users, label: 'نادي أطفال' },
  golf: { icon: Users, label: 'ملعب غولف' },
  'water-park': { icon: Users, label: 'مدينة ملاهي مائية' },
  'beach-club': { icon: Users, label: 'نادي الشاطئ' }
}

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/istanbul.jpg"
            alt="فنادق تركيا"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              أفضل الفنادق في تركيا
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              اكتشف تجارب الإقامة الفاخرة في جميع أنحاء تركيا
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                استكشف جميع الفنادق
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                عروض خاصة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الوجهات الشعبية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف فنادقنا الفاخرة في المدن التركية الأكثر تفضيلاً
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link key={city.name} href={city.link} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{city.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{city.hotelCount} فندق</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الفنادق المميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختيار من أرقى الفنادق في جميع أنحاء تركيا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCityHotels.map((hotel) => (
              <div key={hotel.id} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary-600">₺{hotel.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-600">/ليلة</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotel.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-gray-600 text-sm">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {amenities[amenity as keyof typeof amenities]?.label || amenity}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      2-4 ضيوف
                    </div>
                    <Link 
                      href={`/ar/hotels/${hotel.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">خدمة حائزة على جوائز</h3>
              <p className="text-gray-600">
                معايير دولية مع نهج خدمة يركز على رضا الضيوف
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">مواقع استراتيجية</h3>
              <p className="text-gray-600">
                فنادقنا في أهم المراكز السياحية والتجارية في تركيا
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">مرافق مميزة</h3>
              <p className="text-gray-600">
                تجربة غنية مع سبا وويلنس وتناول طعام راقٍ والمزيد
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            هل أنت مستعد للعثور على إقامتك المثالية؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            دع مستشاري السفر الخبراء لدينا يخططون عطلتك أحلامك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              احجز الآن
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}