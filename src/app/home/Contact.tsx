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
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-x-8">
               <div className="bg-gray-300/10 lg:p-[55px] md:p-12 sm:p-10 p-8 col-span-2 rounded-sm">
                  <h2 className="text-2xl text-white font-bold leading-[1.2em] mb-3">
                     Need Help? Open a Ticket
                  </h2>
                  <p className="lg:mb-12 md:mb-10 mb-8 leading-[1.5em]">
                     Our support team will get back to you ASAP via email.
                  </p>
                  <div className="flex md:flex-row flex-col sm:gap-8 gap-6 sm:mb-8 mb-6">
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
                        className={`text-sm font-medium sm:mb-3 mb-1.5  duration-100 ${
                           !focus ? "text-white" : "text-primary"
                        }`}
                     >
                        Your Message
                     </p>
                     <textarea
                        className="w-full sm:min-h-[145px] min-h-28 bg-gray-300/15 py-2.5 px-6 border border-transparent focus:border-primary duration-300 outline-none text-white rounded leading-[1.75em]"
                        placeholder="Enter your Message"
                        onClick={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                     />
                  </label>
                  <div className="sm:mt-8 mt-6 flex">
                     <div className="flex">
                        <Buttons children="Submit Ticket" href="#" />
                     </div>
                  </div>
               </div>
               <div>
                  <div className="bg-gray-300/10 lg:p-11 md:p-9 p-8 col-span-1 rounded-sm relative z-0">
                     <span className="absolute top-5 sm:left-1.5 left-0 -z-10">
                        <img src="/images/contact-right-one.svg" alt="" />
                     </span>
                     <span className="absolute top-0 right-0">
                        <img src="/images/contact-right-two.svg" alt="" />
                     </span>
                     <span className="absolute bottom-24 left-2">
                        <img src="/images/contact-right-three.svg" alt="" />
                     </span>
                     <span className="absolute top-[25%] right-1.5">
                        <img src="/images/contact-right-four.svg" alt="" />
                     </span>
                     <h2 className="text-xl text-white font-bold leading-[1.2em] md:mb-4 mb-2.5">
                        Subscribe to receive future updates
                     </h2>
                     <p className="leading-[1.5em] md:mb-11 mb-7">
                        Lorem ipsum dolor sited Sed ullam corper consectur
                        adipiscing Mae ornare massa quis lectus.
                     </p>
                     <hr className="border border-white/15 md:mb-11 mb-7" />
                     <div className="flex flex-col sm:gap-4 gap-3 mb-5">
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
