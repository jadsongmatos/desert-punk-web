import { useEffect, useState } from "react";

import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { Player } from "./features/player/Player";
import Camera from "./components/Camera";
import Mapa from "./components/Mapa";


function App() {
  return (
    <div>
      <Camera />
      <header>
        <p>header</p>
      </header>
      <div>
        <Mapa />

        {<Player></Player>}
      </div>
    </div>
  );
}

export default App;
