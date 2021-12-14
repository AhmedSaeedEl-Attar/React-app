import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PortooDiv,
  PortooDivP,
  PortooSection,
  Portooh2,
  Images,
  Imag,
  HoldImgs,
  Overlay,
  OverlayP,
} from "./Portofoliocss";

function Portofolio() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get("./JS/data.json").then((res) => setState(res.data.portfolio));
  }, []);

  const ImagesView = state.map((imgg) => {
    return (
      <HoldImgs key={imgg.id}>
        <Imag src={imgg.image} alt={imgg.id}></Imag>
        <Overlay overlaycolor={imgg.id}>
          <OverlayP>Show Image</OverlayP>
        </Overlay>
      </HoldImgs>
    );
  });
  return (
    <PortooSection id="proto">
      <div className="container">
        <Portooh2>My Portofolio</Portooh2>
        <PortooDiv>
          <PortooDivP>All</PortooDivP>
          <PortooDivP>Photoshop</PortooDivP>
          <PortooDivP>Html</PortooDivP>
          <PortooDivP>Css</PortooDivP>
          <PortooDivP>Mobile</PortooDivP>
        </PortooDiv>
      </div>
      <Images className="images">{ImagesView}</Images>
    </PortooSection>
  );
}

export default Portofolio;
