import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://7rab.xyz/"
                        title="7rab.xyz"
                        fullDescription={[
                            "meeeowwww :3"
                        ]}
                        cardImage="https://cdn.7rab.xyz/image.png"
                        cardDescription="A creative full-stack developer with nearly 4 years of coding experience, specializing in backend development while maintaining strong frontend skills. Passionate about debugging, modern web technologies, and building fun projects."
                        media={[
                            "https://cdn.7rab.xyz/me.png",
                        ]}
                        myRole="Developer"
                        timeline="June 16, 2025 - Current"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
