import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "march-outage",
  deck: "ペンタゴン絡みの競合他社離れがClaudeをApp Store首位に押し上げた。そして24時間以内に2度、オフラインに陥らせた。",
  body: [
    '2026年3月2日、Claudeは世界的にダウンした。混乱はおよそ11:49 UTC頃に始まり、claude.ai、モバイルアプリ、<code>Claude Code</code>が使えなくなり、認証とフロントエンドフローが世界的に影響を受けた。一方、コア開発者APIはおおむね機能していたと<a href="https://tbreak.com/claude-ai-outage-march-2026-global/">Tbreak</a>は伝えている。Anthropicは約17分後にステータスページで問題を認め、最初の「調査中」通知はフロントエンドとログインシステムの障害を特定したと<a href="https://cybernews.com/news/claude-down-major-outage-worldwide/">Cybernews</a>は報じた。この事件はClaude Opus 4.6、Claude Haiku 4.5、Claude Console、Claude Codeに影響し、web、モバイル、一部のAPIメソッドでリクエスト失敗、タイムアウト、応答の不整合を生じたと<a href="https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-a-worldwide-outage/">BleepingComputer</a>は報じた。ピーク時、Downdetectorで2,000人以上が問題を報告し、その日を通じてさらに数百件の報告が続いた。',
    'この急増はサプライチェーンの問題ではなかった。Anthropicは「前例のない需要」を理由に挙げ、<em>「Claudeはclaude.aiとアプリで再び稼働しています。最近Claudeに見てきた信じられない需要に追いつくようチームが取り組んでいる間、ユーザーに感謝します」</em>と声明を出したと<a href="https://www.storyboard18.com/digital/claude-back-online-after-outage-as-anthropic-cites-unprecedented-demand-91162.htm">Storyboard18</a>は伝えている。需要は「#QuitGPT」ムーブメントから来た。OpenAIが米国防・ペンタゴンネットワーク内にモデルを展開する契約を結んだことへの反発で、Anthropicはその契約を拒否したと報じられていたが、大量移動が起こり、米国でのChatGPTアンインストール数は前日比で約295%急増したと同報道は述べた。軍事契約を拒否したばかりの企業に、それでもトラフィックが流れ込んできた。',
    '移動は数字にも表れた。Claudeは2026年3月1日に初めて米国Apple App Storeで首位に立ち、一時ChatGPTを上回った。米国ダウンロード数は2月28日に37%増、3月1日に51%増となったと<a href="https://lumichats.com/blog/quitgpt-chatgpt-boycott-pentagon-deal-complete-story-2026">LumiChats</a>は伝えている。Anthropicは無料アクティブユーザーが約60%増、毎日の新規登録が4倍になったと報告した。祝杯は長くは続かなかった。最初の障害から24時間以内に2度目の障害が発生し、<a href="https://x.com/ETtech/status/2028696457340223961">ETtech</a>は、米国で4,000人以上、インドで約300人が問題を報告したと伝えた。多くはClaudeチャットに関するもので、3月2日の最初の混乱ですでに複数地域でClaudeがダウンした後だった。',
    'これは地域的な小さな障害ではなかった。障害は北米、ヨーロッパ、アジア、アフリカにまたがり、<a href="https://tbreak.com/claude-ai-outage-march-2026-global/">Tbreak</a>は、事件前の90日間のClaudeの稼働率は99.36%だったと指摘した。Anthropicの3月2日の修正は一発ではなかった。ステータス更新は18:07、18:18、18:54 UTCに再発する問題を記録した後、混乱が封じ込められたと<a href="https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-in-a-worldwide-outage/">BleepingComputer</a>は報じた。<a href="https://www.bloomberg.com/news/articles/2026-03-02/anthropic-s-claude-chatbot-goes-down-for-thousands-of-users">Bloomberg</a>も同日、Claudeが「前例のない需要」の中で数千ユーザーに対してダウンしていると確認した。',
    '2026年6月までに、Anthropic自身のステータスページはclaude.aiの90日稼働率を98.85%、つまり99%未満と示し、コアサーフェスもそれをうかがっていた：Claude API 99.2%、Claude Code 99.05%、Claude Console 99.33%、Claude Cowork 99.49%と、<a href="https://status.claude.com/">status.claude.com</a>によれば、わずかに上回っているにすぎない。信頼性問題は2026年3月中も続き、3月19、21、22、23日に障害が記録され、3月25日には2件の別個の障害があった。Opus 4.6のエラー増加は3時間35分、API/Coworkの障害は4時間12分続いたと<a href="https://statusgator.com/services/claude/outage-history">StatusGator</a>は記録している。ペンタゴンの契約を拒否したことで有名な製品は、その月の残りを、民間人を相手にするのもやっぱり少し苦手だと証明するのに費やした。',
  ],
  receipts: [
    "2026年3月2日11:49 UTC頃に混乱が始まり、Anthropicは約17分後に最初の「調査中」通知を投稿した。",
    "ピーク時、Downdetectorで2,000人以上が問題を報告した。",
    "Anthropicは、「#QuitGPT」反発に牽引されたトラフィックに続き「前例のない需要」を理由に挙げた。米国でのChatGPTアンインストール数は前日比で約295%増加した。",
    "2026年3月1日、Claudeは米国Apple App Storeで首位になり、毎日の新規登録が4倍になった。",
    "24時間以内の2度目の障害により、米国で4,000件以上、インドで約300件の報告が寄せられた。",
    "2026年6月までに、status.claude.comはclaude.aiの90日稼働率が98.85%、つまり99%未満であることを示した。",
  ],
  reactions: [
    {
      platform: "x",
      author: "@ETtech",
      meta: "Economic Timesのテックアカウント",
      quote:
        "Claudeダウン：24時間以内の2度目の障害、複数地域のユーザーに影響。米国で4,000人以上、インドで約300人が問題を報告した。多くはClaudeチャットに関するもの。3月2日の最初の障害では、午後5時から8時頃にかけて複数地域でチャットボットがダウンした。",
      url: "https://x.com/ETtech/status/2028696457340223961",
    },
    {
      platform: "x",
      author: "@pressenterprise",
      meta: "The Press-Enterprise",
      quote: "AnthropicのチャットボットClaude、「前例のない需要」の中でダウン",
      url: "https://x.com/pressenterprise/status/2028551806725312723",
    },
    {
      platform: "other",
      author: "Jim Manzon (Medium)",
      meta: "影響を受けたユーザーの言葉を要約したMediumの記事",
      quote:
        "Claudeの不安定さが何度も作業を停滞させ、単一のAIプロバイダへの依存を見直すことを余儀なくさせた。",
      url: "https://medium.com/@manzonjj/why-claude-keeps-crashing-unprecedented-demand-fragile-infrastructure-and-a-second-outage-in-24-50a64469e869",
    },
  ],
  images: [],
  aftermath:
    "2026年6月時点で、Anthropicのステータスページはclaude.aiの90日稼働率を依然として98.85%と記載しており、これは以前達成していた99%のしきい値を下回っている。3月の一連の障害は、需要の急増が最初の週末をはるかに超えてサービスの供給不足を引き起こしたことを示唆している。",
};
