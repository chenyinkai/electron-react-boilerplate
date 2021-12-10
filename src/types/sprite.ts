export type Coordinates = {
  [propName: string]: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

type Properties = {
  width: number;
  height: number;
};

export interface SpriteResult {
  coordinates: Coordinates;
  properties: Properties;
  image: Buffer;
}
