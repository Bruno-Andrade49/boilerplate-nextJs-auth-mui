import React, { createContext, useState, ReactNode } from 'react';

export const DrawerContext = createContext<any | null>(null);

const DrawerContextProvider = ({ children }: { children: ReactNode }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerContextProvider };
