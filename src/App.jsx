import "./App.css";
import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./config/routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
