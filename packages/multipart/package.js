Package.describe({
  name: 'multipart',
  summary: 'Add multipart parsing to router',
  version: '1.0.0'
});

Npm.depends({
  'connect-busboy': '0.0.2'
});

Package.onUse(function (api) {
  api.use('iron:router')
  api.addFiles('multipart_server.js', 'server');
});
