const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-800 mb-4">
              Software Developer with a Passion for Innovation
            </h3>
            
            <p className="text-primary-700 leading-relaxed">
              Motivated Master of Computer Science student with strong foundations in software engineering, 
              web development, and cloud technologies. Transitioning from design and customer-facing roles 
              into IT, bringing excellent problem-solving skills, attention to detail, and adaptability.
            </p>

            <p className="text-primary-700 leading-relaxed">
              Experienced with building full-stack and machine-learning projects, and eager to contribute 
              as an IT or Software Engineering Intern. Currently maintaining a high distinction result 
              throughout my Master of Computer Science program.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600 mb-2">2026</div>
                <div className="text-sm text-primary-600">Expected Graduation</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600 mb-2">HD</div>
                <div className="text-sm text-primary-600">Current Result</div>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About