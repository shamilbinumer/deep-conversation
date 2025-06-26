"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import '../../styles/Common/common.scss'
import Link from 'next/link';


const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      location: "Mumbai, India",
      text: "Working with Najiha transformed our relationship completely. We learned to communicate with depth and understanding we never thought possible. Our marriage feels renewed and stronger than ever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 2,
      name: "Priya & Rajesh",
      location: "Delhi, India",
      text: "The deep conversations approach helped us rediscover each other after 15 years of marriage. Najiha's guidance was gentle yet powerful, helping us build the emotional intimacy we were missing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: 3,
      name: "Anita & Vikram",
      location: "Bangalore, India",
      text: "Our sessions with Najiha gave us tools to navigate difficult conversations with love and respect. We now approach challenges as a team rather than adversaries.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="testimonial py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-[800] text-gray-800 mb-4" data-aos='fade-up'>
            What Our Couples Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto" data-aos='fade-up'>
            Real stories from couples who have transformed their relationships through deep conversations
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-purple-300">
            <Quote size={40} />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-6 right-6 flex space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition-colors duration-300"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-purple-100 transition-colors duration-300"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
            {/* Testimonial Content */}
            <div className="md:w-2/3 text-center md:text-left">
              {/* Stars */}
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-light italic">
                "{current.text}"
              </p>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {current.name}
                </h4>
                <p className="text-teal-600 font-medium">{current.location}</p>
              </div>
            </div>

            {/* Client Image */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={current.image} 
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-purple-200 opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-purple-500 w-8' 
                    : 'bg-gray-300 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your relationship?
          </p>
         <Link href='/contact-us'> <button className="bg-[#7AB3B3] hover:bg-[#598585] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Session
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;