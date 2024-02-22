/* eslint-disable @next/next/no-img-element */
"use client";
import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const navLink = [
   {
      name: "Home",
      path: "/",
   },
   {
      name: "About",
      path: "/",
   },
   {
      name: "Blog",
      path: "/",
   },
   {
      name: "Support",
      path: "/",
   },
   {
      name: "Pages",
      path: "/",
   },
];

function Navbar() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const handelScroll = () => {
         if (window.scrollY >= 100) {
            setVisible(true);
         } else {
            setVisible(false);
         }
      };
      handelScroll();

      window.addEventListener("scroll", () => {
         handelScroll();
      });
   }, []);

   return (
      <nav
         className={`fixed left-0 right-0 top-0 z-[1020] duration-300 ${
            visible ? "bg-blue-950/60 backdrop-blur-sm py-2 shadow-sm" : "py-5"
         }`}
      >
         <div className="container">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-16">
                  <Link href="/">
                     <img className="h-8" src="/images/logo.svg" alt="" />
                  </Link>
                  <div className="flex gap-12">
                     {navLink.map(({name, path}, index) => (
                        <Link
                           key={index}
                           href={path}
                           className="text-white/90 hover:text-gray-400 duration-300 leading-[1.5]"
                        >
                           {name}
                        </Link>
                     ))}
                  </div>
               </div>
               <div className="flex items-center">
                  <Link
                     href="/"
                     className="hover:text-gray-400 text-white font-bold leading-[1.5em] duration-300 px-7 py-3"
                  >
                     Sign In
                  </Link>
                  <Buttons variant="small" name="Sign Up" path="/" />
                  <div className="w-14 aspect-square flex items-center justify-center rounded-full cursor-pointer">
                     <img className="w-6" src="/images/sun.svg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
