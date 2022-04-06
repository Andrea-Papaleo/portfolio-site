import React from "react";
import Navbar from "../Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { useWindowDimensions, useScrollPosition } from "../../hooks";
import { WindowContext } from "../../contexts";

const Layout = ({ pageTitle, children }) => {
  const { width } = useWindowDimensions();
  const { isTop } = useScrollPosition();
  return (
    <WindowContext.Provider value={[width, isTop]}>
      <div>
        <GlobalStyle />
        <title>{pageTitle}</title>
        <Navbar />
        <main>{children}</main>
      </div>
    </WindowContext.Provider>
  );
};

export default Layout;
