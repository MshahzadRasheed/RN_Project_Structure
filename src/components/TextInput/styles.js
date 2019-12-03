// @flow
import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts, AppStyles } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    borderColor: Colors.grey1,
    borderWidth: 1,
    borderRadius: Metrics.borderRadius,
    padding: 12,
    marginTop: 3,
    fontFamily: Fonts.type.medium,
    color: Colors.grey5,
    fontSize: Fonts.size.normal
  },
  buttonOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  arrowIcon: {
    width: 18 * 0.58,
    height: 18,
    ...AppStyles.mRight10
  },
  multilineInput: {
    height: 120,
    paddingTop: 10,
    paddingBottom: 10,
    textAlignVertical: "top"
  }
});
