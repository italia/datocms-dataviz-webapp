import { useMachine } from '@xstate/react';
import { useState, useEffect } from 'react';
// import { Canvas, Button, SwitchField } from 'datocms-react-ui';
import { transposeData } from './lib/utils';
import stateMachine from './lib/stateMachine';
import DataTable from './components/DataTable';
import RenderChart from './components/RenderChart';
import Nav from './components/Nav';
import TransformSource from './components/TransformSource';

function App() {
  const [state, send] = useMachine(stateMachine);
  const [data, setData] = useState(null);
  const [chart, setChart] = useState('');
  const [options, setOptions] = useState(null);
  const [rawData, setRawData] = useState(null);

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
      <div className="flex w-full">
        <Nav
          data={data}
          send={send}
          setData={handleChangeData}
          state={state}
          chart={chart}
          setChart={setChart}
          setRawData={setRawData}
        />
        <div className="w-full border-2 px-4  overflow-y-scroll bg-white min-h-scr">
          {stateValue === 'transform' && rawData && (
            <div className="bg-gray-50 w-full">
              <TransformSource setData={setData} rawData={rawData} />
            </div>
          )}

          {data && data[0] && (
            <div className="bg-gray-50">
              <hr />
              <div className="m-5 bg-white shadow-lg  w-full text-center">
                <center>
                  <RenderChart chart={chart} data={data} options={options} />
                </center>
              </div>
              <hr />
              <div className="m-5 bg-white shadow-lg overflow-auto text-center ">
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
