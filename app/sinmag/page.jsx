import React from 'react'

const page = () => {
    return (
        <>
            <div class="font-inter">
            <section className="relative bg-gray-50 py-14 lg:py-24">
                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-manrope mx-auto mb-5 max-w-2xl text-center text-4xl font-bold text-gray-900 md:text-5xl md:leading-normal">
                        SINMAG <span className="text-indigo-600">since 1983 </span>
                    </h1>
                    <p className="mx-auto mb-9 max-w-sm text-center text-base font-normal leading-7 text-gray-500">
                        Sinmag was established in Taiwan, engaged in trading business of imported bakery equipment.
                    </p>
                </div>
            </section>
                <section class="relative py-14 lg:py-24">
                    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 gap-9 lg:grid-cols-2">
                            <div class="img-box">
                                <img src="https://www.sinmag.com/cn/images/about03.jpeg" alt="About Us tailwind page" class="max-lg:mx-auto" />
                            </div>
                            <div class="flex items-center lg:pl-[100px]">
                                <div class="data w-full">
                                    <h2 class="font-manrope relative mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">About Us</h2>
                                    <p class="mx-auto max-w-2xl text-xl font-normal leading-8 text-gray-500 max-lg:text-center">Sinmag Group specializes in manufacturing, R&D, sales and after service both in bakery and kitchen equipment field. In bakery, the product widely involves toast, bread, European bread, Danish pastry,cake, cookie and Chinese pastry. Sinmag provides full range bakery equipment and assorted device of showcase and refrigerator, from small home-bakery to large automatic production line, from standard product to customized service. Sinmag always focus on customer demand and market-orientation, energetically develop and create advanced product line and market field.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="relative py-14 lg:py-24">
                    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
                            <div class="flex items-center lg:pr-24">
                                <div class="data w-full">
                                    <img src="https://www.sinmag.com/Upload/%E8%8D%A3%E8%AA%89%E8%AF%81%E4%B9%A6/ISO14001%E7%8E%AF%E5%A2%83%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AF%81%E4%B9%A6-0094067dbb0d4109a70cf04ced8beb55.jpg" alt="About Us tailwind page" class="mx-auto mb-9 block lg:hidden" />
                                    <h2 class="font-manrope mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">Enterprise Honor</h2>
                                    <p class="mx-auto max-w-2xl text-xl font-normal leading-8 text-gray-500 max-lg:text-center">With the vision of becoming the world's most advanced bakery equipment manufacturer and the largest technical service provider,Sinmag is going to bring the aroma of happy bread to every corner of the world in the future.</p>
                                </div>
                            </div>
                            <div class="h-[400px]">
                                <img src="https://www.sinmag.com/Upload/%E8%8D%A3%E8%AA%89%E8%AF%81%E4%B9%A6/ISO14001%E7%8E%AF%E5%A2%83%E7%AE%A1%E7%90%86%E4%BD%93%E7%B3%BB%E8%AF%81%E4%B9%A6-0094067dbb0d4109a70cf04ced8beb55.jpg" alt="About Us tailwind page" class="hidden lg:block h-[400px]" />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-white py-20">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 class="font-manrope mb-14 text-center text-4xl font-bold text-gray-900">Our results in numbers</h2>
                        <div class="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
                            <div class="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                                <div class="flex gap-5">
                                    <div class="font-manrope text-2xl font-bold text-indigo-600">40+</div>
                                    <div class="flex-1">
                                        <h4 class="mb-2 text-xl font-semibold text-gray-900">Branch Office</h4>

                                    </div>
                                </div>
                            </div>
                            <div class="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                                <div class="flex gap-5">
                                    <div class="font-manrope text-2xl font-bold text-indigo-600">1200+</div>
                                    <div class="flex-1">
                                        <h4 class="mb-2 text-xl font-semibold text-gray-900">Employees</h4>

                                    </div>
                                </div>
                            </div>
                            <div class="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
                                <div class="flex gap-5">
                                    <div class="font-manrope text-2xl font-bold text-indigo-600">110,000+</div>
                                    <div class="flex-1">
                                        <h4 class="mb-2 text-xl font-semibold text-gray-900">Plant Area in WUXI</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default page