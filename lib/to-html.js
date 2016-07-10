const { template } = require('lodash');

const eventTemplate = [
  '<article class="community-event">',
    '<h3>${ title }</h3>',
    '<p class="community-event__date">',
      '<time>${ date }</time>: <time>${ start }</time> - <time>${ end }</time>',
    '<p>',
    '<% if(location) \'<p class="community-event__location">${ location }</p>\' %>',
    '<% if(description) \'<p class="community-event__description">${ description }</p>\' %>',
  '</article>',
].join('');

module.exports = template(eventTemplate);
