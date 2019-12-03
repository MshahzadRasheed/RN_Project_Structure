import React from "react";
import { MessageBar, MessageBarManager } from "react-native-message-bar";
import { Colors, Metrics } from "../../theme";

export default class extends React.Component {
  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  styles = {
    error: {
      backgroundColor: Colors.red,
      strokeColor: Colors.red,
      titleColor: Colors.white,
      messageColor: Colors.white
    },
    success: {
      backgroundColor: Colors.green,
      strokeColor: Colors.green,
      titleColor: Colors.white,
      messageColor: Colors.white
    },
    info: {
      backgroundColor: Colors.blue,
      strokeColor: Colors.blue,
      titleColor: Colors.white,
      messageColor: Colors.white
    }
  };

  render() {
    const { error, success, info } = this.styles;
    return (
      <MessageBar
        ref="alert"
        stylesheetError={error}
        stylesheetSuccess={success}
        stylesheetInfo={info}
        viewTopInset={Metrics.statusBarHeight}
      />
    );
  }
}
