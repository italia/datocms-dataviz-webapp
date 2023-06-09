import type { FieldDataType } from "sharedTypes";

const sample = ["#5c6f82", "#BFDFFF", "#207BD6", "#004D99", "#6AAAEB"];
const blue = ["#4392E0", "#207AD5", "#0066CC", "#004D99", "#004080", "#003366"];

export const palettes = {
  divergente: [
    "#003366",
    "#004D99",
    "#0066CC",
    "#207AD5",
    "#4392E0",
    "#D65C70",
    "#CC334D",
    "#B32D43",
    "#992639",
    "#7A1F2E",
  ],
  divergente_b: [
    "#003366",
    "#004D99",
    "#0066CC",
    "#207AD5",
    "#4392E0",
    "#D48D22",
    "#CC7A00",
    "#B36B00",
    "#995C00",
    "#804D00",
  ],
  categorica: [
    "#0066CC",
    "#CC7A00",
    "#05615E",
    "#992639",
    "#4392E0",
    "#661A26",
    "#09AFA9",
    "#2F475E",
    "#B32D43",
    "#737373",
  ],

  _1_a: ["#0066CC"],
  _1_b: ["#004080"],
  _1_c: ["#2F475E"],

  _2_a: ["#0066CC", "#CC7A00"],
  _2_b: ["#0066CC", "#B32D43"],
  _2_c: ["#05615E", "#CC7A00"],
  _2_d: ["#05615E", "#B32D43"],
  _2_e: ["#CC7A00", "#09AFA9"],

  _3_a: ["#0066CC", "#B32D43", "#CC7A00"],
  _3_b: ["#09AFA9", "#4392E0", "#CC7A00"],
  _3_c: ["#2F475E", "#4392E0", "#CC7A00"],

  _4_a: ["#0066CC", "#4392E0", "#CC7A00", "#B32D43"],
  _4_b: ["#2F475E", "#737373", "#B32D43", "#CC7A00"],
  _4_c: ["#2F475E", "#09AFA9", "#4392E0", "#B32D43"],

  _5_a: ["#0066CC", "#4392E0", "#CC7A00", "#B32D43", "#737373"],
  _5_b: ["#05615E", "#09AFA9", "4392E0", "#CC7A00", "#B32D43"],
};

export const fixedSettings = {
  axis: "#768594",
  grids: "#768594",
  backgroundColor: "#F2F7FC",
  text: {
    dark: "#1A1A1A",
    light: "#5C6F82",
    accent: "#0066CC",
  },
};

export const sampleData: FieldDataType = {
  config: {
    titles: [],
    palette: "",
    colors: [],
    direction: "vertical",
    h: 500,
    w: 900,
    smooth: false,
    tooltip: true,
    legend: true,
    toolbox: true,
    zoom: "none",
    axisPointer: "line",
  },
  dataSource: {
    categories: [],
    series: [
      {
        type: "bar",
        name: "2015",
        data: [89.3, 92.1, 24.4, 85.4],
      },
      {
        type: "bar",
        name: "2016",
        data: [95.8, 89.4, 91.2, 76.9],
      },
      {
        type: "bar",
        name: "2017",
        data: [32.7, 83.1, 42.5, 38.1],
      },
    ],
  },
};
