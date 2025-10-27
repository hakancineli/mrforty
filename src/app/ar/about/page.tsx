import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Star, Users, Award, Image as ImageIcon, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'من نحن - MrForty | السفر الفاخر',
  description: 'تعرف على المزيد عن MrForty والتزامنا بالسفر الفاخر في تركيا.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            من نحن
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            شريككم الموثوق في تجارب السفر الفاخرة في تركيا
          </p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">قصة MrForty</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              في MrForty، نقدم خدماتنا منذ عام 2010 لتمكينك من عيش الثقافة الغنية لتركيا ومناظرها الخلابة بطريقة فاخرة ومريحة. مهمتنا هي ضمان أن تكون كل رحلة تجربة لا تُنسى.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">قيمنا</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• وضع رضا العملاء في المقام الأول دائماً</li>
              <li>• احترام الثقافة المحلية وتقديم تجارب أصلية</li>
              <li>• دعم السياحة المستدامة</li>
              <li>• تقديم جودة الخدمات المخصصة</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">لماذا MrForty؟</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              فريقنا الخبير يعرف كل زاوية من زوايا تركيا بشكل أفضل وهو هنا لتصميم رحلتك كما تحلم تماماً. من الفنادق الفاخرة إلى الجولات الخاصة، والنقل VIP إلى التجارب الفريدة، نفكر في كل التفاصيل.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">فريقنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: 'سيف الدين كيرك',
                position: 'المدير العام',
                image: '/team/seyfettin.jpg',
                bio: 'مع أكثر من 15 عامًا من الخبرة في السفر الفاخر والسياحة، يقود سيف الدين فريقنا بشغف وخبرة في إنشاء رحلات لا تُنسى لعملائنا.',
                email: 'seyfettin@mrfortytravel.com',
                phone: '+90 506 641 17 85',
                linkedin: 'https://linkedin.com/in/seyfettin-kirk'
              },
              {
                id: 2,
                name: 'محميت أوزكان',
                position: 'دليل الجولات',
                image: '/team/mehmet.jpg',
                bio: 'محميت هو دليل الجولات الخبير لدينا بمعرفة واسعة بتاريخ تركيا وثقافتها. يتحدث الإنجليزية والتركية والعربية بطلاقة، مما يجعله مثاليًا للعملاء الدوليين.',
                email: 'mehmet@mrfortytravel.com',
                phone: '+90 506 641 17 85',
                linkedin: 'https://linkedin.com/in/mehmet-ozkan'
              },
              {
                id: 3,
                name: 'أليف دمير',
                position: 'علاقات العملاء',
                image: '/team/elif.jpg',
                bio: 'تضمن أليف أن يكون لكل عميل تجربة سلسة من الحجز حتى السفر. انتباهها للتفاصيل وشخصيتها الدافئة تجعلها نقطة اتصال مثالية لعملائنا.',
                email: 'elif@mrfortytravel.com',
                phone: '+90 506 641 17 85',
                linkedin: 'https://linkedin.com/in/elif-demir'
              }
            ].filter(member => member.id !== 3).map((member) => (
              <div key={member.id} className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-gray-600 mb-2">{member.position}</p>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm mt-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mt-2">
                          <a
                            href={`https://wa.me/${member.phone.replace(/\s/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>واتساب</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">لماذا MrForty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'معتمد من IATA',
                description: 'شهادة IATA الرسمية لخدمات السفر الدولية'
              },
              {
                icon: Users,
                title: 'أكثر من 10,000 عميل سعيد',
                description: 'خدمة المسافرين من جميع أنحاء العالم بتجارب استثنائية'
              },
              {
                icon: Star,
                title: 'خدمة 5 نجوم',
                description: 'مقيم باستمرار 5 نجوم من قبل عملائنا الراضين'
              },
              {
                icon: MapPin,
                title: 'أكثر من 50 وجهة',
                description: 'تغطية جميع الوجهات السياحية الرئيسية في تركيا'
              }
            ].map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            مستعد لرحلتك الأحلام؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            دع فريقنا الخبير يخلق لك تجربة سفر مثالية مصممة خصيصًا لك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ar/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              اتصل بنا
            </Link>
            <Link href="/ar/hotels" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              تصفح الفنادق
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}