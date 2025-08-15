export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech office environment with laptops and data displays" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed" data-testid="about-description-1">
              I am a passionate and detail-oriented Junior Data Scientist specializing in machine learning, 
              data analysis, and AI-driven solutions. My expertise lies in developing predictive models, 
              performing in-depth data analysis, and delivering actionable insights.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed" data-testid="about-description-2">
              I have worked on multiple real-world projects through 10 Academy and industry internships, 
              gaining hands-on experience in finance, security, energy, and NLP applications.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-slate-50 rounded-lg" data-testid="stat-projects">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">6+</h3>
                <p className="text-slate-600">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg" data-testid="stat-experience">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">2+</h3>
                <p className="text-slate-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
