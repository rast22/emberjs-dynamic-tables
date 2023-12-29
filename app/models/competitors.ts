import Model, { attr, belongsTo } from '@ember-data/model';
import type { ICompetitor } from 'ICompetitor';

export default class CompetitorsDataModel extends Model {
  @attr() declare competitor_results: Record<string, ICompetitor>;
}
