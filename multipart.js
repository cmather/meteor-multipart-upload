if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Router.route('/upload').post(function (req, res, next) {
    var inputStream = req.files[0].file
    var writeStream = fs.createWriteStream('/place/to/go.zip');
    inputStream.pipe(writeStream);
    res.end();
  });
}
