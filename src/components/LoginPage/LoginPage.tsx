import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import avatar from '../../assets/avtz.jpg';
import banner from '../../assets/sanagi.jpg';

function LoginPage() {
    const navigate = useNavigate();

    return (
        <div>
            <button className="returnHomePage" type="button" onClick={() => navigate('/')}>
                <img className="returnHomePage-icon" src={avatar} alt="Avatar"/>
            </button>
            <p className="WebName">WeebHarmony</p>
            <h1 className="WelcomeHeading">WELCOME BACK</h1>
            <form className="login-form">
                <label htmlFor="username" className="username-label">Enter username or email</label>
                <input type="text" id="username" name="username" className="username-input"/>
                <label htmlFor="password" className="password-label">Enter password</label>
                <input type="password" id="password" name="password" className="password-input"/>
                <button type="submit" className="login-button">Login</button>
            </form>
            <button className="registerBtn" type="button" onClick={() => navigate('/register')}>
                Doesn’t have an account? Register here!
            </button>
            <img className="banner" src={banner} alt=""/>
        </div>
    );
}

export default LoginPage;