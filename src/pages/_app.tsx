import '../styles/global.scss';
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google';
import Head from "next/head";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import Navbar from "@component/components/navbar/Navbar";

const montserrat: NextFontWithVariable = Montserrat({
  subsets: ['latin'] ,
  variable: '--font-mont'
})


export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Learn Next</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark dark:text-light w-full min-h-screen`}>
                <Navbar></Navbar>
                <Component {...pageProps} />
            </main>
        </>
    )
};
