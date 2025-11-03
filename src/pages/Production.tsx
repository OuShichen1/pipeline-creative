import { Play, User, Mic, Library, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Production() {
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Main Content - Asset Library */}
      <div className="col-span-9">
        <Card className="h-full bg-gradient-card">
          <Tabs defaultValue="video" className="h-full flex flex-col">
            <div className="border-b border-border p-4">
              <TabsList className="bg-secondary">
                <TabsTrigger value="video" className="gap-2">
                  <Play className="w-4 h-4" />
                  AI视频批量生成
                </TabsTrigger>
                <TabsTrigger value="avatar" className="gap-2">
                  <User className="w-4 h-4" />
                  AI数字人
                </TabsTrigger>
                <TabsTrigger value="voice" className="gap-2">
                  <Mic className="w-4 h-4" />
                  AI配音
                </TabsTrigger>
                <TabsTrigger value="library" className="gap-2">
                  <Library className="w-4 h-4" />
                  我的素材库
                </TabsTrigger>
              </TabsList>
            </div>

            <ScrollArea className="flex-1 p-4">
              <TabsContent value="video" className="mt-0">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card
                      key={i}
                      className="group cursor-pointer overflow-hidden hover:ring-2 hover:ring-primary transition-all"
                    >
                      <div className="aspect-video bg-secondary flex items-center justify-center relative">
                        <Play className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                        <Badge className="absolute top-2 right-2 bg-accent">
                          模板 {i}
                        </Badge>
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-medium mb-1">产品展示模板</h4>
                        <p className="text-xs text-muted-foreground">
                          适合电商、新品发布
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="avatar" className="mt-0">
                <div className="grid grid-cols-4 gap-4">
                  {["专业男性", "亲和女性", "活力青年", "成熟稳重", "时尚达人", "技术专家"].map(
                    (name, i) => (
                      <Card
                        key={i}
                        className="group cursor-pointer overflow-hidden hover:ring-2 hover:ring-primary transition-all"
                      >
                        <div className="aspect-square bg-secondary flex items-center justify-center">
                          <User className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="p-3 text-center">
                          <h4 className="text-sm font-medium">{name}</h4>
                        </div>
                      </Card>
                    )
                  )}
                </div>
              </TabsContent>

              <TabsContent value="voice" className="mt-0">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "专业女声", style: "新闻播报", lang: "中文" },
                    { name: "磁性男声", style: "广告旁白", lang: "中文" },
                    { name: "甜美女声", style: "温柔亲和", lang: "中文" },
                    { name: "活力男声", style: "激情解说", lang: "中文" },
                  ].map((voice, i) => (
                    <Card key={i} className="p-4 hover:bg-secondary/50 cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-sm font-medium mb-1">{voice.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {voice.style} · {voice.lang}
                          </p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="h-12 bg-secondary rounded flex items-center justify-center">
                        <div className="flex gap-1">
                          {[...Array(30)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 bg-primary/30 rounded"
                              style={{ height: `${Math.random() * 100}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="library" className="mt-0">
                <div className="text-center py-12 text-muted-foreground">
                  <Library className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>暂无素材</p>
                  <p className="text-xs mt-2">生成的素材将自动保存在这里</p>
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </Card>
      </div>

      {/* Right Column - Configuration */}
      <div className="col-span-3">
        <Card className="h-full bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            配置与生成
          </h3>

          <div className="space-y-4">
            <Card className="p-3 bg-secondary">
              <h4 className="text-xs font-medium mb-2">选择脚本</h4>
              <select className="w-full p-2 text-xs rounded bg-background border border-border">
                <option>产品A脚本.txt</option>
                <option>新品推广脚本.txt</option>
                <option>活动宣传脚本.txt</option>
              </select>
            </Card>

            <Card className="p-3 bg-secondary">
              <h4 className="text-xs font-medium mb-2">数字人模型</h4>
              <div className="p-2 bg-background rounded flex items-center gap-2">
                <User className="w-8 h-8 text-muted-foreground" />
                <div className="text-xs">
                  <p className="font-medium">专业女性</p>
                  <p className="text-muted-foreground">已选择</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 bg-secondary">
              <h4 className="text-xs font-medium mb-2">配音风格</h4>
              <div className="p-2 bg-background rounded">
                <p className="text-xs font-medium">专业女声</p>
                <p className="text-xs text-muted-foreground">新闻播报风格</p>
              </div>
            </Card>

            <Card className="p-3 bg-secondary">
              <h4 className="text-xs font-medium mb-2">视频模板</h4>
              <div className="p-2 bg-background rounded">
                <p className="text-xs font-medium">产品展示模板</p>
                <p className="text-xs text-muted-foreground">适合电商场景</p>
              </div>
            </Card>

            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-gradient-primary shadow-glow">
                <Sparkles className="w-4 h-4 mr-2" />
                开始批量生成
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                预计生成时间：5-10分钟
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
