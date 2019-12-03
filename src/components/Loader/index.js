// @flow

import React from "react";
import PropTypes from "prop-types";
import Modal from "react-native-modal";
import { View, StatusBar, ActivityIndicator, Animated } from "react-native";
import Button from "../Button";
import styles from "./styles";
import { Text } from "../";
import { Colors } from "../../theme";

export default class Loader extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    loadingFor: PropTypes.string,
    backdropOpacity: PropTypes.number,
    progress: PropTypes.number,
    cancelable: PropTypes.bool,
    onCancelPress: PropTypes.func
  };

  static defaultProps = {
    loading: false,
    loadingFor: "",
    backdropOpacity: 0.3,
    progress: null,
    cancelable: false,
    onCancelPress: undefined
  };

  componentWillReceiveProps(nextProps) {
    Animated.timing(this._loaderAnimation, {
      toValue: (200 * nextProps.progress) / 100,
      duration: 500
    }).start();
  }

  _loaderAnimation = new Animated.Value(0);

  render() {
    const {
      loading,
      loadingFor,
      backdropOpacity,
      progress,
      cancelable,
      onCancelPress
    } = this.props;
    return (
      <View>
        <StatusBar networkActivityIndicatorVisible={loading} />
        <Modal
          isVisible={loading}
          style={styles.modal}
          animationIn="fadeIn"
          backdropOpacity={backdropOpacity}
          animationOut="fadeOut"
        >
          <View style={styles.container}>
            {progress === null && (
              <ActivityIndicator color={Colors.white} animating size="large" />
            )}

            {progress !== null && (
              <View style={styles.progressBarContainer}>
                <Animated.View
                  style={[
                    styles.progressBar,
                    {
                      width: this._loaderAnimation
                    }
                  ]}
                />
              </View>
            )}

            {cancelable && (
              <Button type="medium" color="primary" onPress={onCancelPress}>
                Cancel
              </Button>
            )}

            {loadingFor !== "" && (
              <Text
                size="small"
                type="base"
                color={Colors.white}
                style={{ marginTop: 10 }}
              >
                {loadingFor}
              </Text>
            )}
          </View>
        </Modal>
      </View>
    );
  }
}
