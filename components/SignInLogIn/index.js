import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Linking } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

const SignInLogIn = (props) => {

    //const [isSignedIn, setIsSignedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);

    const styles = StyleSheet.create({
        background: {
            position: 'absolute',
            top: 0, bottom: 0, left: 0, right: 0,
            backgroundColor: "blue",
            opacity: 0.7,
        },
        top: {
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        bottom: {
            height: '50%',
            width: '100%',
            backgroundColor: '#fff',
        },
        loginButtons: {
            display: 'flex',
            flexDirection: 'row',
            margin: 5,
            marginLeft: 'auto',
            alignItems: 'flex-end',
        },
        singInButton: {
            borderRadius: 60,
            borderWidth: 20,
            width: 20,
        }
    });

    const signInRender = () => {
        return (
            <>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 28,
                        fontWeight: 'bold',
                    }}
                >Welcome</Text>
                <Input
                    placeholder="E-Mail"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <Input
                    placeholder="Password"
                    keyboardType="default"
                    textContentType="password"
                    secureTextEntry={true}
                    style={{
                        marginTop: -20
                    }}
                />
                <Button
                    title="SIGN IN"
                    type='solid'
                    style={styles.singInButton}
                    onPress={() => props.navigation.navigate('SideBar')}
                />
                <Text style={{ color: 'gray', textAlign: 'center', margin: 23 }}
                    onPress={() => Linking.openURL('http://google.com')}>
                    Forgot your password?
                </Text>
                <Button
                    title="Create an accouont"
                    type='clear'
                />
            </>
        )
    }

    const signUpRender = () => {
        return (
            <>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}
                >Create an account</Text>
                <Input
                    placeholder="First name"
                    textContentType="name"
                    
                />
                <Input
                    placeholder="Last name"
                    textContentType="familyName"
                    style={{
                        marginTop: -20
                    }}
                />
                <Input
                    placeholder="Group member"
                    style={{
                        marginTop: -20
                    }}
                />
                <Input
                    placeholder="E-Mail"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    style={{
                        marginTop: -20
                    }}
                />
                <Button
                    title="REGISTER NOW"
                    type='solid'
                    onPress={() => props.navigation.navigate('SideBar')}
                />
            </>
        )
    }
    return (
        <>
            <ImageBackground
                style={styles.background}
                source={require('../assets/loginBackground.png')}
            />
            <View
                style={styles.top}
            >
                <Image
                    style={styles.logo}
                    source={require('../assets/Logo.png')}
                />
            </View>
            <View
                style={styles.bottom}
            >
                <View
                    style={styles.loginButtons}
                >
                    <Button
                        title="Sign in"
                        type="clear"
                        onPress={() => setIsRegistering(false)}
                    />
                    <Button
                        title="Sign up"
                        type="clear"
                        onPress={() => setIsRegistering(true)}
                    />
                </View>
                <View>
                    {isRegistering ?
                        signUpRender() :
                        signInRender()
                    }
                </View>
            </View>

        </>
    )
}

export default SignInLogIn;