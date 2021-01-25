import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { v4 } from 'uuid';
import Header from '../Header';

export default () => {


    const [scheduleResult, setScheduleResult] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const fetching = async () => {
        try {
            setIsLoading(true);
            const res = await (await fetch(`http://schedule.kpi.kharkov.ua/json/Schedule/10463/`)).json();
            setScheduleResult([{
                Monday: res.Monday,
                Tuesday: res.Tuesday,
                Wednesday: res.Wednesday,
                Thursday: res.Thursday,
                Friday: res.Friday,
            }]);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetching();
    }, [])

    return (
        <>
            <Header
                pageName="Schedule"
            />
            <ScrollView
                horizontal={true}
                keyboardShouldPersistTaps="always"
                style={{
                    width: windowWidth,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
                    paddingBottom: 10,
                }}
            >
                <TouchableOpacity
                    onPress={() => console.log('1')}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Mon</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('1')}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Tue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('1')}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Wed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('1')}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Thu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('1')}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Fri</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('1')}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Sat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('1')}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Sun</Text>
                </TouchableOpacity>
            </ScrollView>
            {isLoading ?
                <Text
                    style={{
                        width: windowWidth,
                        height: windowHeight / 2,
                        flex: 1,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontSize: 26,
                    }}
                >Loading!</Text> :
                scheduleResult.map((weekday) => {
                    return (
                        <View
                                key={v4()}
                                keyboardShouldPersistTaps="always"
                                style={{
                                    width: windowWidth,
                                    flex: 1,
                                }}
                            >
                            <Text>{weekday.Monday.Para1.Name}</Text>
                        </View>
                    )
                })
            }
        </>
    )
}