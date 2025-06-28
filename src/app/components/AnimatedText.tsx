"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';



import iconRight from '../assets/icon-more.svg';
import { useMapStore } from "../store/useMapStore";



type TextBoxProps = {
  text: string;
  limit?: number;
  delay?: number;
};

export function AnimatedText({ text, limit = 140, delay = 5 }: TextBoxProps) {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [remainingText, setRemainingText] = useState<string>(text);
  const [baseText, setBaseText] = useState<string>(text);

  const [displayBtn, setDisplayBtn] = useState<string>('hidden');
  const [displayBtnNext, setDisplayBtnNext] = useState<string>('hidden');
  const [animationNextBtn, setAnimationNextBtn] = useState<string>('animate-fade-in-out');

   const { currentId, isActiveId, setCurrentId, setIsActiveId } = useMapStore();



  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < baseText.length) {
        currentText += baseText[currentIndex];
        if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

          setDisplayedText(currentText);
          baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          text.length >= limit ? setDisplayBtnNext('') : setDisplayBtnNext('hidden');
          // baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');

          baseText.length <= limit ? setAnimationNextBtn('') : setAnimationNextBtn('animate-fade-in-out');
          // baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden');
          //   baseText.length <= limit && image1 !== 'undefined' ? setImageActive(true) : setImageActive(false);
          
          baseText.length <= limit && currentId == "2" ? setCurrentId('map', false) : setCurrentId(currentId, false);





        } else {
          setRemainingText(baseText.slice(currentIndex));
          setDisplayedText(currentText + '...');
          clearInterval(intervalId);
        }
        currentIndex++;
      } else {
        clearInterval(intervalId);

      }
    }, delay);


    return () => clearInterval(intervalId);
  }, [baseText, limit, delay]);

  function handlerLoadText() {
    setBaseText(remainingText);

  }

  function handlerBack() {
    setBaseText(text);

  }

  interface TextWithHighlightsProps {
    text: string;
  }

  function TextWithHighlights({ text }: { text: string }): JSX.Element {
    const phrasesToHighlight: string[] = [
      'Estudar', 'Reino de Jerusalém', 'o Condado de Trípoli', 'o Principado de Antioquia', 'Condado de Edessa.', 'proto', 
    ];
    const phrasesToItalic: string[] = [
      'Papa Urbano II discursando no Concílio de Clermont'
    ];
  
    // Ordenar as frases para evitar conflito de palavras curtas dentro de frases mais longas
    const sortedPhrasesToHighlight = phrasesToHighlight.sort((a, b) => b.length - a.length);
    const sortedPhrasesToItalic = phrasesToItalic.sort((a, b) => b.length - a.length);
  
    const regexHighlight = new RegExp(`(${sortedPhrasesToHighlight.join('|')})`, 'gi');
    const regexItalic = new RegExp(`(${sortedPhrasesToItalic.join('|')})`, 'gi');
  
    // Substitui as frases encontradas por uma versão com tag <strong> ou <em>
    const highlightedText = text.split(/(\b)/).map((part, index) => {
      if (sortedPhrasesToHighlight.some(phrase => phrase.toLowerCase() === part.toLowerCase())) {
        return <strong key={`highlight-${index}`}>{part}</strong>;
      }
      if (sortedPhrasesToItalic.some(phrase => phrase.toLowerCase() === part.toLowerCase())) {
        return <em key={`italic-${index}`}>{part}</em>;
      }
      return part;
    });
  
    return <p className="text-[1rem] whitespace-pre-wrap select-none">{highlightedText}</p>;
  }

  return (
    <div className="h-full flex flex-col justify-between">
      {TextWithHighlights({ text: displayedText })}
      {/* <p className="text-sm md:text-lg whitespace-pre-wrap select-none"></p> */}
      {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}

      <div className="relative flex items-center ml-auto gap-3">
        {



          <div className={`${displayBtnNext} flex items-center justify-center gap-2`}>
            <a onClick={handlerBack} className={`${displayBtn} cursor-pointer animate-fade-in-out`}>voltar</a><div className={`absolute w-12 py-3 right-[-.2rem] bottom-[-3.5rem] none cursor-pointer ${animationNextBtn}  `}>
              <a onClick={handlerLoadText}><Image width={100} height={100} src={iconRight} alt="carregar restante do texto..." /></a>
            </div>
          </div>


        }
      </div>

    </div>
  );
};


