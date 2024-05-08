export type TrekkingItem = {
  readonly name: string,
  readonly type?: string,
  readonly features?: string[];
  readonly brands?: string[];
  readonly weight?: string;
  readonly size?: string;
  readonly description?: string;
  readonly temperatureRating?: string
}
