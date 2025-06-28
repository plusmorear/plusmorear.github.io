import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "3D Game Development",
          "3D/2D Motion Design",
          "AR/VR Development",
          "Music",
          "Sound Design",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0.3,
      }}
    />
  );
}

export default Type;
