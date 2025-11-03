import { Search, TrendingUp, Database, AlertTriangle, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Topic() {
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Left Column - Tools */}
      <div className="col-span-3 space-y-4">
        <Card className="p-4 bg-gradient-card">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Database className="w-4 h-4 text-primary" />
            爆款库搜索
          </h3>
          <div className="space-y-3">
            <Input placeholder="搜索行业、平台..." className="bg-secondary" />
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs">
                美妆
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                电商
              </Button>
              <Button size="sm" variant="outline" className="text-xs">
                教育
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-card">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            爆款拆解工具
          </h3>
          <Input placeholder="粘贴链接或主题词..." className="bg-secondary mb-3" />
          <Button size="sm" className="w-full bg-gradient-primary">
            AI分析
          </Button>
        </Card>

        <Card className="p-4 bg-gradient-card">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-accent" />
            风险提示点查询
          </h3>
          <Input placeholder="输入关键词..." className="bg-secondary mb-3" />
          <Button size="sm" variant="secondary" className="w-full">
            查询
          </Button>
        </Card>
      </div>

      {/* Center Column - Content Feed */}
      <div className="col-span-6">
        <Card className="h-full bg-gradient-card">
          <Tabs defaultValue="trends" className="h-full flex flex-col">
            <div className="border-b border-border p-4">
              <TabsList className="bg-secondary">
                <TabsTrigger value="trends">热点新闻</TabsTrigger>
                <TabsTrigger value="industry">行业动态</TabsTrigger>
                <TabsTrigger value="hits">爆款库推荐</TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <TabsContent value="trends" className="space-y-3 mt-0">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="p-4 hover:bg-secondary/50 cursor-pointer transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium line-clamp-2">
                        新品发布｜2024最新AI营销工具全面解析
                      </h4>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        小红书
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      深度分析当前市场上最热门的AI营销工具，帮助你快速提升内容创作效率...
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>2小时前</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        热度: 8.5k
                      </span>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="industry" className="mt-0">
                <div className="text-center text-muted-foreground py-8">
                  行业动态内容
                </div>
              </TabsContent>

              <TabsContent value="hits" className="mt-0">
                <div className="text-center text-muted-foreground py-8">
                  爆款库推荐内容
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>

      {/* Right Column - My Board */}
      <div className="col-span-3">
        <Card className="h-full bg-gradient-card p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">我的选题板</h3>
            <Button size="sm" variant="ghost">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-3 bg-secondary hover:bg-secondary/70 cursor-move">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-xs font-medium line-clamp-2">
                    AI工具测评 - 提升效率300%
                  </p>
                  <Badge variant="outline" className="ml-2 text-xs shrink-0">
                    待处理
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">添加于 3小时前</p>
              </Card>
            ))}

            <div className="pt-4 text-center">
              <p className="text-xs text-muted-foreground">
                从左侧拖拽灵感添加到选题板
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
