
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Enquiry Sent",
        description: "Thank you for your interest! We'll contact you soon.",
      });
      setFormData({ name: '', mobile: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div id="enquiry" className="bg-pastel-cream/50 py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Get In Touch</h2>
          <p className="text-zinc-600">Have questions about our handcrafted products? Send us a message!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg shadow-sm border border-zinc-100">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-zinc-700 mb-1">Mobile Number</label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Your mobile number"
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              className="w-full min-h-[120px]"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full rounded-full shadow-md hover:shadow-lg transition-all"
          >
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
