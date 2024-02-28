/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {useState} from "react";
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
         {
            nameL: "Blog Grid Page",
            href: "#",
         },
         {
            nameL: "Blog Sidebar Page",
            href: "#",
         },
         {
            nameL: "Blog Details Page",
            href: "#",
         },
         {
            nameL: "Sign In Page",
            href: "#",
         },
         {
            nameL: "Sign Up Page",
            href: "#",
         },
         {
            nameL: "Error Page",
            href: "#",
         },
      ],
   },
];

function NavLink() {
   const [tab, setTab] = useState(0);

   return (
      <div className="flex xl:gap-12 gap-10">
         {navLink.map(({name, path, items}, index) => (
            <div key={index} className="group relative z-0">
               <Link
                  href={path}
                  onClick={() => setTab(index)}
                  className="flex items-center group"
               >
                  <p
                     className={`duration-300 leading-[1.5] py-3 ${
                        tab === index
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
                        className="opacity-60 group-hover:opacity-100 duration-200 -rotate-90 group-hover:rotate-90 ml-3.5"
                        src="/images/icons8-collapse-arrow-48.png"
                        alt=""
                     />
                  )}
               </Link>
               {items && (
                  <div className="absolute top-[999999px] left-0 group-hover:top-12 bg-gray-600/[1] flex flex-col min-w-[250px] rounded p-4 shadow-lg">
                     {items.map(({nameL, href}, index) => (
                        <Link
                           key={index}
                           href={href}
                           className="px-3 py-2.5 whitespace-nowrap text-gray-500/70 hover:text-white"
                        >
                           {nameL}
                        </Link>
                     ))}
                  </div>
               )}
            </div>
         ))}
      </div>
   );
}

export default NavLink;
