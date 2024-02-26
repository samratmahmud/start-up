/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface SocialSiteProps {
   icon: string;
   icon2: string;
   path: string;
}

function SocialSite(props: SocialSiteProps) {
   const {icon, icon2, path} = props;
   const [show, setShow] = React.useState(false);

   return (
      <Link
         href={path}
         onMouseEnter={() => setShow(true)}
         onMouseLeave={() => setShow(false)}
      >
         <img
            className={`w-7 p-[5px] ${show ? "opacity-100" : "opacity-60"}`}
            src={show ? icon2 : icon}
            alt=""
         />
      </Link>
   );
}

export default SocialSite;
