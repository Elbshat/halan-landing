"use client";

import FormInput from "./FormInput";

function ContactForm() {
  return (
    <form className="space-y-6 rounded-2xl bg-white p-4 shadow-[0_3px_60px_rgba(0,0,0,0.08)] md:p-10">
      <div className="flex flex-col gap-4 md:flex-row">
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
        className="inline-flex h-14 w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-full bg-primary px-8 text-xl font-medium text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
      >
        send
      </button>
    </form>
  );
}

export default ContactForm;
