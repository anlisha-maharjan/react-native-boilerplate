import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {Button, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';
import {logout} from '@myapp/reduxs/actions';

const Setting = props => {
  const onLogout = () => {
    props.logout(props.navigation);
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        source={require('@myapp/assets/images/1.jpg')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{padding: 30, marginTop: '36%'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar
              size={125}
              source={require('@myapp/assets/images/photo-placeholder.png')}
              containerStyle={{
                borderRadius: 5,
                borderWidth: 3,
                borderColor: '#85F0D3',
              }}></Avatar>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 25,
              }}>
              <Text
                style={{
                  marginBottom: 8,
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: '#1C3496',
                }}>
                Anlisha Maharjan
              </Text>
              <Text style={{marginBottom: 8, fontSize: 16, color: '#1C3496'}}>
                anlishamaharjan@gmail.com
              </Text>
              <Button
                onPress={onLogout}
                title={'Log out'}
                type="clear"
                loading={props.loading}
                loadingProps={{color: '#FF0000'}}
                titleStyle={{fontSize: 20, color: '#FF0000'}}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  const {loading, error} = auth;
  return {loading, error};
};
export default connect(mapStateToProps, {logout})(Setting);
