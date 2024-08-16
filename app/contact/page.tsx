"use client";

import React, { FormEvent, useState } from "react";
import { Meteors } from "@/components/ui/meteors";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Submit --> " + email + " -> " + comment);
  };

  return (
    <div className="text-center justify-center min-h-screen bg-gray-900 py-12 pt-36">
      <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-7xl">
        Contact Us
      </h1>
      <p className="mt-10 text-base md:text-lg max-w-3xl mx-auto font-thin">
        Reach out to us for any inquiries, feedback, or support. We&apos;re here
        to help and will respond as soon as possible feedback, or support.
        We&apos;re here to help and will respond as soon as possible.
      </p>
      <form action="" onSubmit={handelSubmit}>
        <div className="mt-6 w-full">
          <div className="mt-6">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              className="bg-black rounded-md p-4 w-1/2"
            />
          </div>
          <div className="mt-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name="message"
              id="message"
              placeholder="Your message"
              rows={8}
              className="bg-black rounded-md p-4 w-1/2"
            ></textarea>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-gray-900 border rounded-lg px-10 py-2 border-gray-500 text-gray-300"
          >
            Inquire
          </button>
        </div>
      </form>
      <Meteors number={20} className="absolute top-0 left-0 z-0"></Meteors>
    </div>
  );
}
