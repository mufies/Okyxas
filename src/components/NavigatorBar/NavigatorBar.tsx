// import { useEffect } from "react";
import avatar from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import './NavigatorBar.css';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAuth}   from "../Authen/AuthContext.tsx";
import ContactBtn from "./ContactBtn.tsx";

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
                <button className={"Navigator-LeftPart-UnPack"} onClick={()=>navigate("/unpack")}>
                    UnPack
                </button>
                <button className={"Navigator-LeftPart-Trade"} onClick={()=>navigate("/trade")}>
                    Trade
                </button>


            </div>

            <div className={"Navigator-RightPart"}>
                <div className={"Navigator-RightPart-ProjectDes"}>
                    <button className={"Navigator-RightPart-ProjectDes-AboutUs"} onClick={()=>navigate("/aboutus")}>
                        About Us
                    </button>
                    <a className="Navigator-RightPart-ProjectDes-Github" href="https://github.com/walshiiro/WeebHarmony" target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                    </a>
                    <ContactBtn/>
                </div>
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