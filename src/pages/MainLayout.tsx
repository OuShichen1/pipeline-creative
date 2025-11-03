import { Outlet } from "react-router-dom";
import { GlobalHeader } from "@/components/GlobalHeader";
import { PipelineNav } from "@/components/PipelineNav";

export default function MainLayout() {
  return (
    <div className="min-h-screen w-full bg-background">
      <GlobalHeader />
      
      <main className="pt-16 pb-24 px-6">
        <div className="max-w-[1800px] mx-auto h-[calc(100vh-10rem)]">
          <Outlet />
        </div>
      </main>

      <PipelineNav />
    </div>
  );
}
