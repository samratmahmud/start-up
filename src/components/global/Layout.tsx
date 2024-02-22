import React, {ReactNode} from "react";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
   children: ReactNode;
}

function Layout(props: LayoutProps) {
   const {children} = props;

   return (
      <main>
         <Navbar />
         {children}
      </main>
   );
}

export default Layout;
