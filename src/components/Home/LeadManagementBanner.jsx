"use client"
import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, Sparkles, Heart } from 'lucide-react';
import '../../styles/Common/common.scss'

const LeadManagementBanner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'couples'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interests = [
    { value: 'couples', label: 'Couples Coaching', icon: Heart },
    { value: 'individual', label: 'Individual Sessions', icon: User },
    { value: 'workshops', label: 'Group Workshops', icon: MessageSquare }
  ];

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
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          interest: 'couples'
        });
      }, 3000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="lead-banner py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #7AB3B310 0%, #B2E5E520 100%)'}}>
      {/* Background decorative elements */}
      <div className="absolute top-16 left-10 w-32 h-32 bg-teal-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-16 w-20 h-20 opacity-20" style={{backgroundColor: '#7AB3B3'}}></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-orange-200 rounded-full opacity-25"></div>
      <div className="absolute bottom-1/3 left-10 w-8 h-8 bg-teal-200 rounded-full opacity-40"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8" data-aos='fade-up'>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles style={{color: '#7AB3B3'}} size={36} />
                <span className="text-lg font-medium" style={{color: '#7AB3B3'}}>
                  Start Your Journey Today
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-[800] text-gray-800 mb-6 leading-tight">
                Ready to Transform Your 
                <span style={{color: '#7AB3B3'}}> Relationship?</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Take the first step towards deeper connection and meaningful communication. 
                Whether you're looking to strengthen your bond as a couple or develop your 
                relationship skills individually, I'm here to guide you on this transformative journey.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "Personalized coaching approach tailored to your unique needs",
                "Safe, judgment-free space for honest conversations",
                "Proven techniques for lasting relationship transformation",
                "Flexible session options to fit your schedule"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle style={{color: '#7AB3B3'}} size={20} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{color: '#7AB3B3'}}>50+</div>
                <div className="text-sm text-gray-600">Couples Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{color: '#7AB3B3'}}>95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{color: '#7AB3B3'}}>5★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative" data-aos='fade-up'>
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Get Your Free Consultation
                    </h3>
                    <p className="text-gray-600">
                      Let's discuss how we can work together to strengthen your relationship
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300"
                        style={{'--focus-color': '#7AB3B3'}}
                        onFocus={(e) => e.target.style.borderColor = '#7AB3B3'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email Address"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300"
                        onFocus={(e) => e.target.style.borderColor = '#7AB3B3'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number (Optional)"
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-2 transition-all duration-300"
                        onFocus={(e) => e.target.style.borderColor = '#7AB3B3'}
                        onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      />
                    </div>

                    {/* Interest Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        What are you most interested in?
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {interests.map((interest) => {
                          const IconComponent = interest.icon;
                          return (
                            <label
                              key={interest.value}
                              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                formData.interest === interest.value
                                  ? 'border-2 text-white'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                              style={formData.interest === interest.value ? {
                                backgroundColor: '#7AB3B3',
                                borderColor: '#7AB3B3'
                              } : {}}
                            >
                              <input
                                type="radio"
                                name="interest"
                                value={interest.value}
                                checked={formData.interest === interest.value}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <IconComponent size={20} />
                              <span className="font-medium">{interest.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me a bit about your situation and what you'd like to work on..."
                        rows="4"
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Get My Free Consultation
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to receive communications from me. 
                    Your information is safe and will never be shared.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-6">
                    <CheckCircle style={{color: '#7AB3B3'}} size={60} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Your message has been sent successfully. I'll get back to you within 24 hours 
                      to schedule your free consultation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{backgroundColor: '#7AB3B320'}}>
                    <p className="text-sm" style={{color: '#7AB3B3'}}>
                      <strong>What's Next?</strong><br />
                      Check your email for a confirmation and prepare any questions 
                      you'd like to discuss during our call.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-30 rounded-full -z-10" style={{backgroundColor: '#7AB3B3'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadManagementBanner;