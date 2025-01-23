import { useEffect } from "react";

function MyJs() {
  useEffect(() => {
    const componentImage = document.getElementById("componentimage");
    const nextButton = document.getElementById("nextbutton");
    const prevButton = document.getElementById("prevbutton");
    const circle1 = document.getElementById("circle1");
    const circle2 = document.getElementById("circle2");
    const circle3 = document.getElementById("circle3");

    const images = [
      "/images/tree1.jpg",
      "/images/tree2.jpg",
      "/images/tree3.jpg",
    ];

    const circles = [circle1, circle2, circle3];
    let imageIndex = 0;

    const updateCarousel = () => {
      componentImage.src = images[imageIndex];
      circles.forEach((circle, index) => {
        circle.style.backgroundColor =
          index === imageIndex ? "#01b401" : "gray";
      });
    };

    const nextImage = () => {
      imageIndex = (imageIndex + 1) % images.length;
      updateCarousel();
    };

    const prevImage = () => {
      imageIndex = (imageIndex - 1 + images.length) % images.length;
      updateCarousel();
    };

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    updateCarousel();

    return () => {
      nextButton.removeEventListener("click", nextImage);
      prevButton.removeEventListener("click", prevImage);
    };
  }, []);

  return (
    <div className="hero">
      <div className="left">
        <div id="carouselcontainer">
          <div id="imagecontainer">
            <img
              id="componentimage"
              alt="img1"
              src="../../public/images/tree1.jpg"
            />
          </div>
          <div id="buttoncontainer">
            <button id="prevbutton">{"<--"}</button>
            <div id="circle1"></div>
            <div id="circle2"></div>
            <div id="circle3"></div>
            <button id="nextbutton">{"-->"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJs;
