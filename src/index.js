import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./home";
import Main from "./main";
// import your route components too

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/callback" element={<Home />} />
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);