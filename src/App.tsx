import { Outlet } from "react-router-dom";

import classes from "./App.module.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className={classes.app}>
        <h1>GitHub Finder</h1>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
