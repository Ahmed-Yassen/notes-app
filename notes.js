const fs = require("fs");

//-Helper Functions
const loadNotesFromFile = () => {
  try {
    const stringNotes = fs.readFileSync("savedNotes.json", "utf8");
    const jsonNotes = JSON.parse(stringNotes);
    return jsonNotes;
  } catch (error) {
    //-If the file wasn't found return an empty array.
    return [];
  }
};

const saveNotesToFile = (notesArray) => {
  const stringNotes = JSON.stringify(notesArray);
  fs.writeFileSync("savedNotes.json", stringNotes);
};

//-Main Functions
const createNote = (title, body) => {
  //-Shouldn't create duplicate notes

  const notes = loadNotesFromFile();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length) {
    console.log(
      "Couldn't create note! You already have a note with the same title."
    );
    return;
  }

  notes.push({ title, body });
  saveNotesToFile(notes);
  console.log("Your note was created successfully!");
};

const readNote = (title) => {
  const notes = loadNotesFromFile();
  const matchedNote = notes.find((note) => note.title === title);

  if (!matchedNote) {
    console.log(`Couldn't find a note with that title!`);
    return;
  }

  console.log(
    `Found a match!\n\tTitle: ${matchedNote.title}\n\tBody: ${matchedNote.body}`
  );
};

const updateNote = (title, newBody) => {
  const notes = loadNotesFromFile();
  const noteIndex = notes.findIndex((note) => note.title === title);

  if (noteIndex === -1) {
    console.log(`Couldn't find a note with that title!`);
    return;
  } else if (notes[noteIndex].body === newBody) {
    console.log(`No changes were made, you provided the same old body!`);
    return;
  }

  notes[noteIndex].body = newBody;
  saveNotesToFile(notes);
  console.log(`Your note was updated successfully!`);
};

const deleteNote = (title) => {
  const notes = loadNotesFromFile();
  const noteIndex = notes.findIndex((note) => note.title === title);

  if (noteIndex === -1) {
    console.log(`Couldn't find a note with that title!`);
    return;
  }

  notes.splice(noteIndex, 1);
  saveNotesToFile(notes);
  console.log(`Note has been deleted successfully!`);
};

const showNotes = () => {
  const notes = loadNotesFromFile();
  if (!notes.length) {
    console.log("There are no notes to show");
    return;
  }
  console.log(`Your notes:`);
  notes.forEach((note) => {
    console.log(`\tTitle: ${note.title} --- Body: ${note.body}`);
  });
};

module.exports = { createNote, readNote, updateNote, deleteNote, showNotes };
