"use client";

import { useState } from "react";
import axios from "axios";

const API_URL = "https://mit-wpu.onrender.com/form";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: null,
    error: null,
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus({ loading: true, message: null, error: null });

    try {
      const response = await axios.post(API_URL, formData);
      setStatus({
        loading: false,
        message: response.data.message || "Submitted successfully!",
        error: null,
      });

      setFormData({ name: "", email: "", phone: "", course: "" });
    } catch (error:any) {
      setStatus({
        loading: false,
        message: null,
        error: "Submission failed. Try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-10">

      <input
        type="text"
        name="name"
        placeholder="Enter Name *"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email Address *"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Enter Mobile Number *"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      >
        <option value="">Select Course *</option>
        <option value="B.Tech">B.Tech</option>
        <option value="MBA">MBA</option>
        <option value="BBA">BBA</option>
        <option value="M.Tech">M.Tech</option>
      </select>

      {status.error && (
        <p className="text-sm text-red-500">{status.error}</p>
      )}

      {status.message && (
        <p className="text-sm text-green-500">{status.message}</p>
      )}

      <button
        type="submit"
        disabled={status.loading}
        className="w-full bg-red-600 text-white py-2 rounded font-semibold"
      >
        {status.loading ? "Submitting..." : "SUBMIT"}
      </button>
    </form>
  );
}
