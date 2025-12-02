const Experience = () => {
  const experiences = [
    {
      title: 'Hospitality Roles',
      company: 'Various Restaurants in Wollongong',
      period: '09/2024 – Current',
      location: 'Wollongong, NSW',
      description: 'Working at Viet Viral (Figtree/Dapto), Jin\'s Place (Thirroul), and Bangkok Balcony (West Wollongong)',
      responsibilities: [
        'Developed strong communication, teamwork, and time management skills in fast-paced environments',
        'Collaborated closely with chefs and teammates, following instructions accurately and efficiently',
        'Quickly adapted to maintain high operational standards across multiple establishments'
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

  const volunteering = [
    {
      title: 'Pulse Volunteer',
      organization: 'University of Wollongong',
      period: '08/2024 – Current',
      description: 'Supporting peers by organizing workshops and campus-wide activities, fostering collaboration and communication skills.'
    },
    {
      title: 'CREG Volunteer',
      organization: 'Corrimal Rotary Environment Group',
      period: '08/2024 – 02/2025',
      description: 'Collaborated on environmental cleanup initiatives, demonstrating teamwork and organizational skills.'
    },
    {
      title: 'Course Team Leader',
      organization: 'TCS Sydney Marathon presented by ASICS',
      period: '09/2024',
      description: 'Coordinated volunteer teams, showcasing leadership and planning capabilities.'
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
            Work experience and volunteer work that have shaped my skills and work ethic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-primary-800 mb-6">
              Work Experience
            </h3>
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
                        <span className="text-accent-600 mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-primary-800 mb-6">
              Volunteer & Leadership
            </h3>
            <div className="space-y-6">
              {volunteering.map((vol, index) => (
                <div key={index} className="bg-accent-50 rounded-lg p-6 border-l-4 border-primary-600">
                  <h4 className="text-xl font-semibold text-primary-800 mb-2">
                    {vol.title}
                  </h4>
                  <div className="text-primary-600 font-medium mb-1">{vol.organization}</div>
                  <div className="text-primary-600 text-sm mb-3">{vol.period}</div>
                  <p className="text-primary-700">{vol.description}</p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience