import React from 'react';
import { View, StyleSheet, Image, Text, Button, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DATA from '../data';
import THEME from '../theme';

const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId');

    const post = DATA.find(p => p.id === postId);

    const removeHandler = () => {
        Alert.alert(
            'Removing post',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'REMOVE',
                    style: 'destructive',
                    onPress: () => {},
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title="Remove" color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    );
};

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date');
    const booked = navigation.getParam('booked');
    const icon = booked ? 'ios-star' : 'ios-star-outline';

    return {
        headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
        headerRight: <Ionicons style={{ padding: 10 }} name={icon} size={24} color="#fff" />,
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'open-regular',
    },
});

export default PostScreen;
