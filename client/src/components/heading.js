import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  heading: {
    width: "90%",
    padding: "10px",
    textAlign: "left",
    fontSize: "1.25rem",
    fontWeight: "700",
    boxSizing: "border-box"
  },
  hr: {
    width: "100%",
    height: "2px",
    margin: "5px 0",
    backgroundImage:
      "linear-gradient(to left, rgba(0, 0, 0, 0), 10%, #1c1c1c 50%, 90%, rgba(0, 0, 0, 0));"
  }
};

const Heading = props => {
  const { heading, hr } = props.classes;

  return (
    <Fragment>
      <div className={heading} id={props.id}>
        {props.children}
      </div>
      <div className={hr} />
    </Fragment>
  );
};

export default withStyles(styles)(Heading);
