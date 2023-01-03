export type SerieType = {
  name: string;
  data: number[];
  type: string;
};

export type FieldDataType = {
  config: {
    colors: string[];
    direction: string;
    h: number;
    w: number;
    kind: string;
    serieKind: string;
    titles: string[];
  };
  dataSource: {
    categories: string[];
    series: SerieType[];
  };
};
