import { Metadata } from 'next'

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
    </div>
  )
}