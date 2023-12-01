import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    FlatList,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const PostPage = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    const [newPostText, setNewPostText] = useState('');
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isChoosingVideo, setIsChoosingVideo] = useState(false);
    const [isCreatingPost, setIsCreatingPost] = useState(false);

    const handleCreatePost = async () => {
        if (newPostText || selectedVideo) {
            setIsCreatingPost(true);
            try {
                // Simulate an asynchronous operation (e.g., API call) for creating a post
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const newPost = {
                    id: posts.length + 1,
                    text: newPostText,
                    video: selectedVideo,
                    user: { name: 'John Doe', profilePicture: require('path/to/default/profile/picture.jpg') },
                    timestamp: new Date().toISOString(),
                };

                setPosts([newPost, ...posts]);
                setNewPostText('');
                setSelectedVideo(null);
            } catch (error) {
                console.error('Error creating post:', error);
            } finally {
                setIsCreatingPost(false);
            }
        }
    };

    const handleChooseVideo = () => {
        setIsChoosingVideo(true);
        const options = { mediaType: 'video', videoQuality: 'medium' };

        ImagePicker.launchImageLibrary(options, (response) => {
            setIsChoosingVideo(false);
            if (response.uri) {
                setSelectedVideo(response);
            }
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Welcome to MateFlix</Text>

            <TextInput
                style={styles.input}
                placeholder="What's on your mind?"
                value={newPostText}
                onChangeText={(text) => setNewPostText(text)}
            />

            <TouchableOpacity style={styles.chooseVideoButton} onPress={handleChooseVideo} disabled={isChoosingVideo}>
                <Text>{isChoosingVideo ? 'Choosing Video...' : 'Choose Video'}</Text>
            </TouchableOpacity>

            {selectedVideo && (
                <View style={styles.videoContainer}>
                    <Text>Selected Video:</Text>
                    <Text>{selectedVideo.fileName}</Text>
                </View>
            )}

            <Button title={isCreatingPost ? 'Posting...' : 'Post'} onPress={handleCreatePost} disabled={isCreatingPost} />

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.post}>
                        <View style={styles.userContainer}>
                            <Image source={item.user.profilePicture} style={styles.profilePicture} />
                            <Text style={styles.userName}>{item.user.name}</Text>
                        </View>
                        <Text>{item.text}</Text>
                        {item.video && (
                            <View>
                                <Text>Video:</Text>
                                <Text>{item.video.fileName}</Text>
                            </View>
                        )}
                        <Text style={styles.timestamp}>{item.timestamp}</Text>
                    </View>
                )}
            />

            <Button title="Go to Another Page" onPress={() => navigation.navigate('AnotherPage')} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 },
    chooseVideoButton: { backgroundColor: '#e4e6eb', padding: 10, borderRadius: 5, marginBottom: 10 },
    videoContainer: { marginTop: 10 },
    post: { borderWidth: 1, borderColor: 'gray', padding: 10, marginVertical: 5 },
    userContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    profilePicture: { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
    userName: { fontWeight: 'bold' },
    timestamp: { color: 'gray', fontSize: 12 },
});

export default PostPage;
