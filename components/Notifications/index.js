import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';


export default () => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <>
            <Header
                pageName="Notifications"
            />
            <ScrollView>
                <View
                    style={{
                        width: windowWidth - 20,
                        backgroundColor: 'rgba(90,77,220,1)',
                        borderRadius: 10,
                        padding: 10,
                        margin: 10,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'rgba(255,255,255,1)',
                                paddingBottom: 10,
                                textAlign: 'center',
                            }}
                        >Повідомлення</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'rgba(255,255,255,1)',
                                paddingLeft: 15,
                            }}
                        >Студенти зі списку все ще не подовжили договір на проживання.
                            В останній колонці стоять «+» у тих студентів, що попередили мене, вказали причину та найближчим часом подовжать договір і майже всі з них оплатили проживання у гуртожитку включаючи липень та серпень. У понеділок, 1 березня після 14:30, згідно наказу 58ОД, я подам до дирекції студмістечка списки студентів, що не пізніше 30 червня повинні виселитися з гуртожитку з обов’язковою здачею кімнати, майна університету, ключів, перепустки адміністрації гуртожитку та зняття з реєстрації. Повторне поселення у вересні зовсім не буде означати, що студент потрапить у ту саму кімнату де мешкав, у цьому випадку.
                            В цьому списку будуть всі, в кого НЕ стоять в останній колонці «+». У всіх інших є можливість знайти мене у понеділок з 10:00 до 14:00 в математичному корпусі на кафедрі комп’ютерного моделювання процесів та систем (https://g.page/CMPS_Department?share), каб. 7.

В кого стоять «+», також не зволікайте, я на вас чекаю та сподіваюсь на вашу відповідальність.</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: windowWidth - 20,
                        backgroundColor: 'rgba(90,77,220,1)',
                        borderRadius: 10,
                        padding: 10,
                        margin: 10,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'rgba(255,255,255,1)',
                                paddingBottom: 10,
                                textAlign: 'center',
                            }}
                        >Повідомлення</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'rgba(255,255,255,1)',
                                paddingLeft: 15,
                            }}
                        >ВІТАЄМО ПЕРЕМОЖЦІВ
                        І туру Всеукраїнської студентської олімпіади з програмування
                        
                        І місце:  Габзовський Андрій (І-219г)    64 бали
                        ІІ місце: Волошко Максим (І-219д)    50 балів
                        ІІІ місце:
                        Чуйко Олександр (І-120)      44 бали
                        Стрельцов Артем (І-219г)      43 бали
                        Пономаренко Олексій (І-220б)    42 бали
                        
                        Дякуємо всім учасникам і бажаємо успіхів у подальших змаганнях!</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}