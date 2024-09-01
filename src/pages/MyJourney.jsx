import React, { useEffect, useState } from "react";
import { journeyDataTop } from "../data/journeyData.js";
import { journeyDataBottom } from "../data/journeyData.js";

function MyJourney() {
  const [fliterData, setFilterData] = useState("top");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (fliterData === "bottom") {
      setData(journeyDataBottom);
    } else {
      setData(journeyDataTop);
    }
  }, [fliterData]);
  return (
    <div id="myJourney" className="py-[1.5rem]">
      <div className="text-center pb-[3rem]">
        <h1 className="header">My Journey</h1>
      </div>

      <div className="flex justify-end">
        <div className="fliter_box">
          <span
            className={fliterData === "top" ? "bg" : ""}
            onClick={() => setFilterData("top")}
          >
            Current
          </span>
          <span
            className={fliterData === "bottom" ? "bg ml-[1rem]" : "ml-[1rem]"}
            onClick={() => setFilterData("bottom")}
          >
            Start Point{" "}
          </span>
        </div>
      </div>

      {data.map((item) => (
        <div key={item.heading} className="flex flex-col py-[1.5rem]">
          <div className="flex items-center">
            <div>
              <div className="dot_div">
                <div className="overlay_dot"></div>
              </div>
            </div>
            <div>
              <h4 className="text-[var(--header)]"> {item.heading}</h4>
            </div>
          </div>
          <div className="flex mt-[1rem]">
            <div>
              <div className="line_div">
                <div className="line"></div>
              </div>
            </div>
            <div>
              <p className="font-light text-[var(--text)]">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyJourney;
