/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import Buttons from "@/components/common/Buttons";
import React from "react";

function Header() {
   return (
      <section className="bg-blue-950/[1] relative">
         <span className="absolute right-0 top-0 opacity-40 md:opacity-100">
            <img src="/images/header-bg-one.svg" alt="" />
         </span>
         <div className="relative">
            <span className="absolute bottom-0 left-0 opacity-40 md:opacity-100">
               <img src="/images/header-bg-two.svg" alt="" />
            </span>
            <div className="container relative z-10 2xl:pt-52 xl:pt-[180px] md:pt-[150px] pt-28 2xl:pb-[200px] xl:pb-40 md:pb-[120px] pb-16">
               <h1 className="text-4xl text-white/90 font-bold max-w-[800px] mx-auto text-center leading-[1.25] mb-5">
                  Free and Open-Source Next.js Template for Startup & SaaS
               </h1>
               <p className="text-lg font-normal text-gray-400/[1] leading-[1.625] max-w-[810px] mx-auto text-center mb-12">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
               </p>
               <div className="flex sm:flex-row flex-col justify-center gap-4">
                  <div className="flex justify-center">
                     <div className="flex">
                        <Buttons children="🔥 Get Pro" href="#" />
                     </div>
                  </div>
                  <div className="flex justify-center">
                     <div className="flex">
                        <Buttons
                           children="Star on GitHub"
                           href="#"
                           color="gray"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Header;
