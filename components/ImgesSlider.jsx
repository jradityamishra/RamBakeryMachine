'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const images = [
    { src: "/assets/images/container.jpeg", alt: "Container Image 1" },
    { src: "/assets/images/container1.jpg", alt: "Container Image 2" },
    // Add more images as needed
];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: "ease-in-out",
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} id="slick-slide-large " className="relative mt-5 w-full h-[250px] sm:h-[350px]">
                        <div className="relative w-full h-full">
                            <Image
                                src={image.src}
                                fill
                                style={{ objectFit: 'cover' }}
                                alt={image.alt}
                                className="rounded-md"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </div>
                ))}
            </Slider>
            <section className='absolute w-full top-1/2 transform -translate-y-1/2 flex flex-col items-center text-center'>
                <h1 className='head_text'>
                    Ram Bakery Machines
                    <br className='max-md:hidden' />
                    <span className='orange_gradient'> & Engineers</span>
                </h1>
                <p className='desc'>
                    Exporter, Wholesaler, Manufacturer, Trader, Supplier, Retailer, Distributor, Importer, Trader of Planetary Mixers, Deck Ovens, Convection Ovens, Rack Ovens, etc.
                </p>
            </section>
        </div>
    );
};

export default ImageSlider;
