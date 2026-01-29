import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(null);

function SidebarProvider({ children }) {
  // mobile sidebar open
  const [open, setOpen] = useState(false);

  // desktop sidebar collapsed
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
        collapsed,
        setCollapsed,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// custom hook (best practice)
export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }
  return ctx;
};

export default SidebarProvider;
