"use client";

import Typewriter from "typewriter-effect";

type TypewriterTitleProps = {}

const TypewriterTitle = (props: TypewriterTitleProps) => {
  return (
    <div>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("A 🚀 Supercharged Productivity.")
            .pauseFor(1000)
            .deleteAll()
            .typeString("An 🤖 AI-Powered Insights.")
            .pauseFor(1000)
            .start()
          ;
        }}
      />
    </div>
  );
};

export default TypewriterTitle;