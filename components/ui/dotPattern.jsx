"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

export function DotPatternDemo(props) {
  return (
    <div 
    className={cn(
      "relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl",
      props.className
    )}
    id={props.id}
    style={props.style}
    >
       {props.children}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
