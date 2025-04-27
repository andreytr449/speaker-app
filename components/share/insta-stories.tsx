import React, { useRef } from 'react';
import {Pressable, View} from 'react-native';
import InstagramStories, {
    InstagramStoriesProps,
    InstagramStoriesPublicMethods
} from '@birdwingo/react-native-instagram-stories';


const InstaStories = ({isDarkMode}:{isDarkMode:boolean}) => {
    const ref = useRef<InstagramStoriesPublicMethods>( null );

    const stories: InstagramStoriesProps['stories'] = [{
        id: 'user1',
        avatarSource: { uri: 'https://i.pinimg.com/736x/85/ef/1c/85ef1c5221c04e2da683f4b77e58555f.jpg', },
        stories: [
            { id: 'story1', source: { uri: 'https://i.pinimg.com/736x/85/ef/1c/85ef1c5221c04e2da683f4b77e58555f.jpg' } },
            { id: 'story2', source: { uri: 'https://i.pinimg.com/736x/1a/89/20/1a8920a6273d855134ce98229f6d32a7.jpg' } },

        ]},
        {
            id: 'user2',
            avatarSource: { uri: 'https://i.pinimg.com/736x/17/2c/f8/172cf8248275d434e5ec9a6052b27141.jpg', },
            stories: [
                { id: 'story1', source: { uri: 'https://i.pinimg.com/736x/17/2c/f8/172cf8248275d434e5ec9a6052b27141.jpg' } },
                { id: 'story2', source: { uri: 'https://i.pinimg.com/736x/c4/b6/af/c4b6af54ae76168a80d32bbd6b6a931a.jpg' } },
                { id: 'story3', source: { uri: 'https://i.pinimg.com/736x/06/14/c5/0614c536ef2875e3f531d498b95df905.jpg' } },

            ]},
        {
            id: 'user3',
            avatarSource: { uri: 'https://i.pinimg.com/736x/46/88/29/4688296a1c1a7b5bcb2af01a375a0a91.jpg', },
            stories: [
                { id: 'story1', source: { uri: 'https://i.pinimg.com/736x/46/88/29/4688296a1c1a7b5bcb2af01a375a0a91.jpg' } },
                { id: 'story2', source: { uri: 'https://i.pinimg.com/736x/e7/fa/a9/e7faa9a4641cc437d7f460d90f154499.jpg' } },
                { id: 'story3', source: { uri: 'https://i.pinimg.com/736x/6b/2a/90/6b2a907940b85ca90faa6ee8342e6384.jpg' } },

            ]},
    ];

    const setStories = () => ref.current?.setStories( stories );

    return (
        <View>
            <InstagramStories
                ref={ref}
                stories={stories}
                avatarListContainerStyle={{
                    gap: 10,
                }}
                showName={false}
                avatarBorderColors={['#007AFF']}
            />
            <Pressable className='justify-center ' onPress={setStories}></Pressable>
        </View>
    );
};

export default InstaStories;