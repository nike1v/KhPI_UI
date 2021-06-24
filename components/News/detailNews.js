import React from "react";
import { TouchableOpacity } from "react-native";
import { Image, Alert } from "react-native";
import { View, TouchableHighlight } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./newsStyles";
import { useRoute } from "@react-navigation/native";

const NewsDetail = () => {
  const route = useRoute();
  const { newsName } = route.params;

  var [isPress, setIsPress] = React.useState(false);

  var propsForViewed = {
    activeOpacity: 1,
    underlayColor: "#5A4DDC",
    color: "white",
    style: isPress ? styles.viewedTrue : styles.viewedFalse,
    // onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
  };

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
        <TouchableHighlight
          {...propsForViewed}
          //  color="#5A4DDC"
          onPress={() => {}}
        >
          <Text
            style={{
              textAlign: "center",
              lineHeight: 17,
              fontSize: 14,
              letterSpacing: 0.25,
              fontFamily: "Avenir",
              fontWeight: "bold",
              color: isPress ? "white" : "#5A4DDC",
            }}
          >
            VIEWED
          </Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.share}
          onPress={() => Alert.alert("Share")}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "space-between",
            }}
          >
            <Image
              source={require("../assets/Vector.png")}
              style={styles.sharePng}
            />
            <Text style={styles.shareText}>SHARE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsDetail;
