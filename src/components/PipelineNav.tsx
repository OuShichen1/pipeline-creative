import { useNavigate, useLocation } from "react-router-dom";
import { Lightbulb, FileText, Video, CheckCircle, BarChart3, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const stages = [
  { id: "assets", label: "团队资产库", icon: Database, path: "/assets" },
  { id: "topic", label: "选题", icon: Lightbulb, path: "/topic" },
  { id: "script", label: "脚本", icon: FileText, path: "/script" },
  { id: "production", label: "素材/制作", icon: Video, path: "/production" },
  { id: "review", label: "审核", icon: CheckCircle, path: "/review" },
  { id: "analytics", label: "复盘", icon: BarChart3, path: "/analytics" },
];

export function PipelineNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-pipeline">
      <div className="flex items-center justify-around h-20 px-4 max-w-7xl mx-auto">
        {stages.map((stage, index) => {
          const isActive = location.pathname === stage.path;
          const Icon = stage.icon;

          return (
            <div key={stage.id} className="flex items-center flex-1">
              <button
                onClick={() => navigate(stage.path)}
                className={cn(
                  "flex flex-col items-center justify-center gap-[1px] w-full pt-1 pb-2 px-4 rounded-lg transition-all",
                  "hover:bg-secondary/50",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground"
                )}
              >
                <Icon className={cn("w-8 h-8", isActive && "animate-pulse")} />
                <span className="text-base font-medium">{stage.label}</span>
              </button>

              {index < stages.length - 1 && (
                <div className="w-8 h-px bg-border mx-2" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
