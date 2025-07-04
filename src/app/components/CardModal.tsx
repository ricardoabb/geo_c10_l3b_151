"use client"
import Image from 'next/legacy/image';
import React from 'react';
import { useMapStore } from "../store/useMapStore";
import { motion, AnimatePresence } from 'framer-motion';
import { TextBox } from "./TextBox";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
//import info from '../utils/info';





export function CardModal() {
  
  const { isOpen, title, content, image1, currentId, openModal, closeModal, contentCustom } = useMapStore();
  if (!isOpen) return null;





  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id='card-modal'
          className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900 bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-modal bg-no-repeat bg-cover bg-opacity-50 p-6 rounded shadow-lg w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="relative w-full md:w-auto -mt-8 md:-mt-52">
              <button onClick={closeModal} className="absolute top-[-50px] md:top-[24px] right-8 md:right-8 z-50">
                <svg width="23" height="25" className='fill-[#F9D8A7] md:fill-[#544A52]' viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.0156 34.2656H23.7188L15.75 21.3047L7.78125 34.2656H0L11.3672 16.5938L0.726562 0H8.74219L16.125 12.3281L23.3672 0H31.1953L20.4375 16.9922L32.0156 34.2656Z" />
                </svg>
              </button>
              <div className="relative ">

                <TextBox title={title} content={content} contentCustom={contentCustom} image={image1} imagesubtitle='mapa' hide={false} />
                <div className='absolute flex left-0 -bottom-[200px] md:-bottom-[330px] w-full'>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};    
