'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from "./loading.jsx";
import { productDetails } from "../data/product_details";
import Link from 'next/link';

const SmallSlider = () => {
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            {!productDetails ? (
                <Loading />
            ) : (
                <div className="my-4 h-[240px]">
                    <Slider {...settings}>
                        {productDetails.map((data, index) => (
                            <div
                                key={index}
                                className="mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            >
                                <Link href={`/products/${data._id}`}>
                                    <img
                                        className="p-4 h-40 w-40 rounded-t-lg"
                                        src={data.coverImage}
                                        alt="product image"
                                    />
                                </Link>
                                <div className="px-4 pb-4">
                                    <Link href={`/products/${data._id}`}>
                                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {data.category.length > 20
                                                ? `${data.category.slice(0, 18)}...`
                                                : data.category}
                                        </h5>
                                    </Link>
                                    <div className="flex items-center mt-2 mb-2">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(4)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                            <svg
                                                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
                                            5.0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
};

export default SmallSlider;
