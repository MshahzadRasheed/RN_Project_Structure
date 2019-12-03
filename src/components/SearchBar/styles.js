// @flow
import { StyleSheet } from "react-native";
import { Colors, Metrics, AppStyles, Fonts } from "../../theme";
import Util from "../../util";

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    ...AppStyles.mTop5,
    ...AppStyles.mBottom5
    // paddingHorizontal: Metrics.baseMargin
  },
  searchWrapper: {
    backgroundColor: Colors.silver,
    alignSelf: "center",
    borderRadius: Metrics.borderRadius,
    ...AppStyles.flexRow,
    ...AppStyles.centerInner
  },
  icon: {
    width: 14,
    height: 14,
    margin: 10
  },
  textInput: {
    fontSize: 17,
    fontFamily: Fonts.type.base,
    ...AppStyles.flex,
    ...AppStyles.pRight10,
    height: Util.isPlatformAndroid() ? 40 : 36,

    ...AppStyles.pTop0,
    ...AppStyles.pBottom0
  }
});
