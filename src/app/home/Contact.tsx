import React from "react";

function Contact() {
   return (
      <section>
         <div className="container py-28">
            <div className="grid grid-cols-3">
               <div className="bg-gray-300/10 p-[55px] col-span-2 rounded-sm">
                  <h2 className="text-2xl text-white font-bold leading-[1.2em] mb-3">
                     Need Help? Open a Ticket
                  </h2>
                  <p className="mb-12 leading-[1.5em]">
                     Our support team will get back to you ASAP via email.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
