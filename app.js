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
  handler: (argv) => {
    notes.createNote(argv.title, argv.body);
  },
});

yargs.parse(); //Required to run correctly
