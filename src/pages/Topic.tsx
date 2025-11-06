import { Search, TrendingUp, Database, AlertTriangle, Plus, ArrowRight, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface NewsItem {
  title: string;
  desc: string;
  time: string;
  heat: string;
  content: string;
  source: string;
  sourceUrl: string;
}

export default function Topic() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFactChecking, setIsFactChecking] = useState(false);

  const handleNewsClick = (news: NewsItem) => {
    setSelectedNews(news);
    setIsDialogOpen(true);
  };

  const handleFactCheck = async () => {
    setIsFactChecking(true);
    // TODO: 集成AI事实核查功能
    setTimeout(() => {
      setIsFactChecking(false);
      toast({
        title: "核查完成",
        description: "该新闻内容真实可靠，来源权威",
      });
    }, 2000);
  };

  const handleAddToBoard = () => {
    toast({
      title: "添加成功",
      description: "已将该新闻添加到选题板",
    });
    setIsDialogOpen(false);
  };
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Center Column - Content Feed */}
      <div className="col-span-9">
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
                  { 
                    title: "英国首相宣布全新AI监管框架", 
                    desc: "英国政府发布最新人工智能监管政策，旨在平衡创新与安全...", 
                    time: "1小时前", 
                    heat: "12.3k",
                    content: "英国政府今日正式发布新的人工智能监管框架，该框架旨在促进AI技术创新的同时确保公共安全。新政策包括对高风险AI应用的强制性评估、透明度要求以及建立独立监管机构。首相在议会发言中强调，英国将成为全球AI监管的领导者，为其他国家树立标杆。该框架将分阶段实施，预计在未来12个月内全面生效。业界普遍认为这是在创新与监管之间找到平衡的重要一步。",
                    source: "BBC News",
                    sourceUrl: "https://www.bbc.com/news"
                  },
                  { 
                    title: "伦敦科技周开幕 聚焦Web3创新", 
                    desc: "2024伦敦科技周正式开幕，重点展示区块链、Web3等前沿技术应用...", 
                    time: "3小时前", 
                    heat: "9.8k",
                    content: "2024伦敦科技周在ExCeL会展中心盛大开幕，吸引了来自全球50多个国家的科技企业和创新者参与。本届科技周的主题是'去中心化未来'，重点展示Web3、区块链、NFT和元宇宙等前沿技术的最新应用。多家知名科技公司发布了新产品和服务，包括去中心化金融平台、数字身份解决方案等。活动期间还将举办多场高峰论坛和工作坊，探讨Web3技术如何重塑数字经济。",
                    source: "The Guardian",
                    sourceUrl: "https://www.theguardian.com"
                  },
                  { 
                    title: "英国电商市场迎来圣诞购物季", 
                    desc: "英国零售商纷纷推出圣诞促销活动，线上购物增长显著...", 
                    time: "5小时前", 
                    heat: "8.2k",
                    content: "随着圣诞节临近，英国电商市场进入全年最繁忙的购物季。各大零售商提前启动促销活动，线上销售额较去年同期增长25%。市场分析显示，消费者更倾向于在线购物，尤其是移动端购物占比显著提升。AI推荐系统和个性化营销策略帮助商家提高转化率。物流公司也提前做好准备，确保在节日期间准时送达。预计今年圣诞季电商销售额将突破200亿英镑。",
                    source: "Financial Times",
                    sourceUrl: "https://www.ft.com"
                  },
                  { 
                    title: "牛津大学AI研究获重大突破", 
                    desc: "牛津大学研究团队在AI语言模型领域取得重要进展...", 
                    time: "6小时前", 
                    heat: "7.5k",
                    content: "牛津大学计算机科学系的研究团队在最新一期《自然》杂志上发表论文，介绍了他们在大语言模型理解能力方面的重大突破。新方法能够显著提升AI模型的推理能力和事实准确性，同时降低计算成本。研究团队开发的新架构已在多个基准测试中刷新记录。该成果引起学术界和产业界的广泛关注，多家科技公司表示有意合作将研究成果产业化。",
                    source: "Nature",
                    sourceUrl: "https://www.nature.com"
                  },
                  { 
                    title: "英国能源价格改革方案公布", 
                    desc: "政府宣布新的能源价格上限政策，预计影响数百万家庭...", 
                    time: "8小时前", 
                    heat: "6.9k",
                    content: "英国政府今日公布能源价格改革方案，新的价格上限政策将从明年1月开始实施。新政策旨在保护消费者免受能源价格剧烈波动的影响，同时鼓励可再生能源投资。根据方案，普通家庭的年度能源账单预计将下降约15%。能源监管机构表示，新政策在保障供应安全和推动绿色转型之间取得了平衡。环保组织对此表示欢迎，但也呼吁政府加大对可再生能源的支持力度。",
                    source: "Sky News",
                    sourceUrl: "https://news.sky.com"
                  },
                ].map((item, i) => (
                  <Card 
                    key={i} 
                    className="p-4 hover:bg-secondary/50 cursor-pointer transition-colors"
                    onClick={() => handleNewsClick(item)}
                  >
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
                  { 
                    title: "巴塞罗那推出智慧城市新计划", 
                    desc: "巴塞罗那市政府启动全新智慧城市项目，整合AI和物联网技术...", 
                    time: "2小时前", 
                    heat: "11.5k",
                    content: "巴塞罗那市政府正式启动'智慧巴塞罗那2030'计划，这是一个综合性的城市数字化转型项目。该计划将在城市各个角落部署物联网传感器，实时收集交通、环境、能源等数据。AI系统将分析这些数据，优化城市运营效率。项目还包括智能停车系统、垃圾分类监控、空气质量管理等应用。市长表示，这将使巴塞罗那成为欧洲领先的智慧城市之一，提升市民生活质量。",
                    source: "El País",
                    sourceUrl: "https://elpais.com"
                  },
                  { 
                    title: "西班牙旅游业强劲复苏", 
                    desc: "2024年西班牙旅游人数创历史新高，数字化服务成为亮点...", 
                    time: "4小时前", 
                    heat: "10.2k",
                    content: "西班牙国家统计局发布最新数据显示，2024年访问西班牙的国际游客人数已超过8000万，创下历史新高。旅游业数字化转型功不可没，包括在线预订系统、虚拟导览、AI客服等创新服务大幅提升游客体验。移动支付普及率也显著提高，许多景点实现无现金化运营。旅游部长表示，可持续旅游和数字化将是未来发展的重点方向。",
                    source: "La Vanguardia",
                    sourceUrl: "https://www.lavanguardia.com"
                  },
                  { 
                    title: "马德里举办欧洲创新峰会", 
                    desc: "欧洲顶尖科技公司齐聚马德里，探讨未来创新趋势...", 
                    time: "5小时前", 
                    heat: "9.1k",
                    content: "2024欧洲创新峰会在马德里会展中心举行，汇聚了500多家科技公司和初创企业。本次峰会主题为'重塑未来'，涵盖AI、生物技术、清洁能源等多个领域。多位知名企业家和投资人发表演讲，分享对未来技术发展的见解。会议期间还举行了创业项目路演，多个项目获得投资意向。西班牙首相出席开幕式，强调创新对经济增长的重要性。",
                    source: "ABC",
                    sourceUrl: "https://www.abc.es"
                  },
                  { 
                    title: "西班牙可再生能源占比达新高", 
                    desc: "太阳能和风能发电量持续增长，西班牙能源转型成效显著...", 
                    time: "7小时前", 
                    heat: "7.8k",
                    content: "西班牙能源部公布数据显示，可再生能源发电量已占总发电量的55%，创历史新高。太阳能和风能是主要增长动力，新增装机容量远超预期。政府制定的绿色能源转型计划取得显著成效，碳排放量持续下降。多个大型太阳能发电场和海上风电项目正在建设中。能源专家认为，西班牙有望提前实现碳中和目标。",
                    source: "El Mundo",
                    sourceUrl: "https://www.elmundo.es"
                  },
                  { 
                    title: "瓦伦西亚科技园区扩建完成", 
                    desc: "新科技园区吸引多家国际企业入驻，创造数千就业岗位...", 
                    time: "9小时前", 
                    heat: "6.4k",
                    content: "瓦伦西亚科技园区第二期扩建项目正式竣工，新增办公面积10万平方米。园区已吸引20多家国际科技公司入驻，涵盖软件开发、AI研究、生物科技等领域。预计将创造3000多个高技能就业岗位。园区提供完善的基础设施和税收优惠政策，成为外资企业进入西班牙市场的首选地。地方政府表示将继续加大对科技产业的支持力度。",
                    source: "Levante",
                    sourceUrl: "https://www.levante-emv.com"
                  },
                ].map((item, i) => (
                  <Card 
                    key={i} 
                    className="p-4 hover:bg-secondary/50 cursor-pointer transition-colors"
                    onClick={() => handleNewsClick(item)}
                  >
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
                  { 
                    title: "香港金融科技周盛大开幕", 
                    desc: "2024香港金融科技周吸引全球顶尖企业参展，展示最新金融创新...", 
                    time: "1小时前", 
                    heat: "15.2k",
                    content: "2024香港金融科技周在会展中心隆重开幕，来自60多个国家和地区的800多家企业参展。本届活动聚焦数字货币、区块链支付、智能投顾等前沿领域。多位金融监管机构负责人和行业领袖发表主题演讲，探讨金融科技如何推动普惠金融发展。现场还展示了多个创新应用，包括跨境实时支付系统、AI反欺诈平台等。香港金管局宣布将进一步开放金融科技监管沙盒。",
                    source: "South China Morning Post",
                    sourceUrl: "https://www.scmp.com"
                  },
                  { 
                    title: "港府推出创新科技发展蓝图", 
                    desc: "香港特区政府公布未来五年科技发展规划，重点支持AI和生物科技...", 
                    time: "3小时前", 
                    heat: "13.8k",
                    content: "香港特区政府发布《创新科技发展蓝图2025-2030》，投入200亿港元支持科技创新。蓝图明确将人工智能、生物科技、金融科技作为重点发展领域。政府将设立专项基金支持初创企业，提供税收优惠和人才引进政策。计划在五年内将研发投入占GDP比重提升至2%。创新及科技局局长表示，香港将打造成为国际创科中心，吸引全球顶尖科技人才和企业。",
                    source: "Hong Kong Economic Times",
                    sourceUrl: "https://www.hket.com"
                  },
                  { 
                    title: "香港数码港推出创业扶持计划", 
                    desc: "数码港宣布新一轮创业资助，重点扶持Web3和元宇宙项目...", 
                    time: "4小时前", 
                    heat: "11.6k",
                    content: "香港数码港启动'Web3创业加速计划'，提供总计5000万港元资助。入选项目可获得最高100万港元的种子资金，以及办公空间、导师指导等全方位支持。本期计划重点关注Web3基础设施、去中心化应用、数字资产管理等领域。数码港CEO表示，香港具备成为Web3枢纽的独特优势，将全力支持创业者实现创新理念。首批已有30个项目入选。",
                    source: "The Standard",
                    sourceUrl: "https://www.thestandard.com.hk"
                  },
                  { 
                    title: "中环金融区迎来智能化升级", 
                    desc: "中环商业区启动智能楼宇改造项目，提升能源效率和办公体验...", 
                    time: "6小时前", 
                    heat: "9.3k",
                    content: "中环金融区多栋商业大厦启动智能化改造工程，总投资超过30亿港元。项目将部署智能能源管理系统，预计可降低30%的能源消耗。大楼将配备AI安保系统、智能电梯调度、环境监测等功能。租户可通过手机App控制办公室照明、温度等设备。物业管理公司表示，智能化改造将显著提升办公体验和建筑价值，助力香港打造绿色智慧城市。",
                    source: "Hong Kong Free Press",
                    sourceUrl: "https://hongkongfp.com"
                  },
                  { 
                    title: "香港跨境电商平台用户突破千万", 
                    desc: "本地电商平台发展迅速，跨境购物服务日益完善...", 
                    time: "7小时前", 
                    heat: "8.7k",
                    content: "香港最大跨境电商平台宣布注册用户突破1000万，覆盖亚太地区主要市场。平台提供一站式跨境购物服务，整合支付、物流、清关等环节。AI推荐系统帮助用户发现心仪商品，移动端交易占比超过70%。公司今年营收预计增长40%，计划明年进军东南亚和日本市场。分析师认为，香港作为国际贸易枢纽，跨境电商发展前景广阔。",
                    source: "Ming Pao",
                    sourceUrl: "https://www.mingpao.com"
                  },
                ].map((item, i) => (
                  <Card 
                    key={i} 
                    className="p-4 hover:bg-secondary/50 cursor-pointer transition-colors"
                    onClick={() => handleNewsClick(item)}
                  >
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

      {/* News Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold pr-8">
              {selectedNews?.title}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
              <span>{selectedNews?.time}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                热度: {selectedNews?.heat}
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">新闻内容</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedNews?.content}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t">
              <span className="text-xs text-muted-foreground">来源：</span>
              <a 
                href={selectedNews?.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline flex items-center gap-1"
              >
                {selectedNews?.source}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <DialogFooter className="flex gap-2 sm:gap-2">
            <Button
              variant="outline"
              onClick={handleFactCheck}
              disabled={isFactChecking}
              className="flex-1"
            >
              {isFactChecking ? "核查中..." : "AI 事实核查"}
            </Button>
            <Button
              onClick={handleAddToBoard}
              className="flex-1 bg-gradient-primary"
            >
              添加到选题板
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
