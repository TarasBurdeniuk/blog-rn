import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DATA from '../data';
import Post from '../components/Post';
import AppHeaderIcon from '../components/AppHeaderIcon';

const MainScreen = ({ navigation }) => {
    const onPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date });
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
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take Photo" iconName="ios-camera" onPress={() => console.log('press')} />
        </HeaderButtons>
    ),
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
});

export default MainScreen;
