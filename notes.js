const fs = require("fs");

//-Helper functions
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

//-Shouldn't create duplicate notes
const createNote = (title, body) => {
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

module.exports = { createNote, readNote };
