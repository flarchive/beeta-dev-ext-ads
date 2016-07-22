var flarum = require('flarum-gulp');

flarum({
  modules: {
    'beeta-dev/ext-ads': [
      'src/**/*.js'
    ]
  }
});