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

/** Building a route handler */
function routes() {
  this.namespace = '/api';

  // defining a route handler for GET /api/keywords
  this.get('/competitors', (schema, request) => {
    // Random errors
    // if (Math.random() > 0.5) {
    //   return new Response(500, {}, { errors: ['Server Error'] });
    // } else {
      let keyword_id = request.queryParams.keyword_id;
      let competitor_id = request.queryParams.competitor;

      const keywordCompetitorsList = schema.competitors.find(keyword_id);
      let competitorData =
        keywordCompetitorsList.competitor_results[competitor_id];

      return {
        data: {
          type: 'competitor',
          id: competitor_id,
          attributes: {
            rank: competitorData.rank,
            rank_type: competitorData.rank_type,
          },
        },
      };
    // }
  });

  // defining a route handler for GET /api/keywords
  this.get('/keywords', (schema, request) => {
    // Random errors
    // if (Math.random() > 0.5) {
    //   return new Response(500, {}, { errors: ['Server Error'] });
    // } else {
      const competitorsList = schema.competitors.all();

      let mutatedArray = schema.keywords.all().models.map((model) => {
        let competitors = Object.keys(
          competitorsList.models.find(
            (competitor) => competitor.id === model.id,
          ).competitor_results,
        );
        return {
          type: 'keyword',
          id: model.id,
          attributes: {
            query: model.query,
            last_processed_at: model.last_processed_at,
            position: model.position,
            results_count: model.results_count,
            competitors,
          },
        };
      });
      return { data: mutatedArray };
    // }
  });
}
