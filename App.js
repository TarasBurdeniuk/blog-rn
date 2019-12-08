import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppLoading} from 'expo';

export default function App() {
    const [isReady, setIsReady] = useState(false);
    if (!isReady) {
        return <AppLoading
            onFinish={() => setIsReady(true)}
            onError={(err) => console.error(err)}
        />
    }

    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}
