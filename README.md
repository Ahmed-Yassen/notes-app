
# Notes-App

a mini note-taking node cli project utilizing how to deal with the File system module for I/O operations, and Yargs to create cli commands.


## Documentation

- CLI Commands and how to use them:
- create: to create a new note you need to provide it a title and a body
```
node app create --title="note's title" --body="note's body"
```
- read: to read a note you need to provide it's title
```
node app read --title="note's title"
```
- update: to update a note you need to provide it's title and the new body to be updated
```
node app update --title="note's title" --newBody="note's new body"
```
- delete: to delete a note you need to provide it's title
```
node app delete --title="note's title"
```
- show: to show all notes
```
node app show
```


## Feedback

If you have any feedback, please reach out to me at ahmed.ibrahim.yassen@gmail.com
