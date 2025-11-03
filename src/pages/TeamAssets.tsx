import { Sparkles, Users, TrendingUp, AlertTriangle, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function TeamAssets() {
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Left Column - Navigation */}
      <div className="col-span-2">
        <Card className="h-full bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            资产分类
          </h3>

          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded bg-primary/20 text-primary text-sm font-medium">
              📝 提示词生成器
            </button>
            <button className="w-full text-left p-3 rounded hover:bg-secondary/50 text-sm">
              🎯 团队上下文
            </button>
            <button className="w-full text-left p-3 rounded hover:bg-secondary/50 text-sm">
              🔥 爆款库
            </button>
            <button className="w-full text-left p-3 rounded hover:bg-secondary/50 text-sm">
              ⚠️ 风险提示
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground">快速统计</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>提示词模板</span>
                <span className="text-primary">128</span>
              </div>
              <div className="flex justify-between">
                <span>团队成员</span>
                <span className="text-primary">24</span>
              </div>
              <div className="flex justify-between">
                <span>爆款案例</span>
                <span className="text-primary">356</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Center Column - Main Content */}
      <div className="col-span-7">
        <Tabs defaultValue="prompt" className="h-full">
          <Card className="h-full bg-gradient-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">团队资产库</h3>
              <TabsList className="bg-secondary">
                <TabsTrigger value="prompt">提示词</TabsTrigger>
                <TabsTrigger value="context">上下文</TabsTrigger>
                <TabsTrigger value="viral">爆款库</TabsTrigger>
                <TabsTrigger value="risk">风险提示</TabsTrigger>
              </TabsList>
            </div>

            <ScrollArea className="h-[calc(100%-4rem)]">
              {/* Prompt Generator Tab */}
              <TabsContent value="prompt" className="space-y-4 mt-0">
                <Card className="p-4 bg-secondary">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    AI 提示词生成器
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">场景描述</label>
                      <Input placeholder="例如：小红书种草文案" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">目标受众</label>
                      <Input placeholder="例如：18-35岁女性" className="bg-background" />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">核心要求</label>
                      <Textarea 
                        placeholder="例如：突出性价比，情感化表达" 
                        className="bg-background min-h-[80px]"
                      />
                    </div>
                    <Button className="w-full bg-gradient-primary">
                      <Sparkles className="w-4 h-4 mr-2" />
                      生成提示词
                    </Button>
                  </div>
                </Card>

                <Card className="p-4 bg-secondary">
                  <h4 className="text-sm font-semibold mb-3">常用提示词模板</h4>
                  <div className="space-y-2">
                    {[
                      { name: "产品种草文案", tag: "小红书", uses: 156 },
                      { name: "短视频脚本", tag: "抖音", uses: 234 },
                      { name: "朋友圈文案", tag: "微信", uses: 89 },
                      { name: "产品介绍话术", tag: "通用", uses: 178 },
                    ].map((template) => (
                      <div
                        key={template.name}
                        className="p-3 bg-background rounded hover:bg-muted cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm">{template.name}</span>
                          <Badge variant="secondary" className="text-xs">{template.tag}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{template.uses} 次使用</span>
                          <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100">
                            使用
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* Team Context Tab */}
              <TabsContent value="context" className="space-y-4 mt-0">
                <Card className="p-4 bg-secondary">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold">团队上下文管理</h4>
                    <Button size="sm" variant="outline">+ 新建上下文</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    管理团队的品牌调性、产品信息、目标受众等核心上下文，让AI更懂你的业务
                  </p>
                </Card>

                <div className="space-y-3">
                  {[
                    { title: "品牌调性", desc: "年轻、活力、科技感", team: "市场部", updated: "2天前" },
                    { title: "产品核心卖点", desc: "AI驱动、高效、易用", team: "产品部", updated: "5天前" },
                    { title: "目标用户画像", desc: "25-35岁都市白领", team: "运营部", updated: "1周前" },
                  ].map((context) => (
                    <Card key={context.title} className="p-4 bg-secondary hover:bg-secondary/80 cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-medium">{context.title}</h5>
                        <Badge variant="outline" className="text-xs">{context.team}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{context.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">更新于 {context.updated}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">编辑</Button>
                          <Button size="sm" variant="ghost">删除</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Viral Content Library Tab */}
              <TabsContent value="viral" className="space-y-4 mt-0">
                <Card className="p-4 bg-secondary">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-semibold flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      爆款内容库
                    </h4>
                    <div className="flex gap-2">
                      <Input placeholder="搜索爆款..." className="w-48 bg-background" />
                      <Button size="sm" variant="outline">筛选</Button>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "AI工具测评爆款", views: "125万", likes: "8.9万", platform: "抖音" },
                    { title: "产品种草笔记", views: "68万", likes: "4.2万", platform: "小红书" },
                    { title: "行业趋势解读", views: "89万", likes: "6.7万", platform: "B站" },
                    { title: "使用场景展示", views: "156万", likes: "12.3万", platform: "抖音" },
                  ].map((item, idx) => (
                    <Card key={idx} className="p-4 bg-secondary hover:bg-secondary/80 cursor-pointer">
                      <div className="aspect-video bg-background rounded mb-3 flex items-center justify-center text-muted-foreground">
                        <Video className="w-8 h-8" />
                      </div>
                      <h5 className="font-medium text-sm mb-2">{item.title}</h5>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex gap-3 text-muted-foreground">
                          <span>👁 {item.views}</span>
                          <span>❤️ {item.likes}</span>
                        </div>
                        <Badge variant="secondary">{item.platform}</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Risk Alerts Tab */}
              <TabsContent value="risk" className="space-y-4 mt-0">
                <Card className="p-4 bg-secondary border-destructive/50">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    近期风险提示
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    追踪团队相关的公关事件、法务风险和行业敏感话题
                  </p>
                </Card>

                <div className="space-y-3">
                  {[
                    {
                      level: "高",
                      title: "竞品法律纠纷",
                      desc: "竞品A因虚假宣传被起诉，避免类似表述",
                      date: "2024-03-15",
                      tags: ["法务", "竞品"],
                    },
                    {
                      level: "中",
                      title: "行业监管政策",
                      desc: "新广告法对AI生成内容标注有新要求",
                      date: "2024-03-12",
                      tags: ["政策", "合规"],
                    },
                    {
                      level: "低",
                      title: "用户投诉趋势",
                      desc: "近期关于售后服务的投诉增加15%",
                      date: "2024-03-10",
                      tags: ["公关", "客服"],
                    },
                  ].map((risk, idx) => (
                    <Card
                      key={idx}
                      className={`p-4 ${
                        risk.level === "高"
                          ? "bg-destructive/10 border-destructive/50"
                          : risk.level === "中"
                          ? "bg-yellow-500/10 border-yellow-500/50"
                          : "bg-secondary"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={risk.level === "高" ? "destructive" : "secondary"}
                            className="text-xs"
                          >
                            {risk.level}风险
                          </Badge>
                          <h5 className="font-medium text-sm">{risk.title}</h5>
                        </div>
                        <span className="text-xs text-muted-foreground">{risk.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{risk.desc}</p>
                      <div className="flex gap-2">
                        {risk.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </ScrollArea>
          </Card>
        </Tabs>
      </div>

      {/* Right Column - Quick Actions */}
      <div className="col-span-3">
        <Card className="h-full bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            快捷操作
          </h3>

          <div className="space-y-3">
            <Card className="p-3 bg-secondary">
              <h4 className="text-xs font-medium mb-2">最近使用</h4>
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded hover:bg-background text-xs">
                  📝 产品种草提示词
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-background text-xs">
                  🎯 品牌调性上下文
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-background text-xs">
                  🔥 热门视频脚本
                </button>
              </div>
            </Card>

            <Card className="p-3 bg-secondary">
              <h4 className="text-xs font-medium mb-2">团队推荐</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-background rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">新品发布模板</span>
                    <Badge variant="secondary" className="text-xs">热门</Badge>
                  </div>
                  <p className="text-muted-foreground">由产品部分享</p>
                </div>
                <div className="p-2 bg-background rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">用户痛点话术</span>
                    <Badge variant="secondary" className="text-xs">推荐</Badge>
                  </div>
                  <p className="text-muted-foreground">由运营部分享</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 bg-gradient-primary">
              <h4 className="text-xs font-medium mb-2">本周数据</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>新增提示词</span>
                  <span className="font-semibold">23</span>
                </div>
                <div className="flex justify-between">
                  <span>团队协作次数</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex justify-between">
                  <span>爆款收藏</span>
                  <span className="font-semibold">42</span>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
