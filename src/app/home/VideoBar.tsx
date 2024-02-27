/* eslint-disable @next/next/no-img-element */
import Title from "@/components/common/Title";
import Link from "next/link";
import React from "react";

function VideoBar() {
   return (
      <section
         className="bg-cover bg-no-repeat bg-center bg-gray-950"
         style={{backgroundImage: "url(/images/brand-bg.svg)"}}
      >
         <div className="container xl:py-28 lg:py-24 md:py-20 py-16">
            <div className="lg:mb-20 md:mb-16 mb-14">
               <Title
                  title="We are ready to help"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
               />
            </div>
            <div className="flex justify-center relative">
               <img
                  className="rounded-md"
                  src="https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fvideo%2Fvideo.jpg&w=1920&q=75"
                  alt=""
               />
               <Link
                  href="https://www.youtube.com/"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/70 hover:bg-white duration-300 md:w-[70px] w-14 aspect-square rounded-full md:p-6 p-4"
                  target="_blank"
               >
                  <img src="/images/icons8-play-48.png" alt="" />
               </Link>
            </div>
         </div>
      </section>
   );
}

export default VideoBar;
