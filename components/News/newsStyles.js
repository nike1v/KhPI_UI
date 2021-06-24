/* @font-face {
  font-family: "font3f2cd34815cd131212962cee81f674c8";

  src: url("https://nomail.com.ua/files/eot/3f2cd34815cd131212962cee81f674c8.eot?#iefix")
      format("embedded-opentype"),
    url("https://nomail.com.ua/files/woff/3f2cd34815cd131212962cee81f674c8.woff")
      format("woff"),
    url("https://nomail.com.ua/files/woff2/3f2cd34815cd131212962cee81f674c8.woff2")
      format("woff2");
} */

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
    color: "#5A4DDC",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#5A4DDC",
  },
  viewedTrue: {
    backgroundColor: "#5A4DDC",
    width: 150,
    height: 48,
    marginLeft: 24,
    padding: 15,
    color: "#ffffff",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#5A4DDC",
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
    borderColor: "#5A4DDC",
    borderRadius: 32,
  },
  shareText: {
    color: "#5A4DDC",
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 1,
    paddingRight: 36,
    paddingLeft: 16.5,
    paddingTop: 18,
  },
});
