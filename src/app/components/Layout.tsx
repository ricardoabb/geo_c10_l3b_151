import Image from "next/image";
import Map from "../map/page";
import { useMapStore } from "../store/useMapStore";
import Link from "next/link";
import Menu from "./Menu";
import { ReactNode } from "react";
import { CardModal } from "./CardModal";

type LayoutProps = {
children: ReactNode;
}
export default function Home({ children }: LayoutProps) {


  return (
    <div>
      <main className=" relative flex min-h-screen flex-col items-center justify-between  px-0 bg-[#F9D8A7] ">  
        <section className="my-auto w-full h-full">
          {children}
        </section>
        <Menu />
        <CardModal />
      </main>
    </div>
  );
}
