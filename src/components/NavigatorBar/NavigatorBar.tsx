import { useEffect } from "react";
import avatar from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import './NavigatorBar.css';

function NavigateBar() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const navigator = document.querySelector('.navigator');
            if (navigator) {
                if (window.scrollY > 50) {
                    navigator.classList.add('minimized');
                } else {
                    navigator.classList.remove('minimized');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navigator">
            <button className="returnHomePageBtn" type="button" onClick={() => navigate('/')}>
                <img className="returnHomePageBtn-icon" src={avatar} alt="Avatar"/>
            </button>
        </div>
    );
}

export default NavigateBar;