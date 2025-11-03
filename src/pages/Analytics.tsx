import { TrendingUp, Eye, Heart, Share2, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Analytics() {
  return (
    <div className="space-y-4">
      {/* Top Filters */}
      <Card className="p-4 bg-gradient-card">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <select className="p-2 text-sm rounded bg-secondary border border-border">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>最近90天</option>
            </select>
          </div>
          <select className="p-2 text-sm rounded bg-secondary border border-border">
            <option>全部平台</option>
            <option>小红书</option>
            <option>抖音</option>
            <option>微信</option>
          </select>
          <select className="p-2 text-sm rounded bg-secondary border border-border">
            <option>全部内容</option>
            <option>视频</option>
            <option>图文</option>
          </select>
          <div className="ml-auto">
            <Button size="sm" variant="outline">
              导出报表
            </Button>
          </div>
        </div>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            label: "总曝光",
            value: "1,234,567",
            change: "+12.5%",
            icon: Eye,
            trend: "up",
          },
          {
            label: "总互动",
            value: "89,234",
            change: "+8.3%",
            icon: Heart,
            trend: "up",
          },
          {
            label: "分享次数",
            value: "12,456",
            change: "+15.2%",
            icon: Share2,
            trend: "up",
          },
          {
            label: "转化率",
            value: "3.45%",
            change: "-2.1%",
            icon: TrendingUp,
            trend: "down",
          },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <Card key={i} className="p-4 bg-gradient-card">
              <div className="flex items-start justify-between mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <Badge
                  variant={kpi.trend === "up" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {kpi.change}
                </Badge>
              </div>
              <p className="text-2xl font-bold mb-1">{kpi.value}</p>
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4">
        {/* Trend Chart */}
        <Card className="p-6 bg-gradient-card">
          <h3 className="text-sm font-semibold mb-4">内容表现趋势</h3>
          <div className="h-64 bg-secondary rounded flex items-center justify-center">
            <p className="text-muted-foreground">折线图占位</p>
          </div>
        </Card>

        {/* Distribution Chart */}
        <Card className="p-6 bg-gradient-card">
          <h3 className="text-sm font-semibold mb-4">互动来源分布</h3>
          <div className="h-64 bg-secondary rounded flex items-center justify-center">
            <p className="text-muted-foreground">饼图占位</p>
          </div>
        </Card>
      </div>

      {/* Top Performing Content */}
      <Card className="p-6 bg-gradient-card">
        <h3 className="text-sm font-semibold mb-4">最佳表现内容 Top 10</h3>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 rounded-lg bg-secondary hover:bg-secondary/70"
            >
              <div className="text-lg font-bold text-primary w-8">{i}</div>
              <div className="w-16 h-16 rounded bg-muted flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium mb-1">
                  产品A推广视频 - 提升效率300%
                </h4>
                <p className="text-xs text-muted-foreground">
                  发布于 2024-01-15 · 小红书
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">1.2M</p>
                <p className="text-xs text-muted-foreground">曝光</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">45.2K</p>
                <p className="text-xs text-muted-foreground">互动</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-accent">3.77%</p>
                <p className="text-xs text-muted-foreground">转化率</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Detailed Table */}
      <Card className="p-6 bg-gradient-card">
        <h3 className="text-sm font-semibold mb-4">详细数据表</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-muted-foreground font-medium">
                  内容标题
                </th>
                <th className="text-left p-3 text-muted-foreground font-medium">
                  平台
                </th>
                <th className="text-left p-3 text-muted-foreground font-medium">
                  发布时间
                </th>
                <th className="text-right p-3 text-muted-foreground font-medium">
                  曝光
                </th>
                <th className="text-right p-3 text-muted-foreground font-medium">
                  互动
                </th>
                <th className="text-right p-3 text-muted-foreground font-medium">
                  转化率
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <tr key={i} className="border-b border-border hover:bg-secondary/30">
                  <td className="p-3">产品推广视频 {i}</td>
                  <td className="p-3">
                    <Badge variant="secondary">小红书</Badge>
                  </td>
                  <td className="p-3 text-muted-foreground">2024-01-{15 + i}</td>
                  <td className="p-3 text-right">{(Math.random() * 1000).toFixed(0)}K</td>
                  <td className="p-3 text-right">{(Math.random() * 50).toFixed(1)}K</td>
                  <td className="p-3 text-right text-accent font-medium">
                    {(Math.random() * 5).toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
