const { template } = require('lodash');
const { minify } = require('uglify-js');
const express = require('express');
const cors = require('cors');
const getFile = require('./lib/get-file');
const getEvents = require('./lib/get-events');

const app = express();
const port = process.env.PORT || 3000;

const clientScript = getFile('./templates/script.js.template')
                       .then(t => template(t))
                       .catch(e => console.log(e));

app.use(cors());
app.use(express.static('static'));

app.get('/events', (request, response) => {
  const asHTML = request.query.html || false;
  let { start, end } = request.query;

  console.log();

  if (start) { start = new Date(start); }
  if (end) { end = new Date(end); }

  getEvents(start, end, asHTML).then(events => {
    response.send({ events });
  });
});

app.get('/script.js', (request, response) => {
  const { protocol } = request;
  const { min, target = 'community-events' } = request.query;
  clientScript.then(scriptTemplate => {
    const script = scriptTemplate({
      target,
      host: `https://${request.get('host')}`,
    });

    if (min) {
      response.send(minify(script, {fromString: true}).code);
    }
    else {
      response.send(script);
    }
  });
});

app.listen(port, () => {
  console.log(`Application is running on Port ${port}`);
});
