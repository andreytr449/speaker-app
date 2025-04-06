import { Text, View } from "react-native";
import { Appearance, useColorScheme } from 'react-native';

export default function Index() {
    let colorScheme = useColorScheme();


    return (
    <View>
      <Text  className='text-body-large color-neutral-950 font-bold'>Typography - SF Pro Text</Text>
    </View>
  );
}
