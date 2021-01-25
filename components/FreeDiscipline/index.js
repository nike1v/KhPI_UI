import React, { useState } from 'react';
import { Text, } from 'react-native-elements';
import { View, TouchableOpacity, Image, ScrollView, Dimensions, } from 'react-native';
import Header from '../Header';
import { v4 } from 'uuid';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    const [needed, setNeeded] = useState('3');
    const [selected, setSelected] = useState('1');
    const [freeDiscipines, setFreeDisciplines] = useState([{
        name: 'Modeling',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        cafedraShort: 'CMPS',
        teacher: 'Mietelov V. O.',
    }, {
        name: 'Modeling2',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        cafedraShort: 'CMPS',
        teacher: 'Mietelov V. O.',
    }, {
        name: 'Modeling3',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        cafedraShort: 'CMPS',
        teacher: 'Mietelov V. O.',
    }, {
        name: 'Modeling4',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        cafedraShort: 'CMPS',
        teacher: 'Mietelov V. O.',
    }])

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <>
            <Header
                pageName="Discipine of free choise"
            />
            <View
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
                    >Need: {needed}</Text>
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
                            backgroundColor: 'rgba(90,77,220,1)',
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
            </View>
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
                                    onPress={()=>navigation.navigate('DetailDvv')}
                                >
                                    <Image
                                        source={require('../assets/dvvBlock.png')}
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
                                                    color: 'rgba(0,0,0,1)'
                                                }}
                                            >{discipline.name}</Text>
                                        </View>
                                        <View
                                            style={{
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    color: 'rgba(0,0,0,1)'
                                                }}
                                            >{discipline.description}</Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                flex: 1,
                                                paddingTop: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    color: 'rgba(0,0,0,1)',
                                                    opacity: 0.5,
                                                }}
                                            >{discipline.cafedraShort}</Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    color: 'rgba(0,0,0,1)',
                                                    opacity: 0.5,
                                                }}
                                            >{discipline.teacher}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </>
    )
}