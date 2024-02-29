/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
"use client";
import Buttons from "@/components/common/Buttons";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import NavLink from "./NavLink";

function Navbar() {
   const [visible, setVisible] = useState(false);
   const [open, setOpen] = useState(true);

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
         className={`fixed left-0 right-0 top-0 z-[1020] duration-200 ${
            visible ? "bg-blue-950/70 backdrop-blur-sm py-2 shadow-sm" : "py-5"
         }`}
      >
         <div className="container">
            <div className="flex items-center justify-between">
               <div className="flex items-center xl:gap-16 gap-12">
                  <Link href="/">
                     <img className="h-8" src="/images/logo.svg" alt="" />
                  </Link>
                  <div className="hidden lg:block">
                     <NavLink />
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
                  <div className="lg:hidden relative z-0">
                     <div
                        onClick={() => setOpen((prev) => !prev)}
                        className="w-14 h-11 py-1.5 px-3 cursor-pointer"
                     >
                        <img
                           src={`${
                              open
                                 ? "/images/icons8-menu-50.png"
                                 : "/images/icons8-close-50 (1).png"
                           }`}
                           alt=""
                        />
                     </div>
                     <div
                        className={`absolute top-[54px] -right-3.5 ${
                           !open ? "block" : "hidden"
                        }`}
                     >
                        <NavLink />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
