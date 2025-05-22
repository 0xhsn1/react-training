const BoxList = ({ boxes, activeBox }) => {
  const boxClasses = `w-[250px] h-[250px] p-12 text-center bg-sky-700 rounded-xl`;

  const boxesList = boxes.map((toggle) => {
    if (activeBox.includes(toggle.id)) {
      return <h4 className={boxClasses}>{toggle.title}</h4>;
    }
  });

  return (
    <div className="flex justify-around items-center text-white text-3xl">
      {boxesList}
    </div>
  );
};

export default BoxList;
