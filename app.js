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
yargs.parse(); //Required to run correctly
