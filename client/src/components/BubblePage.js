import React, { useState, useEffect } from "react";
import axiosWithAuth from "../api/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // Q: What is the data that I need to get form the api?
  // - - I need to call the GET

  const fetchBubbles = () => {
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBubbles();
  }, []);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        fetchBubbles={fetchBubbles}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
