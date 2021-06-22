/* @font-face {
  font-family: "font3f2cd34815cd131212962cee81f674c8";

  src: url("https://nomail.com.ua/files/eot/3f2cd34815cd131212962cee81f674c8.eot?#iefix")
      format("embedded-opentype"),
    url("https://nomail.com.ua/files/woff/3f2cd34815cd131212962cee81f674c8.woff")
      format("woff"),
    url("https://nomail.com.ua/files/woff2/3f2cd34815cd131212962cee81f674c8.woff2")
      format("woff2");
} */

import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    paddingLeft: 24,
    paddingTop: 9,
    marginBottom: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
  },

  description: {
    paddingTop: 17,
    paddingLeft: 24,
    paddingRight: 24,
    fontSize: 12,
    fontStyle: "normal",
    color: "rgba(0, 0, 0, 1)",
    lineHeight: 14,
    // position: "absolute",
    letterSpacing: 0.25,
    fontWeight: "normal",
  },
  date: {
    position: "absolute",
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 674,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    opacity: 0.5,
  },

  author: {
    position: "absolute",
    right: 24,
    top: 674,

    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    /* identical to box height, or 133% */

    textAlign: "right",
    letterSpacing: 0.25,
    color: "rgba(0, 0, 0, 1)",
  },
  viewed: {
    position: "absolute",
    width: 150,
    height: 48,
    left: 24,
    top: 732,
    bottom: 32,
    color: "rgba(90,77,220, 0.8)",
    borderRadius: 32,
  },
  share: {
    position: "absolute",
    width: 150,
    height: 48,
    right: 24,
    top: 732,
    bottom: 32,
    borderRadius: 32,
    borderWidth: 1,
  },
  border: {
    borderRadius: 32,
    borderWidth: 1,
  },
});
