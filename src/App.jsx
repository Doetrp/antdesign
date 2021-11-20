import "./App.css";
import { Home, Contact, About, Aboutme } from "./pages";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  RedditOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
function App() {
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
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, color: "white" }}
          >
            BROTHER AUTO PART & ENGINEERING COMPANY LIMITED
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/about">About</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/contact">Contact</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/aboutme">รายรับ-รายจ่าย</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/aboutme">
                  <Aboutme />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BROTHER AUTO PART & ENGINEERING COMPANY LIMITED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
