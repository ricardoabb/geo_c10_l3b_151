"use client"

import React, { useState, useRef, useEffect } from 'react';


// import Swiper core and required modules
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules'; // use módulos que precisar

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Home from "../components/Layout";
import { TextBox } from "../components/TextBox";
import { info, extras } from '../utils/info';
import { useMapStore } from '../store/useMapStore';



export default function Extras() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);

    const isFirst = info[0];
    const isLast = info.length - 1;

    const sliderRef: any = useRef<SwiperClass>()
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const { currentId, isActiveId, setCurrentId, setIsActiveId, openModal } = useMapStore();

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
        setCurrentId(sliderRef.current?.swiper.activeIndex, false);
        console.log(sliderRef.current?.swiper.activeIndex)
        console.log(currentId)

        // setModal({ image1: `${card[swiper.activeIndex].image}`, title: `${card[swiper.activeIndex].title}`, subtitle: `${card[swiper.activeIndex].subtitle}` });

    };


    return (
        <Home>
            <div>
                <Swiper
                    modules={[Navigation, A11y]}                    
                    // pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}

                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    ref={sliderRef}


                    onInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {extras.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TextBox key={`slide-0-${activeIndex === 0}`} content={item.content} title={item.title} image={item.image} imagesubtitle={item.imageSubtitle} hide={true} />
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
            <div id="swiper-navigation" className={`absolute m-auto left-0 right-0 bottom-[40px] lg:bottom-[250px] h-fit                       
                     flex items-center justify-between md:justify-between gap-6 mt-12 w-[90%] md:w-[70%] mx-auto transition-all ease-in-out duration-[.3s]`}>

                <button className={`${sliderRef.current?.swiper.activeIndex == 0 ? "opacity-[.5]" : "opacity-100"} scale-x-[-1] flex justify-center items-centerfull z-50`}
                    //ref={prevRef}
                    disabled={sliderRef.current?.swiper.activeIndex == 0}
                    onClick={() => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd);
                        sliderRef.current?.swiper.slidePrev();


                    }}>
                    <div >
                        <svg className='w-[46px] md:w[66px] h-[30px] md:h-[50px]' width="66" height="50" viewBox="0 0 35 46" fill="#BB7843" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7382 18.2279C34.8891 20.6291 34.8891 25.3709 31.7382 27.7721L10.1369 44.2346C6.18746 47.2444 0.500008 44.428 0.500008 39.4624L0.500008 6.53757C0.500008 1.57198 6.18746 -1.24442 10.1369 1.76544L31.7382 18.2279Z" />
                        </svg>
                    </div>
                </button>

                <button className={`${sliderRef.current?.swiper.activeIndex == isLast ? "opacity-[.5]" : "opacity-100"} flex justify-center items-center z-50`}
                    //ref={nextRef}
                    disabled={sliderRef.current?.swiper.activeIndex == isLast}
                    onClick={(swiper: any) => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd)
                        sliderRef.current?.swiper.slideNext();

                    }}>
                    <div >
                        <svg className='w-[46px] md:w[66px] h-[30px] md:h-[50px]' viewBox="0 0 35 46" fill="#BB7843" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7382 18.2279C34.8891 20.6291 34.8891 25.3709 31.7382 27.7721L10.1369 44.2346C6.18746 47.2444 0.500008 44.428 0.500008 39.4624L0.500008 6.53757C0.500008 1.57198 6.18746 -1.24442 10.1369 1.76544L31.7382 18.2279Z" />
                        </svg>
                    </div>
                </button>
            </div>
        </Home>


    )
}