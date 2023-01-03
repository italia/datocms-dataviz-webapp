import { useEffect, useState } from 'react';
import BasicChart from './charts/BasicChart';
import PieChart from './charts/PieChart';
import { toDataSource, getPieValues, getLineValues } from '../lib/utils';

function RenderChart({ chart, data, options }) {
  function transformData(data) {
    if (!data) return null;
    return toDataSource(data);
    // d = d.dataSource.series.map((s) => {
    //   s.type = chart === 'bar' ? 'bar' : 'line';
    //   return s;
    // });
    // return d;
  }
  const [currentValue, setCurrentValue] = useState(transformData(data));
  useEffect(() => {
    console.log('CHANGE', chart);
    if (chart && data) {
      setCurrentValue(transformData(data));
    }
  }, [chart, data]);

  return (
    <div className="w-full min-height-[800px]">
      {currentValue?.dataSource && (
        <div>
          {chart === 'bar' && <BasicChart data={currentValue} />}
          {chart === 'line' && (
            <BasicChart data={getLineValues(currentValue)} />
          )}
          {chart === 'pie' && <PieChart data={getPieValues(currentValue)} />}
        </div>
      )}
    </div>
  );
}

export default RenderChart;
