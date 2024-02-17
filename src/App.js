import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClippedDrawer, { Navbar } from "./components/Navbar/PermanentDrawerLeft";
import { Margin } from "@mui/icons-material";
import PermanentDrawerLeft from "./components/Navbar/PermanentDrawerLeft";
import { ImageList } from "@mui/material";
import Learning from "./pages/Learning";

function App() {
  return (
    <div className="App">
     <Learning/>

      <PermanentDrawerLeft />

    </div>
  );
}
export default App;
