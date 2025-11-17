import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Şehir otelleri verisi
const cityHotelsData = {
  istanbul: [
    {
      id: 1,
      name: 'The Ritz-Carlton Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.8,
      reviews: 324,
      price: 8500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'Experience timeless elegance blended with modern sophistication in the heart of Istanbul.',
      fullDescription: 'Located in the vibrant heart of Istanbul, The Ritz-Carlton Istanbul is a sanctuary of refined luxury and impeccable service. Our hotel combines timeless elegance with contemporary comfort to offer an unforgettable experience in one of the world\'s most captivating cities.',
      features: [
        'Luxury rooms and suites with Bosphorus views',
        'Award-winning spa and wellness center',
        'Multiple fine dining restaurants',
        'Rooftop terrace with panoramic city views',
        'State-of-the-art fitness center',
        'Indoor swimming pool',
        '24-hour room service',
        'Personalized concierge service'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Sıraselviler Cad. No:58, 34367 Beşiktaş, Istanbul, Turkey'
      }
    },
    {
      id: 2,
      name: 'Swissotel The Bosphorus',
      location: 'Istanbul, Turkey',
      rating: 4.7,
      reviews: 256,
      price: 7200,
      image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      gallery: [
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'bar', 'gym', 'restaurant'],
      description: 'Elegant hotel with Bosphorus views and world-class amenities.',
      fullDescription: 'Swissotel The Bosphorus, Istanbul, offers elegant accommodation with Bosphorus views. Our hotel provides modern rooms designed to make your stay comfortable and unforgettable, exceptional dining options, and a range of facilities.',
      features: [
        'Bosphorus view',
        'Modern rooms with premium amenities',
        'Multiple restaurants and bars',
        'Indoor swimming pool',
        'Full-service spa',
        'Fitness center'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Bayıldım Cad. No:2, 34357 Beşiktaş, Istanbul, Turkey'
      }
    },
    {
      id: 3,
      name: 'CVK Park Bosphorus Hotel',
      location: 'Istanbul, Turkey',
      rating: 4.7,
      reviews: 289,
      price: 6800,
      image: '/hotels/CVK Park Bosphorus Hotel Istanbul/cvk-park-1.jpg',
      gallery: [
        '/hotels/CVK Park Bosphorus Hotel Istanbul/cvk-park-1.jpg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul/cvk-park-2.jpg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul/cvk-park-3.jpg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul/cvk-park-4.jpg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul/cvk-park-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
      description: 'Modern and stylish hotel with Bosphorus views',
      fullDescription: 'CVK Park Bosphorus Hotel Istanbul is a modern and stylish hotel in the heart of Istanbul, with impressive Bosphorus views. Our hotel combines contemporary design with superior service to offer comfort and luxury to our guests.',
      features: [
        'Modern rooms and suites with Bosphorus views',
        'Full-service spa and wellness center',
        'Multiple fine dining restaurants',
        'State-of-the-art fitness center',
        'Indoor swimming pool',
        '24-hour room service',
        'Personalized concierge service',
        'Meeting and event spaces'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Gümüşsuyu Mah. Balmumcu Sk. No:1, 34349 Beşiktaş, Istanbul, Turkey'
      }
    },
    {
      id: 4,
      name: 'Mövenpick Hotel Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.6,
      reviews: 198,
      price: 5500,
      image: '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
      gallery: [
        '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-2.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-3.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-4.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Contemporary hotel with Swiss hospitality standards',
      fullDescription: 'Mövenpick Hotel Istanbul brings Swiss hospitality to the heart of Istanbul, offering contemporary accommodation with modern amenities and exceptional service.',
      features: [
        'Contemporary rooms with city views',
        'Swiss hospitality standards',
        'Modern fitness center',
        'Indoor swimming pool',
        'Multiple dining options',
        'Business center'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Piyalepaşa Blvd. No:1, 34445 Beyoğlu, Istanbul, Turkey'
      }
    },
    {
      id: 5,
      name: 'Grand Hyatt Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.7,
      reviews: 245,
      price: 7500,
      image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
      gallery: [
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-2.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-3.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-4.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
      description: 'Luxury hotel in the heart of Istanbul\'s business district',
      fullDescription: 'Grand Hyatt Istanbul offers luxury accommodation in the heart of Istanbul\'s business district, combining modern comfort with exceptional service and world-class amenities.',
      features: [
        'Luxury rooms with city views',
        'World-class spa and wellness',
        'Multiple dining venues',
        'Rooftop pool with city views',
        'State-of-the-art fitness center',
        'Business and meeting facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Taskisla Cad. No:1, 34433 Taksim, Istanbul, Turkey'
      }
    },
    {
      id: 6,
      name: 'Conrad Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.6,
      reviews: 189,
      price: 6200,
      image: '/hotels/Conrad Istanbul/conrad-1.jpg',
      gallery: [
        '/hotels/Conrad Istanbul/conrad-1.jpg',
        '/hotels/Conrad Istanbul/conrad-2.jpg',
        '/hotels/Conrad Istanbul/conrad-3.jpg',
        '/hotels/Conrad Istanbul/conrad-4.jpg',
        '/hotels/Conrad Istanbul/conrad-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Modern luxury hotel with Bosphorus views',
      fullDescription: 'Conrad Istanbul offers modern luxury accommodation with impressive Bosphorus views, combining contemporary design with exceptional service and world-class amenities.',
      features: [
        'Modern rooms with Bosphorus views',
        'Luxury spa and wellness center',
        'Multiple dining options',
        'Indoor swimming pool',
        'Fitness center',
        'Business facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çırağan Cad. No:1, 34349 Beşiktaş, Istanbul, Turkey'
      }
    },
    {
      id: 7,
      name: 'Istanbul Marriott Hotel',
      location: 'Istanbul, Turkey',
      rating: 4.5,
      reviews: 167,
      price: 5800,
      image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
      gallery: [
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-2.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-3.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-4.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Comfortable hotel with Marriott standards',
      fullDescription: 'Istanbul Marriott Hotel offers comfortable accommodation with Marriott\'s renowned service and quality standards, located in the heart of Istanbul.',
      features: [
        'Comfortable rooms with modern amenities',
        'Marriott quality service',
        'Fitness center',
        'Indoor swimming pool',
        'Multiple dining options',
        'Business center'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Abide-i Hürriyet Cad. No:175, 34381 Şişli, Istanbul, Turkey'
      }
    },
    {
      id: 8,
      name: 'W Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.7,
      reviews: 203,
      price: 8000,
      image: '/hotels/W Istanbul/w-istanbul-1.jpg',
      gallery: [
        '/hotels/W Istanbul/w-istanbul-1.jpg',
        '/hotels/W Istanbul/w-istanbul-2.jpg',
        '/hotels/W Istanbul/w-istanbul-3.jpg',
        '/hotels/W Istanbul/w-istanbul-4.jpg',
        '/hotels/W Istanbul/w-istanbul-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
      description: 'Stylish luxury hotel with contemporary design',
      fullDescription: 'W Istanbul offers stylish luxury accommodation with contemporary design, combining modern comfort with exceptional service and world-class amenities in the heart of Istanbul.',
      features: [
        'Stylish rooms with contemporary design',
        'Luxury spa and wellness',
        'Trendy dining venues',
        'Rooftop pool',
        'State-of-the-art fitness center',
        'Concierge services'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Süleyman Seba Cad. No:22, 34357 Beşiktaş, Istanbul, Turkey'
      }
    },
    {
      id: 9,
      name: 'Four Seasons Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.9,
      reviews: 267,
      price: 9200,
      image: '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
      gallery: [
        '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-2.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-3.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-4.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'Ultimate luxury in historic Sultanahmet',
      fullDescription: 'Four Seasons Istanbul offers ultimate luxury accommodation in the historic Sultanahmet area, combining Ottoman elegance with modern comfort and exceptional service.',
      features: [
        'Luxury rooms with historic views',
        'World-class spa and wellness',
        'Fine dining restaurants',
        'Beautiful courtyard garden',
        'Fitness center',
        'Personalized concierge service',
        'Turkish hammam experience'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Tevkifhane Sok. No:1, 34400 Sultanahmet, Istanbul, Turkey'
      }
    },
    {
      id: 10,
      name: 'Çırağan Palace Kempinski',
      location: 'Istanbul, Turkey',
      rating: 4.9,
      reviews: 312,
      price: 12000,
      image: '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
      gallery: [
        '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-2.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-3.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-4.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'Ottoman palace converted into luxury hotel',
      fullDescription: 'Çırağan Palace Kempinski is an Ottoman palace converted into a luxury hotel, offering unique luxury and service with impressive views and historical elegance on the Bosphorus shore.',
      features: [
        'Palace rooms with Bosphorus views',
        'World-class spa and wellness',
        'Multiple fine dining restaurants',
        'Private beach and pool',
        'Historic palace architecture',
        'Personalized butler service',
        'Turkish hammam experience'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çırağan Cad. No:32, 34349 Beşiktaş, Istanbul, Turkey'
      }
    }
  ],
  trabzon: [
    {
      id: 11,
      name: 'Zorlu Grand Hotel Trabzon',
      location: 'Trabzon, Turkey',
      rating: 4.7,
      reviews: 189,
      price: 4200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Luxury hotel in the heart of Trabzon',
      fullDescription: 'Zorlu Grand Hotel Trabzon offers luxury accommodation in the heart of Trabzon, combining modern comfort with exceptional service and world-class amenities.',
      features: [
        'Luxury rooms with city views',
        'Full-service spa and wellness',
        'Multiple dining options',
        'Indoor swimming pool',
        'Fitness center',
        'Business facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Maraş Cad. No:1, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 12,
      name: 'Novotel Trabzon',
      location: 'Trabzon, Turkey',
      rating: 4.5,
      reviews: 145,
      price: 3500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Modern hotel with international standards',
      fullDescription: 'Novotel Trabzon offers modern accommodation with international standards, providing comfort and convenience for business and leisure travelers.',
      features: [
        'Modern rooms with sea views',
        'Fitness center',
        'Indoor swimming pool',
        'Multiple dining options',
        'Business center',
        'Meeting facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Cumhuriyet Cad. No:95, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 13,
      name: 'Hilton Trabzon',
      location: 'Trabzon, Turkey',
      rating: 4.6,
      reviews: 167,
      price: 4800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'International luxury with Black Sea views',
      fullDescription: 'Hilton Trabzon offers international luxury accommodation with impressive Black Sea views, combining world-class service with modern amenities.',
      features: [
        'Luxury rooms with Black Sea views',
        'Full-service spa and wellness',
        'Multiple dining venues',
        'Indoor swimming pool',
        'Fitness center',
        'Business and meeting facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Tanjol Yolu Cad. No:1, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 14,
      name: 'Grand Tarabya Hotel',
      location: 'Trabzon, Turkey',
      rating: 4.4,
      reviews: 123,
      price: 3200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Comfortable hotel with traditional hospitality',
      fullDescription: 'Grand Tarabya Hotel offers comfortable accommodation with traditional Turkish hospitality, providing a warm and welcoming atmosphere.',
      features: [
        'Comfortable rooms with modern amenities',
        'Traditional Turkish hospitality',
        'Fitness center',
        'Multiple dining options',
        'Business facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Uzun Sok. No:45, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 15,
      name: 'Marriott Hotel Trabzon',
      location: 'Trabzon, Turkey',
      rating: 4.6,
      reviews: 178,
      price: 4500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Marriott quality with Black Sea charm',
      fullDescription: 'Marriott Hotel Trabzon offers accommodation with Marriott quality and Black Sea charm, combining international standards with local hospitality.',
      features: [
        'Modern rooms with sea views',
        'Marriott quality service',
        'Full-service spa',
        'Indoor swimming pool',
        'Multiple dining options',
        'Business center'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Gülbahar Cad. No:123, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 16,
      name: 'Rixos Trabzon',
      location: 'Trabzon, Turkey',
      rating: 4.7,
      reviews: 195,
      price: 5200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
      description: 'Luxury resort with private beach',
      fullDescription: 'Rixos Trabzon offers luxury resort accommodation with private beach access, combining world-class amenities with impressive Black Sea views.',
      features: [
        'Luxury rooms with sea views',
        'Private beach access',
        'Full-service spa and wellness',
        'Multiple swimming pools',
        'Fine dining restaurants',
        'Water sports facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Yalıncak Cad. No:99, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 17,
      name: 'Wyndham Trabzon',
      location: 'Trabzon, Turkey',
      rating: 4.3,
      reviews: 134,
      price: 2800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: ['/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg'],
      amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
      description: 'Comfortable stays with modern amenities',
      fullDescription: 'Wyndham Trabzon offers reliable service and convenience for travelers.',
      features: ['Comfortable rooms', 'Modern facilities', 'Fitness center'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Trabzon, Turkey' }
    },
    {
      id: 18,
      name: 'Hampton by Hilton Trabzon',
      location: 'Trabzon, Turkey',
      rating: 4.4,
      reviews: 145,
      price: 3000,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
      description: 'Modern comfort with Hampton quality',
      fullDescription: 'Hampton by Hilton Trabzon offers modern comfort with Hampton quality standards, providing reliable service and comfortable accommodation.',
      features: [
        'Rooms with modern amenities',
        'Hampton quality service',
        'Fitness center',
        'Complimentary breakfast',
        'Business center'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Turgut Özal Cad. No:67, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 19,
      name: 'Trabzon Park Hotel',
      location: 'Trabzon, Turkey',
      rating: 4.2,
      reviews: 112,
      price: 2500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'gym', 'restaurant'],
      description: 'Comfortable hotel with garden views',
      fullDescription: 'Trabzon Park Hotel offers comfortable accommodation with garden views, providing a peaceful retreat in the heart of Trabzon.',
      features: [
        'Comfortable rooms with garden views',
        'Peaceful location',
        'Restaurant serving local cuisine',
        'Meeting facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Kalkınma Cad. No:34, 61000 Trabzon, Turkey'
      }
    },
    {
      id: 20,
      name: 'Yazıcı Hotel',
      location: 'Trabzon, Turkey',
      rating: 4.3,
      reviews: 128,
      price: 3800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Traditional hospitality with modern comfort',
      fullDescription: 'Yazıcı Hotel offers a unique accommodation experience in Trabzon, combining modern comfort with traditional Turkish hospitality.',
      features: [
        'Comfortable rooms with modern amenities',
        'Traditional Turkish hospitality',
        'Spa and wellness center',
        'Restaurant serving local cuisine',
        'Business facilities'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Gülsüm Sokağı No:12, 61000 Trabzon, Turkey'
      }
    }
  ],
  antalya: [
    {
      id: 21,
      name: 'Titanic Mardan Palace',
      location: 'Antalya, Turkey',
      rating: 4.8,
      reviews: 523,
      price: 6500,
      image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      gallery: [
        '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
        '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
        '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
        '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
        '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
      description: 'Palace-style luxury resort on the Mediterranean',
      fullDescription: 'A magnificent palace-style resort with private beach and world-class amenities offering unparalleled luxury on the Mediterranean coast.',
      features: ['Private beach', 'Multiple pools', 'Full-service spa', 'Fine dining', 'Royal palace architecture'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Kemer, Antalya, Turkey' }
    },
    {
      id: 22,
      name: 'Regnum Carya Golf & Spa Resort',
      location: 'Antalya, Turkey',
      rating: 4.7,
      reviews: 412,
      price: 5800,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Luxury golf resort by the Mediterranean',
      fullDescription: 'Regnum Carya offers championship golf and premium beach facilities with world-class spa services and Mediterranean luxury.',
      features: ['Championship golf', 'Luxury rooms', 'Spa & wellness', 'Private beach', 'Golf academy'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    },
    {
      id: 23,
      name: 'Maxx Royal Belek Golf Resort',
      location: 'Antalya, Turkey',
      rating: 4.8,
      reviews: 489,
      price: 7200,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Ultra-luxury resort with golf',
      fullDescription: 'Maxx Royal Belek offers ultra-luxury stays with championship golf courses and private beach access on the Mediterranean coast.',
      features: ['Golf courses', 'Ultra-luxury suites', 'Spa', 'Pools', 'Private beach', 'Butler service'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    },
    {
      id: 24,
      name: 'Susesi Luxury Resort',
      location: 'Antalya, Turkey',
      rating: 4.6,
      reviews: 367,
      price: 5200,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Luxury beachfront resort',
      fullDescription: 'Susesi Luxury Resort offers beachfront luxury with Mediterranean views and world-class amenities for an unforgettable stay.',
      features: [
        'Sea-view luxury rooms',
        'Private beach access',
        'Full-service spa and wellness',
        'Multiple swimming pools',
        'Fine dining restaurants',
        'Water sports facilities'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    },
    {
      id: 25,
      name: 'Calista Luxury Resort',
      location: 'Antalya, Turkey',
      rating: 4.7,
      reviews: 398,
      price: 6000,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Premium beachfront resort with luxury amenities',
      fullDescription: 'Calista Luxury Resort offers premium beachfront stays with Mediterranean views and world-class facilities for discerning travelers.',
      features: [
        'Sea-view luxury rooms',
        'Private beach access',
        'Full-service spa and wellness',
        'Multiple swimming pools',
        'Fine dining restaurants',
        'Beach activities and water sports'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    },
    {
      id: 26,
      name: 'Kaya Palazzo Golf Resort',
      location: 'Antalya, Turkey',
      rating: 4.6,
      reviews: 345,
      price: 5500,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Elegant Mediterranean resort',
      fullDescription: 'Kaya Palazzo delivers elegant Mediterranean resort stays with premium facilities and beach access for a luxurious coastal experience.',
      features: [
        'Elegant rooms with Mediterranean charm',
        'Private beach access',
        'Spa and wellness',
        'Multiple pools',
        'Fine dining restaurants',
        'Water sports'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    },
    {
      id: 27,
      name: 'Rixos Premium Belek',
      location: 'Antalya, Turkey',
      rating: 4.7,
      reviews: 423,
      price: 6800,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Premium all-inclusive luxury resort',
      fullDescription: 'Rixos Premium Belek provides premium all-inclusive luxury stays with Mediterranean views and world-class amenities for an unforgettable vacation.',
      features: [
        'Sea-view premium rooms',
        'Private beach access',
        'Full-service spa and wellness',
        'Multiple pools',
        'All-inclusive dining options',
        'Entertainment and activities'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    },
    {
      id: 28,
      name: 'Cornelia Diamond Golf Resort',
      location: 'Antalya, Turkey',
      rating: 4.6,
      reviews: 389,
      price: 6200,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Luxury golf and beach resort',
      fullDescription: 'Cornelia Diamond offers luxury golf and beach resort stays with world-class golf facilities and Mediterranean coastal elegance.',
      features: [
        'Championship golf course',
        'Sea-view luxury rooms',
        'Full-service spa and wellness',
        'Multiple pools',
        'Fine dining restaurants',
        'Private beach access'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    },
    {
      id: 29,
      name: 'Land of Legends Kingdom Hotel',
      location: 'Antalya, Turkey',
      rating: 4.8,
      reviews: 467,
      price: 7500,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
      description: 'Theme-park resort with luxury stays',
      fullDescription: 'Land of Legends Kingdom provides luxury accommodation with theme-park access and extensive entertainment for the ultimate family vacation.',
      features: [
        'Theme park access',
        'Themed luxury rooms',
        'Water park and slides',
        'Full-service spa and wellness',
        'Multiple dining options',
        'Entertainment shows'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Kumköy, 07400 Side, Antalya, Turkey' }
    },
    {
      id: 30,
      name: 'Sirene Belek Golf Resort',
      location: 'Antalya, Turkey',
      rating: 4.5,
      reviews: 312,
      price: 4800,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      gallery: [
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
        '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Golf and beach resort',
      fullDescription: 'Sirene Belek offers comfortable golf and beach resort stays with Mediterranean views and excellent facilities for golf enthusiasts.',
      features: [
        'Golf course access',
        'Sea-view comfortable rooms',
        'Full-service spa and wellness',
        'Multiple pools',
        'Fine dining restaurants',
        'Private beach access'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Belek, Antalya, Turkey' }
    }
  ],
  bursa: [
    {
      id: 31,
      name: 'Hilton Bursa Convention Center & Spa',
      location: 'Bursa, Turkey',
      rating: 4.6,
      reviews: 210,
      price: 3800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Modern luxury with convention facilities',
      fullDescription: 'Hilton Bursa offers modern comfort and comprehensive event facilities with world-class spa services for business and leisure travelers.',
      features: ['Convention center', 'Full-service spa', 'Fitness center', 'Indoor pool', 'Business facilities'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Ankara Yolu 6. Km, Osmangazi, Bursa, Turkey' }
    },
    {
      id: 32,
      name: 'Crowne Plaza Bursa',
      location: 'Bursa, Turkey',
      rating: 4.5,
      reviews: 180,
      price: 3200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Comfortable stays with city access',
      fullDescription: 'Crowne Plaza Bursa provides convenient stays for business and leisure travelers with modern amenities and excellent city access.',
      features: ['Modern rooms', 'Full-service spa', 'Fine dining', 'Indoor pool', 'Business center'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Atatürk Cad. No:129, Osmangazi, Bursa, Turkey' }
    },
    {
      id: 33,
      name: 'Almira Hotel Bursa',
      location: 'Bursa, Turkey',
      rating: 4.4,
      reviews: 150,
      price: 2800,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'City-center comfort hotel',
      fullDescription: 'Almira Hotel offers convenient city-center accommodation with modern amenities and comfortable rooms for business travelers.',
      features: ['Comfort rooms', 'Spa facilities', 'Restaurant', 'Bar', 'Business center'],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Altıparmak Cad. No:34, Osmangazi, Bursa, Turkey' }
    },
    {
      id: 34,
      name: 'Karinna Hotel',
      location: 'Bursa, Turkey',
      rating: 4.3,
      reviews: 145,
      price: 2500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'Boutique hotel with thermal facilities',
      fullDescription: 'Karinna Hotel offers a boutique stay with thermal spa facilities for a unique wellness experience in Bursa.',
      features: [
        'Boutique rooms with modern amenities',
        'Thermal spa facilities',
        'Local cuisine restaurant',
        'Thermal pools',
        'Wellness center'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:67, Bursa, Turkey' }
    },
    {
      id: 35,
      name: 'Grand Yazar Hotel',
      location: 'Bursa, Turkey',
      rating: 4.4,
      reviews: 178,
      price: 3000,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Modern hotel with thermal spa',
      fullDescription: 'Grand Yazar Hotel provides modern stays with thermal spa facilities for comfort and wellness in Bursa.',
      features: [
        'Modern rooms with city views',
        'Thermal spa and wellness',
        'Restaurant and bar',
        'Fitness center',
        'Business facilities'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Altıparmak Cad. No:89, Bursa, Turkey' }
    },
    {
      id: 36,
      name: 'WOW Bursa Convention Center',
      location: 'Bursa, Turkey',
      rating: 4.5,
      reviews: 189,
      price: 3500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Contemporary design hotel',
      fullDescription: 'WOW Bursa offers contemporary stays with comprehensive amenities for business and leisure travelers.',
      features: [
        'Contemporary design rooms',
        'Full-service spa and wellness',
        'Indoor pool',
        'Multiple dining options',
        'Fitness center',
        'Business facilities'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Ankara Yolu 8. Km, Bursa, Turkey' }
    },
    {
      id: 37,
      name: 'Gönlüferah Thermal Hotel',
      location: 'Bursa, Turkey',
      rating: 4.3,
      reviews: 156,
      price: 2700,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'Traditional thermal hotel',
      fullDescription: 'Gönlüferah Thermal Hotel offers authentic thermal spa experiences with comfortable accommodation in Bursa.',
      features: [
        'Comfortable rooms with traditional decor',
        'Thermal spa facilities',
        'Local cuisine restaurant',
        'Thermal pools',
        'Wellness center'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:123, Bursa, Turkey' }
    },
    {
      id: 38,
      name: 'Kervansaray Thermal Hotel',
      location: 'Bursa, Turkey',
      rating: 4.6,
      reviews: 223,
      price: 4200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Luxury thermal spa resort',
      fullDescription: 'Kervansaray Thermal Hotel provides a luxury thermal spa resort experience with world-class facilities in Bursa.',
      features: [
        'Luxury rooms with modern amenities',
        'Comprehensive thermal spa',
        'Multiple pools',
        'Fine dining restaurants',
        'Fitness center',
        'Traditional Turkish hammam'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:34, Bursa, Turkey' }
    },
    {
      id: 39,
      name: 'Çelik Palas Thermal Hotel',
      location: 'Bursa, Turkey',
      rating: 4.4,
      reviews: 198,
      price: 2200,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Historic hotel with thermal facilities',
      fullDescription: 'Çelik Palas is a historic hotel offering thermal spa facilities and comfortable accommodation, combining traditional elegance with modern comfort.',
      features: [
        'Comfortable rooms with historic decor',
        'Thermal spa facilities',
        'Local cuisine restaurant',
        'Thermal pools',
        'Historic ambiance'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Çekirge Cad. No:1, Bursa, Turkey' }
    },
    {
      id: 40,
      name: 'Holiday Inn Bursa',
      location: 'Bursa, Turkey',
      rating: 4.3,
      reviews: 145,
      price: 2600,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Comfort hotel with international standards',
      fullDescription: 'Holiday Inn Bursa offers comfortable stays with international service standards and modern amenities for business travelers.',
      features: [
        'Comfortable rooms with modern amenities',
        'International service standards',
        'Fitness center',
        'Complimentary breakfast',
        'Business center'
      ],
      contact: { phone: '+90 532 123 4567', email: 'info@fortytravel.com', address: 'Ankara Yolu 15. Km, Bursa, Turkey' }
    }
  ]
}

const amenities = {
  wifi: { icon: Wifi, label: 'Free WiFi' },
  parking: { icon: Car, label: 'Free Parking' },
  spa: { icon: Dumbbell, label: 'Spa & Wellness' },
  restaurant: { icon: Coffee, label: 'Restaurant' },
  bar: { icon: Coffee, label: 'Bar & Lounge' },
  pool: { icon: Dumbbell, label: 'Swimming Pool' },
  concierge: { icon: Users, label: 'Concierge Service' },
  'room-service': { icon: Coffee, label: 'Room Service' },
  gym: { icon: Dumbbell, label: 'Fitness Center' },
  beach: { icon: MapPin, label: 'Private Beach' },
  'kids-club': { icon: Users, label: 'Kids Club' },
  golf: { icon: Users, label: 'Golf Course' },
  'water-park': { icon: Users, label: 'Water Park' },
  'beach-club': { icon: Users, label: 'Beach Club' }
}

export default function CityHotelsPage({ params }: { params: { city: string } }) {
  const cityHotels = cityHotelsData[params.city as keyof typeof cityHotelsData]

  if (!cityHotels) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
          <p className="text-gray-600 mb-4">The hotel you're looking for doesn't exist.</p>
          <p className="text-gray-600 mb-8">Aradığınız otel mevcut değil.</p>
          <Link href="/hotels" className="btn-primary">
            Back to Hotels
          </Link>
        </div>
      </div>
    )
  }

  const cityNames = {
    istanbul: 'Istanbul',
    trabzon: 'Trabzon',
    antalya: 'Antalya',
    bursa: 'Bursa'
  }

  const cityName = cityNames[params.city as keyof typeof cityNames] || params.city

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{cityName} Hotels</h1>
            <p className="text-xl opacity-90">Discover the best hotels in {cityName}</p>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Luxury Hotels in {cityName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best accommodation options in {cityName} with our carefully selected luxury hotels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityHotels.map((hotel) => (
              <div key={hotel.id} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary-600">₺{hotel.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-600">/night</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotel.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-gray-600 text-sm">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {amenities[amenity as keyof typeof amenities]?.label || amenity}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <Users className="w-4 h-4 inline mr-1" />
                      2-4 Guests
                    </div>
                    <Link 
                      href={`/hotels/${hotel.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Stay in {cityName}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our expert travel consultants find the perfect hotel for your {cityName} trip
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}