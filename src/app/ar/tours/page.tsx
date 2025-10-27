import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight, Plane, Camera, Mountain, Ship } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ToursPage() {
  const tours = [
    {
      id: 1,
      title: 'جولة البوسفور في اسطنبول',
      location: 'اسطنبول',
      duration: '3 ساعات',
      price: 89,
      rating: 4.8,
      reviews: 156,
      image: '/tours/İstanbul Boğaz Turu /İstanbul Boğaz Turu.jpeg',
      category: 'cruise',
      difficulty: 'سهل',
      groupSize: '2-20',
      highlights: ['جسر البوسفور', 'قصر دولماباهçe', 'مسجد أورتاكوي'],
      description: 'تجربة سحر اسطنبول من الماء مع جولتنا الفاخرة التي تشمل العشاء والترفيه.'
    },
    {
      id: 2,
      title: 'مغامرة كبادوكيا بالون الهواء',
      location: 'كابادوكيا',
      duration: 'يوم واحد',
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg',
      category: 'adventure',
      difficulty: 'متوسط',
      groupSize: '4-16',
      highlights: ['رحلة شروق الشمس', 'أبراج الخيالية', 'المدن تحت الأرض'],
      description: 'طف فوق المناظر السحرية لكابادوكيا في بالون الحر عند شروق الشمس.'
    },
    {
      id: 3,
      title: 'جولة مدينة أفسوس القديمة',
      location: 'إزمير',
      duration: 'يوم كامل',
      price: 75,
      rating: 4.7,
      reviews: 198,
      image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg',
      category: 'cultural',
      difficulty: 'سهل',
      groupSize: '2-15',
      highlights: ['مكتبة سلسوس', 'المسرح الكبير', 'معبد أرتميس'],
      description: 'اكتشف عجائب أفسوس القديمة مع أدلائنا الخبراء وتذاكر الدخول.'
    },
    {
      id: 4,
      title: 'بركات باموكالي الحرارية',
      location: 'باموكالي',
      duration: 'يوم كامل',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Pamukkale Thermal Pools/Pamukkale Thermal Pools.jpeg',
      category: 'nature',
      difficulty: 'سهل',
      groupSize: '2-25',
      highlights: ['الأسطح الترافرتينية', 'هييرابوليس', 'بركلة كليوباترا'],
      description: 'استرخ في المياه الشافية لباموكالي واستكشف هييرابوليس القديمة.'
    },
    {
      id: 5,
      title: 'جولة القلع الزرقاء',
      location: 'بودروم',
      duration: '3 أيام',
      price: 450,
      rating: 4.9,
      reviews: 167,
      image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk Gulet Turu.jpeg',
      category: 'cruise',
      difficulty: 'سهل',
      groupSize: '2-12',
      highlights: ['القلع التقليدية', 'خلع السباحة', 'المطبخ التركي'],
      description: 'أبحر في المياه الزرقاء لبحر إيجة على قلعنا الخشبية التقليدية مع المطبخ التركي الشهير.'
    },
    {
      id: 6,
      title: 'تسلق جبل أرارات',
      location: 'شرق الأناضول',
      duration: '5 أيام',
      price: 680,
      rating: 4.6,
      reviews: 89,
      image: '/tours/Sapanca Maşukiye/Sapanca Maşukiye.jpeg',
      category: 'adventure',
      difficulty: 'صعب',
      groupSize: '4-8',
      highlights: ['محاولة الوصول للقمة', 'البحيرات الجليدية', 'ثقافة كردية'],
      description: 'تحد نفسك مع أعلى قمة في تركيا مع مرشدي الجبال الخبراء.',
      fullDescription: 'انطلق في مغامرة من العمر مع بعثتنا الصعبة لتسلق جبل أرارات. هذه الرحلة التي تستغرق 5 أيام تأخذك عبر مناظر متنوعة، من الوديان الخضراء إلى المنحدرات الصخرية، بينما تصعد إلى أعلى قمة في تركيا (5,137م). يضمن مرشدو الجبال الخبراء أمانك مع مشاركة رؤى في ثقافة الكردية المحلية والأهمية الجيولوجية للبحيرات الجليدية التي ستواجهها. هذه الرحلة الصعبة تكافئك بمناظر خلابة وشعور هائل بالإنجاز.',
      features: [
        'مرشدو جبال خبراء',
        'مجموعات صغيرة للسلامة',
        'معدات التخييم والوجبات',
        'رؤى ثقافية في مجتمعات كردية',
        'استكشاف البحيرات الجليدية',
        'محاولة الوصول لأعلى قمة في تركيا',
        'معدات السلامة الشاملة',
        'مركبة دعم للحالات الطارئة'
      ],
      itinerary: [
        {
          time: 'اليوم 1: 08:00',
          activity: 'الوصول إلى مخيم القاعدة',
          description: 'الوصول إلى مخيم القاعدة، مقابلة المرشدين، فحص المعدات'
        },
        {
          time: 'اليوم 1: 10:00',
          activity: 'بدء التسلق',
          description: 'بدء الصعود عبر الوديان والغابات'
        },
        {
          time: 'اليوم 1: 17:00',
          activity: 'إعداد المخيم',
          description: 'إعداد أول مخيم جبلي'
        },
        {
          time: 'اليوم 2: 07:00',
          activity: 'التسلق الصباحي',
          description: 'متابعة الصعود عبر التضاريس الصخرية'
        },
        {
          time: 'اليوم 2: 14:00',
          activity: 'البحيرات الجليدية',
          description: 'استكشاف البحيرات الجليدية والراحة'
        },
        {
          time: 'اليوم 2: 17:00',
          activity: 'مخيم الجبل',
          description: 'إعداد ثاني مخيم جبلي'
        },
        {
          time: 'اليوم 3: 06:00',
          activity: 'الصعود النهائي',
          description: 'بدء الدفعة النهائية نحو القمة'
        },
        {
          time: 'اليوم 3: 14:00',
          activity: 'محاولة الوصول للقمة',
          description: 'الوصول إلى منطقة القمة والاحتفال بالإنجاز'
        },
        {
          time: 'اليوم 3: 17:00',
          activity: 'النزول',
          description: 'بدء النزول إلى مخيم القاعدة'
        },
        {
          time: 'اليوم 4: 08:00',
          activity: 'الاستكشاف الثقافي',
          description: 'زيارة القرى الكردية والمواقع الثقافية'
        },
        {
          time: 'اليوم 4: 16:00',
          activity: 'يوم الراحة',
          description: 'الراحة والاستعداد للمحاولة النهائية'
        },
        {
          time: 'اليوم 5: 07:00',
          activity: 'محاولة الوصول النهائية للقمة',
          description: 'فرصة أخيرة للوصول إلى القمة'
        },
        {
          time: 'اليوم 5: 15:00',
          activity: 'الاحتفال',
          description: 'العودة إلى مخيم القاعدة وعشاء احتفالي'
        },
        {
          time: 'اليوم 5: 18:00',
          activity: 'المغادرة',
          description: 'النقل إلى مكان الإقامة'
        }
      ],
      included: [
        'مرشدو جبال خبراء',
        'جميع معدات التخييم',
        'جميع الوجبات أثناء التسلق',
        'مركبة دعم',
        'التجارب الثقافية',
        'معدات السلامة',
        'الإقامة قبل وبعد التسلق'
      ],
      notIncluded: [
        'معدات التسلق الشخصية',
        'تأمين السفر',
        'البقش للمرشدين',
        'المصروفات الشخصية'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'دوغوبايازيت، شرق الأناضول، تركيا'
      }
    }
  ]

  const categories = [
    { value: 'all', label: 'جميع الجولات', icon: Plane },
    { value: 'cultural', label: 'ثقافي', icon: Camera },
    { value: 'adventure', label: 'مغامرة', icon: Mountain },
    { value: 'cruise', label: 'رحلة بحرية', icon: Ship },
    { value: 'nature', label: 'طبيعة', icon: Mountain },
  ]

  const difficulties = [
    { value: 'all', label: 'جميع المستويات' },
    { value: 'easy', label: 'سهل' },
    { value: 'moderate', label: 'متوسط' },
    { value: 'challenging', label: 'صعب' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-secondary-600 to-secondary-800">
        <div className="absolute inset-0">
          <Image
            src="/tours-hero.jpg"
            alt="Tours Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              الجولات لا تُنسى في تركيا
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              من الآثار القديمة إلى عجائب الطبيعية، اكتشف تركيا مع أدلائنا الخبراء
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
                placeholder="البحث في الجولات..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Tour Destination">
              <option>جميع الوجهات</option>
              <option>اسطنبول</option>
              <option>كابادوكيا</option>
              <option>إزمير</option>
              <option>بودروم</option>
              <option>أنطاليا</option>
            </select>
            
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Tour Category">
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Tour Difficulty">
              {difficulties.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>
            
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              البحث في الجولات
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            تم العثور على <span className="font-semibold text-gray-900">{tours.length}</span> جولة رائعة
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">الترتيب حسب: الشهرة</button>
            <button className="text-gray-600 hover:text-gray-900">السعر: من الأقل إلى الأعلى</button>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-600 capitalize">{tour.category}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-600">${tour.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {tour.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{tour.rating}</span>
                    <span className="text-gray-600 text-sm">({tour.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    {tour.difficulty}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">+{tour.highlights.length - 2} أكثر</span>
                    )}
                  </div>
                  <Link 
                    href={`/ar/tours/${tour.id}`}
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
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
      <section className="bg-secondary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            هل تجد ما تبحث عنه؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            دع خبراء السفر لدينا ينشئون جولة مخصصة لك فقط
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              جولة مخصصة
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-600 transition-colors">
              التواصل مع الخبير
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}