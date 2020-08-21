import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utilities/apiUsage";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { Link } from "react-router-dom";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth().get("http://localhost:5000/api/colors")
    .then(res => {
      console.log(res)
      setColorList(res.data)
      setShouldUpdate(false)
    })
    .catch(err => console.dir(err))
  },[shouldUpdate])
  const update = () => {
    setShouldUpdate(true)
  }

  return (
    <>
      <Link to="/">Home</Link>
      <ColorList colors={colorList} updateColors={setColorList} update={update} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
