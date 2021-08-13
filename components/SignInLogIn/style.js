import React from "react";
import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#A11A16",
  },
  top: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
  },
  inputStyle: {
    marginHorizontal: 27,
    marginTop: -20,
    fontSize: 12,
  },
  loginButtons: {
    flexDirection: "row",
    margin: 5,
    marginRight: 18,
    marginLeft: "auto",
    alignItems: "flex-end",
    marginTop: 15,
    marginBottom: 15,
  },
  signInButton: {
    borderRadius: 60,
    width: 165,
    height: 48,
    alignSelf: "center",
    backgroundColor: "#A11A16",
    justifyContent: "center",
  },
  signInButtonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16,
    fontFamily: "Helvetica",
  },
  forgotYourPassword: {
    color: "gray",
    textAlign: "center",
    margin: 23,
    fontSize: 12,
    fontWeight: "400",
  },
  createAnAccount: {
    justifyContent: "center",
    alignItems: "center",
  },
  createAnAccountText: {
    color: "#A11A16",
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "Avenir",
    fontWeight: "700",
    letterSpacing: 0.25,
  },
  topButtonsTextStyle: {
    color: "#A11A16",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "400",
  },
});
