import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import THEME from '../theme';
import { addPost } from '../store/actions/post';

const CreateScreen = ({ navigation }) => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const img =
        'https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg';

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img,
            booked: false,
        };

        dispatch(addPost(post));
        navigation.navigate('Main');
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
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{
                            uri: img,
                        }}
                    />
                    <Button title="Create post" color={THEME.MAIN_COLOR} onPress={saveHandler} />
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
