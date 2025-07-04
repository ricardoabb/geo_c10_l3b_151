"use client"
import Image from "next/legacy/image";
import iconBalance from '../assets/icon-more.svg';


import React, { useState, useEffect, ReactNode, use } from 'react';
import { AnimatedText } from "./AnimatedText";
import { useMapStore } from "../store/useMapStore";
import ModalCustomContent from "./ModalCustomContent";
import { extras } from '../utils/info';


type textInfoProp = {
  title: string;
  content: string;
  contentCustom?: ReactNode;
  image?: string;
  imagesubtitle?: string;
  hide?: boolean;
};





export function TextBox({ content = "", contentCustom = <> </>, title, image, imagesubtitle, hide = false }: textInfoProp) {
  const [loading, setLoading] = useState(true);
  const [isImageActive, setImageActive] = useState(false);
  const { isActiveId } = useMapStore();

  const { openModal, currentId } = useMapStore();

  function TextWithHighlights({ text }: { text: string | undefined }): JSX.Element {
    // Verificar se 'text' é undefined
    if (!text) {
      return <p className="text-[#BB7843] text-[14px]"></p>;
    }

    const phrasesToHighlight: string[] = [
      'Estudar', 'Reino de Jerusalém', 'o Condado de Trípoli', 'o Principado de Antioquia', 'Condado de Edessa.', 'proto',
    ];
    const phrasesToItalic: string[] = [
      'Papa Urbano II discursando no Concílio de Clermont', 'Mapa de Jerusalém'
    ];

    // Combinar todas as frases para realce e itálico
    const sortedPhrasesToHighlight = phrasesToHighlight.sort((a, b) => b.length - a.length);
    const sortedPhrasesToItalic = phrasesToItalic.sort((a, b) => b.length - a.length);

    const allPhrases = [...sortedPhrasesToHighlight, ...sortedPhrasesToItalic];
    const regex = new RegExp(`(${allPhrases.map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

    const highlightedText = text.split(regex).map((part, index) => {
      if (sortedPhrasesToHighlight.includes(part)) {
        return <strong key={`highlight-${index}`}>{part}</strong>;
      }
      if (sortedPhrasesToItalic.includes(part)) {
        return <em key={`italic-${index}`}>{part}</em>;
      }
      return part;
    });

    return <p className="text-[#BB7843] text-[14px]">{highlightedText}</p>;
  }

  const handleImageLoad = () => {
    setLoading(false);
  };


 



return (
  <div id="container" className=" flex flex-col w-full sm:w-[650px] lg:w-[750px] px-4 pb-12 md:mx-auto">

    <div id="title" className={`${isImageActive ? "hidden" : ""} text-center rounded-[100px] bg-[#fff] px-4 py-2`}>
      <h1 className="text-[#776CA9] text-[1rem] md:text-[2.5rem] font-bold ">{title}</h1>
    </div>
    {
      image && (
        <div className={`swiper-image ${isImageActive ? "w-[100%]" : "w-[100%] md:w-[50%] xl:w-[60%]"}  mx-auto my-4 mb-0 p-4 bg-[#fff] rounded-[24px] overflow-hidden`} onClick={() => setImageActive(prev => !prev)}>

          <Image
            src={image!}
            alt="image"
            width={100}
            height={100}
            objectFit='contain'
            layout="responsive"
            quality={100}
            priority={true}
            unoptimized={true}
            onLoad={handleImageLoad}
            className={`transition-opacity duration-500 ease-in-out `}
          />
          {
            imagesubtitle && (
              <div className={`${isImageActive ? 'hidden' : ''} bg-[#F9D8A7]  my-2 mx-auto text-left p-2 px-3 md:px-5 rounded-[8px]`}>
                {TextWithHighlights({ text: imagesubtitle })}
              </div>
            )
          }
        </div>
      )
    }

    <div id="box-container" className={`${isImageActive || !content ? "hidden" : ""} px-5 py-7 bg-gradient-to-r from-sand-300 to-sand-100 rounded-2xl mt-5 bg-[#fff]`}>
      <div className={`h-fit md:h-fit text-base text-[#BB7843] font-medium`}>
        {isActiveId ? <AnimatedText text={content} limit={300} /> : <ModalCustomContent children={contentCustom} />}

      </div>
    </div>

  </div>
)
}