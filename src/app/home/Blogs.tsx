import Title from "@/components/common/Title";
import React from "react";

function Blogs() {
   return (
      <section className="bg-gray-700/[1]">
         <div className="container py-28">
            <div className="mb-[100px]">
               <Title
                  title="Our Latest Blogs"
                  describtion="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
               />
            </div>
         </div>
      </section>
   );
}

export default Blogs;
