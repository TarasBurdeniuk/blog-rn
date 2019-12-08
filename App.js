import React, { useState } from 'react';
import { Alert } from 'react-native';
import { AppLoading } from 'expo';
import bootstrap from './src/bootstrap';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
    const [isReady, setIsReady] = useState(false);
    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={err => Alert.alert('Error', `${err}`)}
            />
        );
    }

    return <AppNavigation />;
}
