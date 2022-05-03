import React from 'react';
import {KeyboardAvoidingView, View, Text} from 'react-native';
import {Formik, Field} from 'formik';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {login} from '@myapp/reduxs/actions';
import {InputField, BtnSubmit} from '@myapp/components/forms';

const Login = props => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const onLogin = values => {
    props.login(values, props.navigation);
  };

  return (
    <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1C3496',
        }}>
        <Text style={{color: '#fff', marginBottom: '15%', fontSize: 28}}>
          Sign In
        </Text>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={schema}
          onSubmit={onLogin}>
          {({handleSubmit}) => (
            <View style={{width: '100%', padding: 30}}>
              <Field
                component={InputField}
                name="email"
                label="Email"
                autoCapitalize="none"
              />

              <Field
                component={InputField}
                name="password"
                secureTextEntry={true}
                label="Password"
                autoCapitalize="none"
              />
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <BtnSubmit
                  title="Login"
                  containerStyle={{marginTop: '5%'}}
                  titleStyle={{color: '#000', fontSize: 14}}
                  buttonStyle={{
                    width: 150,
                    height: 48,
                    backgroundColor: '#fff',
                  }}
                  handleSubmit={handleSubmit}
                  loading={props.loading}
                  loadingProps={{color: '#5BCADD'}}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = ({auth}) => {
  const {loading, error} = auth;
  return {loading, error};
};
export default connect(mapStateToProps, {
  login,
})(Login);
