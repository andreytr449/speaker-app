import {Tabs} from 'expo-router';
import useTheme from "@/store/theme";
import {
    Book,
    BookActive, ChatIcon,
    ChatIconActive, ProfileIcon, ProfileIconActive,
    VocabularyActive,
    VocabularyIcon
} from "@/assets/icons/icons";
import TabBarIconLayout from "@/components/share/tab-bar-layout";

export default function TabLayout() {
    const {isDarkMode} = useTheme()
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blue',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: isDarkMode ? '#262626' : '#F8F8F8',
                paddingTop: 12,
                height: 90,
                borderTopWidth: 0,
            }
        }}

        >
            <Tabs.Screen
                name="book"
                options={{
                    tabBarIcon: ({focused}: { focused: boolean }) => {
                        return focused ?
                            <TabBarIconLayout icon={<BookActive/>} focused={focused}/> :
                            <TabBarIconLayout icon={<Book isDark={isDarkMode}/>} focused={focused}/>
                    }
                }}
            />
            <Tabs.Screen
                name="vocabulary"
                options={{
                    tabBarIcon: ({focused}: { focused: boolean }) => {
                        return focused ?
                            <TabBarIconLayout icon={<VocabularyActive />} focused={focused}/> :
                            <TabBarIconLayout icon={<VocabularyIcon isDark={isDarkMode}/>} focused={focused}/>
                    }
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    tabBarIcon: ({focused}: { focused: boolean }) => {
                        return focused ?
                            <TabBarIconLayout icon={<ChatIconActive />} focused={focused}/> :
                            <TabBarIconLayout icon={<ChatIcon isDark={isDarkMode}/>} focused={focused}/>
                    }
                }}
            />
            
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({focused}: { focused: boolean }) => {
                        return focused ?
                            <TabBarIconLayout icon={<ProfileIconActive />} focused={focused}/> :
                            <TabBarIconLayout icon={<ProfileIcon isDark={isDarkMode}/>} focused={focused}/>
                    }
                }}
            />
        </Tabs>
    );
}
