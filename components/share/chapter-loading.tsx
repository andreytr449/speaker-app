import React from 'react';
import {View} from "react-native";
import SkeletonChapterCard from "@/components/share/skeleton-chapter-card";

const ChapterLoading = () => {
    return (
        <View className='mt-10 mx-3' >
            {Array.from({ length: 3 }).map((_, idx) => (
                <SkeletonChapterCard key={idx} />
            ))}
        </View>
    );
};

export default ChapterLoading;