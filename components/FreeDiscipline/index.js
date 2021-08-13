import React, { useState } from "react";
import { Text } from "react-native-elements";
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import Header from "../Header";
import { v4 } from "uuid";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState("1");
  const [freeDiscipines, setFreeDisciplines] = useState([
    {
      name: "Основи Data Engineering",
      description:
        "Дисципліна «Основи Data Engineering» передбачає ознайомлення та вирішення основних задач сучасногоdata engineering. Формує загальне розуміння проектування, аналізу, обробки даних за допомогою таких засобів як високопродуктивних рушіїв обробки даних, сховищ даних, мікроконтролерів, хмарних сервісів. В курсі передбачено вивчення аналітичних інструментів, необхідних під час курсу за допомогою практичних робіт та оформлення звітів",
      cafedraShort: "CMPS",
      teacher: "Коротач Ігор",
      link: "http://web.kpi.kharkov.ua/infiz/wp-content/uploads/sites/59/2021/01/Osnovy-Data-Engineering-Sylabus.pdf",
    },
    {
      name: "Практичні аспекти застосування Java",
      description:
        "Вивчаючи дисципліну студенти повинні оволодіти синтаксисом, ідіомами та стилем програмування на мові програмування Java; розуміти теорію типів, принципи успадкування, контролю доступу та іменування; використовувати параметризовані типи; розуміти принципи організації багатопотокового виконання методів; розуміти схеми синхронізації на основі Java-моніторів; користуватися javadoc-коментарями і анотаціями; вміти розробляти мережевий back-end на основі серверних компонентів Java.",
      cafedraShort: "CMPS",
      teacher: "Косенко М. О.",
      link: "http://web.kpi.kharkov.ua/infiz/wp-content/uploads/sites/59/2021/01/Praktychni-aspekty-zastosuvannya-Java.pdf",
    },
    {
      name: "QA. ESSENTIALS. CRASH COURSE",
      description:
        "Зростаюча складність та масштабність проектів, необхідність більшої інтенсивності релізів спонукають до розвитку нових методологій, практик та напрямів, які забезпечують оптимізацію розробки програмного продукту. Одним з актуальних напрямів є автоматизоване тестування програмного забезпечення. “Quality Assurance. Essentials” Crash Course орієнтований на тих, хто бажає зрозуміти відмінності між мануальним та автоматизованим тестуванням, а також причини доцільності використання останнього і заміни складних та повторюваних процесів тестування автоматизованим; прагне навчитись використовувати автоматизацію для підвищення ефективності процесу за рахунок регресійного тестування. Також даний курс ознайомить з інструментів автоматизації, підходами до автоматизації (BDD, TDD, KDT, DDT), рівнями автоматизації системи, що передбачає написання unit-тестів, API та GUI, та іншими питаннями, необхідними для формування системного уявлення про автоматизоване тестування.",
      cafedraShort: "CMPS",
      teacher: "Євгенія Єгорова",
      link: "http://web.kpi.kharkov.ua/infiz/wp-content/uploads/sites/59/2021/01/QA-Crash-Course-sylabus.pdf",
    },
    {
      name: "WEB UI. ESSENTIALS",
      description:
        "Дисципліна надає основи JavaScript для набуття професійних компетенцій з напрямів WebUI (React, Angular, Vue) та Node.js та їхнього практичного застосування. Курс розкриває класичний JavaScript через практичні застосування і не передбачає попередніх знань JS чи досвіду його застосування. Курс вже викладався в минулому семестрі для студентів 3го курсу та має схвальні відгуки і рекомендації.",
      cafedraShort: "CMPS",
      teacher: "ЗЯБЛЯ Юрій",
      link: "http://web.kpi.kharkov.ua/infiz/wp-content/uploads/sites/59/2020/09/SYLABUS-WEB-UI.-ESSENTIALS-2.pdf",
    },
  ]);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <>
      <Header pageName="Discipine of free choise" />
      {/* <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <View>
                    <Text
                        style={{
                            width: 140,
                            padding: 5,
                            paddingLeft: 30,
                            fontSize: 20,
                        }}
                    >Selected: {selected}</Text>
                </View>
                <View
                    style={{

                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 140,
                            height: 50,
                            borderRadius: 30,
                            marginRight: 40,
                            backgroundColor: '#A11A16',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'rgba(255,255,255,1)',
                            }}
                        >Save</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
      <View
        style={{
          flex: 5,
        }}
      >
        <ScrollView>
          {freeDiscipines.map((discipline) => {
            return (
              <View
                key={v4()}
                style={{
                  flex: 1,
                  width: windowWidth,
                  marginBottom: 27,
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 4,
                  }}
                  //onPress={()=>navigation.navigate('DetailDvv')}
                  onPress={() => {
                    Linking.openURL(discipline.link);
                  }}
                >
                  <Image
                    source={require("../assets/dvvBlock.png")}
                    style={{
                      width: windowWidth,
                    }}
                  ></Image>
                  <View
                    style={{
                      flex: 2,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    <View
                      style={{
                        paddingTop: 15,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          color: "rgba(0,0,0,1)",
                        }}
                      >
                        {discipline.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        paddingTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: "rgba(0,0,0,1)",
                        }}
                      >
                        {discipline.description}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flex: 1,
                        paddingTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: "rgba(0,0,0,1)",
                          opacity: 0.5,
                        }}
                      >
                        {discipline.cafedraShort}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "rgba(0,0,0,1)",
                          opacity: 0.5,
                        }}
                      >
                        {discipline.teacher}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};
