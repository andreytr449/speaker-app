import React from 'react';
import {Text, View} from "react-native";

const CompletedLessonScreen = () => {
    return (
      <View>
          <Text className="text-center text-xl mt-10 text-primary">
              🎉 You've completed the lesson!
          </Text>
      </View>
    );
};

export default CompletedLessonScreen;