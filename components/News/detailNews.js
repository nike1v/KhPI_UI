import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image, Alert } from "react-native";
import { View, TouchableHighlight } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./newsStyles";
import { useRoute } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

const NewsDetail = () => {
  const route = useRoute();
  const { newsName } = route.params;

  let newsPreview = "../assets/newsPreview.png";
  let shareImage = "../assets/Vector.png";

  let [isPress, setIsPress] = useState(false);

  let propsForViewed = {
    activeOpacity: 1,
    underlayColor: "#A11A16",
    style: isPress ? styles.viewedTrue : styles.viewedFalse,
    // onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () =>
      Alert.alert("Added successfully!", "Added to viewed category"),
  };

  return (
    <View>
      <Text style={styles.category}>Culture</Text>
      <Text style={styles.title}>{newsName}</Text>
      <View>
        <Image style={styles.image} source={require(newsPreview)} />
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

      <View style={styles.buttonsPosition}>
        <TouchableHighlight {...propsForViewed}>
          <Text
            style={{
              textAlign: "center",
              lineHeight: 17,
              fontSize: 14,
              letterSpacing: 0.25,
              fontFamily: "Avenir",
              fontWeight: "bold",
              color: isPress ? "white" : "#A11A16",
            }}
          >
            VIEWED
          </Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.share}
          onPress={() =>
            Alert.alert("Shared!", "You successfully shared this news ")
          }
        >
          <View style={styles.shareContentPosition}>
            <Svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.sharePng}
            >
              <Path
                d="M13.3751 11.4999C12.9072 11.5022 12.4459 11.6096 12.0251 11.814C11.6043 12.0185 11.2348 12.3148 10.9438 12.6811L6.37505 9.82488C6.54156 9.28749 6.54156 8.71228 6.37505 8.17488L10.9438 5.31863C11.4075 5.89283 12.0595 6.28437 12.7843 6.42389C13.509 6.56341 14.2598 6.4419 14.9035 6.0809C15.5473 5.7199 16.0425 5.14269 16.3014 4.45154C16.5603 3.76039 16.5662 2.99989 16.3182 2.30478C16.0701 1.60966 15.5839 1.0248 14.9459 0.653777C14.3079 0.282759 13.5591 0.14954 12.8323 0.277719C12.1054 0.405897 11.4474 0.787201 10.9748 1.35408C10.5021 1.92097 10.2454 2.63684 10.2501 3.37488C10.253 3.65437 10.2951 3.93207 10.3751 4.19988L5.8063 7.05613C5.40296 6.54837 4.85164 6.17866 4.22877 5.99826C3.60591 5.81785 2.94234 5.83568 2.33006 6.04927C1.71778 6.26286 1.18711 6.66164 0.811608 7.19032C0.436107 7.71901 0.234375 8.35142 0.234375 8.99988C0.234375 9.64835 0.436107 10.2808 0.811608 10.8094C1.18711 11.3381 1.71778 11.7369 2.33006 11.9505C2.94234 12.1641 3.60591 12.1819 4.22877 12.0015C4.85164 11.8211 5.40296 11.4514 5.8063 10.9436L10.3751 13.7999C10.2951 14.0677 10.253 14.3454 10.2501 14.6249C10.2501 15.243 10.4333 15.8471 10.7767 16.361C11.1201 16.8749 11.6081 17.2755 12.1792 17.512C12.7502 17.7485 13.3785 17.8104 13.9847 17.6898C14.5909 17.5693 15.1477 17.2716 15.5848 16.8346C16.0218 16.3976 16.3194 15.8407 16.44 15.2345C16.5606 14.6284 16.4987 14 16.2622 13.429C16.0257 12.858 15.6251 12.3699 15.1112 12.0265C14.5973 11.6832 13.9931 11.4999 13.3751 11.4999ZM13.3751 1.49988C13.7459 1.49988 14.1084 1.60985 14.4167 1.81588C14.7251 2.02191 14.9654 2.31474 15.1073 2.65735C15.2492 2.99996 15.2864 3.37696 15.214 3.74068C15.1417 4.10439 14.9631 4.43849 14.7009 4.70071C14.4387 4.96293 14.1046 5.14151 13.7408 5.21386C13.3771 5.2862 13.0001 5.24907 12.6575 5.10716C12.3149 4.96524 12.0221 4.72492 11.816 4.41658C11.61 4.10824 11.5001 3.74572 11.5001 3.37488C11.5001 2.8776 11.6976 2.40069 12.0492 2.04906C12.4009 1.69743 12.8778 1.49988 13.3751 1.49988ZM3.37505 10.8749C3.00421 10.8749 2.6417 10.7649 2.33336 10.5589C2.02502 10.3529 1.78469 10.06 1.64278 9.71742C1.50087 9.3748 1.46373 8.9978 1.53608 8.63409C1.60843 8.27038 1.78701 7.93628 2.04923 7.67406C2.31145 7.41184 2.64555 7.23326 3.00926 7.16091C3.37297 7.08856 3.74997 7.1257 4.09259 7.26761C4.4352 7.40952 4.72803 7.64985 4.93406 7.95819C5.14009 8.26653 5.25005 8.62904 5.25005 8.99988C5.25005 9.49717 5.05251 9.97408 4.70088 10.3257C4.34925 10.6773 3.87234 10.8749 3.37505 10.8749ZM13.3751 16.4999C13.0042 16.4999 12.6417 16.3899 12.3334 16.1839C12.025 15.9779 11.7847 15.685 11.6428 15.3424C11.5009 14.9998 11.4637 14.6228 11.5361 14.2591C11.6084 13.8954 11.787 13.5613 12.0492 13.2991C12.3115 13.0368 12.6455 12.8583 13.0093 12.7859C13.373 12.7136 13.75 12.7507 14.0926 12.8926C14.4352 13.0345 14.728 13.2748 14.9341 13.5832C15.1401 13.8915 15.2501 14.254 15.2501 14.6249C15.2501 15.1222 15.0525 15.5991 14.7009 15.9507C14.3492 16.3023 13.8723 16.4999 13.3751 16.4999Z"
                fill="#A11A16"
              />
            </Svg>

            {/* <Image style={styles.sharePng} source={require(shareImage)} /> */}
            <Text style={styles.shareText}>SHARE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsDetail;
