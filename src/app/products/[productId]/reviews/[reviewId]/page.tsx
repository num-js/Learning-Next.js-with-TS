import { notFound } from "next/navigation"

export default function ReviewDetails({ params }: { params: { reviewId: string, productId: string } }) {
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
