import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Formik, Field} from 'formik';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {login} from '../../reduxs/actions';
import {InputField, BtnSubmit} from '../../components/forms';
import {View, Text} from 'react-native';

const Login = props => {
  const [hide, setHide] = useState(true);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1C3496',
        }}>
        <Text style={{color: '#ffffff', marginBottom: '16%', fontSize: 28}}>
          Sign In
        </Text>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={schema}
          onSubmit={onLogin}
          style={{width: '100%'}}>
          {props => (
            <>
              <Field
                component={InputField}
                name="email"
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Field
                component={InputField}
                name="password"
                label="Password"
                secureTextEntry={hide}
                autoCapitalize="none"
                rightIcon={{
                  type: 'feather',
                  name: hide ? 'eye' : 'eye-off',
                  color: '#fff',
                  size: 20,
                  onPress: () => {
                    setHide(!hide);
                  },
                }}
              />

              <BtnSubmit
                title="Login"
                titleStyle={{color: '#FFFFFF', fontSize: 14}}
                buttonStyle={{
                  height: 38,
                  margin: 'auto',
                  backgroundColor: '#1C3496',
                }}
                handleSubmit={props.handleSubmit}
                loading={props.loading}
                loadingProps={{color: '#5BCADD'}}
              />
            </>
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
