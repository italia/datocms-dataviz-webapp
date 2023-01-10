import ReactEcharts from 'echarts-for-react';
import { FieldDataType } from 'sharedTypes';

type ChartPropsType = {
  data: FieldDataType;
};

function BasicChart({ data }: ChartPropsType) {
  const axis =
    data.config.direction === 'vertical'
      ? {
          dataZoom: [
            {
              show: data.config.zoom !== 'none',
              realtime: true,
              start: 0,
              end: 100,
              xAxisIndex: [0, 1],
              type: data.config.zoom === 'slider' ? 'slider' : 'inside',
            },
          ],
          xAxis: {
            type: 'category',
            data: data.dataSource.categories,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              rotate: 30,
              inside: false,
              // margin: 8,
            },
          },
          yAxis: {
            type: 'value',
            axisTick: {
              alignWithLabel: true,
            },
          },
        }
      : {
          dataZoom: [
            {
              show: data.config.zoom !== 'none',
              realtime: true,
              start: 0,
              end: 100,
              yAxisIndex: [0, 1],
              type: data.config.zoom === 'slider' ? 'slider' : 'inside',
            },
          ],
          yAxis: {
            type: 'category',
            data: data.dataSource.categories,
            axisTick: {
              alignWithLabel: true,
            },
          },
          xAxis: {
            type: 'value',
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              rotate: 90,
              inside: true,
              margin: 0,
            },
          },
        };

  const options = {
    color: data.config.colors,
    ...axis,
    series: data.dataSource.series.map((serie) => {
      return {
        ...serie,
        smooth: data.config.smooth,
      };
    }),
    textStyle: {
      fontFamily: 'Titillium Web, sans-serif',
      fontWeight: 'bold',
      fontSize: 12,
    },
    tooltip: {
      // trigger: 'axis',
      axisPointer: {
        type: data.config.axisPointer,
      },
      show: data.config.tooltip,
    },
    legend: {
      left: 'center',
      top: 'top',
      show: data.config.legend,
    },
    toolbox: {
      show: data.config.toolbox,
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

export default BasicChart;
