'use client'

import { MapPin, Calendar, Clock, Star, ChevronLeft, Heart, Share2, User, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import BookingModal from '@/components/BookingModal'

// Dinamik veri - gerçek uygulamada bu API'den gelecek
const getExperienceData = (id: string) => {
  const experiences: Record<string, any> = {
    '1': {
      id: 1,
      title: "Gökyüzünde Şafak: Kapadokya Balon Deneyimi",
      author: "Ayşe Yılmaz",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "Seyahat yazarı ve macera sever. 10+ yıllık deneyimle Türkiye'nin en güzel yerlerini keşfediyor.",
      date: "15 Ekim 2024",
      readTime: "5 dk okuma",
      location: "Kapadokya",
      duration: "3 saat",
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg",
      category: "macera",
      difficulty: "orta",
      groupSize: "4-16",
      highlights: ["Şafak Vuruşu", "Peri Bacaları", "Şampanya Kahvaltısı"],
      excerpt: "Binlerce balonun gökyüzünü renklendirdiği o büyülü anı yaşayın. Kapadokya'nın peri bacaları üzerinde süzülürken gün doğumunun büyüsüne tanık olun...",
      content: `
        <h2>Gökyüzünden Güneşi Karşılama: Büyülü Bir Şafak Deneyimi</h2>
        <p>Kapadokya'da balonla uçmak sadece bir aktivite değil, ruhunuza dokunan hayat boyu unutulmayacak bir deneyim. Sabahın erken saatlerinde kalkıp balon alanına vardığınızda, yükselen güneşin arka planında onlarca balonun aynı anda şiştiğini izlemek başlı başına bir şölen. Bu eşsiz deneyim, günün ilk ışıkları gökyüzünü sıcak tonlarla boyarken, yerden yüzlerce metre yukarıdan doğanın en etkileyici sabah şovunu izleme fırsatı sunar.</p>
        
        <h3>Şafak Uçuşunun Büyüsü</h3>
        <p>Neden şafak vakti? Çünkü bu doğanın en muhteşem gösterisini sergilediği andır. Sabahın ilk ışıklarıyla havalanan balonlarımız, gün doğumunun en güzel anlarını yakalamanız için tasarlandı. Sabahın erken saatlerindeki rüzgarsız havada sıcak hava balonları sessizce süzülerek size Kapadokya'nın eşsiz manzaralarında kesintisiz görüntüler sunar. Yaklaşık bir saat süren bu yolculukta, aşağıdaki peri bacalarının ve vadilerin yavaşça aydınlanmasını izlerken rüya gibi süzüldüğünüzü hissedeceksiniz.</p>
        
        <h3>Yolculuğunuz Boyunca Sizi Neler Bekliyor</h3>
        <p>Balon maceranız sabahın erken saatlerinde otel transfer hizmetiyle başlar. Kalkış alanına vardığınızda, sıcak hava ile dolarken büyüyüp büyüyen balonunuzu hayranlıkla izleyeceksiniz. Deneyimli pilotunuzdan kapsamlı güvenlik brifinginin ardından hasır sepetine adımlayacak ve gökyüzüne nazikçe yükselişe başlayacaksınız. Uçuş genellikle 45-60 dakika sürer ve bu süre boyunca Kapadokya'nın en etkileyici manzaraları üzerinde rüzgar akıntılarıyla süzüleceksiniz.</p>
        
        <h3>Tam Hizmet Paketi</h3>
        <ul>
          <li><strong>Otel Transfer Hizmeti:</strong> Otelinizden kalkış alanına ve dönüş için konforlu ulaşım</li>
          <li><strong>Profesyonel Pilot Deneyimi:</strong> Uluslararası sertifikalı, deneyimli pilotlar tarafından gerçekleştirilen uçuşlar</li>
          <li><strong>Kapsamlı Güvenlik Brifingi:</strong> Detaylı talimatlar ve güvenlik ekipmanları sağlanır</li>
          <li><strong>Şampanya Kutlaması:</strong> İniş sonrası geleneksel şampanya kadehı ve hafif kahvaltı</li>
          <li><strong>Anı Uçuş Sertifikası:</strong> Özel gününüzü hatırlamak için kişiselleştirilmiş sertifika</li>
          <li><strong>Tam Sigorta Kapsamı:</strong> Deneyiminiz boyunca tam sigorta kapsamı</li>
        </ul>
        
        <h3>Spectatüler Uçuş Rotası</h3>
        <p>Peri bacaları, Ihlara Vadisi ve Selime Manastırı'nın üzerinde süzüleceğiniz bu büyülü rotada, Kapadokya'nın 3000 yıllık tarihini ve doğal güzelliklerini kuşbakışı göreceksiniz. Pilotunuz rüzgar akıntılarını kullanarak bölgenin en etkileyici oluşumlarını sergileyecek şekilde navigasyon yapacak. Aşk Vadisi, Kızıl Vadi ve diğer ikonik konumların üzerinde süzülecek, bu başka dünyal manzaranın özünü yakalayan fotoğraf çekimleri için bol fırsatlar sunacak. Uçuş yolu günlük rüzgar koşullarına göre değişir, bu sayede her yolculuk benzersiz olur ve Kapadokya'nın en iyi özelliklerini sergileyecek şekilde tasarlanır.</p>
        
        <h3>Deneyim İçin En İyi Zaman</h3>
        <p>Kapadokya'da yıl boyunca balon uçuşları olsa da, en iyi koşullar genellikle hava modellerinin en elverişli olduğu Nisan'dan Kasım'a kadar gerçekleşir. İlkbahar ve sonbahar, özellikle açan çiçekler veya sonbahar renkleriyle zaten dramatik olan manzarayı daha da etkileyici hale getirir. Uçuşlar, hava izin verdiği sürece, genellikle gün doğumunda, en sakin hava koşullarından yararlanmak üzere çalışır ve kalkış zamanları genellikle gün doğumu civarındadır.</p>
        
        <h3>Bu Deneyim Neden Özel</h3>
        <p>Kapadokya balon uçuşlarını özel kılan şey; doğal harika, kültürel önem ve kişisel dönüşümün birleşimidir. Bu sadece bir gezinti turu değil - sizi uçuşun kadim gelenekleriyle buluşturan ve ömür boyu hatırlanan anılar yaratan bir yolculuktur. Yerin yüzlerce metre üzerinde sessizce süzülmenin huzuru, sadece ara sıra yanıcı patlamayla bozulur, diğer pek çok maceranın eşleştiremediği meditatif bir deneyim sunar. Aşağıdaki manzaranın uyanışını izlerken, bu bölgenin binlerce yıldır ziyaretçileri neden ilhamlandırdığını ve sıcak hava balonculuğunun neden Kapadokya'nın temel deneyimi haline geldiğini anlayacaksınız.</p>
      `,
      tags: ["kapadokya", "balon turu", "şafak", "macera"],
      gallery: [
        "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg",
        "/images/destinations/cappadocia.jpg",
        "/images/destinations/cappadocia.jpg"
      ],
      relatedExperiences: [
        { id: 2, title: "Ege'nin Mavi Sularında Özel Yat Serüveni", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" },
        { id: 3, title: "Osmanlı Gizemi: Geleneksel Türk Hamamı Ritüeli", image: "/team/seyfettin.jpg" }
      ]
    },
    '2': {
      id: 2,
      title: "Ege'nin Mavi Sularında Özel Yat Serüveni",
      author: "Mehmet Kaya",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "Deniz tutkunu ve kaptan. 15 yıldır Ege ve Akdeniz'de özel yat turları düzenliyor.",
      date: "12 Ekim 2024",
      readTime: "7 dk okuma",
      location: "Bodrum",
      duration: "Tam gün",
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg",
      category: "lüks",
      difficulty: "kolay",
      groupSize: "2-8",
      highlights: ["Özel Yat", "Yüzme Koyları", "Gurme Öğle Yemeği"],
      excerpt: "Ege'nin turkuaz sularında özel yatınızla koyları keşfedin. Profesyonel mürettebat eşliğinde unutulmaz bir mavi yolculuk deneyimi yaşayın...",
      content: `
        <h2>Ege'nin İncileri: Özel Yat Turu</h2>
        <p>Bodrum'dan kalkan özel yatımızla Ege'nin en güzel koylarını keşfe çıkıyoruz. Sabah erken saatlerde limandan ayrılırken, gün batımına kadar sürecek bu mavi serüvenin heyecanı içimizi kaplıyor.</p>
        
        <h3>Özel Yatın Avantajları</h3>
        <p>Kendi özel yatınızla seyahat etmek, size tam özgürlük sunar. Rotayı birlikte belirleyebilir, istediğiniz koyda durabilir ve kendi temponuzda tatil yapabilirsiniz.</p>
        
        <h3>Günlük Program</h3>
        <ul>
          <li>09:00 - Bodrum limanından kalkış</li>
          <li>10:30 - Karaada Koyu'nda kahvaltı ve yüzme molası</li>
          <li>13:00 - Orak Adası'nda öğle yemeği</li>
          <li>15:30 - Cennet Koyu'nda yüzme ve güneşlenme</li>
          <li>18:00 - Bodrum'a dönüş</li>
        </ul>
        
        <h3>Yat Özellikleri</h3>
        <p>12 metre uzunluğundaki lüks yatımız, 4 kabin, 2 tuvalet, tam donanımlı mutfak ve geniş güverte alanına sahiptir. Profesyonel mürettebatımız konforunuz ve güvenliğiniz için hizmetinizdedir.</p>
      `,
      tags: ["bodrum", "yat turu", "ege", "mavi yolculuk"],
      gallery: [
        "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg",
        "/images/destinations/bodrum.jpg",
        "/images/destinations/bodrum.jpg"
      ],
      relatedExperiences: [
        { id: 1, title: "Gökyüzünde Şafak: Kapadokya Balon Deneyimi", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 4, title: "Beyaz Cennet Üzerinde Uçmak: Pamukkale Paraşüt Deneyimi", image: "/images/destinations/pamukkale.jpg" }
      ]
    },
    '3': {
      id: 3,
      title: "Osmanlı Gizemi: Geleneksel Türk Hamamı Ritüeli",
      author: "Zeynep Demir",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "Kültür tarihçisi ve geleneksel tedavi uzmanı. Osmanlı hamam kültürünü modern yaklaşımla birleştiriyor.",
      date: "10 Ekim 2024",
      readTime: "4 dk okuma",
      location: "İstanbul",
      duration: "2 saat",
      price: 85,
      rating: 4.7,
      reviews: 198,
      image: "/images/destinations/istanbul.jpg",
      category: "kültürel",
      difficulty: "kolay",
      groupSize: "2-6",
      highlights: ["Tarihi Hamam", "Geleneksel Masaj", "Aromatik Yağlar"],
      excerpt: "Yüzyıllardır süregelen Türk hamamı kültürünü deneyimleyin. Vücudunuzun ve ruhunuzun yenilendiği bu geleneksel ritüelle günün stresini atın...",
      content: `
        <h2>Osmanlı Mirasının Kalbi: Otantik Türk Hamamı Ritüeli</h2>
        <p>Yaşayan bir wellness müzesine adım atın, burada yüzyılların Osmanlı geleneği hayat bulmaya devam ediyor. İstanbul'un tarihi semtlerindeki bu atmosferik hamamlarda, 600 yıldan fazla bir süredir neredeyse değişmemiş bir ritüele tanık olacaksınız. Muhteşem mermer kurnalardan yükselen buhar, tellakların (hamam görevlileri) ustane hareketleri ve bu duvarlardaki yankılar, sadece temizliğin ötesinde bir deneyim sunar—Türkiye'nin zengin kültürel mirasından geçen bir yolculuk.</p>
        
        <h3>Hamamın Kültürel Önemi</h3>
        <p>Türk hamamı sadece bir arındırma ritüeli değil; Osmanlı toplumunun temel taşı olan gelişmiş bir sosyal kültürü temsil eder. Bu gelenek sadece fiziksel temizlikten ibaret değildi; iş anlaşmaların yapıldığı, dostlukların kurulduğu ve toplulum bağlarının güçlendirildiği bir yerdi. Bugün bu değerli gelenek, otantik uygulamaları korurken otantik uygulamaları sürdürerek yaşatılmaktadır ve nesiller boyunca adanmış uygulamalar tarafından kuşaklara aktarılmaktadır.</p>
        
        <h3>Terapötik Sağlık Faydaları</h3>
        <p>Derhal rahatlama hissinin ötesinde, Türk hamamı geleneksel wellness uygulamalarının temel taşı haline gelen birçok bilimsel olarak tanınan sağlık faydası Sunar:</p>
        <ul>
          <li><strong>Geliştirilmiş Dolaşım:</strong> Isı ve buhar kombinasyonu kan akışını uyarır, kardiyovasküler fonksiyonu iyileştirir ve vücuda oksijen zengin kan taşır</li>
          <li><strong>Cilt Yenilenmesi ve Detoksifikasyon:</strong> Derin temizlik ölü hücreleri uzatırır ve gözenekleri açar, hücresel yenilenmeyi teşvik eder ve cildinize sağlıklı, parlak bir görünüm kazandırır</li>
          <li><strong>Kas ve Eklem Ağrısı Rahatlatması:</strong> Terapötik ısı, kronik ağrıyı hafifletir, iltihabı azaltır ve artrit ve romatizmal durumlar için rahatlama sağlar</li>
          <li><strong>Stres Azaltması ve Zihinsel Berrinlik:</strong> Sakin çevre ve ritmik masaj teknikleri kortizol seviyelerini düşürürken endorfin salınımını teşvik eder, derin bir iyilik hali yaratır</li>
        </ul>
        
        <h3>Geleneksel Ritüelin Beş Aşaması</h3>
        <p>Hamam deneyiminiz, yüzyıllar boyunca mükemmelleştirilmiş ve hem pratik hem de sembolik amaçlar Sunan dikkatle korunmuş bir sırayı izler:</p>
        <ul>
          <li><strong>Isınma Bölümünde Hazırlık:</strong> Hararet (ısınma alanında) başlayın, vücudunuz artan sıcaklığa kademeli olarak adapte olur ve önünüzdeki temizleme ritüeline hazırlanır</li>
          <li><strong>Kese ile Peeling:</strong> Özel dokunulmuş eldiven kullanılan geleneksel kese ritüelini deneyimleyin, görevliniz dolaşımı uyarırken ve taze, yenilenmiş cildi ortaya çıkarır</li>
          <li><strong>Köpük Masajı ve Köpük:</strong> Özel bir kumaş torbası (köpük) kullanılarak kokulu sabun köpüklerinin bulutları uygulanmasını ve ardından gerginlik serbest bırakmak için uzman masaj tekniklerinin tadını çıkarın</li>
          <li><strong>Yıkanma ve Dinlenme:</strong> Ilık su ile kapsamlı bir temizlik takiben, önceki tedavilerin tam faydalarını almak için dinlenme dönemi</li>
          <li><strong>Aromatik Yağlarla Masaj:</strong> Ritüeli, geleneksel Türk wellness uygulamalarıyla bağlantısı olan ve her birinin benzersiz terapötik özellikleri için özel olarak seçilmiş aromatik yağlarla nazikçe bir masajla sonlandırır</li>
        </ul>
        
        <h3>Temel Deneyimin Ötesinde</h3>
        <p>Türk hamamı deneyimimiz standart tedavilerin ötesine otantik dokunuşlar Sunar. Osmanlı tazelemeleri arasında aşamalardan geleneksel Osmanlı ikramları sunmaktan, hamam evindeki çeşitli mimari unsurların ve sembollerin tarihi önemini öğrenme fırsatı, yerel olarak temin edilmiş otlar ve esansiyallerle opsiyonel aromaterapi seanslarına kadar—her unsur, daha derin kültürel anlayış ve gelişmiş rahatlama sağlamak için tasarlanmıştır.</p>
      `,
      tags: ["istanbul", "türk hamamı", "kültür", "rahatlama"],
      gallery: [
        "/images/destinations/istanbul.jpg",
        "/team/seyfettin.jpg",
        "/images/destinations/istanbul.jpg"
      ],
      relatedExperiences: [
        { id: 1, title: "Gökyüzünde Şafak: Kapadokya Balon Deneyimi", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 5, title: "İstanbul'un Lezzet Haritası: Gurme Sokak Yemeği Turu", image: "/images/destinations/istanbul.jpg" }
      ]
    },
    '4': {
      id: 4,
      title: "Beyaz Cennet Üzerinde Uçmak: Pamukkale Paraşüt Deneyimi",
      author: "Can Özkan",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "Adrenalin tutkunu ve paraşüt pilotu. 10+ yıldır Türkiye'nin en güzel manzaralarında uçuşlar yapıyor.",
      date: "8 Ekim 2024",
      readTime: "6 dk okuma",
      location: "Pamukkale",
      duration: "Yarım gün",
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: "/images/destinations/pamukkale.jpg",
      category: "macera",
      difficulty: "orta",
      groupSize: "2-12",
      highlights: ["Termal Havuzlar", "Beyaz Teraslar", "Antik Harabeler"],
      excerpt: "Dünyanın en güzel manzaralarından biri olan Pamukkale'nin beyaz travertenleri üzerinde paraşütle süzülün. Bu eşsiz deneyimle adrenalin ve doğayı birleştirin...",
      content: `
        <h2>Pamukkale'nin Üzerinde Uçmak: Beyaz Cennet Üzerinde Havacılık Macerası</h2>
        <p>Sıradan seyahat deneyimlerinin sınırlarını aşan bir havacılık macerasına hazırlanın. Pamukkale'nin efsanevi beyaz traverten terasları üzerinde paraşütle süzerek, hayal gücünün ötesinde bir bakış açısı Sunar. Profesyonel pilotunuzla birlikte Türk gökyüzüne yükseldiğinizde, altınızda uzanan beyaz cennetinin büyüsüne kapılacaksınız—binlerce yıldır ziyaretçileri büyülemiş ve tüm tanık olanları ilhamlandıran doğal bir harika.</p>
        
        <h3>Pamukkale'nin Jeolojik Harikası</h3>
        <p>Haklı olarak UNESCO Dünya Mirası Sitesi olarak belirlenen Pamukkale, Dünya'nin en olağanüstü doğal Olgularinden birini ve Türkiye'nin doğal güzellik tacıdır. Kalsiyum zengin mineral kaynakları tarafından binlerce yıl boyunca oluşan bu şelale beyaz traverten terasları, o kadar eşsiz bir manzara yaratır ki diğer dünyalı görünür. Paraşütle, bu jeolojik başyapıyı takdir etme için en üstün bakış açısını Sunar. Havai bakış açınızdan, bu doğal haritanın tam ölçeğini ve antik medeniyetlerin neden bu yeri kutsal saydığını anlayacaksınız.</p>
        
        <h3>Paraşütle Havacılık Macera Deneyiminiz</h3>
        <p>Havai Yolculuğunuz kapsamlı hazırlık ve uzman rehberlik eşliğinde devam eder:</p>
        <ul>
          <li><strong>Uzman Pilot Rehberliği:</strong> Türkiye'nin çeşitli hava koşullarında ve coğrafi arazilerde binlerce saatlik uçuş kaydı olan uluslararası sertifikalı paraşüt pilotlarıyla uçun</li>
          <li><strong>Kapsamlı Güvenlik Hazırlığı:</strong> Ekipman kullanımı, uçuş teknikleri ve acil durumlar için kapsamlı ön-uçuş brifingi, artı her uçuştan önce kontrol edilen üstün kaliteli güvenlik ekipmanları</li>
          <li><strong>Genişletilmiş Uçuş Süresi:</strong> Panoramik manzaraları emme ve fotoğraf çekmek için yeterli fırsat Sunan 15-20 dakikalık kesintisiz uçuş süresi</li>
          <li><strong>360 Derecelik Panoramik Vista:</strong> Süzerek tam dönüşsel özgürlük Sunar, teraslar, antik harabeler ve çevre kırsının engelsiz görüntülerini</li>
          <li><strong>Profesyonel Fotoğraf Paketi:</strong> Eşsiz havai açılardan fotoğraf ve video çekimi imkanı Sunan opsiyonel hizmetimizden yararlanın</li>
        </ul>
        
        <h3>En Üstün Güvenlik Taahhüdü</h3>
        <p>Güvenliğiniz ve huzurunuz bizim için müzak edilemez önceliklerimizdir. Paraşütle operasyonlarımızimizin her aspecti, en katı uluslararası güvenlik standartlarına uyar. Ekipmanlarımız düzenli bakım ve sertifikasyon kontrollerinden geçer, pilotlarımızımız en son güvenlik protokollerine kalmak için sürekli eğitim programlarına katılır. Hava Koşulları dikkatle izlenir ve uçuşlar sadece katı gereksinimleri karşıladığında gerçekleştirilir. İster yeni başlayan olun, ister deneyimli bir pilot olun, her seviye için deneyiminizi özelleştirirken maksimum güvenlik ve keyif Sunmağa adanırız.</p>
        
        <h3>Yüzeyin Ötesinde - Tam Deneyim</h3>
        <p>Pamukkale paraşütle deneyiminiz sadece uçuşun kendisini aşar. Konaklamanızdan deniz manzaralı odaya kadar kapsamlı paketler Sunuyoruz. Terasların tabanındaki antik Hierapolis harabelerine opsiyonel rehberli turlar, günü sonlandırmak için en iyi yerel restoran önerileri dahil ediyoruz. Taahhüdümüz, Türkiye'nin en güzel kıyı bölgelerinden birinde tam daldırma, sizi rahat, güven ve tam memnuniyetle her anı yaşatırken birkaç adım ötesine geçerek bu olağanüstü doğal hazinelerle derin bağ kurmaktır.</p>
      `,
      tags: ["pamukkale", "paraşüt", "macera", "doğa"],
      gallery: [
        "/images/destinations/pamukkale.jpg",
        "/images/destinations/pamukkale.jpg",
        "/images/destinations/pamukkale.jpg"
      ],
      relatedExperiences: [
        { id: 1, title: "Gökyüzünde Şafak: Kapadokya Balon Deneyimi", image: "/tours/Cappadocia Hot Air Balloon/Cappadocia Hot Air Balloon.jpeg" },
        { id: 2, title: "Ege'nin Mavi Sularında Özel Yat Serüveni", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" }
      ]
    },
    '5': {
      id: 5,
      title: "İstanbul'un Lezzet Haritası: Gurme Sokak Yemeği Turu",
      author: "Elif Aksoy",
      authorAvatar: "/team/mehmet.jpg",
      authorBio: "Gastronomi yazarı ve şef. İstanbul'un sokak lezzetlerini 15+ yıldır keşfediyor.",
      date: "5 Ekim 2024",
      readTime: "8 dk okuma",
      location: "İstanbul",
      duration: "4 saat",
      price: 120,
      rating: 4.6,
      reviews: 156,
      image: "/images/destinations/istanbul.jpg",
      category: "gastronomi",
      difficulty: "kolay",
      groupSize: "4-12",
      highlights: ["Yerel Pazarlar", "Sokak Lezzetleri", "Geleneksel Restoranlar"],
      excerpt: "İstanbul'un gizli lezzetlerini keşfedin. Tarihi yarımada'dan başlayarak şehrin en iyi sokak yemeklerini ve yerel lezzetlerini tadın...",
      content: `
        <h2>İstanbul'un Sokak Lezzetleri</h2>
        <p>İstanbul'da yemek yemek sadece karnını doyurmak değil, aynı zamanda kültürel bir yolculuk. Sabah erken saatlerde Eminönü'nde başlayan turumuzda, balık ekmekten midyeye, baklavadan Turkish delight'a...</p>
        
        <h3>Lezzet Rotaları</h3>
        <ul>
          <li>Eminönü - Balık ekmek ve turşu</li>
          <li>Karaköy - İskender ve döner</li>
          <li>Fatih - Sultanahmet ve çiğ köfte</li>
          <li>Kadıköy - Çiğ köfte ve kebap</li>
          <li>Beyoğlu - İstanbullu tatlılar</li>
        </ul>
        
        <h3>Yerel Pazarlar</h3>
        <p>Turumuzda yerel pazarları da ziyaret edeceğiz. Burada taze meyve, sebzeler, peynirler ve diğer yerel ürünleri tanıma fırsatı bulacaksınız.</p>
      `,
      tags: ["istanbul", "yemek turu", "gastronomi", "sokak lezzetleri"],
      gallery: [
        "/experiences-gallery/:experiences:1 /gurme-sokak-lezzetleri-1.jpeg",
        "/experiences-gallery/:experiences:1 /gurme-sokak-lezzetleri-2.jpeg",
        "/experiences-gallery/:experiences:1 /gurme-sokak-lezzetleri-3.jpeg"
      ],
      relatedExperiences: [
        { id: 3, title: "Osmanlı Gizemi: Geleneksel Türk Hamamı Ritüeli", image: "/team/seyfettin.jpg" },
        { id: 6, title: "Akdeniz'in Sır Perdesi: Kaş Dalış Macerası", image: "/images/destinations/bodrum.jpg" }
      ]
    },
    '6': {
      id: 6,
      title: "Akdeniz'in Sır Perdesi: Kaş Dalış Macerası",
      author: "Barış Yıldız",
      authorAvatar: "/team/seyfettin.jpg",
      authorBio: "Dalış eğitmeni ve su altı macera sever. 15+ yıldır Akdeniz'in sular altındaki güzellikleri keşfediyor.",
      date: "3 Ekim 2024",
      readTime: "9 dk okuma",
      location: "Kaş",
      duration: "Tam gün",
      price: 180,
      rating: 4.9,
      reviews: 89,
      image: "/images/destinations/bodrum.jpg",
      category: "macera",
      difficulty: "orta",
      groupSize: "2-8",
      highlights: ["Kristal Berraklığında Sular", "Deniz Yaşamı", "Profesyonel Eğitmen"],
      excerpt: "Akdeniz'in sular altındaki güzelliklerini keşfedin. Kaş'ın berrak sularında profesyonel eğitmen eşliğinde unutulmaz bir dalış deneyimi yaşayın...",
      content: `
        <h2>Akdeniz'in Mavi Sularında Keşif</h2>
        <p>Kaş, Türkiye'nin dalış cennetlerinden biridir. Kristal berraklığında suları, zengin deniz yaşamını ve batıklarıyla dalış tutkunları için gerçek bir cennet. Sabah erken saatlerde dalış merkezine vardığımızda...</p>
        
        <h3>Dalış Noktaları</h3>
        <ul>
          <li>Blue Cave - Mağara dalışı</li>
          <li>Uluburun - Batık dalışı</li>
          <li>Fener Koyu - Akşam dalışı</li>
          <li>Kekova Adası - Tekne ile ulaşım</li>
        </ul>
        
        <h3>Deniz Yaşamı</h3>
        <p>Kaş'ın sularında Akdeniz'e özgün birçok balık, ahtapot ve diğer deniz canlısını görebilirsiniz. Renkli mercanlar ve balık sürüleri, dalış deneyiminizi daha da unutulmaz kılar.</p>
      `,
      tags: ["kaş", "dalış", "akdeniz", "su altı"],
      gallery: [
        "/images/destinations/bodrum.jpg",
        "/images/destinations/bodrum.jpg",
        "/images/destinations/bodrum.jpg"
      ],
      relatedExperiences: [
        { id: 2, title: "Ege'nin Mavi Sularında Özel Yat Serüveni", image: "/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk üst Görsel.jpeg" },
        { id: 4, title: "Beyaz Cennet Üzerinde Uçmak: Pamukkale Paraşüt Deneyimi", image: "/images/destinations/pamukkale.jpg" }
      ]
    }
  }

  return experiences[id] || null
}

export default function TrExperienceDetailPage({ params }: { params: { id: string } }) {
  const experience = getExperienceData(params.id)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  if (!experience) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Deneyim Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız deneyim mevcut değil veya kaldırılmış olabilir.</p>
          <Link href="/tr/experiences" className="btn-tertiary">
            Tüm Deneyimlere Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-tertiary-600 to-tertiary-800">
        <div className="absolute inset-0">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl">
            <div className="mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                {experience.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
              {experience.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{experience.rating} ({experience.reviews} değerlendirme)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/tr/experiences" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-5 h-5" />
              Deneyimlere Dön
            </Link>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
                <Heart className="w-5 h-5" />
                Favorilere Ekle
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                <Share2 className="w-5 h-5" />
                Paylaş
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            {/* Author Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src={experience.authorAvatar}
                    alt={experience.author}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{experience.author}</h3>
                  <p className="text-sm text-gray-600">{experience.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{experience.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: experience.content }}
              />
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-6">Fotoğraf Galerisi</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.gallery.map((image: string, index: number) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${experience.title} - ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Yorumlar ({experience.reviews})</h3>
              
              {/* Comment Form */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <input
                    type="text"
                    placeholder="Adınız..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Yorumunuz..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent mb-3"
                />
                <button className="btn-tertiary">
                  Yorum Yap
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ahmet Demir</p>
                      <p className="text-sm text-gray-500">2 gün önce</p>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">
                    Harika bir deneyimdi! Özellikle gün doğumunu balondan izlemek inanılmazdı. Kesinlikle tavsiye ederim.
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Ayşe Kaya</p>
                      <p className="text-sm text-gray-500">1 hafta önce</p>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">
                    Profesyonel ekip ve güvenli uçuş. Manzaralar için her şeye değer!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 lg:sticky lg:top-24 lg:z-10">
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-tertiary-600">€{experience.price}</p>
                <p className="text-gray-600">kişi başı</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Süre</span>
                  <span className="font-medium">{experience.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Grup büyüklüğü</span>
                  <span className="font-medium">{experience.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Zorluk</span>
                  <span className="font-medium">{experience.difficulty}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Öne Çıkanlar</h4>
                <div className="space-y-2">
                  {experience.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-tertiary-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full btn-tertiary mb-3">
                Şimdi Rezervasyon Yap
              </button>
              <button
                onClick={() => window.open(`https://wa.me/9050641785?text=Merhaba, ${experience.title} hakkında bilgi almak istiyorum.`, '_blank')}
                className="w-full border border-tertiary-600 text-tertiary-600 py-3 rounded-lg font-semibold hover:bg-tertiary-50 transition-colors flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.9-5.7a2 2 0 0 1 .3-1.47l8.8-8.8a2 2 0 0 1 1.47-.3L21 3"/>
                  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0-2z"/>
                  <path d="M21 3l-6 6m0-6v6m0-6H9"/>
                </svg>
                WhatsApp ile İletişim
              </button>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Experiences */}
            <div className="bg-white rounded-xl shadow-lg p-6 relative lg:z-0">
              <h3 className="text-lg font-semibold mb-4">İlgili Deneyimler</h3>
              <div className="space-y-4">
                {experience.relatedExperiences.map((related: any, index: number) => (
                  <Link key={index} href={`/tr/experiences/${related.id}`} className="block group">
                    <div className="flex gap-3">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-tertiary-600 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <ArrowRight className="w-4 h-4 text-tertiary-600 mt-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}