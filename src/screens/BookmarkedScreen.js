import React from 'react';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import PostList from '../components/PostList';

const BookmarkedScreen = ({ navigation }) => {
    const onPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    const bookedPosts = useSelector(state => state.post.bookedPosts);

    return <PostList data={bookedPosts} onOpen={onPostHandler} />;
};

BookmarkedScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'My blog',
    headerLeft: (
        <Ionicons
            style={{ padding: 10 }}
            name="ios-menu"
            size={24}
            color="#000"
            onPress={() => navigation.toggleDrawer()}
        />
    ),
});

export default BookmarkedScreen;
