import { Search, TrendingUp, Database, AlertTriangle, Plus, CheckCircle2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export default function Topic() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Left Column - Tools */}
      <div className="col-span-3 space-y-4">
        <Card className="p-4 bg-gradient-card">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            AI 事实核查
          </h3>
          <Input placeholder="输入需要核查的内容..." className="bg-secondary mb-3" />
          <Button size="sm" className="w-full bg-gradient-primary">
            开始核查
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

          <Tabs defaultValue="template" className="h-full flex flex-col">
            <TabsList className="bg-secondary mb-3">
              <TabsTrigger value="template">模板</TabsTrigger>
              <TabsTrigger value="topic">选题</TabsTrigger>
              <TabsTrigger value="benefit">利益点</TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-y-auto">
              <TabsContent value="template" className="space-y-2 mt-0">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-3 bg-secondary hover:bg-secondary/70 cursor-move">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-xs font-medium line-clamp-2">
                        AI工具测评模板 {i}
                      </p>
                      <Badge variant="outline" className="ml-2 text-xs shrink-0">
                        模板
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">添加于 {i}小时前</p>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="topic" className="space-y-2 mt-0">
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
                    <p className="text-xs text-muted-foreground">添加于 {i}小时前</p>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="benefit" className="space-y-2 mt-0">
                {[1, 2].map((i) => (
                  <Card key={i} className="p-3 bg-secondary hover:bg-secondary/70 cursor-move">
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-xs font-medium line-clamp-2">
                        提升效率、降低成本、简化流程
                      </p>
                      <Badge variant="outline" className="ml-2 text-xs shrink-0">
                        利益点
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">添加于 {i}小时前</p>
                  </Card>
                ))}
              </TabsContent>
            </div>
          </Tabs>

          <div className="mt-4">
            <Button 
              className="w-full bg-gradient-primary" 
              onClick={() => navigate('/script')}
            >
              开始脚本撰写
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
