import { useEffect, useState } from "react";

function Camera() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log(
      "camera",
      window.visualViewport.width / 5,
      window.visualViewport.height / 5
    );
    window.scroll(
      window.visualViewport.width / 5,
      window.visualViewport.height / 5
    );

    const setFromEvent = (e) => {
      //console.log(e)
      return setMousePosition({ x: e.x, y: e.y });
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove");
    };
  }, []);

  function move_can(time) {
    const size_marginX = (window.visualViewport.width * 10) / 100;
    const size_marginY = (window.visualViewport.height * 10) / 100;

    if (mousePosition.x < size_marginX) {
      window.scroll(window.scrollX - 1, window.scrollY);
      setTimeout(move_can(time + 1000), time);
    } else if (mousePosition.x > window.visualViewport.width - size_marginX) {
      window.scroll(window.scrollX + 1, window.scrollY);
      setTimeout(move_can(time + 1000), time);
    }

    if (mousePosition.y < size_marginY) {
      window.scroll(window.scrollX, window.scrollY - 1);
      setTimeout(move_can(time + 1000), time);
    } else if (mousePosition.y > window.visualViewport.height - size_marginY) {
      window.scroll(window.scrollX, window.scrollY + 1);
      setTimeout(move_can(time + 1000), time);
    }
  }

  useEffect(() => {
    move_can();
  }, [mousePosition]);
}

export default Camera;
