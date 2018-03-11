'use strict';

const logger = require('../utils/logger');

const about = {
  index(request, response) {
    logger.info('about rendering');
    const viewData = {
      title: 'About My Assignment',
      contact: 'Developed by Jonathan Walshe, Waterford Institute of Technology, Waterford City.',
    };
    response.render('about', viewData);
  },
};

module.exports = about;
