import BoxList from "./BoxList";

const BoxDetails = ({ boxes, activeBox }) => {
  return <BoxList boxes={boxes} activeBox={activeBox} />;
};

export default BoxDetails;
