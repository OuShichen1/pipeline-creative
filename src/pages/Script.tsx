import { FolderOpen, FileText, Sparkles, CheckCircle2, Globe, Send, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function Script() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
      {/* Left Column - File Manager */}
      <div className="col-span-2">
        <Card className="h-full bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-primary" />
            脚本文件
          </h3>

          <ScrollArea className="h-[calc(100%-8rem)]">
            <div className="space-y-2">
              {["产品A脚本", "团队模板", "草稿箱"].map((folder) => (
                <div key={folder} className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground p-2">
                    {folder}
                  </div>
                  {[1, 2, 3].map((i) => (
                    <button
                      key={i}
                      className="w-full text-left p-2 rounded hover:bg-secondary/50 text-xs flex items-center gap-2"
                    >
                      <FileText className="w-3 h-3" />
                      脚本_{i}.txt
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="text-xs font-semibold mb-2">团队资产</h4>
            <button className="w-full text-left p-2 rounded hover:bg-secondary/50 text-xs">
              📝 提示词库
            </button>
            <button className="w-full text-left p-2 rounded hover:bg-secondary/50 text-xs">
              🎯 团队上下文
            </button>
          </div>
        </Card>
      </div>

      {/* Center Column - Editor */}
      <div className="col-span-7">
        <Card className="h-full bg-gradient-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">脚本编辑器</h3>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                保存草稿
              </Button>
              <Button size="sm" className="bg-gradient-primary">
                <Send className="w-4 h-4 mr-2" />
                提交审核
              </Button>
            </div>
          </div>

          <Textarea
            placeholder="开始撰写你的脚本..."
            className="min-h-[calc(100%-5rem)] bg-secondary border-border font-mono"
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
        </Card>
      </div>

      {/* Right Column - AI Assistant */}
      <div className="col-span-3">
        <Card className="h-full bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            AI 助手
          </h3>

          <Tabs defaultValue="factcheck" className="h-[calc(100%-2rem)]">
            <TabsList className="grid w-full grid-cols-2 bg-secondary">
              <TabsTrigger value="factcheck" className="text-xs">
                核查
              </TabsTrigger>
              <TabsTrigger value="generate" className="text-xs">
                生成
              </TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[calc(100%-3rem)] mt-4">
              <TabsContent value="factcheck" className="space-y-3 mt-0">
                <Card className="p-3 bg-secondary">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-medium mb-1">AI事实核查</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        检查脚本中的事实准确性
                      </p>
                      <Button size="sm" variant="secondary" className="w-full">
                        开始核查
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 bg-secondary">
                  <div className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-medium mb-1">本地化翻译</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        将脚本翻译为其他语言
                      </p>
                      <select className="w-full p-2 text-xs rounded bg-background border border-border mb-2">
                        <option>英语</option>
                        <option>日语</option>
                        <option>韩语</option>
                      </select>
                      <Button size="sm" variant="secondary" className="w-full">
                        翻译
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="generate" className="space-y-3 mt-0">
                <Card className="p-3 bg-secondary">
                  <h4 className="text-xs font-medium mb-2">产品卖点生成话术</h4>
                  <Textarea
                    placeholder="输入产品卖点..."
                    className="text-xs mb-2 min-h-[60px] bg-background"
                  />
                  <Button size="sm" className="w-full bg-gradient-primary">
                    生成话术
                  </Button>

                  <div className="mt-3 space-y-2">
                    <div className="p-2 bg-background rounded text-xs cursor-pointer hover:bg-muted">
                      "让您的工作效率提升300%，告别加班！"
                    </div>
                    <div className="p-2 bg-background rounded text-xs cursor-pointer hover:bg-muted">
                      "零门槛上手，3分钟即可开始创作"
                    </div>
                    <div className="p-2 bg-background rounded text-xs cursor-pointer hover:bg-muted">
                      "AI智能助手，24小时随时待命"
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </Card>
      </div>
      </div>

      {/* 风险提示 - 底部全宽 */}
      <Card className="bg-gradient-card p-4">
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          风险提示
        </h3>
        <ScrollArea className="h-[200px]">
          <div className="grid grid-cols-4 gap-3 pr-4">
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
              { level: "高", title: "竞品法律纠纷", date: "3月15日" },
              { level: "中", title: "行业监管政策", date: "3月12日" },
              { level: "低", title: "用户投诉趋势", date: "3月10日" },
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
        </ScrollArea>
      </Card>
    </div>
  );
}
