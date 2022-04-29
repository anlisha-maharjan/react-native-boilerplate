import React from 'react';
import {Button} from 'react-native-elements';

const BtnSubmit = props => {
  const {...attributes} = props;
  return <Button onPress={props.handleSubmit} {...attributes} />;
};
export default BtnSubmit;
