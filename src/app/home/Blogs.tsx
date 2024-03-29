/* eslint-disable @next/next/no-img-element */
import Title from "@/components/common/Title";
import Link from "next/link";
import React from "react";

const blogsCrads = [
   {
      thumbnail:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-01.jpg&w=1920&q=75",
      href: "#",
      title: "Best UI components for modern websites",
      describtion:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      mood: "creative",
      name: "By Samuyl Joshi",
      designation: "Graphic Designer",
      profileP:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-01.png&w=1920&q=75",
   },
   {
      thumbnail:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-02.jpg&w=1920&q=75",
      href: "#",
      title: "9 simple ways to improve your design skills",
      describtion:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      mood: "computer",
      name: "By Musharof Chy",
      designation: "Content Writer",
      profileP:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-02.png&w=1920&q=75",
   },
   {
      thumbnail:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fblog-03.jpg&w=1920&q=75",
      href: "#",
      title: "Tips to quickly improve your coding speed.",
      describtion:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
      mood: "computer",
      name: "By Lethium Deo",
      designation: "Content Writer",
      profileP:
         "https://startup.nextjstemplates.com/_next/image?url=%2Fimages%2Fblog%2Fauthor-03.png&w=1920&q=75",
   },
];

function Blogs() {
   return (
      <section id="blog" className="bg-blue-950/[1]">
         <div className="container xl:py-28 lg:py-24 md:py-20 py-16">
            <div className="lg:mb-[100px] md:mb-20 mb-16">
               <Title
                  title="Our Latest Blogs"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
               />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-8 gap-6">
               {blogsCrads.map(
                  (
                     {
                        thumbnail,
                        title,
                        describtion,
                        mood,
                        name,
                        designation,
                        href,
                        profileP,
                     },
                     index
                  ) => (
                     <div key={index} className="">
                        <Link href={href} className="relative" target="_blank">
                           <span className="absolute top-[9%] right-[6%] text-sm text-white font-semibold sm:py-2 py-1.5 px-4 bg-primary rounded-full leading-[1.43em]">
                              {mood}
                           </span>
                           <img className="w-full" src={thumbnail} alt="" />
                        </Link>
                        <div className="bg-gray-300/10 md:p-8 p-7">
                           <Link
                              href={href}
                              target="_blank"
                              className="text-xl font-bold text-white hover:text-primary duration-300 leading-[1.34em] block md:mb-4 mb-3"
                           >
                              {title}
                           </Link>
                           <p className="leading-[1.5em] md:mb-6 mb-4">
                              {describtion}
                           </p>
                           <hr className="border border-gray-400/15 md:mb-6 mb-4" />
                           <div className="flex xl:gap-5 gap-3 items-center">
                              <div className="flex items-center gap-3">
                                 <img src={profileP} alt="" />
                                 <div>
                                    <h3 className="text-sm font-medium text-white sm:mb-1 mb-0.5 leading-[1.43em]">
                                       {name}
                                    </h3>
                                    <p className="text-xs leading-[1.34em]">
                                       {designation}
                                    </p>
                                 </div>
                                 <div className="w-[1.5px] min-h-[40px] bg-gray-400/[0.2]" />
                                 <div className="flex flex-col">
                                    <h3 className="text-sm font-medium text-white mb-1 leading-[1.43em]">
                                       Date
                                    </h3>
                                    <p className="text-xs leading-[1.34em]">
                                       2025
                                    </p>
                                 </div>
                              </div>
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

export default Blogs;
