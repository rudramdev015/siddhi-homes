import React, { useState, useEffect } from "react";
import "./Contact.css";
import { 
  FaInstagram, FaPhoneAlt, FaMapMarkerAlt, 
  FaCheckCircle, FaTimes, FaBuilding, FaWhatsapp 
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    whatsappNumber: "", // New State
    visitDate: "",      // New State
    propertyType: "",
    budget: "",
    callTime: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSent) return;

    // Validation
    if (formData.contactNumber.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSent(true);
    setErrorMessage(""); 

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowAlert(true);
        // Reset Form
        setFormData({ 
          name: "", email: "", contactNumber: "", whatsappNumber: "", 
          visitDate: "", propertyType: "", budget: "", callTime: "", message: "" 
        });
        setTimeout(() => setIsSent(false), 3000);
      } else {
        throw new Error(data.message || "Failed to send.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMessage("Could not send. Check internet connection.");
      setIsSent(false);
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="contact-page-container">
      
      {/* Success Popup */}
      <div className={`success-alert ${showAlert ? 'show' : ''}`}>
        <FaCheckCircle style={{ color: '#c5a059', fontSize: '1.5rem' }} />
        <div>
          <strong style={{ display: 'block' }}>Inquiry Sent!</strong>
          <small>We will confirm your site visit shortly.</small>
        </div>
        <FaTimes onClick={() => setShowAlert(false)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
      </div>

      <div className="contact-main-grid">
        
        {/* Left Info Section */}
        <div className="contact-info-section">
          <div className="brand-logo-area">
            <span>Crafting Homes with Trust</span>
            <h1>SIDDHI HOMES</h1>
          </div>
          <p className="contact-tagline">
            Building Quality Homes with Trust, Integrity, and Care. 
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
              <FaPhoneAlt className="detail-icon" />
              <div className="detail-content">
                <h4>Call Us</h4>
                <p>+91 88290 40290 / +91 82333 94004</p>
              </div>
            </div>
            <div className="detail-item">
              <FaWhatsapp className="detail-icon" />
              <div className="detail-content">
                <h4>WhatsApp</h4>
                <p>+91 88290 40290</p>
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

        {/* Right Form Section */}
        <div className="contact-form-section">
          <h2 className="form-title">Book a Site Visit</h2>
          <p className="form-subtitle">Schedule a visit or request details.</p>

          <form className="siddhi-form" onSubmit={handleSubmit}>
            
            {/* Row 1: Name & Email */}
            <div className="input-row">
              <input type="text" name="name" placeholder="Full Name *" className="siddhi-input"
                value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email Address *" className="siddhi-input"
                value={formData.email} onChange={handleInputChange} required />
            </div>

            {/* Row 2: Phone & WhatsApp */}
            <div className="input-row">
              <input type="tel" name="contactNumber" placeholder="Mobile Number *" className="siddhi-input"
                value={formData.contactNumber} onChange={handleInputChange} required />
              <input type="tel" name="whatsappNumber" placeholder="WhatsApp Number (Optional)" className="siddhi-input"
                value={formData.whatsappNumber} onChange={handleInputChange} />
            </div>

            {/* Row 3: Visit Date & Call Time */}
            <div className="input-row">
              <div className="date-input-wrapper">
                <span className="input-label">Preferred Visit Date</span>
                <input type="date" name="visitDate" className="siddhi-input"
                  value={formData.visitDate} onChange={handleInputChange} />
              </div>
              
              <div className="date-input-wrapper">
                <span className="input-label">Best Time to Call</span>
                <select name="callTime" className="siddhi-input siddhi-select" value={formData.callTime} onChange={handleInputChange}>
                    <option value="" disabled>Select Time</option>
                    <option value="Morning (9-12)">Morning (9-12)</option>
                    <option value="Afternoon (12-4)">Afternoon (12-4)</option>
                    <option value="Evening (4-8)">Evening (4-8)</option>
                    <option value="Anytime">Anytime</option>
                </select>
              </div>
            </div>

            {/* Row 4: Property & Budget */}
            <div className="input-row">
              <select name="propertyType" className="siddhi-input siddhi-select" value={formData.propertyType} onChange={handleInputChange}>
                <option value="" disabled>Property Type</option>
                <option value="2 BHK Apartment">2 BHK Apartment</option>
                <option value="3 BHK Villa">3 BHK Villa</option>
                <option value="Residential Plot">Residential Plot</option>
                <option value="Commercial Space">Commercial Space</option>
              </select>

              <select name="budget" className="siddhi-input siddhi-select" value={formData.budget} onChange={handleInputChange}>
                <option value="" disabled>Approx Budget</option>
                <option value="< 30 Lakhs">Below 30 Lakhs</option>
                <option value="30L - 50L">30L - 50L</option>
                <option value="50L - 80L">50L - 80L</option>
                <option value="1 Cr+">Above 1 Cr</option>
              </select>
            </div>

            <textarea name="message" placeholder="Any specific requirements for your home?" className="siddhi-textarea" rows="3"
              value={formData.message} onChange={handleInputChange}></textarea>

            {errorMessage && <p style={{color: 'red', marginTop: '10px'}}>{errorMessage}</p>}

            <button type="submit" className="siddhi-submit-btn" disabled={isSent}>
              {isSent ? "Sending Request..." : "Schedule Visit"}
            </button>
          </form>

          {/* Map */}
          <div className="map-wrapper">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.722949573452!2d72.93751127542917!3d26.205689290116755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941899f725cd839%3A0x813f8dd11edcd0b6!2sSiddhi%20Homes%20Pal%20Gaon!5e0!3m2!1sen!2sin!4v1771313883533!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;