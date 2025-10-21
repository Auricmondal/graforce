'use client'
import React from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import PrimaryButton from '@/components/utils/buttons/PrimaryButton';
import { FiMail, FiPhone, FiMapPin, FiUser, FiMessageCircle } from 'react-icons/fi';
import Image from 'next/image';
import SolutionImage from '@/assets/service/ServiceSolution1.jpg';

const ContactContent = () => {
  const { closeSidebar, contentData } = useSidebar();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    subject: contentData?.subject || ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', formData);
    // You can add your API call here
    closeSidebar();
  };

  return (
    <div className="flex flex-col h-full px-2">
      {/* Contact Info Section */}
      <div className="mb-6">
        {/* <h3 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <FiMail className="text-primary" />
            <span className="text-sm">info@graforce.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <FiPhone className="text-primary" />
            <span className="text-sm">+49 30 123 456 789</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <FiMapPin className="text-primary" />
            <span className="text-sm">Berlin, Germany</span>
          </div>
        </div> */}
        <Image
          src={SolutionImage}
          alt="Contact Image"
          className="object-cover rounded-lg w-full h-30"
        />
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            {/* <FiUser className="absolute left-3 top-3 text-gray-400" /> */}
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-transparent bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent placeholder-transparent"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.name
                ? "top-2 text-xs text-white opacity-80"
                : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                }`}
            >
              Name
            </label>
          </div>

          <div className="relative">
            {/* <FiMail className="absolute left-3 top-3 text-gray-400" /> */}
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-transparent bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent placeholder-transparent"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.email
                ? "top-2 text-xs text-white opacity-80"
                : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                }`}
            >
              Email
            </label>
          </div>

          {/* <div className="relative">
            <FiPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div> */}

          <div className="relative">
            <input
              type="url"
              name="website"
              id="website"
              value={formData.website}
              onChange={handleInputChange}
              className="peer w-full px-4 pt-6 pb-2 bg-transparent bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent placeholder-transparent"
              placeholder="Company Website"
            />
            <label
              htmlFor="website"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.website
                ? "top-2 text-xs text-white opacity-80"
                : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                }`}
            >
              Company Website
            </label>
          </div>

          {contentData?.showSubject && (
            <div className="relative">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>
          )}

          <div className="relative">
            {/* <FiMessageCircle className="absolute left-3 top-3 text-gray-400" /> */}
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
              className="peer w-full px-4 pt-6 pb-2 bg-transparent bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent resize-none placeholder-transparent"
              placeholder="Your message..."
            />
            <label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-200 pointer-events-none ${formData.message
                ? "top-2 text-xs text-white opacity-80"
                : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                }`}
            >
              Message
            </label>
          </div>

          {/* <div className="relative flex items-center w-full">
            <input
              type="checkbox"
              name="agreement"
              id='agreement'
              checked={formData.agreement || false}
              onChange={handleInputChange}
              className=""
            />
            <label htmlFor="agreement" className="ml-4 text-sm text-cst-neutral-1 w-full">By clicking the "Submit" button you agree that we use your information to contact you. <a href="/privacy-policy" className="text-primary underline">Privacy policy</a></label>
          </div> */}

          <div className="flex items-center space-x-3 cursor-pointer">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.agreement || false}
                onChange={(e) => setFormData(prev => ({ ...prev, agreement: e.target.checked }))}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 border-2 border-white border-opacity-50 rounded flex items-center justify-center ${formData.agreement ? "bg-white" : ""
                  }`}
              >
                {formData.agreement && (
                  <svg
                    className="w-3 h-3 text-blue-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </label>
            <div className="text-sm opacity-80 leading-relaxed">
              By clicking the "Submit" button you agree that we use your
              information to contact you.{" "}
              <span className="underline cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out">
                Privacy policy
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {/* <button
            type="button"
            onClick={closeSidebar}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button> */}
          <PrimaryButton
            type="submit"
            className={`${formData.agreement ? "bg-cst-neutral-1 text-cst-neutral-5" : "bg-transparent border-2 border-cst-neutral-1 text-cst-neutral-1"} py-4 w-full rounded-xl`}
            hoverBgColor={`${formData.agreement ? "primary" : "transparent"}`}
            hoverTextColor={`${formData.agreement ? "white" : "cst-neutral-1"}`}
            disabled={!formData.agreement}
          >
            Send Message
          </PrimaryButton>
        </div>
      </form>

      {/* Additional Info */}
      {contentData?.additionalInfo && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">{contentData.additionalInfo}</p>
        </div>
      )}
    </div>
  );
};

export default ContactContent;