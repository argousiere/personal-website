'use strict';

/**
 * post router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      path: '/posts',
      method: 'GET',
      handler: 'post.find'
    },
    {
      path: '/posts/:slug',
      method: 'GET',
      handler: 'post.findOne',
      config: {
        policies: []
      }
    },
  ]
};
