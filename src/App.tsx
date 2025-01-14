import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from "./components/ProfilePage/ProfilePage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;