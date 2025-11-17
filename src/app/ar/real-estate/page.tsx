import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, DollarSign, Users, Shield, MapPin, BedDouble, Bath, Square, Globe, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: 'العقارات - خدمات العقارات المميزة | MrForty Travel',
  description: 'اكتشف فرص العقارات المميزة في تركيا. خيارات الإيجار والشراء متاحة مع برامج استثمار الجنسية. عقارات فاخرة في مواقع رئيسية.',
}

export default function RealEstatePage() {
  const rentalProperties = [
    {
      id: 'luxury-apartment-1',
      title: 'شقة فاخرة بإطلالة على البحر',
      location: 'اسطنبول، بشيكتاش',
      type: 'شقة',
      bedrooms: 3,
      bathrooms: 2,
      area: '180 م²',
      price: '$3,500/شهر',
      image: '/real-estate/luxury-apartment-1.jpg',
      features: ['إطلالة على البحر', 'مفروشة', 'مواقف', 'أمان 24/7']
    },
    {
      id: 'modern-villa-1',
      title: 'فيلا حديثة مع مسبح',
      location: 'أنطاليا، كونيالتي',
      type: 'فيلا',
      bedrooms: 5,
      bathrooms: 4,
      area: '450 م²',
      price: '$8,000/شهر',
      image: '/real-estate/modern-villa-1.jpg',
      features: ['مسبح خاص', 'حديقة', 'كراج', 'منزل ذكي']
    },
    {
      id: 'penthouse-1',
      title: 'بنتهاوس سويت',
      location: 'اسطنبول، ليفنت',
      type: 'بنتهاوس',
      bedrooms: 4,
      bathrooms: 3,
      area: '320 م²',
      price: '$6,500/شهر',
      image: '/real-estate/penthouse-1.jpg',
      features: ['تراس السطح', 'إطلالة على المدينة', 'جاكوزي', 'موقع مميز']
    }
  ]

  const saleProperties = [
    {
      id: 'investment-property-1',
      title: 'مجمع استثماري',
      location: 'اسطنبول، شيشلي',
      type: 'مجمع سكني',
      bedrooms: 2,
      bathrooms: 1,
      area: '120 م²',
      price: '$450,000',
      image: '/real-estate/investment-property-1.jpg',
      features: ['عائد مرتفع', 'دخل إيجاري', 'وسط المدينة', 'بناء جديد']
    },
    {
      id: 'beach-house-1',
      title: 'منزل على شاطئ البحر',
      location: 'بودروم، ياليكافاك',
      type: 'منزل',
      bedrooms: 4,
      bathrooms: 3,
      area: '280 م²',
      price: '$1,200,000',
      image: '/real-estate/beach-house-1.jpg',
      features: ['وصول الشاطئ', 'حديقة خاصة', 'إطلالة على البحر', 'تشطيبات فاخرة']
    },
    {
      id: 'commercial-property-1',
      title: 'مساحة مكتبية تجارية',
      location: 'اسطنبول، ماسلاك',
      type: 'تجاري',
      bedrooms: 0,
      bathrooms: 2,
      area: '500 م²',
      price: '$2,500,000',
      image: '/real-estate/commercial-property-1.jpg',
      features: ['منطقة الأعمال', 'رؤية عالية', 'تصميم حديث', 'مواقف']
    }
  ]

  const citizenshipBenefits = [
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600" />,
      title: 'الجنسية التركية',
      description: 'احصل على الجنسية التركية باستثمار عقاري بقيمة 400,000 دولار أو أكثر'
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'مزايا العائلة',
      description: 'ضم زوجك وأطفالك تحت 18 في طلب الجنسية'
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: 'سفر بدون تأشيرة',
      description: 'سفر إلى أكثر من 110 دولة بدون تأشيرة مع جواز السفر التركي'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-600" />,
      title: 'عائد الاستثمار',
      description: 'دخل إيجاري محتمل وزيادة قيمة العقار'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-900 to-primary-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6" dir="rtl">
              العقارات المميزة في تركيا
            </h1>
            <p className="text-xl text-gray-200 mb-12" dir="rtl">
              اكتشف العقارات الاستثنائية للإيجار والشراء.
              متخصصون في برامج استثمار الجنسية بإرشاد الخبراء.
            </p>
            <div className="flex flex-wrap gap-4" dir="rtl">
              <Link 
                href="#rental"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                عرض الإيجارات
                <ArrowRight className="mr-2 w-5 h-5" />
              </Link>
              <Link 
                href="#citizenship"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                معلومات الجنسية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Citizenship Investment Section */}
      <section id="citizenship" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">الجنسية التركية بالاستثمار</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              استثمر في العقارات التركية واحصل على الجنسية مع العديد من المزايا
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
            <h3 className="text-2xl font-bold mb-4" dir="rtl">متطلبات الاستثمار</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <p className="text-3xl font-bold mb-2">$400,000</p>
                <p className="text-primary-100" dir="rtl">الحد الأدنى للاستثمار العقاري</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">3 سنوات</p>
                <p className="text-primary-100" dir="rtl">الحد الأدنى لفترة الاحتفاظ</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">6-9 أشهر</p>
                <p className="text-primary-100" dir="rtl">وقت المعالجة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Properties Section */}
      <section id="rental" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">العقارات الفاخرة للإيجار</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              مجموعة مختارة بعناية من العقارات الفاخرة للإيجار في مواقع رئيسية
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
                      {property.bedrooms} غرف نوم
                    </div>
                    <div className="flex items-center" dir="rtl">
                      <Bath className="w-4 h-4 ml-1 text-gray-500" />
                      {property.bathrooms} حمامات
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
                    عرض التفاصيل
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dir="rtl">العقارات للبيع</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" dir="rtl">
              عقارات حصرية للشراء بإمكانيات استثمارية ممتازة
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
                        {property.bedrooms} غرف نوم
                      </div>
                      <div className="flex items-center" dir="rtl">
                        <Bath className="w-4 h-4 ml-1 text-gray-500" />
                        {property.bathrooms} حمامات
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
                    عرض التفاصيل
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
            اعثر على منزل أحلامك اليوم
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto" dir="rtl">
            تواصل مع خبرائنا العقاريين للمساعدة الشخصية وقوائم العقارات الحصرية
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+90506641785" 
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              اتصل الآن: +90 506 641 17 85
            </a>
            <a 
              href="mailto:seyfettin@mrfortytravel.com" 
              className="inline-flex items-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              أرسل لنا بريدًا إلكترونيًا
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}