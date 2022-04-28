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
      inputContainerStyle={[
        {
          paddingTop: '18px',
          borderColor: 'rgba($color: #000000, $alpha: 0.05);',
        },
      ]}
      inputStyle={[
        {
          paddingLeft: '0',
          paddingRight: '0',
          paddingBottom: '0',
          fontFamily: 'ProximaNova-Regular',
          fontSize: '14px',
          fontWeight: 'normal',
        },
      ]}
      onChangeText={text => onChange(name)(text)}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
      }}
      errorMessage={hasError && errors[name]}
      errorStyle={
        hasError
          ? {margin: 0, marginTop: '3px', fontSize: '10px'}
          : {display: 'none'}
      }
      {...inputProps}
    />
  );
};
export default InputField;
