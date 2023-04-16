import Head from "next/head";
import Layout from "@component/components/layout/Layout";
import {motion} from "framer-motion";
import TransitionEffect from "@component/components/layout/transitionEffect";

const About = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Learn Next | About</title>
                <meta name="about" content="description"/>
            </Head>
            <section className={`flex flex-col justify-center items-center`}>
                <Layout className={`relative`}>
                    <TransitionEffect className={``}>
                        <h1 className={`my-10 font-bold text-xl `}>About Us Page</h1>
                    </TransitionEffect>
                </Layout>
            </section>

        </>

    );
};
export default About;
