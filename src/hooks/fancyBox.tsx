'use client';

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";

type Props = {
  children: React.ReactNode;
};

const FancyboxWrapper = ({ children }: Props) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      dragToClose: false,

      Carousel: {
        infinite: true,
      },

      Toolbar: {
        display: ["zoom", "fullscreen", "close"],
      },
    } as any);

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default FancyboxWrapper;