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
    <div className="map" onClick={click_map} >
      <img
        draggable="false"
        className="map-b position-absolute top-50 start-50 translate-middle"
        src="/map-t.jpg"
      ></img>
      <div className="position-absolute top-50 start-50 translate-middle wrapper">
        <div className="floor">
          <div className="row">
            <div data-cords="[0,0]" className="tile"></div>
            <div data-cords="[0,1]" className="tile"></div>
            <div data-cords="[0,2]" className="tile"></div>
            <div data-cords="[0,3]" className="tile"></div>
            <div data-cords="[0,4]" className="tile"></div>
            <div data-cords="[0,5]" className="tile"></div>
            <div data-cords="[0,6]" className="tile"></div>
            <div data-cords="[0,7]" className="tile"></div>
            <div data-cords="[0,8]" className="tile"></div>
            <div data-cords="[0,9]" className="tile"></div>
            <div data-cords="[0,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[1,0]" className="tile"></div>
            <div data-cords="[1,1]" className="tile"></div>
            <div data-cords="[1,2]" className="tile"></div>
            <div data-cords="[1,3]" className="tile"></div>
            <div data-cords="[1,4]" className="tile"></div>
            <div data-cords="[1,5]" className="tile"></div>
            <div data-cords="[1,6]" className="tile"></div>
            <div data-cords="[1,7]" className="tile"></div>
            <div data-cords="[1,8]" className="tile"></div>
            <div data-cords="[1,9]" className="tile"></div>
            <div data-cords="[1,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[2,0]" className="tile"></div>
            <div data-cords="[2,1]" className="tile"></div>
            <div data-cords="[2,2]" className="tile"></div>
            <div data-cords="[2,3]" className="tile"></div>
            <div data-cords="[2,4]" className="tile"></div>
            <div data-cords="[2,5]" className="tile"></div>
            <div data-cords="[2,6]" className="tile"></div>
            <div data-cords="[2,7]" className="tile"></div>
            <div data-cords="[2,8]" className="tile"></div>
            <div data-cords="[2,9]" className="tile"></div>
            <div data-cords="[2,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[3,0]" className="tile"></div>
            <div data-cords="[3,1]" className="tile"></div>
            <div data-cords="[3,2]" className="tile"></div>
            <div data-cords="[3,3]" className="tile"></div>
            <div data-cords="[3,4]" className="tile"></div>
            <div data-cords="[3,5]" className="tile"></div>
            <div data-cords="[3,6]" className="tile"></div>
            <div data-cords="[3,7]" className="tile"></div>
            <div data-cords="[3,8]" className="tile"></div>
            <div data-cords="[3,9]" className="tile"></div>
            <div data-cords="[3,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[4,0]" className="tile"></div>
            <div data-cords="[4,1]" className="tile"></div>
            <div data-cords="[4,2]" className="tile"></div>
            <div data-cords="[4,3]" className="tile"></div>
            <div data-cords="[4,4]" className="tile"></div>
            <div data-cords="[4,5]" className="tile"></div>
            <div data-cords="[4,6]" className="tile"></div>
            <div data-cords="[4,7]" className="tile"></div>
            <div data-cords="[4,8]" className="tile"></div>
            <div data-cords="[4,9]" className="tile"></div>
            <div data-cords="[4,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[5,0]" className="tile"></div>
            <div data-cords="[5,1]" className="tile"></div>
            <div data-cords="[5,2]" className="tile"></div>
            <div data-cords="[5,3]" className="tile"></div>
            <div data-cords="[5,4]" className="tile"></div>
            <div data-cords="[5,5]" className="tile"></div>
            <div data-cords="[5,6]" className="tile"></div>
            <div data-cords="[5,7]" className="tile"></div>
            <div data-cords="[5,8]" className="tile"></div>
            <div data-cords="[5,9]" className="tile"></div>
            <div data-cords="[5,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[6,0]" className="tile"></div>
            <div data-cords="[6,1]" className="tile"></div>
            <div data-cords="[6,2]" className="tile"></div>
            <div data-cords="[6,3]" className="tile"></div>
            <div data-cords="[6,4]" className="tile"></div>
            <div data-cords="[6,5]" className="tile"></div>
            <div data-cords="[6,6]" className="tile"></div>
            <div data-cords="[6,7]" className="tile"></div>
            <div data-cords="[6,8]" className="tile"></div>
            <div data-cords="[6,9]" className="tile"></div>
            <div data-cords="[6,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[7,0]" className="tile"></div>
            <div data-cords="[7,1]" className="tile"></div>
            <div data-cords="[7,2]" className="tile"></div>
            <div data-cords="[7,3]" className="tile"></div>
            <div data-cords="[7,4]" className="tile"></div>
            <div data-cords="[7,5]" className="tile"></div>
            <div data-cords="[7,6]" className="tile"></div>
            <div data-cords="[7,7]" className="tile"></div>
            <div data-cords="[7,8]" className="tile"></div>
            <div data-cords="[7,9]" className="tile"></div>
            <div data-cords="[7,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[8,0]" className="tile"></div>
            <div data-cords="[8,1]" className="tile"></div>
            <div data-cords="[8,2]" className="tile"></div>
            <div data-cords="[8,3]" className="tile"></div>
            <div data-cords="[8,4]" className="tile"></div>
            <div data-cords="[8,5]" className="tile"></div>
            <div data-cords="[8,6]" className="tile"></div>
            <div data-cords="[8,7]" className="tile"></div>
            <div data-cords="[8,8]" className="tile"></div>
            <div data-cords="[8,9]" className="tile"></div>
            <div data-cords="[8,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[9,0]" className="tile"></div>
            <div data-cords="[9,1]" className="tile"></div>
            <div data-cords="[9,2]" className="tile"></div>
            <div data-cords="[9,3]" className="tile"></div>
            <div data-cords="[9,4]" className="tile"></div>
            <div data-cords="[9,5]" className="tile"></div>
            <div data-cords="[9,6]" className="tile"></div>
            <div data-cords="[9,7]" className="tile"></div>
            <div data-cords="[9,8]" className="tile"></div>
            <div data-cords="[9,9]" className="tile"></div>
            <div data-cords="[9,10]" className="tile"></div>
          </div>
          <div className="row">
            <div data-cords="[10,0]" className="tile"></div>
            <div data-cords="[10,1]" className="tile"></div>
            <div data-cords="[10,2]" className="tile"></div>
            <div data-cords="[10,3]" className="tile"></div>
            <div data-cords="[10,4]" className="tile"></div>
            <div data-cords="[10,5]" className="tile"></div>
            <div data-cords="[10,6]" className="tile"></div>
            <div data-cords="[10,7]" className="tile"></div>
            <div data-cords="[10,8]" className="tile"></div>
            <div data-cords="[10,9]" className="tile"></div>
            <div data-cords="[10,10]" className="tile"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mapa;
