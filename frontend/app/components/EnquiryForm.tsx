'use client';

import { useState } from 'react';
import axios from 'axios';


const API_URL = 'https://mit-wpu.onrender.com/form'; 


export default function EnquiryForm() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
    });
    
    const [status, setStatus] = useState({ 
        loading: false, 
        message: null, 
        error: null 
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
                message: response.data.message || 'Thank you for your submission!', 
                error: null 
            });
                        setFormData({ name: '', email: '', phone: '', course: '' });

        } catch (error) {            
            let errorMessage = 'Could not connect to the server.';
  //@ts-ignore
              if (error.response?.data?.errors?.[0]?.message) {
                //@ts-ignore
        errorMessage = error.response.data.errors[0].message;
      }

            setStatus({ 
                loading: false, 
                message: null, 
                //@ts-ignore
                error: errorMessage 
            });
            console.error('Submission Error:', error);
        }
    };

    return (
  <section id="enquire" className="py-16 bg-gray-50">
  <div className="max-w-xl mx-auto px-4">
    
   
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">Enquire Now</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Fill the form below and our team will contact you shortly.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block text-sm mb-1 text-gray-600">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@email.com"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="9876543210"
            className="w-full px-3 py-2 border rounded-md "
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600">Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select a course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="BBA">BBA</option>
            <option value="M.Tech">M.Tech</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Law">Law</option>
            <option value="Design">Design</option>
          </select>
        </div>

        {status.error && (
          <p className="text-sm text-red-500">{status.error}</p>
        )}
        {status.message && (
          <p className="text-sm text-green-500">{status.message}</p>
        )}

        <button
          type="submit"
          disabled={status.loading}
          className="w-full bg-red-600 text-white py-2.5 rounded-md font-semibold hover:bg-red-700 transition disabled:opacity-50"
        >
          {status.loading ? "Submitting..." : "Submit Enquiry"}
        </button>

      </form>
    </div>
  </div>
</section>


    );
}
