import React from 'react';
import PracticeAreaCard from '../components/PracticeAreaCard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Legal Excellence You Can Trust</h1>
          <p className="lead mb-4">With over 25 years of experience, we provide exceptional legal services tailored to your needs.</p>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact"
              >
                <span href="#contact" className="btn btn-primary btn-lg me-2">Schedule a Consultation</span>
              </Link>
            </li> 
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                to="/about"
              >
                <span href="#about" className="btn btn-outline-light btn-lg">Learn More</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Practice Areas</h2>
            <p className="lead">Comprehensive legal services for individuals and businesses</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <PracticeAreaCard 
                icon="bi-briefcase"
                title="Civil Litigation"
                description="Corporate formation, contracts, mergers and acquisitions, compliance, and business litigation."
              />
            </div>
            <div className="col-md-4">
              <PracticeAreaCard 
                icon="bi-house-door"
                title="Estate Law"
                description="Property transactions, leasing, zoning, land use, and real estate litigation."
              />
            </div>
            <div className="col-md-4">
              <PracticeAreaCard 
                icon="bi-people"
                title="Torts & Debt Collection"
                description="Divorce, child custody, adoption, prenuptial agreements, and domestic violence cases."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Why Choose Our Firm</h2>
              <div className="d-flex mb-4">
                <div className="me-4">
                  <i className="bi-award fs-1 accent-color"></i>
                </div>
                <div>
                  <h4>Experienced Attorneys</h4>
                  <p>Our team includes award-winning lawyers with decades of combined experience.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="me-4">
                  <i className="bi-person-check fs-1 accent-color"></i>
                </div>
                <div>
                  <h4>Personalized Approach</h4>
                  <p>We take the time to understand your unique situation and goals.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-4">
                  <i className="bi-graph-up fs-1 accent-color"></i>
                </div>
                <div>
                  <h4>Proven Track Record</h4>
                  <p>We have successfully represented clients in hundreds of cases.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Law Firm Meeting" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Client Testimonials</h2>
            <p className="lead">Hear what our clients have to say about our services</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="fst-italic">"The team at Lawson & Partners handled my business acquisition with exceptional professionalism. They made a complex process smooth and straightforward."</p>
                <div className="d-flex align-items-center mt-3">
                  <div className="me-3">
                    <i className="bi-person-circle fs-2 accent-color"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Michael Johnson</h5>
                    <p className="text-muted mb-0">CEO, TechSolutions Inc.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="fst-italic">"I was going through a difficult divorce, and their compassion and expertise made all the difference. I couldn't have asked for better representation."</p>
                <div className="d-flex align-items-center mt-3">
                  <div className="me-3">
                    <i className="bi-person-circle fs-2 accent-color"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Sarah Williams</h5>
                    <p className="text-muted mb-0">Client</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="fst-italic">"Their real estate team helped us navigate a complicated commercial lease agreement. Their attention to detail saved us from potential pitfalls."</p>
                <div className="d-flex align-items-center mt-3">
                  <div className="me-3">
                    <i className="bi-person-circle fs-2 accent-color"></i>
                  </div>
                  <div>
                    <h5 className="mb-0">Robert Chen</h5>
                    <p className="text-muted mb-0">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
