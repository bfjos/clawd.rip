import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "april-postmortem",
  deck: "2026年4月23日、Anthropicは数週間にわたるClaude Codeの品質低下を3つのプロダクト層の変更—モデルウェイトではない—に追究するポストモーテムを公開し、すべての加入者の利用上限をリセットした。",
  body: [
    '2026年4月23日、Anthropicは<a href="https://www.anthropic.com/engineering/april-23-postmortem">「An update on recent Claude Code quality reports」</a>というエンジニアリングポストモーテムを公開した。数週間にわたるClaude Codeの品質低下を、モデルウェイトや推論層ではなくプロダクト層の3つの変更に帰因した。3つの変更はClaude Code、Claude Agent SDK、Claude Coworkに影響を与え、すべての修正は4月20日までに完了したと、<a href="https://venturebeat.com/technology/mystery-solved-anthropic-reveals-changes-to-claudes-harnesses-and-operating-instructions-likely-caused-degradation">VentureBeatが報じた</a>。',
    '最初の変更は3月4日に行われ、Sonnet 4.6とOpus 4.6のデフォルト推論労力—「thinking」努力—をhighからmediumに下げ、UIレイテンシを削減するためだった。Anthropicは後にこれを<a href="https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/">「誤ったトレードオフ」</a>と呼び、ユーザーがより高い知性をデフォルトに望むと答えた後、4月7日に巻き戻した。',
    '2番目の変更は3月26日に出荷されたキャッシュ最適化で、古くなった「thinking」をアイドルセッションごとに一度クリアすることを意図していた。Anthropicのポストモーテムによると、バグによりクリア関数が毎ターン実行されてしまい、Claudeは繰り返し以前の推論コンテキストを失い、「忘れっぽく不安定」に見えた。修正は4月10日頃に入った。3番目の変更は4月16日にOpus 4.7と共に追加された簡潔性システムプロンプトで、ツールコール間のテキストを25語以下、最終応答を100語以下に抑えるよう指示した。これはコーディング品質を約3%低下させ、<a href="https://dev.to/_46ea277e677b888e0cd13/anthropic-april-23-postmortem-3-confounding-changes-behind-claude-codes-month-long-quality-drop-2pl6">開発者の解説</a>によれば4月20日に巻き戻された。',
    'Anthropicはこれらの変更が意図的なナーフではないと否定し、ポストモーテムで<a href="https://www.anthropic.com/engineering/april-23-postmortem">「私たちは意図的にモデルを劣化させることは決してなく、APIと推論層が影響を受けていないことを即座に確認できた」</a>と述べた。また<a href="https://www.theregister.com/2026/04/23/anthropic_says_it_has_fixed/">「これはClaude Codeからユーザーが期待する体験ではない」</a>「劣化に関する報告を非常に真剣に受け止めている」とも認めた。補償として、同社は4月23日にすべての加入者の利用上限をリセットし、「本日、すべての加入者の利用上限をリセットします」と述べた。',
    'このポストモーテムは、異例に厳密なユーザー記録に続いて公開された。4月2日頃、AMDのAIグループのシニアディレクターStella Laurenzoが、6,852個のセッションファイル、17,871個のthinkingブロック、234,760回のツールコールから収集したテレメトリを裏付けとしてGitHub issueを立てたと、<a href="https://venturebeat.com/technology/mystery-solved-anthropic-reveals-changes-to-claudes-harnesses-and-operating-instructions-likely-caused-degradation">VentureBeatは指摘した</a>。彼女のデータは、編集前のファイル読み込みが6.6から2.0に減り、thinkingの中央値が約2,200文字から約600文字に崩壊したことを示した。Laurenzoは、自分の3月の使用量がAnthropicのBedrockのオンデマンドレートで月額約42,121ドルかかると計算した。これは月額約400ドルのサブスクリプションの<a href="https://www.threads.com/@hanbingjheng/post/DXEUd6UEaJR">約105倍</a>に相当する。外部ベンチマークも状況を強調した。TrustedSecはコード品質が約47%低下したと測定し、VeracodeはClaudeがタスクの52%で脆弱性を導入したのに対し、OpenAIは30%だったと、<a href="https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/">Fortuneが報じた</a>。',
    'Anthropic内部では、Claude CodeリードのBoris Chernyが調査を<a href="https://www.implicator.ai/anthropic-traces-claude-code-quality-drop-to-three-product-changes-resets-limits/">「おそらく…これまでで最も複雑な調査」</a>と表現し、「根本原因は明らかではなく、多くの交絡因子があった」と付け加えた。このエピソードはまた、公開の監視を招いた。ポストモーテムのHacker Newsスレッドは942ポイントと732コメントに達したと、<a href="https://hn.algolia.com/api/v1/items/47878905">Algoliaデータ</a>が示す。The Registerは<a href="https://www.theregister.com/2026/04/23/anthropic_says_it_has_fixed/">「Anthropic admits it dumbed down Claude with upgrades」</a>という見出しで報じた。多くのユーザーは、バグが確認されるまで数週間にわたって不満がしばしばユーザーエラーや「スキル問題」として却下されていたことに「ガスライティングされた」と感じたと、<a href="https://medium.com/@brentwpeterson/anthropic-breaks-claude-and-gaslights-us-7616f6678a1a">1つのアカウントが記した</a>。',
  ],
  receipts: [
    "Stella Laurenzoの回帰テレメトリに含まれる6,852個のセッションファイル、17,871個のthinkingブロック、234,760回のツールコール。",
    "編集前のファイル読み込みは6.6から2.0に減少；thinkingの中央値は約2,200文字から約600文字に崩壊。",
    "TrustedSecはコード品質が約47%低下したと測定；VeracodeはClaudeが52%のタスクで脆弱性を導入したのに対し、OpenAIは30%だった。",
    "Laurenzoの3月の使用量は、Bedrockのオンデマンドレートで月額約42,121ドルかかる。月額約400ドルのサブスクリプションの約105倍。",
    "ポストモーテムのHacker Newsスレッドは942ポイントと732コメントに達した。",
    "Anthropicは2026年4月23日にすべての加入者の利用上限をリセットした。",
  ],
  reactions: [
    {
      platform: "other",
      author: "Stella Laurenzo (AMD)",
      meta: "AMDシニアディレクター；Brent W. PetersonのMedium記事から引用",
      quote: "Claudeは複雑なエンジニアリングを任せられないほど劣化してしまった。",
      url: "https://medium.com/@brentwpeterson/anthropic-breaks-claude-and-gaslights-us-7616f6678a1a",
    },
    {
      platform: "other",
      author: "Pieter Levels (@levelsio)",
      meta: "Brent W. PetersonのMedium記事『Anthropic Breaks Claude and Gaslights Us』から引用",
      quote:
        "今日のClaude Code with Opus 4.6はあまりにも愚かで、ついに自分でコードを書き直さなければならなくなった。",
      url: "https://medium.com/@brentwpeterson/anthropic-breaks-claude-and-gaslights-us-7616f6678a1a",
    },
    {
      platform: "hackernews",
      author: "troupo",
      meta: "ポストモーテムのHNスレッドへのコメント（942ポイント、732コメント）",
      quote:
        "彼らは2か月かけて、この『批判的なユーザー層』に対し、こんなことは起こりえないと文字通りガスライティングし、宣伝通りに使っている彼らのvibe-codedスロップのせいにした。",
      url: "https://news.ycombinator.com/item?id=47878905",
    },
    {
      platform: "hackernews",
      author: "fn-mote",
      meta: "ポストモーテムのHNスレッド、キャッシュクリアバグについて",
      quote:
        "通常のユニットテストで捕捉されるような、ごく基本的なソフトウェアエンジニアリングエラーのように思える。",
      url: "https://news.ycombinator.com/item?id=47878905",
    },
    {
      platform: "hackernews",
      author: "ed_elliott_asc",
      meta: "ポストモーテムのHNスレッドにおける異論/肯定的な見解",
      quote:
        "Claudeから得る価値は支払いをはるかに上回っている。今週は、人間が何ヶ月もかかるプロジェクトをいくつか完了させた。",
      url: "https://news.ycombinator.com/item?id=47878905",
    },
    {
      platform: "github",
      author: "@up4k73",
      meta: 'GitHub issue #46727: 「Opus 4.6 Max 20x: systematic hallucinations... 80% weekly usage wasted」',
      quote:
        "Claudeは具体的な数字（価格、ファイルサイズ、パフォーマンス指標、可用性）を確認せずに述べる。指摘されると間違いを認めるが、数分後に同じパターンを繰り返す。これは偶発的ではない—デフォルトの振る舞いだ。",
      url: "https://github.com/anthropics/claude-code/issues/46727",
    },
  ],
  images: [],
  aftermath:
    "4月20日までに3つのプロダクト層の変更はすべて巻き戻されるか修正され、4月23日にAnthropicはすべての加入者の利用上限をリセットし、意図的にモデルを劣化させたことはないとしながらも、体験が期待外れであったことを認めた。当時、Fortuneは同社の企業価値を約3,800億ドル、年間経常収益を約300億ドル、エンタープライズ顧客を30万以上、月間アクティブユーザーを約2,000万人と引用した。",
};
