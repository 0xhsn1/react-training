const Toggle = ({ boxes, activeBox, handleToggle }) => {
  const toggles = boxes.map((box) => (
    <div className="flex items-center gap-4 pb-2">
      <h3>{box.title}</h3>
      <label className="switch">
        <input type="checkbox" checked={activeBox.includes(box.id)} />
        <span className="slider round" onClick={() => handleToggle(box.id)} />
      </label>
    </div>
  ));
  return <aside>{toggles}</aside>;
};

export default Toggle;
