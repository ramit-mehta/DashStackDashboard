import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F6FA]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
