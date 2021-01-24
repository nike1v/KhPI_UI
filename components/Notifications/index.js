import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';


export default () => {
    return (
        <>
            <View style={{
                zIndex: 2
            }}>
                <Header
                    pageName="Notifications"
                />
                <Text>Hello Notifications!</Text>
            </View>
        </>
    )
}