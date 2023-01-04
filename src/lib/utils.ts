import { sampleData } from '../lib/constants';

export function transposeData(data) {
  return data[0].map((_, colIndex) => data.map((row) => row[colIndex]));
}

export function toDataSource(parsed) {
  const categories = parsed[0].slice(1) || [];
  const series = parsed.slice(1).map((row) => {
    const [name, ...data] = row;
    return {
      type: 'bar',
      name,
      data,
    };
  });
  const dataSource = {
    categories,
    series,
  };
  console.log('dataSource', dataSource);

  return { ...sampleData, dataSource };
}

export function getBarValues(data) {
  return {
    ...data,
    dataSource: {
      categories: data.dataSource.categories,
      series: data.dataSource.series.map((s) => {
        return { ...s, type: 'bar' };
      }),
    },
  };
}

export function getLineValues(data) {
  return {
    ...data,
    dataSource: {
      categories: data.dataSource.categories,
      series: data.dataSource.series.map((s) => {
        return { ...s, type: 'line' };
      }),
    },
  };
}

export function getPieValues(data) {
  return {
    ...data,
    dataSource: {
      categories: [],
      series: {
        type: 'pie',
        radius: ['50%', '85%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'inside',
        },
        labelLine: {
          show: false,
        },
        data: data.dataSource.series.map((row) => {
          return { name: row.name, value: row.data[0] };
        }),
      },
    },
  };
}

//create a functions to generate a series of random numbers between a range of values
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//create a functions  to move a number in a range of values positive and negative
export function moveNumber(number, min, max) {
  const move = getRandomInt(min, max);
  return number + move;
}
//create a function to fill an array of a given length with random numbers
export function fillArray(length, min, max) {
  return Array.from({ length }, () => getRandomInt(min, max));
}
//create a function to generate a random array of arrays
export function generateRandomData(length, min, max) {
  return Array.from({ length }, () => fillArray(length, min, max));
}

// create a function to generate words from a string of words
export function generateWords(words, length) {
  const wordsArray = words.split(' ');
  return Array.from(
    { length },
    () => wordsArray[getRandomInt(0, wordsArray.length - 1)]
  ).join(' ');
}



//return a letter of the alphabet
export function getLetter(index) {
  return String.fromCharCode(65 + index);
}

//generate a string given the the length from random letters of the alphabet
export function generateCategories(length) {
  return Array.from({ length }, (_, index) => getLetter(getRandomInt(0, 25)));
}


export function generateItems(prefix, length) {
  return Array.from({ length }, (_, index) => `${prefix} ${index + 1}`);
}