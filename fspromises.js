//! Are you tired of using fs.promises everytime?
// You can actually just import with fs/promises
// const fs = require('fs/promises')
// Now you don't need to write promises everytime.


const fs = require('fs');
const path = require('path');

const fileName = 'fsPromises.txt';
const filePath = path.join(__dirname, fileName);


/*
// Why .then() and .catch()
//? .then() ensures clear chainning of multiple asynchronous operations.
//? .catch() centralizes error handling, making it easy to debug and manage features.
*/

const file = __dirname;

fs.promises
.readdir(file)
.then((data) => console.log(data))
.catch((error) => console.log(error));


/*
// Create (write a file): fs.promises.writeFile
// Creates or overwrites a file with specified content.
// The writeFile() method writes data to a file asynchronously.
// if the file does not exist, it is created.
// if it exists, its content is replaced.

//! SYNTAX: fs.promises.WriteFile(path, data, options).then().catch()
//? Path: path to the file
//? data: content to write
//? options: Encoding ('utf-8'), flags, etc. (optional) 
*/


fs.promises.writeFile(filePath, "This is my initial data", 'utf-8')
.then(() => console.log('File has been created Successfully'))
.catch((error) => console.log(error));



/*
// Read (Read a file): ReadFile()
// The readFile() method reads data from a file.
// It can return the data as a buffer or string based on the encoding provided.

//! SYNTAX: fs.promises.readFile(path, options).then(data => ...data).catch(err => ...err)
//? Path: path to the file
//? options: Encoding ('utf-8'), or no encoding for binary data.

*/

fs.promises.readFile(filePath, 'utf-8')
.then((data) => console.log(data))
.catch((err) => console.log(err) )


/*
// Append (Append Content to a file): appendFile()
// Adds content to end of  a file.
// The appendFile() method adds content without overwriting the existing one.

//! SYNTAX: fs.promises.appendFile(path, data, options).then().catch()
//? Path: path to the file
//? data: Data to append
//? options: Encoding ('utf-8'), or no encoding for binary data.

*/


fs.promises
.appendFile(filePath, "\nThis is my updated data", 'utf-8')
.then(() => console.log('Another data has been succesfully added'))
.catch((err) => console.log(err));


/*
// Delete (Remove a file): unlink()
// Deletes a file from the FileSystem.
// The unlink() method removes the specified file asynchronously.

//! SYNTAX: fs.promises.unlink(path).then().catch()
//? Path: path to the file
*/

 fs.promises.unlink(filePath)
 .then(() => console.log('Files has been deleted successfully'))
 .catch((err) => console.log(err))
