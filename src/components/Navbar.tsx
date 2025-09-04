import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 50,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <motion.header
                className="flex justify-center items-center w-full fixed top-0 z-50 px-4 pt-4"
                initial={{ transform: "translateY(-30px)", opacity: 0 }}
                animate={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0.39, 0.21, 0.12, 0.96],
                }}
            >
                <nav
                    style={{ boxShadow: "0 0 30px 2.5px #0a0a0a" }}
                    className="flex h-14 max-w-[46rem] w-full bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-md rounded-lg border border-accent px-4"
                >
                    <div className="flex items-center justify-between w-full relative">
                        {/* Left side buttons */}
                        <div className="flex flex-row gap-2 items-center">
                            <button
                                onClick={() => handleClickScroll("about")}
                                className="p-2 duration-300 text-lg font-medium hover:bg-secondary rounded-md"
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleClickScroll("experience")}
                                className="p-2 duration-300 text-lg font-medium hover:bg-secondary rounded-md"
                            >
                                Experience
                            </button>
                        </div>

                        {/* Centered profile */}
                        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                            <img
                                alt="Profile"
                                draggable={false}
                                className="h-10 w-10 rounded-full border border-accent shadow-md"
                                src="https://cdn.7rab.xyz/me.png"
                            />
                        </div>

                        {/* Right side contact */}
                        <div className="hidden min-[330px]:flex flex-row gap-2 items-center">
                            <Link
                                draggable={false}
                                href="https://discord.com/users/1042440993028460594"
                                target="_blank"
                                className="p-2 duration-300 text-lg font-medium hover:bg-secondary rounded-md"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </motion.header>
        </>
    );
}
