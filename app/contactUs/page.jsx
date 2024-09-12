import React from 'react';

const Page = () => {
    return (
        <>
            <section className="bg-gray-100">
                <div className="w-[80%] mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
                        <p className="mt-4 text-lg text-gray-500">Rambakerymachines & Engineers</p>
                    </div>
                    <div className="mt-16 lg:mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d235903.2964888864!2d88.39189309999998!3d22.504595600000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724083555128!5m2!1sen!2sin"
                                    width="1000"
                                    height="480"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div>
                                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                    <div className="px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                        <p className="mt-1 text-gray-600">81/1 north purbachal haltu ,kolkata,700078</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                        <p className="mt-1 text-gray-600">Monday - Saturday: 10am - 6pm</p> 
                                        <p className="mt-1 text-gray-600">Sunday: Closed</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                        <p className="mt-1 text-gray-600">Email: info.rambakerymachinesengineer@gmail.com</p>
                                        <p className="mt-1 text-gray-600">Phone: +91 8443204454</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;
