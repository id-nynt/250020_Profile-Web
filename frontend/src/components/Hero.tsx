'use client'

import { ArrowDown, Download } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8 mb-8 sm:mt-20 sm:mb-12 lg:mt-0 lg:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Janny Tran
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-6 font-medium">
              IT Intern
            </h2>
            <p className="text-lg text-white mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Master of Computer Science student passionate about building innovative solutions with modern technologies. Specializing in full-stack development, cloud computing, and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/documents/Janny_Tran_Resume.pdf"
                download="Janny_Tran_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors font-medium"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center px-6 py-3 border-2 border-accent-600 text-accent-600 rounded-lg hover:bg-accent-600 hover:text-white transition-colors font-medium"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full flex items-center justify-center">
                {/* Profile Image */}
                <div className="w-72 h-72 bg-white rounded-full overflow-hidden shadow-2xl relative">
                  <Image
                    src="/images/home/profile.jpg"
                    alt="Janny Tran Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-300 hover:text-accent-400 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}

export default Hero