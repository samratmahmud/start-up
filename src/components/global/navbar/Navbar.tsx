/* eslint-disable react/no-children-prop */
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
      items: [
         {
            nameL: "About Page",
            href: "#",
         },
         {
            nameL: "Contact Page",
            href: "#",
         },
      ],
   },
];

function Navbar() {
   const [tab, setTab] = useState(0);
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
         id="top"
         className={`fixed left-0 right-0 top-0 z-[1020] duration-300 ${
            visible ? "bg-blue-950/70 backdrop-blur-sm py-2 shadow-sm" : "py-5"
         }`}
      >
         <div className="container">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-16">
                  <Link href="/">
                     <img className="h-8" src="/images/logo.svg" alt="" />
                  </Link>
                  <div className="lg:flex hidden xl:gap-12 gap-10">
                     {navLink.map(({name, path, items}, index) => (
                        <div key={index} className="group relative z-0">
                           <Link
                              href={path}
                              onClick={() => setTab(index)}
                              className="flex items-center gap-3.5 group"
                           >
                              <p
                                 className={`duration-300 leading-[1.5] ${
                                    tab === index
                                       ? "text-white/90"
                                       : "text-gray-400 hover:text-white/90"
                                 }`}
                              >
                                 {name}
                              </p>
                              {items && (
                                 <img
                                    width={14}
                                    height={14}
                                    className="opacity-60 group-hover:opacity-100 duration-200 group-hover:rotate-180"
                                    src="/images/icons8-collapse-arrow-48.png"
                                    alt=""
                                 />
                              )}
                           </Link>
                           {items && (
                              <div className="absolute top-[9999999px] left-0 group-hover:top-12 bg-gray-700">
                                 {items.map(({nameL, href}, index) => (
                                    <Link key={index} href={href}>
                                       {nameL}
                                    </Link>
                                 ))}
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
               <div className="flex items-center">
                  <div className="md:flex hidden items-center">
                     <Link
                        href="/"
                        className="hover:text-gray-400 text-white font-bold leading-[1.5em] duration-300 px-7 py-3"
                     >
                        Sign In
                     </Link>
                     <div className="flex">
                        <Buttons variant="small" children="Sign Up" href="#" />
                     </div>
                  </div>
                  <div className="md:w-14 w-12 aspect-square flex items-center justify-center rounded-full cursor-pointer">
                     <img className="w-6" src="/images/sun.svg" alt="" />
                  </div>
                  <div className="w-14 h-11 py-1.5 px-3 lg:hidden cursor-pointer">
                     <img src="/images/icons8-menu-50.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
