const Competitions = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Competitions
          </h2>
          <div className="w-24 h-1 bg-accent-600 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Competitive programming achievements that demonstrate problem-solving skills and technical excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white to-accent-50 rounded-xl p-8 border border-accent-200 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                  IEEE Xtreme 24-hour Programming Competition
                </h3>
                <div className="text-accent-600 font-medium mb-3">26/10/2024 – 27/10/2024</div>
                <p className="text-primary-700 mb-6">
                  Competed in a 24-hour global programming challenge to solve complex problems in a team of two. 
                  This intensive competition tested algorithmic thinking, teamwork, and endurance under pressure.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-start text-primary-700">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Team-based competitive programming</span>
                  </div>
                  <div className="flex items-start text-primary-700">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>24-hour continuous problem solving</span>
                  </div>
                  <div className="flex items-start text-primary-700">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Global competition with international ranking</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-200">
                  <div className="text-4xl font-bold text-accent-600 mb-2">11th</div>
                  <div className="text-primary-600 font-medium mb-4">in Australia</div>
                  
                  <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-primary-800">1838th</div>
                    <div className="text-primary-600 text-sm">globally</div>
                  </div>
                  
                  <div className="text-accent-600 font-semibold">
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