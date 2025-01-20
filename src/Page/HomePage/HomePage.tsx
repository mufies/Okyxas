import "./HomePage.css";
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
import SlideShow from "../SlideShow/SlideShow.tsx";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="homepage">
            <NavigateBar/>
            <SlideShow/>
            <div className="tryit-btn">
                <button className="tryit" type="button" onClick={() => navigate('/login')}>Try it now!</button>
            </div>
        </div>

    );
}

export default HomePage;