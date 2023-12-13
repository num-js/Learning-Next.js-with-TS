"use client";
import { useRouter } from 'next/navigation'

export default function OrderProduct() {

    const router = useRouter();

    const handleOrderPlace = () => {
        router.push('/');
        /*
            // router have different options like ---
            router.replace('/'); //This will replace browser history
            router.back(); //To navigate back page
            router.forward(); //To navigate forward page
        */
    }

    return (
        <div>
            <h1>Order Product Page</h1>

            <button onClick={handleOrderPlace}>Place Order</button>
        </div>
    )
}
