import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import PDFDocument from 'pdfkit';

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", validatedData);
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // CV Download endpoint
  app.get("/api/download-cv", async (req, res) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      
      // Set response headers
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Abel_Adamu_Shumet_CV.pdf"');
      
      // Pipe the PDF document to the response
      doc.pipe(res);
      
      // Header
      doc.fontSize(24).font('Helvetica-Bold').text('Abel Adamu Shumet', { align: 'center' });
      doc.fontSize(16).font('Helvetica').text('Junior Data Scientist', { align: 'center' });
      doc.moveDown(0.5);
      
      // Contact Information
      doc.fontSize(12).text('📍 Bahir Dar, Ethiopia | 📧 abeladamushumet@gmail.com | 📱 (+251) 963 437 349', { align: 'center' });
      doc.text('🔗 LinkedIn: linkedin.com/in/abeladamushumet | GitHub: github.com/abeladamushumet', { align: 'center' });
      doc.moveDown(1);
      
      // About Me
      doc.fontSize(16).font('Helvetica-Bold').text('About Me');
      doc.fontSize(12).font('Helvetica').text('I am a passionate and detail-oriented Junior Data Scientist specializing in machine learning, data analysis, and AI-driven solutions. My expertise lies in developing predictive models, performing in-depth data analysis, and delivering actionable insights. I have worked on multiple real-world projects through 10 Academy and industry internships, gaining hands-on experience in finance, security, energy, and NLP applications.');
      doc.moveDown(1);
      
      // Skills
      doc.fontSize(16).font('Helvetica-Bold').text('Skills');
      doc.fontSize(12).font('Helvetica-Bold').text('Programming & Data Tools:');
      doc.fontSize(12).font('Helvetica').text('Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch), SQL, R');
      doc.fontSize(12).font('Helvetica-Bold').text('EDA & Visualization:');
      doc.fontSize(12).font('Helvetica').text('Matplotlib, Seaborn, Plotly');
      doc.fontSize(12).font('Helvetica-Bold').text('Version Control:');
      doc.fontSize(12).font('Helvetica').text('Git, GitHub');
      doc.fontSize(12).font('Helvetica-Bold').text('Other:');
      doc.fontSize(12).font('Helvetica').text('NLP, Time Series Forecasting, Computer Vision');
      doc.moveDown(1);
      
      // Projects
      doc.fontSize(16).font('Helvetica-Bold').text('Key Projects');
      
      const projects = [
        {
          title: 'Intelligent Complaint Analysis',
          description: 'Developed a Retrieval-Augmented Generation (RAG) chatbot to analyze customer complaints for financial services. Integrated NLP techniques for topic extraction, sentiment analysis, and intelligent search across large datasets. Built an interactive user interface using Streamlit for customer service teams.'
        },
        {
          title: 'Credit Card Fraud Detection',
          description: 'Built a machine learning model to detect fraudulent transactions with high recall for imbalanced datasets. Applied SMOTE oversampling and Random Forest classification to improve fraud detection rates. Achieved a recall of over 99% for fraudulent transactions.'
        },
        {
          title: 'Credit Risk Probability Model',
          description: 'Designed a credit risk scoring system using alternative behavioral data (RFM analysis from eCommerce). Implemented logistic regression and gradient boosting models for risk prediction. Delivered a FastAPI-based deployment for real-time scoring.'
        }
      ];
      
      projects.forEach(project => {
        doc.fontSize(14).font('Helvetica-Bold').text(project.title);
        doc.fontSize(12).font('Helvetica').text(project.description);
        doc.moveDown(0.5);
      });
      
      // Work Experience
      doc.fontSize(16).font('Helvetica-Bold').text('Work Experience');
      
      doc.fontSize(14).font('Helvetica-Bold').text('Data Science Intern – Information Network Security Agency (INSA) – Addis Ababa, Ethiopia');
      doc.fontSize(12).font('Helvetica-Oblique').text('Jun 2025 – Present');
      doc.fontSize(12).font('Helvetica').text('• Developed computer vision solutions for object detection in security-related imagery');
      doc.text('• Built Amharic speech-to-text NLP models for transcribing and analyzing audio data');
      doc.text('• Conducted EDA, data preprocessing, and model optimization to improve system accuracy');
      doc.moveDown(0.5);
      
      doc.fontSize(14).font('Helvetica-Bold').text('Data Science Trainee – 10 Academy – Remote');
      doc.fontSize(12).font('Helvetica-Oblique').text('May 2025 – Present');
      doc.fontSize(12).font('Helvetica').text('• Built portfolio forecasting & optimization systems using ARIMA and LSTM models');
      doc.text('• Designed NER models for Amharic e-commerce data and deployed solutions with FastAPI & Docker');
      doc.text('• Delivered high-quality reports simulating real-world consulting workflows');
      doc.moveDown(1);
      
      // Certifications
      doc.fontSize(16).font('Helvetica-Bold').text('Certifications');
      doc.fontSize(12).font('Helvetica').text('• Machine Learning for Data Science Projects – April 17, 2025');
      doc.text('• Artificial Intelligence Fundamentals – February 11, 2025');
      doc.text('• Data Analysis Fundamentals – November 1, 2024');
      
      // End the document
      doc.end();
      
    } catch (error) {
      console.error('Error generating CV:', error);
      res.status(500).json({ 
        success: false, 
        message: "Error generating CV" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
