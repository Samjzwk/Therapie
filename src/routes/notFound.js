import React, { Fragment } from "react";
import { ReactComponent as Drinks } from "../assets/404.svg";

const notFound = () => {
  return (
    <Fragment>
      <Drinks />
      <h2>No drinks here !</h2>
    </Fragment>
  );
};

export default notFound;
