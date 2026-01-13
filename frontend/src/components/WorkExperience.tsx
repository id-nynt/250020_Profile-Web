const WorkExperience = () => {
  const experiences = [
    {
      title: 'Software Engineer Internship',
      company: 'Jung Talents, NSW',
      period: '08/2025 – 12/2025',
      location: 'NSW',
      description: 'Industry-style software engineering internship program with professional development practices',
      responsibilities: [
        'Implemented backend and frontend components using ASP.NET, REST APIs, and React',
        'Collaborated via GitHub pull requests and code reviews following Agile workflows',
        'Assisted with CI/CD pipelines and cloud deployment for real-world release workflows',
        'Communicated with mentors and team to clarify requirements and iterate based on feedback'
      ]
    },
    {
      title: 'Customer Service',
      company: 'Various Restaurants in Wollongong',
      period: '09/2024 – Current',
      location: 'Wollongong, NSW',
      description: 'Customer-facing roles at Viet Viral, Jin\'s Place, and Bangkok Balcony',
      responsibilities: [
        'Worked effectively in fast-paced environments with strong teamwork and communication',
        'Followed procedures accurately while adapting to changing priorities and customer needs',
        'Developed excellent time-management and interpersonal skills'
      ]
    },
    {
      title: 'Interior Designer',
      company: 'TTT Architects & Adrien Desport Architects',
      period: '11/2019 – 03/2024',
      location: 'Vietnam',
      description: 'Professional interior design experience in architectural firms',
      responsibilities: [
        'Interacted effectively with stakeholders throughout all stages of projects',
        'Managed design requirements, design documentation, and project deadlines with attention to detail',
        'Developed strong client communication and project management skills'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Professional experience that has shaped my technical skills and work ethic.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-primary-50 rounded-lg p-6 border-l-4 border-accent-600">
              <h4 className="text-xl font-semibold text-primary-800 mb-2">
                {exp.title}
              </h4>
              <div className="text-accent-600 font-medium mb-1">{exp.company}</div>
              <div className="text-primary-600 text-sm mb-2">{exp.period} | {exp.location}</div>
              <p className="text-primary-700 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start text-primary-700 text-sm">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
