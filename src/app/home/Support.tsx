/* eslint-disable @next/next/no-img-element */
import React from "react";

const supportItems = [
   {
      title: "Bug free code",
      describtion:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   },
   {
      title: "Premier support",
      describtion:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
   },
   {
      title: "Next.js",
      describtion:
         "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.",
   },
];

function Support() {
   return (
      <section>
         <div className="container mb-28">
            <div className="grid grid-cols-2 items-center gap-8">
               <div>
                  <img src="/images/about-image-2-dark.svg" alt="" />
               </div>
               <div className="flex flex-col gap-9">
                  {supportItems.map(({title, describtion}, index) => (
                     <div key={index}>
                        <h2 className="text-xl text-white/90 font-bold leading-[1.32em] mb-4">
                           {title}
                        </h2>
                        <p className="text-base leading-[1.625em] max-w-[450px]">
                           {describtion}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Support;
