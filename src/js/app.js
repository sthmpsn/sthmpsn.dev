// Sass compilation with bunlder
import '../css/style.scss';

// JavaScript entrypoint - From here the bundler can bundle the required .js files
require('./global.js');
require('./menu.js');
require('./scroll.js');
require('./portfolio.js');

(function () {
  // Get and display current year for copyright
  document.getElementById('currentYear').innerHTML = new Date().getFullYear();
})();