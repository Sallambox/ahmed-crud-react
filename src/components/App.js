import Navbar from "./Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes } from "../routes/Router";
function App() {
    return (
        <Router>
            <Navbar />
           <Routes  />
        </Router>
    );
}

export default App;
