import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default (props) => {
    return (
        <>
            <Text 
                h2
                style={{
                    marginTop: 20,
                    marginLeft: 10
                }}
            >{props.pageName}</Text>
            <View
                style={{
                    marginTop: 30,
                }}
            />
        </>
    )
}