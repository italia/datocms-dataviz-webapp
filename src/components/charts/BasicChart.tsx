import ReactEcharts from "echarts-for-react";
import { FieldDataType } from "../../sharedTypes";
import { useRef } from "react";
import { saveAs } from "file-saver";

type ChartPropsType = {
  data: FieldDataType;
};

function BasicChart({ data }: ChartPropsType, id: string) {
  const refCanvas = useRef<ReactEcharts>();
  const axis =
    data.config.direction === "vertical"
      ? {
          dataZoom: [
            {
              show: data.config.zoom !== "none",
              realtime: true,
              start: 0,
              end: 100,
              xAxisIndex: [0, 1],
              type: data.config.zoom === "slider" ? "slider" : "inside",
            },
          ],
          xAxis: {
            type: "category",
            data: data.dataSource.categories,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              rotate: 30,
              inside: false,
            },
          },
          yAxis: {
            type: "value",
            axisTick: {
              alignWithLabel: true,
            },
          },
        }
      : {
          dataZoom: [
            {
              show: data.config.zoom !== "none",
              realtime: true,
              start: 0,
              end: 100,
              yAxisIndex: [0, 1],
              type: data.config.zoom === "slider" ? "slider" : "inside",
            },
          ],
          yAxis: {
            type: "category",
            data: data.dataSource.categories,
            axisTick: {
              alignWithLabel: true,
            },
          },
          xAxis: {
            type: "value",
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
    backgroundColor: "#F2F7FC",
    color: data.config.colors,
    ...axis,
    series: data.dataSource.series.map((serie) => {
      return {
        ...serie,
        smooth: data.config.smooth,
      };
    }),
    textStyle: {
      fontFamily: "Titillium Web, sans-serif",
      fontWeight: "bold",
      fontSize: 12,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: data.config.axisPointer,
      },
      show: data.config.tooltip,
    },
    legend: {
      left: "center",
      top: "top",
      show: data.config.legend,
    },
    // toolbox: {
    //   show: data.config.toolbox,
    //   left: 'right',
    //   top: 'top',
    //   feature: {
    //     // dataView: {},
    //     // restore: {},
    //     saveAsImage: {},
    //   },
    // },
  };

  async function downLoadImage(element: any, id: string) {
    const echartInstance = element.getEchartsInstance();
    const base64DataUrl = echartInstance.getDataURL();

    try {
      const blob = await fetch(base64DataUrl).then((res) => res.blob());
      saveAs(blob, `chart-${"" + Date.now()}.png`);
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <>
      <ReactEcharts
        option={options}
        ref={refCanvas}
        style={{
          width: data.config.w,
          height: data.config.h,
          maxWidth: "100%",
        }}
      />
      <button onClick={() => downLoadImage(refCanvas.current, id)}>
        Download
      </button>
    </>
  );
}

export default BasicChart;
