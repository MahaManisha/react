import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    skills: [],
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkboxes
    if (type === "checkbox") {
      let updatedSkills = [...formData.skills];
      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }
      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format!";
    }
    if (!formData.gender) newErrors.gender = "Select your gender!";
    if (formData.skills.length === 0) newErrors.skills = "Choose at least one skill!";
    if (!formData.country) newErrors.country = "Select your country!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        gender: "",
        skills: [],
        country: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "400px", margin: "auto" }}>
      <h2>React Form Validation Example</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        {/* Email */}
        <label>Email:</label><br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        {/* Gender */}
        <label>Gender:</label><br />
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        /> Female
        <p style={{ color: "red" }}>{errors.gender}</p>

        {/* Skills */}
        <label>Skills:</label><br />
        <input
          type="checkbox"
          name="skills"
          value="HTML"
          onChange={handleChange}
          checked={formData.skills.includes("HTML")}
        /> HTML
        <input
          type="checkbox"
          name="skills"
          value="CSS"
          onChange={handleChange}
          checked={formData.skills.includes("CSS")}
        /> CSS
        <input
          type="checkbox"
          name="skills"
          value="JavaScript"
          onChange={handleChange}
          checked={formData.skills.includes("JavaScript")}
        /> JavaScript
        <p style={{ color: "red" }}>{errors.skills}</p>

        {/* Country */}
        <label>Country:</label><br />
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <p style={{ color: "red" }}>{errors.country}</p>

        {/* Message */}
        <label>Message:</label><br />
        <textarea
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <p style={{ color: "red" }}>{errors.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
