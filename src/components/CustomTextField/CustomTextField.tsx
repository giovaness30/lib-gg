import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const isNullValue = (value: string) => {
  return value === undefined || value === null || value === '';
};

const handleHelperText = (validation: boolean) => {
  return validation ? 'Campo obrigatório' : '';
};

const handleError = (value: string, validation: boolean) => {
  return isNullValue(value) && validation;
};

interface Props {
  label: string;
  id?: any;
  value: string;
  type?: string;
  disabled?: boolean;
  onChange?: any;
  validation?: any;
  multiline?: boolean;
  rows?: number;
  inputProps?: any;
}

const CustomTextField = ({
  label,
  id,
  value,
  type,
  disabled,
  onChange,
  validation,
  multiline,
  rows,
  inputProps,
  ...other
}: Props) => {
  return (
    <>
      <TextField
        size="small"
        label={label}
        id={id}
        fullWidth
        multiline={multiline}
        rows={rows}
        disabled={disabled}
        margin="dense"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        value={value}
        onChange={onChange}
        error={handleError(value, validation)}
        helperText={value ? '' : handleHelperText(validation)}
        inputProps={inputProps}
        {...other}
      />
    </>
  );
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  validation: PropTypes.bool,
  type: PropTypes.string,
};

CustomTextField.defaultProp = {
  label: '',
  id: '',
  value: {},
  multiline: false,
  rows: false,
  disabled: false,
  onChange: () => {},
  validation: false,
  type: '',
};

export default React.memo(CustomTextField);
