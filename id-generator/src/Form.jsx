import React, { useState } from "react";
import "./Forms.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    school: "",
    course: "",
  });

  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = Math.floor(Math.random() * 1000000);
    const userData = {
      ...formData,
      id: uniqueId,
    };
    setId(uniqueId);
    setFormData({
      name: "",
      email: "",
      age: "",
      school: "",
      course: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
        />

        <label htmlFor="course">Course:</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {id && (
        <div className="card">
          <h3>ID: {id}</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Age: {formData.age}</p>
          <p>School: {formData.school}</p>
          <p>Course: {formData.course}</p>
        </div>
      )}
    </div>
  );
}

export default Form;