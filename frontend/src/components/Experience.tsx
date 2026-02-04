const Experience = () => {
  const volunteering = [
    {
      title: 'Pulse Volunteer',
      organization: 'University of Wollongong',
      period: '08/2024 – Current',
      description: 'Supporting peers through workshop organization and campus-wide activities, fostering collaboration and building communication skills.'
    },
    {
      title: 'Course Team Leader',
      organization: 'TCS Sydney Marathon presented by ASICS',
      period: '09/2024',
      description: 'Led volunteer team coordination, demonstrating project leadership and organizational capabilities.'
    },
    {
      title: 'CREG Volunteer',
      organization: 'Corrimal Rotary Environment Group',
      period: '08/2024 – 02/2025',
      description: 'Collaborated on environmental initiatives, demonstrating teamwork and community commitment.'
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: '#e0e0e0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-orbitron">
            Volunteer & Leadership
          </h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Volunteer work and leadership roles that have shaped my interpersonal and organisational skills.
          </p>
        </div>

        <div className="space-y-6">
          {volunteering.map((vol, index) => (
            <div key={index} className="rounded-lg p-6 border-l-4" style={{ backgroundColor: 'rgb(240, 240, 240)', borderColor: '#296fb1' }}>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {vol.title}
              </h4>
              <div className="text-gray-700 font-medium mb-1">{vol.organization}</div>
              <div className="text-gray-700 text-sm mb-3">{vol.period}</div>
              <p className="text-gray-700">{vol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience