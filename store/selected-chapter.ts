import { create } from 'zustand';

export interface ChapterItemType {
    title?: string;
    imgUri?: string;
    isLock?: boolean;
    description?: string;
    progress?: number;
}

interface ChapterItemStore extends ChapterItemType {
    setChapterItem: (data: ChapterItemType) => void;
    resetChapterItem: () => void;
}

const useCurrentChapterItem = create<ChapterItemStore>((set) => ({
    title: undefined,
    imgUri: undefined,
    isLast: undefined,
    description: undefined,
    progress: undefined,

    setChapterItem: (data) => {
        set({ ...data });
    },

    resetChapterItem: () => {
        set({
            title: undefined,
            imgUri: undefined,
            isLock: undefined,
            description: undefined,
            progress: undefined,
        });
    },
}));

export default useCurrentChapterItem;
