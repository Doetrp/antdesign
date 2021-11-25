import React from "react";
import { useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  RedditOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

function MainLayout({ children }) {
  // children คือ page ที่ run component
  const {pathname} = useLocation()
  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline">
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Rapper</Link>
          </Menu.Item>
          <Menu.Item key="/about" icon={<PieChartOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="/contact" icon={<DesktopOutlined />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="/IncomeandExpenses" icon={<RedditOutlined />}>
            <Link to="/IncomeandExpenses">Income and Expenses</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          className="site-layout-background"
          style={{ padding: 0, color: "white", textAlign: "center" }}
        >
          all my projects
        </Header>
        <Content style={{ margin: "24px 16px 0", height: "200vh" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
