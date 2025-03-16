"use client"
import Lenis from "lenis"
import { useEffect } from "react"

export default function Footer(){
    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])
    return(
        <div>

        </div>
    )
}