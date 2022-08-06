import { useEffect, useState } from "react";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";

//import { Counter } from "./features/counter/Counter";
import { Player } from "./features/player/Player";

import {
  set_x,
  set_y,
  set_style_img,
  select_all,
} from "./features/player/slice";

function App() {
  const player_state = useSelector(select_all);
  const dispatch = useDispatch();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scroll_sizeX, set_scroll_sizeX] = useState(0);
  const [scroll_sizeY, set_scroll_sizeY] = useState(0);

  useEffect(() => {

    set_scroll_sizeX(Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    ));

    set_scroll_sizeY(Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    ));
    
    const setFromEvent = (e) => {
      //console.log(e)
      return setMousePosition({ x: e.x, y: e.y });
    };
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove");
    };
  }, []);

  useEffect(() => {
    const size_marginX = (window.visualViewport.width * 10) / 100;
    const size_marginY = (window.visualViewport.height * 10) / 100;

    if (mousePosition.x < size_marginX) {
      window.scroll(0,window.scrollY)
    } else if (mousePosition.x > window.visualViewport.width - size_marginX) {
      window.scroll(scroll_sizeX,window.scrollY)
    }

    if (mousePosition.y < size_marginY) {
      window.scroll(window.scrollX,0)
    } else if (mousePosition.y > window.visualViewport.height - size_marginY) {
      window.scroll(window.scrollX,scroll_sizeY)
    }

  }, [mousePosition]);

  function click_map(e) {
    console.log("click_map", player_state);

    const x =
      e.clientX - player_state.size_half + window.visualViewport.pageLeft;
    const y = e.clientY - player_state.size + window.visualViewport.pageTop;

    console.log(x, y);

    dispatch(set_x(x));
    dispatch(set_y(y));

    dispatch(
      set_style_img({
        transform: `translate(${x}px,${y}px)`,
      })
    );
  }

  return (
    <div>
      <header>
        <p>header</p>
      </header>
      <div>
        <img
          onClick={click_map}
          draggable="false"
          className="map position-absolute top-50 start-50 translate-middle"
          src="/map-t.jpg"
        ></img>
        <Player></Player>
      </div>
    </div>
  );
}

export default App;
