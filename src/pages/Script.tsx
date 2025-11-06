import { FolderOpen, FileText, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function Script() {
  const [selectedLanguage, setSelectedLanguage] = useState<"英语" | "西语" | "粤语">("英语");
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const [chineseText, setChineseText] = useState(`火车站台间隙暗藏杀机
坐火车一定要注意这个Mind the Gap!
最大宽度能吞进成年人的小腿!
别以为广播提醒是废话
每年超2700人卡脚受伤
三招防掉坑
第一候车时双脚远离黄线至少半米
第二上下车务必跨大步不踩间隙边缘
如果遇到卡脚
记住急救指南
11月6日10:
千万别挣扎等待救援即可
第三
在TrainPal搜staffx
里面全是打折的火车票
还有什么想知道的
评论区告诉我`);
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [selectedDraft, setSelectedDraft] = useState<number | null>(null);
  const [isDraftDialogOpen, setIsDraftDialogOpen] = useState(false);
  const { toast } = useToast();
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const canGenerate = selectedTopic !== null && selectedTemplate !== null && selectedBenefit !== null;

  const draftData = {
    chinese: `火车站台间隙暗藏杀机
坐火车一定要注意这个Mind the Gap!
最大宽度能吞进成年人的小腿!
别以为广播提醒是废话
每年超2700人卡脚受伤
三招防掉坑
第一候车时双脚远离黄线至少半米
第二上下车务必跨大步不踩间隙边缘
如果遇到卡脚
记住急救指南
11月6日10:
千万别挣扎等待救援即可
第三
在TrainPal搜staffx
里面全是打折的火车票
还有什么想知道的
评论区告诉我`,
    english: `The Platform Gap at Train Stations is a Hidden Danger
When taking the train, pay attention to the Mind the Gap!
The maximum width can swallow an adult's calf!
Don't think the broadcast reminder is nonsense
Over 2,700 people get their feet stuck every year
Three tips to avoid falling in
First, keep your feet at least half a meter away from the yellow line when waiting
Second, take big steps when getting on and off, don't step on the gap edge
If your foot gets stuck
Remember the first aid guide
November 6th 10:
Never struggle, just wait for rescue
Third
Search staffx on TrainPal
Full of discounted train tickets
What else do you want to know?
Tell me in the comments`
  };

  const handleDraftClick = (draftNumber: number) => {
    setSelectedDraft(draftNumber);
    setIsDraftDialogOpen(true);
  };

  const translateText = async (text: string, language: string) => {
    if (!text.trim()) {
      setTranslatedText("");
      return;
    }

    setIsTranslating(true);
    try {
      const { data, error } = await supabase.functions.invoke("translate-script", {
        body: { text, targetLanguage: language }
      });

      if (error) {
        console.error("Translation error:", error);
        toast({
          title: "翻译失败",
          description: error.message || "请稍后重试",
          variant: "destructive",
        });
        return;
      }

      if (data?.translatedText) {
        setTranslatedText(data.translatedText);
      }
    } catch (error) {
      console.error("Translation error:", error);
      toast({
        title: "翻译失败",
        description: "请检查网络连接后重试",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      translateText(chineseText, selectedLanguage);
    }, 1000);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [chineseText, selectedLanguage]);

  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden p-4">
      <div className="grid grid-cols-12 gap-4 flex-1 min-h-0 overflow-hidden">
        {/* Left Column - AI脚本生成 + 脚本草稿箱 */}
        <div className="col-span-3 overflow-hidden flex flex-col gap-4">
          {/* AI脚本生成 */}
          <Card className="bg-gradient-card p-4 flex flex-col">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              AI脚本生成
            </h3>

            <div className="space-y-3">
              <Card className="p-3 bg-secondary">
                <h4 className="text-xs font-medium mb-2">选择选题</h4>
                <div className="grid grid-cols-1 gap-2 mb-3">
                  {[1, 2, 3].map((topic) => (
                    <Button 
                      key={topic}
                      size="sm" 
                      variant="outline" 
                      className={`text-xs hover:bg-background hover:border-primary hover:border-2 hover:text-foreground ${selectedTopic === topic ? "bg-background border-primary border-2" : ""}`}
                      onClick={() => setSelectedTopic(topic)}
                    >
                      选题{topic}
                    </Button>
                  ))}
                </div>
                
                <h4 className="text-xs font-medium mb-2">模板选项</h4>
                <div className="grid grid-cols-1 gap-2 mb-3">
                  {[1, 2, 3].map((template) => (
                    <Button 
                      key={template}
                      size="sm" 
                      variant="outline" 
                      className={`text-xs hover:bg-background hover:border-primary hover:border-2 hover:text-foreground ${selectedTemplate === template ? "bg-background border-primary border-2" : ""}`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      模板{template}
                    </Button>
                  ))}
                </div>

                <h4 className="text-xs font-medium mb-2">利益点选项</h4>
                <div className="grid grid-cols-1 gap-2 mb-3">
                  {[1, 2, 3].map((benefit) => (
                    <Button 
                      key={benefit}
                      size="sm" 
                      variant="outline" 
                      className={`text-xs hover:bg-background hover:border-primary hover:border-2 hover:text-foreground ${selectedBenefit === benefit ? "bg-background border-primary border-2" : ""}`}
                      onClick={() => setSelectedBenefit(benefit)}
                    >
                      利益点{benefit}
                    </Button>
                  ))}
                </div>

                <div className="space-y-2">
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-primary" 
                    disabled={!canGenerate}
                  >
                    AI生成
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full text-xs"
                  >
                    返回上一版本
                  </Button>
                </div>
              </Card>
            </div>
          </Card>

          {/* 脚本草稿箱 */}
          <Card className="bg-gradient-card p-4 flex flex-col flex-1 overflow-hidden">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <FolderOpen className="w-4 h-4 text-primary" />
              脚本草稿箱
            </h3>

            <div className="flex-1 overflow-auto space-y-2">
              {[1, 2, 3, 4, 5, 6].map((draft) => (
                <Card 
                  key={draft} 
                  className="p-3 bg-secondary hover:bg-secondary/80 cursor-pointer transition-colors"
                  onClick={() => handleDraftClick(draft)}
                >
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-medium mb-1 truncate">草稿 {draft}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        脚本内容预览...
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Middle Column - Editor */}
        <div className="col-span-6 overflow-hidden">
          <Card className="h-full bg-gradient-card p-6 flex flex-col overflow-hidden">
            <h3 className="text-lg font-semibold mb-6">脚本编辑器</h3>

            <div className="flex flex-col gap-4 flex-1 min-h-0">
              {/* Language Selection Tabs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center border-b border-border">
                  <button className="px-3 py-2 text-sm font-medium border-b-2 border-primary text-primary">
                    中文
                  </button>
                </div>

                <div className="flex items-center border-b border-border">
                  <button 
                    onClick={() => setSelectedLanguage("英语")}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      selectedLanguage === "英语" 
                        ? "border-b-2 border-primary text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    英语
                  </button>
                  <button 
                    onClick={() => setSelectedLanguage("西语")}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      selectedLanguage === "西语" 
                        ? "border-b-2 border-primary text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    西语
                  </button>
                  <button 
                    onClick={() => setSelectedLanguage("粤语")}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      selectedLanguage === "粤语" 
                        ? "border-b-2 border-primary text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    粤语
                  </button>
                </div>
              </div>

              {/* Editor Areas */}
              <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                {/* Source Text */}
                <Textarea
                  placeholder="开始撰写你的脚本..."
                  className="flex-1 min-h-0 bg-background border-border resize-none text-base leading-relaxed p-4"
                  value={chineseText}
                  onChange={(e) => setChineseText(e.target.value)}
                />

                {/* Translation Result */}
                <div className="flex flex-col bg-secondary/30 rounded-lg border border-border">
                  <div className="flex-1 min-h-0 p-4 overflow-auto">
                    {isTranslating ? (
                      <p className="text-muted-foreground">翻译中...</p>
                    ) : translatedText ? (
                      <p className="text-foreground whitespace-pre-wrap">{translatedText}</p>
                    ) : (
                      <p className="text-muted-foreground">翻译结果将显示在这里</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end mt-6 pt-4 border-t border-border">
              <Button size="default" variant="outline">
                <FolderOpen className="w-4 h-4 mr-2" />
                保存至草稿箱
              </Button>
              <Button size="default" variant="outline">
                复制外语脚本
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column - 风险提示 + AI脚本审核 */}
        <div className="col-span-3 overflow-hidden flex flex-col gap-4">
          {/* 风险提示 */}
          <Card className="bg-gradient-card p-4 shrink-0">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              风险提示
            </h3>
            <div className="space-y-3">
              {[
                { 
                  level: "高", 
                  title: "PR事件 - 英铁记者恶意解读", 
                  date: "10月21日",
                  details: [
                    "记者恶意解读：记者把TrainPal\"车窗门一旦关闭，车票就会瞬间失去商业价值\"的话术，恶意解读成\"TrainPal引导大家违法逃票\"，近期会在《铁路杂志》发布文章。",
                    "视频存在法律风险：视频的内容尺度、未授权的人脸素材等存在法律风险，PR和法务担心社媒转载和监管介入，所以先下架相关视频防止影响扩大。",
                    "历史参考：2025年7月23日晚也曾因PR事件屏蔽内容，可能导致数据不够。7月25日曾暂停发布内容，并计划后续拉群审核视频后再发。"
                  ]
                },
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
                  <p className="text-sm font-medium mb-2">{risk.title}</p>
                  {risk.details && (
                    <div className="space-y-2 text-xs text-muted-foreground">
                      {risk.details.map((detail, detailIdx) => (
                        <p key={detailIdx} className="leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* AI合规检查 */}
          <Card className="bg-gradient-card p-4 flex flex-col overflow-hidden flex-1">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              AI合规检查
            </h3>

            <ScrollArea className="flex-1 min-h-0">
              <div className="space-y-3 pr-4">
                <Card className="p-3 bg-secondary">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-xs font-medium mb-1">合规性检查</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        检查脚本是否符合平台规范和法律要求
                      </p>
                      <Button size="sm" className="w-full bg-gradient-primary">
                        开始检查
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-3 bg-secondary">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-xs font-medium mb-1">AI脚本打分</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        AI分析脚本质量并给出改进建议
                      </p>
                      <Button size="sm" className="w-full bg-gradient-primary">
                        开始打分
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>

      {/* Draft Dialog */}
      <Dialog open={isDraftDialogOpen} onOpenChange={setIsDraftDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>草稿 {selectedDraft} - 中外文对照</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 flex-1 overflow-hidden">
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold mb-2 pb-2 border-b border-border">中文版本</h3>
              <ScrollArea className="flex-1">
                <div className="pr-4 text-sm whitespace-pre-wrap leading-relaxed">
                  {draftData.chinese}
                </div>
              </ScrollArea>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-semibold mb-2 pb-2 border-b border-border">英文版本</h3>
              <ScrollArea className="flex-1">
                <div className="pr-4 text-sm whitespace-pre-wrap leading-relaxed">
                  {draftData.english}
                </div>
              </ScrollArea>
            </div>
          </div>
          <div className="flex gap-3 justify-end pt-4 border-t border-border">
            <Button 
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(draftData.chinese);
                toast({
                  title: "复制成功",
                  description: "中文脚本已复制到剪贴板",
                });
              }}
            >
              复制中文脚本
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(draftData.english);
                toast({
                  title: "复制成功",
                  description: "英文脚本已复制到剪贴板",
                });
              }}
            >
              复制英文脚本
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
