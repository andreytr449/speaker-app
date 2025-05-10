import { create } from 'zustand';

export interface ChapterItemType {
    title?: string;
    imgUri?: string;
    isLock?: boolean;
    description?: string;
    progress?: number;
    id?: string;
}

interface ChapterItemStore extends ChapterItemType {
    setChapterItem: (data: ChapterItemType) => void;
    resetChapterItem: () => void;
}

const useCurrentChapterItem = create<ChapterItemStore>((set) => ({
    title: undefined,
    imgUri: undefined,
    isLast: undefined,
    id: undefined,
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
            id: undefined,
            description: undefined,
            progress: undefined,
        });
    },
}));

export default useCurrentChapterItem;
