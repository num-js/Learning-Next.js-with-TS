import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}


//generateMetadata is a Next.js function for change title or metadata.
/* export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product - ${params.productId}`
  }
} */


// We can use Async for MetaData, if some scenarios need to fetch title from API
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${params.productId}`);
        }, 500); // This will increase Page-load, page will not render until it resolved
    });
    return {
        title: `response Product - ${title}`
    }
}


export default function ProductDetails({ params }: Props) {
    return (
        <>
            <h1>Product Details of - {params.productId}</h1>
        </>
    )
}
