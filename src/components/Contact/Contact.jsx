import { useRef } from "react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaMedium,
} from "react-icons/fa";

export default function Contact() {
  const messageRef = useRef(null);

  const sendMessage = () => {
  const subject = "Portfolio Inquiry";

  const body = encodeURIComponent(
    messageRef.current?.value || ""
  );

  window.open(
    `mailto:anjosh753@gmail.com?subject=${subject}&body=${body}`,
    "_blank"
  );
};

  return (
    <section
      id="contact"
      className="
        relative
        bg-black
        py-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
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
            Contact
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
              text-white
            "
          >
            Let's Build
            <span className="text-red-600">
              {" "}Something.
            </span>
          </h2>

          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              mt-6
              text-lg
            "
          >
            Have an idea, project, collaboration,
            or just want to say hi?
            Let's connect.
          </p>
        </div>

        {/* SOCIALS */}

        <div
          className="
            flex
            justify-center
            flex-wrap
            gap-6
            mb-16
          "
        >
          <a
            href="https://www.linkedin.com/in/anjosh007/"
            target="_blank"
            rel="noreferrer"
            className="
              text-white
              text-4xl
              hover:text-red-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/DHURANTHAM007"
            target="_blank"
            rel="noreferrer"
            className="
              text-white
              text-4xl
              hover:text-red-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://medium.com/@anjosh753/list/3f9fb9da4cc0"
            target="_blank"
            rel="noreferrer"
            className="
              text-white
              text-4xl
              hover:text-red-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaMedium />
          </a>

          <a
            href="https://www.instagram.com/anjosh_007"
            target="_blank"
            rel="noreferrer"
            className="
              text-white
              text-4xl
              hover:text-red-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:anjosh753@gmail.com"
            className="
              text-white
              text-4xl
              hover:text-red-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaEnvelope />
          </a>
        </div>

        {/* RESUME */}

        <div className="text-center mb-16">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              px-8
              py-4
              rounded-full
              bg-red-600
              text-white
              font-semibold
              hover:bg-red-500
              hover:scale-[1.03]
              transition-all
              duration-300
              shadow-[0_0_30px_rgba(255,0,0,0.25)]
            "
          >
            Download Resume
          </a>
        </div>

        {/* MESSAGE BOX */}

        <div
          className="
            max-w-3xl
            mx-auto
          "
        >
          <textarea
            ref={messageRef}
            placeholder="Leave a message..."
            className="
              w-full
              h-40
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              text-white
              resize-none
              outline-none
              focus:border-red-500
              transition-all
            "
          />

          <div className="text-center mt-6">
            <button
              onClick={sendMessage}
              className="
                px-8
                py-4
                rounded-full
                border
                border-red-500
                text-red-500
                hover:bg-red-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              Send Message
            </button>
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
            mt-24
            pt-8
            border-t
            border-white/10
            text-center
          "
        >
          <p
            className="
              text-gray-500
              text-sm
            "
          >
            © 2026{" "}
            <span className="text-white font-semibold">
              Anjosh J A
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}