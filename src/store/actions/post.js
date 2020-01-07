import * as FileSystem from 'expo-file-system';
import { LOAD_POSTS, TOGGLE_BOOKED, REMOVE_POST, ADD_POST } from '../types';
import DB from '../../db';

export const loadPosts = () => async dispatch => {
    try {
        const posts = await DB.getPost();
        dispatch({
            type: LOAD_POSTS,
            payload: posts,
        });
    } catch (err) {
        console.log(err);
    }
};

export const toggleBooked = post => async dispatch => {
    try {
        await DB.updatePost(post);

        dispatch({
            type: TOGGLE_BOOKED,
            payload: post.id,
        });
    } catch (err) {
        console.log(err);
    }
};

export const removePost = id => async dispatch => {
    try {
        await DB.removePost(id);

        dispatch({
            type: REMOVE_POST,
            payload: id,
        });
    } catch (err) {
        console.log(err);
    }
};

export const addPost = post => async dispatch => {
    const fileName = post.img.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img,
        });
    } catch (err) {
        console.log(err);
    }

    const payload = { ...post, img: newPath };
    payload.id = await DB.createPost(payload);

    dispatch({
        type: ADD_POST,
        payload,
    });
};
