import React, { Component } from "react";
import { Rnd } from "react-rnd";
import moment from "moment";

import "../assets/main.css";

class Taskbar extends Component {
  constructor(props) {
    super(props);
    //this.something = this.something.bind(this);
    this.state = {
      //states
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    console.log(this.interval)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      //props
    } = this.props;
    const {
      //states
    } = this.state;
    const {
      //functions
    } = this;

    const taskbar = () => {
      return (
        <div className="flex w-full justify-between text-white">
          <div className="place-self-center self-center mx-6" id="logo">
            Logo
          </div>

          <div className="flex flex-grow self-center" id="apps">
            <div>app1</div>
            <div>app1</div>
            <div>app1</div>
          </div>
          <div className="mx-4 flex flex-col items-center" id="clock">
            <div className="">{moment().format("hh:mm:ss")}</div>
            <div className="">{moment().format("DD/MM/YYYY")}</div>
          </div>
        </div>
      );
    };

    return taskbar();
  }
}

export default Taskbar;
