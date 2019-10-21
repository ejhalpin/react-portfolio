import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Email } from "@material-ui/icons";

const styles = {
  topNav: {
    position: "fixed",
    zIndex: 1000,
    top: "0",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "5px 10px",
    backgroundColor: "#bf3211"
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
    backgroundColor: "#bf3211",
    overflow: "auto"
  },
  elemSide: {
    margin: "25px 5px",
    color: "#f0efd1",
    whiteSpace: "noWrap",
    cursor: "pointer",
    fontSize: "1.25rem",
    textShadow: "0px 2px #000",
    "&:hover": {
      color: "#cfba58"
    }
  },
  elemTop: {
    padding: "5px",
    color: "#f0efd1",
    width: "min-content",
    fontSize: "0.9rem",
    cursor: "pointer",
    textShadow: "0px 2px #000",
    "&:hover": {
      color: "#cfba58"
    }
  },
  brand: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#f0efd1",
    whiteSpace: "noWrap",
    margin: "10px 2px",
    textShadow: "0px 2px #000"
  },
  brandSm: {
    fontSize: "1rem",
    color: "#f0efd1",
    whiteSpace: "noWrap",
    margin: "5px 2px",
    textShadow: "0px 2px #000"
  },
  navImg: {
    width: "100px",
    height: "100px",
    backgroundImage: 'url("/assets/images/profile.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "50px",
    boxShadow: "0px 2px 2px #000"
  },
  navImgSm: {
    width: "60px",
    height: "60px",
    backgroundImage: 'url("/assets/images/profile.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "30px",
    boxShadow: "0px 2px 2px #000"
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
    color: "#f0efd1",
    width: "40px",
    height: "auto",
    margin: "10px",
    cursor: "pointer",
    "&:hover": {
      color: "#cfba58"
    }
  },
  github: {
    width: "32px",
    height: "32px",
    margin: "10px",
    cursor: "pointer",
    backgroundImage:
      "url(/assets/images/icons/github/GitHub-Mark-Light-32px.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    "&:hover": {
      opacity: 0.54
    }
  },
  linkedin: {
    width: "32px",
    height: "32px",
    margin: "10px",
    cursor: "pointer",
    backgroundImage: "url(/assets/images/icons/linkedin/LI-In-Bug-light.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    "&:hover": {
      opacity: 0.54
    }
  },
  brandBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};
const handleNav = (loc, internal = false) => {
  if (loc.length === 1) {
    loc = "https://ejhalpin.github.io/" + this.props.repo;
  }
  if (internal) {
    window.location.href = loc;
  } else {
    window.open(loc, "_blank");
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
            <Email className={icon} onClick={props.openDialog} />
            <div className={github} />
            <div className={linkedin} />
          </div>
          <div className={hr} />
          <div className={navRow}>
            <div
              className={elemTop}
              onClick={() => {
                handleNav("#about", true);
              }}
            >
              About
            </div>
            <div
              className={elemTop}
              onClick={() => {
                handleNav("#skills", true);
              }}
            >
              Skills
            </div>
            <div
              className={elemTop}
              onClick={() => {
                handleNav("#apps", true);
              }}
            >
              Apps
            </div>
            <div
              className={elemTop}
              onClick={() => {
                handleNav("#connect", true);
              }}
            >
              Connect
            </div>
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
        <div
          className={elemSide}
          onClick={() => {
            handleNav("#about", true);
          }}
        >
          About
        </div>
        <div
          className={elemSide}
          onClick={() => {
            handleNav("#skills", true);
          }}
        >
          Skills
        </div>
        <div
          className={elemSide}
          onClick={() => {
            handleNav("#apps", true);
          }}
        >
          Apps
        </div>
        <div
          className={elemSide}
          onClick={() => {
            handleNav("#connect", true);
          }}
        >
          Connect
        </div>
        <div className={hr} />
        <Email className={icon} onClick={props.openDialog} />
        <div
          className={github}
          onClick={() => {
            handleNav("https://github.com/ejhalpin");
          }}
        />
        <div
          className={linkedin}
          onClick={() => {
            handleNav("https://www.linkedin.com/in/eugene-halpin/");
          }}
        />
      </div>
    );
  }
};

export default withStyles(styles)(Nav);
