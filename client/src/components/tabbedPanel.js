import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppCard from "./card";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#bf3211" },
    text: {
      primary: "#191919",
      secondary: "#191919"
    }
  },
  typography: { useNextVariants: true }
});

const AppBar = withStyles({
  root: {
    backgroundColor: "#cfba58",
    color: "#191919"
  }
})(MuiAppBar);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#f0efd1",
    height: "600px",
    overflowY: "auto",
    boxShadow: "1px 2px 2px #000",
    boxSizing: "border-box"
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center"
  }
});

class TabbedPanel extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Projects" />
              <Tab label="Social Apps" />
              <Tab label="Search Engines" />
              <Tab label="CLIs" />
              <Tab label="Games" />
            </Tabs>
          </AppBar>
        </MuiThemeProvider>
        {value === 0 && (
          <TabContainer>
            <div className={classes.flex}>
              {this.props.projects.map((app, index) => {
                return (
                  <AppCard
                    cat={app.category}
                    title={app.title}
                    img={"/assets/images/apps/full-screen/" + app.imgFull}
                    desc={app.desc}
                    href={app.href}
                    tech={app.technology}
                    key={index}
                    repo={app.repo}
                  />
                );
              })}
            </div>
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <div className={classes.flex}>
              {this.props.social.map((app, index) => {
                return (
                  <AppCard
                    cat={app.category}
                    title={app.title}
                    img={"/assets/images/apps/full-screen/" + app.imgFull}
                    desc={app.desc}
                    href={app.href}
                    tech={app.technology}
                    key={index}
                    repo={app.repo}
                  />
                );
              })}
            </div>
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <div className={classes.flex}>
              {this.props.uis.map((app, index) => {
                return (
                  <AppCard
                    cat={app.category}
                    title={app.title}
                    img={"/assets/images/apps/full-screen/" + app.imgFull}
                    desc={app.desc}
                    href={app.href}
                    tech={app.technology}
                    key={index}
                    repo={app.repo}
                  />
                );
              })}
            </div>
          </TabContainer>
        )}
        {value === 3 && (
          <TabContainer>
            <div className={classes.flex}>
              {this.props.clis.map((app, index) => {
                return (
                  <AppCard
                    cat={app.category}
                    title={app.title}
                    img={"/assets/images/apps/full-screen/" + app.imgFull}
                    desc={app.desc}
                    href={app.href}
                    tech={app.technology}
                    key={index}
                    repo={app.repo}
                  />
                );
              })}
            </div>
          </TabContainer>
        )}
        {value === 4 && (
          <TabContainer>
            <div className={classes.flex}>
              {this.props.games.map((app, index) => {
                return (
                  <AppCard
                    cat={app.category}
                    title={app.title}
                    img={"/assets/images/apps/full-screen/" + app.imgFull}
                    desc={app.desc}
                    href={app.href}
                    tech={app.technology}
                    key={index}
                    repo={app.repo}
                  />
                );
              })}
            </div>
          </TabContainer>
        )}
      </div>
    );
  }
}

TabbedPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabbedPanel);
