import React from "react";
import Html from "../assets/icon/html.svg";
import css from "../assets/icon/css.svg";
import js from "../assets/icon/js.svg";
import react from "../assets/icon/react.svg";
import Redux from "../assets/icon/redux.svg";
import BootStarp from "../assets/icon/bootstrap.svg";
import Sass from "../assets/icon/sass.svg";
import Tailwind from "../assets/icon/tailwind.svg";
import Git from "../assets/icon/git.svg";

function TeachStack() {
  const arry = [Html, css, js, react, Redux, BootStarp, Sass, Tailwind, Git];

  return (
    <div id="techStack" className="py-[1.5rem]">
      <div className="text-center">
        <h1 className="header">My Tech Stack</h1>
        <p className="para"> Technologies I’ve been working with recently</p>
      </div>

      <div className="flex flex-wrap  justify-center">
        {arry.map((item) => (
          <div key={item} className="bg-[#20202300] p-[2rem]">
            <a href="">
              <img className="sm:w-[4rem]" src={item} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeachStack;
