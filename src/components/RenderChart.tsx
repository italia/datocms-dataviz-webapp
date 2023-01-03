import { useEffect, useState } from 'react';
import BasicChart from './charts/BasicChart';
import PieChart from './charts/PieChart';
import { toDataSource, getPieValues } from '../lib/utils';

function RenderChart({ chart, data, options }) {
  const [currentValue, setCurrentValue] = useState(toDataSource(data));
  useEffect(() => {
    console.log('CHART', chart);
    if (chart && data) {
      setCurrentValue(toDataSource(data));
    } else {
      setCurrentValue(null);
    }
  }, [chart, data]);

  return (
    <div className="w-full">
      {currentValue?.dataSource && (
        <div>
          {chart === 'bar' && <BasicChart data={currentValue} />}
          {chart === 'line' && <BasicChart data={currentValue} />}
          {chart === 'pie' && <PieChart data={getPieValues(currentValue)} />}
        </div>
      )}
    </div>
  );
}

export default RenderChart;
