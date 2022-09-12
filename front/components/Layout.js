import React from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Mari SNS</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{verticalAlign: "middle"}}/>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
        왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
        {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/tjdrkr2580" target="_blink" rel="noreferrer noopener">Made by Kim Tae Hyun</a>
        </Col>
      </Row>
     
    </div>
  );
};

export default Layout;
