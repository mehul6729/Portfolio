import React from "react";
import Github from "../assets/icon/github.svg";
import Linkedin from "../assets/icon/linkedin.svg";
function Footer() {
  return (
    <div id="contact" className=" pl-4 pb-4 bg-[var(--btn-bg)]">
      <div className="footer_div">
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
      <div className=" text-center pt-4">
        <p className="text-[var(--header)]">
          Designed and built by Mehul Jorwekar with{" "}
          <span className="text-red-800">❤</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
