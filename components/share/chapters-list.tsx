import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import {API} from "@/services/api";
import {GetChaptersResponse} from "@/screens/app/book.screen";
import {Chapter as ChapterType} from "@/types/chapter.types";
import Chapter from "@/components/share/chapter";
import Error from "@/components/share/error";
import ChapterLoading from "@/components/share/chapter-loading";

const ChaptersList = ({handleOpenSheet}: { handleOpenSheet: () => void }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [chapters, setChapters] = useState<ChapterType[]>([])


    useEffect(() => {
        const fetchChapters = async () => {
            try {
                setIsLoading(true)
                const token = await AsyncStorage.getItem('token')
                if (!token)
                    router.replace('/auth/sign-in')
                const resp: GetChaptersResponse = await API.chapter.getChapters(token!)
                setChapters(resp.data)
            } catch (e) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetchChapters()
    }, []);

    if (isLoading)
        return <ChapterLoading />

    if (isError)
        return <Error />
    return (
        chapters.length > 0 &&
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

    );

};

export default ChaptersList;