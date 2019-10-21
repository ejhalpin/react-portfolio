import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import classnames from "classnames";

const ExpansionPanel = withStyles({
  root: {
    border: "none",
    width: "90%",
    backgroundColor: "#cfba58",
    marginBottom: "5px",
    boxShadow: "0px 1px 2px #000",
    "&:before": {
      display: "none"
    },
    "&:not(:last-child)": {
      borderBottom: 0
    }
  },
  expanded: {
    margin: "auto"
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    color: "#191919",
    fontSize: "1.25rem",
    fontWeight: 500,
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing.unit * 2,
    backgroundColor: "#cfba58",
    color: "#191919"
  }
}))(MuiExpansionPanelDetails);

const styles = {
  contDiv: {
    width: "90%",
    height: "max-content",
    padding: "10px",
    boxSizing: "border-box"
  },
  skill: {
    boxSizing: "border-box",
    padding: "10px",
    margin: "5px",
    fontWeight: "700",
    color: "#191919"
  },
  subHeading: {
    width: "100%",
    padding: "10px",
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#32322e",
    textShadow: "1px 1px #000",
    fontWeight: "700",
    boxSizing: "border-box"
  },
  inlineSpace: {
    display: "inline-block",
    width: "2rem"
  },
  center: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  smallText: {
    fontSize: "0.9rem"
  },
  background: {
    backgroundColor: "#f0edf1",
    boxShadow: "0px 2px 2px #000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
class Skills extends React.Component {
  state = {
    expanded: "panel1"
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { expanded } = this.state;
    const {
      contDiv,
      skill,
      subHeading,
      center,
      background,
      smallText
    } = this.props.classes;
    const { breakPoint } = this.props;
    return (
      <div className={contDiv}>
        <div className={background}>
          <div className={subHeading}>
            Eugene specializes in MERN stacks and RESTful APIs.
          </div>
          <ExpansionPanel
            square
            expanded={expanded === "panel1"}
            onChange={this.handleChange("panel1")}
          >
            <ExpansionPanelSummary>
              <div
                className={breakPoint ? classnames(center, smallText) : center}
              >
                Languages
                {this.state.expanded === "panel1" ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </div>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                HTML
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                CSS
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                JavaScript
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                SQL
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                JSON
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                JSX
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Java
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            square
            expanded={expanded === "panel2"}
            onChange={this.handleChange("panel2")}
          >
            <ExpansionPanelSummary>
              <div
                className={breakPoint ? classnames(center, smallText) : center}
              >
                Libraries/Frameworks
                {this.state.expanded === "panel2" ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </div>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                NodeJSL
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                ExpressJS
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                ReactJS
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                jQuery
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Bootstrap
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Material UI
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Google Cloud
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            square
            expanded={expanded === "panel3"}
            onChange={this.handleChange("panel3")}
          >
            <ExpansionPanelSummary>
              <div
                className={breakPoint ? classnames(center, smallText) : center}
              >
                Databases
                {this.state.expanded === "panel3" ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </div>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                MySQL
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                MongoDB
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Firebase Realtime Database
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Google Cloud Storage
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            square
            expanded={expanded === "panel4"}
            onChange={this.handleChange("panel4")}
          >
            <ExpansionPanelSummary>
              <div
                className={breakPoint ? classnames(center, smallText) : center}
              >
                Tools/Technologies
                {this.state.expanded === "panel4" ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </div>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Git
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Firebase Authentication
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Handlebars
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Local and Session Storage
              </div>
              <div
                className={breakPoint ? classnames(skill, smallText) : skill}
              >
                Cookies
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
