'use strict';

/**
 * post-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-type.post-type');
