export interface ICompetitor {
  last_day_change: number;
  last_month_change: number;
  last_week_change: number;
  position_change_cache: Array<any>;
  position_featured_snippet: number | null;
  position_knowledge_panel: number | null;
  position_local_pack: number | null;
  position_organic: number | null;
  position_places_images: number | null;
  rank: number | null;
  rank_type: string | null;
}
