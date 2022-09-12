import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

export default Layout;
