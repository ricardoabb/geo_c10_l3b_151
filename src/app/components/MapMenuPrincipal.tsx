'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useMapStore } from "../store/useMapStore";

import { info } from '../utils/info';

export default function MapMenuPrincipal() {
    const pathname = usePathname();

    const { currentId, isActiveId, setCurrentId, setIsActiveId, openModal } = useMapStore();


    const isInfoActive = pathname === "/";
    const isMapActive = pathname === "/map";

    function handleModal(id: string, isActiveId: boolean) {
        console.log(id);
        setCurrentId(id, isActiveId);

        info.map((item, index) => {
            if (item.id === parseInt(id)) {
                openModal({
                    title: item.title,
                    content: item.content,
                    image1: item.image,
                    imageSubtitle: item.imageSubtitle,
                    contentCustom: undefined
                })
            }
        })
    }


    return (
        <nav className='absolute top-6 left-4 flex flex-col items-start text-left bg-[#fff] p-6 rounded-lg bg-opacity-10 backdrop-blur-sm border-solid border-2 border-[#F9D8A7]'>
            <div className={`flex flex-col items-start gap-2 overflow-hidden `}>
                <h3 className='bg-[#3A0946] font-bold text-1xl text-white p-1 px-2 rounded-md '>América Anglo-Saxônica</h3>
                <Link href='/graficos/estados-unidos' className='flex justify-center items-center gap-2'>
                    
                        <div className='ml-4 w-4 h-4 bg-[#3587F3] opacity-100 rounded-[.25rem]'></div>
                        <span className='menu-hover text-xl font-semibold text-[#3A0946]'>Estados Unidos</span>
                    
                </Link>
            
                <h3 className='bg-[#3A0946] font-bold text-1xl text-white p-1 px-2 rounded-md'>América Latina</h3>
                <Link href='/graficos/brasil' className='flex justify-center items-center gap-2' onClick={() => setCurrentId('usina0', true)}>
                    <div className='ml-4 w-4 h-4 bg-[#EE7F00] opacity-100 rounded-[.25rem]'></div>
                    <span className='menu-hover text-xl font-semibold text-[#3A0946]'>Brasil</span>
                </Link>
                <Link href='/graficos/chile' className='flex justify-center items-center gap-2' onClick={() => setCurrentId('usina0', true)}>
                    <div className='ml-4 w-4 h-4 bg-[#EE3B3B] opacity-100 rounded-[.25rem]'></div>
                    <span className='menu-hover text-xl font-semibold text-[#3A0946]'>Chile</span>
                </Link>
                <Link href='/graficos/haiti' className='flex justify-center items-center gap-2' onClick={() => setCurrentId('usina0', true)}>
                    <div className='ml-4 w-4 h-4 bg-[#713BEE] opacity-100 rounded-[.25rem]'></div>
                    <span className='menu-hover text-xl font-semibold text-[#3A0946]'>Haiti</span>
                </Link>
                <Link href='/graficos/mexico' className='flex justify-center items-center gap-2' onClick={() => setCurrentId('usina0', true)}>
                    <div className='ml-4 w-4 h-4 bg-[#349C8F] opacity-100 rounded-[.25rem]'></div>
                    <span className='menu-hover text-xl font-semibold text-[#3A0946]'>México</span>
                </Link >

            </div>
        </nav>
    );
}
