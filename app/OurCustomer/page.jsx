
import React from 'react'
import Heading from "@components/Heading";
import ValubaleconstomerHome from "@components/ValubaleconstomerHome";
import CustomerReview from "@components/CustomerReview";

const page = () => {
    return (
        <>
            <Heading props="OUR VALUABLE CUSTOMERS" />
            <ValubaleconstomerHome />
            <CustomerReview />
        </>
    )
}

export default page