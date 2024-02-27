/* eslint-disable @next/next/no-img-element */
import Title from "@/components/common/Title";
import React from "react";

const featuresCards = [
   {
      icon: "/images/icons8-computer-48.png",
      title: "Crafted for Startups",
      describtion:
         "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
   },
   {
      icon: "/images/icons8-themes-100.png",
      title: "High-quality Design",
      describtion:
         "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
   },
   {
      icon: "/images/icons8-computer-48.png",
      title: "Next.js 13 (Latest)",
      describtion:
         "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
   },
   {
      icon: "/images/icons8-accessibility-tools-100.png",
      title: "Tailwind CSS",
      describtion:
         "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
   },
   {
      icon: "/images/icons8-computer-48.png",
      title: "Fully Customizable",
      describtion:
         "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
   },
   {
      icon: "/images/icons8-themes-100.png",
      title: "Free and Open-Source",
      describtion:
         "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
   },
];

function Features() {
   return (
      <section>
         <div className="bg-gray-950 lg:py-28 md:py-24 py-16">
            <div className="container">
               <div className="lg:mb-[100px] md:mb-20 mb-16">
                  <Title
                     title="Main Features"
                     describtion="There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form."
                  />
               </div>
               <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-8 gap-x-7 lg:gap-y-14 md:gap-y-12 gap-y-10">
                  {featuresCards.map(({icon, title, describtion}, index) => (
                     <div key={index} className="group">
                        <div className="md:w-[70px] w-14 aspect-square md:p-4 p-3 bg-blue-200/15 group-hover:bg-blue-200/40 duration-300 rounded-md md:mb-10 mb-7">
                           <img src={icon} alt="" />
                        </div>
                        <h3 className="text-xl leading-[1.334em] font-bold text-white/90 md:mb-5 mb-4">
                           {title}
                        </h3>
                        <p className="pr-2.5">{describtion}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Features;
