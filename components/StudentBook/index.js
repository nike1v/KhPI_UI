import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';
import { v4 } from 'uuid';

export default () => {

    const [isLoading, setIsLoading] = useState(false);
    const [subjRes, setSubjRes] = useState();
    const [semestr, setSemestr] = useState('6');

    const windowWidth = Dimensions.get('window').width;

    const fetching = async (semestr) => {
        setSemestr(semestr);
        try {
            setIsLoading(true);
            const res = await (await fetch(`http://schedule.kpi.kharkov.ua/JSON/kabinet?email=dgygurdenok@gmail.com&pass=4NaqEf&page=2&semestr=${semestr}`)).json();
            setSubjRes(res.map((el) => ({
                subj_id: el.subj_id,
                subject: el.subject,
                teacher: el.prepod,
                kafedra: el.kafedra,
                kafedraShort: el.kabr,
                markInt: el.oc_short,
                markNational: el.oc_naz,
                markBigInt: el.oc_bol,
                markEcts: el.oc_ects,
                credits: el.credit,
                data: el.data,
                personalExs: el.indzav,
                hvost: false,
                control: el.control,
            })));
            setIsLoading(false);
            //console.log('subjRes', subjRes);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetching(semestr);
    }, [semestr])

    const renderMarks = () => {
        return (
            <>
                {isLoading ?
                    <Text>Loading!</Text> :
                    subjRes.map((studentMarks) => {
                        return (
                            <View
                                key={v4()}
                                keyboardShouldPersistTaps="always"
                                style={{
                                    width: windowWidth,
                                    flex: 1,
                                }}
                            >
                                <View
                                    style={{
                                        height: 100,
                                        backgroundColor: 'rgba(90,77,220,1)',
                                        margin: 10,
                                        borderRadius: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            marginLeft: 20,
                                            marginRight: 20,
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,1)',
                                                position: 'fixed',

                                            }}
                                        >{studentMarks.kafedraShort}</Text>
                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,1)',
                                            }}
                                        >{studentMarks.teacher}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            marginLeft: 20,
                                            marginRight: 20,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,1)'
                                            }}
                                        >{studentMarks.subject}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            marginLeft: 20,
                                            marginRight: 20,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,1)'
                                            }}
                                        >НАЦ {studentMarks.markInt}</Text>
                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,1)'
                                            }}
                                        >БАЛ {studentMarks.markBigInt}</Text>
                                        <Text
                                            style={{
                                                color: 'rgba(255,255,255,1)'
                                            }}
                                        >ECTS {studentMarks.markEcts}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
            </>
        )
    }


    return (
        <View>
            <Header
                pageName="Student Book"
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
                    onPress={() => fetching(1)}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Course 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(3)}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Course 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(5)}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Course 3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(7)}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Course 4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(9)}
                    style={{
                        width: windowWidth / 5,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Course 5</Text>
                </TouchableOpacity>
            </ScrollView>
            <ScrollView
                horizontal={true}
                keyboardShouldPersistTaps="always"
                style={{
                    width: windowWidth,
                    paddingTop: 5,
                }}
            >
                <TouchableOpacity
                    onPress={() => fetching(semestr)}
                    style={{
                        width: windowWidth / 2,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >First semester</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(semestr + 1)}
                    style={{
                        width: windowWidth / 2,
                    }}
                >
                    <Text
                        style={{
                            padding: 5,
                            textAlign: 'center'
                        }}
                    >Second semeseter</Text>
                </TouchableOpacity>
            </ScrollView>
            <View
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    widht: windowWidth,
                }}
            />
            <ScrollView>
                {renderMarks()}
            </ScrollView>
        </View>
    )
}