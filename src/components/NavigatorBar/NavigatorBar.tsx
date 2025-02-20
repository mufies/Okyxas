// import { useEffect } from "react";
import avatar from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import './NavigatorBar.css';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAuth}   from "../Authen/AuthContext.tsx";
// import ContactBtn from "./ContactBtn.tsx";

function NavigateBar() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navigator = document.querySelector('.navigator');
    //         if (navigator) {
    //             if (window.scrollY > 50) {
    //                 navigator.classList.add('minimized');
    //             } else {
    //                 navigator.classList.remove('minimized');
    //             }
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (
        <div className="navigator">
            <div className={"Navigator-LeftPart"}>
            <button className="returnHomePageBtn" type="button" onClick={() => navigate('/')}>
                <img className="returnHomePageBtn-icon" src={avatar} alt="Avatar"/>
            </button>
            </div>

            <div className={"Navigator-MiddlePart"}>
                <button className={"Navigator-MiddlePart-Unpack"} onClick={()=>navigate("/unpack")}>
                    UnPack
                </button>
                <button className={"Navigator-MiddlePart-Trade"} onClick={()=>navigate("/trade")}>
                    Trade
                </button>
                <button className={"Navigator-MiddlePart-AboutUs"} onClick={()=>navigate("/aboutus")}>
                    About Us
                </button>
                <a className="Navigator-MiddlePart-Github" href="https://github.com/mufies/Okyxas" target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                </a>
                {/*<ContactBtn/>*/}

            </div>

            <div className={"Navigator-RightPart"}>

                { (isAuthenticated()) ? (
                        <button className={"ProfileBtn"} key={"Profile"} onClick={() => navigate('/profile')}>
                            <FontAwesomeIcon icon={faUser}/>
                        </button>
                ):
                (
                    <button className={"ProfileBtn"} key={"Profile"} onClick={() => navigate('/login')}>
                        <FontAwesomeIcon icon={faUser}/>
                    </button>
                )}

            </div>
        </div>
    );
}

export default NavigateBar;