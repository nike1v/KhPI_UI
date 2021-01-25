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
                        height: 140,
                        backgroundColor: 'rgba(90,77,220,1)',
                        borderRadius: 10,
                        margin: 10,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'rgba(255,255,255,1)',
                                paddingBottom: 10,
                            }}
                        >Notification Name</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'rgba(255,255,255,1)'
                            }}
                        >Notification Description</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}