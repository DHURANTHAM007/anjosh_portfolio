import { useEffect, useState } from "react";
import HeroScene from "./HeroScene";

export default function Hero() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const introPlayed = sessionStorage.getItem("introPlayed");

    if (introPlayed) {
      setIntroComplete(true);
      return;
    }

    const timer = setTimeout(() => {
      setIntroComplete(true);
      sessionStorage.setItem("introPlayed", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden">
      <HeroScene />

      <div
        className={`
          relative z-20
          transition-opacity duration-1000
          ${introComplete ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* NAVBAR */}

        <nav
          className="
            absolute
            top-0
            left-0
            w-full
            flex
            justify-between
            items-center
            px-6
            lg:px-16
            py-8
            text-white
            z-30
          "
        >
          <div className="text-4xl lg:text-5xl font-black select-none">
            <span>A</span>
            <span className="text-red-600">J</span>
          </div>

          <div
            className="
              hidden
              md:flex
              gap-10
              uppercase
              tracking-[4px]
              text-sm
            "
          >
            <a
              href="#about"
              className="
                text-white
                hover:text-red-500
                transition-colors
                duration-300
              "
            >
              About
            </a>

            <a
              href="#journey"
              className="
                text-white
                hover:text-red-500
                transition-colors
                duration-300
              "
            >
              Journey
            </a>

            <a
              href="#projects"
              className="
                text-white
                hover:text-red-500
                transition-colors
                duration-300
              "
            >
              Projects
            </a>

            <a
              href="#contact"
              className="
                text-white
                hover:text-red-500
                transition-colors
                duration-300
              "
            >
              Contact
            </a>
          </div>
        </nav>

        {/* HERO */}

        <div
          className="
            min-h-screen
            lg:min-h-screen
            grid
            lg:grid-cols-2
            items-center
            gap-12
            lg:gap-16
            px-6
            lg:px-20
            pt-28
            lg:pt-0
            pb-20
            lg:pb-0
          "
        >
          {/* LEFT */}

          <div className="text-white z-20">
            <p
              className="
                mt-4
                lg:mt-10
                uppercase
                tracking-[8px]
                md:tracking-[10px]
                text-red-500
                text-[10px]
                md:text-xs
                mb-8
              "
            >
              Welcome Explorer
            </p>

            <h1
              className="
                text-[52px]
                sm:text-[64px]
                md:text-[100px]
                lg:text-[140px]
                font-black
                leading-[0.9]
              "
            >
              ANJOSH
              <br />
              <span className="text-red-600">JA</span>
            </h1>

            <div
              className="
                mt-8
                flex
                items-center
                flex-wrap
                gap-3
                uppercase
                tracking-[2px]
                sm:tracking-[3px]
                md:tracking-[5px]
                text-[10px]
                sm:text-xs
              "
            >
              <span className="text-red-500">Content Creator</span>

              <span className="text-white">•</span>

              <span className="text-red-500">Designer</span>

              <span className="text-white">•</span>

              <span className="text-red-500">Strategist</span>
            </div>

            <p
              className="
                mt-8
                md:mt-10
                max-w-xl
                text-gray-400
                text-base
                md:text-lg
                leading-relaxed
              "
            >
              Creating stories, experiences,
              content and digital identities
              that inspire, engage and leave
              a lasting impact.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 md:mt-12">
              <a
  href="#journey"
  className="
    px-6
    md:px-8
    py-3
    md:py-4
    rounded-full
    bg-red-600
    text-white
    inline-flex
    items-center
    justify-center
    hover:bg-red-500
    hover:scale-[1.03]
    active:scale-95
    shadow-[0_0_25px_rgba(255,0,0,0.2)]
    hover:shadow-[0_0_35px_rgba(255,0,0,0.35)]
    transition-all
    duration-300
  "
>
  Begin Journey →
</a>

              <a
  href="#projects"
  className="
    px-6
    md:px-8
    py-3
    md:py-4
    rounded-full
    border
    border-white/15
    text-white
    inline-flex
    items-center
    justify-center
    hover:border-red-500
    hover:text-red-500
    hover:bg-red-500/5
    hover:scale-[1.03]
    active:scale-95
    transition-all
    duration-300
  "
>
  View Work
</a>
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              justify-center
              items-center
              relative
              mt-12
              lg:mt-0
            "
          >
            <div
              className="
                relative
                drop-shadow-[0_0_80px_rgba(255,0,0,0.12)]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-red-500/[0.08]
                  blur-[120px]
                  scale-110
                "
              />

              <div
                className="
                  relative
                  p-[4px]
                  rounded-full
                  bg-gradient-to-br
                  from-white/70
                  via-white/20
                  to-red-500/40
                  shadow-[0_0_40px_rgba(255,0,0,0.15)]
                "
              >
                <img
                  src="/anjosh.png"
                  alt="Anjosh"
                  draggable={false}
                  className="
                    relative
                    z-10
                    w-[220px]
                    h-[220px]
                    sm:w-[280px]
                    sm:h-[280px]
                    md:w-[380px]
                    md:h-[380px]
                    lg:w-[500px]
                    lg:h-[500px]
                    rounded-full
                    object-cover
                    object-center
                    select-none
                    transition-all
                    duration-500
                    hover:scale-[1.015]
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL */}

        <div
          className="
            hidden
            lg:block
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            text-[10px]
            tracking-[12px]
            text-gray-700
            uppercase
          "
        >
          Scroll
        </div>
      </div>
    </section>
  );
}