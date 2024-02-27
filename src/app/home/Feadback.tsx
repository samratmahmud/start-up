/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Title from "@/components/common/Title";
import React from "react";

const feadbackCards = [
   {
      content:
         "“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
      thumbnail:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-01.png&w=750&q=75",
      name: "Musharof Chy",
      describtion: "Founder @TailGrids",
   },
   {
      content:
         "“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
      thumbnail:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-02.png&w=1920&q=75",
      name: "Devid Weilium",
      describtion: "Founder @UIdeck",
   },
   {
      content:
         "“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
      thumbnail:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-03.png&w=1920&q=75",
      name: "Lethium Frenci",
      describtion: "Founder @Lineicons",
   },
];

function Feadback() {
   return (
      <section className="relative bg-gray-700/[1] z-0">
         <span className="absolute top-0 right-0 -z-10">
            <img src="/images/right-bg-arrow.svg" alt="" />
         </span>
         <span className="absolute bottom-3 left-0 -z-10">
            <img src="/images/feadback-bg-icon.svg" alt="" />
         </span>
         <div className="container xl:py-28 lg:py-24 md:py-20 py-16">
            <div className="lg:mb-[100px] md:mb-20 mb-16">
               <Title
                  title="What Our Users Says"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form"
               />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-8 gap-6">
               {feadbackCards.map(
                  ({content, thumbnail, name, describtion}, index) => (
                     <div
                        key={index}
                        className="sm:p-8 p-7 bg-gray-600 rounded"
                     >
                        <div className="flex gap-1 sm:mb-5 mb-4">
                           {[...Array(5)].map((_, i) => (
                              <img
                                 key={i}
                                 className="w-4 h-4"
                                 src="/images/icons8-star-50.png"
                                 alt=""
                              />
                           ))}
                        </div>
                        <p className="text-white font-normal md:mb-8 mb-6">
                           {content}
                        </p>
                        <hr className="border-gray-500/10 border md:mb-8 mb-6" />
                        <div className="flex items-center md:gap-4 gap-3">
                           <div>
                              <img src={thumbnail} alt="" />
                           </div>
                           <div>
                              <h3 className="text-base text-white leading-[1.56em] md:mb-1 mb-0.5">
                                 {name}
                              </h3>
                              <p className="text-sm leading-[1.43em]">
                                 {describtion}
                              </p>
                           </div>
                        </div>
                     </div>
                  )
               )}
            </div>
         </div>
      </section>
   );
}

export default Feadback;
