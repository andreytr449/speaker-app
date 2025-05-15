import React from 'react';
import {ScrollView, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {router} from "expo-router";
import Button from "@/components/ui/button";
import {
    NoLessonDarkImg,
    NoLessonLightImg
} from "@/assets/images/onboarding/hello_img";

const NoLessonScreen = () => {
    const {isDarkMode} = useTheme()
    return (
	    <View className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
		    <ScrollView
			    contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
              padding: 16
          }}
			    showsVerticalScrollIndicator={false}
		    >
            {isDarkMode ? <NoLessonDarkImg /> : <NoLessonLightImg />}
			    <Text
				    className={`text-headline-medium ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}
				    style={{textAlign: 'center'}}
			    >
				    Oops! The lesson isn’t ready yet
			    </Text>
			    <Text
				    className={`text-headline-xs ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}
				    style={{textAlign: 'center'}}
			    >
				    We haven’t added the material for this lesson yet. Please
				    check back later — we’re already working on it!
			    </Text>
		    </ScrollView>
			    <Button className='mb-12' onPress={() => router.push('/(tabs)/book')}>
				    Come back
			    </Button>
	    </View>
    );
};

export default NoLessonScreen;
