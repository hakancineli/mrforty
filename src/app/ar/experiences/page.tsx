import { Metadata } from 'next'
import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight, Heart, Camera, Mountain, Ship } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'التجارب - MrForty | السفر الفاخر',
  description: 'أنشطة ومغامرات فريدة في كل وجهة.',
}

export default function ExperiencesPage() {
  const experiences = [
    {
      id: 1,
      title: 'طيران بالون الهواء عند شروق الشمس',
      location: 'كبادوكيا',
      duration: '3 ساعات',
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/experiences-gallery/:experiences:1 /Cappadocia Hot AirBallon.jpeg',
      category: 'adventure',
      difficulty: 'متوسط',
      groupSize: '4-16',
      highlights: ['رحلة شروق الشمس', 'أبراج الجن', 'إفطار شمبانيا'],
      description: 'استمتع بسحر كبادوكيا من الأعلى مع رحلة منطاد الهواء عند شروق الشمس.'
    },
    {
      id: 2,
      title: 'جولة يخت خاص',
      location: 'بودروم',
      duration: 'يوم كامل',
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg',
      category: 'luxury',
      difficulty: 'سهل',
      groupSize: '2-8',
      highlights: ['يخت خاص', 'خلع للسباحة', 'غداء راقٍ'],
      description: 'إبحر في المياه التركوازية لبحر إيجه على يختك الفاخر مع طاقم محترف.'
    },
    {
      id: 3,
      title: 'تجربة الحمام التركي',
      location: 'إسطنبول',
      duration: 'ساعتان',
      price: 85,
      rating: 4.7,
      reviews: 198,
      image: '/experiences-gallery/:experiences:3/traditional-turkish-bath-2.jpeg',
      category: 'cultural',
      difficulty: 'سهل',
      groupSize: '2-6',
      highlights: ['حمام تاريخي', 'تدليك تقليدي', 'زيوت عطرية'],
      description: 'استرخِ وانعش مع تجربة الحمام التركي الأصيلة بما في ذلك التدليك التقليدي والزيوت العطرية.'
    },
    {
      id: 4,
      title: 'الطيران الشراعي فوق باموكالي',
      location: 'باموكالي',
      duration: 'نصف يوم',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/experiences-gallery/:experiences:4/pamukkale1.jpeg',
      category: 'adventure',
      difficulty: 'متوسط',
      groupSize: '2-12',
      highlights: ['البرك الحرارية', 'الشرفات البيضاء', 'الآثار القديمة'],
      description: 'حلّق فوق الشرفات الترافرتينية البيضاء المذهلة في باموكالي مع تجربة الطيران الشراعي المحترفة.'
    },
    {
      id: 5,
      title: 'جولة طعام راقٍ',
      location: 'إسطنبول',
      duration: '4 ساعات',
      price: 120,
      rating: 4.6,
      reviews: 156,
      image: '/experiences-gallery/:experiences:5/gourmet-street-food-1.jpeg',
      category: 'culinary',
      difficulty: 'سهل',
      groupSize: '4-12',
      highlights: ['الأسواق المحلية', 'طعام الشارع', 'مطاعم تقليدية'],
      description: 'اكتشف النكهات الغنية للمطبخ التركي مع جولتنا الغذائية الموجهة عبر الأسواق المحلية والمطاعم التقليدية.'
    },
    {
      id: 6,
      title: 'الغوص في كاش',
      location: 'كاش',
      duration: 'يوم كامل',
      price: 180,
      rating: 4.9,
      reviews: 89,
      image: '/experiences-gallery/:experiences:6/kas-dalis-at-11.03.41-1024x683.jpeg',
      category: 'adventure',
      difficulty: 'متوسط',
      groupSize: '2-8',
      highlights: ['مياه صافية', 'الحياة البحرية', 'مدرب محترف'],
      description: 'استكشف العالم تحت الماء لبحر المتوسط مع تجربة الغوص المحترفة في المياه الصافية لكاش.'
    }
  ]

  const categories = [
    { value: 'all', label: 'جميع التجارب', icon: Heart },
    { value: 'adventure', label: 'المغامرة', icon: Mountain },
    { value: 'cultural', label: 'ثقافي', icon: Camera },
    { value: 'culinary', label: 'مطبخ', icon: Ship },
    { value: 'luxury', label: 'فاخر', icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-tertiary-600 to-tertiary-800">
        <div className="absolute inset-0">
          <Image
            src="/experiences-hero.jpg"
            alt="خلفية التجارب"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4 pt-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              تجارب فريدة في تركيا
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              من رحلات منطاد الهواء إلى جولات اليخت الخاصة، اكتشف تجارب لا تُنسى
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="البحث في التجارب..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <select 
              title="فئة التجربة"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent appearance-none"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="جميع الوجهات"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="أي تاريخ"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select 
                title="عدد الضيوف"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent appearance-none"
              >
                <option>1-2 ضيف</option>
                <option>3-6 ضيوف</option>
                <option>7+ ضيوف</option>
              </select>
            </div>
            
            <button className="btn-tertiary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              البحث عن التجارب
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            تم العثور على <span className="font-semibold text-gray-900">{experiences.length}</span> تجربة رائعة
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">ترتيب حسب: الموصى به</button>
            <button className="text-gray-600 hover:text-gray-900">السعر: من الأقل إلى الأعلى</button>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-tertiary-600">€{experience.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{experience.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{experience.rating}</span>
                    <span className="text-gray-600 text-sm">({experience.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 ml-2" />
                    <span>{experience.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    <span>{experience.difficulty}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{experience.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    {experience.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {experience.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">+{experience.highlights.length - 2} أكثر</span>
                    )}
                  </div>
                  <Link 
                    href={`/ar/experiences/${experience.id}`}
                    className="btn-tertiary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    عرض التفاصيل
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-tertiary-600 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            أنشئ تجربتك المثالية
          </h2>
          <p className="text-xl mb-8 opacity-90">
            دع خبراء السفر لدينا يصممون تجربة مخصصة لك فقط
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-tertiary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              تجربة مخصصة
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-tertiary-600 transition-colors">
              تواصل مع الخبير
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}