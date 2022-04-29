import React from 'react';
import {logout} from '../../reduxs/actions';
import {connect} from 'react-redux';

const Profile = props => {
  const onLogout = () => {
    props.logout(props.navigation);
  };
  return null;
};

const mapStateToProps = ({auth}) => {
  const {loading, error} = auth;
  return {loading, error};
};
export default connect(mapStateToProps, {logout})(Profile);
