import { Download, MapPin, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = async () => {
    try {
      const response = await fetch("/abela.pdf");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Abel_Adamu_Shumet_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to download CV:", response.status);
      }
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center items-center">
          <div className="text-center max-w-4xl">
            <h1
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
              data-testid="hero-title"
            >
              Hi, I'm{" "}
              <span className="text-primary-600">Abel Adamu Shumet</span>
            </h1>
            <h2
              className="text-xl md:text-2xl text-slate-600 mb-6 font-light"
              data-testid="hero-subtitle"
            >
              Junior Data Scientist & AI Enthusiast
            </h2>
            <p
              className="text-lg text-slate-600 mb-8 max-w-2xl"
              data-testid="hero-description"
            >
              Passionate about transforming data into actionable insights.
              Specialized in machine learning, NLP, and AI-driven solutions with
              hands-on experience in finance, security, and energy sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={scrollToProjects}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl"
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={downloadCV}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold"
                data-testid="button-download-cv"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center">
              <div
                className="flex items-center text-slate-600"
                data-testid="location-info"
              >
                <MapPin className="mr-2 h-4 w-4 text-primary-600" />
                <span>Bahir Dar, Ethiopia</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:abeladamushumet@gmail.com"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/abeladamushumet"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/abeladamushumet"
                  className="text-slate-400 hover:text-primary-600 transition-colors"
                  data-testid="link-github"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
