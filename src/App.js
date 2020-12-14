// Imports
import React, { Component } from "react";
import Desktop from "./components/Desktop";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    //this.something = this.something.bind(this);
    this.state = {
      zLevel: null,
      //var: null,
    };
  }

  render() {
    const {
      //props
    } = this.props;
    const {
      //states
    } = this.state;
    const {
      // functions
    } = this;

    return <Desktop />;
  }
}

export default App;
