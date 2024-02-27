/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
"use client";
import Buttons from "@/components/common/Buttons";
import TextField from "@/components/common/TextField";
import React from "react";

function Contact() {
   const [focus, setFocus] = React.useState(false);
   return (
      <section>
         <div className="container xl:py-28 lg:py-24 md:py-20 py-16">
            <div className="grid lg:grid-cols-3 gap-8">
               <div className="bg-gray-300/10 p-[55px] col-span-2 rounded-sm">
                  <h2 className="text-2xl text-white font-bold leading-[1.2em] mb-3">
                     Need Help? Open a Ticket
                  </h2>
                  <p className="mb-12 leading-[1.5em]">
                     Our support team will get back to you ASAP via email.
                  </p>
                  <div className="flex gap-8 mb-8">
                     <TextField
                        label="Your Name"
                        placeholder="Enter your name"
                        type="text"
                     />
                     <TextField
                        label="Your Email"
                        placeholder="Enter your email"
                        type="email"
                     />
                  </div>
                  <label>
                     <p
                        className={`text-sm font-medium mb-3 duration-100 ${
                           !focus ? "text-white" : "text-primary"
                        }`}
                     >
                        Your Message
                     </p>
                     <textarea
                        className="w-full min-h-[145px] bg-gray-300/15 py-2.5 px-6 border border-transparent focus:border-primary duration-300 outline-none text-white rounded leading-[1.75em]"
                        placeholder="Enter your Message"
                        onClick={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                     />
                  </label>
                  <div className="mt-8 flex">
                     <div className="flex">
                        <Buttons children="Submit Ticket" href="#" />
                     </div>
                  </div>
               </div>
               <div>
                  <div className="bg-gray-300/10 p-11 col-span-1 rounded-sm relative z-0">
                     <span className="absolute top-5 left-1.5 -z-10">
                        <img src="/images/contact-right-one.svg" alt="" />
                     </span>
                     <span className="absolute top-0 right-0">
                        <img src="/images/contact-right-two.svg" alt="" />
                     </span>
                     <span className="absolute bottom-24 left-2">
                        <img src="/images/contact-right-three.svg" alt="" />
                     </span>
                     <span className="absolute top-[23%] right-1.5">
                        <img src="/images/contact-right-four.svg" alt="" />
                     </span>
                     <h2 className="text-xl text-white font-bold leading-[1.2em] mb-4">
                        Subscribe to receive future updates
                     </h2>
                     <p className="leading-[1.5em] mb-11">
                        Lorem ipsum dolor sited Sed ullam corper consectur
                        adipiscing Mae ornare massa quis lectus.
                     </p>
                     <hr className="border border-white/15 mb-11" />
                     <div className="flex flex-col gap-4 mb-5">
                        <TextField placeholder="Enter your name" />
                        <TextField placeholder="Enter your email" />
                        <div className="flex">
                           <Buttons children="Subscribe" href="#" />
                        </div>
                     </div>
                     <p className="text-center">
                        No spam guaranteed, So please don’t send any spam mail.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
