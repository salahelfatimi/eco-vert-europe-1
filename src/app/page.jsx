'use client'

import Faq from "@/components/pages/faq";
import Header from "@/components/pages/header";
import Processus from "@/components/pages/processus";
import Reve from "@/components/pages/reve";
import Service from "@/components/pages/service";
import LogoScroll from "@/components/tools/logoScroll";


export default function Home() {
  
  return (
    <div className="flex flex-col ">
        <Header/>
        <LogoScroll />
        <Reve/>
        <Service/>
        <Processus/>
      
        <Faq/>
    </div>
  );
}
