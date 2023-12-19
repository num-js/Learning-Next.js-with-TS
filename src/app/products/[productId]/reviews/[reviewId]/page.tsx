"use client";
import { notFound } from "next/navigation"

const getRandomNumber = (count: number) => {
    return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }: { params: { reviewId: string, productId: string } }) {
    const randomNum = getRandomNumber(2);
    if (randomNum === 1) {
        // Generating Error, to render error.tsx component 
        throw Error("Error loading review");
    }

    if (parseInt(params.reviewId) > 100) {
        notFound();
    }
    return (
        <div>
            <h1>Review Details Page  </h1>
            <p>Review Id is {params.reviewId}, & product Id is {params.productId} </p>
        </div>
    )
}
