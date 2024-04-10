import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarComponent from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Planets from "./pages/Planets/Planets";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <>
            <NavbarComponent/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/planets" element={<Planets/>}/>
                    <Route path="/crew" element={<Crew/>}/>
                    <Route path="/technology" element={<Technology/>}/>
                </Routes>
            </Router>
        </>
    )
}