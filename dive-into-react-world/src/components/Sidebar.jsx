import Toggle from "./Toggle";

const Sidebar = ({ boxes, activeBox, handleToggle }) => {
  return (
    <Toggle boxes={boxes} activeBox={activeBox} handleToggle={handleToggle} />
  );
};

export default Sidebar;
