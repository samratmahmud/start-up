import Link from "next/link";
import React from "react";

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant?: "small" | "large";
   color?: "blue" | "gray";
   href: string;
}

function Buttons(props: ButtonsProps) {
   const {children, href, variant = "large", color = "blue", ...rest} = props;

   const Comp = href ? Link : "button";

   return (
      // @ts-ignore
      <Comp
         {...(href ? {href} : {})}
         {...rest}
         className={`text-white font-semibold leading-[1.5em]  duration-300 rounded w-full text-center ${
            color === "blue"
               ? "bg-primary hover:bg-primary/80"
               : "bg-gray-500/10 hover:bg-gray-500/5"
         } ${
            variant === "large" ? "md:py-4 py-3.5 px-8" : "md:py-3 py-2.5 px-9"
         }`}
      >
         {children}
      </Comp>
   );
}

export default Buttons;
