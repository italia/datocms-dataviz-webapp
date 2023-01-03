import { useMachine } from '@xstate/react';
import { useState } from 'react';
import { Canvas, Button, SwitchField } from 'datocms-react-ui';
// import Papa from 'papaparse';
import { transposeData } from './lib/utils';
import stateMachine from './lib/stateMachine';
import CSVUpload from './components/CSVUpload';
import DataTable from './components/DataTable';
import RenderChart from './components/RenderChart';
import SelectChart from './components/SelectChart';

function App() {
  const [state, send] = useMachine(stateMachine);
  const [data, setData] = useState(null);
  const [chart, setChart] = useState('');
  const [options, setOptions] = useState(null);

  function reset() {
    setData(null);
  }
  function transpose() {
    reset();
    const transposed = transposeData(data);
    setData(transposed);
  }

  return (
    <div className="w-full bg-blue-600">
      <div className="text-white">STATE: {state?.value as string}</div>
      <div className="flex w-full">
        <div className="flex-none flex-col bg-gray-50 items-start justify-start">
          <div>
            <Button onClick={() => send('UPLOAD')}>UPLOAD DATA</Button>
          </div>
          <div>
            <Button onClick={() => send('GEN')}>GENERATE DATA</Button>
          </div>
          <div>
            <Button onClick={() => send('TRANSFORM')}>TRANSFORM SOURCE</Button>
          </div>
          {data && (
            <>
              <div>
                <Button onClick={() => send('CHOOSE')}>CHOOSE CHART</Button>
              </div>
              {chart && (
                <div>
                  <Button onClick={() => send('SETTINGS')}>
                    CHART OPTIONS
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
        <div className="w-full border-2 px-4  overflow-y-scroll bg-white min-h-scr">
          {state.matches('upload') && (
            <div>
              <h1 className="title">Upload CSV</h1>
              <CSVUpload setData={(d) => setData(d)} />
            </div>
          )}
          {state.matches('generate') && (
            <div>
              <h1 className="title">Generate Data</h1>
            </div>
          )}
          {state.matches('transform') && (
            <div>
              <h1 className="title">Transform Source</h1>
            </div>
          )}
          {state.matches('choose') && (
            <div>
              <h1 className="title">Choose Chart</h1>
              <SelectChart setChart={setChart} chart={chart} />
            </div>
          )}
          {state.matches('settings') && (
            <div>
              <h1 className="title">Chart Options</h1>
            </div>
          )}

          {data && data[0] && (
            <>
              <hr />
              <div className="my-10 bg-gray-50 shadow-lg overflow-auto text-center ">
                <h1 className="title">Data</h1>
                <center>
                  <DataTable data={data} reset={reset} transpose={transpose} />
                </center>
              </div>
              <hr />
              {chart && (
                <div className="my-10 bg-gray-50 shadow-lg  w-full text-center">
                  {chart}
                  <center>
                    <RenderChart chart={chart} data={data} options={options} />
                  </center>
                </div>
              )}
              <hr />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
