import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
        </Routes>
    );
}

export default App;
