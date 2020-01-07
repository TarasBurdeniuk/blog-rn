import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import PostList from '../components/PostList';
import { loadPosts } from '../store/actions/post';
import THEME from '../theme';

const MainScreen = ({ navigation }) => {
    const onPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    const allPost = useSelector(state => state.post.allPosts);
    const loading = useSelector(state => state.post.loading);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.MAIN_COLOR} />
            </View>
        );
    }

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

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainScreen;
