// @flow
import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../theme";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    backgroundColor: Colors.background.primary,
    paddingTop: Metrics.statusBarHeight,
    paddingHorizontal: Metrics.smallMargin,
    height: Metrics.navBarHeight,
    justifyContent: "center"
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.grey3
  },
  btnImage: {
    width: 20,
    height: 20
  },
  btnWrapper: {
    padding: Metrics.smallMargin,
    justifyContent: "center",
    minWidth: 80
  },
  rightBtn: {
    alignItems: "flex-end"
  },
  searchHeader: {
    height: Metrics.navBarHeight + 50
  }
});
