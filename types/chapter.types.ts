import {Topic} from "@/types/topic.types";

export type Chapter = {
    _id: string;
    title: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    topics: Topic[];
}
