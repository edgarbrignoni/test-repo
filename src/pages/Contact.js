import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="fade-in">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Contact Us</h2>
              <p className="lead">Reach out to schedule a consultation or learn more about our services.</p>
              <div className="d-flex mb-4">
                <div className="me-4">
                  <i className="bi-geo-alt fs-3 accent-color"></i>
                </div>
                <div>
                  <h5>Office Address</h5>
                  <p>Executive Bldg. Suite 704-A<br />623 Ponce de Leon Ave.<br />San Juan, PR 00917</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="me-4">
                  <i className="bi-telephone fs-3 accent-color"></i>
                </div>
                <div>
                  <h5>Phone Number</h5>
                  <p>+1 (787) 754-1460</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="me-4">
                  <i className="bi-envelope fs-3 accent-color"></i>
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p>oscar.amador@amadorlaw.net</p>
                </div>
              </div>
              <div className="mt-5">
                <h5>Office Hours</h5>
                <p>Monday - Friday: 8:30 AM - 5:30 PM<br />Saturday: By appointment only<br />Sunday: Closed</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h4 className="card-title mb-4">Send Us a Message</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="service" className="form-label">Service of Interest</label>
                      <select 
                        className="form-select" 
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="business">Business Law</option>
                        <option value="realestate">Real Estate Law</option>
                        <option value="family">Family Law</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        rows="5" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center mb-4">Our Location</h3>
              <div className="ratio ratio-16x9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.45135582532!2d-87.62777782369103!3d41.88388697123923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8dc34c44d%3A0x9af6a3f281c2f3e2!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1send2s!4v1689876313875!5m2!1sen!2s" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
