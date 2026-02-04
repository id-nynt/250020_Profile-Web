const Education = () => {
  return (
    <section className="py-20 relative" style={{
      backgroundImage: 'url(/images/home/education-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Education
          </h2>
          <div className="w-24 h-1 bg-[#ff903b] mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Academic background and achievements that form the foundation of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Education */}
          <div className="rounded-lg p-8 shadow-sm border border-gray-600 relative" style={{ backgroundColor: 'rgba(90, 90, 90, 0.3)' }}>
            <div className="absolute -top-3 -right-3 bg-[#ff903b] font-semibold px-3 py-1 rounded-full text-sm font-medium">
              Current
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Master of Computer Science
              </h3>
              <div className="font-semibold text-lg mb-2" style={{ color: '#ff903b' }}>
                University of Wollongong, NSW
              </div>
              <div className="text-gray-300 mb-4">
                07/2024 – Expected 07/2026
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 144, 59, 0.3)' }}>
                <span className="font-medium text-white">Current WAM</span>
                <span className="text-2xl font-bold" style={{ color: '#ff903b' }}>90/100</span>
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h4 className="font-semibold text-white mb-2">Academic Status</h4>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Last-year student with high-distinction results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Consistently maintaining excellent academic performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Strong foundation in software engineering principles</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h4 className="font-semibold text-white mb-2">Key Focus Areas</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="px-2 py-1 rounded text-gray-200" style={{ backgroundColor: 'rgba(255, 111, 0, 0.15)' }}>Software Engineering</span>
                  <span className="px-2 py-1 rounded text-gray-200" style={{ backgroundColor: 'rgba(255, 111, 0, 0.15)' }}>Web Development</span>
                  <span className="px-2 py-1 rounded text-gray-200" style={{ backgroundColor: 'rgba(255, 111, 0, 0.15)' }}>Cloud Technologies</span>
                  <span className="px-2 py-1 rounded text-gray-200" style={{ backgroundColor: 'rgba(255, 111, 0, 0.15)' }}>Machine Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Education */}
          <div className="rounded-lg p-8 shadow-sm border border-gray-600" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Interior Design
              </h3>
              <div className="font-semibold text-lg mb-2" style={{ color: '#ff903b' }}>
                University of Architecture Ho Chi Minh City, Vietnam
              </div>
              <div className="text-gray-300 mb-4">
                09/2014 – 11/2019
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 144, 59, 0.15)' }}>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">🏆</span>
                  <h4 className="font-semibold text-white">Valedictorian</h4>
                </div>
                <p className="text-gray-200">Graduated as Valedictorian of Interior Design Course 2019</p>
                <div className="mt-2 text-sm text-gray-300">HD: 3.45/4.0 GPA</div>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h4 className="font-semibold text-white mb-2">Transferable Skills</h4>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Project management and client interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Attention to detail and design thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Creative problem-solving approaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Deadline management and documentation</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <h4 className="font-semibold text-white mb-2">Career Transition</h4>
                <p className="text-gray-300 text-sm">
                  Successfully transitioned from design to technology, bringing unique perspectives 
                  and problem-solving skills from creative industries to software development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Academic Information */}
        <div className="mt-12 rounded-lg p-8 shadow-sm border border-gray-600" style={{ backgroundColor: 'rgba(50, 50, 50, 0.1)' }}>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Academic Highlights & Continuous Learning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(20, 64, 129, 0.4)' }}>
              <div className="text-3xl mb-2">📚</div>
              <h4 className="font-semibold text-white mb-2">Self-Directed Learning</h4>
              <p className="text-gray-300 text-sm">
                Constantly updating skills through online courses, tutorials, and hands-on projects
              </p>
            </div>
            
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(20, 64, 129, 0.4)' }}>
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-white mb-2">Academic Excellence</h4>
              <p className="text-gray-300 text-sm">
                Consistent high-distinction results demonstrating commitment to quality work
              </p>
            </div>
            
            <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(20, 64, 129, 0.4)' }}>
              <div className="text-3xl mb-2">🌟</div>
              <h4 className="font-semibold text-white mb-2">Cross-Disciplinary Skills</h4>
              <p className="text-gray-300 text-sm">
                Unique blend of creative design background and technical computer science skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education