'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { video } from "../data/youtube";
import Link from 'next/link';

const Youtubeslider = () => {
    const [selectedVideo, setSelectedVideo] = useState('');

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleVideoClick = (url) => {
        setSelectedVideo(url);
    };

    return (
        <div className="my-4">
            <Slider {...settings}>
                {video.map((data, index) => (
                    <div
                        key={index}
                        className="mx-4 rounded-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                        onClick={() => handleVideoClick(data)} // Pass the video URL to the handler
                    >
                        <iframe
                            width="100%"
                            height="240px"
                            src={data} // Assuming each item in `video` is a URL
                            title={`Video ${index}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </Slider>

            {selectedVideo && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                    onClick={() => setSelectedVideo('')} // Close the video player when background is clicked
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the video
                    >
                        <iframe
                            width="80%"
                            height="80%"
                            src={selectedVideo}
                            title="Fullscreen video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Youtubeslider;
