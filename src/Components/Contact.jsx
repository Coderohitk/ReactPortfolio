import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_ovw74z4',           // ✅ Service ID
      'template_wmqketf',          // ✅ Template ID
      formRef.current,
      'AiqrNg7n2khsg3KxT'          // ✅ Public Key
    ).then(() => {
      setStatus('Message sent successfully!');
      formRef.current.reset();
    }).catch((error) => {
      console.error('EmailJS error:', error);
      setStatus('Failed to send. Please try again later.');
    });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <form ref={formRef} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" required />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Subject</label>
            <input type="text" name="title" className="form-control" placeholder="Optional" />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" className="form-control" rows="4" required></textarea>
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">Send Message</button>
            {status && <p className="mt-3 text-success">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

