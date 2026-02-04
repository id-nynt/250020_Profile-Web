const Skills = () => {
  // Technical Skills organized by category with icons
  const technicalSkills = [
    {
      category: 'Programming & Core',
      icon: '💻',
      skills: ['Python', 'C#', 'JavaScript']
    },
    {
      category: 'Backend & APIs',
      icon: '🔧',
      skills: ['.NET', 'REST APIs', 'Microservices']
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Tailwind CSS', 'HTML', 'CSS']
    },
    {
      category: 'Data & AI',
      icon: '🤖',
      skills: ['Pandas', 'NumPy', 'scikit-learn', 'ML Pipelines', 'RAG Concepts']
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: ['SQL', 'MySQL']
    },
    {
      category: 'Infrastructure & Tools',
      icon: '☁️',
      skills: ['Git', 'CI/CD', 'Docker', 'AWS']
    },
    {
      category: 'Practices & Design',
      icon: '✨',
      skills: ['Agile/Scrum', 'Testing Fundamentals', 'Figma', 'Photoshop', 'Canva']
    }
  ]

  const softSkills = [
    {
      icon: '💬',
      title: 'Technical Communication & Stakeholder Management',
      description: 'Clear articulation of complex technical concepts to diverse audiences'
    },
    {
      icon: '✅',
      title: 'Attention to Detail & Quality Assurance',
      description: 'Meticulous approach to identifying issues and ensuring high-quality deliverables'
    },
    {
      icon: '🎯',
      title: 'Problem-solving & Ownership',
      description: 'Proactive identification of solutions with accountability and follow-through'
    },
    {
      icon: '📚',
      title: 'Self-Directed Learning & Continuous Improvement',
      description: 'Continuous skill development and adaptation to new technologies'
    },
    {
      icon: '👥',
      title: 'Project Leadership & Team Coordination',
      description: 'Effective team guidance and successful project delivery at scale'
    },
    {
      icon: '⏱️',
      title: 'Time Management & Organization',
      description: 'Efficient planning and execution to meet deadlines and manage priorities'
    }
  ]

  return (
    <>
      {/* Technical Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image Left */}
            <div className="rounded-lg overflow-hidden shadow-sm lg:h-full h-[250px]">
              <img 
                src="/images/home/technical-skills.jpg" 
                alt="Technical Skills"
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Content Right */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl text-center lg:text-left font-bold text-black mb-4 font-orbitron">
                Technical Skills
              </h2>
              <div className="w-24 h-1 mb-6 justify-center lg:justify-start mx-auto lg:mx-0" style={{ backgroundColor: '#ff903b' }}></div>
              <p className="text-lg text-gray-700 mb-8">
                A comprehensive overview of my technical competencies
              </p>
              
              <div className="space-y-6">
                {technicalSkills.map((skillGroup, index) => (
                  <div key={index} className={`flex items-start gap-4 pb-6 ${index !== technicalSkills.length - 1 ? 'border-b border-gray-300' : ''}`}>
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#000' }}
                    >
                      <span className="text-xl">{skillGroup.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{ backgroundColor: '#f0f0f0', color: '#000' }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-orbitron">
              Soft Skills
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#ff903b' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="rounded-lg p-6 text-center"
                style={{ backgroundColor: 'transparent' }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#000' }}
                >
                  <span className="text-xl">{skill.icon}</span>
                </div>
                <h4 className="font-semibold text-black mb-2 leading-tight">
                  {skill.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills