import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Home Page</h1>
            welcome to home

            <br />
            <Link href="/blog">Go to Blog Page</Link>

            <br />
            <Link href="/products">Go to Products Page</Link>
        </>
    )
}
