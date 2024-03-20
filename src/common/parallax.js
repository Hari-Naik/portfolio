import Parallax from "parallax-js";

export const parallaxAnimation = () => {
  var scene = document.getElementById("scene");
  if (scene !== null) {
    var parallaxInstance = new Parallax(scene, {
      limitY: 15,
    });
  }
};
