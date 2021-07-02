const glassArea = document.querySelector(".glass-area");

let glassClicks = 0;

glassArea.addEventListener("click", function (e) {
  addCracksToGlass(e);
  glassClicks++;
  if (glassClicks === 1) {
    anime({
      targets: ".break-glass",
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      rotate: "-2",
      easing: "linear",
      duration: 100,
    });
  } else if (glassClicks === 2) {
    anime({
      targets: ".break-glass",
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      rotate: "4",
      easing: "linear",
      duration: 100,
    });
  } else if (glassClicks === 3) {
    anime({
      targets: ".break-glass",
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
      rotate: "90",
      easing: "linear",
      duration: 1000,

      update: function (anim) {
        if (Math.round(anim.progress) === 10) {
          anime({
            targets: ".break-glass",
            top: ["50%", "150%"],

            duration: 500,
            easing: "easeInQuart",
            complete: function (anim) {
              fadeElementIn(".bifta-header", true, function () {
                document.querySelector(".bifta-header").className =
                  "bifta-header-rgb";
              });
            },
          });
        }
      },
    });
  }
});

const addCracksToGlass = (e) => {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.

  const img = new Image();
  img.onload = function () {
    imageWidth = Math.round(this.width / 2);
    imageHeight = Math.round(this.height / 2);

    let newX = Math.round(x) - imageWidth;
    let newY = Math.round(y) - imageHeight;

    var crack = document.createElement("div");

    crack.id = "container";
    crack.appendChild(img);
    crack.className = "crack";

    crack.style.left = newX + "px";
    crack.style.top = newY + "px";

    glassArea.appendChild(crack);
  };
  img.src = "assets/glass-crack.png";
};

const fadeElementIn = (element, direction, callback) => {
  if (direction) {
    opacity = [0, 1];
  } else {
    opacity = [1, 0];
  }
  anime({
    targets: element,

    easing: "easeInOutQuad",
    opacity,
    duration: 2000,
    begin: function () {
      document.querySelector(element).style.visibility = "visible";
    },
    complete: callback,
  });
};

// var overlayAnimation = document.getElementById("overlay-animation");

// const container = document.getElementById("takeover-container");

// const elements = document.querySelectorAll(".expandable-item");

// const close = document.getElementById("close");

// const right = document.getElementById("right");

// const footer = document.querySelector("footer");

// elements.forEach((element) => {
//   element.addEventListener(
//     "click",
//     function (e) {
//       handleClick(e);
//     },
//     false
//   );
// });

// close.addEventListener(
//   "click",
//   function (e) {
//     shrinkOverlay();
//   },
//   false
// );

// function handleClick(event) {
//   console.log(event.target.parentElement);
//   var bgColor = window.getComputedStyle(event.target).backgroundColor;
//   const { left, top, width, height } = event.target.getBoundingClientRect();
//   const centerX = left + width / 2;
//   const centerY = top + height / 2;

//   overlayAnimation.style.left = centerX + "px";
//   overlayAnimation.style.top = centerY + "px";
//   overlayAnimation.style.backgroundColor = bgColor;

//   growOverlay(true, bgColor, event.target);
// }

// const growOverlay = (open, bgColor, target) => {
//   // document.body.style.overflow = "hidden";
//   // footer.style.display = "none";
//   if (open) {
//     anime({
//       targets: "#overlay-animation",
//       easing: "linear",
//       scale: "200",
//       duration: 500,
//       complete: function (anim) {
//         //create block

//         container.style.backgroundColor = bgColor;
//         container.style.display = "flex";
//         container.style.opacity = 1;
//         //remove overlay
//         anime({
//           targets: "#overlay-animation",
//           scale: "0",
//           duration: 0,
//           easing: "linear",
//         });
//         anime({
//           targets: ".right",
//           //left or top?
//           left: "0%",
//           easing: "linear",
//           duration: 500,
//           easing: "easeOutQuart",
//           complete: function () {
//             //load correct content

//             anime({
//               targets: ".content",
//               opacity: 1,
//             });
//           },
//         });
//       },
//     });
//   }
// };

// const shrinkOverlay = () => {
//   anime({
//     targets: ".content",
//     opacity: 0,
//     complete: function () {
//       anime({
//         targets: ".right",
//         left: "100%",
//         easing: "linear",
//         duration: 500,
//         easing: "easeOutQuart",
//         complete: function () {
//           anime({
//             targets: ".takeover-container",
//             opacity: 0,
//             complete: function () {
//               container.style.display = "none";
//               // document.body.style.overflow = "auto";
//               // footer.style.display = "";
//             },
//           });
//         },
//       });
//     },
//   });
// };
