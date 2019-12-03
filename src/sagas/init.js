import _ from 'lodash';
import {LOAD} from 'redux-storage';
import {take, fork, select} from 'redux-saga/effects';
import {Actions} from 'react-native-router-flux';
import {getUser} from '../reducers/selectors';

function* watchReduxLoadFromDisk() {
  while (true) {
    yield take(LOAD);

    try {
      const {access_token} = yield select(getUser);

      if (!_.isUndefined(access_token)) {
        //   Actions.reset('empty');
      }
    } catch (err) {
      console.warn('saga watchReduxLoadFromDisk error: ', err);
    }
  }
}

export default function* root() {
  yield fork(watchReduxLoadFromDisk);
}
