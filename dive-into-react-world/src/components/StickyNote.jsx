import Note from "./Note";

const noteData = [
  { id: 1, link: "/", title: "Title #1", paragraph: "Text Content #1" },
  { id: 2, link: "/", title: "Title #2", paragraph: "Text Content #2" },
  { id: 3, link: "/", title: "Title #3", paragraph: "Text Content #3" },
  { id: 4, link: "/", title: "Title #4", paragraph: "Text Content #4" },
  { id: 5, link: "/", title: "Title #5", paragraph: "Text Content #5" },
  { id: 6, link: "/", title: "Title #6", paragraph: "Text Content #6" },
  { id: 7, link: "/", title: "Title #7", paragraph: "Text Content #7" },
  { id: 8, link: "/", title: "Title #8", paragraph: "Text Content #8" },
  { id: 9, link: "/", title: "Title #9", paragraph: "Text Content #9" },
];

const StickyNote = () => {
  return (
    <>
      {noteData.map((note) => (
        <ul key={note.id}>
          <Note
            noteLink={note.link}
            noteTitle={note.title}
            noteParagraph={note.paragraph}
          />
        </ul>
      ))}
    </>
  );
};

export default StickyNote;
