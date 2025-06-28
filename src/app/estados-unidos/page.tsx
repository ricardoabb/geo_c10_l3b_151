'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useMapStore } from '../store/useMapStore';
import Home from '../components/Layout';
import { info } from '../utils/info';
import MapMenuPrincipal from '../components/MapMenuPrincipal';
import MapSVG from '../components/MapSVG';
import Image from 'next/image';

export default function EstadosUnidos() {
  

    return (
        <Home>            
            <div className='flex justify-center items-center px-5 mb-5'>
            <Image src="/Piramide_EUA_2021_Vetorizada.svg" alt="Estados Unidos" width={500} height={500} />
            </div>
        </Home>
    );
}
