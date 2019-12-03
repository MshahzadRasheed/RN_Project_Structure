import {take, put, call, fork} from 'redux-saga/effects';
import {EMPTY} from '../actions/ActionTypes';
import {SAGA_ALERT_TIMEOUT} from '../constants';
// import {
//   userSignupSuccess,
//   userSigninSuccess,
//   userSignOutSuccess,
//   updateUserProfileSuccess,
//   getProfileSectionsSuccess,
// } from '../actions/UserActions';
import {EMPTY as EMPTY_URL, callRequest} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../util';
import DataHandler from '../services/DataHandler';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* signin() {
  while (true) {
    const {payload, responseCallback} = yield take(EMPTY.REQUEST);
    try {
      const response = yield call(
        callRequest,
        EMPTY_URL,
        payload,
        '',
        {},
        ApiSauce,
      );
      console.log('response', response);
      if (response.success) {
        if (responseCallback) responseCallback(response.data.user, null);
        //  yield put(userSigninSuccess(response.data.user));
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

export default function* root() {
  yield fork(signin);
}
