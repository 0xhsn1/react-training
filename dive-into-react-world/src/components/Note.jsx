const Note = ({ noteLink, noteTitle, noteParagraph }) => {
  return (
    <li>
      <a href={noteLink}>
        <h2>{noteTitle}</h2>
        <p>{noteParagraph}</p>
      </a>
    </li>
  );
};

export default Note;
