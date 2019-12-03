// @flow
import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    margin: 0
  },
  progressBarContainer: {
    height: 4,
    width: 200,
    backgroundColor: Colors.gray,
    borderRadius: 5
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.blue,
    borderRadius: 5
  }
});
