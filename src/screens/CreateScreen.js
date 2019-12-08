import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CreateScreen = () => {
    return (
        <View style={styles.center}>
            <Text>create screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateScreen;
