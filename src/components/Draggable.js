import React, { Component } from "react";
import { Rnd } from "react-rnd";

import "../assets/main.css";

class Draggable extends Component {
  constructor(props) {
    super(props);
    //this.something = this.something.bind(this);
    this.state = {
      isDraggable: true,
      isFullScreen: null,
      prevHeight: null,
      prevWidth: null,
      prevX: null,
      prevY: null,
      zLevel: null,
    };
  }

  updatePosition = (x, y) => {
    let promise = new Promise((resolve, reject) => {
      this.rnd.updatePosition({
        x: x,
        y: y,
      });
      resolve(true);
    });
    return promise;
  };

  updateSize = (h, w) => {
    let promise = new Promise((resolve, reject) => {
      this.rnd.updateSize({
        height: h,
        width: w,
      });
      resolve(true);
    });
    return promise;
  };

  getTranslateXY(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return {
      translateX: matrix.m41,
      translateY: matrix.m42,
    };
  }

  isClicked = () => {
    this.props.action();
    this.setState({
      zLevel: this.props.zLevel,
    });
  };

  setFullScreen = () => {
    let element = this.rnd.getSelfElement();
    let windowPos = this.getTranslateXY(element);
    this.setState(
      {
        isDraggable: false,
        isFullScreen: true,
        prevHeight: element.style.height,
        prevWidth: element.style.width,
        prevX: windowPos.translateX,
        prevY: windowPos.translateY,
      },
      () => {
        this.updateSize("100vh", "100vw").then(
          this.updatePosition(0, 0)
        );
      }
    );
  };

  setRestoreDown = () => {
    this.setState(
      {
        isDraggable: true,
        isFullScreen: false,
      },
      () => {
        this.updateSize(this.state.prevHeight, this.state.prevWidth).then(
          this.updatePosition(this.state.prevX, this.state.prevY)
        );
      }
    );
  };

  render() {
    const {
      //props
    } = this.props;
    const {
      isDraggable,
      isFullScreen,
      zLevel,
      //states
    } = this.state;
    const {
      isClicked,
      setFullScreen,
      setRestoreDown,
      //functions
    } = this;

    const dragWindow = () => {
      return (
        <Rnd
          ref={(c) => {
            this.rnd = c;
          }}
          onMouseDown={isClicked}
          onResizeStart={isClicked}
          disableDragging={isFullScreen}
          enableResizing={isDraggable}
          dragHandleClassName={"handle"}
          bounds={".desktop"}
          minHeight={"200px"}
          minWidth={"200px"}
          style={{
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            zIndex: zLevel,
          }}
          default={{
            height: 320,
            width: 500,
            x: 0,
            y: 0,
          }}
        >
          <div className="window flex flex-col h-full">
            <div className="handle flex flex-row justify-between bg-gray-600 p-2 rounded-t-sm overflow-hidden">
              <div className="dark:text-gray-200 text-gray-800">Drag</div>
              <div className="flex justify-self-end">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-minus stroke-current fill-none dark:text-gray-200 text-gray-800"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <div
                  className={`px-2 ${isFullScreen ? "null" : "hidden"}`}
                  onMouseDown={setRestoreDown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-minimize stroke-current fill-none dark:text-gray-200 text-gray-800"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M15 5v2a2 2 0 0 0 2 2h2" />
                    <path d="M5 15h2a2 2 0 0 1 2 2v2" />
                    <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
                  </svg>
                </div>
                <div
                  className={`px-2 ${isFullScreen ? "hidden" : "null"}`}
                  onMouseDownCapture={setFullScreen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-maximize stroke-current fill-none dark:text-gray-200 text-gray-800 hover:text-gray-50"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                  </svg>
                </div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-square-x stroke-current fill-none dark:text-gray-200 text-gray-800"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M10 10l4 4m0 -4l-4 4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content flex h-full w-full border-none bg-gray-400 rounded-b-sm">
              {zLevel}
              test
            </div>
          </div>
        </Rnd>
      );
    };

    return dragWindow();
  }
}

export default Draggable;
