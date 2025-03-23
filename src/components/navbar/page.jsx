'use client';
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import menuItems from "@/app/data/menuItems";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const navbarRef = useRef(null);
    const menuPanelRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const navbar = navbarRef.current;
        const handleScroll = () => {
            if (window.scrollY > 50) {
                gsap.to(navbar, { backgroundColor: "white", duration: 0.5, });
            } else {
                gsap.to(navbar, { backgroundColor: "transparent", duration: 0.5, });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const menuPanel = menuPanelRef.current;
        const closeButton = closeButtonRef.current;
        if (openNav) {
            document.body.classList.add("overflow-hidden");
            gsap.fromTo(
                menuPanel,
                { height: 0 },
                { height: "100vh", duration: 0.5, ease: "power2.inOut" }
            );
            gsap.fromTo(
                closeButton,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.3, delay: 0.3, ease: "power2.out" }
            );
        } else {
            document.body.classList.remove("overflow-hidden");
            gsap.to(menuPanel, { height: 0, duration: 1, ease: "power2.inOut" });
            gsap.to(closeButton, { opacity: 0, scale: 0, duration: 1, ease: "power2.in" });
        }
    }, [openNav]);

    return (
        <div>
            {/* Navbar */}
            <div ref={navbarRef} className="flex px-2 lg:px-20 flex-row items-center justify-between min-h-20 fixed top-0 right-0 left-0 z-30">
                <h2 >Eco vert europé</h2>

                <button onClick={() => setOpenNav(!openNav)}>
                    <Menu className="stroke-primary" size={50} />
                </button>
            </div>

            {/* Menu Panel */}
            <div ref={menuPanelRef} className="fixed inset-0 bg-white h-0 overflow-hidden z-30">
                <div className="flex flex-col items-center justify-center h-full">
                    <div ref={closeButtonRef} className="absolute top-4 right-4" style={{ opacity: 0, scale: 0 }}>
                        <button onClick={() => setOpenNav(false)} className="p-2 rounded-full transition-colors border-2 border-primary">
                            <X className="stroke-primary" size={30} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        {menuItems.map((item, index) => (
                            <div key={index} className="text-center">
                                <Link href={item.href} onClick={() => setOpenNav(false)} className="font-semibold font-panchang-bold text-xl lg:text-2xl text-primary">
                                    {item.title}
                                </Link>
                                {item.dropdown && (
                                    <ul className="mt-2">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <li key={subIndex} className="text-sm">
                                                <Link href={subItem.href} onClick={() => setOpenNav(false)} className="text-primary font-panchang">
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}