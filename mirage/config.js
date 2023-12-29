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
  this.get('/keywords', async (schema, request) => {
    return schema.keywords.all();
  });
}
