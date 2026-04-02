import React from 'react';
import data from '../../data/portfolio.json';
import { toast } from 'react-toastify';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { contact } = data;

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        toast.success('Message sent safely to your email!', {
          position: "bottom-right",
          theme: "dark"
        });
        form.reset();
      } else {
        toast.error('Oops! There was a problem sending your message.', {
          position: "bottom-right",
          theme: "dark"
        });
      }
    } catch (error) {
       toast.error('Oops! There was a problem sending your message.', {
          position: "bottom-right",
          theme: "dark"
        });
    }
  };

  return (
    <div id="contact" className="py-24 bg-base-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-display font-bold mb-4">{contact.titlePrefix} <span className="text-primary">{contact.titleHighlight}</span></h2>
            <p className="text-base-content/70">{contact.subtitle}</p>
          </div>
          
          <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" name="name" placeholder="John Doe" className="input input-bordered focus:input-primary bg-base-200" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" name="email" placeholder="hello@example.com" className="input input-bordered focus:input-primary bg-base-200" required />
              </div>
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Message</span></label>
              <textarea name="message" className="textarea textarea-bordered focus:textarea-primary min-h-[150px] bg-base-200" placeholder="Your amazing idea..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block text-lg mt-2 gap-2">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
