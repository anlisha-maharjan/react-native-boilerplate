import React from 'react';
import {Input} from 'react-native-elements';

const InputField = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];

  return (
    <Input
      value={value}
      onChangeText={text => onChange(name)(text)}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
      }}
      errorMessage={hasError && errors[name]}
      errorStyle={hasError ? {fontSize: 14} : {display: 'none'}}
      {...inputProps}
    />
  );
};
export default InputField;
