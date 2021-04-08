/**
 * This _app file is responsible for Every Page which renders
 * This file will in both Server & client, for example - write a console.log() & see in the Terminal & browser console
 * 
 */
export default function App({ Component, pageProps }) {
    console.log('Hello from _app file');     //this will also run on Node/server environment, u can see this log into ur Terminal also as well as in Browser Console

    return <Component {...pageProps} />
}