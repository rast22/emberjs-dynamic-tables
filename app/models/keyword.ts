// app/models/keyword.ts

import Model, { attr } from '@ember-data/model';

export default class KeywordModel extends Model {
  @attr('string') declare query: string;
  @attr('date') declare last_processed_at: Date;
  @attr('number', { defaultValue: null }) declare position: number | null;
  @attr('number') declare results_count: number;
}
