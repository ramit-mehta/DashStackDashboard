import { FiMenu, FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { useSidebar } from "../../context/SidebarContext";

function Header() {
  const { setOpen, setCollapsed } = useSidebar();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="h-[70px] bg-white border-b flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          className="text-xl"
          onClick={() =>
            window.innerWidth < 1024 ? setOpen(true) : setCollapsed((p) => !p)
          }
        >
          <FiMenu />
        </button>

        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-[320px]">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          className="md:hidden text-lg"
          onClick={() => setShowSearch(true)}
        >
          <FiSearch />
        </button>

        <div className="relative cursor-pointer">
          <FiBell className="text-xl text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            6
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <img
            src="https://flagcdn.com/w20/gb.png"
            alt="EN"
            className="w-5 h-4 rounded-sm"
          />
          <span className="text-sm">English</span>
          <FiChevronDown className="text-sm text-gray-500" />
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=32"
            className="w-9 h-9 rounded-full"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-medium">Moni Roy</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <FiChevronDown className="text-sm text-gray-500 hidden sm:block" />
        </div>
      </div>

      {showSearch && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start p-4">
          <div className="bg-white w-full rounded-lg p-3">
            <input
              autoFocus
              placeholder="Search"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg"
            />
            <button
              className="mt-2 text-sm text-blue-500"
              onClick={() => setShowSearch(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
