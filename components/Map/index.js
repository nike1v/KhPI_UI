import React from 'react';
import Header from '../Header';
import MapView , { PROVIDER_GOOGLE }  from 'react-native-maps';

export default () => {
    return (
        <>
            <Header
                pageName="Map"
            />
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                    latitude: 49.999186,
                    longitude: 36.248017,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003
                }}
            />
        </>
    )
}