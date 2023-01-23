import type { FieldDataType } from 'sharedTypes';
/*
sample: ['#5c6f82', '#BFDFFF', '#207BD6', '#004D99', '#6AAAEB'],
  blue: ['#4392E0', '#207AD5', '#0066CC', '#004D99', '#004080', '#003366'],
*/
export const palettes = {
  divergente: [
    '#003366',
    '#004D99',
    '#0066CC',
    '#207AD5',
    '#4392E0',
    '#D65C70',
    '#CC334D',
    '#B32D43',
    '#992639',
    '#7A1F2E',
  ],
  divergente_bis: [
    '#003366',
    '#004D99',
    '#0066CC',
    '#207AD5',
    '#4392E0',
    '#D48D22',
    '#CC7A00',
    '#B36B00',
    '#995C00',
    '#804D00',
  ],
  categorica: [
    '#004080',
    '#992639',
    '#077F7B',
    '#207AD5',
    '#CC7A00',
    '#661A26',
    '#09AFA9',
    '#2F475E',
    '#B32D43',
    '#525252',
  ],
};

export const sampleData: FieldDataType = {
  config: {
    titles: [],
    palette: 'categorica',
    colors: palettes.categorica,
    direction: 'vertical',
    h: 500,
    w: 900,
    // kind: 'xy',
    // serieKind: 'bar',
    smooth: false,
    tooltip: true,
    legend: true,
    toolbox: true,
    zoom: 'none',
    axisPointer: 'line',
  },
  dataSource: {
    categories: [],
    series: [
      {
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1, 24.4, 85.4],
      },
      {
        type: 'bar',
        name: '2016',
        data: [95.8, 89.4, 91.2, 76.9],
      },
      {
        type: 'bar',
        name: '2017',
        data: [32.7, 83.1, 42.5, 38.1],
      },
    ],
  },
};
