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
