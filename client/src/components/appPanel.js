import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import classnames from "classnames";

const ExpansionPanel = withStyles({
  root: {
    width: "90%",
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
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: theme.spacing.unit * 2,
    backgroundColor: "#1c1c1c"
  }
}))(MuiExpansionPanelDetails);

const styles = {
  inlineSpace: {
    display: "inline-block",
    width: "2rem"
  },
  center: {
    width: "100%",
    textAlign: "center"
  }
};
class AppPanel extends React.Component {
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
    const { inlineSpace, center } = this.props.classes;

    return (
      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={this.handleChange("panel1")}
      >
        <ExpansionPanelSummary>
          <div className={center}>
            {this.props.category}
            <span className={inlineSpace} />{" "}
            {this.state.expanded === "panel1" ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
            )}
          </div>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>{this.props.children}</ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(AppPanel);
