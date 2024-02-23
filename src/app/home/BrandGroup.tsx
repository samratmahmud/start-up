/* eslint-disable @next/next/no-img-element */
import Title from "@/components/common/Title";
import React from "react";

function BrandGroup() {
   return (
      <section
         className="bg-cover bg-no-repeat bg-gray-950"
         style={{backgroundImage: "url(/images/brand-bg.svg)"}}
      >
         <div className="container py-28">
            <div className="mb-20">
               <Title
                  title="We are ready to help"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
               />
            </div>
            <div className="flex justify-center">
               <img
                  className="rounded-md"
                  src="https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fvideo%2Fvideo.jpg&w=1920&q=75"
                  alt=""
               />
            </div>
         </div>
      </section>
   );
}

export default BrandGroup;
