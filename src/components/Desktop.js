// Imports
import React, { Component } from "react";
import Draggable from "./Draggable";
import Taskbar from "./Taskbar";

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
    const {
      zLevel,
      //states
    } = this.state;
    const {
      updateZ,
      //functions
    } = this;

    return (
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="desktop absolute dark:bg-blueGray-600 w-full h-full flex flex-col justify-between">
          <div className="flex full-width justify-center mb-auto h-10">
            <div className="font-medium text-lg">
              react-my-desktop-app - version 0.0.2 - last updated 23/12/2020
            </div>
          </div>
          <Draggable action={updateZ} zLevel={zLevel} />
          <Draggable action={updateZ} zLevel={zLevel} />
          <div className="taskbar relative h-12 bg-gray-500">
            <Taskbar />
          </div>
        </div>
      </div>
    );
  }
}

export default Desktop;
