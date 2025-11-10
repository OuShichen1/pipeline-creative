import { Outlet } from "react-router-dom";
import { GlobalHeader } from "@/components/GlobalHeader";
import { PipelineNav } from "@/components/PipelineNav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <PipelineNav />
        
        <div className="flex-1 flex flex-col">
          <GlobalHeader />
          
          <main className="flex-1 pt-16 px-6 overflow-auto">
            <div className="max-w-[1800px] mx-auto py-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
