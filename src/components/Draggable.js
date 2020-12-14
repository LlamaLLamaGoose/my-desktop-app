import React, { Component } from "react";
import { Rnd } from "react-rnd";

class Draggable extends Component {
  constructor(props) {
    super(props);
    //this.something = this.something.bind(this);
    this.state = {
      zLevel: null,
      //var: null,
    };
  }

  isClicked = () => {
    this.props.action();
    this.setState({
      zLevel: this.props.zLevel,
    });
  };

  render() {
    const {
      //props
    } = this.props;
    const {
      zLevel
    } = this.state;
    const {
      isClicked,
      // functions
    } = this;

    function dragWindow() {
      return (
      <Rnd
      onMouseDown={isClicked}
      disableDragging={false}
      dragHandleClassName={"handle"}
      minHeight={"200px"}
      style={{
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        zIndex: zLevel,
      }}
      default={{
        x: 200,
        y: 200,
        width: 320,
        height: 200,
      }}
    >
      <div
        className="handle"
        style={{
          backgroundColor: "gray",
          padding: "1rem",
        }}
      >
        Drag
      </div>
      <div
        className="content"
        style={{
          width: "100%",
          height: "calc( 100% - 3rem )",
          borderWidth: "0",
          backgroundColor: "white",
        }}
      >
        {zLevel}
        test
      </div>
    </Rnd>
      )
    }

    return (
      dragWindow()
    );
  }
}

export default Draggable;
