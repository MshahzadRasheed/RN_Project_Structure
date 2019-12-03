// @flow
import { StyleSheet } from "react-native";
import { Metrics } from "../../theme";

const itemWidth = Metrics.screenWidth - Metrics.baseMargin * 2;
export default StyleSheet.create({
  container: {
    width: itemWidth,
    height: itemWidth * 0.53,
    justifyContent: "center",
    marginBottom: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    borderRadius: 13,
    overflow: "hidden"
  },
  firstItem: {
    marginTop: Metrics.baseMargin
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
});
