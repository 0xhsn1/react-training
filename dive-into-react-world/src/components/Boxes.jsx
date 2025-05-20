import { Component } from "react";

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

  handleToggleBtn(id) {
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
  }

  render() {
    const boxClasses = `w-[250px] h-[250px] p-12 text-center bg-sky-700 rounded-xl`;

    const boxes = this.state.boxes.map((box) => (
      <div className="flex items-center gap-4 pb-2">
        <h3>{box.title}</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={this.state.activeBox.includes(box.id)}
          />
          <span
            className="slider round"
            onClick={() => this.handleToggleBtn(box.id)}
          />
        </label>
      </div>
    ));

    const toggles = this.state.boxes.map((toggle) => {
      if (this.state.activeBox.includes(toggle.id)) {
        return <h4 className={boxClasses}>{toggle.title}</h4>;
      }
    });

    return (
      <section className="flex flex-col gap-20 p-24">
        <aside>{boxes}</aside>
        <div className="flex justify-around items-center text-white text-3xl">
          {toggles}
        </div>
        {this.state.activeBox}
      </section>
    );
  }
}
