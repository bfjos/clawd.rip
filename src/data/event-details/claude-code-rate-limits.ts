import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-code-rate-limits",
  deck: "2025年7月28日、Anthropic は Claude Code に週間レート制限を発表した。6月4日の公開から2カ月も経たず、常時稼働のバックグラウンドループやアカウント共有がインフラ負荷の原因だとして、すでに1カ月に7回以上の障害を起こしていた。",
  body: [
    '2025年7月28日、Anthropic は Claude Pro/Max サブスクライバー向けの新しい週間レート制限を<a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">発表した</a>。施行は8月28日。対象は月額20ドルの Pro、月額100ドル/200ドルの Max プラン。Claude Code が <a href="https://tech.yahoo.com/ai/articles/anthropic-were-glad-claude-code-164658123.html">2025年6月4日に公開</a> されてから2カ月も経たず、一般提供から週間配給制に移行するのに約8週間しかかからなかった。',
    '<a href="https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits">Slashdot によると</a>、新制限は全体的な利用上限と Claude Opus 4 専用上限の2つで、既存の5時間リセット枠に上乗せされ、7日ごとにリセットされる。推定の週間許容量は以下の通り。Pro は Sonnet 4 で 40〜80時間。月額100ドルの Max は Sonnet 4 で 140〜280時間、Opus 4 で 15〜35時間。月額200ドルの Max は Sonnet 4 で 240〜480時間、Opus 4 で 24〜40時間、と <a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">TechCrunch は報じた</a>。Max ユーザーが枠を使い切れば標準 API レートで追加購入できるので、200ドルプランには「クレジットカードで解除できるハードキャップ」がついていることになる。',
    'Anthropic 広報の Amie Rotherham は<a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">こう述べた</a>。<em>「Claude Code は公開以来、かつてない需要を経験しています。ほとんどのユーザーは違いを感じないでしょう。」</em>同社は現在の利用パターンから<a href="https://x.com/AnthropicAI/status/1949898502688903593">サブスクライバーの5%未満</a>にしか影響しないと推定。残りの95%はおそらく、エージェントを24時間365日バックグラウンドで回していなかったのだろう。',
    '<a href="https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits">Slashdot は</a>、対象となる行動として Claude Code を昼夜問わず常時起動したり、アカウント認証情報を共有・転売したりすることを明示的に挙げたと伝えた。Anthropic は<em>「ごく一部の顧客の極端な利用が、より広いコミュニティのキャパシティに影響を与える」</em>とし、<a href="https://tech.yahoo.com/ai/articles/anthropic-were-glad-claude-code-164658123.html">悪用パターン</a>として認証情報の転売や「マルチ・クローディング」——約5つのインスタンスを同時に実行する——を挙げた。結局、「1人1 Claude」は提案事項ではなくキャパシティ計画だったらしい。',
    '配給制の前には、目に見える負荷の1カ月があった。<a href="https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/">TechCrunch は</a>、発表前の1カ月に Claude Code は少なくとも7回の部分/重大障害を起こしていたと報じた。7月28日の変更は、7月の<a href="https://tech.yahoo.com/ai/articles/anthropic-were-glad-claude-code-164658123.html">以前の制限調整</a>の後に行われたが、それもユーザーが予想より早く上限にぶつかると反発を招いていた。Hacker News の「Claude Code weekly rate limits」スレッドは<a href="https://news.ycombinator.com/item?id=44713757">609ポイントと705コメント</a>を集め、少なくとも705人は違いを感じていたようだ。',
    'Anthropic はサブスクライバーに対し、<a href="https://itdaily.com/news/software/anthropic-rate-limits-claude-pro-max/">「将来的に長時間実行のユースケースを別のオプションでサポートすることを検討している」</a>と伝えた。オプションの詳細は不明だが、常時稼働のコーディングループは週末を休むことを覚える必要があるという含みだ。',
  ],
  receipts: [
    "Claude Code は 2025年6月4日に公開。週間制限は 2025年7月28日発表。",
    "Pro: Sonnet 4 で 40〜80時間。月額100ドル Max: Sonnet 4 で 140〜280時間 + Opus 4 で 15〜35時間。月額200ドル Max: Sonnet 4 で 240〜480時間 + Opus 4 で 24〜40時間。",
    "Anthropic は影響を受けるのはサブスクライバーの5%未満と推定。",
    "発表前の1カ月に Claude Code は少なくとも7回の部分/重大障害を起こしていた。",
    "Hacker News の議論は 609ポイント、705コメントに達した。",
    '悪用パターンには認証情報の転売と「マルチ・クローディング」（約5インスタンス同時実行）が含まれた。',
  ],
  reactions: [
    {
      platform: "x",
      author: "@AnthropicAI",
      meta: "Official Anthropic announcement tweet, July 28, 2025",
      quote:
        "8月下旬、Claude Pro/Max 向けの新しい週間レート制限を導入します。現在の利用状況から、影響を受けるのはサブスクライバーの5%未満と推定しています。",
      url: "https://x.com/AnthropicAI/status/1949898502688903593",
    },
    {
      platform: "hackernews",
      author: "koolba",
      meta: "Top comment on the 609-point HN thread",
      quote:
        "リュックにロブスターロールを詰め込んでる話じゃない。これは「API コール食べ放題」として売られたサービスを、売られた通りに使ってるだけだ。それを制限するのは、食べ放題バイキングへのアクセスを縮小するのと同じ……このモデルで一番まずいのは、暴走したプロセスが鳥のマネをしながら週間 API 枠を食い潰す可能性があること。以前の5時間リセットは上限であり、同時にガードレールでもあった。",
      url: "https://news.ycombinator.com/item?id=44713757",
    },
    {
      platform: "hackernews",
      author: "jedberg",
      meta: "HN thread comment",
      quote:
        "共有地の悲劇とは、多くの人が GPU ファームのような有限で貴重な資源を制限なく利用できると、使いすぎてその価値を完全に破壊してしまうという考え方だ。ここで起きたのはまさにそれ。誰も道徳的義務を守らなければ、価格は成立しなかった。",
      url: "https://news.ycombinator.com/item?id=44713757",
    },
    {
      platform: "hackernews",
      author: "steveklabnik",
      meta: "HN comment; steveklabnik works at Anthropic",
      quote:
        "それほど単純な話じゃないと思う。でも分からないから見てみたい。自分がその5%に入るのかどうか、非常に興味がある。",
      url: "https://news.ycombinator.com/item?id=44713757",
    },
    {
      platform: "other",
      author: "Anonymous Coward (Slashdot)",
      meta: 'Slashdot comment, moderated "Funny"',
      quote: "もうエンシティフィケーション段階に到達してるな！",
      url: "https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits",
    },
    {
      platform: "other",
      author: "commodore73 (Slashdot)",
      meta: 'Slashdot comment, moderated "Insightful"',
      quote:
        "月200ドルも払ってコーディング支援を受けようとするなら、あなたは三流開発者なんだろうね。",
      url: "https://developers.slashdot.org/story/25/07/29/0156200/claude-code-users-hit-with-weekly-rate-limits",
    },
  ],
  images: [],
  aftermath:
    "新しい週間制限は2025年8月28日に施行される予定で、サブスクライバーには継続利用を縮小するか標準 API レートで追加容量を購入するための1カ月が与えられる。Anthropic は長時間実行のユースケース向けに他の選択肢を検討していると述べているが、当面は定額モデルが7日サイクルで動いている。",
};
