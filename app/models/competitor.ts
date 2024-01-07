import Model, { attr, belongsTo } from '@ember-data/model';
import type { ICompetitor } from 'ICompetitor';

export default class CompetitorDataModel extends Model {
  // @ts-ignore
  @attr('number') declare rank: number | null;
  @attr('string') declare rank_type: string | null;
}
