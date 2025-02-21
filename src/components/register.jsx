import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData1, setFormData] = useState({
    name: "",
    pno: "",
    email: "",
    insta_id: "",
    facebook_id: "",
    linkdin_id: "", // ✅ Fixed spelling mistake
    profile: "",
    image: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  // ✅ Handle input changes dynamically
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // ✅ Store file object in state
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));

      console.log("File selected:", file);

      // ✅ Convert image to Base64 for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setFormData((prevState) => ({
          ...prevState,
          profile: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData1);
    // ✅ Create FormData inside handleSubmit (not globally)
    const formData = new FormData();
    formData.append("name", formData1.name);
    formData.append("email", formData1.email);
    formData.append("pno", formData1.pno);
    formData.append("insta_id", formData1.insta_id);
    formData.append("facebook_id", formData1.facebook_id);
    formData.append("linkdin_id", formData1.linkdin_id);
    formData.append("profile", formData1.profile);
    formData.append("image", formData1.image);

    try {
      const response = await fetch("http://localhost:8080/users/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      console.log("FormData submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contai">
      <form className="registration-form" onSubmit={handleSubmit}>
        {/* Profile Photo Upload */}
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

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData1.name}
          onChange={handleChange}
          required
        />

        {/* Phone Number */}
        <input
          type="text"
          name="pno"
          placeholder="Phone Number"
          value={formData1.pno}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData1.email}
          onChange={handleChange}
          required
        />

        {/* Social Media Handles */}
        <input
          type="text"
          name="insta_id"
          placeholder="Instagram ID"
          value={formData1.insta_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="facebook_id"
          placeholder="Facebook ID"
          value={formData1.facebook_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="linkdin_id"
          placeholder="LinkedIn ID"
          value={formData1.linkdin_id}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button type="submit">
            <Link to="/home">
                SUBMIT
            </Link>
            </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
