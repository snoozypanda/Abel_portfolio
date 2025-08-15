import { Bot, Brain, BarChart3 } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Machine Learning for Data Science Projects",
      date: "April 17, 2025",
      icon: Bot,
      color: "text-primary-600",
      bgColor: "from-primary-50 to-primary-100",
      borderColor: "border-primary-200"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      date: "February 11, 2025",
      icon: Brain,
      color: "text-secondary-600",
      bgColor: "from-secondary-50 to-secondary-100",
      borderColor: "border-secondary-200"
    },
    {
      title: "Data Analysis Fundamentals",
      date: "November 1, 2024",
      icon: BarChart3,
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="certifications-title">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="certifications-description">
            Continuous learning and professional development achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${cert.bgColor} p-8 rounded-xl border ${cert.borderColor}`}
              data-testid={`certification-card-${index}`}
            >
              <div className={`${cert.color} text-4xl mb-4`}>
                <cert.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2" data-testid={`certification-title-${index}`}>
                {cert.title}
              </h3>
              <p className={`${cert.color} font-medium`} data-testid={`certification-date-${index}`}>
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
