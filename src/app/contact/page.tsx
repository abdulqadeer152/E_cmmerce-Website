import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] w-full py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-[#101750] text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="font-bold">
            Home.Pages <span className="text-[#FB2E86]">.contact us</span>
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 space-y-12 md:space-y-16">
            {/* About Us */}
            <div>
              <h2 className="text-[#151875] font-bold text-xl md:text-2xl mb-4">
                Information About us
              </h2>
              <p className="text-[#8A8FB9] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full bg-[#DE9034]"></span>
                <span className="w-5 h-5 rounded-full bg-[#E60584]"></span>
                <span className="w-5 h-5 rounded-full bg-[#5E37FF]"></span>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h2 className="text-[#151875] font-bold text-xl md:text-2xl mb-4">
                Get In Touch
              </h2>
              <p className="text-[#8A8FB9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Ways */}
          <div className="flex-1">
            <h2 className="text-[#151875] text-xl md:text-2xl font-bold mb-6">
              Contact Way
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { color: "bg-blue-950", email: "shop@store.com", tel: "877-67-88-99" },
                { color: "bg-pink-800", email: "shop@store.com", tel: "877-67-88-99" },
                { color: "bg-[#DE9034]", email: "shop@store.com", tel: "877-67-88-99" },
                { color: "bg-green-900", email: "shop@store.com", tel: "877-67-88-99" },
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full ${contact.color} flex-shrink-0 mt-1`}></div>
                  <div className="text-[#8A8FB9] text-sm">
                    <p>E-Mail: {contact.email}</p>
                    <p>Tel: {contact.tel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 pb-12 md:pb-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Form */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 border-2 rounded p-3 w-full"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 border-2 rounded p-3 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-2 rounded p-3"
            />
            <textarea
              placeholder="Type Your Message"
              className="w-full h-40 border-2 rounded p-3 resize-none"
            />
            <button className="px-8 py-3 bg-[#FB2E86] rounded text-white font-semibold hover:bg-[#d91a6d] transition-colors">
              Send Mail
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full aspect-square relative">
              <Image
                alt="Contact illustration"
                src="/Group 124.png"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;