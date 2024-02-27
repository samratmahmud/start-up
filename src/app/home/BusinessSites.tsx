/* eslint-disable @next/next/no-img-element */
import React from "react";

const sites = [
   {
      name: "Premium quality",
   },
   {
      name: "Next.js",
   },
   {
      name: "Tailwind CSS",
   },
   {
      name: "Rich documentation",
   },
   {
      name: "Use for lifetime",
   },
   {
      name: "Developer friendly",
   },
];

function BusinessSites() {
   return (
      <section>
         <div className="container xl:pb-28 lg:pb-24 md:pb-20 pb-16">
            <div className="flex lg:flex-row flex-col md:gap-12 gap-8 lg:items-center lg:justify-between xl:mb-28 lg:mb-24 md:mb-20 mb-16">
               <div className="max-w-[570px] mb-5 lg:mb-0">
                  <h2 className="text-3xl text-white/90 font-bold leading-[1.25] mb-4">
                     Crafted for Startup, SaaS and Business Sites.
                  </h2>
                  <p className="text-base leading-[1.625em] max-w-[570px] md:mb-11 mb-8">
                     The main ‘thrust’ is to focus on educating attendees on how
                     to best protect highly vulnerable business applications
                     with interactive panel discussions and roundtables.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-x-6 md:gap-y-5 gap-y-4">
                     {sites.map(({name}, index) => (
                        <div
                           key={index}
                           className="flex md:gap-4 gap-3 items-center"
                        >
                           <div className="md:w-[30px] w-6 aspect-square bg-primary/15 rounded-md md:p-1 p-0.5">
                              <img
                                 src="/images/icons8-check-mark-64.png"
                                 alt=""
                              />
                           </div>
                           <div className="text-base leading-[1.625em]">
                              {name}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="flex justify-center">
                  <img src="/images/about-image-dark.svg" alt="" />
               </div>
            </div>
            <hr className="border border-gray-500/[.15]" />
         </div>
      </section>
   );
}

export default BusinessSites;
