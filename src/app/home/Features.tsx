/* eslint-disable @next/next/no-img-element */
import React from "react";

const featuresCards = [
   {
      icon: "/images/icons8-computer-48.png",
      title: "Crafted for Startups",
      describtion:
         "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
   },
];

function Features() {
   return (
      <section>
         <div className="bg-gray-950 py-28">
            <div className="container">
               <h2 className="text-3xl text-white/90 font-bold text-center mb-4">
                  Main Features
               </h2>
               <p className="text-base text-white/90 leading-[1.625em] max-w-[570px] mx-auto text-center mb-[100px]">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
               </p>
               <div>
                  {featuresCards.map(({icon, title, describtion}, index) => (
                     <div key={index}>
                        <div className="w-[70px] aspect-square p-4 bg-blue-200/15 rounded-md mb-10">
                           <img src={icon} alt="" />
                        </div>
                        <h3 className="text-xl">{title}</h3>
                        <p>{describtion}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default Features;
