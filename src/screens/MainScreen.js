import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DATA from '../data';
import Post from '../components/Post';

const MainScreen = ({ navigation }) => {
    const onPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => {
                    return <Post post={item} onOpen={onPostHandler} />;
                }}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'My blog',
    headerRight: <Ionicons style={{ padding: 10 }} name="ios-camera" size={24} color="#fff" />,
    headerLeft: <Ionicons style={{ padding: 10 }} name="ios-menu" size={24} color="#fff" />,
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    icon: {
        padding: 10,
    },
});

export default MainScreen;
