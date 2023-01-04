import { Button } from 'datocms-react-ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function ChartOptions({ data, setData, chart }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fields = [
    {
      label: 'Chart Heigh',
      name: 'height',
      type: 'number',
      options: [],
      otherProps: {
        step: 100,
      },
      required: false,
      default: 500,
      placeholder: 'Chart Heigh',
      description: '',
      chartType: ['bar', 'line', 'pie'],
      span: 1,
    },
    {
      label: 'Chart Width',
      name: 'width',
      type: 'number',
      options: [],
      otherProps: {
        step: 100,
      },
      required: false,
      default: 500,
      placeholder: '',
      description: '',
      chartType: ['pie'],
      span: 1,
    },
  ];
  function mapFields(values) {
    return fields.map((field) => {
      if (field.chartType.includes(chart)) {
        return {
          [field.name]: values[field.name] || field.default,
        };
      }
    });
  }
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields
          .filter((field) => field.chartType.includes(chart))
          .map((field) => {
            if (['text', 'email', 'number'].includes(field.type)) {
              return (
                <div className="flex flex-row" key={field.name}>
                  <label>{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.default}
                    {...register(field.name, { required: field.required })}
                  />
                  {errors[field.name] && <span>This field is required</span>}
                </div>
              );
            } else if (['checkbox'].includes(field.type)) {
              return (
                <div className="flex flex-row" key={field.name}>
                  <label>{field.label}</label>
                  <select
                    defaultValue={field.default}
                    {...register(field.name, { required: field.required })}
                  >
                    {field.options.map((option) => {
                      return (
                        <option key={option.value} value={option.value}>
                          {option.label}
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ChartOptions;
