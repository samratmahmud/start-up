/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import SocialSite from "@/components/common/SocialSite";

const footerLink = [
   {
      title: "Useful Links",
      items: [
         {
            name: "Blog",
            path: "#",
         },
         {
            name: "Pricing",
            path: "#",
         },
         {
            name: "About",
            path: "#",
         },
      ],
   },
   {
      title: "Terms",
      items: [
         {
            name: "TOS",
            path: "#",
         },
         {
            name: "Privacy Policy",
            path: "#",
         },
         {
            name: "Refund Policy",
            path: "#",
         },
      ],
   },
   {
      title: "Support & Help",
      items: [
         {
            name: "Open Support Ticket",
            path: "#",
         },
         {
            name: "Terms of Use",
            path: "#",
         },
         {
            name: "About",
            path: "#",
         },
      ],
   },
];

const socialItems = [
   {
      icon: "/images/icons8-facebook-24.png",
      icon2: "/images/icons8-facebook-24 (1).png",

      path: "#",
   },
   {
      icon: "/images/icons8-twitter-50.png",
      icon2: "/images/icons8-twitter-50 (1).png",

      path: "#",
   },
   {
      icon: "/images/icons8-youtube-50.png",
      icon2: "/images/icons8-youtube-50 (1).png",

      path: "#",
   },
   {
      icon: "/images/icons8-linkedin-50.png",
      icon2: "/images/icons8-linkedin-30.png",

      path: "#",
   },
];

function Footer() {
   return (
      <section className="bg-blue-950/[1] relative z-0">
         <span className="absolute lg:bottom-28 md:bottom-24 sm:bottom-20 bottom-16 left-0 -z-10">
            <img src="/images/footer-bg-icon.svg" alt="" />
         </span>
         <span className="absolute md:top-12 top-8 right-0 -z-10">
            <img src="/images/footer-bg-right.svg" alt="" />
         </span>
         <div className="container xl:pt-28 lg:pt-24 md:pt-20 pt-16">
            <div className="grid grid-cols-12 md:gap-x-8 gap-x-6 lg:gap-y-12 md:gap-y-10 gap-y-8 mb-16">
               <div className="lg:col-span-5 md:col-span-6 col-span-12">
                  <div className="md:mb-8 mb-6">
                     <img src="/images/logo.svg" alt="" />
                  </div>
                  <p className="max-w-[350px] md:mb-9 mb-7">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Integer lobortis.
                  </p>
                  <div className="flex md:gap-4 gap-3">
                     {socialItems.map(({icon, icon2, path}, index) => (
                        <SocialSite
                           icon={icon}
                           icon2={icon2}
                           path={path}
                           key={index}
                        />
                     ))}
                  </div>
               </div>
               {footerLink.map(({title, items}, index) => (
                  <div
                     key={index}
                     className="lg:col-span-2 lg:last:col-span-3 sm:col-span-6 col-span-12"
                  >
                     <h2 className="text-[20px] text-white font-bold lg:mb-10 md:mb-8 mb-6">
                        {title}
                     </h2>
                     <div className="flex flex-col md:gap-4 gap-3">
                        {items.map(({name, path}, index) => (
                           <Link
                              href={path}
                              key={index}
                              className="hover:text-primary duration-300"
                           >
                              {name}
                           </Link>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
            <hr className="border border-gray-400/15" />
            <div className="lg:text-md md:text-sm text-xs text-center text-white leading-[1.5em] lg:py-8 md:py-7 py-5">
               Template by <Link href="#">UIdeck</Link> and{" "}
               <Link href="#">Next.js Templates</Link>
            </div>
         </div>
      </section>
   );
}

export default Footer;
