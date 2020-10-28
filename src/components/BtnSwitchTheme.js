import React from "react";

function BtnSwitchTheme() {
  const root = document.getElementById("root");

  const handleDarkTheme = () => {
    root.className !== "dark" ? enableDarkMode() : disabledDarkMode();
  };

  const enableDarkMode = () => {
    root.classList.add("dark");

    localStorage.setItem("theme", "dark");
  };

  const disabledDarkMode = () => {
    root.classList.remove("dark");
    localStorage.setItem("theme", "default");
  };
  return (
    <div className="Switch__theme" onClick={handleDarkTheme}>
      <span className="Switch__btn"></span>
    </div>
  );
}

export default BtnSwitchTheme;
