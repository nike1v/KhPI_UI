// import React from "react";
// import { View } from "react-native";
// import { Text } from "react-native-elements";
// import { Image } from "react-native";

import React, { useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image, Button, Alert } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { v4 } from "uuid";
import Header from "../Header";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { styles } from "./newsStyles";
import { Route } from "react-router-native";
import { useRoute } from "@react-navigation/native";

const NewsDetail = () => {
  const route = useRoute();
  const { newsName } = route.params;
  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      <Text style={styles.category}>Culture</Text>
      <Text style={styles.title}>{newsName}</Text>
      <View>
        <Image
          style={{
            marginTop: 10,
            width: windowWidth,
          }}
          source={require("../assets/newsPreview.png")}
        />
      </View>
      <Text style={styles.description}>
        He had a very low-key, sort of grit factor to him that was just
        palpable,” said Murphy, the Thompson Stephenson Family Head Coach for
        Harvard Football.
      </Text>
      <Text style={styles.description}>
        In his 27 years at the helm of the program and as its winning est coach,
        Murphy has developed a keen eye for talent, dedication, and drive. He
        knew right away that Juszczyk ’13, a high school standout who’d won the
        deep respect of his coaches, had it all. “You could just tell that this
        kid was going to give you everything he possibly could. And that’s
        exactly who Kyle is, and that’s the way you can get from Harvard to the
        Super Bowl.”
      </Text>
      <Text style={styles.description}>
        {" "}
        On Sunday, Juszczyk (pronounced YOUS-check) will complete that journey,
        taking the field for the San Francisco 49ers, who will play the Kansas
        City Chiefs in Super Bowl LIV. It’s the day the 28-year-old has dreamed
        about since he was a kid in Ohio, but one he kept private for years.
      </Text>
      <Text style={styles.description}>
        {" "}
        He had a very low-key, sort of grit factor to him that was just
        palpable,” said Murphy, the Thompson Stephenson Family Head Coach for
        Harvard Football.
      </Text>

      <Text style={styles.date}>Aug 11, 2021</Text>
      <Text style={styles.author}>Stepan Polezhayko</Text>
      {/* <View>
        <TouchableOpacity
          style={styles.viewed}
          color="#5A4DDC"
          onPress={Alert.alert("Syka")}
        >
          <Text>VIEWED</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.share}>
        <Button
          style={styles.border}
          title="Share"
          color="#5A4DDC"
          onPress={() => Alert.alert("Right button pressed")}
        />
      </View>
    </View>
  );
};

export default NewsDetail;
