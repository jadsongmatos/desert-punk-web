import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let size_c = (window.visualViewport.height * 10) / 100;
  const [x_c, set_x_c] = useState(100);
  const [y_c, set_y_c] = useState(100);

  const [styles_c, set_styles_c] = useState({
    transform: `translateX(${x_c}px)`,
  });

  function click_map(e) {
    console.log(e.clientY,size_c);
    set_x_c(e.clientX);
    set_y_c(e.clientY);
    set_styles_c({
      transform: `translate(${e.clientX - (size_c / 2)}px,${e.clientY - size_c}px)`,
    });
  }

  useEffect(() => {
    size_c = (window.visualViewport.height * 10) / 100;
  }, []);

  return (
    <div>
      <header>
        <p>header</p>
      </header>
      <div>
        <img
          onClick={click_map}
          draggable="false"
          className="map position-fixed top-50 start-50 translate-middle"
          src="/map-t.jpg"
        ></img>
        <img
          style={styles_c}
          className="character position-fixed"
          src="/character-p.png"
        ></img>
      </div>
    </div>
  );
}

export default App;
