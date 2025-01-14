import avatar from "../../assets/avtz.jpg";
import "./HomePage.css";
import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
    <div>
        <img className="icon" src={avatar} alt="Avatar"/>
        <h1 className="WelcomeHomePage">Welcome To WeebHarmony</h1>
        <p className="des">Collect stunning anime gacha cards, trade with others,
            and sell on a bustling marketplace. Build your dream collection today!</p>
        <button className="tryit" type="button" onClick={() => navigate('/login')}>Try it now!</button>
    </div>
  );
}

export default HomePage;