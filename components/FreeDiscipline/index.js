import React from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import Header from '../Header';

export default () => {
    return (
        <>
            <View style={{
                zIndex: 2
            }}>
                <Header
                    pageName="Discipine of free choise"
                />
                <Text>Hello Discipine of free choise!</Text>
            </View>
        </>
    )
}