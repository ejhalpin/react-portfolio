import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import API from "../utils/API";
import classnames from "classnames";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    padding: "10px",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "#f0efd1",
    boxSizing: "border-box"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%"
  },
  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    fontSize: "1.25rem"
  },
  label: {
    color: "#cfba58",
    textShadow: "1px 1px #000",
    margin: "5px"
  },
  icons: {
    fontSize: "2.5rem"
  }
};

const handleNav = loc => {
  window.open(loc, "_blank");
};

const getFile = format => {
    var type = format === "word" ? ".docx" : ".pdf";
    var fileDownload = require("js-file-download");
  API.getFile(format).then(res => {
      
    fileDownload(res.data, "E-Halpin-Resume" + type);
  });
};

const Connect = props => {
  const { root, row, col, label, icons } = props.classes;
  return (
    <div className={root}>
      <div className={row}>
        <div className={col}>
          <div className={label}>Communities</div>
          <div className={classnames(row, icons)}>
            <FontAwesomeIcon
              icon={faLinkedin}
              onClick={() => {
                handleNav("https://linkedin.com/in/eugene-halpin/");
              }}
            />
            <FontAwesomeIcon
              icon={faGithubSquare}
              onClick={() => {
                handleNav("https://github.com/ejhalpin/");
              }}
            />
          </div>
        </div>
        <div className={col}>
          <div className={label}>Resume</div>
          <div className={classnames(row, icons)}>
            <FontAwesomeIcon
              icon={faFileWord}
              onClick={() => {
                getFile("word");
              }}
            />
            <FontAwesomeIcon
              icon={faFilePdf}
              onClick={() => {
                getFile("pdf");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Connect);
