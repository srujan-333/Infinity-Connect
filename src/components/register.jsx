
import React, { useState } from "react";
import "./register.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    country: "",
    instagramId: "",
    facebookId: "",
    linkedInId: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    console.log(formData);
  };

  return (
    <div className="contai">
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="profile-photo">
          <input
            type="file"
            id="profilePic"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <label htmlFor="profilePic" className="profile-label">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-img" />
            ) : (
              <span className="upload-text">+</span>
            )}
          </label>
        </div>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>

        <input
          type="text"
          name="instagramId"
          placeholder="Instagram ID"
          value={formData.instagramId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="facebookId"
          placeholder="Facebook ID"
          value={formData.facebookId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="linkedInId"
          placeholder="LinkedIn ID"
          value={formData.linkedInId}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegistrationForm;