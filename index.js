const express = require('express'),
   path = require('path'),
   fs = require('fs');
const compression = require('compression');
const app = express();

app.set('port', 8080);

app.use(compression());

app.use(function(req, res, next) {
    const acceptExtension = req.accepts('html', 'json', 'xml');
    const ext = path.extname(req.path);
    const isInvalidRequest = acceptExtension !== 'html' || ext !== ''

    if (isInvalidRequest) {
        return next();
    }
    
    fs.createReadStream('dist/index.html').pipe(res);
});

app.use(express.static('dist/'));

app.listen(app.get('port'), function() {
    console.log('running at localhost:', app.get('port'));
});