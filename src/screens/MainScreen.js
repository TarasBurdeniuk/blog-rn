import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import DATA from '../data';
import PostList from '../components/PostList';

const MainScreen = ({ navigation }) => {
    const onPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    return <PostList data={DATA} onOpen={onPostHandler} />;
};

MainScreen.navigationOptions = {
    headerTitle: 'My blog',
    headerRight: <Ionicons style={{ padding: 10 }} name="ios-camera" size={24} color="#fff" />,
    headerLeft: <Ionicons style={{ padding: 10 }} name="ios-menu" size={24} color="#fff" />,
};

export default MainScreen;
