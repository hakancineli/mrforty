import { MapPin, Phone, Mail, Clock, Star, Users, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const team = [
    {
      id: 1,
      name: 'Seyfettin KIRK',
      position: 'General Manager',
      image: '/team/seyfettin.jpg',
      bio: 'With over 15 years of experience in luxury travel and tourism, Seyfettin leads our team with passion and expertise in creating unforgettable journeys for our clients.',
      email: 'seyfettin@mrfortytravel.com',
      phone: '+90 506 641 17 85',
      linkedin: 'https://linkedin.com/in/seyfettin-kirk'
    },
    {
      id: 2,
      name: 'Mehmet KIRK',
      position: 'Tour Guide',
      image: '/team/mehmet.jpg',
      bio: 'Mehmet is our expert tour guide with extensive knowledge of Turkish history and culture. He speaks fluent English, Turkish, and Arabic, making him perfect for international clients.',
      email: 'mehmet@mrfortytravel.com',
      phone: '+90 506 641 17 85',
      linkedin: 'https://linkedin.com/in/mehmet-ozkan'
    },
    {
      id: 3,
      name: 'Elif Demir',
      position: 'Customer Relations',
      image: '/team/elif.jpg',
      bio: 'Elif ensures every client has a seamless experience from booking to travel. Her attention to detail and warm personality makes her the perfect point of contact for our clients.',
      email: 'elif@mrfortytravel.com',
      phone: '+90 506 641 17 85',
      linkedin: 'https://linkedin.com/in/elif-demir'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'IATA Certified',
      description: 'Official IATA certification for international travel services'
    },
    {
      icon: Users,
      title: '10,000+ Happy Clients',
      description: 'Serving travelers from around the world with exceptional experiences'
    },
    {
      icon: Star,
      title: '5-Star Service',
      description: 'Consistently rated 5 stars by our satisfied clients'
    },
    {
      icon: MapPin,
      title: '50+ Destinations',
      description: 'Covering all major tourist destinations in Turkey'
    }
  ]

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
              About MrForty
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Your trusted partner for luxury travel experiences in Turkey
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded in 2010, MrForty started as a small boutique travel agency with a simple mission: to provide exceptional travel experiences that showcase the beauty and culture of Turkey. Over the years, we've grown into a leading luxury travel company, but our core values remain the same: personalized service, attention to detail, and a passion for creating unforgettable memories.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, MrForty represents the pinnacle of Turkish hospitality, combining traditional warmth with modern luxury. Our team of experienced professionals works tirelessly to ensure every journey exceeds expectations, whether it's a romantic getaway, a family vacation, or a business trip.
              </p>
            </div>

            {/* Mission & Values */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To be the premier luxury travel agency in Turkey, creating personalized experiences that showcase the beauty, culture, and hospitality of our country while exceeding our clients' expectations through exceptional service and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.bio}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
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
                        <span>Mon-Fri: 9:00-18:00</span>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Why Choose MrForty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
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
            Ready for Your Dream Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our expert team create the perfect travel experience tailored just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
            <Link href="/hotels" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Browse Hotels
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}