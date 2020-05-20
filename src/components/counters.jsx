import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    //Another example of object destructing in the following line.
    // This allows us to not write this.props everytime, just use the property directly.
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button
          //onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* {this.props.counters.map(counter => ( */}
        {counters.map(counter => (
          <Counter
            // key={counter.id}
            // onDelete={this.props.onDelete}
            // onIncrement={this.props.onIncrement}
            // value={counter.value}
            // counter={counter}
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            value={counter.value}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
