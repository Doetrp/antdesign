import "./App.css";
import { Rapper, Contact, About, IncomeandExpenses } from "./pages";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  RedditOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
function App() {
  return (
    <Router>
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
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Rapper</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<RedditOutlined />}>
              <Link to="/IncomeandExpenses">IncomeandExpenses</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header
            className="site-layout-background"
            style={{ padding: 0, color: "white" }}
          >
            all my projects
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <Switch>
              <Route exact path="/">
                <Rapper />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/IncomeandExpenses">
                <IncomeandExpenses />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
