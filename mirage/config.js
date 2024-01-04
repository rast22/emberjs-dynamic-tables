import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    models: {
      ...discoverEmberDataModels(config.store),
    },
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = '/api';
  this.get('/keywords', (schema, request) => {
    const page = parseInt(request.queryParams.page, 10) || 1;
    const perPage = parseInt(request.queryParams.perPage, 10) || 10;

    const totalItems = schema.keywords.all().length;
    const paginatedData = schema.keywords.all().slice((page - 1) * perPage, page * perPage);

    return {
      data: paginatedData.models.map(model => {
        return {
          type: 'keyword',
          id: model.id,
          attributes: {
            query: model.query,
            last_processed_at: model.last_processed_at,
            position: model.position,
            results_count: model.results_count,
          },
        };
      }),
      meta: {
        totalItems: totalItems,
        perPage: perPage,
        page: page,
        totalPages: Math.ceil(totalItems / perPage),
      },
    };
  });
}
