/* eslint-disable @next/next/no-img-element */
import Title from "@/components/common/Title";
import Link from "next/link";
import React from "react";

const brandImages = [
   {
      image: "/images/formbold-light.svg",
      path: "/",
   },
   {
      image: "/images/uideck-light.svg",
      path: "/",
   },
   {
      image: "/images/tailgrids-light.svg",
      path: "/",
   },
   {
      image: "/images/lineicons-light.svg",
      path: "/",
   },
   {
      image: "/images/tailadmin-light.svg",
      path: "/",
   },
   {
      image: "/images/plainadmin-light.svg",
      path: "/",
   },
];

function BrandGroup() {
   return (
      <section>
         <div className="container lg:pt-16 md:pt-14 pt-12 xl:pb-28 lg:pb-24 md:pb-20 pb-16">
            <div className="md:flex md:flex-wrap grid grid-cols-2 xl:grid xl:grid-cols-6 items-center justify-center bg-blue-950 2xl:py-[60px] md:py-10 py-8 2xl:px-16 md:px-[50px] sm:px-10 px-7 xl:p-[50px] rounded-sm">
               {brandImages.map(({image, path}, index) => (
                  <Link
                     href={path}
                     key={index}
                     className="py-[15px] px-3 cursor-pointer opacity-60 hover:opacity-100 duration-300 min-h-[70px] lg:max-w-[215px] md:max-w-[212px] max-w-[231px] w-full"
                     target="_blank"
                  >
                     <img src={image} alt="" />
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}

export default BrandGroup;
