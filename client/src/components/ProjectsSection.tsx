import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Intelligent Complaint Analysis",
      description: "Developed a RAG chatbot for customer complaint analysis using NLP techniques for topic extraction and sentiment analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["NLP", "RAG", "Streamlit"],
      colors: "bg-primary-100 text-primary-700"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Built ML model for fraudulent transaction detection with 99%+ recall using SMOTE oversampling and Random Forest.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["ML", "SMOTE", "Random Forest"],
      colors: "bg-secondary-100 text-secondary-700"
    },
    {
      title: "Credit Risk Probability Model",
      description: "Designed credit risk scoring system using RFM analysis with logistic regression and gradient boosting models.",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Risk Analysis", "FastAPI", "RFM"],
      colors: "bg-emerald-100 text-emerald-700"
    },
    {
      title: "Insurance Risk Analytics",
      description: "Conducted EDA and built predictive models for insurance claims data to optimize premium pricing strategies.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Insurance", "EDA", "DVC"],
      colors: "bg-purple-100 text-purple-700"
    },
    {
      title: "Brent Oil Price Analysis",
      description: "Performed time series change point detection to identify significant shifts in Brent oil prices and market regimes.",
      image: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Time Series", "Change Point", "Visualization"],
      colors: "bg-orange-100 text-orange-700"
    },
    {
      title: "Portfolio Forecasting & Optimization",
      description: "Predicted stock prices using ARIMA and LSTM models, with LSTM achieving 12% better forecast accuracy.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["LSTM", "ARIMA", "Portfolio"],
      colors: "bg-red-100 text-red-700"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="projects-description">
            Real-world applications of data science and machine learning across various industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              data-testid={`project-card-${index}`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} project visualization`}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 ${project.colors} text-sm rounded-full`}
                      data-testid={`project-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://github.com/abeladamushumet" 
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                  data-testid={`project-link-${index}`}
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
            data-testid="button-view-all-projects"
          >
            View All Projects <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
