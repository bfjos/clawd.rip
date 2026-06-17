import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "april-login-outage",
  deck: "2026年4月15日、Anthropicのステータスページは、Claude.ai、API、Claude Codeのログインを横断するエラー増大に伴う、およそ3時間のClaude障害を再び記録した。",
  body: [
    'Anthropicのステータスページは、<a href="https://status.claude.com/incidents/f00h6l76tsjs">「Claude.ai、API、Claude Codeでのエラー増大」</a>というインシデントを14:53 UTC、つまり米東部時間午前10:53に投稿した。<em>「Claude.ai、API、Claude Codeでエラーが増加している。」</em>このエントリーはClaude.ai、<code>api.anthropic.com</code>のAPI、<code>platform.claude.com</code>のClaude Console、Claude Codeを対象とした。約3時間後に解決済みとマークされ、2026年3月2日および3月11日/17日のClaude.aiおよびClaude Codeログイン障害と並ぶものとなった。',
    "Downdetectorの公式Xアカウントは、<a href=\"https://x.com/downdetector/status/2044429489136894121\">ユーザー報告によると問題は米東部時間午前10:55に始まった</a>と報告し、Anthropicの最初の投稿から2分後だった。報告件数は、太平洋時間午前8:02の7,000件以上から、午前8:25には15,000件以上、午前8:39には20,000件を超え、午前8:57には22,000件、最終的に午前9:45には30,000件以上に達した。ユーザーはログイン失敗、不完全な応答、ストリームタイムアウト、最近ほとんど使っていないのに利用上限に達したという予期せぬメッセージを報告した。",
    'APIが最初に回復した。Anthropicは15:03から15:20 UTC頃に問題を特定し修正作業中とマークし、<a href="https://status.claude.com/incidents/f00h6l76tsjs">Claude APIは16:01 UTC</a>、太平洋時間午前8:01頃に復旧した。それ以降も、ステータスページは<a href="https://www.ibtimes.com.au/claude-down-now-claude-ai-outage-hits-users-hard-anthropics-chatbot-down-again-april-15-2026-1866682">15:40 UTC頃Claude.aiとPlatformがダウンしている</a>ことを示し、Claude Codeのログインは壊れたままだった。すでにClaude Codeにログインしていたユーザーは作業を続けられたが、Claude.aiを介して認証される新規ログインはブロックされた。',
    'このインシデントは<a href="https://status.claude.com/incidents/f00h6l76tsjs">17:42 UTC</a>、つまり米東部時間午後1:42に完全解決とマークされ、米東部時間午前10:53から午後1:42までの合計およそ3時間の障害となった。Anthropicは根本原因を公開しておらず、事象をエラー増大とログイン/認証障害のみとして説明した。ステータスページにそれ以上の技術的詳細は示されていない。',
    'サービスが戻る頃には、4月15日の出来事は馴染みのあるリズムの一部になっていた。Anthropicのステータス履歴にはすでに、<a href="https://www.techradar.com/news/live/claude-anthropic-down-outage-march-11-2026">2026年3月2日および3月11日/17日</a>に同等のClaude.aiおよびClaude Codeログイン障害が記録されており、2026年春はアクセスが途切れない時期ではなかったことを示唆している。',
  ],
  receipts: [
    "Anthropicは2026年4月15日14:53 UTC（米東部時間午前10:53）に調査中と初めて投稿した。",
    "Downdetectorの報告は太平洋時間午前9:45までに30,000件を超えた。",
    "APIは16:01 UTCに回復したが、Claude.aiとPlatformは15:40 UTCを過ぎてもダウンしていた。",
    "Claude Codeにすでにログインしていたユーザーは作業を続けられた；新規ログインはブロックされた。",
    "この障害はおよそ3時間続き、17:42 UTC（米東部時間午後1:42）に解決した。根本原因は開示されていない。",
    "同様の障害は2026年3月2日および3月11日/17日に発生した。",
  ],
  reactions: [
    {
      platform: "x",
      author: "@downdetector",
      meta: "Downdetector公式の障害追跡アカウント、障害中に投稿",
      quote:
        "ユーザー報告によると、Claude AIは米東部時間午前10:55から問題が発生している。影響は？ #ClaudeAiDown",
      url: "https://x.com/downdetector/status/2044429489136894121",
    },
    {
      platform: "x",
      author: "@mustafaergisi",
      meta: "個人ユーザー、2026年4月15日の障害時間帯に投稿",
      quote: "Claudeダウンしてる？",
      url: "https://x.com/mustafaergisi/status/2044429180322898407",
    },
    {
      platform: "x",
      author: "@Gemini",
      meta: "ニュース/アグリゲーターアカウント、同日の時間帯",
      quote: "速報：Claude AIが現在広範な問題を経験し、一部ユーザーではダウンしている",
      url: "https://x.com/Gemini/status/2044435189045076332",
    },
    {
      platform: "x",
      author: "@isdownapp",
      meta: "IsDown.appのステータス監視アカウント",
      quote:
        "Claudeはダウンしていますか？🚨 ユーザーがClaudeの問題を報告中 #claude-aidown。問題がある場合は再投稿してください。",
      url: "https://x.com/isdownapp/status/2048106943873486948",
    },
  ],
  images: [],
  aftermath:
    "Anthropicは2026年4月15日の障害の根本原因を提供しておらず、ステータスページの説明はエラー増大と認証障害のままだ。このインシデントは、Anthropicの2026年の信頼性履歴における3月2日および3月11日/17日の障害と並んでおり、追加のポストモーテムは示されていない。",
};
