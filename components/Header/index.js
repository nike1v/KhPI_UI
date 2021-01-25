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
                    paddingLeft: 10,
                    marginBottom: 10,
                    paddingBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
                }}
            >{props.pageName}</Text>
        </>
    )
}