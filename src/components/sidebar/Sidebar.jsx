import { NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiBox,
  FiHeart,
  FiMail,
  FiFileText,
  FiPackage,
  FiDollarSign,
  FiCalendar,
  FiCheckSquare,
  FiPhone,
  FiFile,
  FiLayers,
  FiUsers,
  FiTable,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

import { useSidebar } from "../../context/SidebarContext";

const mainMenu = [
  { name: "Dashboard", icon: FiGrid, path: "/dashboard", active: true },
  { name: "Products", icon: FiBox },
  { name: "Favorites", icon: FiHeart },
  { name: "Inbox", icon: FiMail },
  { name: "Order Lists", icon: FiFileText },
  { name: "Product Stock", icon: FiPackage },
];

const pagesMenu = [
  { name: "Pricing", icon: FiDollarSign },
  { name: "Calendar", icon: FiCalendar },
  { name: "To-Do", icon: FiCheckSquare },
  { name: "Contact", icon: FiPhone },
  { name: "Invoice", icon: FiFile },
  { name: "UI Elements", icon: FiLayers },
  { name: "Team", icon: FiUsers },
  { name: "Table", icon: FiTable },
];

function Sidebar() {
  const { open, setOpen, collapsed } = useSidebar();

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
    fixed lg:static z-50 bg-white border-r
    h-screen
    transition-all duration-300
    ${open ? "left-0" : "-left-full"} lg:left-0
    ${collapsed ? "lg:w-[0px]" : "lg:w-[230px]"}
    w-[230px]
    overflow-y-auto
  `}
      >
        <div className="flex items-center justify-between px-4 py-6 border-b">
          <div className="text-xl font-semibold text-blue-600">
            Dash<span className="text-black">Stack</span>
          </div>

          <button className="lg:hidden text-xl" onClick={() => setOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-1">
          {mainMenu.map((item) => {
            const Icon = item.icon;

            if (item.active) {
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-blue-500 text-white"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r-lg" />
                  <Icon className="text-lg" />
                  <span>{item.name}</span>
                </NavLink>
              );
            }

            return (
              <div
                key={item.name}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                <Icon className="text-lg" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </nav>

        <div className="px-4">
          <p className="text-xs text-gray-400 uppercase px-2 mb-2">Pages</p>

          <nav className="space-y-1">
            {pagesMenu.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  <Icon className="text-lg" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="mt-10 border-t px-4 py-4 space-y-1">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 w-full">
            <FiSettings className="text-lg" />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 w-full cursor-pointer"
          >
            <FiLogOut className="text-lg" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
