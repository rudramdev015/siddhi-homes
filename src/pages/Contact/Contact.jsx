import React, { useState, useEffect } from "react";
import "./Contact.css";
import { 
  FaInstagram, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaCheckCircle, 
  FaTimes,
  FaBuilding
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSent) return;

    // Basic Validation
    if (formData.contactNumber.length < 10) {
      alert("Please enter a valid contact number.");
      return;
    }

    setIsSent(true);
    setShowAlert(true);

    // Mock API Call
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Response handled");
    } catch (error) {
      console.error("Error:", error);
    }

    // Reset Form
    setFormData({ name: "", email: "", contactNumber: "", message: "" });
    setTimeout(() => { setIsSent(false); }, 3000);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="contact-page-container">
      
      {/* SUCCESS POPUP */}
      <div className={`success-alert ${showAlert ? 'show' : ''}`}>
        <FaCheckCircle style={{ color: '#c5a059', fontSize: '1.5rem' }} />
        <div>
          <strong style={{ display: 'block' }}>Inquiry Sent!</strong>
          <small>The Siddhi Homes team will contact you soon.</small>
        </div>
        <FaTimes 
          onClick={() => setShowAlert(false)} 
          style={{ cursor: 'pointer', marginLeft: '10px', opacity: 0.7 }} 
        />
      </div>

      <div className="contact-main-grid">
        
        {/* LEFT SECTION: BRANDING & INFO */}
        <div className="contact-info-section">
          <div className="brand-logo-area">
            <span>Crafting Homes with Trust</span>
            <h1>SIDDHI HOMES</h1>
          </div>

          <p className="contact-tagline">
            Building Quality Homes with Trust, Integrity, and Care. 
            Discover a place where your family can grow and thrive.
          </p>

          <div className="details-list">
            <div className="detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <div className="detail-content">
                <h4>Registered Office</h4>
                <p>E78/79 Near Bal Vidhya Mandir,<br/>Shastri Nagar, Jodhpur, Rajasthan 342001</p>
              </div>
            </div>

            <div className="detail-item">
              <FaBuilding className="detail-icon" />
              <div className="detail-content">
                <h4>Project Site</h4>
                <p>Pal Gaon, Jodhpur, Rajasthan 342014</p>
              </div>
            </div>

            <div className="detail-item">
              <FaPhoneAlt className="detail-icon" />
              <div className="detail-content">
                <h4>Call Us</h4>
                <p>+91 88290 40290 / +91 82333 94004</p>
              </div>
            </div>

            <div className="detail-item">
              <FaInstagram className="detail-icon" />
              <div className="detail-content">
                <h4>Follow Us</h4>
                <p>@shreemahaveerrealestates</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: FORM & MAP */}
        <div className="contact-form-section">
          <h2 className="form-title">Book a Site Visit</h2>
          <p className="form-subtitle">Fill out the form below and our property experts will get back to you within 24 hours.</p>

          <form className="siddhi-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="siddhi-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="siddhi-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <input
              type="tel"
              name="contactNumber"
              placeholder="10-Digit Mobile Number"
              className="siddhi-input"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />

            <textarea
              name="message"
              placeholder="I am interested in a 3BHK Villa / Site Visit..."
              className="siddhi-textarea"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button 
              type="submit" 
              className="siddhi-submit-btn"
              disabled={isSent}
            >
              {isSent ? "Sending Inquiry..." : "Inquire Now"}
            </button>
          </form>

          {/* GOOGLE MAP INTEGRATION */}
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.722949573452!2d72.93751127542917!3d26.205689290116755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941899f725cd839%3A0x813f8dd11edcd0b6!2sSiddhi%20Homes%20Pal%20Gaon!5e0!3m2!1sen!2sin!4v1771313883533!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Siddhi Homes Location"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;