import './RegisterPage.css';
import avatar from '../../assets/avtz.jpg';
import pic from '../../assets/regpic.jpg';
import {useNavigate} from "react-router-dom";


function RegisterPage()
{
    const navigate = useNavigate();
    return(
        <>
            <button className="returnHomePage" type="button" onClick={() => navigate('/')}>
                <img className="returnHomePage-icon" src={avatar} alt="Avatar"/>
            </button>
            <p className="WebName">WeebHarmony</p>
            <h1 className="register-WebName">REGISTER</h1>
            <form className="registerForm">
                <label htmlFor="username" className="register-username-label">Username</label>
                <input type="text" id="username" name="username" className="register-username-input"/>

                <label htmlFor="email" className="register-email-label">Email</label>
                <input type="email" id="email" name="email" className="register-email-input"/>

                <label htmlFor="password" className="register-password-label">Password</label>
                <input type="password" id="password" name="password" className="register-password-input"/>

                <label htmlFor="reenterpassword" className="register-reenterpassword-label">Re-enter Password</label>
                <input type="password" id="reenterpassword" name="reenterpassword"
                       className="register-reenterpassword-input"/>

                <button type="submit" className="register-button">Register</button>
            </form>
            <img src={pic} className="regpic"/>
        </>
    );
}

export default RegisterPage;