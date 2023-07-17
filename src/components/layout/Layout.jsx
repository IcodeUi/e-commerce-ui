import React from "react";
import Nav from "../global/nav/Nav";
import Footer from "../global/footer/Footer";
import "./Layout.scss";
function Layout({ children }) {
  return (
    <div className="">
      {<Nav />}
      <main className="--t-max-main-chill">
        {children}
      </main>
      {<Footer />}
    </div>
  );
}

export default Layout;
