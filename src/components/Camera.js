import { useEffect, useState } from "react";

function Camera() {
  const [update, set_update] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const move_can = () => {
    const size_marginX = (window.visualViewport.width * 10) / 100;
    const size_marginY = (window.visualViewport.height * 10) / 100;

    if (mousePosition.x < size_marginX) {
      window.scroll(window.scrollX - 1, window.scrollY);
    } else if (mousePosition.x > window.visualViewport.width - size_marginX) {
      window.scroll(window.scrollX + 1, window.scrollY);
    }

    if (mousePosition.y < size_marginY) {
      window.scroll(window.scrollX, window.scrollY - 1);
    } else if (mousePosition.y > window.visualViewport.height - size_marginY) {
      window.scroll(window.scrollX, window.scrollY + 1);
    }
  };

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
      setMousePosition({ x: e.x, y: e.y });
    };
    
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove");
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      set_update(update + 1 % 3);
      move_can();
    }, 16);
  }, [update]);
}

export default Camera;
