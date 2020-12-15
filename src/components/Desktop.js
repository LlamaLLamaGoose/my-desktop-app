// Imports
import React, { Component } from "react";
import Draggable from "./Draggable";

import "../assets/main.css";

class Desktop extends Component {
  constructor(props) {
    super(props);
    this.updateZ = this.updateZ.bind(this);

    this.state = {
      z: 0,
      zLevel: 0,
    };
  }

  updateZ() {
    let z = this.state.zLevel;
    z = z + 1;
    this.setState({
      zLevel: z,
    });
  }

  /* componentDidMount() {
    const { data, function } = this.props;

    if (!data) {
      function();
    }
  } */

  /* componentDidUpdate(prevProps) {
      const {data, status, functions } = this.props;
      registerScrollEvents(this, (status === 'success' && prevProps.status === 'loading'));

      if (status === 'success' && prevProps.status === 'loading') {
          const { attributes } = data;
          this.setState({
              ...this.state,
              ...attributes
          })
      }

      if (status === 'success' && prevProps.status === 'loading') {
          function();
      }
  } */

  render() {
    const {
      //props
    } = this.props;
    const { zLevel } = this.state;
    const { updateZ } = this;

    return (
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="desktop dark:bg-blueGray-600 w-full h-full absolute">
          <h1>react-rnd</h1>
          <Draggable action={updateZ} zLevel={zLevel} />
          <Draggable action={updateZ} zLevel={zLevel} />
        </div>
      </div>
    );
  }
}

export default Desktop;
