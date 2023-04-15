import ColorHoverButton from "@component/components/buttons/ColorHoverButton";
import Layout from "@component/components/layout/Layout";
import sus from "../../public/images/SUS.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className={`flex flex-col justify-center items-center`}>
        <Layout className={``}>
            <div className={`my-10`}>
                <p>
                    In vitae feugiat libero. Suspendisse viverra tincidunt accumsan. Vivamus porta, tortor eget malesuada hendrerit, turpis justo commodo tortor, vitae venenatis nibh enim fermentum dui. Suspendisse potenti. Etiam varius ex orci, in egestas magna vulputate ac. Nulla id ultricies purus. Phasellus vehicula ex a interdum fermentum. Nulla sodales sagittis nulla. Etiam dolor felis, imperdiet eu leo gravida, aliquet eleifend magna.
                </p>
                <ColorHoverButton></ColorHoverButton>
                <div className={`w-full flex justify-center items-center`}>
                    <Image src={sus} alt="Sussy Baka" className={`my-5 rounded-full`}></Image>
                </div>

            </div>
        </Layout>
    </main>
  )
}
