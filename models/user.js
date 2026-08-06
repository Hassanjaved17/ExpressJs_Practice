const path = require('path'); // Import the 'path' module to work with file and directory paths

const fs = require('fs'); // Import the 'fs' module to work with the file system

const jsonFilePath = path.join(process.cwd(), 'data', 'users.json'); // Create a path to the 'users.json' file in the 'data' directory

//=========== READ FUNCTION ============== 