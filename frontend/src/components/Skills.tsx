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
      skills: ['Git', 'Docker', 'AWS']
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
      icon: '📋',
      title: 'Clean Code Practices & Code Review',
      description: 'Commitment to maintainability, readability, and quality standards'
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
    }
  ]

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical competencies and soft skills that drive successful project delivery.
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary-800 mb-8 text-center">
            Technical Skills
          </h3>
          <div className="bg-white rounded-lg py-8 px-20 shadow-sm border border-primary-200">
            <div className="space-y-6">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index} className="grid grid-cols-[240px_1fr] gap-8 items-start pb-6 border-b border-primary-100 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skillGroup.icon}</span>
                    <h4 className="font-semibold text-primary-800">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-gradient-to-r from-accent-100 to-primary-100 text-primary-700 rounded-full text-sm font-medium hover:from-accent-200 hover:to-primary-200 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary-800 mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm border border-accent-200 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-primary-800 mb-2 text-sm">
                  {skill.title}
                </h4>
                <p className="text-primary-600 text-xs leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills