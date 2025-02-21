"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus({ success: false, message: "" }), 5000);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 bg-white/5 border-2 border-white/10 
    rounded-xl backdrop-blur-sm placeholder:text-white/50
    text-whiteCream focus:border-crm/50 focus:ring-0
    transition-all duration-300
  `;

  const labelClasses = `
    flex items-center gap-2 text-sm font-medium text-whiteCream/90 
    mb-2 group-focus-within:text-crm transition-colors duration-300
  `;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-crm/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-whiteCream/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-crm mb-6 relative inline-block">
            Get in Touch
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-crm via-whiteCream to-crm bg-[length:200%_100%] animate-shimmer" />
          </h2>
          <p className="text-lg text-whiteCream/90">
            Have a question or want to work together? Let us know!
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Form Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm" />

            {/* Form Content */}
            <form onSubmit={handleSubmit(onSubmit)} className="relative p-8">
              {/* Name Field */}
              <div className="mb-6 group">
                <label htmlFor="name" className={labelClasses}>
                  <User className="w-4 h-4" />
                  Your Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={inputClasses}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-6 group">
                <label htmlFor="email" className={labelClasses}>
                  <Mail className="w-4 h-4" />
                  Your Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className={inputClasses}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-6 group">
                <label htmlFor="message" className={labelClasses}>
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-4 rounded-xl font-semibold
                  bg-gradient-to-r from-brn to-softBrn
                  text-whiteCream transform transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg hover:shadow-crm/20
                  active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                `}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`
                  mt-4 p-3 rounded-xl flex items-center gap-2
                  ${
                    submitStatus.success
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }
                `}
                >
                  {submitStatus.success ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
