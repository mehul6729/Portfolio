import React, { useState, useContext } from "react";
import Sun from "../assets/icon/sun.svg";
import Moon from "../assets/icon/moon.svg";
import { AppContext } from "../UseContext/appContext";
function DarkMode() {
  const { isTheme, setTheme } = useContext(AppContext);
  function SetLightMode() {
    document.querySelector("body").setAttribute("data-them", "light");
  }

  function SetDarkMode() {
    document.querySelector("body").setAttribute("data-them", "dark");
  }

  function toggleTheme(e) {
    if (e.target.checked) {
      SetLightMode();
      setTheme(false);
    } else {
      SetDarkMode();
      setTheme(true);
    }
  }

  return (
    <div className="fixed bottom-8 right-8 md:right-4">
      <input
        onChange={toggleTheme}
        id="darkMode"
        type="checkbox"
        className="dark_mode_btn opacity-0"
      />
      <label htmlFor="darkMode">
        <div
          className="flex justify-center items-center
         py-2 w-10 h-10  bg-[var(--btn-bg)] text-[var(--text)] text-[0.7rem] rounded-[50%]"
        >
          {isTheme ? (
            <img className="w-6" src={Sun} alt="" />
          ) : (
            <img className="w-6" src={Moon} alt="" />
          )}
        </div>
      </label>
    </div>
  );
}

export default DarkMode;
