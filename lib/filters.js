const moment = require('moment');

const starting = (date) => {
  return (event) => {
    return event.start > moment(date).startOf('day').toDate();
  };
};

const ending = (date) => {
  return (event) => {
    return event.end < moment(date).endOf('day').toDate();
  };
};

module.exports = {
  starting,
  ending,
};
