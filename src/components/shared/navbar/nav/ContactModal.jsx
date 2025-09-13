"use client";
import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useContactModal } from "@/contexts/ContactModalContext";
import { gsap } from "gsap";

const ContactModal = ({ clickOutside }) => {
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // GSAP-like animation functions
  const animateIn = () => {
    if (!modalRef.current || !overlayRef.current || !contentRef.current) return;

    const tl = {
      set: (element, props) => {
        Object.assign(element.style, props);
      },
      to: (element, duration, props) => {
        return new Promise((resolve) => {
          const startTime = Date.now();
          const startProps = {};

          Object.keys(props).forEach((key) => {
            if (key === "onComplete") return;
            startProps[key] =
              element.style[key] || getComputedStyle(element)[key];
          });

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            Object.keys(props).forEach((key) => {
              if (key === "onComplete") return;

              if (key === "opacity") {
                element.style.opacity =
                  parseFloat(startProps[key]) +
                  (props[key] - parseFloat(startProps[key])) * easeOut;
              } else if (key === "transform") {
                element.style.transform = props[key].replace(
                  /scale\(([^)]+)\)/,
                  (match, scale) => {
                    const startScale = 0.8;
                    const targetScale = parseFloat(scale);
                    const currentScale =
                      startScale + (targetScale - startScale) * easeOut;
                    return `scale(${currentScale})`;
                  }
                );
              }
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (props.onComplete) props.onComplete();
              resolve();
            }
          };

          requestAnimationFrame(animate);
        });
      },
    };

    // Initial states
    tl.set(overlayRef.current, {
      opacity: "0",
      display: "flex",
    });

    tl.set(contentRef.current, {
      opacity: "0",
      transform: "scale(0.8)",
    });

    // Animate overlay
    tl.to(overlayRef.current, 0.2, {
      opacity: "1",
    }).then(() => {
      // Animate content
      return tl.to(contentRef.current, 0.3, {
        opacity: "1",
        transform: "scale(1)",
      });
    });
  };

  const animateScale = () => {
    if (!contentRef.current) return;
    const tl = gsap.timeline();
    tl.to(contentRef.current, {
      scale: 1.02,
      duration: 0.3,
    }).to(contentRef.current, {
      scale: 1,
      duration: 0.3,
    }, "0.3");
  };

  const animateOut = () => {
    if (!modalRef.current || !overlayRef.current || !contentRef.current) return;

    const tl = {
      to: (element, duration, props) => {
        return new Promise((resolve) => {
          const startTime = Date.now();
          const startProps = {};

          Object.keys(props).forEach((key) => {
            if (key === "onComplete") return;
            startProps[key] =
              element.style[key] || getComputedStyle(element)[key];
          });

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const easeIn = Math.pow(progress, 3);

            Object.keys(props).forEach((key) => {
              if (key === "onComplete") return;

              if (key === "opacity") {
                element.style.opacity =
                  parseFloat(startProps[key]) -
                  parseFloat(startProps[key]) * easeIn;
              } else if (key === "transform") {
                element.style.transform = props[key].replace(
                  /scale\(([^)]+)\)/,
                  (match, scale) => {
                    const startScale = 1;
                    const targetScale = parseFloat(scale);
                    const currentScale =
                      startScale + (targetScale - startScale) * easeIn;
                    return `scale(${currentScale})`;
                  }
                );
              }
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (props.onComplete) props.onComplete();
              resolve();
            }
          };

          requestAnimationFrame(animate);
        });
      },
    };

    // Animate content out
    tl.to(contentRef.current, 0.2, {
      opacity: "0",
      transform: "scale(0.8)",
    }).then(() => {
      // Animate overlay out
      return tl.to(overlayRef.current, 0.15, {
        opacity: "0",
        onComplete: () => {
          // overlayRef.current.style.display = "none";
        },
      });
    });
  };

  const closeActualModal = () => {
    animateOut();
    setTimeout(() => {
      closeModal(false);
    }, 350);
  };

  useEffect(() => {
    if (isOpen) {
      animateIn();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Simple validation
    if (!isChecked) return;

    // TODO: Handle form submission logic here
    console.log("Form submitted:", formData);

    // Close modal
    closeActualModal();

    // Reset form
    setFormData({
      name: "",
      email: "",
      website: "",
      message: "",
    });
    setIsChecked(false);
  };

  const handleOverlayClick = (e) => {
    if (clickOutside === true) {
      if (e.target === overlayRef.current) {
        closeActualModal();
      }
    } else {
      animateScale();
    }
  };

  return (
    <div className="">
      {/* Modal */}
      {isOpen && (
        <div ref={modalRef} className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-transparent backdrop-blur-md bg-opacity-75 hidden items-center justify-center p-4"
            onClick={handleOverlayClick}
          >
            {/* Modal Content */}
            <div
              ref={contentRef}
              className="relative flex bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden lg:min-w-[1000px]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/test/img/test-image.jpg"
                alt="contact-Image"
                className={`absolute object-cover hidden lg:block left-0 top-0 h-full w-1/2`}
              />
              {/* Background Pattern */}
              <div className="hidden lg:flex left-0 top-0 min-w-[500px] h-full opacity-100">
              </div>

              {/* Main Content */}
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-4 text-white lg:min-w-[500px]">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xl capitalize">Let's get Connected</div>
                  <button
                    onClick={closeActualModal}
                    className="top-4 right-4 hover:bg-white hover:text-gray-700 hover:bg-opacity-20 hover:shadow-sm rounded-full transition-colors"
                  >
                    {/* <X className="w-5 h-5" /> */}
                    <RxCross2 className="w-7 h-7" />
                  </button>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="relative">
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
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formData.name
                          ? "top-2 text-xs text-white opacity-80"
                          : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                      }`}
                    >
                      Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
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
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formData.email
                          ? "top-2 text-xs text-white opacity-80"
                          : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                      }`}
                    >
                      Email
                    </label>
                  </div>

                  {/* Website Input */}
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
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        formData.website
                          ? "top-2 text-xs text-white opacity-80"
                          : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                      }`}
                    >
                      Company Website
                    </label>
                  </div>

                  {/* Message Section */}
                  <div className="pt-4">
                    <div className="relative">
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
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formData.message
                            ? "top-2 text-xs text-white opacity-80"
                            : "top-4 text-base text-white opacity-80 peer-focus:top-2 peer-focus:text-xs peer-focus:opacity-100"
                        }`}
                      >
                        Message
                      </label>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center space-x-3 pt-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border-2 border-white border-opacity-50 rounded flex items-center justify-center ${
                          isChecked ? "bg-white" : ""
                        }`}
                      >
                        {isChecked && (
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
                      <span className="underline cursor-pointer hover:opacity-100">
                        Privacy policy
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={!isChecked}
                    className={`w-full py-4 rounded-lg font-medium transition-all ${
                      isChecked
                        ? "bg-white text-blue-800 hover:bg-white/90"
                        : "bg-white/50 bg-opacity-50 text-blue-800 cursor-not-allowed"
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
