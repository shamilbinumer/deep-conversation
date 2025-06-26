"use client"
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  User, 
  MessageSquare, 
  Calendar, 
  Sparkles,
  Heart,
  Users,
  Video,
  Coffee,
  Globe,
  Instagram,
  Linkedin,
  Facebook
} from 'lucide-react';
import Navbar from '@/components/Common/Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      // Reset form after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
      }, 4000);
    }, 1500);
  };

  const isFormValid = formData.fullName && formData.email && formData.message;

  return (
    <div className="contact-page bg-white min-h-screen">
        <Navbar/>
      {/* Hero Section */}
      <section className="hero py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #7AB3B310 0%, #B2E5E520 100%)'}}>
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-teal-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 opacity-20" style={{backgroundColor: '#7AB3B3'}}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-200 rounded-full opacity-25"></div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles style={{color: '#7AB3B3'}} size={48} />
          </div>
          
          <h1 data-aos='fade-up' className="text-4xl md:text-6xl font-[800] text-gray-800 mb-6 leading-tight">
            <span style={{color: '#7AB3B3'}}>Contact <span className='text-black'>Us</span></span>
          </h1>
          
          <div data-aos='fade-up' className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 pb-4" style={{borderColor: '#7AB3B3'}}>
              Let's have a conversation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Contact Details */}
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-4">My contact details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail style={{color: '#7AB3B3'}} size={20} />
                    <span className="text-gray-700">Email</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram style={{color: '#7AB3B3'}} size={20} />
                    <span className="text-gray-700">IG link</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee style={{color: '#7AB3B3'}} size={20} />
                    <span className="text-gray-700">Discovery link</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Enquiry Info */}
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  For all enquire, please email me below and I will get back to you in 2 business days
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div>Full name</div>
                  <div>Email</div>
                  <div>Phone number with code</div>
                  <div className="mt-4 font-medium">Message</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 data-aos='fade-up' className="text-3xl md:text-4xl font-[800] text-gray-800 mb-4">
              Send Me a Message
            </h2>
            <p data-aos='fade-up' className="text-gray-600 text-lg">
              I will get back to you in 2 business days
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {!isSubmitted ? (
              <div className="space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300"
                    onFocus={(e) => e.target.style.borderColor = '#7AB3B3'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300"
                    onFocus={(e) => e.target.style.borderColor = '#7AB3B3'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone number with code"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300"
                    onFocus={(e) => e.target.style.borderColor = '#7AB3B3'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows="6"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300 resize-none"
                    onFocus={(e) => e.target.style.borderColor = '#7AB3B3'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isLoading}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isFormValid && !isLoading
                      ? 'text-white shadow-lg transform hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  style={isFormValid && !isLoading ? {backgroundColor: '#7AB3B3'} : {}}
                  onMouseEnter={(e) => {
                    if (isFormValid && !isLoading) {
                      e.target.style.backgroundColor = '#6AA3A3';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isFormValid && !isLoading) {
                      e.target.style.backgroundColor = '#7AB3B3';
                    }
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send My Message
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle style={{color: '#7AB3B3'}} size={80} className="mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Thank you for reaching out! I've received your message and will get back to you within 2 business days.
                </p>
                <div className="p-6 rounded-xl" style={{backgroundColor: '#7AB3B320'}}>
                  <h4 className="font-semibold mb-2" style={{color: '#7AB3B3'}}>What happens next?</h4>
                  <ul className="text-left space-y-2" style={{color: '#7AB3B3'}}>
                    <li>✓ I'll review your message carefully</li>
                    <li>✓ You'll receive a personalized response within 2 business days</li>
                    <li>✓ We can schedule a conversation that works for you</li>
                    <li>✓ I'll send you all the details you need</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-[800] text-gray-800 mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the method that feels most comfortable for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#7AB3B320'}}>
                <Mail style={{color: '#7AB3B3'}} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 mb-3">Direct communication</p>
              <p className="font-semibold" style={{color: '#7AB3B3'}}>
                hello@example.com
              </p>
            </div>

            {/* Instagram */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#7AB3B320'}}>
                <Instagram style={{color: '#7AB3B3'}} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600 mb-3">Follow my journey</p>
              <p className="font-semibold" style={{color: '#7AB3B3'}}>
                @yourhandle
              </p>
            </div>

            {/* Discovery Call */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#7AB3B320'}}>
                <Coffee style={{color: '#7AB3B3'}} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Discovery Call</h3>
              <p className="text-gray-600 mb-3">Book a free session</p>
              <p className="font-semibold" style={{color: '#7AB3B3'}}>
                Schedule Now
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;