import React from "react";

interface TitleProps {
   title: string;
   describtion: string;
}

function Title(props: TitleProps) {
   const {title, describtion} = props;

   return (
      <>
         <h2 className="text-3xl text-white/90 font-bold text-center leading-[1.25] mb-4">
            {title}
         </h2>
         <p className="text-base leading-[1.625em] max-w-[570px] mx-auto text-center">
            {describtion}
         </p>
      </>
   );
}

export default Title;
