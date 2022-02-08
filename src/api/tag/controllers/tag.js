'use strict';

/**
 *  tag controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tag.tag', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.service('api::tag.tag').findOne({ slug, query });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
