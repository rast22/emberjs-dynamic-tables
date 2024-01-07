// app/models/keyword.ts

import Model, { attr } from '@ember-data/model';

export default class KeywordModel extends Model {
  @attr('string') declare query: string;
  @attr('string') declare last_processed_at: string;
  @attr('number', { defaultValue: null }) declare position: number | null;
  @attr('number') declare results_count: number;
  @attr('array') declare competitors: Array<string>;
  @attr('number') declare selected_competitor?: number;
}
