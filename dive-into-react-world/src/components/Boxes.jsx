import { Component } from "react";
import Sidebar from "./Sidebar";
import BoxDetails from "./BoxDetails";

export default class Boxes extends Component {
  state = {
    boxes: [
      { id: 1, title: "BOX 1" },
      { id: 2, title: "BOX 2" },
      { id: 3, title: "BOX 3" },
      { id: 4, title: "BOX 4" },
    ],

    activeBox: [1, 2, 4],
  };

  handleToggleBtn = (id) => {
    const activeBoxCopy = [...this.state.activeBox];

    if (activeBoxCopy.includes(id)) {
      activeBoxCopy.splice(activeBoxCopy.indexOf(id), 1);
    } else {
      activeBoxCopy.push(id);
    }

    this.setState({
      activeBox: activeBoxCopy,
    });

    console.log(id, activeBoxCopy);
  };

  render() {
    return (
      <section className="flex flex-col gap-20 p-24">
        <Sidebar
          boxes={this.state.boxes}
          activeBox={this.state.activeBox}
          handleToggle={this.handleToggleBtn}
        />
        <BoxDetails boxes={this.state.boxes} activeBox={this.state.activeBox} />
      </section>
    );
  }
}
