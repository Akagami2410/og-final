import { useState,useContext } from "react";
import OverlayContext from "../context/OverlayContext";

export default function Popup() {
  const {overlayVisible,setOverlayVisible} = useContext(OverlayContext);
  const [loading, setLoading] = useState(false);

  const handleclick = ()=>{
    setOverlayVisible(false);
  }


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    company: "",
    role: "",
    message: ""
  })

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://og-final-backend.onrender.com/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    } finally{
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        company: "",
        role: "",
        message: ""
      }); // Reset form data
    }
  };

  return (
    <div className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-[9999] p-4 overflow-y-auto ${
  overlayVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
}`} >

      <div className="pt-4 rounded-lg bg-white shadow-sm max-w-[95%] mx-auto" >
        <div className="flex justify-end pr-4">
          <button className="cursor-pointer" onClick={handleclick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 0.5C5.15 0.5 0.5 5.15 0.5 11C0.5 16.85 5.15 21.5 11 21.5C16.85 21.5 21.5 16.85 21.5 11C21.5 5.15 16.85 0.5 11 0.5ZM15.05 16.25L11 12.2L6.95 16.25L5.75 15.05L9.8 11L5.75 6.95L6.95 5.75L11 9.8L15.05 5.75L16.25 6.95L12.2 11L16.25 15.05L15.05 16.25Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="p-10" >
          <h2 className="font-anton text-4xl mb-20 ">Collaborate with OG Wtr</h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 " onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="border-b border-gray-300 focus:outline-none focus:border-black py-2"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="border-b border-gray-300 focus:outline-none focus:border-black py-2"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium mb-1">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter 10 digit number"
                className="border-b border-gray-300 focus:outline-none focus:border-black py-2"
                onChange={handleChange}
                required
              />
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label htmlFor="state" className="text-sm font-medium mb-1">
                State*
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Enter your state"
                className="border-b border-gray-300 focus:outline-none focus:border-black py-2"
                onChange={handleChange}
                required
              />
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-medium mb-1">
                Company/Brand Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                onChange={handleChange}
                className="border-b border-gray-300 focus:outline-none focus:border-black py-2"
              />
            </div>

            {/* I am a (Dropdown) */}
            <div className="flex flex-col">
              <label htmlFor="role" className="text-sm font-medium mb-1">
                I am a
              </label>
              <select
                id="role"
                name="role"
                className="border-b border-gray-300 focus:outline-none focus:border-black py-2 bg-transparent"
                onChange={handleChange}
              >
                <option>Select who are you?</option>
                <option>Retailer</option>
                <option>Distributor</option>
                <option>Individual</option>
              </select>
            </div>

            {/* Additional Message (full width) */}
            <div className="flex flex-col md:col-span-3">
              <label htmlFor="message" className="text-sm font-medium mb-1">
                Anything else you’d like to add?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write something about your brand"
                rows={3}
                className="border-b border-gray-300 focus:outline-none focus:border-black py-2"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button (left-aligned) */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="bg-[#002E6D] text-white px-8 py-2 rounded-md hover:bg-[#001c48] transition-all duration-300"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}

              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
