'use strict';

/**
 * tag router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      path: '/tags',
      method: 'GET',
      handler: 'tag.find'
    },
    {
      path: '/tags/:name',
      method: 'GET',
      handler: 'tag.findOne',
      config: {
        policies: []
      }
    },
  ]
};
