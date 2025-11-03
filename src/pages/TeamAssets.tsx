import { useState } from "react";
import { Sparkles, Users, TrendingUp, Video, Play, Heart, MessageCircle } from "lucide-react";
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
    <div className="flex flex-col gap-4 overflow-y-auto p-4">
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

      {/* 其他功能板块 */}
      <div className="grid grid-cols-2 gap-4">
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

        {/* 团队知识库 */}
        <Card className="bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            团队知识库
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { title: "🇬🇧英铁冷知识库", desc: "英国铁路相关知识" },
              { title: "🔥英铁爆款脚本", desc: "高播放量脚本合集" },
              { title: "🇪🇸西铁冷知识库", desc: "西班牙铁路相关知识" },
              { title: "🔥西铁爆款脚本合集", desc: "精选爆款内容" },
            ].map((knowledge) => (
              <div key={knowledge.title} className="p-3 bg-secondary/50 rounded hover:bg-secondary cursor-pointer transition-colors">
                <h5 className="font-medium text-sm mb-1">{knowledge.title}</h5>
                <p className="text-xs text-muted-foreground">{knowledge.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
