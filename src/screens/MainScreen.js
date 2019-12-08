import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DATA from '../data';
import Post from '../components/Post';

const MainScreen = () => {
    // const goToPost = () => {
    //     navigation.navigate('Post');
    // };

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => {
                    return <Post post={item} />;
                }}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerTitle: 'My blog',
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
});

export default MainScreen;
