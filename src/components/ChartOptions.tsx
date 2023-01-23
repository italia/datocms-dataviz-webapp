import { Button } from 'datocms-react-ui';
import { useForm } from 'react-hook-form';
import { palettes } from '../lib/constants';

function ChartOptions({ config, setConfig, chart }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: config,
  });

  const fields = [
    {
      label: 'Chart palette',
      name: 'palette',
      type: 'select',
      options: Object.keys(palettes),
      otherProps: {},
      required: false,
      chartType: ['bar', 'line', 'pie', 'geo'],
      defaultValue: config.palette,
    },
    {
      label: 'Chart Height',
      name: 'h',
      type: 'number',
      options: [],
      otherProps: {
        step: 10,
      },
      required: false,
      chartType: ['bar', 'line', 'pie', 'geo'],
    },
    {
      label: 'Chart Width',
      name: 'w',
      type: 'number',
      options: [],
      otherProps: {
        step: 10,
      },
      required: false,
      chartType: ['bar', 'line', 'pie', 'geo'],
    },
    {
      label: 'Show Legend',
      name: 'legend',
      type: 'checkbox',
      options: [],
      required: false,
      chartType: ['bar', 'line', 'pie', 'geo'],
      otherProps: {},
    },
    {
      label: 'Show tooltip',
      name: 'tooltip',
      type: 'checkbox',
      options: [],
      required: false,
      chartType: ['bar', 'line', 'pie', 'geo'],
      otherProps: {},
    },
    {
      label: 'Cross Pointer',
      name: 'axisPointer',
      type: 'select',
      options: ['line', 'cross', 'shadow', 'none'],
      required: false,
      chartType: ['bar', 'line'],
      otherProps: {},
    },
    {
      label: 'Data Zoom',
      name: 'zoom',
      type: 'select',
      options: ['none', 'inside', 'slider'],
      required: false,
      chartType: ['bar', 'line', 'pie', 'geo'],
      otherProps: {},
    },
    {
      label: 'Direction',
      name: 'direction',
      type: 'select',
      options: ['vertical', 'horizontal'],
      otherProps: {},
      required: false,
      placeholder: 'Chart Direction',
      chartType: ['bar', 'line'],
    },
    {
      label: 'Smooth Lines',
      name: 'smooth',
      type: 'checkbox',
      options: [],
      required: false,
      chartType: ['line'],
      otherProps: {},
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    const { h, w, palette, ...rest } = data;
    const colors = palettes[palette];
    console.log(palette, 'colors', colors);
    const newConfig = { h: Number(h), w: Number(w), ...rest, colors };
    console.log('newConfig', newConfig);
    setConfig(newConfig);
  };
  if (!chart) {
    return <div my-10>Please choose a chart type</div>;
  }
  return (
    <div className="w-full my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields
          .filter((field) => field.chartType.includes(chart))
          .map((field) => {
            if (['text', 'email', 'number'].includes(field.type)) {
              return (
                <div className="my-2 grid grid-cols-2 gap-2" key={field.name}>
                  <label>{field.label}</label>
                  <input
                    type={field.type}
                    {...register(field.name, { required: field.required })}
                    {...field.otherProps}
                  />
                  {errors[field.name] && <span>This field is required</span>}
                </div>
              );
            } else if (['checkbox'].includes(field.type)) {
              return (
                <div className="my-2 grid grid-cols-2 gap-2" key={field.name}>
                  <label>{field.label}</label>
                  <div className="px-4">
                    <input
                      type="checkbox"
                      {...register(field.name, { required: field.required })}
                    />
                  </div>
                  {errors[field.name] && <span>This field is required</span>}
                </div>
              );
            } else if (['select'].includes(field.type)) {
              return (
                <div className="my-2 grid grid-cols-2 gap-2" key={field.name}>
                  <label>{field.label}</label>
                  <select
                    {...register(field.name, { required: field.required })}
                  >
                    {field.options.map((option) => {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                  {errors[field.name] && <span>This field is required</span>}
                </div>
              );
            } else {
              return <div>{field.name}</div>;
            }
          })}
        <div className="my-2">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default ChartOptions;
