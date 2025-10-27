import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Star, Users, Award, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hakkımızda - MrForty | Lüks Seyahat',
  description: 'MrForty hakkında Türkiye\'deki lüks seyahat deneyimlerimiz ve taahhüdümüz hakkında daha fazla bilgi edinin.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="About MrForty"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Hakkımızda
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Türkiye\'deki lüks seyahat deneyimlerinizde güvenilir partneriniz
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Company Story */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">MrForty Hikayesi</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                2010 yılında küçük bir butik seyahat acentası olarak başlayan MrForty, yıllar içinde Türkiye\'nin zengin kültürünü ve nefes kesen manzaralarını lüks ve konforlu bir şekilde yaşamanız için hizmet veriyoruz. Misyonumuz, her seyahatinizin unutulmaz bir deneyim olmasını sağlamak.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bugün MrForty, Türk misafirperverliğinin zirvesini temsil etmektedir. Geleneksel sıcaklığı modern lüks ile birleştiren deneyimli profesyoneller ekibimiz, her yolculuğun beklentilerini aşmasını ve unutulmaz anılar biriktirmek için gece gündüz çalışmaktadır.
              </p>
            </div>
            
            {/* Mission & Values */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Misyonumuz</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Türkiye\'de önde gelen lüks seyahat acentası olarak, ülkemizin güzelliğini, kültürünü ve misafirperverliğini sergileyen kişiselleştirilmiş deneyimler yaratarak müşterilerimizin beklentilerini aşmak ve detaya gösterilen özenle hizmet sunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Ekibimizle Tanışın</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: 'Seyfettin KIRK',
                position: 'Genel Müdür',
                image: '/team/seyfettin.jpg',
                bio: '15 yıllık lüks seyahat ve turizm alanındaki deneyimiyle, ekibimize tutku ve şevkete geçmeyen yolculuklar yaratma konusunda tutku ve uzmanlıkla liderlik eden Seyfettin, MrForty\'in kalbi ve ruhudur.',
                email: 'seyfettin@mrfortytravel.com',
                phone: '+90 506 641 17 85',
                linkedin: 'https://linkedin.com/in/seyfettin-kirk'
              },
              {
                id: 2,
                name: 'Mehmet KIRK',
                position: 'Tur Rehberi',
                image: '/team/mehmet.jpg',
                bio: 'Mehmet, Türkiye tarih ve kültürü konusunda geniş bilgiye sahip uzman rehberimizdir. Akıcı İngilizce, Türkçe ve Arapça konuşması, onu uluslararası müşteriler için mükemmel bir rehber yapmaktadır.',
                email: 'mehmet@mrfortytravel.com',
                phone: '+90 506 641 17 85',
                linkedin: 'https://linkedin.com/in/mehmet-ozkan'
              },
             
            ].map((member) => (
              <div key={member.id} className="text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.position}</p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm mt-4">
                      {member.id === 1 || member.id === 2 ? (
                        <>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Mail className="w-4 h-4" />
                            <span>{member.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{member.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>Pazartesi-Cuma: 09:00-18:00</span>
                          </div>
                        </>
                      ) : null}
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Neden MrForty?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'IATA Sertifikalı',
                description: 'Uluslararası seyahat hizmetleri için resmi IATA sertifikası'
              },
              {
                icon: Users,
                title: '10.000+ Mutlu Müşteri',
                description: 'Dünyanın dört bir yanından istisnai deneyimler sunuyoruz'
              },
              {
                icon: Star,
                title: '5 Yıldızlı Hizmet',
                description: 'Memnun müşterilerimiz tarafından sürekli olarak 5 yıldız olarak değerlendiriliyoruz'
              },
              {
                icon: MapPin,
                title: '50+ Varış Noktası',
                description: 'Türkiye\'deki tüm önemli turistik destinasyonları kapsıyoruz'
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
            Hayalinizdeki Yolculuk İçin Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Uzman ekibimiz, sizin için mükemmel bir seyahat deneyimi tasarlamak için burada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tr/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Bize Ulaşın
            </Link>
            <Link href="/tr/hotels" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Otellere Göz Atın
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}