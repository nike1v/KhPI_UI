import React, { useState } from 'react';
import { ScrollView, Dimensions, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { v4 } from 'uuid';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [news, setNews] = useState([{
        name: 'News #1',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        theme: 'CMPS',
        ago: '5 min',
    }, {
        name: 'News #2',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        theme: 'CMPS',
        ago: '10 min',
    }, {
        name: 'News #3',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        theme: 'CMPS',
        ago: '15 min',
    }, {
        name: 'News #4',
        description: 'The process of developing a mathematical representation of any surface of an object (either inanimate or living) in three dimensions via specialized software.',
        theme: 'CMPS',
        ago: '20 min',
    }])

    return (
        <>
            <Header
                pageName="News"
            />
            <ScrollView>
                {news.map((news) => {
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
                                onPress={()=>navigation.navigate('NewsDetail')}
                            >
                                <Image
                                    style={{
                                        width: windowWidth,
                                    }}
                                    source={require('../assets/newsPreview.png')}
                                />
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
                                    >{news.name}</Text>
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
                                        >{news.description}</Text>
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
                                        >{news.theme}</Text>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: 'rgba(0,0,0,1)',
                                                opacity: 0.5,
                                            }}
                                        >{news.ago}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </>
    )
}