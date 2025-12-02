const Skills = () => {
  const programmingFrameworks = {
    languages: ['Python', 'JavaScript', 'C#'],
    frameworks: ['React'],
    databases: ['MySQL'],
    cloudDevOps: ['AWS', 'Docker']
  }

  const toolsTechnologies = [
    'Git & GitHub',
    'VS Code',
    'Jupyter',
    'AWS (EC2, S3, IAM)',
    'CI/CD basics'
  ]

  const softSkills = [
    'Communication Skills',
    'Organisational Skills', 
    'Teamwork & Leadership',
    'Problem-solving',
    'Time Management',
    'Adaptability'
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
            A comprehensive overview of my technical competencies and the tools I use to build modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming & Frameworks */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-primary-200">
            <h3 className="text-xl font-semibold text-primary-800 mb-6 text-center">
              Programming & Frameworks
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-primary-700 mb-3">Languages:</h4>
                <div className="flex flex-wrap gap-2">
                  {programmingFrameworks.languages.map((lang, index) => (
                    <span key={index} className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">{lang}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-primary-700 mb-3">Frameworks:</h4>
                <div className="flex flex-wrap gap-2">
                  {programmingFrameworks.frameworks.map((framework, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">{framework}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-primary-700 mb-3">Databases:</h4>
                <div className="flex flex-wrap gap-2">
                  {programmingFrameworks.databases.map((db, index) => (
                    <span key={index} className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm">{db}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-primary-700 mb-3">Cloud & DevOps:</h4>
                <div className="flex flex-wrap gap-2">
                  {programmingFrameworks.cloudDevOps.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-primary-200">
            <h3 className="text-xl font-semibold text-primary-800 mb-6 text-center">
              Tools & Technologies
            </h3>
            <div className="space-y-4">
              {toolsTechnologies.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                >
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                  <span className="text-primary-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-primary-200">
            <h3 className="text-xl font-semibold text-primary-800 mb-6 text-center">
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-accent-50 rounded-lg hover:bg-accent-100 transition-colors"
                >
                  <div className="w-3 h-3 bg-accent-600 rounded-full mr-3"></div>
                  <span className="text-primary-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills