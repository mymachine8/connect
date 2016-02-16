'use strict';

const jwt = require('express-jwt');
var apiController = require('../controllers');
var cors = require('cors');
module.exports = function (app) {


    // CORS options
  //  var whitelist = [config.frontendUrl];
    var corsOptions = {
        credentials: true,
        origin: function (origin, callback) {
           // var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
            //callback(null, originIsWhitelisted); //uncomment to allow particular origins only
            callback(null, true); //uncomment this and comment the above to allow all
        }
    };

    //app.use(cors(corsOptions)); //Enable CORS
    //app.options('*', cors(corsOptions)); // Enable CORS Pre-Flight

    app.use(function (req, res, next) {
        var routes = ['/api/login','/api/register','/','/app'];
        if (routes.indexOf(req.url) != -1 || '/api'.indexOf(req.url)== -1) {
            next();
        } else {
            jwt({secret: 'server secret'})(req, res, function(err,req,res){
                if (err.name === 'UnauthorizedError') {
                    res.status(401).send({status: 'error', message: 'Not a valid Token'});
                } else {
                    res.status(412).send({status: 'error', message: 'Not a valid Token'});
                }
            });
        }
    });

    // user routes
    app.use('/api', apiController);

    // application route(index.html)
    app.get('/', function (req, res) {
        res.sendfile(appRoot + '/client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    app.get('*', function (req, res) {
        res.sendfile(appRoot+ '/client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    //app.get('/app/:name', function(req,res) {
    //    var name = req.params.name;
    //    res.sendfile(appRoot + '/client/app/' + name);
    //});

    //  Error Route Handling

    app.use(function (err, req, res, next) {
        // treat as 404
        if (err.message
            && (~err.message.indexOf('not found')
            || (~err.message.indexOf('Cast to ObjectId failed')))) {
            return next();
        }

        console.error(err.stack);

        if (err.stack.includes('ValidationError')) {
            res.status(422).render('422', {error: err.stack});
            return;
        }

        // error page
        res.status(500).render('500', {error: err.stack});
    });

    // assume 404 since no middleware responded
    app.use(function (req, res) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
};
