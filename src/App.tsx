import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Page/LoginPage/LoginPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import HomePage from './Page/HomePage/HomePage';
import ProfilePage from './Page/MyProfilePage/ProfilePage';
import './App.css';
import ProtectRoute from './components/Authen/ProtectRoute';
import {AuthProvider} from "./components/Authen/AuthContext.tsx";
import UnPackPage from "./Page/UnPackPage/UnPackPage.tsx";
import TradePage from "./Page/TradePage/TradePage.tsx";

function App() {
    return (
        <Router>
            <AuthProvider>

            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/home" element={<ProtectRoute><ProfilePage/></ProtectRoute>}/>
                <Route path={"unpack"} element={<UnPackPage/>}/>
                <Route path={"trade"} element={<TradePage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            </AuthProvider>

        </Router>
    );
}

export default App;