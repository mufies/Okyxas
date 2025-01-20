import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Page/LoginPage/LoginPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import HomePage from './Page/HomePage/HomePage';
import ProfilePage from './Page/ProfilePage/ProfilePage';
import DashboardPage from './Page/Dashboard/Dashboard.tsx';
import './App.css';
import ProtectRoute from './components/Authen/ProtectRoute';
import {AuthProvider} from "./components/Authen/AuthContext.tsx";

function App() {
    return (
        <Router>
            <AuthProvider>

            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/dashboard" element={<ProtectRoute><DashboardPage/></ProtectRoute>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage/>}/>
            </Routes>
            </AuthProvider>

        </Router>
    );
}

export default App;