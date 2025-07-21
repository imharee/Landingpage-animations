import * as React from "react";
import { twMerge } from "tailwind-merge";

interface PlusProps {
  rotate?: boolean;
  className?: string;
}

const Plus = ({ rotate = false, className = "" }: PlusProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={twMerge(
      "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300 cursor-pointer",
      rotate && "rotate-45",
      className
    )}
    viewBox="0 0 24 24"
  >
    <path d="M12 5v14M5 12h14"></path>
  </svg>
);

export default Plus;
