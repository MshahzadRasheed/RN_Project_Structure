// @flow
import _ from 'lodash';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {View, Image, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

import {Images, Colors} from '../../theme';
import styles from './styles';
import Util from '../../util';

class Welcome extends Component {
  static propTypes = {
    // userData: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {userData} = this.props;

    setTimeout(() => {
      if (!_.isUndefined(userData)) {
        Actions.reset('login');
        //   Actions.empty();
      } else {
        Actions.reset('login');
      }
    }, 0);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.image} />
        {/* <DoubleBounce size={15} color={Colors.blue2} /> */}
      </View>
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(mapStateToProps, actions)(Welcome);
