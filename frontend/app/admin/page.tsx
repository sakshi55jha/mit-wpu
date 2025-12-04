"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API_URL = "https://mit-wpu.onrender.com/form";

export default function page() {
  const router = useRouter();
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");

    if (!isAuth) {
      router.push("/login");
      return;
    }

    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setForms(res.data.data || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/login");
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Form Submissions
            </h1>
            <p className="text-gray-500 mt-1">
              All enquiries submitted by users
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {loading && (
          <p className="text-center text-gray-600 text-lg">
            Loading submissions...
          </p>
        )}

        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        {!loading && forms.length === 0 && !error && (
          <p className="text-center text-gray-500 text-lg">
            No submissions found.
          </p>
        )}

        {!loading && forms.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>

                <div className="space-y-1 text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-700">Email:</span>{" "}
                    {item.email}
                  </p>

                  <p>
                    <span className="font-medium text-gray-700">Phone:</span>{" "}
                    {item.phone}
                  </p>

                  <p>
                    <span className="font-medium text-gray-700">Course:</span>{" "}
                    {item.course}
                  </p>

                  <p className="text-xs text-gray-400 mt-3">
                    Submitted on: {new Date(item.submittedAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
