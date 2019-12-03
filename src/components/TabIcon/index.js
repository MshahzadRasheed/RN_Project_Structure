// @flow
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import Text from '../Text';
import {Images, Metrics, AppStyles} from '../../theme';
import Util from '../../util';

const TabIcon = ({title, focused}) => (
  <View
    style={[
      AppStyles.centerInner,
      {/* backgroundColor: "red",  */ width: '90%'},
    ]}>
    <Image
      resizeMode="contain"
      style={[
        {
          width: Metrics.icon.small,
          height: Metrics.icon.small,
        },
      ]}
      source={Images[(title + (focused ? '_blue' : '')).toLocaleLowerCase()]}
    />
    <Text size="xxxSmall" style={AppStyles.mTop5}>
      {Util.capitalizeFirstLetter(title)}
    </Text>
  </View>
);

TabIcon.propTypes = {
  title: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default TabIcon;
