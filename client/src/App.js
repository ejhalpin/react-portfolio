import React, { Component, Fragment } from "react";
import Nav from "./components/sideNav";
import Base from "./components/base";
import About from "./components/about";
import Skills from "./components/skills";
import Heading from "./components/heading";
import TabbedPanel from "./components/tabbedPanel";
import API from "./utils/API";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import Connect from "./components/connect";

const styles = {
  textArea: {
    width: "100%",
    fontFamily: "inherit",
    fontSize: "inherit",
    height: "5rem"
  },
  container: {
    width: "90%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box"
  }
};

class App extends Component {
  state = {
    email: "",
    name: "",
    message: "",
    height: null,
    width: null,
    breakPoint: false,
    games: [],
    uis: [],
    projects: [],
    clis: [],
    social: [],
    open: false,
    sent: false
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
    this.getApps();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  getApps = () => {
    API.getApps().then(res => {
      let games = res.data.filter(app => app.category === "Game");
      let uis = res.data.filter(app => app.category === "UI");
      let projects = res.data.filter(app => app.category === "Project");
      let clis = res.data.filter(app => app.category === "CLI");
      let social = res.data.filter(app => app.category === "Social");
      this.setState({ games, uis, social, clis, projects });
    });
  };

  updateDimensions = () => {
    var height = window.innerHeight;
    var width = window.innerWidth;
    var breakPoint = false;
    if (width < 600) {
      breakPoint = true;
    }
    this.setState({ height, width, breakPoint });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = () => {
    var obj = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    API.sendMessage(obj)
      .then(res => {
        this.setState({ open: false, email: "", name: "", message: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, name: "", email: "", message: "" });
  };

  render() {
    return (
      <Fragment>
        <Nav
          breakPoint={this.state.breakPoint}
          openDialog={this.handleClickOpen}
        />

        <Base breakPoint={this.state.breakPoint}>
          <div id="about"></div>
          <Heading>About</Heading>
          <About breakPoint={this.state.breakPoint} />
          <div id="skills"></div>
          <Heading>Skills</Heading>
          <Skills breakPoint={this.state.breakPoint} />
          <div id="apps"></div>
          <Heading>Apps</Heading>
          <div className={this.props.classes.container}>
            <TabbedPanel
              projects={this.state.projects}
              social={this.state.social}
              uis={this.state.uis}
              clis={this.state.clis}
              games={this.state.games}
            />
          </div>
          <div id="connect"></div>
          <Heading>Connect</Heading>
          <Connect />
        </Base>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contact</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the fields below. Your message will be sent
              directly to Eugene's inbox. You will also receive a confirmation
              email at the address you provide.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              value={this.state.name}
              label="Name"
              type="text"
              onChange={this.handleInputChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              value={this.state.email}
              label="Email Address"
              type="email"
              onChange={this.handleInputChange}
              fullWidth
            />
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              className={this.props.classes.textArea}
            ></textarea>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleFormSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
