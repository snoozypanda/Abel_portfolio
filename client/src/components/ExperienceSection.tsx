import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      position: "Data Science Intern",
      company: "Information Network Security Agency (INSA)",
      location: "Addis Ababa, Ethiopia",
      period: "Jun 2025 - Present",
      color: "primary",
      achievements: [
        "Developed computer vision solutions for object detection in security imagery",
        "Built Amharic speech-to-text NLP models for audio transcription",
        "Conducted EDA and model optimization for improved accuracy"
      ]
    },
    {
      position: "Data Science Trainee",
      company: "10 Academy",
      location: "Remote",
      period: "May 2025 - Present",
      color: "secondary",
      achievements: [
        "Built portfolio forecasting systems using ARIMA and LSTM models",
        "Designed NER models for Amharic e-commerce data",
        "Deployed solutions with FastAPI & Docker"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="experience-title">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="experience-description">
            Professional journey in data science and AI development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${
                  exp.color === 'primary' ? 'bg-primary-600' : 'bg-secondary-600'
                } rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'
                }`}>
                  <div 
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                    data-testid={`experience-card-${index}`}
                  >
                    <div className="flex items-center mb-2">
                      <span className={`${
                        exp.color === 'primary' ? 'bg-primary-100 text-primary-700' : 'bg-secondary-100 text-secondary-700'
                      } px-3 py-1 rounded-full text-sm font-semibold`}>
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1" data-testid={`experience-position-${index}`}>
                      {exp.position}
                    </h3>
                    <p className={`${
                      exp.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                    } font-medium mb-3`} data-testid={`experience-company-${index}`}>
                      {exp.company}
                    </p>
                    <p className="text-slate-600 mb-3" data-testid={`experience-location-${index}`}>
                      {exp.location}
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <CheckCircle className={`${
                            exp.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'
                          } mt-1 mr-2 flex-shrink-0 w-4 h-4`} />
                          <span data-testid={`experience-achievement-${index}-${achievementIndex}`}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
