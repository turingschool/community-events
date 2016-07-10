const moment = require('moment');

const starting = (date) => {
  const range = moment(date).startOf('day').toDate();
  return ({ start }) => start >= range;
};

const ending = (date) => {
  const range = moment(date).endOf('day').toDate();
  return ({ start }) => start <= range;
};

module.exports = {
  starting,
  ending,
};
