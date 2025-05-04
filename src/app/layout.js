import Navbar from "@/components/navbar/page";
import "./globals.css";
import Footer from "@/components/footer/page";
import MessageCookies from "@/components/tools/cookies/message";
import Image from "next/image";


export const metadata = {
  title: {  template: "Eco Vert Europé | %s" } ,
  description:"Eco Vert Europé, votre expert en rénovation et construction. Travaux clés en main : électricité, plomberie, gros œuvre, peinture, isolation, aménagement intérieur et extérieur.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  flex flex-col justify-between`}>
        <div className=" fixed bottom-4 left-4 z-50 flex flex-col justify-center items-start  gap-4">
          <div className="bg-white flex items-center justify-center gap-4 p-2 rounded-lg shadow-2xl select-none " >
            <Image src={'/img/trustpilot.png'} width={280} height={130} className="w-32" alt="google avis" title="google avis" />
          </div>
          <div className="bg-white flex items-center justify-center gap-4 p-2 rounded-lg shadow-2xl select-none " >
            <Image src={'/img/avisgoogle.avif'} width={280} height={130} className="w-24" alt="google avis" title="google avis" />
            <span className={` font-panchang text-xs font-semibold text-gray-700 `}> 4,8 / 5 sur 158 avis</span>
          </div>
        </div>
        <Navbar/>
        <MessageCookies/>
        <main className=" ">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
