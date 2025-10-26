import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda - MrForty | Lüks Seyahat',
  description: 'MrForty hakkında Türkiye\'deki lüks seyahat deneyimlerimiz ve taahhüdümüz hakkında daha fazla bilgi edinin.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            Hakkımızda
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Türkiye\'deki lüks seyahat deneyimlerinizde güvenilir partneriniz
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">MrForty Hikayesi</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              MrForty olarak, Türkiye\'nin zengin kültürünü ve nefes kesen manzaralarını lüks ve konforlu bir şekilde yaşamanız için 2010 yılından beri hizmet veriyoruz. Misyonumuz, her seyahatinizin unutulmaz bir deneyim olmasını sağlamak.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Değerlerimiz</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Müşteri memnuniyetini her zaman ön planda tutmak</li>
              <li>• Yerel kültüre saygı ve otantik deneyimler sunmak</li>
              <li>• Sürdürülebilir turizmi desteklemek</li>
              <li>• Kişiselleştirilmiş hizmet kalitesi sunmak</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">Neden MrForty?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Uzman ekibimiz, Türkiye\'nin her köşesini en iyi şekilde bilir ve seyahatinizi hayallerinizdeki gibi tasarlamak için burada. Lüks otellerden özel turlara, VIP transferlerden benzersiz deneyimlere kadar her ayrıntıyı düşünüyoruz.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}