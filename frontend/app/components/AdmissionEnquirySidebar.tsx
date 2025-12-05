"use client";

import { useState } from "react";
import EnquiryForm from "@/app/components/EnquiryForm";

export default function AdmissionEnquirySidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-[20%]
        ${open ? "right-[380px]" : "right-0"}
        z-[9999]
        rotate-[-90deg]
        origin-bottom-right
        bg-[#211c3a] hover:bg-[#1a162b]
        text-white font-bold text-base
        px-4 py-3 rounded-t-md
        shadow-md transition-all duration-300`}
      >
        Admission Enquiry
      </button>

      <button
        className="fixed right-0 top-[55%]
        z-[9999]
        rotate-[-90deg]
        origin-bottom-right
        bg-yellow-400 hover:bg-yellow-500
        text-black text-base font-bold
        px-4 py-3 rounded-t-md
        shadow-md transition"
      >
        Chat with Student
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-[9998]"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[380px]
        bg-white shadow-2xl z-[9999]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
      
        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          <EnquiryForm />
        </div>
      </div>
    </>
  );
}
