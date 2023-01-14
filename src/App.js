import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Header from "./components/header";
import logo from "./assets/logo-default.png";
import Boginoo from "./components/boginoo";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Shortlink from "./components/shortlink";
import { userContext } from "./context";
import { useState } from "react";
function App() {
  const [logged, setLogged] = useState(false);
  return (
    <BrowserRouter>
      <div className="main">
        <Header></Header>
        <div className="mainField">
          <Link to="/">
            <img src={logo} style={{ width: "184px", height: "114px" }}></img>
          </Link>
          <userContext.Provider value={{ logged, setLogged }}>
            <Routes>
              <Route path="/" element={<Boginoo />}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
              <Route path=":id" element={<Shortlink></Shortlink>}></Route>
            </Routes>
          </userContext.Provider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <p>Made with ♥️ by Nest Academy</p>
            <p>©boginoo.io 2020</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
