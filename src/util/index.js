// @flow
import {Platform, Alert, Linking, PermissionsAndroid} from 'react-native';
import moment from 'moment';
import {MessageBarManager} from 'react-native-message-bar';
import DataHandler from '../services/DataHandler';
import {MESSAGE_TYPES, DISCARD_WARNING} from '../constants';

class Util {
  keyExtractor = (item: Object, index: number) => index.toString();
  isPlatformAndroid() {
    return Platform.OS === 'android';
  }
  isValidURL(url: 'string') {
    const re = /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }
  isEmailValid(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  isPasswordValid(password: string) {
    return password.length > 5;
  }
  isValidName(name) {
    return /^[a-zA-Z '.-]*$/.test(name);
  }
  getValidImage(image: any) {
    if (typeof image === 'string' && this.isValidURL(image)) {
      return {uri: image};
    }
    // if (typeof image === "string" && !this.isValidURL(image)) {
    //   return require(image);
    // }
    return image;
  }

  topAlert(message, alertType = 'success') {
    MessageBarManager.showAlert({
      message,
      alertType,
    });
  }

  topAlertError(message, alertType = MESSAGE_TYPES.ERROR) {
    MessageBarManager.showAlert({
      message,
      alertType,
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  isRequiredMessage(field) {
    return `${this.capitalizeFirstLetter(field)} is required`;
  }

  isInvalidMessage(field) {
    return `Invalid ${this.capitalizeFirstLetter(field)}`;
  }

  getFormattedDateTime = (date, format) => {
    if (date) return moment(date).format(format);
    return '';
  };

  getDateObjectFromString = (date, format) => {
    if (date) return moment(date, format).toDate();
    return '';
  };

  showLoader = (instance, loadingFor = '') => {
    if (!instance.state.loading) {
      instance.setState({
        loading: true,
        loadingFor,
      });
    }
  };

  hideLoader = (instance, callback) => {
    if (instance.state.loading) {
      instance.setState(
        {
          loading: false,
          loadingFor: '',
        },
        callback,
      );
    }
  };

  getCurrentUserAccessToken() {
    return DataHandler.getStore().getState().user.data.access_token;
  }

  userIsServiceProvider() {
    return (
      DataHandler.getStore().getState().user.data.user_type ===
      'service provider'
    );
  }

  getErrorText(error) {
    if (error instanceof Array) {
      if (error.length > 0) return error[0];
    } else {
      return error;
    }
    return '';
  }

  discardAlert(onYesPress) {
    Alert.alert(
      'Discard?',
      DISCARD_WARNING,
      [
        {text: 'Yes', onPress: onYesPress},
        {text: 'No', style: 'cancel'},
      ],

      {cancelable: true},
    );
  }

  isNumber(val) {
    return /^\d+$/.test(val);
  }

  workInProgress() {
    MessageBarManager.showAlert({
      message: 'Work in progress',
      alertType: 'info',
    });
  }

  commingSoon() {
    MessageBarManager.showAlert({
      message: 'Coming soon',
      alertType: 'info',
    });
  }

  openLinkInBrowser(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }

  generateGetParameter(obj) {
    let final = '?';
    for (const key in obj) {
      final = `${final}${key}=${obj[key]}&`;
    }
    final = final.slice(0, -1);
    return final;
  }

  async getCoordinates() {
    /* eslint-disable */
    const self = this;
    return new Promise(async function(resolve, reject) {
      let granted = undefined;
      if (self.isPlatformAndroid()) {
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      } else {
        navigator.geolocation.requestAuthorization();
      }

      if (
        !self.isPlatformAndroid() ||
        (self.isPlatformAndroid() &&
          granted === PermissionsAndroid.RESULTS.GRANTED)
      ) {
        navigator.geolocation.getCurrentPosition(
          geo_success => {
            const {latitude, longitude} = geo_success.coords;
            resolve({latitude, longitude});
          },
          geo_error => {
            resolve(geo_error);
          },
          {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000},
        );
      } else {
        resolve({error: 'Android permission required'});
      }
    });

    /* eslint-enable */
  }
}

export default new Util();
