import React from "react";
import Github from "../assets/icon/github.svg";
import Linkedin from "../assets/icon/linkedin.svg";
import { motion } from "framer-motion";
import { heartbeat } from "../animations/animations";

function Footer() {
  return (
    <div id="contact" className="pl-4 pb-4 bg-[var(--btn-bg)]">
      <div className="footer_div">
        <motion.a
          animate={heartbeat}
          href="https://github.com/mehul6729"
          className="py-[.7rem]"
        >
          <img src={Github} alt="Github" />
        </motion.a>
        <motion.a
          animate={heartbeat}
          href="https://www.linkedin.com/in/mehul-jorwekar-093363215/"
          className="py-[.7rem]"
        >
          <img src={Linkedin} alt="Linkedin" />
        </motion.a>
      </div>
      <div className="text-center pt-4">
        <p className="text-[var(--header)]">
          Designed and built by Mehul Jorwekar with{" "}
          <span className="text-red-800">❤</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
