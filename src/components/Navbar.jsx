import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTop, setIsTop] = useState(true); // Untuk memeriksa apakah navbar di posisi atas

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scroll down
                setIsVisible(false);
            } else {
                // Scroll up
                setIsVisible(true);
            }

            // Periksa jika berada di bagian paling atas halaman
            setIsTop(window.scrollY === 0);

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"} 
            ${isTop ? "bg-transparent -z-0 shadow-none" : "bg-white/70 backdrop-blur shadow-md"}`}
        >
            <ul 
                className="flex justify-center space-x-10 py-4 text-lg"
            >
                {["Story", "Experience", "Project", "Contact"].map((section) => (
                    <li key={section}>
                        <Link
                            to={section.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-black hover:text-sky-500"
                            activeClass="text-sky-500"
                        >
                            {section}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;