import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}
export default function ModalCustomContent({ children }: LayoutProps) {


  return (
    <div className="my-auto w-full h-full max-h-[400px] overflow-x-hidden">
      {children}
    </div>
  );
}
