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
            <h1>Estados Unidos</h1>
            <div className='flex justify-center items-center px-5'>
            <Image src="/Piramide_EUA_2021_Vetorizada.png" alt="Estados Unidos" width={500} height={500} />
            </div>
        </Home>
    );
}
