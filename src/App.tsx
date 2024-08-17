import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { IsMobileContext } from "./contexts/IsMobileContext";
import { router } from "./utilities/router/webRouter";

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth > 600 ? false : true);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth > 600 ? false : true);
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <IsMobileContext.Provider value={isMobile}>
        <RouterProvider router={router}/>
      </IsMobileContext.Provider>
    </>
  )
}
