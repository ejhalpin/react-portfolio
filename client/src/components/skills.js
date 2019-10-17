import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";

const ExpansionPanel = withStyles({
  root: {
    border: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
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
    backgroundColor: "transparent",
    textAlign: "center",
    color: "#000",
    fontSize: "1.25rem",
    fontWeight: "700",
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
    backgroundColor: "#1c1c1c"
  }
}))(MuiExpansionPanelDetails);

const styles = {
  contDiv: {
    width: "100%",
    height: "max-content"
  },
  skill: {
    boxSizing: "border-box",
    padding: "10px",
    margin: "5px",
    fontWeight: "700",
    color: "#1c1c1c",
    backgroundColor: "#f5f5f5"
  },
  subHeading: {
    width: "100%",
    padding: "10px",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "700",
    boxSizing: "border-box"
  },
  inlineSpace: {
    display: "inline-block",
    width: "2rem"
  },
  center: {
    width: "100%",
    textAlign: "center"
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
      inlineSpace,
      subHeading,
      center
    } = this.props.classes;
    return (
      <div className={contDiv}>
        <div className={subHeading}>
          Eugene specializes in MERN stacks and has experience with many
          libraries and frameworks .
        </div>
        <ExpansionPanel
          square
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary>
            <div className={center}>
              Languages
              <span className={inlineSpace} />{" "}
              {this.state.expanded === "panel1" ? (
                <KeyboardArrowUp />
              ) : (
                <KeyboardArrowDown />
              )}
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <div className={skill}>HTML</div>
            <div className={skill}>CSS</div>
            <div className={skill}>JavaScript</div>
            <div className={skill}>SQL</div>
            <div className={skill}>JSON</div>
            <div className={skill}>JSX</div>
            <div className={skill}>Java</div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary>
            <div className={center}>
              Libraries/Frameworks
              <span className={inlineSpace} />{" "}
              {this.state.expanded === "panel2" ? (
                <KeyboardArrowUp />
              ) : (
                <KeyboardArrowDown />
              )}
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <div className={skill}>NodeJSL</div>
            <div className={skill}>ExpressJS</div>
            <div className={skill}>ReactJS</div>
            <div className={skill}>jQuery</div>
            <div className={skill}>Bootstrap</div>
            <div className={skill}>Material UI</div>
            <div className={skill}>Google Cloud</div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary>
            <div className={center}>
              Databases
              <span className={inlineSpace} />{" "}
              {this.state.expanded === "panel3" ? (
                <KeyboardArrowUp />
              ) : (
                <KeyboardArrowDown />
              )}
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <div className={skill}>MySQL</div>
            <div className={skill}>MongoDB</div>
            <div className={skill}>Firebase Realtime Database</div>
            <div className={skill}>Google Cloud Storage</div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary>
            <div className={center}>
              Tools/Technologies
              <span className={inlineSpace} />{" "}
              {this.state.expanded === "panel4" ? (
                <KeyboardArrowUp />
              ) : (
                <KeyboardArrowDown />
              )}
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <div className={skill}>Git</div>
            <div className={skill}>Firebase Authentication</div>
            <div className={skill}>Handlebars</div>
            <div className={skill}>Local and Session Storage</div>
            <div className={skill}>Cookies</div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
