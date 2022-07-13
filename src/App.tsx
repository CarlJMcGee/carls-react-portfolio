import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [navCurrentSelect, navChangeSelect] = useState("About Me");

  return (
    <div>
      <Header
        navCurrentSelect={navCurrentSelect}
        navChangeSelect={navChangeSelect}
      ></Header>
      <main>
        {navCurrentSelect === "About Me" ? <About /> : ""}
        {navCurrentSelect === "Previous Work" ? <Portfolio /> : ""}
        {navCurrentSelect === "Contact" ? <Contact /> : ""}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
