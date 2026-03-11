import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  // set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <section
      id="projects"
      className="max-w-4xl w-full flex flex-col mx-auto"
    >
      <motion.h1
        className="text-center font-bold text-5xl mt-16 -mb-2"
        initial={{ transform: "translateY(-30px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.39, 0.21, 0.12, 0.96],
        }}
        viewport={{ amount: 0.1, once: true }}
      >
        Other Projects
      </motion.h1>

      <ul
        className={`${
          showAll ? "" : "max-h-[100rem]"
        } grid md:grid-cols-2 pt-6 pb-1 grid-cols-1 gap-4 overflow-hidden`}
      >
        {!showAll && (
          <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
            <Button
              label="Show More"
              onClick={() => setShowAll(true)}
              width="w-[10rem]"
            />
          </div>
        )}

        <ProjectCard
          url="https://api.7rab.xyz"
          title="Nightmare"
          fullDescription={[
            "I have been running Nightmare for over a year now. Nightmare taught me a lot of things that a basic programmer should know. One of them was security because we nearly got breached in the early months.",
            "Nightmare's most notable project is NightAuth, which helps people integrate their data into scripts, similar to an authentication system but tweaked. NightAuth is written in JS and hosted on Namecheap's Stellar subscription.",
            "Nightmare is basically handled by a single developer — me. I host all projects and sub-projects for Nightmare and handle all backend + frontend along with user data.",
            "Nightmare was originally based on Fermium, a fake 'Alt Controller' which people bought and believed in. Fermium was actually deployed & working but it was just a popular Roblox script called Nameless Admin. They couldn't have more than one customer using the bot at once.",
            "In the end Nightmare was officially discontinued on 6/16/2025. I sadly couldn't maintain the website nor script anymore. None of the sources are for sale. This has been a nice ride for all of us. Thank you <3",
            "[2026] psst, over here! This project kickstarted my new project Syscure, an authentication platform! Go check it out :>"
          ]}
          cardImage="https://github.com/7rabz/7rab.xyz/blob/main/public/Nightmare.jpg?raw=true"
          cardDescription="Nightmare is an advanced Roblox alt controller (ARAC / ACS). It can manage Roblox workspaces or be used for fun."
          media={[
            "https://files.catbox.moe/edplr6.mp4",
            "https://files.catbox.moe/u0hzzl.mp4",
            "https://files.catbox.moe/d6mtbp.mp4",
          ]}
          myRole="Founder / Head Developer"
          timeline="June 2024 - June 2025"
          delay={0.1}
          gradient="bg-gradient-to-tl"
        />

        <ProjectCard
          url="https://syscure.vip/"
          title="Syscure"
          fullDescription={[
            "Syscure is an extremely cheap LuaU whitelisting / authentication platform with a website & custom Discord bots.",
            "It focuses on strong anti-tamper protections and secure script distribution.",
            "This project is still in beta and may occasionally experience minor errors, but most are fixed quickly."
          ]}
          cardImage="https://content.syscure.vip/cropped_circle_image.png"
          cardDescription="Syscure is a LuaU whitelisting / authentication platform with a website and Discord integration focused on security and script protection."
          media={[]}
          myRole="Founder & Only Developer"
          timeline="December 2025 - Present"
          delay={0.1}
          gradient="bg-gradient-to-tl"
        />
      </ul>
    </section>
  );
}
