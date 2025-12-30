import React, { useState, useEffect } from "react";
import "./Contact.css";
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope,
  FaLongArrowAltRight,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { SiLeetcode } from "react-icons/si";  

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleNameChange = (e) => {
    const val = e.target.value;
    if (/^[A-Za-z\s]*$/.test(val)) {
      setFormData((prev) => ({ ...prev, name: val }));
    }
  };

  const handleContactChange = (e) => {
    const val = e.target.value;
    if (val === "") {
      setFormData((prev) => ({ ...prev, contactNumber: val }));
      return;
    }
    if (!/^\d+$/.test(val)) return;
    if (val.length > 10) return;

    if (val.length === 1) {
      if (/[6-9]/.test(val)) {
        setFormData((prev) => ({ ...prev, contactNumber: val }));
      }
    } else {
      setFormData((prev) => ({ ...prev, contactNumber: val }));
    }
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    if (/^[a-zA-Z0-9\s.,!?'"-]*$/.test(val)) {
      setFormData((prev) => ({ ...prev, message: val }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSent) return;

    if (formData.name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return;
    }
    if (formData.contactNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSent(true);
    setShowAlert(true); // Trigger the alert to appear

    const dataToSend = { ...formData };

    setFormData({ name: "", email: "", contactNumber: "", message: "" });
    
    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const result = await response.json();
        console.error("Backend Error:", result.message || "Failed to send message.");
      } else {
        console.log("Message sent to backend successfully.");
      }
    } catch (error) {
      console.error("Server/Network Error:", error);
    }

    setTimeout(() => {
      setIsSent(false);
    }, 2000);
  };

  // This effect will automatically hide the alert after 10 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 10000); // 10 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [showAlert]);

  // Handler to close the alert when the cross icon is clicked
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="contact-page-container">
      
      {/* --- SUCCESS ALERT --- */}
      <div className={`success-alert ${showAlert ? 'show' : ''}`}>
        <FaCheckCircle className="success-alert-icon" />
        <span className="success-alert-text">
          Thank you for sending a message! I will reply shortly.
        </span>
        <button onClick={handleCloseAlert} className="success-alert-close">
          <FaTimes />
        </button>
      </div>

      {/* LAYER 1: BOTTOM (BLACK) - FORM */}
      <div className="contact-layer-black">
        <div className="contact-right-content">
          <h2 className="contact-door-right contact-form-header">
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit}>
            
            <div className="contact-input-group contact-door-right contact-group-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input"
                value={formData.name}
                onChange={handleNameChange}
                required
                minLength={3}
              />
            </div>

            <div className="contact-input-group contact-door-right contact-group-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group contact-door-right contact-group-3">
              <div className="contact-phone-input-container">
                <div className="contact-phone-prefix">
                  <span>🇮🇳</span> 
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Mobile Number"
                  className="contact-input"
                  value={formData.contactNumber}
                  onChange={handleContactChange}
                  required
                />
              </div>
            </div>

            <div className="contact-input-group contact-door-right contact-group-4">
              <textarea
                name="message"
                placeholder="Message"
                className="contact-textarea"
                value={formData.message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>

            <div className="contact-door-right contact-btn-box">
              <button 
                type="submit" 
                className={`contact-btn ${isSent ? 'contact-btn--sent' : ''}`}
                disabled={isSent}
              >
                {isSent ? "Message Sent!" : "Send Message"}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* LAYER 2: TOP (SILVER) - INTRO & FOOTER */}
      <div className="contact-layer-silver">
        <div className="contact-left-content">
          <h1 className="contact-door-left contact-title">LET'S TALK</h1>
          <p className="contact-door-left contact-subtitle">
            Got a project? An idea? Or just want to say hi? 
            I'm currently open for new opportunities and collaborations.
          </p>

          <div className="contact-detail-box">
            <div className="contact-door-left contact-detail-1">
              <span className="contact-label">Email</span>
              <span className="contact-value">jitparmar993@gmail.com</span>
            </div>
            
            <div className="contact-door-left contact-detail-2">
              <span className="contact-label">Contact No.</span>
              <span className="contact-value">+91 7424908900</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="contact-footer">
          <div className="contact-footer-left">
            <p className="contact-footer-text">
              Please don't hesitate to reach out and connect
            </p>
            <FaLongArrowAltRight className="contact-footer-arrow" />
          </div>
          
          <div className="contact-social-icons">
            <a href="https://www.linkedin.com/in/jitendraparmar10/" target="_blank" rel="noopener noreferrer" className="contact-social-icon contact-icon-linkedin"><FaLinkedinIn /></a>
            <a href="https://github.com/jitendraparmar10" target="_blank" rel="noopener noreferrer" className="contact-social-icon contact-icon-github"><FaGithub /></a>
            <a href="https://leetcode.com/u/jitendraparmar10/" target="_blank" rel="noopener noreferrer" className="contact-social-icon contact-icon-leetcode"><SiLeetcode /></a>
            <a href="https://www.instagram.com/jitendraparmar_10/" target="_blank" rel="noopener noreferrer" className="contact-social-icon contact-icon-instagram"><FaInstagram /></a>
            <a href="https://x.com/jituparmar993" target="_blank" rel="noopener noreferrer" className="contact-social-icon contact-icon-x"><FaXTwitter /></a>
            <a href="mailto:jitparmar993@gmail.com" className="contact-social-icon contact-icon-gmail"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;