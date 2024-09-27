 
"use client";  

import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function GradualSpacingDemo(props) {
  return (
    <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text={props.text}
    />
  );
}
