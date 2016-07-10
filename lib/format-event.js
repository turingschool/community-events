const moment = require('moment');
const marked = require('marked');
const toHTML = require('./to-html');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

module.exports = (withHTML = true) => {
  return (event) => {
    const formattedEvent = {
      title: event.summary,
      date: moment(event.start).format('dddd, MMMM Do, YYYY'),
      start: moment(event.start).format('h:mma'),
      end: moment(event.end).format('h:mma'),
      location: event.location,
      description: marked(event.description),
    };

    if (withHTML) {
      formattedEvent.asHTML = toHTML(formattedEvent);
    }

    return formattedEvent;
  };
};
