import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "max-content",
    padding: "20px 145px 20px 20px",
    boxSizing: "border-box",
    flex: "1 0 auto"
  },
  rootSm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: "max-content",
    padding: "100px 20px 20px 20px",
    flex: "1 0 auto"
  }
};

const Base = props => {
  const { root, rootSm } = props.classes;

  return (
    <div className={props.breakPoint ? rootSm : root}>{props.children}</div>
  );
};

export default withStyles(styles)(Base);
