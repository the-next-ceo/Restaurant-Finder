import Navbar from "./components/navbar";
import Section from "./components/pic";
import "./components/navbar.css";
import Home from "./components/home/home";
import "./components/home/home.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <div style={{ height: 500 }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
