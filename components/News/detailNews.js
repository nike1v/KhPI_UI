import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Alert } from "react-native";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { v4 } from "uuid";
import { styles } from "./newsStyles";
import { useRoute } from "@react-navigation/native";

const NewsDetail = () => {
  const route = useRoute();
  const { newsName } = route.params;

  return (
    <View>
      <Text style={styles.category}>Culture</Text>
      <Text style={styles.title}>{newsName}</Text>
      <View>
        <Image
          style={styles.image}
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

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.date}>Aug 11, 2021</Text>
        <Text style={styles.author}>Stepan Polezhayko</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={styles.viewed}
          color="#5A4DDC"
          onPress={() => Alert.alert("Syka")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            VIEWED
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.share}
          color="#5A4DDC"
          onPress={() => Alert.alert("Syka")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsDetail;
