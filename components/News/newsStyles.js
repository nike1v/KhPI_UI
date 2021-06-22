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
    marginTop: 24,
    paddingLeft: 24,
    opacity: 0.5,
    fontSize: 16,
    letterSpacing: 0.25,
    fontWeight: "500",
  },

  title: {
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
    fontFamily: 'Avenir',
  },
  date: {
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
  viewed: {
    backgroundColor: "#5A4DDC",
    width: 150,
    height: 48,
    marginLeft: 24,
    padding: 15,
    color: "rgba(90,77,220, 0.8)",
    borderRadius: 32,
  },
  share: {
    backgroundColor: "#5A4DDC",
    width: 150,
    height: 48,
    marginRight: 24,
    padding: 15,
    color: "rgba(90,77,220, 0.8)",
    borderRadius: 32,
  },
});
