import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
{
title: "Leon",
category: "Content Writing • Strategy",
description:
"A collection of articles, insights, and written works exploring ideas, storytelling, technology, and personal growth.",
live: "https://medium.com/@anjosh753/list/3f9fb9da4cc0",
github: null,
image: "/leon.jpeg",
},

{
title: "Tic Tac Toe",
category: "JavaScript • Frontend",
description:
"A browser-based Tic Tac Toe game built using HTML, CSS, and JavaScript with responsive design and interactive gameplay.",
live: "https://dhurantham007.github.io/Tic-Tack-Toe/",
github: "https://github.com/DHURANTHAM007/Tic-Tack-Toe",
image: "/tic.jpeg",
},

{
title: "Mozilla Splash Page",
category: "HTML • CSS",
description:
"A Mozilla homepage recreation project demonstrating responsive layouts, styling techniques, and frontend development fundamentals.",
live: "https://dhurantham007.github.io/Mozilla_Splashpage/",
github: "https://github.com/DHURANTHAM007/Mozilla_Splashpage",
image: "/mozilla.jpg",
},
];

export default function Projects() {
const [active, setActive] = useState(0);

const current = projects[active];

return ( <section
   id="projects"
   className="
     relative
     bg-black
     py-24
   "
 > <div
     className="
       max-w-7xl
       mx-auto
       px-6
       lg:px-12
     "
   > <div className="text-center mb-16"> <p
         className="
           uppercase
           tracking-[10px]
           text-red-500
           text-xs
           mb-6
         "
       >
Projects </p>


      <h2
        className="
          text-5xl
          md:text-7xl
          font-black
          text-white
        "
      >
        Featured
        <span className="text-red-600">
          {" "}Work.
        </span>
      </h2>
    </div>

    <AnimatePresence mode="wait">
      <motion.div
        key={current.title}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.4 }}
        className="
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-center
        "
      >
        <motion.div
          layout
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.02]
          "
        >
          <img
            src={current.image}
            alt={current.title}
            className="
              w-full
              h-[240px]
              md:h-[340px]
              lg:h-[420px]
              object-cover
            "
          />
        </motion.div>

        <div>
          <p
            className="
              uppercase
              tracking-[6px]
              text-red-500
              text-xs
              mb-4
            "
          >
            {current.category}
          </p>

          <h3
            className="
              text-4xl
              md:text-6xl
              font-black
              text-white
              mb-6
            "
          >
            {current.title}
          </h3>

          <p
            className="
              text-gray-400
              text-lg
              leading-relaxed
              mb-8
            "
          >
            {current.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={current.live}
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-3
                rounded-full
                bg-red-600
                text-white
                hover:bg-red-500
                hover:scale-[1.03]
                transition-all
                duration-300
              "
            >
              Live Demo
            </a>

            {current.github && (
              <a
                href={current.github}
                target="_blank"
                rel="noreferrer"
                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-white/15
                  text-white
                  hover:border-red-500
                  hover:text-red-500
                  hover:bg-red-500/5
                  transition-all
                  duration-300
                "
              >
                GitHub
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActive(index)}
                className={`
                  px-5
                  py-3
                  rounded-full
                  border
                  transition-all
                  duration-300
                  ${
                    active === index
                      ? "border-red-500 bg-red-500/10 text-red-400"
                      : "border-white/10 text-gray-400 hover:border-red-500/40 hover:text-white"
                  }
                `}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>
);
}
