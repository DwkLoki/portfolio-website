import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isTop, setIsTop] = useState(true); // Untuk memeriksa apakah navbar di posisi atas
    const [isOpen, setIsOpen] = useState(false);
    const [isRotating, setIsRotating] = useState(false);

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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Disable scroll
        } else {
            document.body.style.overflow = "auto"; // Enable scroll
        }

        return () => {
            document.body.style.overflow = "auto"; // Clean up overflow on unmount
        };
    }, [isOpen]); // Effect runs whenever isOpen changes


    // const handleMenu = () => {
    //     setIsOpen(!isOpen)
    // }

    const handleMenu = () => {
        setIsRotating(true); // Aktifkan rotasi
        setTimeout(() => {
            setIsOpen(!isOpen); // Ubah ikon setelah rotasi mulai
            setIsRotating(false); // Matikan rotasi
        }, 75); // Durasi sinkron dengan transisi
    };

    return (
        <nav
            className={`fixed lg:justify-center flex items-center justify-between top-0 left-0 right-0 bg-white p-5 shadow-md transition-all duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"} 
            ${isTop ? "bg-transparent z-10 shadow-none" : "bg-white/70 backdrop-blur z-30 shadow-md"}`}
        >
            <h1 className="lg:hidden text-3xl font-medium text-sky-500">Portfolio</h1>
            <button
                className="lg:hidden relative text-4xl text-sky-500 w-12 h-12 flex items-center justify-center overflow-hidden z-20"
                onClick={handleMenu}
            >
                <div
                    className={`absolute transition-transform duration-150 ${isRotating ? (isOpen ? "-rotate-90" : "rotate-90") : "rotate-0"
                        }`}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </div>
            </button>

            <div
                className={`fixed top-0 right-0 h-screen bg-white shadow-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } w-4/5 z-10`}
            >
                <ul className="flex flex-col items-center justify-center h-full space-y-6">
                    {["Story", "Experience", "Project", "Contact"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="text-lg font-medium text-black hover:text-sky-500 cursor-pointer"
                                activeClass="text-sky-500"
                                onClick={() => setIsOpen(false)} // Menutup menu saat item diklik
                            >
                                {section}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 transition-opacity duration-300 z-0 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={handleMenu} // Optional: Close menu when clicking on the overlay
            >
            </div>
            
            {/* <button className="text-4xl text-sky-500 relative overflow-hidden" onClick={handleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </button> */}
            <ul 
                className="lg:flex justify-center space-x-10 py-4 text-lg hidden"
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