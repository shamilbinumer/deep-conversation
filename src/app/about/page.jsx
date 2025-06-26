"use client"
import React, { useState } from 'react';
import { Heart, Users, BookOpen, Award, Calendar, MapPin, Mail, Phone, Sparkles, CheckCircle, Star, ArrowRight } from 'lucide-react';
import '../../styles/Common/common.scss'
import Navbar from '@/components/Common/Navbar';
import Link from 'next/link';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('beginning');

    const journeySteps = {
        beginning: {
            title: "The Beginning",
            content: "My journey into relationship coaching began with my own struggles in understanding deep connections. After experiencing the transformative power of honest communication in my personal relationships, I realized that many couples were missing the tools and safe spaces needed for authentic dialogue. This revelation sparked my passion for helping others discover the same breakthrough moments I had experienced.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop",
            highlights: [
                "Personal transformation through communication",
                "Recognition of widespread relationship challenges",
                "Discovery of passion for helping couples"
            ]
        },
        current: {
            title: "Current Journey",
            content: "Today, I work with couples and individuals who are ready to transform their relationships. My approach combines evidence-based techniques with intuitive coaching, creating personalized experiences that honor each couple's unique dynamic. I've helped over 50 couples rediscover their connection and build stronger foundations for their future together.",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop",
            highlights: [
                "50+ couples successfully coached",
                "Personalized, evidence-based approach",
                "Focus on sustainable relationship transformation"
            ]
        }
    };

    const qualifications = [
        {
            title: "Certified Relationship Coach",
            organization: "International Coach Federation (ICF)",
            year: "2022",
            description: "Comprehensive training in relationship dynamics, communication strategies, and coaching methodologies"
        },
        {
            title: "Marriage & Family Therapy Certificate",
            organization: "Institute for Relationship Therapy",
            year: "2021",
            description: "Specialized training in couples therapy techniques and family systems approach"
        },
        {
            title: "Communication & Conflict Resolution",
            organization: "Gottman Institute",
            year: "2020",
            description: "Advanced training in evidence-based methods for improving relationship communication"
        },
        {
            title: "Life Coaching Certification",
            organization: "Life Coach Institute",
            year: "2019",
            description: "Foundation in coaching principles, goal setting, and personal development strategies"
        }
    ];

    const stats = [
        { number: "50+", label: "Couples Transformed" },
        { number: "95%", label: "Success Rate" },
        { number: "3+", label: "Years Experience" },
        { number: "200+", label: "Hours of Training" }
    ];

    return (
        <div className="about-page bg-white pt-[4rem]">
            <Navbar />
            {/* Hero Section */}
            <section className="hero py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7AB3B310 0%, #B2E5E520 100%)' }}>
                {/* Background decorative elements */}
                <div className="absolute top-20 right-10 w-32 h-32 bg-teal-100 rounded-full opacity-30"></div>
                <div className="absolute rounded-full bottom-32 left-16 w-20 h-20 opacity-10" style={{ backgroundColor: '#7AB3B3' }}></div>
                <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-200 rounded-full opacity-25"></div>

                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6" data-aos='fade-in' data-aos-duration='1000'>
                                <Sparkles style={{ color: '#7AB3B3' }} size={36} />
                                <span className="text-lg font-medium" style={{ color: '#7AB3B3' }} >
                                    About Najiha
                                </span>
                            </div>

                            <h1 data-aos='fade-up' data-aos-duration='1500' className="text-4xl md:text-5xl font-[800] text-gray-800 mb-6 leading-tight">
                                Hi, I'm <span style={{ color: '#7AB3B3' }}>Najiha</span>
                            </h1>

                            <h2 data-aos='fade-up' data-aos-duration='1700' className="text-xl font-semibold text-gray-600 mb-6">
                                LIFE STYLE COACH AND WRITER
                            </h2>

                            <p data-aos='fade-up' data-aos-duration='1900' className="text-gray-600 text-lg leading-relaxed mb-8">
                                As a lifestyle coach and writer, I'm passionate about helping women step into their fullest potential with confidence, clarity, and purpose. Through personalized coaching, I support women in building emotional resilience, setting healthy boundaries, and creating a life that aligns with their values. My approach is gentle, yet empowering—focused on real-life growth, not perfection.
                            </p>

                            <p data-aos='fade-up' data-aos-duration='2100' className="text-gray-600 text-lg leading-relaxed mb-8">
                                Whether through one-on-one sessions or my writing, I create a safe and judgment-free space where women feel seen, supported, and uplifted. I believe lasting change begins with self-awareness and is sustained through consistent, meaningful action. Together, we'll turn small steps into powerful transformations.
                            </p>

                            <Link href='/contact-us'>  <button data-aos='fade-up'
                                className="text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
                                style={{ backgroundColor: '#7AB3B3' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#6AA3A3'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#7AB3B3'}
                            >
                                <Calendar size={20} />
                                Book a Discovery Session
                            </button></Link>
                        </div>

                        <div className="relative" data-aos='fade-left'>
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop"
                                    alt="Najiha - Life Style Coach"
                                    className="w-full  shadow-2xl"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-50"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-30 rounded-full" style={{ backgroundColor: '#7AB3B3' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={index * 200} // Delay increases by 500ms per item
                            >
                                <div
                                    className="text-3xl md:text-4xl font-bold mb-2"
                                    style={{ color: '#7AB3B3' }}
                                >
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Journey Section */}
            <section className="journey py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-4">
                            <Heart style={{ color: '#7AB3B3' }} size={40} />
                        </div>
                        <h2 data-aos='fade-up' className="text-4xl md:text-5xl font-[800] text-gray-800 mb-4">
                            My Journey
                        </h2>
                        <p data-aos='fade-up' className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Every journey has its beginning and its evolution. Here's how I discovered my passion
                            for helping women transform their lives and relationships.
                        </p>
                    </div>

                    {/* Journey Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-full p-1 shadow-lg flex gap-1 overflow-x-auto">
                            {Object.entries(journeySteps).map(([key, step]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-8 py-3 rounded-full transition-all text-[11px] sm:text-base duration-300 font-medium whitespace-nowrap ${activeTab === key
                                            ? 'text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-800'
                                        }`}
                                    style={activeTab === key ? { backgroundColor: '#7AB3B3' } : {}}
                                >
                                    {step.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Journey Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h3 data-aos='fade-up' className="text-2xl font-bold text-gray-800 mb-6">
                                {journeySteps[activeTab].title}
                            </h3>
                            <p data-aos='fade-up' className="text-gray-600 text-lg leading-relaxed mb-8">
                                {journeySteps[activeTab].content}
                            </p>

                            <div className="space-y-4">
                                <h4 data-aos='fade-up' className="font-semibold text-gray-800 mb-4">Key Highlights:</h4>
                                {journeySteps[activeTab].highlights.map((highlight, index) => (
                                    <div data-aos='fade-up' key={index} className="flex items-start gap-3">
                                        <CheckCircle style={{ color: '#7AB3B3' }} size={20} className="mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative" data-aos='fade-left'>
                                <img
                                    src={journeySteps[activeTab].image}
                                    alt={journeySteps[activeTab].title}
                                    className="w-full  shadow-xl"
                                />
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-100 rounded-full opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualifications Section */}
            <section className="qualifications py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-4">
                            <Award style={{ color: '#7AB3B3' }} size={40} />
                        </div>
                        <h2 data-aos='fade-up' className="text-4xl md:text-5xl font-[800] text-gray-800 mb-4">
                            Qualifications & Training
                        </h2>
                        <p data-aos='fade-up' className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            My commitment to excellence drives me to continuously expand my knowledge and skills
                            through certified training programs and ongoing education.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {qualifications.map((qual, index) => (
                            <div
                                data-aos='fade-up'
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#7AB3B320' }}>
                                            <BookOpen style={{ color: '#7AB3B3' }} size={24} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {qual.title}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="font-medium" style={{ color: '#7AB3B3' }}>
                                                {qual.organization}
                                            </span>
                                            <span className="text-gray-400">•</span>
                                            <span className="text-gray-600">{qual.year}</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {qual.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work With Me CTA Section */}
            <section className="work-with-me py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7AB3B3 0%, #6AA3A3 100%)' }}>
                {/* Background decorative elements */}
                <div className="absolute top-16 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
                <div className="absolute bottom-20 right-16 w-24 h-24 bg-white rounded-full opacity-10"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="mb-6">
                        <Users className="mx-auto text-white" size={48} />
                    </div>

                    <h2 data-aos='fade-up' className="text-4xl md:text-5xl font-[800] text-white mb-6">
                        Ready to Start Your Transformation?
                    </h2>

                    <p data-aos='fade-up' className="text-white/90 text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                        Take the first step towards the life and relationships you've always dreamed of.
                        In our discovery session, we'll explore your goals, challenges, and create a
                        personalized roadmap for your transformation journey.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                title: "Discovery Session",
                                description: "45-minute complimentary call to explore your goals and see if we're a good fit",
                                duration: "45 min • FREE"
                            },
                            {
                                title: "Personal Assessment",
                                description: "We'll identify your strengths, challenges, and create your personalized action plan",
                                duration: "Included"
                            },
                            {
                                title: "Custom Roadmap",
                                description: "Receive a tailored strategy to achieve your relationship and life goals",
                                duration: "Yours to keep"
                            }
                        ].map((item, index) => (
                            <div data-aos='fade-up' data-aos-duration="1000"
                                data-aos-delay={index * 200} key={index} className="text-center">
                                <div className="bg-white/20 rounded-2xl p-6 mb-4">
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-white/90 mb-4">{item.description}</p>
                                    <div className="text-white/80 font-medium">{item.duration}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href='/contact-us'>
                        <button
                            className="bg-white text-gray-800 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto hover:shadow-3xl"
                        >
                            <Calendar size={24} />
                            Book Your Discovery Session
                            <ArrowRight size={20} />
                        </button>
                    </Link>

                    <p className="text-white/70 text-sm mt-6">
                        No pressure, no commitment - just an honest conversation about your goals and how I can help you achieve them.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="contact-info py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Let's Connect
                        </h3>
                        <p className="text-gray-600">
                            Ready to start your journey? I'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                            <Mail style={{ color: '#7AB3B3' }} size={40} className="mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Email Me</h4>
                            <p className="text-gray-600 mb-4">For general inquiries and booking</p>
                            <a
                                href="mailto:hello@najiha.com"
                                className="font-medium hover:underline"
                                style={{ color: '#7AB3B3' }}
                            >
                                hello@najiha.com
                            </a>
                        </div>

                        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                            <MapPin style={{ color: '#7AB3B3' }} size={40} className="mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Location</h4>
                            <p className="text-gray-600 mb-4">Serving clients worldwide</p>
                            <span className="text-gray-700">Online Sessions Available</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;