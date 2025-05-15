import { RetroGrid } from "@/components/magicui/retro-grid";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import React from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigation = useNavigate();

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center overflow-hidden  bg-background">
      <div className="flex flex-col items-center">
        <p className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          404
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          This page could not be found.
        </h2>
        <RainbowButton className="gap-2" onClick={() => navigation("/")}>
          <Home />
          Go To Home
        </RainbowButton>
      </div>

      <RetroGrid />
    </div>
  );
};

export default NotFoundPage;
