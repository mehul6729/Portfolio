import React from "react";
import Navbar from "../components/Navbar";
import SmartBoy from "../assets/img/header-img.jpg";
import TeachStack from "./TeachStack";
import MyJourney from "./MyJourney";

function Home() {
  return (
    <>
      <div>
        <div
          id="home"
          className="flex flex-wrap justify-between items-center mt-[4rem] min-h-[80vh]  md:flex-col md:justify-center lg:justify-center lg:items-center"
        >
          <div>
            <p className="text-[var(--header)] text-[2.5rem] font-bold md:pb-8 md:text-[2rem]">
              Developing <span className="gradient-text ">seamless</span>
              <br />
              website interface using{" "}
              <span className="gradient-text ">~ REACT</span>
            </p>
          </div>
          <div>
            <img src={SmartBoy} alt="img" className="profileImg" />
          </div>
        </div>
      </div>
      <TeachStack />
      <MyJourney />
    </>
  );
}

export default Home;
