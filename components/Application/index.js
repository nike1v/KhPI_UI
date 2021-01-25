import React from 'react';
import { View, Dimensions, } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <>
            <Header
                pageName="Application"
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "rgba(90,77,220,1)",
                    width: windowWidth,
                    height: 70,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
                onPress={()=>navigation.navigate('ApplicationDetail')}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'rgba(255,255,255,1)',
                        fontSize: 18,
                    }}
                >e-ticket</Text>
            </TouchableOpacity>
        </>
    )
}