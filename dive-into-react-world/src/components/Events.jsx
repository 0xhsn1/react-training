// import { useState } from "react";

// const Events = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Events Session</p>
//       <button onClick={() => setCount(count + 1)}>Count Up</button>
//       <button onClick={() => setCount(count - 1)}>Count Down</button>
//       <div>The number is: {count}</div>
//     </div>
//   );
// };

// export default Events;

// Class Approach
import { Component } from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>event session</p>
        <button onClick={this.countUp.bind(this)}>Count Up</button>
        {/* <button onClick={(e) => this.countDown()}>Count Down</button> */}
        <span>{this.state.count}</span>
      </div>
    );
  }

  countUp() {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  countDown() {
    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
  }
}
