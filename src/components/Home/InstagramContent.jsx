"use client";
import React, { useState } from 'react';
import {  Heart, MessageCircle, ExternalLink, Quote, Play } from 'lucide-react';
import '../../styles/Common/common.scss'

const InstagramContent = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const instagramPosts = [
    {
      id: 1,
      type: 'image',
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      caption: "The secret to lasting love isn't perfection - it's persistence in showing up for each other every single day. 💕",
      likes: 247,
      comments: 32,
      isQuote: true
    },
    {
      id: 2,
      type: 'carousel',
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop",
      caption: "5 signs your relationship is ready for deeper conversations... Swipe to see them all! ➡️",
      likes: 189,
      comments: 28,
      isCarousel: true
    },
    {
      id: 3,
      type: 'video',
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=300&fit=crop",
      caption: "Quick tip: Listen to understand, not to respond. This simple shift can transform your conversations.",
      likes: 312,
      comments: 45,
      isVideo: true
    },
    {
      id: 4,
      type: 'image',
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
      caption: "Creating safe spaces for vulnerability - that's where real intimacy begins. ✨",
      likes: 198,
      comments: 23,
      isQuote: false
    },
    {
      id: 5,
      type: 'image',
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=300&fit=crop",
      caption: "Happy Monday! Remember: Your relationship is a garden that grows with daily attention and care. 🌱",
      likes: 156,
      comments: 19,
      isQuote: true
    },
    {
      id: 6,
      type: 'carousel',
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&h=300&fit=crop",
      caption: "Workshop highlights from this weekend! So grateful for these amazing couples. 💫",
      likes: 278,
      comments: 38,
      isCarousel: true
    }
  ];

  const stats = [
    { number: '12.5K', label: 'Followers' },
    { number: '850', label: 'Posts' },
    { number: '2.1K', label: 'Following' }
  ];
// Custom Instagram icon component
  const InstagramIcon = ({ size = 24, className = "" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  return (
    <section className="instasection py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-8 w-20 h-20 bg-orange-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-24 right-12 w-16 h-16 opacity-50 rounded-full" style={{backgroundColor: '#7AB3B3'}}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-teal-100 rounded-full opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full" style={{backgroundColor: '#7AB3B3', opacity: 0.1}}>
              <InstagramIcon style={{color: '#7AB3B3'}} size={40} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl instgram-section-heading font-[800] text-gray-800 mb-4" data-aos='fade-up'>
            Join Our Community
          </h2>
          <p data-aos='fade-up' className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Daily inspiration, relationship tips, and behind-the-scenes moments from our coaching sessions. 
            Follow along for your dose of connection wisdom.
          </p>
          
          {/* Instagram Stats */}
          <div className="flex justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <div
            data-aos='fade-up'
              key={post.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Post Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={post.src}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Post Type Indicators */}
                {post.isCarousel && (
                  <div className="absolute top-3 right-3 bg-black/50 rounded-full p-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                )}
                
                {post.isVideo && (
                  <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2">
                    <Play size={16} className="text-white fill-white" />
                  </div>
                )}
                
                {post.isQuote && (
                  <div className="absolute top-3 left-3 bg-black/50 rounded-full p-2">
                    <Quote size={16} className="text-white" />
                  </div>
                )}

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredPost === post.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex items-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart size={20} className="fill-white" />
                      <span className="font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle size={20} />
                      <span className="font-medium">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Caption */}
              <div className="p-4">
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#7AB3B3'}}>
                <InstagramIcon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-3">
                Ready for Daily Inspiration?
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of couples who start their day with relationship wisdom, 
                practical tips, and gentle reminders about the power of deep connection.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://www.instagram.com/"> <button 
                className="flex items-center justify-center gap-3 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{backgroundColor: '#7AB3B3'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#6AA3A3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#7AB3B3'}
              >
                <InstagramIcon size={20} />
                Follow Me on Instagram
              </button></a>
              
            <a href="https://www.instagram.com/">
              <button 
                className="flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
                style={{borderColor: '#7AB3B3', color: '#7AB3B3'}}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#7AB3B3';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '';
                  e.target.style.color = '#7AB3B3';
                }}
              >
                <ExternalLink size={18} />
                Visit Profile
              </button></a>
            </div>
          </div>
        </div>
      </div>

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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default InstagramContent;