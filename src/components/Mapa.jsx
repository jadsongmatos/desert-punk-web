import "./Mapa.css";
import { useSelector, useDispatch } from "react-redux";

import {
  set_x,
  set_y,
  set_style_img,
  select_all,
} from "../features/player/slice";

function Mapa() {
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
    <div className="map position-absolute" onClick={click_map}>
      <img alt="texture" src="/map-t.jpg" className="background-image position-absolute" />
      <div class="grid-container">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
    </div>
  );
}

export default Mapa;
