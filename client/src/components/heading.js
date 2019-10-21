import React from "react";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  heading: {
    width: "90%",
    padding: "10px",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
    boxSizing: "border-box",
    textShadow: "0px 2px #000",
    color: "#cfba58"
  },
  hr: {
    boxSizing: "border-box",
    height: "2px",
    width: "100%",
    backgroundColor: "#cfba58",
    boxShadow: "0px 2px 2px #000"
  }
};

const Heading = props => {
  const { classes } = props;

  return (
    <div className={classes.heading} >
      {props.children}
      <div className={classes.hr} />
    </div>
  );
};

export default withStyles(styles)(Heading);
