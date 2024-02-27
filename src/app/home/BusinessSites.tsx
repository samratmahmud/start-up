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
         <div className="container pb-28">
            <div className="flex gap-8 items-center justify-between mb-28">
               <div className="w-[570px]">
                  <h2 className="text-3xl text-white/90 font-bold leading-[1.25] mb-4">
                     Crafted for Startup, SaaS and Business Sites.
                  </h2>
                  <p className="text-base leading-[1.625em] max-w-[570px] mb-11">
                     The main ‘thrust’ is to focus on educating attendees on how
                     to best protect highly vulnerable business applications
                     with interactive panel discussions and roundtables.
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                     {sites.map(({name}, index) => (
                        <div key={index} className="flex gap-4 items-center">
                           <div className="w-[30px] aspect-square bg-primary/15 rounded-md p-1">
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
               <div>
                  <img src="/images/about-image-dark.svg" alt="" />
               </div>
            </div>
            <hr className="border border-gray-500/[.15]" />
         </div>
      </section>
   );
}

export default BusinessSites;
