const ical = require('ical');
const moment = require('moment');
const { values } = require('lodash');
const { calendars } = require('../configuration');
const formatEvent = require('./format-event');
const { starting, ending } = require('./filters');

module.exports = (startDate = new Date(), endDate, withHTML = true) => {
  return new Promise((resolve, reject) => {
    ical.fromURL(calendars[0], {}, (error, data) => {
      if (error) { return reject(error); }
      if (!endDate) { endDate = moment(startDate).add(1, 'days').toDate(); }

      const events = values(data)
                       .filter(starting(startDate))
                       .filter(ending(endDate))
                       .map(formatEvent(withHTML));

      resolve(events);

    });
  });
};
