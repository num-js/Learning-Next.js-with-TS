import Link from "next/link";

export default function ProductList() {

  const someProductId = "realme-phone";

  return (
    <>
      <h1>Product List --- </h1>
      <p><Link href="products/1">Product 1</Link></p>
      <p><Link href="products/2">Product 2</Link></p>
      <p><Link href="products/3" replace>Product 3</Link></p>
      {/* replace - prop to Link component, replaces browser history */}

      <p>Dynamic Product - Routing</p>
      <p><Link href={`products/${someProductId}`}>Some Product Id - {someProductId}</Link></p>
    </>
  )
}
