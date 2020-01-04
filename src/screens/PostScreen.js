import React, { useEffect, useCallback } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button,
    ScrollView,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import THEME from '../theme';
import { toggleBooked, removePost } from '../store/actions/post';

const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const postId = navigation.getParam('postId');

    const post = useSelector(state => state.post.allPosts.find(item => item.id === postId));

    const booked = useSelector(state => state.post.bookedPosts.some(item => item.id === postId));

    useEffect(() => {
        navigation.setParams({ booked });
    }, [booked]);

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        navigation.setParams({ toggleHandler });
    }, [toggleHandler]);

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
                    onPress: () => {
                        navigation.navigate('Main');
                        dispatch(removePost(postId));
                    },
                },
            ],
            { cancelable: false },
        );
    };

    if (!post) {
        return null;
    }

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
    const toggleHandler = navigation.getParam('toggleHandler');
    const icon = booked ? 'ios-star' : 'ios-star-outline';

    return {
        headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
        headerRight: (
            <TouchableOpacity onPress={toggleHandler}>
                <Ionicons style={{ padding: 10 }} name={icon} size={24} color="#000" />
            </TouchableOpacity>
        ),
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
