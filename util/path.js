const path = require('path');

// Switch to this if you get a deprecation warning:
// module.exports = path.dirname(require.main.filename);
// When you type this:
// module.exports = path.dirname(process.mainModule.filename);

// This gives us the path to the file that's running the application, e.g. app.js
module.exports = path.dirname(require.main.filename);