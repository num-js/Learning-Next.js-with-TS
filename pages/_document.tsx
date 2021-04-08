import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:title" content="Learning Next.js with TS" />
                    <meta property="og:image"
                        content="https://raw.githubusercontent.com/mdnmnahmed/portfolio/master/images/front%20page.jpg" />
                    <meta property="og:image:width" content="300" />
                    <meta property="og:image:height" content="300" />
                    <meta name="description" content="ReactJS | NextJS | NodeJS | MERN Stack | Web Dev |" />
                    <meta property="og:url" content="https://mdnmnahmed.github.io/portfolio/" />
                    <meta name="keywords"
                        content="developer, resume, cv, portfolio, Numan Ahmed, numan, ahmed, numan ahmed, numan ahmed portfolio, mern, mern stack, web developer" />
                    <meta name="author" content="Numan Ahmed, Web Developer, Kolkata, West Bengal, INDIA, MERN Stack" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}