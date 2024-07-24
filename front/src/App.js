import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LobyPage from "./pages/LobyPage";

function App() {


    return (
        <div className="p-5">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/lobby" element={<LobyPage/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;

