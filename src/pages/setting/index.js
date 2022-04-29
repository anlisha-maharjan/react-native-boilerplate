import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {logout} from '../../reduxs/actions';
import {connect} from 'react-redux';

const Setting = props => {
  const onLogout = () => {
    props.logout(props.navigation);
  };
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={[{width: '50%', overflow: 'hidden'}]}>
        <Button
          onPress={onLogout}
          title={'Log out'}
          loading={props.loading}
          loadingProps={{color: '#FFFFFF'}}
          titleStyle={{fontSize: 18}}
          buttonStyle={{
            backgroundColor: '#B60F0F',
            borderRadius: 10,
            padding: 10,
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  const {loading, error} = auth;
  return {loading, error};
};
export default connect(mapStateToProps, {logout})(Setting);
