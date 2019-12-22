import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CreateScreen = () => {
    return (
        <View style={styles.center}>
            <Text>create screen</Text>
        </View>
    );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create post',
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
});

export default CreateScreen;
