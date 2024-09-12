import React from 'react'
import Link from "next/link";
const page = () => {
    return (
        <>
            <section class="pt-10 mb-5 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 md:grid-cols-2 mt-10">

                        <div>
                            <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">Hey, I
                                am
                                <br class="block sm:hidden" /> Ritesh Kumar Singh
                            </h2>
                            <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                                RamBakeryMachines, established in 2020, is one of the leading importers of Sinmag bakery machines and kitchen equipment for hotels and other institutions catering to the needs of the food and beverage industries of India.
                                <br /> <br />
                                Renowned for its best after-sales service, customized service, RamBakeryMachines offer a wide range of the bakery industry. We have a PAN India service network.
                                <br /> <br />
                                With a team of highly skilled and trained professionals, every installation is efficiently coordinated and completed. We provide complete after-sales service and support. Our warehouse is well-stocked with machines and spare parts and has an efficient service team.
                            </p>

                            <p class="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                                <span class="relative inline-block">
                                    {/* <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span> */}
                                    <span class="relative"> Have a question? </span>
                                </span>
                                <br class="block sm:hidden" />Ask me on <Link href="https://www.linkedin.com/in/ram-bakery-machines-and-engineers-644515237/" title=""
                                    class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Linkedln</Link>
                            </p>
                        </div>

                        <div class="relative">
                            {/* <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2 " src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" /> */}

                            <img class="relative mb-10 shadow-2xl rounded-xl  w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/assets/images/riteshImg.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default page