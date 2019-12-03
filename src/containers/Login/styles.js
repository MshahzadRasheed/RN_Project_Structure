// @flow
import { StyleSheet } from "react-native";
import { Colors, Metrics, AppStyles } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.baseMargin,
    backgroundColor: Colors.background.primary,
    paddingTop: Metrics.statusBarHeight,
    ...AppStyles.pBottom0
  },
  button: {
    marginTop: Metrics.ratio(30)
  },
  logo: { width: 96, height: 112 },
  lineThrough: {
    height: 0.5,
    backgroundColor: Colors.grey4,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0
  },
  ORTextWrapper: {
    backgroundColor: Colors.white,
    width: 110,
    alignSelf: "center"
  },
  socialIcon: {
    width: 50,
    height: 50,
    ...AppStyles.mLeft10,
    ...AppStyles.mRight10
  }
});
