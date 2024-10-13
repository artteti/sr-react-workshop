import { MouseEventHandler, useState } from "react";
import { Theme, getMode, useThemeContext } from "./ThemeContext";
import { Button } from "../../ui";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const ThemeSwitcher = () => {
  //const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [theme, setTheme] = useState<Theme | null>(getMode());
  const context = useThemeContext();
  const handleClick: MouseEventHandler = () => {
    context.toggle();
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };
  const icon =
    theme === Theme.DARK ? (
      <SunIcon
        onClick={handleClick}
        className="h-5 w-5 text-blue-300 cursor-pointer"
      />
    ) : (
      <MoonIcon
        onClick={handleClick}
        className="h-4 w-4 text-blue-900 cursor-pointer"
      />
    );
  return (
    <div>
      <div className="flex justify-center mb-6">
        {/* <Button label="Switch Theme" /> */}
        <span className="flex ml-2 items-center">{icon}</span>
      </div>
    </div>
  );
};
