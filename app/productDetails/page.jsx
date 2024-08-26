'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const searchParams = useSearchParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState([]);

    useEffect(() => {
        try {
            const newparams = JSON.parse(searchParams.get('object'));
            setProduct(newparams);
            setSelectedImage(newparams.productImages || []);
        } catch (error) {
            console.error("Error parsing searchParams:", error);
        }
    }, [searchParams]);

    const handleClick = (img) => {
        setSelectedImage([img]);
    }

    return (
        <div>
            <div className='m-3'>
                <div className="w-[50%] grid gap-4">
                    {selectedImage.length > 0 && (
                        <div className="flex">
                            <img
                                className="h-auto max-w-full text-white bg-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-900 shadow-blue-gray-900/40"
                                src={selectedImage[0]}
                                alt=""
                                onClick={() => handleClick(selectedImage[0])}
                            />

                        </div>

                    )}
                    <div className="grid grid-cols-5 gap-4">
                        {selectedImage.slice(1).map((image, index) => (
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

            <div className='flex-center flex-col'>
                {product && (
                    <>
                        <div
                            class="relative h-auto sm:hauto m-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-900 shadow-blue-gray-900/40">

                            <img src={product.featureImage} className="w-full h-auto rounded-lg" alt="image description" />
                        </div>
                        <div
                            class="relative h-200 overflow-hidden m-3 text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                            <img src={product.ModelImage} className="w-full h-full  rounded-lg" alt="image description" />
                        </div>

                    </>
                )}
            </div>
        </div>
    );


}

export default Page;
