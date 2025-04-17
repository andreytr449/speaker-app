import React from 'react';
import {Text, View} from "react-native";
import useTheme from "@/store/theme";
import {FiendFriendsDark, FiendFriendsLight} from "@/assets/images/onboarding/hello_img";

const ChatFriendScreen = () => {
    const {isDarkMode} = useTheme()

    return (
      <View className='mt-6'>
          {isDarkMode ?
          <FiendFriendsDark />
              :
              <FiendFriendsLight />
          }
          <View className='mt-5 max-w-[270px]'>
              <Text
                  className={`text-headline-small${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}
                  style={{textAlign: 'center'}}>
                    Make friends with a native speaker and improve your English
              </Text>
          </View>
      </View>
    );
};

export default ChatFriendScreen;