import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";

import "antd/dist/antd.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} exact />

        <Route path="/" element={<Layout />}>
          <Route path={`/:locale/about`} element={<About />} />
          <Route path={`/:locale`} element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
