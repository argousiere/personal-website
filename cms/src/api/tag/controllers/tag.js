'use strict';

/**
 *  tag controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tag.tag', ({ strapi }) => ({
  async findOne(ctx) {
    const { name } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.db.query('api::tag.tag').findOne({ where: { name } });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  }
}));
