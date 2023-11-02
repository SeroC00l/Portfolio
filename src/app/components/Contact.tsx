"use client";

import React from "react";
import { useState } from "react";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validación: Verifica si los campos obligatorios están llenos
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please, fill out all the required data");
      return;
    }

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="flex flex-col justify-center items-center bg-gray-800 lg:gap-16  mt-24 md:h-screen h-auto"
      >
        <h2 className="text-4xl mx-0 font-bold text-white mb-0">
          Contact{" "}
          <span className="inline-block text-homeColor font-bold">Me!</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <div className="flex justify-between">
            <input
              name={"name"}
              type="text"
              placeholder="Full Name"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name={"email"}
              placeholder="Email Address"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between ">
            <input
              type="number"
              name={"phone"}
              placeholder="Mobile Number"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
            />
            <input
              type="text"
              name={"subject"}
              placeholder="Email Subject"
              className="w-1/2 p-3 text-white bg-gray-700 m-3 rounded-xl"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full p-3">
            <textarea
              className="w-full p-3 text-white bg-gray-700 rounded-xl resize-none"
              name={"message"}
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="inline-block px-4 py-2 bg-homeColor rounded-3xl shadow-3xl text-lg font-bold text-gray-800 hover:shadow-none hover:bg-gray-800 hover:text-homeColor border-2 border-homeColor transition-all p-6 m-3"
          />
        </form>
      </section>
    </>
  );
};
