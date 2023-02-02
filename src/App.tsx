import { useMachine } from '@xstate/react';
import { useState, useEffect } from 'react';
// import { Canvas, Button, SwitchField } from 'datocms-react-ui';
import { getAvailablePalettes, getPalette, transposeData } from './lib/utils';
import stateMachine from './lib/stateMachine';
import DataTable from './components/DataTable';
import RenderChart from './components/RenderChart';
import Nav from './components/Nav';
import TransformSource from './components/TransformSource';
import { sampleData } from './lib/constants';
import useStoreState from './lib/store';

function App() {
  const [state, send] = useMachine(stateMachine);
  const config = useStoreState((state) => state.config);
  const setConfig = useStoreState((state) => state.setConfig);
  const chart = useStoreState((state) => state.chart);
  const setChart = useStoreState((state) => state.setChart);
  const data = useStoreState((state) => state.data);
  const setData = useStoreState((state) => state.setData);
  const rawData = useStoreState((state) => state.rawData);
  const setRawData = useStoreState((state) => state.setRawData);

  function reset() {
    setData(null);
  }
  function transpose() {
    setData(null);
    const transposed = transposeData(data);
    setChart('');
    setTimeout(() => {
      handleChangeData(transposed);
    }, 300);
  }

  function handleChangeData(d) {
    if (!config.palette) {
      const numSeries = d.length - 1;
      let palette = getAvailablePalettes(numSeries)[0];
      config.palette = palette;
      config.colors = getPalette(palette);
      setConfig(config);
    }
    setChart('');
    setData(d);
    send('CHOOSE');
  }
  const stateValue = state.value as string;

  return (
    <div className="w-full bg-blue-600">
      <div className="text-white uppercase">
        STATE: {state?.value as string}
      </div>
      <div className="w-full xl:flex  justify-center">
        <Nav
          config={config || sampleData.config}
          data={data}
          send={send}
          setData={handleChangeData}
          state={state}
          chart={chart}
          setChart={setChart}
          setRawData={setRawData}
          setConfig={setConfig}
        />
        <div className="w-full border-2 overflow-y-scroll bg-white min-h-scr">
          {stateValue === 'transform' && rawData && (
            <div className="bg-gray-50 w-full">
              <TransformSource setData={setData} rawData={rawData} />
            </div>
          )}

          {data && data[0] && (
            <div className="w-full bg-gray-50">
              <hr />
              <div className="w-full bg-white xl:m-5 xl:shadow-lg">
                <center>
                  <RenderChart chart={chart} data={data} config={config} />
                </center>
              </div>
              <hr />
              <div className="overflow-auto w-full bg-white xl:m-5 xl:shadow-lg">
                <h1 className="title">Data</h1>
                <center>
                  <DataTable data={data} reset={reset} transpose={transpose} />
                </center>
              </div>
              <hr />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
