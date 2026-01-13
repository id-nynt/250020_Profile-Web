const Experience = () => {
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
            Volunteer & Leadership
          </h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Volunteer work and leadership roles that have shaped my interpersonal and organizational skills.
          </p>
        </div>

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
    </section>
  )
}

export default Experience