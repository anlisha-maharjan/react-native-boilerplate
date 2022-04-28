import React from 'react';
import {ScrollView} from 'react-native';
import {ListItem} from 'react-native-elements';
import {logout} from '../../reduxs/actions';
import {connect} from 'react-redux';

const Setting = props => {
  const onLogout = () => {
    props.logout(props.navigation);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{padding: '20px', backgroundColor: '#ffffff'}}>
      <ListItem
        containerStyle={{paddingHorizontal: '0', paddingVertical: '12px'}}
        onPress={onLogout}>
        <ListItem.Content>
          <ListItem.Title>Logout</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

const mapStateToProps = ({auth}) => {
  const {loading, error} = auth;
  return {loading, error};
};
export default connect(mapStateToProps, {logout})(Setting);
