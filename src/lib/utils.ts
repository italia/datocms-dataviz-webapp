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
