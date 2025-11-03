import { useState } from "react";
import { Sparkles, Users, TrendingUp, AlertTriangle, Video, Play, Heart, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function TeamAssets() {
  const [selectedGroup, setSelectedGroup] = useState("英铁");

  // 爆款视频数据
  const viralVideos = {
    英铁: [
      { id: 1, title: "爆款视频1",播放数: "12.5万", 点赞: "8.9K", 评论数: "1.2K" },
      { id: 2, title: "爆款视频2", 播放数: "15.3万", 点赞: "10.2K", 评论数: "1.5K" },
      { id: 3, title: "爆款视频3", 播放数: "9.8万", 点赞: "6.5K", 评论数: "890" },
      { id: 4, title: "爆款视频4", 播放数: "18.2万", 点赞: "12.8K", 评论数: "2.1K" },
    ],
    西铁: [
      { id: 1, title: "爆款视频1", 播放数: "10.2万", 点赞: "7.3K", 评论数: "950" },
      { id: 2, title: "爆款视频2", 播放数: "14.5万", 点赞: "9.8K", 评论数: "1.3K" },
      { id: 3, title: "爆款视频3", 播放数: "11.7万", 点赞: "8.1K", 评论数: "1.1K" },
      { id: 4, title: "爆款视频4", 播放数: "16.8万", 点赞: "11.5K", 评论数: "1.8K" },
    ],
    中港铁: [
      { id: 1, title: "爆款视频1", 播放数: "13.6万", 点赞: "9.2K", 评论数: "1.4K" },
      { id: 2, title: "爆款视频2", 播放数: "17.9万", 点赞: "12.3K", 评论数: "2.0K" },
      { id: 3, title: "爆款视频3", 播放数: "10.5万", 点赞: "7.8K", 评论数: "1.0K" },
      { id: 4, title: "爆款视频4", 播放数: "19.2万", 点赞: "13.6K", 评论数: "2.3K" },
    ],
    批量组: [
      { id: 1, title: "爆款视频1", 播放数: "8.9万", 点赞: "5.6K", 评论数: "780" },
      { id: 2, title: "爆款视频2", 播放数: "12.3万", 点赞: "8.5K", 评论数: "1.2K" },
      { id: 3, title: "爆款视频3", 播放数: "15.7万", 点赞: "10.9K", 评论数: "1.6K" },
      { id: 4, title: "爆款视频4", 播放数: "11.4万", 点赞: "7.9K", 评论数: "1.1K" },
    ],
  };

  return (
    <div className="flex flex-col gap-4 h-full p-4">
      {/* 爆款库 - 主要板块 */}
      <Card className="bg-gradient-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            爆款视频库
          </h2>
          <Button size="sm" variant="outline">
            + 添加爆款
          </Button>
        </div>

        {/* 组标签切换 */}
        <Tabs value={selectedGroup} onValueChange={setSelectedGroup} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="英铁">英铁</TabsTrigger>
            <TabsTrigger value="西铁">西铁</TabsTrigger>
            <TabsTrigger value="中港铁">中港铁</TabsTrigger>
            <TabsTrigger value="批量组">批量组</TabsTrigger>
          </TabsList>

          {Object.entries(viralVideos).map(([group, videos]) => (
            <TabsContent key={group} value={group} className="mt-0">
              <div className="grid grid-cols-4 gap-4 mb-4">
                {videos.map((video) => (
                  <Card 
                    key={video.id} 
                    className="bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer overflow-hidden"
                  >
                    <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-t-lg">
                      <Play className="w-12 h-12 text-primary/50" />
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium text-sm mb-2">{video.title}</h4>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          <span>播放数 {video.播放数}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>点赞 {video.点赞}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>评论数 {video.评论数}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-xs text-muted-foreground text-center pt-2">
                各爆款视频-鼠标悬浮-点击可查看详情
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Card>

      {/* 其他功能板块 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 提示词生成器 */}
        <Card className="bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            提示词生成器
          </h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">场景描述</label>
              <Input placeholder="例如：小红书种草文案" className="bg-background text-sm" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">目标受众</label>
              <Input placeholder="例如：18-35岁女性" className="bg-background text-sm" />
            </div>
            <Button className="w-full bg-gradient-primary text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              生成提示词
            </Button>
          </div>
        </Card>

        {/* 团队上下文 */}
        <Card className="bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            团队上下文
          </h3>
          <div className="space-y-2">
            {[
              { title: "品牌调性", desc: "年轻、活力、科技感" },
              { title: "产品卖点", desc: "AI驱动、高效、易用" },
              { title: "目标用户", desc: "25-35岁都市白领" },
            ].map((context) => (
              <div key={context.title} className="p-3 bg-secondary/50 rounded hover:bg-secondary cursor-pointer">
                <h5 className="font-medium text-sm mb-1">{context.title}</h5>
                <p className="text-xs text-muted-foreground">{context.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* 风险提示 */}
        <Card className="bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            风险提示
          </h3>
          <div className="space-y-2">
            {[
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
                <p className="text-sm font-medium">{risk.title}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
