import { styled } from "@mui/material";

import React, { useEffect, useRef } from "react";

export function BackgroudImageContainer(props: { backgroundImage: string, children: React.ReactNode }) {
  const { backgroundImage, children, ...restProps } = props;

  const PREFIX = 'RaLogin';
  const Root = styled('div', {
    name: PREFIX,
    overridesResolver: (_props, styles) => styles.root,
  })(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage:
      'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  let backgroundImageLoaded = false;

  const updateBackgroundImage = () => {
    if (!backgroundImageLoaded && containerRef.current) {
      containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
      backgroundImageLoaded = true;
    }
  };

  const lazyLoadBackgroundImage = () => {
    if (backgroundImage) {
      const img = new Image();
      img.onload = updateBackgroundImage;
      img.src = backgroundImage;
    }
  };

  useEffect(() => {
    if (!backgroundImageLoaded) {
      lazyLoadBackgroundImage();
    }
  });

  return <Root
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} {...restProps}
    ref={containerRef}
  >
    {children}
  </Root>
}