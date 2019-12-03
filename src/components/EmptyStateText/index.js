// @flow
import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Text } from "../";
import styles from "./styles";
import { AppStyles } from "../../theme";

export default class EmptyStateText extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
    containerStyle: PropTypes.object,
    textProps: PropTypes.object
  };

  static defaultProps = {
    text: "No data available",
    containerStyle: {},
    textProps: {}
  };

  render() {
    const { text, containerStyle, textProps } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <Text {...textProps} textAlign="center">
          {text}
        </Text>
      </View>
    );
  }
}
