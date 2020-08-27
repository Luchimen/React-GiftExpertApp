import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../Hooks/useFetchGifs";

const GifGrid = ({ category }) => {


  const { data,loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loadings</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
