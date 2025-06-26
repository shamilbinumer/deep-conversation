"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import '../../styles/Common/common.scss'
import Link from 'next/link';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is the difference between life coaching and therapy?",
      answer: "Life coaching focuses on your present and future goals, helping you create actionable plans to achieve them. While therapy often addresses past traumas and mental health issues, coaching is about moving forward with clarity and purpose. As a life coach, I help you identify obstacles, develop strategies, and maintain accountability to reach your fullest potential."
    },
    {
      question: "How long does the coaching process typically take?",
      answer: "The coaching journey varies for each individual based on your goals and commitment level. Most clients see significant progress within 3-6 months of consistent sessions. Some prefer ongoing monthly check-ins for continued growth, while others work intensively for shorter periods. We'll discuss what timeline works best for your specific situation during our initial consultation."
    },
    {
      question: "What can I expect from our first session together?",
      answer: "Our first session is all about getting to know you and your aspirations. We'll explore your current situation, identify your core values, and clarify your goals. I'll explain my coaching approach and how we'll work together. You'll leave with clarity about your priorities and a sense of the supportive, judgment-free environment we'll create for your growth."
    },
    {
      question: "Do you offer online coaching sessions?",
      answer: "Yes! I offer both in-person and virtual coaching sessions to accommodate different preferences and schedules. Online sessions are conducted through secure video platforms and are just as effective as face-to-face meetings. Many clients appreciate the flexibility and comfort of coaching from their own space."
    },
    {
      question: "What if I'm not sure coaching is right for me?",
      answer: "It's completely normal to have questions about whether coaching is the right fit. That's why I offer a complimentary discovery call where we can discuss your goals, my approach, and whether we're a good match. There's no pressure—just an opportunity to explore how coaching might support your growth and see if my style resonates with you."
    },
    {
      question: "How do you help with work-life balance and boundaries?",
      answer: "Creating healthy boundaries is essential for a fulfilling life. I help you identify where boundaries are needed, develop strategies to communicate them effectively, and create systems that support sustainable balance. We'll work on prioritizing what truly matters to you and building routines that honor both your professional ambitions and personal well-being."
    },
    {
      question: "What happens between our coaching sessions?",
      answer: "Growth happens in the space between our sessions! I provide you with practical tools, exercises, and action steps to implement. You might receive worksheets, journal prompts, or small challenges to keep you moving forward. I'm also available for brief check-ins via email if you need support or have questions as you work toward your goals."
    },
    {
      question: "Can coaching help with relationship challenges?",
      answer: "Absolutely! Many of my clients work on improving their relationships—whether with partners, family, friends, or colleagues. We focus on communication skills, boundary setting, understanding your relationship patterns, and developing the confidence to create the connections you desire. Coaching helps you show up as your best self in all relationships."
    }
  ];

  return (
    <section className="faq py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-teal-50">
              <HelpCircle className="text-teal-600" size={32} />
            </div>
          </div>
          <h2 data-aos='fade-up' className="text-4xl md:text-5xl font-[800] text-gray-800 mb-4 faq-heading">
            Frequently Asked Questions
          </h2>
          <p data-aos='fade-up' className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about life coaching and how we can work together 
            to create meaningful change in your life.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
            data-aos='fade-up'
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-800 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems[index] ? (
                    <ChevronUp className="text-teal-600" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 font-extralight leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl  text-gray-800 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 text-redHatDisplay ">
              I'm here to help! Schedule a complimentary discovery call to discuss your goals 
              and see how coaching can support your journey.
            </p>
           <Link href='/contact-us'>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
              Schedule Your Free Call
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;