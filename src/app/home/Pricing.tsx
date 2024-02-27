/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
"use client";
import Buttons from "@/components/common/Buttons";
import Title from "@/components/common/Title";
import Link from "next/link";
import React from "react";

const packages = [
   {
      priceM: "40",
      priceY: "120",
      packageN: "Lite",
      title: "Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.",
      btn: "Start Free Trial",
      Path: "#",
      benefit: [
         {
            name: "All UI Components",
            icon: true,
         },
         {
            name: "Use with Unlimited Projects",
            icon: true,
         },
         {
            name: "Commercial Use",
            icon: true,
         },
         {
            name: "Email Support",
            icon: true,
         },
         {
            name: "Lifetime Access",
            icon: false,
         },
         {
            name: "Free Lifetime Updates",
            icon: false,
         },
      ],
   },
   {
      priceM: "399",
      priceY: "789",
      packageN: "Basic",
      title: "Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.",
      btn: "Start Free Trial",
      Path: "#",
      benefit: [
         {
            name: "All UI Components",
            icon: true,
         },
         {
            name: "Use with Unlimited Projects",
            icon: true,
         },
         {
            name: "Commercial Use",
            icon: true,
         },
         {
            name: "Email Support",
            icon: true,
         },
         {
            name: "Lifetime Access",
            icon: true,
         },
         {
            name: "Free Lifetime Updates",
            icon: false,
         },
      ],
   },
   {
      priceM: "589",
      priceY: "999",
      packageN: "Plus",
      title: "Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.",
      btn: "Start Free Trial",
      Path: "#",
      benefit: [
         {
            name: "All UI Components",
            icon: true,
         },
         {
            name: "Use with Unlimited Projects",
            icon: true,
         },
         {
            name: "Commercial Use",
            icon: true,
         },
         {
            name: "Email Support",
            icon: true,
         },
         {
            name: "Lifetime Access",
            icon: true,
         },
         {
            name: "Free Lifetime Updates",
            icon: true,
         },
      ],
   },
];

function Pricing() {
   const [active, setActive] = React.useState(false);

   return (
      <section className="relative bg-gray-950 z-0">
         <span className="absolute bottom-0 left-0 -z-10">
            <img src="/images/pricing-bg-icon.svg" alt="" />
         </span>
         <div className="container xl:py-28 lg:py-24 md:py-20 py-16">
            <div className="lg:mb-[100px] md:mb-20 mb-16">
               <Title
                  title="Simple and Affordable Pricing"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
               />
            </div>
            <div className="flex gap-5 justify-center items-center mb-16">
               <span
                  className={`font-semibold ${
                     active ? "text-white" : "text-primary"
                  }`}
               >
                  Monthly
               </span>
               <div
                  className="w-11 h-6 relative cursor-pointer mr-5"
                  onClick={() => setActive((prev) => !prev)}
               >
                  <div
                     className={`w-16 h-5 rounded-full duration-200 ${
                        active ? "bg-primary/60" : "bg-primary/20"
                     }`}
                  />
                  <div
                     className={`absolute -top-1.5 w-8 h-8 p-1.5 bg-primary rounded-full duration-200 shadow-3xl ${
                        active ? "left-9" : "left-0"
                     }`}
                  >
                     <div className="bg-white rounded-full w-full h-full" />
                  </div>
               </div>
               <span
                  className={`font-semibold ${
                     active ? "text-primary" : "text-white"
                  }`}
               >
                  Yearly
               </span>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-8 gap-6">
               {packages.map(
                  (
                     {priceM, priceY, packageN, title, btn, Path, benefit},
                     index
                  ) => (
                     <div
                        key={index}
                        className="md:py-10 md:px-8 p-7 bg-blue-950/[1] hover:shadow-md duration-300 rounded-sm relative"
                     >
                        <div className="absolute bottom-0 right-0">
                           <img src="/images/packages-card-bg.svg" alt="" />
                        </div>
                        <div className="flex gap-4 justify-between items-center mb-1">
                           <div className="text-5xl leading-[1.65m] text-white font-bold">
                              ${active ? priceY : priceM}
                              <span className="text-lg text-gray-300 font-medium">
                                 /{active ? "yr" : "mo"}
                              </span>
                           </div>
                           <div className="text-lg text-white font-bold">
                              {packageN}
                           </div>
                        </div>
                        <h2 className="md:mb-7 mb-5 leading-[1.5em]">
                           {title}
                        </h2>
                        <div className="flex md:mb-8 mb-6">
                           <Buttons
                              children={btn}
                              variant="small"
                              href={Path}
                           />
                        </div>
                        <hr className="border border-gray-400/15 md:mb-8 mb-6" />
                        <div className="flex flex-col gap-3 mb-3">
                           {benefit.map(({name, icon}, index) => (
                              <div
                                 key={index}
                                 className="flex items-center gap-3"
                              >
                                 <div className="w-[18px] aspect-square bg-primary/15 rounded-full p-[3px]">
                                    <img
                                       src={
                                          icon
                                             ? "/images/icons8-check-mark-64.png"
                                             : "/images/icons8-close-50.png"
                                       }
                                       alt=""
                                    />
                                 </div>
                                 <h3 className="text-gray-300 leading-[1.5em]">
                                    {name}
                                 </h3>
                              </div>
                           ))}
                        </div>
                     </div>
                  )
               )}
            </div>
         </div>
      </section>
   );
}

export default Pricing;
