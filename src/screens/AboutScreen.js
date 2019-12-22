import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutScreen = () => {
    return (
        <View style={styles.center}>
            <Text>Simple Blog App</Text>
            <Text>
                Version application <Text style={styles.version}>1.0.0</Text>
            </Text>
        </View>
    );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'About App',
    headerLeft: (
        <Ionicons
            style={{ padding: 10 }}
            name="ios-menu"
            size={24}
            color="#fff"
            onPress={() => navigation.toggleDrawer()}
        />
    ),
});

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    version: {
        fontFamily: 'open-bold',
    },
});

export default AboutScreen;
