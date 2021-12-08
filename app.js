const express          = require('express');
const mustacheExpress  = require('mustache-express');
const path             = require('path');
const woodlot          = require('./routes/log');
const cookieSession    = require('cookie-session')
const logger           = woodlot.logger
const middlewareLogger = woodlot.middlewareLogger

var routes      = require('./routes/index');
var healthCheck = require('./routes/health')
var oauth       = require('./routes/oauth')
const recaptcha = require('./routes/google-recaptcha')

var app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.json({type: '*/*'}))
app.use(cookieSession({signed:false, maxAge: 365 * 24 * 60 * 60 * 1000})) // 1 year
//app.use(middlewareLogger);

app.use('/', routes);
app.use('/health', healthCheck)
app.use('/oauth', oauth)
app.use('/recaptcha', recaptcha)


const favicon = new Buffer.from('AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREQAAAAAAEAAAEAAAAAEAAAABAAAAEAAAAAAQAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD8HwAA++8AAPf3AADv+wAA7/sAAP//AAD//wAA+98AAP//AAD//wAA//8AAP//AAD//wAA', 'base64');
 app.get("/favicon.ico", function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Length', favicon.length);
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader("Cache-Control", "public, max-age=2592000");                // expiers after a month
  res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
  res.end(favicon);
 });

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);

        var error = {
            error: {
                message: err.message,
                error: err
            }
        }

        res.send(JSON.stringify(error));
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    var error = {
        error: {
            message: err.message,
            error: err
        }
    }
    res.send(JSON.stringify(error));
});


module.exports = app;
