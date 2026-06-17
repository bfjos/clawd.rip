import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "agent-sdk-credit-bucket",
  deck: "Anthropicはサブスクリプションの上限を二つに分け、プログラマティックなClaude利用に対して正規のAPIレートを課すようになった。これにより、開発者向けの補助金付き特典が2枚目の請求書へと変わった。",
  body: [
    '2026年5月13日、Anthropicは<a href="https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan">@ClaudeDevs経由</a>で発表した。2026年6月15日から、4つのプログラマティックな接続面—Agent SDK、<code>claude -p</code>の非対話型コマンド、Claude Code GitHub Actions、Agent SDK認証を利用するサードパーティアプリ—がサブスクリプションの利用上限から外れ、別の月間クレジットから消費されるようになると。対話型のClaude Code（ターミナルやIDE）、Claude.aiのWeb/モバイルチャット、Claude Coworkはこれまでどおりの上限が維持され、影響を受けない。',
    "新しいクレジットはユーザーごとに固定され、プール不可、繰り越し不可、かつ一度のオプトインで自動更新される。Proは20ドル、Max 5xは100ドル、Max 20xは200ドル、Team Standardは20ドル、Team Premiumは100ドル、Enterpriseの従量課金は20ドル、Enterpriseのシート制Premiumは200ドル。Enterprise Standardシートは0ドルで、ポリシー概要からしばしば省略される。Agent SDKは他の支払い源より先にこのクレジットを使用し、使い切った後は、利用クレジットが明示的に有効になっている場合にのみ標準APIレートに移行する。オーバーフロー課金はデフォルトで無効なので、自動リクエストは次の請求サイクルまで黙って止まる可能性がある。",
    'Claude Code責任者のBoris Chernyは、Anthropicのシステムは「ある種のワークロード向けに高度に最適化されており」、サブスクリプションは「これらのサードパーティツールの利用パターン向けに作られていなかった」と述べた。Anthropic自身の分析では、OpenClawのヘビーユーザーは月額20ドルのProサブスクリプションからAPI換算で約236ドル分のコンピュートを引き出しており、補助率は12:1だった。独立した分析ではMax 20xティアで最大175:1とも試算された。サードパーティの計算では、ティアとモデル次第で実質的な値上げ率は約12倍から175倍の間にあり、Theo Browneの「25倍カット」という表現が批評の定番見積もりとなった。',
    "競合比較は寛容ではない。月額200ドルのCursor Ultraは400ドルのプログラマティッククレジットを提供し、封筒が2倍ある。月額200ドルのChatGPT Proはプログラマティックアクセスがゼロ。Anthropic Max 20xはすでに大盤振る舞いの対話型上限に加えて、200ドルのSDKクレジットをフルAPIレートで提供する構造であり、補助金付きチャットは維持しつつ、補助金付き自動化を削除する形となった。",
    'AnthropicのClaude Code担当Lydia Hallieは、核心的な取引を確認するCommunity Noteが付いた説明ツイートを投稿した。以前は<code>claude -p</code>が補助金付きサブスクリプション上限にカウントされていたが、6月15日からは別の20〜200ドルクレジットからAPIレートで消費される。T3.ggのTheo Browneは、「T3 Code上のClaude Code体験を大幅に悪くする必要がある」と応じ、サブスクリプションを解約し、ユーザーにCodex、Cursor、今後のGemini統合を案内した。',
    "このポリシーは10週間のシーケンスにおける3つ目の制限だった。4月4日のサードパーティ禁止、4月21日のClaude Code削除テスト、そして5月13日/14日の6月15日生效発表である。Anthropicは5月13日午後8時10分（PT）にMax 20x加入者にメールを送り、生效日前の6月8日にフォローアップを送った。",
  ],
  receipts: [
    "生效日：2026年6月15日。",
    "Max 20xのSDKクレジット：月額200ドル、APIレート。",
    "Enterprise Standardシート：クレジット0ドル。",
    "ヘビーOpenClaw Proユーザーの補助率：12:1。",
    "Max 20xヘビーSonnet利用の推定補助率：175:1。",
    "Theo Browneの定番値上げ試算：25倍。",
  ],
  reactions: [
    {
      platform: "x",
      author: "Theo Browne (@t3dotgg)",
      meta: "T3.gg創設者；『25倍カット』の批評フレーミングが定番となった。MagnaCapaxのgist経由で引用",
      quote:
        "Claudeのサブスクと一緒に次のものを使っているなら、あなたの使用量は25倍に切り詰められた：T3 Code、Conductor、Zed、Jean、CI内の`claude -p`",
      url: "https://gist.github.com/MagnaCapax/d9177e35b355853f03c730dfcaa693ef",
    },
    {
      platform: "x",
      author: "Matt Pocock",
      meta: "初の有料Claude Codeコースの著者、BiggGo経由で引用",
      quote:
        "待ち望んでいた透明性だ—だが毒入りの杯だ。Claude-Pに対する40倍の切り詰めが、月額ボーナスの体裁を取っている。",
      url: "https://finance.biggo.com/news/382b1ef1c37acfb3",
    },
    {
      platform: "x",
      author: "Lydia Hallie",
      meta: "Anthropic社員、Claude Code担当；このツイートにはCommunity Noteが付いた",
      quote:
        "補足すると：追加料金はかからない。同じサブスクリプションで、月額も同じだ。",
      url: "https://the-decoder.com/claude-subscriptions-get-separate-budgets-for-programmatic-use-billed-at-full-api-prices/",
    },
    {
      platform: "x",
      author: "Ben Hylak",
      meta: "Raindrop.ai CTO、この措置がコンピュート制約を示唆するか；MagnaCapaxのgist経由で引用",
      quote: "実に馬鹿げているか、あるいはAnthropicがGPUの面でどれだけ苦しい状況にあるかを示している",
      url: "https://gist.github.com/MagnaCapax/d9177e35b355853f03c730dfcaa693ef",
    },
    {
      platform: "hackernews",
      author: "genxy",
      meta: "Tell HNスレ、10ポイント/12コメント",
      quote:
        "しまった。開発中にClaude Codeで`claude -p`を大量に使っているが、これでは月額200ドルのプラン（まだ上限に達していないのに）の魅力ががくっと下がる。",
      url: "https://news.ycombinator.com/item?id=48130374",
    },
    {
      platform: "hackernews",
      author: "subarnab",
      meta: "Show HN: claude-pee回避策、7ポイント",
      quote:
        "月間クレジットプールはAPIレートで課金されるため、愛好家にとって本気のプログラマティック利用は事実上不可能になる。",
      url: "https://news.ycombinator.com/item?id=48129813",
    },
  ],
  images: [],
  aftermath:
    "2026年6月中旬時点で、この変更は発表され2回メールで通知されたが、まだ生效していない。2026年6月15日の切り替えが実施されれば、プログラマティックなClaude利用は別のクレジットを通じてAPIレートで請求される。これまでの補助金構造に基づいてワークフローを構築した開発者は、コストを吸収するか、オーバーフロー課金を無効のままクレジット枯渇後の静かな失敗を受け入れるか、あるいはより大きな—or無制限の—プログラマティッククレジットを提供する競合に移行するかを選ぶ必要がある。Theo Browneはすでに後者の道を宣言している。",
};
