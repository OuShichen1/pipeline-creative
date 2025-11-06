import { CheckCircle, XCircle, Clock, MessageSquare, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Review() {
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Left Column - Review Queue */}
      <div className="col-span-3">
        <Card className="h-full bg-gradient-card p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">审核队列</h3>
            <Badge variant="secondary">12 待审</Badge>
          </div>

          <div className="flex gap-2 mb-4">
            <Button size="sm" variant="outline" className="text-xs flex-1">
              全部
            </Button>
            <Button size="sm" variant="outline" className="text-xs flex-1">
              脚本
            </Button>
            <Button size="sm" variant="outline" className="text-xs flex-1">
              视频
            </Button>
          </div>

          <ScrollArea className="h-[calc(100%-6rem)]">
            <div className="space-y-2">
              {[
                { type: "video", title: "产品A推广视频", user: "张三", time: "2小时前" },
                { type: "script", title: "新品发布脚本", user: "李四", time: "3小时前" },
                { type: "video", title: "活动宣传视频", user: "王五", time: "5小时前" },
                { type: "script", title: "促销活动脚本", user: "赵六", time: "1天前" },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-3 cursor-pointer hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant={item.type === "video" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {item.type === "video" ? "视频" : "脚本"}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          待审核
                        </Badge>
                      </div>
                      <h4 className="text-xs font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        提交人：{item.user} · {item.time}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>

      {/* Center Column - Preview */}
      <div className="col-span-6">
        <Card className="h-full bg-gradient-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">产品A推广视频</h3>
            <Badge variant="outline">
              <Clock className="w-3 h-3 mr-1" />
              待审核
            </Badge>
          </div>

          {/* Video Preview */}
          <div className="aspect-[9/16] max-w-md mx-auto bg-secondary rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <Play className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">点击播放视频</p>
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline">
                  1.0x
                </Button>
                <Button size="sm" variant="outline">
                  1.5x
                </Button>
                <Button size="sm" variant="outline">
                  2.0x
                </Button>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">时长</p>
              <p className="font-medium">1:30</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">分辨率</p>
              <p className="font-medium">1920x1080</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">格式</p>
              <p className="font-medium">MP4</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Column - Review Actions */}
      <div className="col-span-3">
        <Card className="h-full bg-gradient-card p-4">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-primary" />
            审核操作
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium mb-2 block">审核意见</label>
              <Textarea
                placeholder="请输入您的审核意见和修改建议..."
                className="min-h-[120px] bg-secondary text-xs"
              />
            </div>

            <div className="space-y-2">
              <Button className="w-full bg-gradient-primary shadow-glow">
                <CheckCircle className="w-4 h-4 mr-2" />
                开始审核
              </Button>
            </div>

            <Card className="p-3 bg-secondary border-accent/20">
              <h4 className="text-xs font-medium mb-2">批量操作</h4>
              <p className="text-xs text-muted-foreground mb-2">
                从左侧选择多个同类型任务后可批量审核
              </p>
              <Button size="sm" variant="outline" className="w-full" disabled>
                批量通过
              </Button>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
