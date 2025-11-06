import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface TextSelectionToolbarProps {
  selectedText: string;
  position: { x: number; y: number };
  onPolish: (text: string) => void;
  isVisible: boolean;
}

export function TextSelectionToolbar({
  selectedText,
  position,
  onPolish,
  isVisible,
}: TextSelectionToolbarProps) {
  if (!isVisible || !selectedText) return null;

  return (
    <div
      className="fixed z-50 animate-in fade-in zoom-in-95 duration-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -100%)",
        marginTop: "-10px",
      }}
    >
      <div className="bg-background border border-border rounded-lg shadow-lg p-1">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground h-8 px-3"
          onClick={() => onPolish(selectedText)}
        >
          <Sparkles className="w-3 h-3 mr-1" />
          润色
        </Button>
      </div>
    </div>
  );
}
