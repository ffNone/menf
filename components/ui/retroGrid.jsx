"use client";

import RetroGrid from "@/components/magicui/retro-grid";

export default function RetroGridDemo(props) {
    return (
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl" style={props.style}>
        
            {props.content}
          <RetroGrid />
        </div>
      );
}
