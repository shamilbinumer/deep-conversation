"use client"
import React, { useState } from 'react';
import { X, Camera, Heart, Users, MessageCircle, Sparkles } from 'lucide-react';
import '../../styles/Common/common.scss'
import Link from 'next/link';


const WorkshopPhotos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
      alt: "Couple in deep conversation session",
      category: "couples",
      title: "Intimate Couple Session",
      description: "Creating safe spaces for vulnerable conversations"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      alt: "Group workshop setting",
      category: "workshops",
      title: "Communication Workshop",
      description: "Learning effective dialogue techniques"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
      alt: "One-on-one coaching session",
      category: "individual",
      title: "Individual Coaching",
      description: "Personal growth and relationship preparation"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      alt: "Couple sharing an emotional moment",
      category: "couples",
      title: "Breakthrough Moment",
      description: "When understanding finally clicks"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      alt: "Group discussion in workshop",
      category: "workshops",
      title: "Group Discussion",
      description: "Sharing experiences and learning together"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      alt: "Peaceful coaching environment",
      category: "individual",  
      title: "Serene Setting",
      description: "Creating the perfect atmosphere for growth"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      alt: "Happy couple after session",
      category: "couples",
      title: "Renewed Connection",
      description: "The joy of rediscovered intimacy"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop",
      alt: "Workshop materials and setup",
      category: "workshops",
      title: "Workshop Setup",
      description: "Thoughtfully prepared learning environment"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Photos', icon: Camera },
    { key: 'couples', label: 'Couples', icon: Heart },
    { key: 'workshops', label: 'Workshops', icon: Users },
    { key: 'individual', label: 'Individual', icon: MessageCircle }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="workshop py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 rounded-full left-16 w-16 h-16 opacity-10" style={{backgroundColor: '#7AB3B3'}}></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-orange-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles style={{color: '#7AB3B3'}} size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-[800] text-gray-800 mb-4" data-aos='fade-up'>
            Workshop Moments
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed" data-aos='fade-up'>
            Capturing the transformative moments where couples rediscover each other and 
            individuals find their voice in relationships
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos='fade-up'>
          {filters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:text-white'
                }`}
                style={activeFilter === filter.key ? {backgroundColor: '#7AB3B3'} : {}}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.key) {
                    e.target.style.backgroundColor = '#7AB3B3';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.key) {
                    e.target.style.backgroundColor = '';
                    e.target.className = e.target.className.replace('text-white', 'text-gray-600');
                  }
                }}
              >
                <IconComponent size={18} />
                <span className="font-medium">{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                  <p className="text-sm opacity-90">{photo.description}</p>
                </div>
              </div>
              
              {/* Click overlay */}
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => openLightbox(photo)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-3xl" style={{background: 'linear-gradient(to right, #7AB3B340, #B2E5E540)'}}>
          <h3 className="text-2xl  text-gray-800 mb-4" data-aos='fade-up'>
            Ready to Create Your Own Story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto" data-aos='fade-up'>
            Join us for a transformative experience that will deepen your connection 
            and strengthen your relationship foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href='/contact-us'>
            <button 
              className="text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{backgroundColor: '#7AB3B3'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#6AA3A3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#7AB3B3'}
              data-aos='fade-up'
            >
              Book a Session
            </button></Link>
          <a href="#services">
              <button 
              className="border-2 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              style={{borderColor: '#7AB3B3', color: '#7AB3B3'}}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7AB3B3';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
                e.target.style.color = '#7AB3B3';
              }}
              data-aos='fade-up'
            >
              Work With Me
            </button>
          </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WorkshopPhotos;