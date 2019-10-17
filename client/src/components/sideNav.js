import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Email } from "@material-ui/icons";

const styles = {
  topNav: {
    position: "fixed",
    top: "0",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "5px 10px",
    backgroundColor: "#000"
  },
  sideNav: {
    position: "fixed",
    top: "0",
    right: "0",
    width: "min-content",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "10px 5px",
    backgroundColor: "#000",
    overflow: "auto"
  },
  elemSide: {
    margin: "25px 5px",
    color: "#f5f5f5",
    whiteSpace: "noWrap",
    cursor: "pointer",
    fontSize: "1rem"
  },
  elemTop: {
    padding: "5px",
    color: "#f5f5f5",
    width: "min-content",
    fontSize: "0.9rem",
    cursor: "pointer"
  },
  brand: {
    fontSize: "1.25rem",
    color: "#cfba58",
    whiteSpace: "noWrap",
    margin: "10px 2px"
  },
  brandSm: {
    fontSize: "1rem",
    color: "#cfba58",
    whiteSpace: "noWrap",
    margin: "5px 2px"
  },
  navImg: {
    width: "100px",
    height: "100px",
    backgroundImage: 'url("/assets/images/profile.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "50px"
  },
  navImgSm: {
    width: "60px",
    height: "60px",
    backgroundImage: 'url("/assets/images/profile.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "30px"
  },
  hr: {
    width: "100%",
    height: "2px",
    backgroundImage:
      "linear-gradient(to left, rgba(207, 186, 88, 0), 10%, #cfba58 50%, 90%, rgba(207, 186, 88, 0))"
  },
  navCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  navRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  icon: {
    color: "#fff",
    width: "40px",
    height: "auto",
    margin: "10px"
  },
  github: {
    width: "32px",
    height: "32px",
    margin: "10px",
    backgroundImage:
      "url(/assets/images/icons/github/GitHub-Mark-Light-32px.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  linkedin: {
    width: "32px",
    height: "32px",
    margin: "10px",
    backgroundImage: "url(/assets/images/icons/linkedin/LI-In-Bug-light.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat"
  },
  brandBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};
const Nav = props => {
  const {
    sideNav,
    topNav,
    elemTop,
    elemSide,
    brand,
    navImg,
    hr,
    icon,
    github,
    linkedin,
    brandBox,
    navImgSm,
    navCol,
    navRow,
    brandSm
  } = props.classes;
  if (props.breakPoint) {
    return (
      <div className={topNav}>
        <div className={brandBox}>
          <div className={navImgSm} />
          <div className={brandSm}>Eugene Halpin</div>
        </div>
        <div className={navCol}>
          <div className={navRow}>
            <Email className={icon} />
            <div className={github} />
            <div className={linkedin} />
          </div>
          <div className={hr} />
          <div className={navRow}>
            <div className={elemTop}>About</div>
            <div className={elemTop}>Skills</div>
            <div className={elemTop}>Apps</div>
            <div className={elemTop}>Connect</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={sideNav}>
        <div className={navImg} />
        <div className={brand}>Eugene Halpin</div>
        <div className={hr} />
        <div className={elemSide}>About</div>
        <div className={elemSide}>Skills</div>
        <div className={elemSide}>Apps</div>
        <div className={elemSide}>Connect</div>
        <div className={hr} />
        <Email className={icon} />
        <div className={github} />
        <div className={linkedin} />
      </div>
    );
  }
};

export default withStyles(styles)(Nav);
