'use client';
import { param } from 'motion/react-client';
import { ReactNode } from 'react';
import { create } from 'zustand';

interface MapStore {
    currentId: string,
    isActiveId: boolean,    
    setCurrentId: (id: string, isActiveId: boolean) => void
    setIsActiveId: (isActiveId: boolean) => void

    readedInfo: Array<string>;
    isOpen: boolean;
    title: string;
    content: string;  
    contentCustom: ReactNode;  
    image1?: string;
    imageSubtitle?: string;
    openModal: (params: {
        contentCustom: ReactNode;
        title: string;
        content: string;
        image1?: string;
        imageSubtitle?: string;
        
        
        tapeColor?: string;
        bgColor?: string;
    }) => void;
    closeModal: () => void;
}

export const useMapStore = create<MapStore>((set) => ({
    currentId: '0',
    isActiveId: true,
    title: '',
    content: '',
    contentCustom: <></>,
    image1: '',
    imageSubtitle: '',
    isOpen: false,
    readedInfo:['0'],
    openModal: (params) => {
        set({ title: params.title, content: params.content, contentCustom: params.contentCustom, image1: params.image1, imageSubtitle: params.imageSubtitle, isOpen: true });
    },
    closeModal: () => set({ isOpen: false }),
    setCurrentId: (id: string, isActiveId: boolean) => set({ currentId: id, isActiveId: isActiveId }),
    setIsActiveId: (isActiveId: boolean) => set({ isActiveId: isActiveId }),

}));