import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import PostList from '../components/PostList';
import { loadPosts } from '../store/actions/post';

const MainScreen = ({ navigation }) => {
    const onPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    const allPost = useSelector(state => state.post.allPosts);

    return <PostList data={allPost} onOpen={onPostHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'My blog',
    headerRight: (
        <Ionicons
            style={{ padding: 10 }}
            name="ios-camera"
            size={24}
            color="#000"
            onPress={() => navigation.push('Create')}
        />
    ),
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

export default MainScreen;
