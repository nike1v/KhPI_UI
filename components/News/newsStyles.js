import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  category: {
    marginTop: 58,
    paddingLeft: 24,
    opacity: 0.5,
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: "500",
  },

  title: {
    fontFamily: "Avenir",
    paddingLeft: 24,
    marginTop: 9,
    marginBottom: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
  },
  image: {
    width: windowWidth,
  },
  description: {
    paddingTop: 17,
    paddingLeft: 24,
    paddingRight: 24,
    color: "rgba(0, 0, 0, 1)",
    lineHeight: 14,
    letterSpacing: 0.25,
    fontWeight: "normal",
    fontSize: 12,
    fontStyle: "normal",
    fontFamily: "Avenir",
  },
  date: {
    fontFamily: "Avenir",
    marginTop: 20,
    paddingLeft: 24,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    opacity: 0.5,
  },
  author: {
    fontFamily: "Avenir",
    paddingRight: 24,
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "right",
    letterSpacing: 0.25,
    color: "rgba(0, 0, 0, 1)",
  },
  viewedFalse: {
    backgroundColor: "#ffffff",
    width: 150,
    height: 48,
    marginLeft: 24,
    padding: 15,
    color: "#A11A16",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#A11A16",
  },
  viewedTrue: {
    backgroundColor: "#A11A16",
    width: 150,
    height: 48,
    marginLeft: 24,
    padding: 15,
    color: "#ffffff",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#A11A16",
  },
  sharePng: {
    marginLeft: 34.23,
    marginTop: 15.23,
  },

  share: {
    backgroundColor: "#ffffff",
    width: 150,
    height: 48,
    marginRight: 24,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#A11A16",
    borderRadius: 32,
  },
  shareText: {
    color: "#A11A16",
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 1,
    paddingRight: 36,
    paddingLeft: 16.5,
    paddingTop: 18,
  },
  shareContentPosition: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  buttonsPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
