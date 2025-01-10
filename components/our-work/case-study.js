import React from "react";
import ImageGrid from "../common-image-grid";
import { data1, data2, data3 } from "./image-data";

const CaseStudy = () => {
  return (
    <div className="case-study">
      <ImageGrid data={data1} />
      <ImageGrid data={data2} />
      <ImageGrid data={data3} />
    </div>
  );
};

export default CaseStudy;
