import "./HomePage.css";
import React, {useEffect} from 'react';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import NavigateBar from "../../components/NavigatorBar/NavigatorBar.tsx";
// import { useEffect } from "react";

import {useAuth} from "../../components/Authen/AuthContext.tsx";
import { useNavigate } from "react-router-dom";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NewsSwiper from "../../components/swiper/NewsSwiper.tsx";


function HomePage() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();






    const slideImages = [
        {
            url: 'src/assets/2217506.jpg',
        },
        {
            url: 'src/assets/firstpic.jpg',
        },
        {
            url: 'src/assets/homepagebg.jpg',
        },
    ];



    return (
        <div className="homepage">

            <NavigateBar/>
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
            <div className={"homepage-content"}>
            <p className={"homepage-content-title"}>O   K   Y   X   A   S</p>
                <div className="homepage-content-slide-container">
                    <Fade arrows={false} canSwipe={false} duration={4000} pauseOnHover={false}>
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div className={"homepage-content-slide-container-img"}>
                                    <img
                                        style={{ width: '100%', maxWidth: '1500px', height: '500px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #000000' }}
                                        src={slideImage.url}
                                        alt="slide"
                                    />
                                </div>
                            </div>
                        ))}

                    </Fade>

                </div>





            </div>
            <div className={"homepage-news"}>
                <p className={"homepage-news-title"}>N E W S</p>

                <NewsSwiper/>

            </div>
            <div className={"homepage-description"}>

            </div>




        </div>

    );
}

export default HomePage;