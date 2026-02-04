const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 font-orbitron">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-primary-800 mb-4">
              Software Engineer with System Thinking
            </h3>
            
            <p className="text-primary-700 leading-relaxed">
              Software Engineer with proven expertise in full-stack, backend, and AI-assisted systems. 
              Demonstrated ability to rapidly master complex architectures, design scalable solutions, and deliver production-ready code. 
              Combines strong system thinking with exceptional communication skills developed through a unique creative design background, 
              enabling me to bridge technical and non-technical stakeholders effectively.
            </p>

            <p className="text-primary-700 leading-relaxed">
              Final year Master of Computer Science student at University of Wollongong maintaining 90/100 WAM with consistent 
              high-distinction results. Proven track record leading cross-functional teams, delivering enterprise-scale projects, 
              and implementing complex systems under tight deadlines.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600 mb-2">07/2026</div>
                <div className="text-sm text-primary-600">Expected Graduation</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600 mb-2">90/100</div>
                <div className="text-sm text-primary-600">Current WAM</div>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-primary-800 mb-6">
              What I Bring to the Table
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary-800">Technical Excellence</h4>
                  <p className="text-primary-600 text-sm">Strong programming skills in Python, JavaScript, and C# with modern frameworks</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary-800">Teamwork and Leadership Experience</h4>
                  <p className="text-primary-600 text-sm">Proven ability to coordinate teams and lead technical projects successfully</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary-800">Adaptability</h4>
                  <p className="text-primary-600 text-sm">Quick learner with experience transitioning from design to technology</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary-800">Communication Skills</h4>
                  <p className="text-primary-600 text-sm">Strong verbal and written communication from diverse professional experiences</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary-800">Cross-Disciplinary Problem-Solving</h4>
                  <p className="text-primary-600 text-sm">Unique blend of creative design thinking and technical depth enables innovative solutions and strong stakeholder communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About