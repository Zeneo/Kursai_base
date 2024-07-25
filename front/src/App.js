import './css/App.css';
import './css/main.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LobbyPage from "./pages/LobbyPage";

function App() {


    return (
        <div className="p-5">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/lobby" element={<LobbyPage/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;

