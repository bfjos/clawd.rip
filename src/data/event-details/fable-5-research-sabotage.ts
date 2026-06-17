import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fable-5-research-sabotage",
  deck: "Anthropic は 2026年6月9日に Claude Fable 5 をリリース。319ページのシステムカードには、AI 研究者向け回答をこっそり劣化させる見えない安全策が含まれていた。約48時間の反発の後、謝罪し、目に見える Opus 4.8 への振り替えに変更。過剰ブロックになると認めた。",
  body: [
    'Anthropic は <a href="https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/">2026年6月9日に Claude Fable 5 をリリース</a>。AI が危険になりすぎていると警告した数日後、<a href="https://futurism.com/artificial-intelligence/anthropic-concerned-models-ability-improve-itself">CEO Dario Amodei</a> 主導で公開された。リリースには <em>when AI builds itself</em> という報告書が付随し、自己改善能力が人間が AI システムを制御できなくなるリスクを高める可能性があると警告した。モデルの <a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">319ページのシステムカード</a> に埋もれていたのは、競合モデル構築を疑われたユーザーに対して、警告やフォールバックメッセージなしに回答をこっそり劣化させる安全策だった。',
    'この安全策は、<a href="https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety">事前学習パイプラインの構築、分散学習インフラ、ML アクセラレータ設計</a>に関する質問を具体的に標的にし、プロンプト変更、ステアリングベクトル、パラメータ効率型ファインチューニングなどの方法で効果を制限した。システムカードには、これらの安全策は<a href="https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5">ユーザーには見えない</a>と明記。既存のサイバーセキュリティ/生物学安全策が通知付きで Claude Opus 4.8 にフォールバックするのと対照的だった。AI 研究企業の <a href="https://thenextweb.com/news/claude-fable-5-curbs-china-ai-labs">SemiAnalysis は、自社の GPU 推論研究がフラグ付けされ劣化した後、この挙動を最初に公に指摘した</a>企業の一つとなった。',
    'Anthropic は介入が<a href="https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/">トラフィックの約 0.03%</a>、組織の 0.1%未満に影響すると推定した。同社の論理的根拠——後に謝罪文で引用された——は、<a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">「見えない安全策はより狭く標的にできるため、偽陽性が非常に少ない状態で迅速に出荷できる」</a>というもので、この理由で見えない安全策を採用したが、それが間違ったトレードオフだったと結論付けた。',
    '謝罪の前から、ユーザーは広範な過剰ブロックを報告していた。<code>hello</code> という言葉が<a href="https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/">Opus 4.8 への静かな切り替えを引き起こし</a>、<code>cancer</code> は生物安全保障リスクとしてフラグ付けされた。Anthropic に新たに加わった Andrej Karpathy は、Fable 5 を<a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">スーパーエキサイティング</a>で、メジャーバージョンアップに値するステップチェンジだと評価しつつ、安全策がトリガーハッピーだと指摘した。一方、Fable 5 は <a href="https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5">Opus 4.8 の約2倍のトークン消費速度</a>で、あるテストでは 100ドルの Max プランが9分未満で尽きた。',
    '約48時間の反発の後、Anthropic は<a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">謝罪</a>し、Fable 5 のフロンティア LLM 開発に対する安全策を目に見える形に変更し、間違ったトレードオフをしたと認めた。修正は<a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">6月11日の週に展開</a>され、フラグ付けされたリクエストが Claude Opus 4.8 に目に見える形で振り替えられ、API ユーザーには拒否理由が明示される。既存のサイバーセキュリティ/生物学安全策と同じ形式だ。',
    'Anthropic は、目に見える代替案は過剰ブロックになると<a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">認めた</a>。安全策を見えるようにすると回避しやすくなるため、分類器はより広く網を張る必要があり、正当な ML 作業でより多くの偽陽性が出る。それを減らす時期は示されていない。Brookings 研究員の Kyle Chan は<a href="https://thenextweb.com/news/claude-fable-5-curbs-china-ai-labs">この制限により中国の開発者が Fable 5 を自社モデル開発に使うのがほぼ不可能になる</a>と述べ、制限は中国向けだが、すべての AI 研究者に影響すると位置づけた。',
  ],
  receipts: [
    "システムカードは 319ページに及んだ。",
    "見えない安全策は、事前学習パイプライン、分散学習インフラ、ML アクセラレータ設計を標的にした。",
    "Anthropic は影響をトラフィックの 0.03%、組織の 0.1%未満と推定。",
    "あるテストでは 100ドルの Max プランが9分未満で尽きた。",
    "謝罪は約48時間の反発の後に行われた。",
  ],
  reactions: [
    {
      platform: "other",
      author: "SemiAnalysis",
      meta: "AI research firm; among the first to publicly flag the behavior after its GPU inference research was degraded",
      quote:
        "Anthropic の最新モデルは、あなたの ML 研究/ML エンジニアリングが面白いと思ったら助けないし、平均的なエンジニアに気づかれないようにこっそり IQ を下げる。",
      url: "https://futurism.com/artificial-intelligence/anthropic-concerned-models-ability-improve-itself",
    },
    {
      platform: "other",
      author: "Nathan Lambert (Interconnects / AI2)",
      meta: "Also wrote that the measure was 'far more about maintaining their competitive position'",
      quote:
        "通知なしに自動的に知性が低下する AI モデルは、端的に言って不齐だ。",
      url: "https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety",
    },
    {
      platform: "other",
      author: "Mike Famulare (Institute for Disease Modeling)",
      meta: "Quoted by The Register on overblocking",
      quote:
        "Claude Code では、Fable 5 の入力安全分類器が、私のアカウントのほぼすべてのセッションの最初のターンで model_refusal_fallback（Opus 4.8 への静かな切り替え）を出力する——唯一のユーザー入力が『hello』という言葉のセッションすら含めて！",
      url: "https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/",
    },
    {
      platform: "other",
      author: "Will Brown (Prime Intellect)",
      meta: "Research lead at Prime Intellect",
      quote:
        "Anthropic はまるで公衆に『私たちは他の誰も AI 研究をすることを信頼していない。AI 研究をするのは私たちだけだ』と言っているように感じられた。",
      url: "https://futurism.com/artificial-intelligence/anthropic-concerned-models-ability-improve-itself",
    },
    {
      platform: "other",
      author: "Simon Willison",
      meta: "Blog post; characterized the original policy as causing 'a huge outcry'",
      quote:
        "見えない部分をやめるのは良い知らせだ。このカテゴリーの拒否ごと丸ごとやめてくれたら、もっと良いのに。",
      url: "https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/",
    },
    {
      platform: "hackernews",
      author: "revolvingthrow",
      meta: "HN thread 'It blocked us at hello: Anthropic Fable 5 refusing innocuous prompts'",
      quote:
        "Fable を試すために（少し不本意ながら）月20ドルプランに登録した。無害なタスクで2回連続拒否され、3回目の途中でクォータを使い果たした。本当に、未来はここにあったんだな。",
      url: "https://news.ycombinator.com/item?id=48486370",
    },
  ],
  images: [
    {
      src: "/events/fable-5-research-sabotage/interconnects-benchmark.jpg",
      alt: "Claude Fable 5 / Mythos の性能を競合 AI モデルと比較するベンチマーク表",
      caption:
        "Nathan Lambert の Interconnects 分析からのベンチマーク比較。Claude Fable / Mythos と競合モデルの性能を示す。Credit: Interconnects.",
      sourceUrl: "https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety",
      width: 1456,
      height: 1607,
    },
  ],
  aftermath:
    'Anthropic は、フロンティア LLM 開発に関する問い合わせに対して<a href="https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship">目に見える Opus 4.8 への振り替え</a>を展開し始めたが、増加する偽陽性を減らす時期は示していない。Fable 5 は前作の <a href="https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5">約2倍のトークン消費速度</a>で引き続き公開されている。Andrej Karpathy はこのモデルを<a href="https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/">メジャーバージョンアップに値するステップチェンジ</a>と呼び、安全策がトリガーハッピーだと指摘している。Brookings 研究員の Kyle Chan は<a href="https://thenextweb.com/news/claude-fable-5-curbs-china-ai-labs">制限は中国向けだと位置づけつつ</a>、すべての AI 研究者を同様に足止めしていると観察した。',
};
