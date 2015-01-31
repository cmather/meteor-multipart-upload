var busboy = Npm.require('connect-busboy');
Router.onBeforeAction(busboy({immediate: true}));
Router.onBeforeAction(function (req, res, next) {
  if (req.busboy) {
    req.files = [];
    req.busboy.on('file', Meteor.bindEnvironment(function (fieldname, file, filename, encoding, mimetype) {
      req.files.push({
        file: file,
        fieldname: fieldname,
        filename: filename,
        encoding: encoding,
        mimetype: mimetype
      });
      next();
    }));
  } else {
    next();
  }
});
