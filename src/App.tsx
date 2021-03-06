import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  const sess = localStorage.getItem("navCurrent") || "About Me";
  const [navCurrentSelect, navChangeSelect] = useState(sess);

  const renderPage = () => {
    switch (navCurrentSelect) {
      case "About Me":
        return <About />;

      case "Previous Work":
        return <Portfolio />;

      case "Contact":
        return <Contact />;

      case "Resume":
        return <Resume />;
      default:
        return "";
    }
  };

  return (
    <div>
      <Header
        navCurrentSelect={navCurrentSelect}
        navChangeSelect={navChangeSelect}
      />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
