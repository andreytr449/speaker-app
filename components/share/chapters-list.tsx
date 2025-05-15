import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import {API} from "@/services/api";
import {GetChaptersResponse} from "@/screens/app/book.screen";
import {View, Text} from "react-native";
import {Chapter as ChapterType} from "@/types/chapter.types";
import Chapter from "@/components/share/chapter";

const ChaptersList = ({handleOpenSheet}: { handleOpenSheet: () => void }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [chapters, setChapters] = useState<typeof ChapterType[]>([])


    useEffect(() => {
        const fetchChapters = async () => {
            try {
                setIsLoading(true)
                const token = await AsyncStorage.getItem('token')
                if (!token)
                    router.replace('/auth/sign-in')
                const resp: GetChaptersResponse = await API.chapter.getChapters(token!)
                setChapters(resp.data)
                setIsLoading(false)
            } catch (e) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetchChapters()
    }, []);

    if (isLoading)
        return <Text className='text-bg-light'>Loading...</Text>;

    if (isError)
        return <Text>Error</Text>;
    return (
        chapters.length > 0 ?
            chapters.map((chapter) => {
                return (
                    <Chapter
                        key={chapter.title + chapter.order}
                        chapterTitle={`Chapter - ${chapter.order}`}
                        chapterName={chapter.title}
                        onCardPress={handleOpenSheet}
                        topics={chapter.topics}
                    />
                );
            })
            :
            <View><Text>123</Text></View>
    );

};

export default ChaptersList;