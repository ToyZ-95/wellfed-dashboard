import React, { useContext, useState } from "react";
import Footer from "../components/Footers/Footer";
import Navbar from "../components/Navbars/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { UserContext } from "../contexts/userContext";
import { consumerNavLinks, enterpriseNavLinks } from "../scripts/UIConfigs";
import { SessionProps, SidebarProps } from "../scripts/UIConfigs.types";

const Layout = ({ children }) => {
  const { userDetails } = useContext<SessionProps>(UserContext);

  const [sidebarProps] = useState<SidebarProps>(
    userDetails?.details?.userType === "consumer"
      ? consumerNavLinks
      : enterpriseNavLinks
  );

  return (
    <>
      <Sidebar navLinks={sidebarProps.navLinks} />
      <div className="relative md:ml-64 bg-blueGray-100">
        {<Navbar />}
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
