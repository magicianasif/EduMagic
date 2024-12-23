import React, { useState } from "react";
import MessageIcon from "../../assets/msg-icon.png";
import PhoneIcon from "../../assets/phone-icon.png";
import LocationIcon from "../../assets/location-icon.png";
import MailIcon from "../../assets/mail-icon.png";
import arrow from "../../assets/white-arrow.png";
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Mobile number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit mobile number.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setResult("Sending....");
    const formDataToSubmit = new FormData();
    formDataToSubmit.append(
      "access_key",
      "d52fa200-62c1-4706-a5b7-1706800b833d"
    );
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSubmit,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      setFormData({ name: "", phone: "", message: "" });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={MessageIcon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={MailIcon} alt="Mail Icon" /> asifhabeeb1205@gmail.com
          </li>
          <li>
            <img src={PhoneIcon} alt="Phone Icon" /> +1 123-456-7890
          </li>
          <li>
            <img src={LocationIcon} alt="Location Icon" /> 77 Massachusetts Ave,
            Cambridge MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}

          <button type="submit" className="btn dark-btn">
            Submit <img src={arrow} alt="Arrow Icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
