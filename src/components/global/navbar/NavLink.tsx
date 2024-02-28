/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {useState} from "react";
import DrawerLinkProps from "./DrawerLinkProps";

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
      <div className="flex lg:flex-row flex-col xl:gap-12 lg:gap-10 bg-gray-700 lg:bg-transparent min-w-[230px] border lg:border-0 border-gray-500/20 rounded p-4 lg:p-0 scroll-container">
         {navLink.map(({name, path, items}, index) => (
            <DrawerLinkProps
               key={index}
               name={name}
               path={path}
               items={items}
               isActive={tab === index}
               handelClick={() => setTab(index)}
            />
         ))}
      </div>
   );
}

export default NavLink;
