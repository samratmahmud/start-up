/* eslint-disable @next/next/no-img-element */
import Buttons from "@/components/common/Buttons";
import React from "react";

function Header() {
   return (
      <section className="bg-blue-950/[1] relative">
         <span className="absolute right-0 top-0">
            <img src="/images/header-bg-one.svg" alt="" />
         </span>
         <div className="relative">
            <span className="absolute bottom-0 left-0">
               <img src="/images/header-bg-two.svg" alt="" />
            </span>
            <div className="container relative z-10 pt-52 pb-[200px]">
               <h1 className="text-4xl text-white/90 font-bold max-w-[800px] mx-auto text-center leading-[1.25] mb-5">
                  Free and Open-Source Next.js Template for Startup & SaaS
               </h1>
               <p className="text-lg font-medium text-gray-400/[1] leading-[1.625] max-w-[810px] mx-auto text-center mb-12">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
               </p>
               <div className="flex justify-center gap-4">
                  <Buttons name="🔥 Get Pro" path="/" />
                  <Buttons name="Star on GitHub" path="/" color="gray" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Header;
