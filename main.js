const fs = require('fs');

// TODO: Write the message "Hello, World!" to the file "output.txt"

fs.writeFile('output.txt', "Hello, World!", err => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully")
    }
  });