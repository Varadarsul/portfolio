
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-darkbg">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-heading text-3xl font-bold mb-8">Contact Me</h2>
          <div className="w-20 h-1 bg-highlight mb-8"></div>
          <p className="text-gray-400 max-w-2xl">
            If you'd like to discuss opportunities, collaborations, or just want to say hello,
            feel free to reach out through any of the following channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex">
                <div className="bg-darkcard p-4 rounded-full border border-gray-800">
                  <Mail className="w-6 h-6 text-highlight" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:varadarsul11@gmail.com" className="text-gray-400 hover:text-highlight transition-colors">
                    varadarsul11@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-darkcard p-4 rounded-full border border-gray-800">
                  <Phone className="w-6 h-6 text-highlight" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+917620048466" className="text-gray-400 hover:text-highlight transition-colors">
                    +91-7620048466
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-6 text-white">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/varad-arsul-a731a6291" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-darkcard p-3 rounded-full border border-gray-800 hover:border-highlight transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-highlight" />
                </a>
                <a 
                  href="https://github.com/Varadarsul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-darkcard p-3 rounded-full border border-gray-800 hover:border-highlight transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-highlight" />
                </a>
                <a 
                  href="https://leetcode.com/u/varadarsul11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-darkcard p-3 rounded-full border border-gray-800 hover:border-highlight transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-highlight" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-darkcard p-8 rounded-lg border border-gray-800">
            <h3 className="text-xl font-medium mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-darkbg border-gray-800 focus:border-highlight"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-darkbg border-gray-800 focus:border-highlight"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="bg-darkbg border-gray-800 focus:border-highlight"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className="bg-darkbg border-gray-800 focus:border-highlight"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Button type="submit" className="w-full flex items-center justify-center gap-2 bg-highlight hover:bg-highlight/90">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
