import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import THEME from '../theme';
import { addPost } from '../store/actions/post';
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const imgRef = useRef();

    const dispatch = useDispatch();

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img: imgRef.current,
            booked: false,
        };

        dispatch(addPost(post));
        navigation.navigate('Main');
    };

    const photoPickHandler = uri => {
        imgRef.current = uri;
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Create Post</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="text"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button
                        title="Create post"
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!text}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create post',
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
    wrapper: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10,
    },
    textInput: {
        padding: 10,
        marginBottom: 10,
    },
});

export default CreateScreen;
