import "./HomePage.css";
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
import { useEffect } from "react";

import {useAuth} from "../../components/Authen/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.slide-in-left');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler to check the initial position
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.slide-in-right');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the scroll handler to check the initial position
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="homepage">
            <NavigateBar/>

            <div className={"homepage-content-firstpart"}>
                <img className={"homepage-content-firstpart-img"} src={"/src/assets/Frame 1.jpg"} alt="firstpic"/>
            </div>

            <div className={"homepage-content-introduction"}>
                <div className={"homepage-content-introduction-part1 slide-in-left"}>
                    <h1 className={"homepage-content-introduction-part1-title"}>Okyxas</h1>
                    <img className={"homepage-content-introduction-part1-img"} src={"/src/assets/logo.jpg"} alt="firstpic"/>
                    <p className={"homepage-content-introduction-part1-description"}>
                        Unleash the excitement of anime gacha packs! Collect beautifully designed cards featuring your favorite characters and discover rare treasures as you build your collection.
                    </p>
                </div>
                <div className="homepage-content-introduction-part2 slide-in-right">
                    <p className="homepage-content-introduction-part2-description">
                        Open gacha packs with stunning animations and uncover unique, rare cards. Every pack is a chance to add something extraordinary.
                    </p>
                    <img className="homepage-content-introduction-part2-img" src="/src/assets/logo.jpg" alt="firstpic"/>
                    <h1 className="homepage-content-introduction-part2-title">Unpack & Discover</h1>


                </div>
                <div className="homepage-content-introduction-part3 slide-in-left">
                    <h1 className="homepage-content-introduction-part3-title">Trade & Build Your Deck</h1>
                    <img className="homepage-content-introduction-part3-img" src="/src/assets/logo.jpg" alt="firstpic"/>
                    <p className="homepage-content-introduction-part3-description">
                        Trade cards with players worldwide, complete sets, and create your ultimate anime collection. Okyxas makes trading simple, fun, and rewarding!
                    </p>
                </div>
            </div>


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