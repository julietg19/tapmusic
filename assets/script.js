window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");

  const pads = document.querySelectorAll(".pads div");

  const visual = document.querySelector(".visual");

  const colors = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#a0c4ff",
  ];

  // sound

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;

      sounds[index].play();

      createBubbles(index);
    });
  });

  //create visual function

  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
