
const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
}

//Currently I'm only using src and public.  There isn't a build folder.  SRC contains my source files.  Public contains static files and bundled js.  For the time being....