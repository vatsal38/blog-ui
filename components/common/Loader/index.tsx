import React from "react";
import ReactLoading from "react-loading";
function Loader(props: { type: any; color: string; height: any; width: any }) {
  const { type, color, height, width } = props;
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
}

export default Loader;
