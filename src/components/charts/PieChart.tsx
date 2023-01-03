import ReactEcharts from 'echarts-for-react';
import { FieldDataType } from 'sharedTypes';

type ChartPropsType = {
  data: FieldDataType;
};

function PieChart({ data }: ChartPropsType) {
  const options = {
    title: {
      text: data.config?.titles?.join('\n') || 'PIE CHART',
      left: 'center',
      top: 'center',
    },
    color: data.config.colors,
    series: data.dataSource.series,
    textStyle: {
      //  fontFamily: 'Roboto Mono',
      fontWeight: 'bold',
      fontSize: 12,
    },
    tooltip: {},
    legend: {
      left: 'center',
      top: 'top',
    },
    toolbox: {
      show: true,
      left: 'right',
      top: 'top',
      feature: {
        // dataView: {},
        // restore: {},
        saveAsImage: {},
      },
    },
  };
  return (
    <ReactEcharts
      option={options}
      style={{
        width: data.config.w,
        height: data.config.h,
        maxWidth: '100%',
      }}
    />
  );
}

export default PieChart;
