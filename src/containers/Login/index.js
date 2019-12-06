// @flow
import _ from 'lodash';
import {connect} from 'react-redux';
import {View, Image, ScrollView, Platform, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';
import DataHandler from '../../services/DataHandler';
import {INVALID_EMAIL_ERROR, INVALID_PASSWORD_ERROR} from '../../constants';
import {Text, ButtonView, TextInput, Loader} from '../../components';
import {Images, AppStyles, Metrics, Colors} from '../../theme';
import styles from './styles';
import Util from '../../util';

class Login extends Component {
  static propTypes = {
    //   userSigninRequest: PropTypes.func.isRequired,
  };
  state = {
    errors: {},
    loading: false,
  };

  password;

  emailValue = '';
  passwordValue = '';
  _onSubmitEmail = () => {
    this.password.focus();
  };

  _onSubmitPassword = () => {
    this.password.blur();
  };

  _onChange = (element, value) => {
    const valueRef = `${element}Value`;
    this[valueRef] = value;

    if (!_.isEmpty(this.state.errors)) {
      this.setState({
        errors: {...this.state.errors, ...{[element]: ''}},
      });
    }
  };

  _validateForm() {
    const errors = {};
    if (_.isEmpty(this.emailValue)) {
      // email is required

      errors.email = Util.isRequiredMessage('email');
    }
    if (!Util.isEmailValid(this.emailValue)) {
      // invalid email
      errors.email = INVALID_EMAIL_ERROR;
    }
    if (_.isEmpty(this.passwordValue)) {
      // password is required
      errors.password = Util.isRequiredMessage('password');
    }
    if (!Util.isPasswordValid(this.passwordValue)) {
      // invalid password
      errors.password = INVALID_PASSWORD_ERROR;
    }

    if (!_.isEmpty(errors)) {
      this[_.keys(errors)[0]].focus();
      this.setState({
        errors,
      });

      return false;
    }

    return true;
  }

  _onSubmit = () => {
    if (this._validateForm()) {
      this.password.blur();
      this.email.blur();

      const payload = {
        email: this.emailValue,
        password: this.passwordValue,
        device_type: Platform.OS,
        // device_token: asd
      };
      Util.showLoader(this);
      this.props.userSigninRequest(payload, data => {
        if (data) {
          DataHandler.loginOnApplozic(data);

          setTimeout(() => {
            Util.hideLoader(this);
            if (Util.userIsServiceProvider()) {
              Actions.reset('spdashboard');
            } else {
              Actions.reset('dashboard');
            }
          }, 1000);
        } else {
          Util.hideLoader(this);
        }
      });
    }
  };

  renderLogo() {
    return (
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
          AppStyles.mTop30,
          AppStyles.mBottom30,
        ]}>
        <Image source={Images.logo} style={AppStyles.logoImage} />
      </View>
    );
  }

  renderLoginForm(errors) {
    return (
      <View style={[AppStyles.pRight20, AppStyles.pLeft20]}>
        <View style={[AppStyles.pLeft5, AppStyles.pRight5]}>
          <TextInput
            ref={ref => {
              this.email = ref;
            }}
            label="Email"
            error={errors.email}
            autoCapitalize="none"
            onChangeText={value => this._onChange('email', value)}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={this._onSubmitEmail}
          />
          <TextInput
            ref={ref => {
              this.password = ref;
            }}
            label="Password"
            error={errors.password}
            secureTextEntry
            onChangeText={value => this._onChange('password', value)}
            returnKeyType="done"
            onSubmitEditing={this._onSubmit}
          />
        </View>
        <ButtonView
          onPress={this._onSubmit}
          style={[
            {
              color: Colors.white,
              backgroundColor: Colors.blue,
              height: 45,
              borderRadius: 45 / 2,
              justifyContent: 'center',
              alignItems: 'center',
            },
            AppStyles.mTop25,
          ]}>
          <Text
            color={Colors.black}
            textAlign="center"
            type="medium"
            size="small"
            style={AppStyles.letterSpace3}>
            LOGIN
          </Text>
        </ButtonView>
      </View>
    );
  }

  renderForgotPwdBtn() {
    return (
      <ButtonView onPress={Actions.forgotPassword}>
        <Text
          style={[AppStyles.mTop25, AppStyles.mBottom30]}
          textAlign="center"
          type="base">
          Forgot Password ?
        </Text>
      </ButtonView>
    );
  }

  renderSignupBtn() {
    return (
      <View
        style={[
          AppStyles.mTop25,
          AppStyles.flexRow,
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text color={Colors.grey4}>Don’t have an account ? </Text>
        <ButtonView onPress={Actions.signup}>
          <Text textAlign="center" type="medium" color={Colors.blue}>
            Sign up
          </Text>
        </ButtonView>
      </View>
    );
  }

  renderSocialLoginSection() {
    return (
      <React.Fragment>
        <View style={[AppStyles.mTop30, AppStyles.mRight20, AppStyles.mLeft20]}>
          <View
            style={{
              height: 0.5,
              backgroundColor: Colors.grey4,
              position: 'absolute',
              top: 6,
              left: 0,
              right: 0,
            }}
          />
          <View
            style={{
              backgroundColor: Colors.white,
              width: 110,
              alignSelf: 'center',
            }}>
            <Text size="xxSmall" color={Colors.grey4} textAlign="center">
              OR LOGIN WITH
            </Text>
          </View>
        </View>

        <View
          style={[
            AppStyles.flexRow,
            AppStyles.mTop40,
            AppStyles.centerInner,
            AppStyles.mBottom15,
          ]}>
          <ButtonView>
            <Image source={Images.facebook} style={styles.socialIcon} />
          </ButtonView>
          <ButtonView>
            <Image source={Images.reddit} style={styles.socialIcon} />
          </ButtonView>
          <ButtonView>
            <Image source={Images.instagram} style={styles.socialIcon} />
          </ButtonView>
        </View>
      </React.Fragment>
    );
  }

  render() {
    const {errors, loading} = this.state;

    return (
      <View
        style={{
          flex: 1,
          padding: Metrics.baseMargin,
          backgroundColor: Colors.background.primary,
          paddingTop: Metrics.statusBarHeight,
          ...AppStyles.pBottom0,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {this.renderLogo()}
          {this.renderLoginForm(errors)}
          {this.renderForgotPwdBtn()}
          {this.renderSignupBtn()}
          {this.renderSocialLoginSection()}
        </ScrollView>
        <Loader loading={loading} />
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(Login);
