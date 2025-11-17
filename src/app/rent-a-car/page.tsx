import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Users, Fuel, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rent A Car - Premium Car Rental Services | MrForty Travel',
  description: 'Explore our premium car rental fleet including BMW, Audi, Mercedes, Range Rover, Porsche and Volkswagen Passat. Daily, weekly and monthly rental options available.',
}

export default function RentACarPage() {
  const cars = [
    {
      id: 'bmw',
      name: 'BMW 7 Series',
      category: 'Luxury Sedan',
      image: '/rent-a-car/bmw-7-series.jpg',
      features: ['4 Passengers', 'Automatic', 'Hybrid', 'Leather Seats'],
      dailyPrice: '$250',
      weeklyPrice: '$1,500',
      monthlyPrice: '$5,000'
    },
    {
      id: 'audi',
      name: 'Audi A8',
      category: 'Luxury Sedan',
      image: '/rent-a-car/audi-a8.jpg',
      features: ['4 Passengers', 'Automatic', 'Petrol', 'Quattro Drive'],
      dailyPrice: '$280',
      weeklyPrice: '$1,700',
      monthlyPrice: '$5,800'
    },
    {
      id: 'mercedes',
      name: 'Mercedes S-Class',
      category: 'Luxury Sedan',
      image: '/rent-a-car/mercedes-s-class.jpg',
      features: ['4 Passengers', 'Automatic', 'Hybrid', 'AIR-BALANCE'],
      dailyPrice: '$300',
      weeklyPrice: '$1,850',
      monthlyPrice: '$6,500'
    },
    {
      id: 'range-rover',
      name: 'Range Rover Sport',
      category: 'Luxury SUV',
      image: '/rent-a-car/range-rover-sport.jpg',
      features: ['5 Passengers', 'Automatic', 'Diesel', '4WD'],
      dailyPrice: '$350',
      weeklyPrice: '$2,100',
      monthlyPrice: '$7,500'
    },
    {
      id: 'porsche',
      name: 'Porsche Panamera',
      category: 'Luxury Sports',
      image: '/rent-a-car/porsche-panamera.jpg',
      features: ['4 Passengers', 'Automatic', 'Petrol', 'Sport Chrono'],
      dailyPrice: '$400',
      weeklyPrice: '$2,500',
      monthlyPrice: '$8,500'
    },
    {
      id: 'passat',
      name: 'Volkswagen Passat',
      category: 'Premium Sedan',
      image: '/rent-a-car/volkswagen-passat.jpg',
      features: ['5 Passengers', 'Automatic', 'Diesel', 'DSG'],
      dailyPrice: '$150',
      weeklyPrice: '$900',
      monthlyPrice: '$3,200'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Premium Car Rental Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience luxury and comfort with our premium fleet of vehicles. 
              Choose from BMW, Audi, Mercedes, Range Rover, Porsche and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#fleet"
                className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Rental</h3>
              <p className="text-gray-600">Daily, weekly & monthly options</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600">24/7 customer support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fuel className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Well Maintained</h3>
              <p className="text-gray-600">Regular service & cleaning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Full Insurance</h3>
              <p className="text-gray-600">Comprehensive coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section id="fleet" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully selected range of luxury vehicles, 
              each maintained to the highest standards for your comfort and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-sm text-gray-500">Daily</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.dailyPrice || '$---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Weekly</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.weeklyPrice || '$---'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Monthly</p>
                        <p className="text-lg font-semibold text-primary-600">
                          {car.monthlyPrice || '$---'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Book This Car
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Drive in Style?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact our team today to book your premium rental car and enjoy 
            the ultimate driving experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+90506641785" 
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call Now: +90 506 641 17 85
            </a>
            <a 
              href="mailto:seyfettin@mrfortytravel.com" 
              className="inline-flex items-center px-8 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}