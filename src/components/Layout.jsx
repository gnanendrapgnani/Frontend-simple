import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />

        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
