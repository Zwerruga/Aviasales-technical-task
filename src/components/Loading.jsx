import React, { memo } from "react";
import ReactLoading from "react-loading";

export default memo(function Loading() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <ReactLoading
        type={"spinningBubbles"}
        color={"#2196f3"}
        height={"10%"}
        width={"50%"}
      />
    </div>
  );
});
