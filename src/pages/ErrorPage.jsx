import React from "react";
import { Particles } from "@/components/magicui/particles";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigation = useNavigate();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <div className="flex flex-col items-center justify-center gap-6 ">
        <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-6xl font-semibold leading-none ">
          Some Thing wents Worng !
        </span>

        <div className="my-1.5">
          <RainbowButton className="gap-2" onClick={() => navigation("/")}>
            <Home />
            Go To Home
          </RainbowButton>
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
    </div>
  );
};

export default ErrorPage;
