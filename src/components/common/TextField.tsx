"use client";
import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
}

function TextField(propr: TextFieldProps) {
   const {label, ...rest} = propr;
   const [focus, setFocus] = React.useState(false);

   return (
      <label className="flex flex-col w-full">
         {label && (
            <p
               className={`mb-3 text-sm font-medium ${
                  !focus ? "text-white" : "text-primary"
               }`}
            >
               {label}
            </p>
         )}
         <input
            className="w-full bg-gray-300/15 py-2.5 px-6 border border-transparent focus:border-primary duration-300 outline-none text-white rounded leading-[1.75em]"
            {...rest}
            onClick={() => setFocus(true)}
            onBlur={() => setFocus(false)}
         />
      </label>
   );
}

export default TextField;
