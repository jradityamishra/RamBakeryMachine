'use client'
import React, { useState } from 'react';

const Page = () => {
    

    const images = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    ];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleClick=(img)=>{
        setSelectedImage(img);
    }

    return (
        <div>
            <div className='m-3'>
                <div className="w-[50%] grid gap-4">
                    <div>
                        <img 
                            className="h-auto max-w-full rounded-lg" 
                            src={selectedImage} 
                            alt="" 
                            onClick={() => handleClick(images[0])}
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        {images.slice(1).map((image, index) => (
                            <div key={index}>
                                <img 
                                    className="h-auto max-w-full rounded-lg cursor-pointer" 
                                    src={image} 
                                    alt="" 
                                    onClick={() => handleClick(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Page;
