'use strict';

/**
 * download-cv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::download-cv.download-cv');
