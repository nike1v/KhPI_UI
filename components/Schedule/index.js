import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';
import ClassesRender from './classesRender';

export default () => {

    const [dayNumber, setDayNumber] = useState({
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
    });
    const [renderDay, setRenderDay] = useState();
    const [choosenDay, setChoosenDay] = useState('Black')
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const date = new Date();
    const week = date.getDay();

    const getDayNumber = (weekDay) => {
        let today = date.getDate();
        switch (weekDay) {
            case 1:
                setDayNumber({
                    Monday: today,
                    Tuesday: today + 1,
                    Wednesday: today + 2,
                    Thursday: today + 3,
                    Friday: today + 4,
                });
                break;
            case 2:
                setDayNumber({
                    Monday: today - 1,
                    Tuesday: today,
                    Wednesday: today + 1,
                    Thursday: today + 2,
                    Friday: today + 3,
                });
                break;
            case 3:
                setDayNumber({
                    Monday: today - 2,
                    Tuesday: today - 1,
                    Wednesday: today,
                    Thursday: today + 1,
                    Friday: today + 2,
                });
                break;
            case 4:
                setDayNumber({
                    Monday: today - 3,
                    Tuesday: today - 2,
                    Wednesday: today - 1,
                    Thursday: today,
                    Friday: today + 1,
                });
                break;
            case 5:
                setDayNumber({
                    Monday: today - 4,
                    Tuesday: today - 3,
                    Wednesday: today - 2,
                    Thursday: today - 1,
                    Friday: today,
                });
                break;
            default:
                setDayNumber({
                    Monday: today,
                    Tuesday: today + 1,
                    Wednesday: today + 2,
                    Thursday: today + 3,
                    Friday: today + 4,
                });
                break;
        }
    }

    const setDefaultWeekday = (weekDay) => {
        switch (weekDay) {
            case 0:
            case 6:
            case 1:
                setRenderDay('Monday');
                break;
            case 2:
                setRenderDay('Tuesday');
                break;
            case 3:
                setRenderDay('Wednesday');
                break;
            case 4:
                setRenderDay('Thursday');
                break;
            case 5:
                setRenderDay('Friday');
                break;
        }
    }

    useEffect(() => {
        setDefaultWeekday(week);
        getDayNumber(week);
    }, [])

    return (
        <>
            <Header
                pageName="Schedule"
            />
            <View
                style={{
                    width: windowWidth,
                }}
            >
                <ScrollView
                    horizontal={true}
                    keyboardShouldPersistTaps="always"
                    style={{
                        width: windowWidth,
                        borderBottomWidth: 2,
                        borderBottomColor: 'rgba(0, 0, 0, 0.12)',
                    }}
                >
                    <TouchableOpacity
                        onPress={() => { setRenderDay('Monday') }}
                        style={{
                            width: windowWidth / 5,
                        }}
                    >
                        <Text
                            style={{
                                padding: 5,
                                textAlign: 'center',
                            }}
                        >Mon</Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingBottom: 10,
                            }}
                        >{dayNumber.Monday}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setRenderDay('Tuesday') }}
                        style={{
                            width: windowWidth / 5,
                        }}
                    >
                        <Text
                            style={{
                                padding: 5,
                                textAlign: 'center',
                            }}
                        >Tue</Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingBottom: 10,
                            }}
                        >{dayNumber.Tuesday}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setRenderDay('Wednesday') }}
                        style={{
                            width: windowWidth / 5,
                        }}
                    >
                        <Text
                            style={{
                                padding: 5,
                                textAlign: 'center',
                            }}
                        >Wed</Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingBottom: 10,
                            }}
                        >{dayNumber.Wednesday}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setRenderDay('Thursday') }}
                        style={{
                            width: windowWidth / 5,
                        }}
                    >
                        <Text
                            style={{
                                padding: 5,
                                textAlign: 'center',
                            }}
                        >Thu</Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingBottom: 10,
                            }}
                        >{dayNumber.Thursday}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setRenderDay('Friday') }}
                        style={{
                            width: windowWidth / 5,
                        }}
                    >
                        <Text
                            style={{
                                padding: 5,
                                textAlign: 'center',
                            }}
                        >Fri</Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingBottom: 10,
                            }}
                        >{dayNumber.Friday}</Text>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView
                    style={{
                        marginBottom: 150,
                    }}
                >
                    <ClassesRender renderDay={renderDay} />
                </ScrollView>
            </View>
        </>
    )
}