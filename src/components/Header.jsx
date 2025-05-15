import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
    else setTheme(isDark ? "light" : "dark");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await sessionStorage.clear();
    window.location.href = "/";
    return;
  };

  return (
    <header className="w-full py-2 px-4 flex justify-between items-center border-b">
      <SidebarTrigger />

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={handleLogout}
          className="text-red-500"
        >
          <LogOut />
          <Label>LOGOUT</Label>
        </Button>

        <button
          onClick={toggleTheme}
          className={`flex items-center cursor-pointer transition-transform duration-500 ${
            isDark ? "rotate-180" : "rotate-0"
          }`}
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
