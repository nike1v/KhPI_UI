import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';

export default () => {
    return (
        <>
            <Header
                pageName="News"
            />
            <View>
                <Text>Hello News!</Text>
            </View>
        </>
    )
}