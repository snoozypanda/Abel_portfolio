import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">
            Abel Adamu Shumet
          </h3>
          <p className="text-slate-400 mb-6" data-testid="footer-title">
            Junior Data Scientist & AI Enthusiast
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:abeladamushumet@gmail.com" 
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/abeladamushumet" 
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/abeladamushumet" 
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://t.me/ab_el_16" 
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="footer-telegram"
            >
              <Send className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-6">
            <p className="text-slate-400 text-sm" data-testid="footer-copyright">
              © 2025 Abel Adamu Shumet. All rights reserved. Built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
