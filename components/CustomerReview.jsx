'use client'
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const CustomerReview = () => {
    const reviews = [
        {
            id: 1,
            rating: 4.9,
            text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
            name: "Jane D",
            role: "CEO",
            img: "https://pagedone.io/asset/uploads/1696229969.png"
        },
        {
            id: 2,
            rating: 4.9,
            text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
            name: "Harsh P.",
            role: "Product Designer",
            img: "https://pagedone.io/asset/uploads/1696229994.png"
        },
        {
            id: 3,
            rating: 4.9,
            text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
            name: "Harsh P.",
            role: "Product Designer",
            img: "https://pagedone.io/asset/uploads/1696229994.png"
        },
        {
            id: 4,
            rating: 4.9,
            text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
            name: "Harsh P.",
            role: "Product Designer",
            img: "https://pagedone.io/asset/uploads/1696229994.png"
        },
        // Add more reviews as needed
    ];

    return (
        <section className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-4xl text-center font-bold text-gray-900">What our happy Customers say!</h2>
                </div>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    transitionDuration={500}
                    containerClass="carousel-container"
                >
                    {reviews.map((review) => (
                        <div key={review.id} className="carousel-item ml-3 mr-3 bg-white gap-2 border  border-solid border-gray-300 rounded-xl p-4 transition-all duration-500 mx-auto">
                            <div className="flex items-center mb-7 gap-2 text-amber-500">
                                <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z" fill="currentColor" />
                                </svg>
                                <span className="text-base font-semibold text-indigo-600">{review.rating}</span>
                            </div>
                            <p className="text-base text-gray-600 leading-6 pb-8">{review.text}</p>
                            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                <img className="rounded-full h-10 w-10" src={review.img} alt="avatar" />
                                <div className="block">
                                    <h5 className="text-gray-900 font-medium mb-1">{review.name}</h5>
                                    <span className="text-sm leading-4 text-gray-500">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default CustomerReview;
