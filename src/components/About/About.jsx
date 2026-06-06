import AboutScene from "./AboutScene";

const skills = [
  "Python",
  "Java",
  "Content Writing",
  "Strategy",
  "Figma",
  "UI/UX Design",
  "Community Building",
  "Event Management",
  "Leadership",
  "Problem Solving",
  "Communication",
  "Project Planning",
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden
        py-20
        md:py-32
      "
    >
      <AboutScene />

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
        {/* ABOUT */}

        <div className="max-w-5xl mx-auto text-center">
          <p
            className="
              uppercase
              tracking-[10px]
              text-red-500
              text-xs
              mb-6
            "
          >
            About Me
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-[1]
            "
          >
            Driven by purpose.
            <br />
            Focused on{" "}
            <span className="text-red-600">
              impact.
            </span>
          </h2>

          <p
            className="
              mt-12
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            I don’t just want a successful career,
            I want a life with freedom and impact.
            Financial stability matters to me not
            for luxury, but for the ability to make
            decisions without hesitation.
          </p>

          <p
            className="
              mt-8
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            Through communities, events, and shared
            experiences, I’ve discovered a passion
            for bringing people together and
            creating moments that leave a lasting
            impression.
          </p>
        </div>

        {/* VISION */}

        <div
          className="
            mt-20
            md:mt-28
            grid
            md:grid-cols-3
            gap-6
          "
        >
          {[
            {
              title: "Freedom & Impact",
              text:
                "Building a life where meaningful work creates both personal freedom and lasting value.",
            },
            {
              title: "People & Connections",
              text:
                "Creating environments where people connect, collaborate, and build genuine relationships.",
            },
            {
              title: "Legacy",
              text:
                "Being remembered not only for achievements, but for the positive impact left on people and communities.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-sm
                hover:border-red-500/40
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(255,0,0,0.08)]
                transition-all
                duration-500
              "
            >
              <h3
                className="
                  text-2xl
                  font-semibold
                  text-white
                  mb-6
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-gray-400
                  leading-relaxed
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* TIME */}

        <div
          className="
            mt-24
            md:mt-36
            text-center
            relative
          "
        >
          <p
            className="
              uppercase
              tracking-[10px]
              text-red-500
              text-xs
              mb-8
            "
          >
            What Drives Me
          </p>

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[250px]
              h-[250px]
              md:w-[400px]
              md:h-[400px]
              rounded-full
              bg-red-500/5
              blur-[140px]
            "
          />

          <h2
            className="
              relative
              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
              font-black
              drop-shadow-[0_0_35px_rgba(255,0,0,0.12)]
            "
          >
            Time.
          </h2>

          <p
            className="
              mt-10
              text-lg
              md:text-xl
              text-gray-300
              max-w-4xl
              mx-auto
            "
          >
            The one thing we always have,
            and never have enough of when
            it matters most.
          </p>

          <p
            className="
              mt-10
              max-w-4xl
              mx-auto
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            I don’t want to live on autopilot.
            Every project, event, and experience
            is an opportunity to create something
            meaningful. My goal is to use my time
            intentionally and build work that
            people genuinely remember.
          </p>
        </div>

        {/* EXPERTISE */}

        <div
          className="
            mt-24
            md:mt-36
          "
        >
          <p
            className="
              uppercase
              tracking-[10px]
              text-red-500
              text-xs
              text-center
              mb-10
            "
          >
            Expertise
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              max-w-6xl
              mx-auto
            "
          >
            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  px-5
                  md:px-6
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-white
                  hover:border-red-500/40
                  hover:text-red-400
                  hover:bg-red-500/[0.04]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}