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
         <div className="bg-gray-950 py-28">
            <div className="container">
               <div className="mb-[100px]">
                  <Title
                     title="Main Features"
                     describtion="There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form."
                  />
               </div>
               <div className="grid grid-cols-3 gap-x-8 gap-y-14">
                  {featuresCards.map(({icon, title, describtion}, index) => (
                     <div key={index}>
                        <div className="w-[70px] aspect-square p-4 bg-blue-200/15 rounded-md mb-10">
                           <img src={icon} alt="" />
                        </div>
                        <h3 className="text-xl leading-[1.334em] font-bold text-white/90 mb-5">
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
