'use client';

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";

type Props = {
  children: React.ReactNode,
  currentPage: number;
};

const FancyboxWrapper = ({ children, currentPage }: Props) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      dragToClose: false,
      Carousel: { infinite: true },
      Toolbar: { display: ["zoom", "fullscreen", "close"] },
    } as any);

    return () => {
      Fancybox.destroy();
    };
  }, [currentPage]);

  return <>{children}</>;
};

export default FancyboxWrapper;