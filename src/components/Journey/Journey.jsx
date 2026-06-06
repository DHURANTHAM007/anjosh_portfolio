import { useState } from "react";
import JourneyScene from "./JourneyScene";


const journeys = [
  {
    title: "Olympus",
    role: "Volunteer • HR • Networking",
    image: "/o.jpeg",
    description:
      "Worked behind the scenes at Olympus by MuLearn Foundation, collaborating with volunteers and industry professionals while exploring HR, networking, and the future of AI in hiring.",
    tags: ["HR", "Networking", "Leadership", "Volunteering"],
  },


  {
    title: "Savishesha",
    role: "Volunteer • Community Impact",
    image: "/s.jpeg",
    description:
      "A powerful experience focused on inclusivity, teamwork, and human connection. More than volunteering, it became a family built through shared responsibility and meaningful moments.",
    tags: ["Community", "NSS", "Inclusivity", "Teamwork"],
  },


  {
    title: "The Purple Movement",
    role: "Founder • Builder",
    image: "/tp.jpeg",
    description:
      "Started a movement focused on helping young creators find clarity, confidence, and direction through collaboration, leadership, and meaningful action.",
    tags: ["Leadership", "Startup", "Vision", "Community"],
  },


  {
    title: "TRICULT",
    role: "Volunteer • Event Operations",
    image: "/tri.jpeg",
    description:
      "An unforgettable event filled with collaboration, networking, creativity, and meaningful interactions with professionals, artists, and fellow volunteers.",
    tags: ["Events", "Networking", "Culture", "Teamwork"],
  },
];


export default function Journey() {
  const [active, setActive] = useState(0);


  const current = journeys[active];


  return (
    <section
      id="journey"
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
        py-24
      "
    >
      <JourneyScene />


      <div
        className="
          relative
          z-20
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
        "
      >
        {/* TITLE */}


        <div className="text-center mb-16">
          <p
            className="
              uppercase
              tracking-[10px]
              text-red-500
              text-xs
              mb-6
            "
          >
            Journey
          </p>


          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
            "
          >
            Moments that
            <span className="text-red-600">
              {" "}shaped me.
            </span>
          </h2>
        </div>


        {/* SHOWCASE */}


        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* IMAGE */}


          <div className="relative">
            <div
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
                  h-[260px]
                  md:h-[380px]
                  lg:h-[420px]
                  object-cover
                  transition-all
                  duration-500
                "
              />
            </div>
          </div>


          {/* CONTENT */}


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
              {current.role}
            </p>


            <h3
              className="
                text-4xl
                md:text-6xl
                font-black
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


            {/* TAGS */}


            <div
              className="
                flex
                flex-wrap
                gap-3
                mb-10
              "
            >
              {current.tags.map((tag) => (
                <div
                  key={tag}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    text-sm
                    text-gray-300
                    bg-white/[0.02]
                  "
                >
                  {tag}
                </div>
              ))}
            </div>


            {/* PROGRESS BAR */}


            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >
              {journeys.map((item, index) => (
                <button
                  key={item.title}
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
                        : "border-white/10 text-gray-400 hover:border-red-500/40"
                    }
                  `}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

