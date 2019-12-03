// @flow
import React from 'react';
import {connect} from 'react-redux';
import {Stack, Scene, Router, Actions, Tabs} from 'react-native-router-flux';

import styles from './styles';
import {Colors, Images} from '../theme';
import Util from '../util';
import {Login, Welcome, Empty} from '../containers';

function onBackPress() {
  if (Actions.state.index === 0) {
    return false;
  }
  Actions.pop();
  return true;
}

const navigator = Actions.create(
  <Stack
    key="root"
    titleStyle={styles.title}
    headerStyle={styles.header}
    headerTintColor={Colors.navbar.text}>
    <Scene key="login" component={Login} hideNavBar />
    <Scene key="empty" component={Empty} hideNavBar />
    <Scene key="welcome" component={Welcome} hideNavBar initial />
  </Stack>,
);

export default () => (
  <AppNavigator navigator={navigator} backAndroidHandler={onBackPress} />
);

const AppNavigator = connect()(Router);
