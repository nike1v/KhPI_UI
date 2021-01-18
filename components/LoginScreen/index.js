import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';

export default () => {
    const styles = StyleSheet.create({
        logo: {
        },
        background: {
            position: 'absolute',
            top: 0, bottom: 0, left: 0, right: 0,
            backgroundColor: "blue",
            opacity: 0.7,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <>
            <ImageBackground
                style={styles.background}
                source={require('../assets/loginBackground.png')}
            >
                <Image
                    style={styles.logo}
                    source={require('../assets/Logo.png')}
                />
            </ImageBackground>
        </>
    )
}


