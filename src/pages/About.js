import React from 'react';

const About = () => {
  return (
    <div className="fade-in">
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">About Our Firm</h2>
              <p className="lead">Founded in 1998, Oscar Amador Ramirez has built a reputation for legal excellence and client-focused service.</p>
              <p>Our firm brings together attorneys with diverse backgrounds and expertise to provide comprehensive legal solutions for our clients. We believe in building long-term relationships based on trust, respect, and results.</p>
              <p>With offices in downtown Chicago, we serve clients throughout Illinois and across the country. Our attorneys are admitted to practice in multiple jurisdictions and have successfully handled cases at state and federal levels.</p>
              <div className="d-flex mt-4">
                <div className="me-4">
                  <h3 className="fw-bold accent-color">25+</h3>
                  <p>Years of Experience</p>
                </div>
                <div className="me-4">
                  <h3 className="fw-bold accent-color">500+</h3>
                  <p>Cases Handled</p>
                </div>
                <div>
                  <h3 className="fw-bold accent-color">98%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1630265927428-a62b061a5270?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Law Office" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Legal Team</h2>
            <p className="lead">Meet our experienced attorneys</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 text-center">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="card-img-top rounded-circle w-50 mx-auto mt-4" alt="Attorney 1" />
                <div className="card-body">
                  <h4 className="card-title">Lcdo. Oscar Amador Ramirez, C.S.P.</h4>
                  <p className="text-muted">Managing Partner</p>
                  <p className="card-text">Harvard Law School, JD. Specializes in corporate law and business litigation.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 text-center">
                <img src="https://images.unsplash.com/photo-1772989665252-7cb41ae759cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="card-
                 rounded-circle w-50 mx-auto mt-4" alt="Attorney 2" />
                <div className="card-body">
                  <h4 className="card-title">Patricia Miller</h4>
                  <p className="text-muted">Paralegal Assistant</p>
                  <p className="card-text">Yale Law School, JD. Focuses on family law and mediation.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 text-center">
                <img src="https://images.unsplash.com/photo-1772927253232-91fb2e5c30b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="card-img-top rounded-circle w-50 mx-auto mt-4" alt="Attorney 3" />
                <div className="card-body">
                  <h4 className="card-title">Robert Johnson</h4>
                  <p className="text-muted">Partner</p>
                  <p className="card-text">Stanford Law School, JD. Expertise in real estate and property law.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
