'use strict';

const logger = require('../utils/logger');

const start = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'Welcome to my bookmark assignment',
      description: 'This application allows you to manage your bookmarks.You may group them and share with others.',
    };
    response.render('start', viewData);
  },
};

module.exports = start;
