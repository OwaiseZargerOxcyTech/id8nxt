import React from "react";
import ImageGrid from "../common-image-grid";
import { data2, data3 } from "./image-data";

const DailyCreativity = () => {
  return (
    <div className="daily-creativity">
      <ImageGrid data={data2} />
      <ImageGrid data={data3} />
    </div>
  );
};

export default DailyCreativity;
