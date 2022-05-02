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
      inputContainerStyle={{
        paddingTop: 15,
        borderBottomWidth: 0,
      }}
      containerStyle={{
        marginBottom: 15,
      }}
      labelStyle={{color: '#fff'}}
      inputStyle={{
        padding: 10,
        fontSize: 14,
        fontWeight: 'normal',
        backgroundColor: '#fff',
        borderRadius: 5,
      }}
      onChangeText={text => onChange(name)(text)}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
      }}
      errorMessage={hasError && errors[name]}
      errorStyle={{fontSize: 14}}
      {...inputProps}
    />
  );
};
export default InputField;
