import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';

export default () => {
    return (
        <>
            <Header
                pageName="Profile"
            />
            <View>
                <Text>Hello Profile!</Text>
            </View>
        </>
    )
}