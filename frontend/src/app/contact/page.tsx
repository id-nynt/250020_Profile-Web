'use client'

import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Footer from '@/components/Footer'

export default function ContactPage() {

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      iconImage: '/images/contact/email.svg',
      label: 'Email',
      value: 'id.tnyennhi@gmail.com',
      href: 'mailto:id.tnyennhi@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      iconImage: '/images/contact/phone.png',
      label: 'Phone',
      value: '0412 480 535',
      href: 'tel:0412480535'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      iconImage: '/images/contact/location.svg',
      label: 'Location',
      value: 'Wollongong NSW 2500',
      href: '#'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      iconImage: '/images/contact/linkedin.svg',
      label: 'LinkedIn',
      value: 'janny-tran-a31621192',
      href: 'https://www.linkedin.com/in/janny-tran-a31621192'
    },
    {
      icon: <Github className="w-5 h-5" />,
      iconImage: '/images/contact/github.svg',
      label: 'GitHub',
      value: 'id-nynt',
      href: 'https://github.com/id-nynt'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Content area with background */}
      <div className="flex-1 relative">
        {/* Background Image - only covers content area */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/contact-background.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Black Overlay */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Get In Touch
          </h1>
          <div className="w-36 h-1 mx-auto mb-6" style={{ backgroundColor: '#ff903b' }}></div>
          <p className="text-lg text-white max-w-3xl mx-auto">
            I'm currently seeking entry-level opportunities in software development. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side: What I'm Looking For and Quick Facts */}
          <div className="flex flex-col space-y-8 h-full">
            <div className="bg-gray-100 p-6 rounded-lg border-l-4" style={{ borderColor: '#ff903b' }}>
              <h3 className="text-lg font-semibold text-primary-800 mb-4">
                What I'm Looking For
              </h3>
              <ul className="space-y-3 text-primary-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <span>Software Development Internships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <span>Entry-level Full-stack Developer positions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <span>Junior roles in Cloud Computing (AWS)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" />
                  <span>Graduate programs in tech companies</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg border-l-4" style={{ borderColor: '#ff903b' }}>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Quick Facts
              </h3>
              <div className="text-primary-700 space-y-2">
                <p>🎓 Master of Computer Science (Expected July 2026)</p>
                <p>📍 Available for opportunities in NSW, Australia</p>
                <p>💼 Open to remote, hybrid, or on-site positions</p>
                <p>🚀 Passionate about learning new technologies</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Information */}
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <div className="space-y-4 lg:flex lg:flex-col lg:justify-between lg:h-full">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-sm transition-shadow border-l-4" style={{ borderColor: '#ff903b' }}>
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-sm">
                      {item.iconImage ? (
                        <Image
                          src={item.iconImage}
                          alt={item.label}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain filter invert"
                        />
                      ) : (
                        <div className="text-white">{item.icon}</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-700">{item.label}</p>
                      {item.href === '#' ? (
                        <p className="text-primary-600">{item.value}</p>
                      ) : (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-600 hover:text-accent-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}