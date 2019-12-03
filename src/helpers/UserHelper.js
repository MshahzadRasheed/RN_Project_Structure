import {Actions} from 'react-native-router-flux';
import DataHandler from '../services/DataHandler';
//import {userSignOutRequest} from '../actions/UserActions';
import Util from '../util';
import {SESSION_EXPIRED_ERROR} from '../constants';

// const logoutUserHelper = () => {
//   DataHandler.getStore().dispatch(userSignOutRequest());
//   Actions.reset('login');
//   setTimeout(() => {
//     Util.topAlertError(SESSION_EXPIRED_ERROR);
//   }, 1000);
// };

export {};
