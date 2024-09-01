import React, { useContext } from "react";
import MenuLight from "../assets/icon/menu_light.svg";
import MenuDark from "../assets/icon/menu_dark.svg";
import { AppContext } from "../UseContext/appContext";
import CancelLight from "../assets/icon/cancel_light.svg";
import CancelDark from "../assets/icon/cancel_dark.svg";

function Navbar() {
  const { isTheme, isMenu, setMenu } = useContext(AppContext);
  return (
    <nav>
      {/* DESKTOP */}
      <div className="navbar ">
        <div className="logo text-[var(--text)]">
          <a
            className="download_cv"
            href="../../public/React_Cv_Mehul_jorwekar.pdf"
            download="Reat_Cv_Mehul_jorwekar.pdf"
          >
            Download CV
          </a>
        </div>
        <div className="flex flex-wrap justify-around text-[1.2rem]">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#techStack">Tech Stack</a>
          </li>
          <li>
            <a href="#myJourney">My Journey</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>
          </li>

          <li className="cursor-not-allowed text-[var(--disable-btn)]">
            Blogs
          </li>
          <li className="cursor-not-allowed text-[var(--disable-btn)]">
            Tutorial
          </li>
        </div>
      </div>

      {/* PHONE NAVBAR */}
      <div className="phone_navbar">
        <div
          className=" fixed top-4 right-4
        "
        >
          {isTheme ? (
            <img onClick={() => setMenu(!isMenu)} src={MenuLight} alt="" />
          ) : (
            <img onClick={() => setMenu(!isMenu)} src={MenuDark} alt="" />
          )}
        </div>
        {isMenu && (
          <div className=" fixed top-0 right-0 bg-[var(--bg-color)] w-[70%] min-h-[100vh] px-4 py-8">
            <div
              className="logo flex
             text-[var(--text)] pb-[3rem] justify-between items-center
             "
            >
              <a
                className="download_cv text-[1.5rem] "
                href="../../public/React_Cv_Mehul_jorwekar.pdf"
                download="Reat_Cv_Mehul_jorwekar.pdf"
              >
                Download CV
              </a>
              {isTheme ? (
                <img
                  onClick={() => setMenu(false)}
                  className="w-[1.5rem]"
                  src={CancelLight}
                  alt=""
                />
              ) : (
                <img
                  onClick={() => setMenu(false)}
                  className="w-[1.5rem]"
                  src={CancelDark}
                  alt=""
                />
              )}
            </div>
            <div className="flex flex-col justify-around items-start text-[1.5rem]">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#techStack">Tech Stack</a>
              </li>
              <li>
                <a href="#myJourney">My Journey</a>
              </li>
              <li>
                {" "}
                <a href="#contact">Contact</a>
              </li>

              <li className="cursor-not-allowed text-[var(--disable-btn)]">
                Blogs
              </li>
              <li className="cursor-not-allowed text-[var(--disable-btn)]">
                Tutorial
              </li>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
