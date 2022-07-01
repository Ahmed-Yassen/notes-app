const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "create",
  builder: {
    title: {
      describe: "Enter a title for the note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Enter a body for the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (options) => {
    notes.createNote(options.title, options.body);
  },
});

yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "Provide the title of the note you want to read",
      demandOption: true,
      type: "string",
    },
  },
  handler: (options) => {
    notes.readNote(options.title);
  },
});

yargs.command({
  command: "update",
  builder: {
    title: {
      describe: "Provide the title of the note you want to update",
      demandOption: true,
      type: "string",
    },
    newBody: {
      describe: "Provide the new body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (options) => {
    notes.updateNote(options.title, options.newBody);
  },
});

yargs.command({
  command: "delete",
  builder: {
    title: {
      describe: "Provide a title for the note to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler: (options) => {
    notes.deleteNote(options.title);
  },
});

yargs.parse(); //Required to run correctly
