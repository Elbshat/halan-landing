"use client";

import FormInput from "./FormInput";

function ContactForm() {
  return (
    <form className="space-y-6 p-4 md:p-10 rounded-2xl bg-white shadow-[0_3px_60px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col md:flex-row gap-4">
        <FormInput
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full md:w-1/2"
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter email address"
          className="w-full md:w-1/2"
        />
      </div>
      <FormInput
        label="Subject"
        type="text"
        name="subject"
        placeholder="Write a subject"
        className="w-full"
      />
      <FormInput
        variant="textArea"
        label="Message"
        type="text"
        name="message"
        placeholder="Write your message"
        className="w-full"
      />

      <button
        type="submit"
        className=" w-full h-14 px-8 inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-full text-xl font-medium transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-white shadow hover:bg-primary/95 hover:shadow-md"
      >
        send
      </button>
    </form>
  );
}

export default ContactForm;
