/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, {useState} from "react";

interface DrawerLinkProps {
   name: string;
   path: string;
   items?: {nameL: string; href: string}[];
   isActive?: boolean;
   handelClick?: () => void;
}

function DrawerLinkProps(props: DrawerLinkProps) {
   const {name, path, items, isActive, handelClick} = props;
   const [open, setOpen] = useState(false);

   return (
      <div className="group relative z-0 px-2 lg:px-0" onClick={handelClick}>
         <Link
            href={path}
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center justify-between group"
         >
            <p
               className={`duration-300 leading-[1.5] py-2.5 lg:py-3 ${
                  isActive
                     ? "text-white"
                     : "text-gray-500/[0.7] group-hover:text-white"
               }`}
            >
               {name}
            </p>
            {items && (
               <img
                  width={14}
                  height={14}
                  className={`opacity-60 group-hover:opacity-100 duration-200 ml-3.5 lg:-rotate-90 lg:group-hover:rotate-90 ${
                     open ? "rotate-90" : "-rotate-90"
                  }`}
                  src="/images/icons8-collapse-arrow-48.png"
                  alt=""
               />
            )}
         </Link>
         {items && (
            <div
               className={`lg:absolute lg:top-[999999px] lg:left-0 lg:group-hover:top-12 lg:bg-gray-600/[1] lg:min-w-[250px] rounded lg:p-4 shadow-lg flex flex-col border-0 lg:border border-gray-500/20 ${
                  open ? "block" : "hidden lg:flex"
               }`}
            >
               {items.map(({nameL, href}, index) => (
                  <Link
                     key={index}
                     href={href}
                     className="py-2 lg:py-3 lg:px-2.5 whitespace-nowrap text-gray-500/70 hover:text-white"
                  >
                     {nameL}
                  </Link>
               ))}
            </div>
         )}
      </div>
   );
}

export default DrawerLinkProps;
