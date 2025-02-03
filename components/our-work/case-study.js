import React from "react";
import ImageGrid from "../common-image-grid";
import { data1, data2, data3 } from "./image-data";
import TwoTwoGrid from "./two-image-grid";

const CaseStudy = () => {
  return (
    <div className="case-study">
      <ImageGrid data={data1} />
      <TwoTwoGrid data={data2} />
      <ImageGrid data={data3} />
    </div>
  );
};

export default CaseStudy;
