import React, { useState } from 'react';
import { View, Dimensions, } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();
    const [applicationList, setApplicationList] = useState([
        {
            name: 'Нарахування додаткових балів до стипендіального рейтингу',
            id: 0,
        }, {
            name: 'Зміна джерела фінансування',
            id: 1,
        }, {
            name: 'Повторний курс навчання',
            id: 2,
        }, {
            name: 'Нарахування соціальної стипендії',
            id: 3,
        }, {
            name: 'Відрахування за власним бажанням',
            id: 4,
        }, {
            name: 'Поновлення до складу студентів (після відрахування)',
            id: 5,
        }, {
            name: 'Академічна відпустка',
            id: 6,
        }, {
            name: 'Переведення здобувачів вищої освіти',
            id: 7,
        }, {
            name: 'Зміна особистих даних (прізвища)',
            id: 8,
        }, {
            name: 'Зняття копії документів, що знаходяться у відділі кадрів',
            id: 9,
        }, {
            name: 'Видача оригінала ЗНО',
            id: 10,
        }, {
            name: 'Поліпшення оцінки',
            id: 11,
        }, {
            name: 'Перерахування оцінок',
            id: 12,
        }, {
            name: 'E-Ticket',
            id: 13,
        },
    ]);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <>
            <Header
                pageName="Application"
            />
            <ScrollView>
                {applicationList.map((application) => {
                    return (
                        <TouchableOpacity
                            style={{
                                backgroundColor: "rgba(90,77,220,1)",
                                width: windowWidth,
                                height: 70,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 10,
                                marginTop: 10,
                            }}
                            key={application.id}
                            applicationId={application.id}
                            onPress={() => {
                                navigation.navigate('ApplicationDetail', {
                                    applicationId: application.id,
                                });
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'rgba(255,255,255,1)',
                                        fontSize: 18,
                                    }}
                                >{application.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </>
    )
}