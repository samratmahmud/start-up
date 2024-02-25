/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface SocialSiteProps {
   icon: string;
   icon2: string;
   path: string;
   isActive?: boolean;
   handelClick?: () => void;
}

function SocialSite(props: SocialSiteProps) {
   const {icon, icon2, path, isActive, handelClick} = props;
   return (
      <div onMouseEnter={handelClick} onMouseLeave={handelClick}>
         <Link href={path}>
            <img
               className={`w-5 opacity-60`}
               src={!isActive ? icon2 : icon}
               alt=""
            />
         </Link>
      </div>
   );
}

export default SocialSite;
