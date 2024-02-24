import Link from "next/link";
import React from "react";

interface buttonsProps {
   name: string;
   path: string;
   variant?: "small" | "large";
   color?: "blue" | "gray";
}

function Buttons(props: buttonsProps) {
   const {name, path, variant = "large", color = "blue"} = props;

   return (
      <Link
         href={path}
         className={`text-white font-semibold leading-[1.5em]  duration-300 rounded ${
            color === "blue"
               ? "bg-primary hover:bg-primary/80"
               : "bg-gray-500/10 hover:bg-gray-500/5"
         } ${variant === "large" ? "py-4 px-8" : "py-3 px-9"}`}
      >
         {name}
      </Link>
   );
}

export default Buttons;
