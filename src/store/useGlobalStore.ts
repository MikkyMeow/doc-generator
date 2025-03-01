import { create } from "zustand";

interface StoreState {
    content: IContent[];
    setContent: (content: IContent[]) => void;

    cursor: string;
    setCursor: (cursor: string) => void;
}

interface IContent {
    text: string;
}

export const useGlobalStore = create<StoreState>((set) => {
    return {
        content: JSON.parse(localStorage.getItem('content')!) || [],
        setContent: (content: IContent[]) => {
            set({ content })
            localStorage.setItem("content", JSON.stringify(content));
        },

        cursor: JSON.parse(localStorage.getItem('cursor')!) || '',
        setCursor: (cursor: string) => {
            set({ cursor })
            localStorage.setItem("cursor", JSON.stringify(cursor))
        }
    };
});