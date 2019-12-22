import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import DATA from '../data';
import PostList from '../components/PostList';

const BookmarkedScreen = ({ navigation }) => {
    const onPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    return <PostList data={DATA.filter(post => post.booked)} onOpen={onPostHandler} />;
};

BookmarkedScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'My blog',
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

export default BookmarkedScreen;
