import React, { useEffect, useState } from "react";
import LoginForm from "@/components/LoginForm";

import bavan from "@/assets/bavan.png";
import lioncapital from "@/assets/lioncapital.png";

const LoginPage = () => {
  // =========================================================
  // ROTATING TEXT
  // =========================================================

  const words = [
    "Transparency",
    "Accountability",
    "Citizen-Centric",
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentText]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#d4cfc4]">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <img
        src={bavan}
        alt="Rashtrapati Bhavan"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        style={{
          objectPosition: "center center",
        }}
      />

      {/* =========================================================
          OVERLAY WITH WARM TONE
          Brings out the heritage aesthetic
      ========================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[rgba(168,155,135,0.15)]
          via-[rgba(160,145,120,0.1)]
          to-[rgba(168,155,135,0.2)]
        "
      />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header
        className="
          absolute
          left-0
          right-0
          top-0
          z-30
          px-8
          py-5
          md:px-12
        "
      >

        <div className="flex items-center gap-3">

          {/* GOVERNMENT LOGO */}

          <img
            src={lioncapital}
            alt="Government of India"
            className="
              h-12
              w-auto
              object-contain
              md:h-16
            "
          />

          {/* GOVERNMENT TEXT */}

          <div className="leading-tight">

            <p
              className="
                text-sm
                font-bold
                text-[#2d2416]
                md:text-base
              "
            >
              भारत सरकार
            </p>

            <p
              className="
                text-[9px]
                font-medium
                tracking-wide
                text-[#4a3f38]
                md:text-xs
              "
            >
              GOVERNMENT OF INDIA
            </p>

            <p
              className="
                mt-0.5
                text-[8px]
                text-[#6b5f56]
              "
            >
              सत्यमेव जयते
            </p>

          </div>

        </div>

      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          px-6
          pt-24
          pb-20
          md:px-12
          lg:px-16
        "
      >

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[1fr_470px]
            lg:gap-14
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <section
            className="
              max-w-[650px]
              lg:-translate-y-2
            "
          >

            {/* DIGITAL GOVERNANCE PLATFORM */}

            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#8b6f4e]
                md:text-sm
              "
            >
              DIGITAL GOVERNANCE PLATFORM
            </p>

            {/* BUILDING A */}

            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                text-[#2d2416]
                md:text-5xl
                lg:text-[52px]
              "
            >
              Building a
            </h1>

            {/* =================================================
                ANIMATED WORD
            ================================================= */}

            <h2
              className="
                mt-1
                min-h-[65px]
                bg-gradient-to-r
                from-[#a89468]
                via-[#b8a076]
                to-[#9d8556]
                bg-clip-text
                text-4xl
                font-bold
                leading-tight
                text-transparent
                md:text-5xl
                lg:text-[52px]
              "
            >
              {words[currentText]}
            </h2>

            {/* GOVERNMENT */}

            <h3
              className="
                mt-1
                text-3xl
                font-bold
                text-[#2d2416]
                md:text-4xl
              "
            >
              Government
            </h3>

            {/* =================================================
                INDIAN TRICOLOR
            ================================================= */}

            <div className="mt-5 flex h-1">

              <span
                className="
                  h-1
                  w-14
                  rounded-l-full
                  bg-[#FF9933]
                "
              />

              <span
                className="
                  h-1
                  w-14
                  bg-white
                  shadow-sm
                "
              />

              <span
                className="
                  h-1
                  w-14
                  rounded-r-full
                  bg-[#138808]
                "
              />

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-5
                max-w-md
                text-sm
                font-medium
                leading-relaxed
                text-[#3d3428]
                md:text-base
              "
            >
              Digital India. Transparent Governance.
              <br />
              Empowering Citizens.
            </p>

            {/* =================================================
                FEATURE CARDS
            ================================================= */}

            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-3
                md:grid-cols-4
              "
            >

              {/* =================================================
                  SECURE
              ================================================= */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/60
                  bg-white/50
                  px-3
                  py-4
                  text-center
                  shadow-[0_8px_25px_rgba(45,36,22,0.12)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/70
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#e8dfd2]
                  "
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 text-[#2d2416]"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />

                  </svg>

                </div>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-semibold
                    text-[#2d2416]
                  "
                >
                  Secure
                </p>

              </div>

              {/* =================================================
                  TRANSPARENT
              ================================================= */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/60
                  bg-white/50
                  px-3
                  py-4
                  text-center
                  shadow-[0_8px_25px_rgba(45,36,22,0.12)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/70
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#e8dfd2]
                  "
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 text-[#2d2416]"
                  >

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 3h8l4 4v14H6V3z"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3v5h4"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13h6"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17h6"
                    />

                  </svg>

                </div>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-semibold
                    text-[#2d2416]
                  "
                >
                  Transparent
                </p>

              </div>

              {/* =================================================
                  CITIZEN FIRST
              ================================================= */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/60
                  bg-white/50
                  px-3
                  py-4
                  text-center
                  shadow-[0_8px_25px_rgba(45,36,22,0.12)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/70
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#e8dfd2]
                  "
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 text-[#2d2416]"
                  >

                    <circle
                      cx="9"
                      cy="8"
                      r="3"
                    />

                    <circle
                      cx="17"
                      cy="9"
                      r="2.5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.5 14.5c.8-.4 1.6-.6 2.5-.6 2.2 0 4 1.8 4 4"
                    />

                  </svg>

                </div>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-semibold
                    text-[#2d2416]
                  "
                >
                  Citizen First
                </p>

              </div>

              {/* =================================================
                  24x7 ACCESS
              ================================================= */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/60
                  bg-white/50
                  px-3
                  py-4
                  text-center
                  shadow-[0_8px_25px_rgba(45,36,22,0.12)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/70
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#e8dfd2]
                  "
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5 text-[#2d2416]"
                  >

                    <circle
                      cx="12"
                      cy="12"
                      r="8.5"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7v5l3 2"
                    />

                  </svg>

                </div>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-semibold
                    text-[#2d2416]
                  "
                >
                  24×7 Access
                </p>

              </div>

            </div>

          </section>

          {/* =====================================================
              LOGIN FORM
          ===================================================== */}

          <section
            className="
              flex
              justify-center
              lg:justify-end
              lg:-translate-y-5
            "
          >
            <LoginForm />
          </section>

        </div>

      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          border-t
          border-white/40
          bg-white/35
          px-5
          py-3
          backdrop-blur-md
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            items-center
            justify-between
            gap-2
            text-[10px]
            text-[#4a3f38]
            md:flex-row
          "
        >

          {/* COPYRIGHT */}

          <p>
            © 2025 AGovern
          </p>

          {/* LINKS */}

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-[#8b6f4e]"
            >
              About
            </a>

            <a
              href="#"
              className="transition hover:text-[#8b6f4e]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-[#8b6f4e]"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-[#8b6f4e]"
            >
              Help
            </a>

          </div>

          {/* GOVERNMENT */}

          <p>
            🛡️ Government of India Initiative
          </p>

        </div>

      </footer>

    </div>
  );
};

export default LoginPage;
