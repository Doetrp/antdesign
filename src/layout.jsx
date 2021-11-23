import { BrowserRouter as Router, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  RedditOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
function Layouts() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<RedditOutlined />}>
              <Link to="/aboutme">รายรับ-รายจ่าย</Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </Router>
  );
}

export default Layouts;
