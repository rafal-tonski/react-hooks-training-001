import { Component, createRef } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  componentRef = createRef();

  render() {
    const { counter } = this.state;

    return (
      <div ref={this.componentRef}>
        <p>Stan licznika wynosi {counter}</p>
        <button onClick={this.startCounter}>Start</button>
      </div>
    );
  }
  startCounter = () => {
    setTimeout(() => {
      if (this.componentRef.current)
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 2000);
  };
}

export default Counter;
