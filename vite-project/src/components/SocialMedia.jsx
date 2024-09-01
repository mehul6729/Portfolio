import React from "react";
import Github from "../assets/icon/github.svg";
import Linkedin from "../assets/icon/linkedin.svg";
function SocialMedia() {
  return (
    <div className="flex flex-col fixed top-[15%] left-[2rem]">
      <a href="https://github.com/mehul6729" className="py-[.7rem]">
        <img src={Github} alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/mehul-jorwekar-093363215/"
        className="py-[.7rem]"
      >
        <img src={Linkedin} alt="" />
      </a>
    </div>
  );
}

export default SocialMedia;
