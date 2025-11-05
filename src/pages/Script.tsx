import { FolderOpen, FileText, Sparkles, CheckCircle2, Globe, Send, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function Script() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden p-4">
      <div className="grid grid-cols-12 gap-4 flex-1 min-h-0 overflow-hidden">
      {/* Left Column - AI脚本生成 */}
      <div className="col-span-3 overflow-hidden">
        <Card className="h-full bg-gradient-card p-4 flex flex-col overflow-hidden">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            AI脚本生成
          </h3>

          <ScrollArea className="flex-1 min-h-0">
            <div className="space-y-3 pr-4">
              <Card className="p-3 bg-secondary">
                <h4 className="text-xs font-medium mb-2">选择选题</h4>
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <Button size="sm" variant="outline" className="text-xs">
                    选题1
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    选题2
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    选题3
                  </Button>
                </div>
                
                <h4 className="text-xs font-medium mb-2">模板选项</h4>
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <Button size="sm" variant="outline" className="text-xs">
                    模板1
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    模板2
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    模板3
                  </Button>
                </div>

                <h4 className="text-xs font-medium mb-2">利益点选项</h4>
                <div className="grid grid-cols-1 gap-2 mb-3">
                  <Button size="sm" variant="outline" className="text-xs">
                    利益点1
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    利益点2
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    利益点3
                  </Button>
                </div>

                <Button size="sm" className="w-full bg-gradient-primary">
                  生成
                </Button>
              </Card>
            </div>
          </ScrollArea>
        </Card>
      </div>

      {/* Middle Column - Editor */}
      <div className="col-span-6 overflow-hidden">
        <Card className="h-full bg-gradient-card p-6 flex flex-col overflow-hidden">
          <h3 className="text-lg font-semibold mb-6">脚本编辑器</h3>

          <div className="flex flex-col gap-4 flex-1 min-h-0">
            {/* Language Selection Tabs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center border-b border-border">
                <button className="px-3 py-2 text-sm font-medium border-b-2 border-primary text-primary">
                  中文
                </button>
              </div>

              <div className="flex items-center border-b border-border">
                <button className="px-3 py-2 text-sm font-medium border-b-2 border-primary text-primary">
                  英语
                </button>
                <button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  西班牙语
                </button>
                <button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                  粤语
                </button>
              </div>
            </div>

            {/* Editor Areas */}
            <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
              {/* Source Text */}
              <Textarea
                placeholder="开始撰写你的脚本..."
                className="flex-1 min-h-0 bg-background border-border resize-none text-base leading-relaxed p-4"
                defaultValue={`# 产品介绍脚本

## 开场白
大家好，今天给大家带来一款革命性的AI工具...

## 核心卖点
1. 提升效率300%
2. 零门槛上手
3. 智能化创作

## 使用场景
适合内容创作者、营销人员、企业团队...`}
              />

              {/* Translation Result */}
              <div className="flex flex-col bg-secondary/30 rounded-lg border border-border">
                <div className="flex-1 min-h-0 p-4 overflow-auto">
                  <p className="text-muted-foreground">翻译</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-end mt-6 pt-4 border-t border-border">
            <Button size="default" variant="outline">
              保存草稿
            </Button>
            <Button size="default" className="bg-gradient-primary">
              <Send className="w-4 h-4 mr-2" />
              提交审核
            </Button>
          </div>
        </Card>
      </div>

      {/* Right Column - 风险提示 + AI脚本审核 */}
      <div className="col-span-3 overflow-hidden flex flex-col gap-4">
        {/* 风险提示 */}
        <Card className="bg-gradient-card p-4 shrink-0">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            风险提示
          </h3>
          <div className="space-y-3">
              {[
                { 
                  level: "高", 
                  title: "PR事件 - 英铁记者恶意解读", 
                  date: "10月21日",
                  details: [
                    "记者恶意解读：记者把TrainPal\"车窗门一旦关闭，车票就会瞬间失去商业价值\"的话术，恶意解读成\"TrainPal引导大家违法逃票\"，近期会在《铁路杂志》发布文章。",
                    "视频存在法律风险：视频的内容尺度、未授权的人脸素材等存在法律风险，PR和法务担心社媒转载和监管介入，所以先下架相关视频防止影响扩大。",
                    "历史参考：2025年7月23日晚也曾因PR事件屏蔽内容，可能导致数据不够。7月25日曾暂停发布内容，并计划后续拉群审核视频后再发。"
                  ]
                },
              ].map((risk, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded ${
                    risk.level === "高"
                      ? "bg-destructive/10 border border-destructive/30"
                      : risk.level === "中"
                      ? "bg-yellow-500/10 border border-yellow-500/30"
                      : "bg-secondary/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Badge
                      variant={risk.level === "高" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {risk.level}风险
                    </Badge>
                    <span className="text-xs text-muted-foreground">{risk.date}</span>
                  </div>
                  <p className="text-sm font-medium mb-2">{risk.title}</p>
                  {risk.details && (
                    <div className="space-y-2 text-xs text-muted-foreground">
                      {risk.details.map((detail, detailIdx) => (
                        <p key={detailIdx} className="leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </Card>

        {/* AI脚本审核 */}
        <Card className="bg-gradient-card p-4 flex flex-col overflow-hidden flex-1">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            AI脚本审核
          </h3>

          <ScrollArea className="flex-1 min-h-0">
            <div className="space-y-3 pr-4">
              <Card className="p-3 bg-secondary">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-xs font-medium mb-1">AI事实核查</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      检查脚本中的事实准确性
                    </p>
                    <Button size="sm" className="w-full bg-gradient-primary">
                      开始核查
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollArea>
        </Card>
      </div>
      </div>
    </div>
  );
}
