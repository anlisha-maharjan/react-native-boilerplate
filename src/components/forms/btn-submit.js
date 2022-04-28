import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

const BtnSubmit = props => {
  const {wrapperStyle, ...attributes} = props;
  return (
    <View
      style={[
        {width: '100%', overflow: 'hidden', borderRadius: 4, padding: 1},
        wrapperStyle,
      ]}>
      <Button onPress={props.handleSubmit} {...attributes} />
    </View>
  );
};
export default BtnSubmit;
