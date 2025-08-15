import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadCV = async () => {
    try {
      const response = await fetch('/api/download-cv');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Abel_Adamu_Shumet_CV.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "CV downloaded successfully!",
          description: "Thank you for your interest in my profile.",
        });
      }
    } catch (error) {
      toast({
        title: "Error downloading CV",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="contact-description">
            Let's discuss how we can work together to transform your data into actionable insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern collaborative tech office environment with team working on data projects" 
              className="rounded-xl shadow-lg w-full h-auto mb-8"
              data-testid="contact-image"
            />
            
            <div className="space-y-6">
              <div className="flex items-start" data-testid="contact-email">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary-600 w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">abeladamushumet@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start" data-testid="contact-phone">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary-600 w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">(+251) 963 437 349</p>
                </div>
              </div>
              
              <div className="flex items-start" data-testid="contact-location">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-600 w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Location</h3>
                  <p className="text-slate-600">Bahir Dar, Ethiopia</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/abeladamushumet" 
                    className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                    data-testid="contact-linkedin"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/abeladamushumet" 
                    className="w-12 h-12 bg-slate-800 hover:bg-slate-900 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                    data-testid="contact-github"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://t.me/ab_el_16" 
                    className="w-12 h-12 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                    data-testid="contact-telegram"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  onClick={downloadCV}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl"
                  data-testid="button-download-full-cv"
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download Full CV
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6" data-testid="contact-form-title">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject of your message"
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold"
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
