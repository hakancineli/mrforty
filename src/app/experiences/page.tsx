import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight, Heart, Camera, Mountain, Ship } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ExperiencesPage() {
  const experiences = [
    {
      id: 1,
      title: 'Hot Air Balloon at Sunrise',
      location: 'Cappadocia',
      duration: '3 hours',
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/experiences/hot-air-balloon.jpg',
      category: 'adventure',
      difficulty: 'moderate',
      groupSize: '4-16',
      highlights: ['Sunrise Flight', 'Fairy Chimneys', 'Champagne Breakfast'],
      description: 'Experience the magic of Cappadocia from above with our sunrise hot air balloon flight.'
    },
    {
      id: 2,
      title: 'Private Yacht Tour',
      location: 'Bodrum',
      duration: 'Full day',
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: '/experiences/yacht-tour.jpg',
      category: 'luxury',
      difficulty: 'easy',
      groupSize: '2-8',
      highlights: ['Private Yacht', 'Swimming Bays', 'Gourmet Lunch'],
      description: 'Sail the turquoise waters of the Aegean Sea on your private luxury yacht with professional crew.'
    },
    {
      id: 3,
      title: 'Turkish Bath Experience',
      location: 'Istanbul',
      duration: '2 hours',
      price: 85,
      rating: 4.7,
      reviews: 198,
      image: '/experiences/turkish-bath.jpg',
      category: 'cultural',
      difficulty: 'easy',
      groupSize: '2-6',
      highlights: ['Historic Hammam', 'Traditional Massage', 'Aromatic Oils'],
      description: 'Relax and rejuvenate with our authentic Turkish bath experience including traditional massage and aromatic oils.'
    },
    {
      id: 4,
      title: 'Paragliding Over Pamukkale',
      location: 'Pamukkale',
      duration: 'Half day',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/experiences/paragliding.jpg',
      category: 'adventure',
      difficulty: 'moderate',
      groupSize: '2-12',
      highlights: ['Thermal Pools', 'White Terraces', 'Ancient Ruins'],
      description: 'Soar above the stunning white travertine terraces of Pamukkale with our professional paragliding experience.'
    },
    {
      id: 5,
      title: 'Gourmet Food Tour',
      location: 'Istanbul',
      duration: '4 hours',
      price: 120,
      rating: 4.6,
      reviews: 156,
      image: '/experiences/food-tour.jpg',
      category: 'culinary',
      difficulty: 'easy',
      groupSize: '4-12',
      highlights: ['Local Markets', 'Street Food', 'Traditional Restaurants'],
      description: 'Discover the rich flavors of Turkish cuisine with our guided food tour through local markets and traditional restaurants.'
    },
    {
      id: 6,
      title: 'Diving in Kas',
      location: 'Kas',
      duration: 'Full day',
      price: 180,
      rating: 4.9,
      reviews: 89,
      image: '/experiences/diving.jpg',
      category: 'adventure',
      difficulty: 'moderate',
      groupSize: '2-8',
      highlights: ['Crystal Waters', 'Marine Life', 'Professional Instructor'],
      description: 'Explore the underwater world of the Mediterranean Sea with our professional diving experience in the crystal-clear waters of Kas.'
    }
  ]

  const categories = [
    { value: 'all', label: 'All Experiences', icon: Heart },
    { value: 'adventure', label: 'Adventure', icon: Mountain },
    { value: 'cultural', label: 'Cultural', icon: Camera },
    { value: 'culinary', label: 'Culinary', icon: Ship },
    { value: 'luxury', label: 'Luxury', icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-tertiary-600 to-tertiary-800">
        <div className="absolute inset-0">
          <Image
            src="/experiences-hero.jpg"
            alt="Experiences Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Unique Experiences in Turkey
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              From hot air balloon rides to private yacht tours, discover unforgettable experiences
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
                placeholder="Search experiences..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent appearance-none" title="Experience Category">
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
                placeholder="All destinations"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Any date"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent appearance-none" title="Number of Guests">
                <option>1-2 Guests</option>
                <option>3-6 Guests</option>
                <option>7+ Guests</option>
              </select>
            </div>
            
            <button className="btn-tertiary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search Experiences
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{experiences.length}</span> amazing experiences
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sort by: Recommended</button>
            <button className="text-gray-600 hover:text-gray-900">Price: Low to High</button>
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
                  <span className="text-sm font-semibold text-tertiary-600">${experience.price}€</span>
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
                      <span className="text-xs text-gray-500">+{experience.highlights.length - 2} more</span>
                    )}
                  </div>
                  <Link 
                    href={`/experiences/${experience.id}`}
                    className="btn-tertiary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    View Details
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
            Create Your Perfect Experience
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our travel experts design a custom experience just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-tertiary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Custom Experience
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-tertiary-600 transition-colors">
              Contact Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}