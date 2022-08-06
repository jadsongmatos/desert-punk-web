import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { set_size, set_size_half,select_style_img } from "./slice";

import "./style.css";

export function Player() {
  const player_style_img = useSelector(select_style_img);
  const dispatch = useDispatch();

  useEffect(() => {
    const size = (window.visualViewport.height * 10) / 100;

    dispatch(set_size(size));
    dispatch(set_size_half(size / 2));
  }, []);

  return (
    <div>
      <img
        style={player_style_img}
        className="character position-fixed"
        src="/character-p.png"
      ></img>
    </div>
  );
}
