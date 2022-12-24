import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<boolean>(false); // default light
  const colorTheme = theme ? "dark" : "light";

  const onClick = () => {
    setTheme((previos) => !previos);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme ? "light" : "dark");
    root.classList.add(colorTheme);

    localStorage.setItem("theme", colorTheme);
    console.log(colorTheme === "dark" ? "light" : "dark", colorTheme);
  }, [colorTheme, setTheme, theme]);

  return (
    <button onClick={onClick} className="flex flex-row truncate">
      <span className="mr-1">⬤</span> {theme ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeSwitch;
