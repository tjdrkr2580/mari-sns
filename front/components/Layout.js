import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>NextBird</a>
        </Link>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

export default Layout;
