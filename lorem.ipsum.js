const express = require('express');
const mustacheExpress = require('mustache-express');
const application = express();
const loremIpsum = require('lorem-ipsum');


application.engine('mustache', mustacheExpress());
application.set('views', './views');
application.set('view engine', 'mustache');


application.get('/', function (request, response) {
    let para = loremIpsum({
        count: 3,
        units: "paragraphs"
    });
    response.render("hello", {content: para});
});

application.listen(3000);