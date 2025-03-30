import Navbar from "@/components/navbar/page";
import "./globals.css";
import Footer from "@/components/footer/page";


export const metadata = {
  title: {  template: "Eco Vert Europé | %s" } ,
  description:"Eco Vert Europé, votre expert en rénovation et construction. Travaux clés en main : électricité, plomberie, gros œuvre, peinture, isolation, aménagement intérieur et extérieur.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  flex flex-col justify-between`}>
        <Navbar/>
        <main className=" ">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
