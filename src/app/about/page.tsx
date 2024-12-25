"use client";

import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F6F5FF] w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-[#101750] text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="font-bold">
              Home.Pages <span className="text-[#FB2E86]">.about us</span>
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Image 
              alt="About us image" 
              src="/Group 73.png"
              width={570}
              height={409}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-[#151875] text-2xl md:text-3xl font-bold mb-4">
              Know About Our Ecomerce <br className="hidden md:block" />
              Business, History
            </h1>
            <p className="text-[#8A8FB9] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
              mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae 
              eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <button className="bg-[#FB2E86] text-white px-6 py-3 rounded hover:bg-[#e91d75] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Our Features
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image: "/free-delivery 1.png",
                title: "Free Delivery",
              },
              {
                image: "/cashback 1.png",
                title: "100% Cash Back",
              },
              {
                image: "/Group.png",
                title: "Quality Product",
              },
              {
                image: "/24-hours-support 1.png",
                title: "24/7 Support",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <Image
                    className="w-24 h-24 mb-4 rounded-full shadow-lg"
                    src={feature.image}
                    alt={feature.title}
                    width={96}
                    height={96}
                  />
                  <h5 className="text-xl font-medium text-[#151875] mb-4">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum non
                    laboriosam,
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#FBFBFF] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Our Client Say!
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image 
                alt="Client testimonial" 
                src="/Group 200.png"
                width={200}
                height={69}
                className="w-auto h-auto"
              />
            </div>
            
            <div className="text-center">
              <h2 className="font-bold text-xl mb-2">Selina Gomez</h2>
              <p className="text-sm text-[#8A8FB9] mb-4">
                Ceo At Webecy Digital
              </p>
              <p className="text-[#8A8FB9] max-w-xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
                ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
                enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
                aliquam lacus volutpat praesent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;