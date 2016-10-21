/**
 * Created by sohel on 10/22/16.
 */


var koa = require('koa');
var app = koa ();

app.use(function *() {
    this.body = "Hello world";
});

app.listen(8000);