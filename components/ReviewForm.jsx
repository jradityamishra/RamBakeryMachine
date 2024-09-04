'use client';
import { FaStar } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
export default function ReviewForm() {
    const { data: session, status } = useSession();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        image: "",
        rating: 0,
    });
  
    useEffect(() => {
       
        if (session?.user) {

            setFormData({
                name: session.user.name || "",
                email: session.user.email || "",
                image: session.user.image || "",
                message: "",
                rating: 0,
            });
        }
    }, [session]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRatingChange = (rating) => {
        setFormData({
            ...formData,
            rating,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (session) {
                const res = await fetch("/api/review", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                    cache: "no-cache",
                });
                setFormData({
                    message:"",
                    rating:""
                });
             // Log the response object here
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await res.json();
                toast.success("Thanks For Your Response");

            }
        } catch (error) {
            console.log(error);
        }


    };

    return (
        <div className="w-[400px] mx-auto p-6 bg-white shadow-lg rounded-lg my-4">
            <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Your Email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="4"
                        placeholder="Your Review"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Rating
                    </label>
                    <div className="flex space-x-2 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => handleRatingChange(star)}
                                className="focus:outline-none"
                            >
                                <FaStar
                                    className={`h-8 w-8 ${formData.rating >= star ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
}
