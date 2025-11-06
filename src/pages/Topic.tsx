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
          <Tabs defaultValue="uk" className="h-full flex flex-col">
            <div className="border-b border-border p-4">
              <TabsList className="bg-secondary">
                <TabsTrigger value="uk">🔥英国新闻热点</TabsTrigger>
                <TabsTrigger value="spain">🔥西班牙新闻热点</TabsTrigger>
                <TabsTrigger value="hongkong">🔥香港新闻热点</TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <TabsContent value="uk" className="space-y-3 mt-0">
                {[
                  { title: "英国首相宣布全新AI监管框架", desc: "英国政府发布最新人工智能监管政策，旨在平衡创新与安全...", time: "1小时前", heat: "12.3k" },
                  { title: "伦敦科技周开幕 聚焦Web3创新", desc: "2024伦敦科技周正式开幕，重点展示区块链、Web3等前沿技术应用...", time: "3小时前", heat: "9.8k" },
                  { title: "英国电商市场迎来圣诞购物季", desc: "英国零售商纷纷推出圣诞促销活动，线上购物增长显著...", time: "5小时前", heat: "8.2k" },
                  { title: "牛津大学AI研究获重大突破", desc: "牛津大学研究团队在AI语言模型领域取得重要进展...", time: "6小时前", heat: "7.5k" },
                  { title: "英国能源价格改革方案公布", desc: "政府宣布新的能源价格上限政策，预计影响数百万家庭...", time: "8小时前", heat: "6.9k" },
                ].map((item, i) => (
                  <Card key={i} className="p-4 hover:bg-secondary/50 cursor-pointer transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium line-clamp-2">
                        {item.title}
                      </h4>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        英国
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.time}</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        热度: {item.heat}
                      </span>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="spain" className="space-y-3 mt-0">
                {[
                  { title: "巴塞罗那推出智慧城市新计划", desc: "巴塞罗那市政府启动全新智慧城市项目，整合AI和物联网技术...", time: "2小时前", heat: "11.5k" },
                  { title: "西班牙旅游业强劲复苏", desc: "2024年西班牙旅游人数创历史新高，数字化服务成为亮点...", time: "4小时前", heat: "10.2k" },
                  { title: "马德里举办欧洲创新峰会", desc: "欧洲顶尖科技公司齐聚马德里，探讨未来创新趋势...", time: "5小时前", heat: "9.1k" },
                  { title: "西班牙可再生能源占比达新高", desc: "太阳能和风能发电量持续增长，西班牙能源转型成效显著...", time: "7小时前", heat: "7.8k" },
                  { title: "瓦伦西亚科技园区扩建完成", desc: "新科技园区吸引多家国际企业入驻，创造数千就业岗位...", time: "9小时前", heat: "6.4k" },
                ].map((item, i) => (
                  <Card key={i} className="p-4 hover:bg-secondary/50 cursor-pointer transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium line-clamp-2">
                        {item.title}
                      </h4>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        西班牙
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.time}</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        热度: {item.heat}
                      </span>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="hongkong" className="space-y-3 mt-0">
                {[
                  { title: "香港金融科技周盛大开幕", desc: "2024香港金融科技周吸引全球顶尖企业参展，展示最新金融创新...", time: "1小时前", heat: "15.2k" },
                  { title: "港府推出创新科技发展蓝图", desc: "香港特区政府公布未来五年科技发展规划，重点支持AI和生物科技...", time: "3小时前", heat: "13.8k" },
                  { title: "香港数码港推出创业扶持计划", desc: "数码港宣布新一轮创业资助，重点扶持Web3和元宇宙项目...", time: "4小时前", heat: "11.6k" },
                  { title: "中环金融区迎来智能化升级", desc: "中环商业区启动智能楼宇改造项目，提升能源效率和办公体验...", time: "6小时前", heat: "9.3k" },
                  { title: "香港跨境电商平台用户突破千万", desc: "本地电商平台发展迅速，跨境购物服务日益完善...", time: "7小时前", heat: "8.7k" },
                ].map((item, i) => (
                  <Card key={i} className="p-4 hover:bg-secondary/50 cursor-pointer transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium line-clamp-2">
                        {item.title}
                      </h4>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        香港
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.time}</span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        热度: {item.heat}
                      </span>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>

      {/* Right Column - My Board */}
      <div className="col-span-3 flex flex-col">
        <Card className="flex-1 bg-gradient-card p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">我的选题板</h3>
            <Button size="sm" variant="ghost">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <Tabs defaultValue="template" className="flex-1 flex flex-col min-h-0">
            <TabsList className="bg-secondary mb-3 shrink-0">
              <TabsTrigger value="template">模板</TabsTrigger>
              <TabsTrigger value="topic">选题</TabsTrigger>
              <TabsTrigger value="benefit">利益点</TabsTrigger>
            </TabsList>

            <div className="flex-1 overflow-y-auto min-h-0">
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

          <div className="mt-4 shrink-0">
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
