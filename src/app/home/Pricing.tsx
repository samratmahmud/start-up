/* eslint-disable @next/next/no-img-element */
"use client";
import Title from "@/components/common/Title";
import React from "react";

function Pricing() {
   const [active, setActive] = React.useState(false);

   return (
      <section className="relative bg-gray-950 z-0">
         <span className="absolute bottom-0 left-0 -z-10">
            <img src="/images/pricing-bg-icon.svg" alt="" />
         </span>
         <div className="container py-28">
            <div className="mb-[100px]">
               <Title
                  title="Simple and Affordable Pricing"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
               />
            </div>
            <div className="flex gap-8 justify-center">
               <span
                  onClick={() => setActive((prev) => !prev)}
                  className={`font-semibold cursor-pointer ${
                     active ? "text-primary" : "text-white"
                  }`}
               >
                  Monthly
               </span>
               <label className={`w-11 h-6 relative cursor-pointer`}>
                  <input type="checkbox" className="sr-only peer " />
                  <div className="bg-primary/30 w-16 h-5 rounded-full peer-checked:bg-primary/70 duration-200" />
                  <div className="absolute -top-1.5 left-0 w-8 h-8 p-1.5 bg-primary rounded-full peer-checked:left-9 duration-200 shadow-3xl">
                     <div className="bg-white rounded-full w-full h-full" />
                  </div>
               </label>
               <span
                  onClick={() => setActive((prev) => !prev)}
                  className={`font-semibold cursor-pointer ${
                     !active ? "text-primary" : "text-white"
                  }`}
               >
                  Yearly
               </span>
            </div>
         </div>
      </section>
   );
}

export default Pricing;
