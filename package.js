Package.describe({
  name: '3stack:es6-collections',
  version: "0.5.1",
  summary: "https://github.com/WebReflection/es6-collections/",
  git: 'https://github.com/3stack-software/meteor-es6-collections',
  documentation: 'README.md'
});

Npm.depends({
  'es6-collections': '0.5.1'
});

Package.onUse(function(api){
  api.addFiles([
    '.npm/package/node_modules/es6-collections/index.js'
  ], 'client');
  api.addFiles([
    'server.js'
  ], 'server');
});
