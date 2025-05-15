export interface Topic  {
    _id: string;
    chapterId: string;
    title: string;
    description?: string;
    imgUri: string;
    durationMinutes: number;
    order: number;
    createdAt: string;
    updatedAt: string;
}
