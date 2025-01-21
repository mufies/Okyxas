import "./HomePage.css";
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
import SlideShow from "../SlideShow/SlideShow.tsx";
import {useAuth} from "../../components/Authen/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();


    return (
        <div className="homepage">
            <NavigateBar/>
            <SlideShow/>
            <div className="tryit-btn">
                { (isAuthenticated()) ? (
                    console.log("isAuthenticated"),
                    <button className="tryit" type="button" onClick={() => navigate('/dashboard')}>Try it now!</button>
                    ):
                    (
                    console.log("isNotAuthenticated"),
                <button className="tryit" type="button" onClick={() => navigate('/login')}>Try it now!</button>)
                }
            </div>
        </div>

    );
}

export default HomePage;