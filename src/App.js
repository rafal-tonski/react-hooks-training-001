import { createRef } from "react";
import { Component } from "react";

import Counter from "./Counter";
import TrainApp from "./TrainApp";

import "./App.css";

class App extends Component {
  textInput = createRef();
  paragraphElement = createRef();

  state = {
    isCounterVisible: true,
  };

  render() {
    const { isCounterVisible } = this.state;
    const counterElement = isCounterVisible ? <Counter /> : null;
    const counterButton = isCounterVisible ? "Ukryj" : "Pokaż";
    return (
      <>
        <input type="text" ref={this.textInput} />
        <button onClick={this.focusTextInput}>Focus</button>
        <br />
        <br />
        <TrainApp />
        <br />
        <br />
        <br />

        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.addToParagraph}>Dodaj</button>
        <br />
        <br />
        <br />

        {counterElement}
        <button onClick={this.toggleVisibilityCounterElement}>
          {counterButton}
        </button>
        <br />
      </>
    );
  }

  focusTextInput = () => this.textInput.current.focus();
  addToParagraph = () => (this.paragraphElement.current.textContent += "!");
  toggleVisibilityCounterElement = () =>
    this.setState((prevState) => ({
      isCounterVisible: !prevState.isCounterVisible,
    }));
}

export default App;
