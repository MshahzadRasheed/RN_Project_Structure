// @flow
import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { Text, ButtonView } from "../";
import styles from "./styles";
import { Colors, AppStyles } from "../../theme";

export default class AppButton extends React.Component {
  static propTypes = {
    image: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    onPress: PropTypes.func,
    index: PropTypes.number
  };

  static defaultProps = {
    onPress: undefined,
    subTitle: "",
    index: null
  };

  render() {
    const { image, title, onPress, index, subTitle } = this.props;
    return (
      <ButtonView
        style={[styles.container, index === 0 ? styles.firstItem : {}]}
        onPress={onPress}
      >
        <Image source={image} style={styles.image} />
        <Text
          color={Colors.white}
          size="xxxLarge"
          type="medium"
          style={AppStyles.mLeft25}
        >
          {title}
        </Text>
        {!_.isEmpty(subTitle) && (
          <Text
            color={Colors.white}
            size="large"
            type="medium"
            style={AppStyles.mLeft25}
          >
            {subTitle}
          </Text>
        )}
      </ButtonView>
    );
  }
}
