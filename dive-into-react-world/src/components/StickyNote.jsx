const noteData = [
  {id:1, link: '/' ,title:'Title #1' ,paragraph:'Text Content #1'},
  {id:1, link: '/' ,title:'Title #2' ,paragraph:'Text Content #2'},
  {id:1, link: '/' ,title:'Title #3' ,paragraph:'Text Content #3'},
  {id:1, link: '/' ,title:'Title #4' ,paragraph:'Text Content #4'},
  {id:1, link: '/' ,title:'Title #5' ,paragraph:'Text Content #5'},
  {id:1, link: '/' ,title:'Title #6' ,paragraph:'Text Content #6'},
  {id:1, link: '/' ,title:'Title #7' ,paragraph:'Text Content #7'},
  {id:1, link: '/' ,title:'Title #8' ,paragraph:'Text Content #8'},
  {id:1, link: '/' ,title:'Title #9' ,paragraph:'Text Content #9'},
]

const StickyNote = () => {
  return (
    <ul>
      {noteData.map((note) => (
  <li key={note.id}>
    <a href={note.link} contenteditable>
      <h2>{note.title}</h2>
      <p>{note.paragraph}</p>
    </a>
  </li>
      ))}
  </ul>
  )
}

export default StickyNote