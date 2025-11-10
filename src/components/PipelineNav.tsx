import { useNavigate, useLocation } from "react-router-dom";
import { Lightbulb, FileText, Video, CheckCircle, BarChart3, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const stages = [
  { id: "assets", label: "团队资产库", icon: Database, path: "/assets" },
  { id: "topic", label: "构思", icon: Lightbulb, path: "/topic" },
  { id: "script", label: "脚本", icon: FileText, path: "/script" },
  { id: "production", label: "素材/制作", icon: Video, path: "/production" },
  { id: "review", label: "审核", icon: CheckCircle, path: "/review" },
  { id: "analytics", label: "复盘", icon: BarChart3, path: "/analytics" },
];

export function PipelineNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { open } = useSidebar();

  return (
    <Sidebar className={cn(open ? "w-64" : "w-16")} collapsible="icon">
      <div className="p-2">
        <SidebarTrigger />
      </div>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {stages.map((stage) => {
                const isActive = location.pathname === stage.path;
                const Icon = stage.icon;

                return (
                  <SidebarMenuItem key={stage.id}>
                    <SidebarMenuButton
                      onClick={() => navigate(stage.path)}
                      isActive={isActive}
                      tooltip={stage.label}
                      className={cn(
                        "transition-all",
                        isActive && "bg-primary/10 text-primary font-semibold shadow-[0_0_10px_rgba(96,165,250,0.3)]"
                      )}
                    >
                      <Icon className={cn("w-5 h-5", isActive && "animate-pulse")} />
                      <span>{stage.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
