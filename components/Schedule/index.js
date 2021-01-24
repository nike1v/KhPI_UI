import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';

export default () => {
    return (
        <>
            <Header
                pageName="Schedule"
            />
            <View>
                <Text>Hello Schedule!</Text>
            </View>
        </>
    )
}