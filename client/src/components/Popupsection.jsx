import React, { useState } from 'react';
import '../PopupSection.css';
import sampleImage from '../assets/popupsection.webp';

const PopupSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    state: "",
    country: "",
    company: "",
    query: ""
  });

  const toggleForm = () => {
    setShowForm(!showForm);
    setStatus("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://sendemail-2unyl3syla-el.a.run.app", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          state: "",
          country: "",
          company: "",
          query: ""
        });
      } else {
        setStatus("Error: " + result);
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="section-wrapper">
      <div className="left">
        <h1 className="text-red-800 text-sm">Your Brand, In Every Hand</h1>
        <h3>OG WTR turns every bottle into a high-impact ad.</h3>
        <p>
          Reach your audience where it matters—stores, offices, gyms, campuses, events.
        </p>
        <button onClick={toggleForm}>Open Form</button>
      </div>

      <div className="right">
        <img src={sampleImage} alt="Visual content" />
      </div>

      {showForm && (
        <div className="popup-overlay" onClick={toggleForm}>
          <div className="popup-form" onClick={(e) => e.stopPropagation()}>
            <h2>Popup Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="phone-wrapper">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                >
                  <option value="+91">+91 (IN)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (AU)</option>
                  <option value="+971">+971 (UAE)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  pattern="[0-9]{7,15}"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />

              <textarea
                name="query"
                placeholder="Your Query"
                rows="4"
                value={formData.query}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Submit</button>
              {status && <p className="status-message">{status}</p>}
            </form>
            <button onClick={toggleForm} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopupSection;
