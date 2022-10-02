import React from "react";

function Header(props) {
  return (
    <div className="bg-white dark:bg-darkBlueDark dark:text-white shadow-md h-20 flex items-center justify-between">
      <div className="container flex justify-between">
        <h1 className="font-extrabold text-xl md:text-2xl">Where in the world?</h1>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={props.handleDarkMode}
        >
          <i className="fas fa-moon"></i>
          <span>{props.mode === "light" ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
