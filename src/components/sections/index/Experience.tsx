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
                        url="https://nightm4re.cc"
                        title="Nightmare.cc"
                        fullDescription={[
                            "Nightmare is a Advanced Roblox Alt Controler, an Alt Control Script (ARAC, or ACS) | Nightmare can be used to manage your roblox workspace or just used for fun.",
                            "I have been running Nightmare for over a year now, crazy right? Nightmare taught me alot of things that a basic programmer should know, of course one of them was security because we nearly got breached in the early months.",
                            "Nightmare's most notable project is NightAuth, which helps people to integrate all their data into the script, kinda like a authentication system but tweaked. NightAuth is made with JS and hosted on Namecheap's Stellar subscription",
                            "Nightmare is basically handled by a single developer, which is me, I host all projects and sub-projects for nightmare, and I handle all Backend + Frontend, along with User Data",
                            "Nightmare was orignally based on Fermium, a fake \"Alt Controller\" which people bought and believed in, Fermium was actually already deployed & working, but it was just a popular roblox script called Nameless Admin, they couldnt have more than 1+ customer using the bot at once.",
                            "But in the end, Nightmare is offically discontinued on 6/16/2025, I sadly can't handle the website nor script anymore, None of the sources are for sale! This has been a nice ride for all of us. Thank you <3"
                        ]}
                        cardImage="https://cdn.discordapp.com/icons/1248256088298623007/2fa7f83db50ddc7170e84bd3e777f933.webp?size=1024"
                        cardDescription="Nightmare is a Advanced Roblox Alt Controler, an Alt Control Script (ARAC, or ACS) | Nightmare can be used to manage your roblox workspace or just used for fun."
                        media={[
                            "https://files.catbox.moe/edplr6.mp4",
                            "https://files.catbox.moe/u0hzzl.mp4",
                            "https://files.catbox.moe/d6mtbp.mp4",
                        ]}
                        myRole="Founder/Head Developer"
                        timeline="June 2024 - June 2025"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                    />
                </ul>
            </section>
        </>
    );
}
