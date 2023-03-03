import React from 'react';
import { useForm } from 'react-hook-form';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Unit from './index';
import Test from './test';
import { area_total_area } from '../../../util/convert-units/unit';

const onChangeUnitOption = jest.fn();

const unitProps = {
  // disabled: true,
  // classes,
  // style,
  label: 'Perimeter',
  // info,
  // register,
  name: 'total_area',
  displayUnitName: 'total_area_unit',
  // hookFormSetValue: setValue,
  // hookFormGetValue: getValues,
  // hookFromWatch: watch,
  // defaultValue,
  system: 'metric',
  // control,
  unitType: area_total_area,
  // defaultValueUnit,
  // to,
  required: true,
  optional: false,
  mode: 'onBlur',
  max: 1000000000,
  // toolTipContent,
  onChangeUnitOption,
  // onBlur,
  // hasLeaf,
};

const UnitWithProps = () => {
  const {
    register,
    setValue: hookFormSetValue,
    getValues: hookFormGetValue,
    watch: hookFromWatch,
    setError,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const formProps = {
    register,
    hookFormSetValue,
    hookFormGetValue,
    hookFromWatch,
    // setError,
    control,
    // handleSubmit,
    errors,
  };

  return <Unit {...unitProps} {...formProps} />;
};

describe.only('first test!', () => {
  test('test', async () => {
    const user = userEvent.setup();
    render(<UnitWithProps />);
    const [visibleInput, hiddenInput] = screen.getAllByRole('spinbutton');

    expect(visibleInput).toBeEnabled();

    await user.clear(visibleInput);
    await user.type(visibleInput, '5');

    expect(visibleInput).toHaveValue(5);
  });
});
