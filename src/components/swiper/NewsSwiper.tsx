import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles

import './NewSwiper.css'

// Define the type for news items
interface NewsItem {
    title: string;
    imgUrl: string;
    link: string;
}

const news: NewsItem[] = [
    {
        title: 'New Feature: Trading',
        imgUrl: 'src/assets/2217506.jpg',
        link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
    },
    {
        title: 'New Feature: Trading',
        imgUrl: 'src/assets/firstpic.jpg',
        link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
    },
    {
        title: 'New Feature: Trading',
        imgUrl: 'src/assets/firstpic.jpg',
        link: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
    },
];

const NewsSwiper: React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            effect="fade"
            speed={800}

        >
            {news.map((item, index) => (
                <SwiperSlide key={index }>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={item.imgUrl}
                            alt={item.title}
                        />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default NewsSwiper;
