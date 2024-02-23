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
         <span className="absolute bottom-0 left-0">
            <img src="/images/feadback-bg-icon.svg" alt="" />
         </span>
         <div className="container py-28">
            <div className="mb-[100px]">
               <Title
                  title="What Our Users Says"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form"
               />
            </div>
            <div className="flex gap-8">
               {feadbackCards.map(
                  ({content, thumbnail, name, describtion}, index) => (
                     <div key={index} className="p-8 bg-gray-600 rounded">
                        <div className="flex gap-1 mb-5">
                           {[...Array(5)].map((_, i) => (
                              <img
                                 key={i}
                                 className="w-4 h-4"
                                 src="/images/icons8-star-50.png"
                                 alt=""
                              />
                           ))}
                        </div>
                        <p className="text-white font-normal mb-8">{content}</p>
                        <hr className="border-gray-500/10 border mb-8" />
                        <div className="flex items-center gap-4">
                           <div>
                              <img src={thumbnail} alt="" />
                           </div>
                           <div>
                              <h3 className="text-base text-white leading-[1.56em] mb-1">
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
