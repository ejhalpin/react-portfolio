import React, { Component, Fragment } from "react";
import sendMessage from "./util/API";
import Nav from "./components/sideNav";
import Base from "./components/base";
import About from "./components/about";
import Skills from "./components/skills";
import Heading from "./components/heading";

class App extends Component {
  state = {
    email: "",
    name: "",
    message: "",
    height: null,
    width: null,
    breakPoint: false
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

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
    sendMessage(this.state)
      .then(res => {
        this.setState({ email: "", name: "", message: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <Nav breakPoint={this.state.breakPoint} />
        <Base breakPoint={this.state.breakPoint}>
          <Heading id={"about"}>About</Heading>
          <About />
          <Heading id={"skills"}>Skills</Heading>
          <Skills />
          <Heading id={"apps"}>Apps</Heading>
          <Heading id={"connect"}>Connect</Heading>
        </Base>
      </Fragment>
    );
  }
}

export default App;
