const Competitions = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-orbitron">
            Competitions
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#ff903b' }}></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Competitive programming achievements that demonstrate problem-solving skills and technical excellence.
          </p>
        </div>

        <div className="mx-auto">
          <div className="bg-white rounded-xl px-20 py-8 border border-gray-300 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  IEEE Xtreme 24-hour Programming Competition
                </h3>
                <div className="font-medium mb-3" style={{ color: '#ff903b' }}>26/10/2024 – 27/10/2024</div>
                <p className="text-gray-700 mb-6">
                  Competed in a 24-hour global programming challenge to solve complex problems in a team of two. 
                  This intensive competition tested algorithmic thinking, teamwork, and endurance under pressure.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start text-gray-700">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Team-based competitive programming</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>24-hour continuous problem solving</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: '#ff903b' }}></span>
                    <span>Global competition with international ranking</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center h-full">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-300 h-full justify-center flex flex-col">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#ff903b' }}>11th</div>
                  <div className="text-gray-600 font-medium mb-4">in Australia</div>
                  
                  <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: 'rgba(255, 144, 59, 0.1)', border: '1px solid rgba(255, 144, 59, 0.3)' }}>
                    <div className="text-2xl font-bold text-gray-800">1838th</div>
                    <div className="text-gray-600 text-sm">globally</div>
                  </div>
                  
                  <div className="font-semibold" style={{ color: '#ff903b' }}>
                    Score: 519.09
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competitions