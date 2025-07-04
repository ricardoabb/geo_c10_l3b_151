import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Home from '../../components/Layout';
import Image from 'next/image';
import MenuPages from '../../components/MenuPages';

interface Params {
  slug: string;
}

export default function CountryPage({ params }: { params: Params }) {
  const { slug } = params;


  const countryInfoData: Record<string, { src: string; id: string; customContent?: ReactNode }> = {
    'estados-unidos': {
      src: '/Piramide_EUA_2021_Vetorizada.svg',
      id: '2',
      customContent: (
        <>
          <ul className="list-disc  space-y-2">
            <li>
              <span className='font-bold text-[#776CA9]'>Idade média:</span> A idade média da população dos EUA é de aproximadamente 37,8 anos.
            </li>
            <li>
              <span className='font-bold text-[#776CA9]'>Distribuição por idade:</span>
              <ul className="list-disc pl-5">
                <li><span>0-14 anos:</span> 27,1% da população</li>
                <li><span>15-64 anos:</span> 62,2% da população</li>
                <li><span>65 anos ou mais:</span> 10,7% da população</li>
              </ul>
            </li>
            <li>
              <span className='font-bold text-[#776CA9]'>Sexo:</span> A população feminina é ligeiramente maior que a masculina, com 50,8% de mulheres e 49,2% de homens.
            </li>
            <li>
              <span className='font-bold text-[#776CA9]'>Tendências:</span> A população dos EUA está envelhecendo rapidamente, com um aumento na proporção de pessoas com 65 anos ou mais.
              Além disso, a taxa de natalidade está diminuindo, o que pode afetar a pirâmide etária no futuro.
            </li>
          </ul>
        </>
      )
    },
    'haiti': {
      src: '/Piramide_Haiti_2021_Vetorizada.svg',
      id: '3',
      customContent: (
        <>
          <ul className="list-disc space-y-2 text-sm">
            <li>
              <span className="font-bold text-[#776CA9]">Idade média:</span> A idade média da população do Haiti é de aproximadamente 22,5 anos.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Distribuição por idade:</span>
              <ul className="list-disc pl-5 ">
                <li><span>0-14 anos:</span> 34,6% da população</li>
                <li><span>15-64 anos:</span> 61,2% da população</li>
                <li><span>65 anos ou mais:</span> 4,2% da população</li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Sexo:</span> A população feminina é ligeiramente maior que a masculina, com 50,4% de mulheres e 49,6% de homens.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Tendências:</span> A população do Haiti está crescendo rapidamente, com uma taxa de crescimento anual de 1,2%.
              Além disso, a população do Haiti é uma das mais jovens do mundo, com mais de 60% da população abaixo de 25 anos.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Pirâmide etária:</span> A pirâmide etária do Haiti reflete uma realidade diferente dos Estados Unidos, em função da alta taxa de natalidade,
              baixa expectativa de vida (aproximadamente 64 anos), alta taxa de mortalidade infantil, e condições de vida desafiadoras — incluindo pobreza, desigualdade e falta de acesso a serviços básicos.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Fonte:</span>
              <a href="https://images.populationpyramid.net/capture/?selector=%23pyramid-share-container&url=https%3A%2F%2Fwww.populationpyramid.net%2Fpt%2Fhaiti%2F2021%2F%3Fshare%3Dtrue"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline ml-1"
              >
                Pirâmide etária - Haiti 2021
              </a>
            </li>
          </ul>
        </>
      )
    },
    'mexico': {
      src: '/GEO_C10_L3B_151_001.svg',
      id: '4',
      customContent: (
        <>
          <ul className="list-disc space-y-2 text-sm">
            <li>
              <span className="font-bold text-[#776CA9]">Idade média:</span> A idade média da população do México é de aproximadamente 27,9 anos.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Distribuição por idade:</span>
              <ul className="list-disc pl-5">
                <li><span>0-14 anos:</span> 26,6% da população</li>
                <li><span>15-64 anos:</span> 62,4% da população</li>
                <li><span>65 anos ou mais:</span> 11% da população</li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Sexo:</span> A população feminina é ligeiramente maior que a masculina, com 51,1% de mulheres e 48,9% de homens.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Tendências:</span> A população do México apresenta um aumento na população masculina em idade ativa, o que pode indicar crescimento na força de trabalho do país.
              Além disso, o envelhecimento populacional está se acentuando, o que pode trazer impactos importantes para a saúde pública e o sistema de previdência social.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Fonte:</span>
              <a
                href="https://www.populationpyramid.net/pt/mexico/2021/?share=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline ml-1"
              >
                Pirâmide etária - México 2021
              </a>
            </li>
          </ul>
        </>
      )
    },
    'brasil': {
      src: '/GEO_C10_L3B_151_002.svg',
      id: '5',
      customContent: (
        <>
          <ul className="list-disc space-y-2 text-sm">
            <li>
              <span className="font-bold text-[#776CA9]">Idade média:</span> A idade média da população brasileira é de aproximadamente 32,6 anos.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Distribuição por idade:</span>
              <ul className="list-disc pl-5">
                <li><span>0-14 anos:</span> 21,3% da população</li>
                <li><span>15-64 anos:</span> 70,4% da população</li>
                <li><span>65 anos ou mais:</span> 8,3% da população</li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Sexo:</span> A população feminina é ligeiramente maior que a masculina, com 50,8% de mulheres e 49,2% de homens.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Tendências:</span> A população brasileira apresenta tendências semelhantes à população chilena, pois está envelhecendo rapidamente, com uma taxa de crescimento populacional em declínio. A expectativa de vida está aumentando, enquanto a taxa de natalidade está diminuindo.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Fonte:</span>
              <a
                href="https://www.populationpyramid.net/pt/brazil/2021/?share=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline ml-1"
              >
                Pirâmide etária - Brasil 2021
              </a>
            </li>
          </ul>
        </>
      )
    },
    'chile': {
      src: '/GEO_C10_L3B_151_003.svg',
      id: '6',
      customContent: (
        <>
          <ul className="list-disc space-y-2 text-sm">
            <li>
              <span className="font-bold text-[#776CA9]">Idade média:</span> A idade média da população do Chile é de aproximadamente 34,4 anos.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Distribuição por idade:</span>
              <ul className="list-disc pl-5">
                <li><span>0-14 anos:</span> 20,1% da população</li>
                <li><span>15-64 anos:</span> 68,2% da população</li>
                <li><span>65 anos ou mais:</span> 11,7% da população</li>
              </ul>
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Sexo:</span> A população feminina é ligeiramente maior que a masculina, com 50,7% de mulheres e 49,3% de homens.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Tendências:</span> A população do Chile apresenta tendências semelhantes à população brasileira, com rápido envelhecimento, queda na taxa de natalidade e aumento da expectativa de vida. A taxa de crescimento populacional está em declínio.
            </li>
            <li>
              <span className="font-bold text-[#776CA9]">Fonte:</span>
              <a
                href="https://www.populationpyramid.net/pt/chile/2021/?share=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline ml-1"
              >
                Pirâmide etária - Chile 2021
              </a>
            </li>
          </ul>
        </>
      )
    },

  };

  const countryData = countryInfoData[slug];

  if (!countryData) {
    return <p>País não encontrado</p>;
  }

  return (
    <Home>
      <div className="flex flex-col justify-center gap-4 items-center px-5 mb-5">
        <Image src={countryData.src} alt={slug} width={500} height={500} />
        <MenuPages countryId={countryData.id} contentCustom={countryData.customContent} />
      </div>
    </Home>
  );
};

