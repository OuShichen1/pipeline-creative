import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Users, TrendingUp, Video, Play, Heart, MessageCircle, CheckCircle, FileText, Lightbulb, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TeamAssets() {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState("英铁");

  // 爆款视频数据
  const viralVideos = {
    英铁: [
      { id: 1, title: "爆款视频1",播放数: "12.5万", 点赞: "8.9K", 评论数: "1.2K" },
      { id: 2, title: "爆款视频2", 播放数: "15.3万", 点赞: "10.2K", 评论数: "1.5K" },
      { id: 3, title: "爆款视频3", 播放数: "9.8万", 点赞: "6.5K", 评论数: "890" },
    ],
    西铁: [
      { id: 1, title: "爆款视频1", 播放数: "10.2万", 点赞: "7.3K", 评论数: "950" },
      { id: 2, title: "爆款视频2", 播放数: "14.5万", 点赞: "9.8K", 评论数: "1.3K" },
      { id: 3, title: "爆款视频3", 播放数: "11.7万", 点赞: "8.1K", 评论数: "1.1K" },
    ],
    中港铁: [
      { id: 1, title: "爆款视频1", 播放数: "13.6万", 点赞: "9.2K", 评论数: "1.4K" },
      { id: 2, title: "爆款视频2", 播放数: "17.9万", 点赞: "12.3K", 评论数: "2.0K" },
      { id: 3, title: "爆款视频3", 播放数: "10.5万", 点赞: "7.8K", 评论数: "1.0K" },
    ],
    批量组: [
      { id: 1, title: "爆款视频1", 播放数: "8.9万", 点赞: "5.6K", 评论数: "780" },
      { id: 2, title: "爆款视频2", 播放数: "12.3万", 点赞: "8.5K", 评论数: "1.2K" },
      { id: 3, title: "爆款视频3", 播放数: "15.7万", 点赞: "10.9K", 评论数: "1.6K" },
    ],
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col gap-4 p-4">
      {/* 欢迎板块 */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20 p-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              欢迎使用 AI 内容中台
            </h1>
            <p className="text-muted-foreground">
              智能化内容创作与管理平台，助力团队高效产出优质内容
            </p>
          </div>
        </div>
      </Card>

      {/* 团队知识库 */}
      <Card className="bg-gradient-card p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            团队知识库
          </h3>
          <Button size="sm" variant="outline" className="h-7 text-xs">
            管理知识库
          </Button>
        </div>
        <Separator className="mb-3" />
        
        <div className="grid grid-cols-4 gap-3">
          {/* 模版分类 */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-3 h-3 text-primary" />
              </div>
              <h4 className="text-sm font-semibold text-primary">模版库</h4>
            </div>
            <div className="space-y-1.5">
              {[
                { title: "🔥英铁爆款脚本", desc: "高播放量脚本合集", count: "12个" },
                { title: "🔥西铁爆款脚本合集", desc: "精选爆款内容", count: "8个" },
                { title: "🔥中港铁爆款脚本", desc: "中港铁热门脚本", count: "15个" },
              ].map((item) => (
                <div key={item.title} className="p-2 bg-card/50 backdrop-blur-sm rounded hover:bg-card/80 cursor-pointer transition-all border border-transparent hover:border-primary/20 hover:shadow-sm group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-xs mb-0.5 group-hover:text-primary transition-colors truncate">{item.title}</h5>
                      <p className="text-[10px] text-muted-foreground truncate">{item.desc}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] h-4 px-1.5 shrink-0">{item.count}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 选题分类 */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-3 h-3 text-primary" />
              </div>
              <h4 className="text-sm font-semibold text-primary">选题库</h4>
            </div>
            <div className="space-y-1.5">
              {[
                { title: "🇬🇧英铁冷知识库", desc: "英国铁路相关知识", count: "25个" },
                { title: "🇪🇸西铁冷知识库", desc: "西班牙铁路相关知识", count: "18个" },
                { title: "🇭🇰中港铁冷知识库", desc: "中港铁路相关知识", count: "22个" },
              ].map((item) => (
                <div key={item.title} className="p-2 bg-card/50 backdrop-blur-sm rounded hover:bg-card/80 cursor-pointer transition-all border border-transparent hover:border-primary/20 hover:shadow-sm group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-xs mb-0.5 group-hover:text-primary transition-colors truncate">{item.title}</h5>
                      <p className="text-[10px] text-muted-foreground truncate">{item.desc}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] h-4 px-1.5 shrink-0">{item.count}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 利益点分类 */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-3 h-3 text-primary" />
              </div>
              <h4 className="text-sm font-semibold text-primary">利益点库</h4>
            </div>
            <div className="space-y-1.5">
              {[
                { title: "💰英铁钩子库", desc: "英铁钩子素材库", count: "30个" },
                { title: "💰西铁钩子库", desc: "西铁钩子素材库", count: "24个" },
                { title: "💰中港铁钩子库", desc: "中港铁钩子素材库", count: "28个" },
              ].map((item) => (
                <div key={item.title} className="p-2 bg-card/50 backdrop-blur-sm rounded hover:bg-card/80 cursor-pointer transition-all border border-transparent hover:border-primary/20 hover:shadow-sm group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-xs mb-0.5 group-hover:text-primary transition-colors truncate">{item.title}</h5>
                      <p className="text-[10px] text-muted-foreground truncate">{item.desc}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] h-4 px-1.5 shrink-0">{item.count}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 团队提示词 - 新增板块 */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/10 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-3 h-3 text-primary" />
              </div>
              <h4 className="text-sm font-semibold text-primary">提示词库</h4>
            </div>
            <div className="space-y-1.5">
              {[
                { title: "🤖AI脚本生成提示词", desc: "优化脚本生成效果", count: "6个" },
                { title: "✨AI润色提示词", desc: "提升文案质量", count: "8个" },
                { title: "🎯AI选题分析提示词", desc: "精准选题定位", count: "5个" },
              ].map((item) => (
                <div key={item.title} className="p-2 bg-card/50 backdrop-blur-sm rounded hover:bg-card/80 cursor-pointer transition-all border border-transparent hover:border-primary/20 hover:shadow-sm group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-xs mb-0.5 group-hover:text-primary transition-colors truncate">{item.title}</h5>
                      <p className="text-[10px] text-muted-foreground truncate">{item.desc}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] h-4 px-1.5 shrink-0">{item.count}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Card>

      {/* 主要板块 - 左右分栏 */}
      <div className="grid grid-cols-[2fr,1fr] gap-4">
        {/* 左侧：爆款视频库 */}
        <Card className="bg-gradient-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              爆款视频库
            </h2>
            <Button size="sm" variant="outline">
              + 添加爆款
            </Button>
          </div>
          <Separator className="mb-6" />

          {/* 组标签切换 */}
          <Tabs value={selectedGroup} onValueChange={setSelectedGroup} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="英铁" className="data-[state=active]:shadow-[0_0_15px_rgba(59,130,246,0.5)]">🇬🇧英铁</TabsTrigger>
              <TabsTrigger value="西铁" className="data-[state=active]:shadow-[0_0_15px_rgba(59,130,246,0.5)]">🇪🇸西铁</TabsTrigger>
              <TabsTrigger value="中港铁" className="data-[state=active]:shadow-[0_0_15px_rgba(59,130,246,0.5)]">中🇭🇰港铁</TabsTrigger>
              <TabsTrigger value="批量组" className="data-[state=active]:shadow-[0_0_15px_rgba(59,130,246,0.5)]">🤖批量组</TabsTrigger>
            </TabsList>

          <TabsContent value="英铁" className="mt-0">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {viralVideos.英铁.map((video) => (
                <Card 
                  key={video.id} 
                  className="bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer overflow-hidden"
                  onClick={() => {
                    if (video.id === 1) {
                      window.open('https://www.tiktok.com/@locomotiveaa355/video/7538389421914148118', '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-t-lg">
                    <Play className="w-12 h-12 text-primary/50" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-2">{video.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          <span>{video.播放数}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{video.点赞}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{video.评论数}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="default" className="h-6 px-3 rounded-full bg-primary text-primary-foreground text-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        拆解
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button size="sm" variant="outline" asChild>
                <a href="https://trip.larkenterprise.com/wiki/BnfNwPdRziJXQWkmr2Dc6EZFnfc?from=from_lark_index_search&ccm_open_type=from_lark_index_search" target="_blank" rel="noopener noreferrer">
                  🔥更多英铁爆款
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="https://trip.larkenterprise.com/wiki/TYd7wjPR3imS2JkXWyKctkVrnzh" target="_blank" rel="noopener noreferrer">
                  👉英铁爆款SOP
                </a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="西铁" className="mt-0">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {viralVideos.西铁.map((video) => (
                <Card 
                  key={video.id} 
                  className="bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer overflow-hidden"
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-t-lg">
                    <Play className="w-12 h-12 text-primary/50" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-2">{video.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          <span>{video.播放数}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{video.点赞}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{video.评论数}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="default" className="h-6 px-3 rounded-full bg-primary text-primary-foreground text-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        拆解
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button size="sm" variant="outline">
                🔥更多西铁爆款
              </Button>
              <Button size="sm" variant="outline">
                👉西铁爆款SOP
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="中港铁" className="mt-0">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {viralVideos.中港铁.map((video) => (
                <Card 
                  key={video.id} 
                  className="bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer overflow-hidden"
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-t-lg">
                    <Play className="w-12 h-12 text-primary/50" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-2">{video.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          <span>{video.播放数}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{video.点赞}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{video.评论数}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="default" className="h-6 px-3 rounded-full bg-primary text-primary-foreground text-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        拆解
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button size="sm" variant="outline">
                🔥更多中港铁爆款
              </Button>
              <Button size="sm" variant="outline">
                👉中港铁爆款SOP
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="批量组" className="mt-0">
            <div className="grid grid-cols-3 gap-4 mb-4">
              {viralVideos.批量组.map((video) => (
                <Card 
                  key={video.id} 
                  className="bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer overflow-hidden"
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-t-lg">
                    <Play className="w-12 h-12 text-primary/50" />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-2">{video.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          <span>{video.播放数}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{video.点赞}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{video.评论数}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="default" className="h-6 px-3 rounded-full bg-primary text-primary-foreground text-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        拆解
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button size="sm" variant="outline">
                🔥更多AI批量组爆款
              </Button>
              <Button size="sm" variant="outline">
                👉AI批量爆款SOP
              </Button>
            </div>
          </TabsContent>
          </Tabs>
        </Card>

        {/* 右侧：爆款内容拆解 - 独立板块 */}
        <Card className="bg-gradient-card p-6 flex flex-col">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            爆款内容拆解
          </h2>
          <Separator className="mb-6" />
          <div className="bg-secondary/30 rounded-lg border-2 border-dashed border-primary/20 p-6 flex flex-col flex-1 relative">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="font-bold text-primary min-w-[80px]">结构</div>
                <div className="font-bold text-primary">目标</div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="font-semibold min-w-[80px]">开头钩子</div>
                <div className="text-sm text-muted-foreground">吸引用户观看,提高视频的完播率和观看次数</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="font-semibold min-w-[80px]">AROLL.英国出行小众冷知识</div>
                <div className="text-sm text-muted-foreground">增强观众对视频的兴趣和信任的好奇小知识</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="font-semibold min-w-[80px]">BROLL.植入产品利益点</div>
                <div className="text-sm text-muted-foreground">减少促销优惠券的"硬推销"感,营造稀缺感,提高受众兴趣,增加流量。</div>
              </div>

              <div className="flex items-start gap-3">
                <div className="font-semibold min-w-[80px]">结尾引导</div>
                <div className="text-sm text-muted-foreground">引导用户互动,增加视频播放时长和参与率</div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigate('/topic')}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                学会了，开始创作
              </Button>
            </div>
          </div>
        </Card>
      </div>
      </div>
    </div>
  );
}
