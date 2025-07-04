'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useMapStore } from '../store/useMapStore';
import Home from '../components/Layout';
import { info } from '../utils/info';
import MapMenuPrincipal from '../components/MapMenuPrincipal';
import MapSVG from '../components/MapSVG';

export default function Map() {
    const mapRef = useRef<SVGSVGElement | null>(null);
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [menuCurrent, setMenuCurrent] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [readedInfo, setReadedInfo] = useState<string[]>([]);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
    const [startMousePosition, setStartMousePosition] = useState({ x: 0, y: 0 });

    const { currentId, isActiveId, setCurrentId, setIsActiveId, openModal } = useMapStore();

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        setStartMousePosition({ x: clientX, y: clientY });
        setStartDragPosition(position);
    };

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !mapRef.current || !containerRef.current) return;
        setIsActiveId(false);

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const dx = clientX - startMousePosition.x;
        const dy = clientY - startMousePosition.y;

        let newX = startDragPosition.x + dx;
        let newY = startDragPosition.y + dy;

        const containerBox = containerRef.current.getBoundingClientRect();
        const mapBox = mapRef.current.getBoundingClientRect();

        if (newX > 0) newX = 0;
        if (newY > 0) newY = 0;

        if (mapBox.width + newX < containerBox.width) {
            newX = containerBox.width - mapBox.width;
        }

        if (mapBox.height + newY < containerBox.height) {
            newY = containerBox.height - mapBox.height;
        }

        setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClickToCenter = useCallback((id: string) => {
        if (mapRef.current && containerRef.current && isActiveId) {
            const svgElement = mapRef.current.getElementById(id);
            if (svgElement && svgElement instanceof SVGGraphicsElement) {
                const svgBBox = svgElement.getBBox();
                const containerBox = containerRef.current.getBoundingClientRect();
                const mapBox = mapRef.current.getBoundingClientRect();

                const viewBox = mapRef.current.viewBox.baseVal;
                const scaleX = mapBox.width / viewBox.width;
                const scaleY = mapBox.height / viewBox.height;

                const newX = containerBox.width / 2 - (svgBBox.x + svgBBox.width / 2) * scaleX;
                const newY = containerBox.height / 2 - (svgBBox.y + svgBBox.height / 2) * scaleY;

                let adjustedX = newX;
                let adjustedY = newY;

                if (newX > 0) adjustedX = 0;
                if (newY > 0) adjustedY = 0;

                if (mapBox.width + adjustedX < containerBox.width) {
                    adjustedX = containerBox.width - mapBox.width;
                }

                if (mapBox.height + adjustedY < containerBox.height) {
                    adjustedY = containerBox.height - mapBox.height;
                }

                setPosition({ x: adjustedX, y: adjustedY });
            }
        }
    }, [isActiveId]);

    useEffect(() => {
        if (mapRef.current) {

            const timeout = setTimeout(() => setLoaded(true), 1000);
            return () => clearTimeout(timeout);
        }
    }, [])

    function handleModal(id: string, isActiveId: boolean) {


        // Atualiza estados, se necessário
        setCurrentId(id, isActiveId);
        console.log("id: ", isActiveId);
        if (isActiveId) {
            const item = info.find(item => item.id === parseInt(id));
            info.forEach((item) => {

                if (item.id == parseInt(id)) {
                    openModal({
                        title: item.title,
                        content: item.content,
                        image1: item.image,
                        imageSubtitle: item.imageSubtitle,
                        contentCustom: undefined,
                    });
                }
            });


        }
    }

    useEffect(() => {

        handleModal("1", true);



        if (mapRef.current && containerRef.current) {
            const containerBox = containerRef.current.getBoundingClientRect();
            const mapBox = mapRef.current.getBoundingClientRect();

            const viewBox = mapRef.current.viewBox.baseVal;
            const scaleX = mapBox.width / viewBox.width;
            const scaleY = mapBox.height / viewBox.height;


            const initialX = (containerBox.width - mapBox.width) / 2;
            const initialY = (containerBox.height - mapBox.height) / 2;

            let adjustedX = initialX;
            let adjustedY = initialY;

            // Gar
            if (initialX > 0) adjustedX = 0;
            if (initialY > 0) adjustedY = 0;

            if (mapBox.width + adjustedX < containerBox.width) {
                adjustedX = containerBox.width - mapBox.width;
            }

            if (mapBox.height + adjustedY < containerBox.height) {
                adjustedY = containerBox.height - mapBox.height;
            }

            setPosition({ x: adjustedX, y: adjustedY });
        }
    }, []);

    useEffect(() => {
        const handleMouseUpGlobal = () => setIsDragging(false);
        window.addEventListener('mouseup', handleMouseUpGlobal);
        window.addEventListener('touchend', handleMouseUpGlobal);
        return () => {
            window.removeEventListener('mouseup', handleMouseUpGlobal);
            window.removeEventListener('touchend', handleMouseUpGlobal);
        };
    }, []);

    useEffect(() => {

        if (!readedInfo.includes(currentId) && currentId != '7' && currentId != '') {
            // readedInfo.push(currentId);
        }

        if (readedInfo.length >= 6) {
            // setCurrentId('usina', false);
            // readedInfo.length = 0;
        }


    }, [currentId]);

    return (
        <Home>
            <div className='relative'
                ref={containerRef}
                style={{
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden',
                    position: 'relative',

                }}
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
            >
                {!loaded && <div className="absolute text-[#776CA9] text-1xl md:text-2xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Carregando mapa...</div>}
                <svg
                    ref={mapRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    style={{
                        cursor: isDragging ? 'grabbing' : 'grab',
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        transition: isDragging ? 'none' : 'transform 0.3s ease',

                    }}
                    className={`${loaded ? 'opacity-100' : 'opacity-0'} w-[300%] h-[300%] p-0 md:p-60  transition-opacity duration-500`}

                    fill="none" viewBox="0 0 770 1234" xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Exemplo de conteúdo do SVG */}
                    <MapSVG />

                    {/* Você pode carregar seu SVG aqui */}
                </svg>

                <MapMenuPrincipal />
            </div>
        </Home>
    );
}
