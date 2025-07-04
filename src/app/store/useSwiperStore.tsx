import { create } from "zustand";

type SwiperStore = {
  swiperInstance: any; // Aqui armazenamos o objeto do Swiper
  setSwiperInstance: (instance: any) => void; // Função para atualizar o Swiper
  goToSlide: (index: number) => void; // Função para navegar nos slides
};

export const useSwiperStore = create<SwiperStore>((set, get) => ({
  swiperInstance: null,
  setSwiperInstance: (instance) => set({ swiperInstance: instance }),
  goToSlide: (index) => {
    const swiper = get().swiperInstance;
    if (swiper) {
      swiper.slideTo(index); // Navegar para o índice desejado
    }
  },
}));