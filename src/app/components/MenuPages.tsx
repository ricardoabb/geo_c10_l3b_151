'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useMapStore } from "../store/useMapStore";
import { info } from '../utils/info';
import { parse } from "path";

interface Props {
    countryId: string;
    contentCustom?: ReactNode;
}

export default function MenuPages({ countryId, contentCustom }: Props) {

    const pathname = usePathname(); // Obter a rota atual

    // Verifica se a rota atual é '/info'
    const isInfoActive = pathname === "/";
    const isMapActive = pathname === "/map";
    const isUsinaActive = pathname === "/usina";


    const { currentId, isActiveId, setCurrentId, setIsActiveId, openModal } = useMapStore();

    function handleClick(id: string, contentCustom?: ReactNode) {
        setCurrentId(id, false);

        info.forEach((item) => {
            if (item.id == parseInt(id)) {
                openModal({
                    title: item.title,
                    content: item.content,
                    contentCustom: contentCustom,
                    image1: '',
                });
            }
        });
    }



    return (
        <nav className="flex gap-5">

            {/* Ícone com cor alterada quando a rota for '/info' */}
            <Link href="/" onClick={() => setCurrentId('0', true)} className="bg-[#776CA9] w-[87px] h-[87px] p-5 rounded-xl flex justify-center items-center">
                <svg width="29" height="47" viewBox="0 0 29 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.2208 1.85481C19.7418 0.0811942 23.1106 -0.526587 25.745 0.497385C28.3794 1.5214 29.2821 3.78948 27.7612 5.56314L12.3793 23.5L27.7612 41.4368C29.2822 43.2105 28.3794 45.4786 25.745 46.5026C23.1106 47.5266 19.7418 46.9188 18.2208 45.1452L1.49062 25.6354C0.868135 25.0339 0.524268 24.3211 0.5 23.5929V23.407C0.524276 22.6797 0.866781 21.9674 1.48793 21.3664L18.2208 1.85481Z"
                        fill="#F9D8A7" />
                </svg>
            </Link>

            <button className="bg-[#3A0946] w-[87px] h-[87px] rounded-xl flex justify-center items-center" onClick={() => handleClick(countryId, contentCustom)}>

                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="54" viewBox="0 0 24 24">
                    <path
                        d="M6.271 2.112c-.81.106-1.238.301-1.544.6c-.305.3-.504.72-.613 1.513C4.002 5.042 4 6.124 4 7.675v8.57a4.2 4.2 0 0 1 1.299-.593c.528-.139 1.144-.139 2.047-.138H20V7.676c0-1.552-.002-2.634-.114-3.451c-.109-.793-.308-1.213-.613-1.513c-.306-.299-.734-.494-1.544-.6c-.834-.11-1.938-.112-3.522-.112H9.793c-1.584 0-2.688.002-3.522.112m.488 4.483c0-.448.37-.811.827-.811h8.828a.82.82 0 0 1 .827.81a.82.82 0 0 1-.827.811H7.586a.82.82 0 0 1-.827-.81m.827 2.973a.82.82 0 0 0-.827.81c0 .448.37.811.827.811h5.517a.82.82 0 0 0 .828-.81a.82.82 0 0 0-.828-.811z"
                        fill={isInfoActive ? "#F9D8A7" : "#fff"}
                        fillRule="evenodd"
                        clipRule="evenodd" />
                    <path
                        d="M7.473 17.135H20c-.003 1.13-.021 1.974-.113 2.64c-.109.793-.308 1.213-.613 1.513c-.306.299-.734.494-1.544.6c-.834.11-1.938.112-3.522.112H9.793c-1.584 0-2.688-.002-3.522-.111c-.81-.107-1.238-.302-1.544-.601c-.305-.3-.504-.72-.613-1.513c-.041-.3-.068-.637-.084-1.02a2.46 2.46 0 0 1 1.697-1.537c.29-.076.667-.083 1.746-.083"
                        fill={isInfoActive ? "#F9D8A7" : "#fff"}
                    />
                </svg>
            </button>

        </nav>
    );
}
