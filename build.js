var buildify = require('buildify');

buildify()
  .load('js/stormfront.js')
  .wrap('template.js', { version: '1.0' })
  .save('dist/stormfront.js')
  .uglify()
  .save('../dist/stormfront.min.js');
