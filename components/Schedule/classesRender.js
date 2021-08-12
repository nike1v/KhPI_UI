import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { View, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Text } from "react-native-elements";

const ClassesRender = (props) => {
  const [scheduleResult, setScheduleResult] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const setSchedule = {
    Monday: {
      Para1: {
        Name: "Економіка та организація виробництва програмних продуктів (Лекція)",
        Aud: "Онлайн",
        vid: "1",
        Prepod: "Іванченко К. О.",
      },
      Para2: {
        Name: "Методи та системи штучного інтелекту",
        Aud: "Онлайн",
        vid: "2",
        Prepod: "Успеньский В. Б.",
      },
      Para3: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 14",
        vid: "3",
        Prepod: "Іванченко К. О.",
      },
      Para4: {
        Name: "Паралельні та розподільні обчислення",
        Aud: "КМПС 4",
        vid: "4",
        Prepod: "Бреславський Д. В.",
      },
      Para5: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 3",
        vid: "5",
        Prepod: "Метельов В. О.",
      },
      Para6: {
        Name: "Алгебра чисел",
        Aud: "КМПС 13",
        vid: "6",
        Prepod: "Татарінова О. А.",
      },
    },
    Tuesday: {
      Para1: {
        Name: "Економіка та организація виробництва програмних продуктів (Лекція)",
        Aud: "Онлайн",
        vid: "1",
        Prepod: "123",
      },
      Para2: {
        Name: "Методи та системи штучного інтелекту",
        Aud: "Онлайн",
        vid: "2",
        Prepod: "Успеньский В. Б.",
      },
      Para3: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 14",
        vid: "3",
        Prepod: "Іванченко К. О.",
      },
      Para4: {
        Name: "Паралельні та розподільні обчислення",
        Aud: "КМПС 4",
        vid: "4",
        Prepod: "Бреславський Д. В.",
      },
      Para5: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 3",
        vid: "5",
        Prepod: "Метельов В. О.",
      },
      Para6: {
        Name: "Алегбра чисел",
        Aud: "КМПС 13",
        vid: "6",
        Prepod: "Татарінова О. А.",
      },
    },
    Wednesday: {
      Para1: {
        Name: "Економіка та организація виробництва програмних продуктів (Лекція)",
        Aud: "Онлайн",
        vid: "1",
        Prepod: "3123",
      },
      Para2: {
        Name: "Методи та системи штучного інтелекту",
        Aud: "Онлайн",
        vid: "2",
        Prepod: "Успеньский В. Б.",
      },
      Para3: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 14",
        vid: "3",
        Prepod: "Іванченко К. О.",
      },
      Para4: {
        Name: "Паралельні та розподільні обчислення",
        Aud: "КМПС 4",
        vid: "4",
        Prepod: "Бреславський Д. В.",
      },
      Para5: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 3",
        vid: "5",
        Prepod: "Метельов В. О.",
      },
      Para6: {
        Name: "Алегбра чисел",
        Aud: "КМПС 13",
        vid: "6",
        Prepod: "Татарінова О. А.",
      },
    },
    Thursday: {
      Para1: {
        Name: "Економіка та организація виробництва програмних продуктів (Лекція)",
        Aud: "Онлайн",
        vid: "1",
        Prepod: "123412",
      },
      Para2: {
        Name: "Методи та системи штучного інтелекту",
        Aud: "Онлайн",
        vid: "2",
        Prepod: "Успеньский В. Б.",
      },
      Para3: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 14",
        vid: "3",
        Prepod: "Іванченко К. О.",
      },
      Para4: {
        Name: "Паралельні та розподільні обчислення",
        Aud: "КМПС 4",
        vid: "4",
        Prepod: "Бреславський Д. В.",
      },
      Para5: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 3",
        vid: "5",
        Prepod: "Метельов В. О.",
      },
      Para6: {
        Name: "Алегбра чисел",
        Aud: "КМПС 13",
        vid: "6",
        Prepod: "Татарінова О. А.",
      },
    },
    Friday: {
      Para1: {
        Name: "Економіка та организація виробництва програмних продуктів (Лекція)",
        Aud: "Онлайн",
        vid: "1",
        Prepod: "634",
      },
      Para2: {
        Name: "Методи та системи штучного інтелекту",
        Aud: "Онлайн",
        vid: "2",
        Prepod: "Успеньский В. Б.",
      },
      Para3: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 14",
        vid: "3",
        Prepod: "Іванченко К. О.",
      },
      Para4: {
        Name: "Паралельні та розподільні обчислення",
        Aud: "КМПС 4",
        vid: "4",
        Prepod: "Бреславський Д. В.",
      },
      Para5: {
        Name: "Тестування програмних систем",
        Aud: "КМПС 3",
        vid: "5",
        Prepod: "Метельов В. О.",
      },
      Para6: {
        Name: "Алегбра чисел",
        Aud: "КМПС 13",
        vid: "6",
        Prepod: "Татарінова О. А.",
      },
    },
  };

  const fetching = async () => {
    try {
      setIsLoading(true);
      //const res = await (await fetch(`http://schedule.kpi.kharkov.ua/json/Schedule/10463/`)).json();
      setScheduleResult([
        {
          Monday: setSchedule.Monday,
          Tuesday: setSchedule.Tuesday,
          Wednesday: setSchedule.Wednesday,
          Thursday: setSchedule.Thursday,
          Friday: setSchedule.Friday,
        },
      ]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const timesheet = {
    Para1: "8:30 - 10:05",
    Para2: "10:25 - 12:00",
    Para3: "12:35 - 14:10",
    Para4: "14:30 - 16:05",
    Para5: "16:25 - 18:00",
    Para6: "18:10 - 19:45",
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <View>
      {isLoading ? (
        <Text
          style={{
            width: windowWidth,
            height: windowHeight / 2,
            textAlign: "center",
            textAlignVertical: "center",
            fontSize: 26,
          }}
        >
          Loading!
        </Text>
      ) : (
        scheduleResult.map((scheduleByWeekday) => {
          const classesArray = Object.entries(
            scheduleByWeekday[props.renderDay]
          );
          return classesArray.map(([classesTime, classesDescription]) => {
            return (
              <ScrollView
                key={v4()}
                keyboardShouldPersistTaps="always"
                style={{
                  width: windowWidth,
                }}
              >
                <View
                  style={{
                    minHeight: 100,
                    backgroundColor: "#A11A16",
                    margin: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        width: windowWidth / 2,
                        color: "rgba(255,255,255,1)",
                      }}
                    >
                      {classesDescription.Name}
                    </Text>
                    <Text
                      style={{
                        color: "rgba(255,255,255,1)",
                      }}
                    >
                      {classesDescription.Aud}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: "rgba(255,255,255,1)",
                      }}
                    >
                      {timesheet[classesTime]}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: "rgba(255,255,255,1)",
                      }}
                    >
                      {classesDescription.Prepod}
                    </Text>
                    <Text
                      style={{
                        color: "rgba(255,255,255,1)",
                      }}
                    >
                      Пара {classesDescription.vid}
                    </Text>
                  </View>
                </View>
              </ScrollView>
            );
          });
        })
      )}
    </View>
  );
};

export default ClassesRender;
