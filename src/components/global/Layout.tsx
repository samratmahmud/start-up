import React, {ReactNode} from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
   children: ReactNode;
}

function Layout(props: LayoutProps) {
   const {children} = props;

   return (
      <main>
         <Navbar />
         {children}
         <Footer />
      </main>
   );
}

export default Layout;
