import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "september-outage",
  deck: "2025年9月10日、Claude.ai、Console、APIを同時に落とす障害が発生し、Anthropicのレート制限不満が続く年に、またしてもフルプラットフォームのスクリーンショットを提供した。",
  body: [
    '2025年9月10日、太平洋夏時間午前9時30分少し前、AnthropicはAPI、開発者向けConsole、<a href="https://techcrunch.com/2025/09/10/anthropic-reports-outages-claude-and-console-impacted/">claude.ai</a>が同時にダウンした障害を報告した。ユーザーが問題を最初に報告したのは東部夏時間午後12時20分頃で、Anthropicはおおよそ8分後にAPI、Console、Claude AIが停止していることを認めるステータス更新を投稿した。',
    '<a href="https://www.techbuzz.ai/articles/claude-ai-goes-dark-anthropic-reports-major-service-outage">複数のメディア</a>は、米国の営業時間帯に約30分間の完全停止として混乱を報じた。開発者はClaude.ai、API、<code>Claude Code</code>、管理コンソールにアクセスできなかった。同社の<a href="https://status.claude.com/incidents/k6gkm2b8cjk9">ステータスページ</a>はこのインシデントを「API、Claude.ai、Consoleサービスへの影響」と題し、claude.ai、platform.claude.com、api.anthropic.comのすべてが影響を受けたことを確認した。',
    'ステータスページは16:28 UTCに「特定済み（Identified）」とマークし、できるだけ早くサービスを復旧させると注記した。その後16:37 UTCに修正を実施して「監視中（Monitoring）」に移行し、17:36 UTCに解決した。全体でおおよそ68分の窓口となった。',
    'Anthropicの広報担当者は、<a href="https://techcrunch.com/2025/09/10/anthropic-reports-outages-claude-and-console-impacted/">TechCrunch</a>のDominic-Madori Davis上級記者に対し、<em>「本日太平洋夏時間午前9時30分少し前に、APIで非常に短い障害が発生したことを認識している。サービスは迅速に復旧した。」</em>と述べた。ステータスページは復旧に1時間近くかかったことを示しており、Anthropic社内では「非常に短い」の基準が少し異なるのかもしれない。',
    '報道はこの障害を、<a href="https://www.webpronews.com/anthropic-outage-disrupts-claude-ai-and-apis-on-september-10-2025/">Anthropicの信頼性問題が続く年のまた一つのエピソード</a>として位置づけた。2025年7月の文書化されたAPIエラーや、Claudeモデルの需要急増に伴う8月の断続的なConsoleアクセス問題が引用された。このインシデントはHacker Newsのトップストーリーにもなり、スレッドは<a href="https://hn.algolia.com/api/v1/items/45200118">161ポイントと79件のコメント</a>を集めた。',
  ],
  receipts: [
    "Anthropicのステータスページは、16:28 UTCの特定から17:36 UTCの解決まで、おおよそ68分の窓口を記録した。",
    "ユーザーは東部夏時間午後12時20分頃から問題を報告し、Anthropicはおおよそ8分後に障害を認めた。",
    '社の広報担当者は、TechCrunchのDominic-Madori Davis上級記者に対し、この障害を「非常に短い障害」と表現した。',
    "Hacker Newsのスレッドitem 45200118は161ポイントと79件のコメントを集めた。",
    "この障害の前、2025年7月には文書化されたAPIエラー、8月には断続的なConsoleアクセス問題が発生していた。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "gzer0",
      meta: "HNスレッド『API、Claude.ai、Consoleサービスへの影響［解決］』— 161ポイント、79件コメント",
      quote:
        "やだー、また自分の頭を使って、2024年12月の洞穴人みたいに100%自分でコードを書かないといけないのか。前回これで笑ったコメントなのに。",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "hackernews",
      author: "bdcravens",
      meta: "2025年9月10日障害スレッドのHNコメント",
      quote:
        "みんな、昔ながらのやり方を覚えるしかない。つまり、盲目的にStack Overflowからコピペするんだ。",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "hackernews",
      author: "cube2222",
      meta: "2025年9月10日障害スレッドのHNコメント",
      quote:
        "面白い観察だが、EUにいると米国の人たちよりAI SaaSの体験がずっといい気がする。米国の営業時間が始まると、AI（私の場合は主にAnthropic、他はもっとマシかも）が死んだり断続的にエラーを吐いたりする。EUの営業時間帯では障害はめったにない。",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "hackernews",
      author: "searls",
      meta: "2025年9月10日障害スレッドのHNコメント",
      quote:
        "Anthropicのサービス品質は7月以降まさにゴミ箱の火事だ。20倍のMaxプランに金を払うよう人に勧めた自分が恥ずかしい。Claude Codeが1ヶ月間ずっと馬鹿になっていたと認めた上で、返金もしなかったのは本当に不作法だと思う。",
      url: "https://news.ycombinator.com/item?id=45200118",
    },
    {
      platform: "other",
      author: "poptix",
      meta: "Slashdotコメント、Score 5 Insightful",
      quote: "実際、生産性は上がった。",
      url: "https://developers.slashdot.org/story/25/09/10/2039218/developers-joke-about-coding-like-cavemen-as-ai-service-suffers-major-outage",
    },
    {
      platform: "other",
      author: "eneville",
      meta: "Slashdotコメント、Score 5 Funny",
      quote: "つまり『コーディング』ってこと？",
      url: "https://developers.slashdot.org/story/25/09/10/2039218/developers-joke-about-coding-like-cavemen-as-ai-service-suffers-major-outage",
    },
  ],
  images: [],
  aftermath:
    '障害は解決し、すべてのサービスが復旧した。Anthropicのステータスページはおおよそ68分の経過時間を記録した一方、社の広報担当者はTechCrunchに対し「非常に短い障害」と表現した。このインシデントは、Claudeモデルの需要急増に伴う7月のAPIエラーや8月のConsoleアクセス問題を含む、一年間の信頼性問題にまた一つ加わった。ステータスページは現在、このインシデントを解決済みとして一覧にしている。',
};
