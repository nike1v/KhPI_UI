import React, { useEffect, useState } from 'react';
import { ScrollView, Dimensions, } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { v4 } from 'uuid';
import Header from '../Header';

export default () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState();

    const fetching = async () => {
        try {
            setIsLoading(true);
            const res = await (await fetch(`http://schedule.kpi.kharkov.ua/json/kabinet?email=dgygurdenok@gmail.com&pass=4NaqEf&page=1`)).json();
            setProfile(res.map((el) => ({
                studentCode: el.st_cod,
                surname: el.fam,
                name: el.imya,
                givenName: el.otch,
                kurs: el.kurs,
                group: el.grupa,
                faculty: el.fakultet,
                kafedra: el.kafedra,
                spec: el.specialization,
                speciality: el.speciality,
                studyPrograme: el.osvitprog,
                graduate: el.train_level,
                graduateForm: el.train_form,
                pay: el.oplata,
                gid: el.gid,
                fid: el.fid,
                kid: el.kid,
            })));
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
                pageName="My profile"
            />
            <ScrollView>
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
                    profile.map((prof) => {
                        return (
                            <View
                                key={v4()}
                                keyboardShouldPersistTaps="always"
                                style={{
                                    width: windowWidth,
                                    flex: 1,
                                }}>
                                <View
                                    style={{
                                        height: 170,
                                        flex: 1,
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: windowWidth,
                                            height: 170,
                                        }}
                                        source={require('../assets/profileBanner.png')}
                                    />
                                </View>
                                <View
                                    style={{
                                        flex: 3,
                                        padding: 20,
                                    }}
                                >
                                    <View
                                        style={{
                                            paddingBottom: 5
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 25,
                                                color: 'rgba(90,77,220,1)'
                                            }}
                                        >{prof.surname}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >Institute</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                paddingRight: 67,
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >{prof.kafedra}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >Program</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >{prof.speciality}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >Group</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >{prof.group}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >Curator</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >Curator</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >Phone number</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >+380954569973</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >E-mail</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >Mykyta.Vlasov@infiz.khpi.edu.ua</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >Telegram</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >Telegram</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            padding: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                            }}
                                        >Instagram</Text>
                                        <Text
                                            style={{
                                                textAlign: 'right',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                            }}
                                        >Instagram</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
            </ScrollView>
        </>
    )
}