"use client";

import { useState } from "react";

import FormInput from "./FormInput";
import { submitContactForm } from "@/app/actions";
import { contactValidationPatterns } from "@/utils/validations";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for this field when the user starts typing again
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateField = (name, value) => {
    const { pattern, message } = contactValidationPatterns[name];
    if (!pattern.test(value)) {
      return message;
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate each field
    Object.keys(formData).forEach((field) => {
      const errorMessage = validateField(field, formData[field]);
      if (errorMessage) {
        newErrors[field] = errorMessage;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsSubmitting(true);
        const result = await submitContactForm(formData);

        if (result.success) {
          setSubmitStatus("success");
          // Reset form after successful submission
          setFormData({
            name: "",
            phone: "",
            subject: "",
            message: "",
            email: "",
          });
        } else {
          setSubmitStatus("error");
          // If server returned specific field errors
          if (result.errors) {
            setErrors(result.errors);
          }
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmitStatus("error");
    }
  };
  return (
    <div className="space-y-4">
      {submitStatus === "success" && (
        <div className="rounded-2xl bg-green-100 p-4 text-center text-green-700">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === "error" && !Object.keys(errors).length && (
        <div className="rounded-md bg-red-100 p-4 text-center text-red-700">
          There was a problem submitting your form. Please try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl bg-white p-4 shadow-[0_3px_60px_rgba(0,0,0,0.08)] md:p-10"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <FormInput
            label="Name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full md:w-1/2"
            isRequired={true}
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            message={errors.name}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full md:w-1/2"
            isRequired={true}
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            message={errors.email}
          />
        </div>
        <FormInput
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
          message={errors.phone}
        />

        <FormInput
          label="Subject"
          type="text"
          name="subject"
          placeholder="Write a subject"
          className="w-full"
          isRequired={true}
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
          message={errors.subject}
        />
        <FormInput
          variant="textArea"
          label="Message"
          type="text"
          name="message"
          placeholder="Write your message"
          className="w-full"
          isRequired={true}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          message={errors.message}
        />

        <button
          type="submit"
          className="inline-flex h-14 w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-full bg-primary px-8 font-poppins text-xl font-medium text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="mr-2 size-5 animate-spin rounded-full border-2 border-white border-r-transparent" />
              <span>submitting...</span>
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
