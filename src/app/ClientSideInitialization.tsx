"use client";

import { useEffect } from "react";

export default function ClientSideInitialization({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;
      new LocomotiveScroll({
        lenisOptions: {
          duration: 1.5,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.75,
          touchMultiplier: 1.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 5),
        },
      });
    });
  }, []);

  return <>{children}</>;
}
