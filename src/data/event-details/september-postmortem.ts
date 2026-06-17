import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "september-postmortem",
  deck: "Anthropicは2025年9月17日、3つの重なったインフラバグが数週間にわたってClaudeの応答品質を低下させていたと説明する事後分析を公開した。8月から9月初めにかけて、ユーザーたちは自分たちのモデルがなぜ悪くなったのかと問い続けていた。",
  body: [
    '2025年9月17日、AnthropicはSam McAllister執筆のエンジニアリング事後分析<a href="https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues">「A postmortem of three recent issues」</a>を公開した。この投稿は、2025年8月から9月初めにかけて、3つの別々のインフラバグが断続的にClaudeの応答品質を低下させていたと説明した。この認めたことは、数週間にわたる公の不満の後にやってきた。中には、<a href="https://ilikekillnerds.com/2025/09/09/anthropic-finally-admits-claude-quality-degradation/">9月9日の批判</a>もあり、Claude Codeが数週間にわたって「崖から落ちた」にもかかわらず、同社は「無線沈黙」を保ち、自社のsubredditは「解約する」スレッドで溢れていたと指摘していた。',
    'バグ1は8月5日に始まったコンテキストウィンドウのルーティングエラーだった。短いコンテキスト向けのSonnet 4リクエストが、100万トークンコンテキストウィンドウ用に設定されたサーバーに誤って振り分けられた。当初はリクエストの0.8%に影響したが、8月29日の負荷分散変更により、8月31日のピーク時にはSonnet 4リクエストの最大16%にまで影響が拡大した。「スティッキールーティング」のため、一度誤ったサーバープールに振り分けられたユーザーの後続リクエストは同じ壊れたサーバーに留まり、品質低下が意図的に標的にされているかのように感じられた。ウィンドウ中にリクエストをしたClaude Codeユーザーの約30%は、少なくとも1回は誤振分されたメッセージを受け取った。',
    "バグ2は8月25日に展開されたTPUサーバーの設定ミスによる出力破損問題だった。トークン生成中に誤ったトークンに高い確率を割り当て、英語の応答にタイ語や中国語の文字が現れたり、コードに明らかな構文エラーが生じたりする症状をもたらした。8月25日から28日までOpus 4.1とOpus 4に、8月25日から9月2日までSonnet 4に影響し、9月2日にロールバックされた。バグ3は潜在的なXLA:TPUコンパイラの誤コンパイルであり、8月25日のトークン選択コード変更によって引き起こされた近似top-kバグで、根本原因は<code>bf16</code>と<code>fp32</code>の混合精度ミスマッチにあった。Claude Haiku 3.5と、おそらく一部のSonnet 4およびOpus 3リクエストに影響し、Haiku向け修正は9月4日、Opus向け修正は9月12日に展開された。",
    'サードパーティープラットフォームへの影響ははるかに小さかった。ルーティングバグは、ピーク時でもAmazon Bedrock上のSonnet 4リクエストの約0.18%、Google Vertex AI上では0.0004%未満にとどまった。出力破損バグはサードパーティープラットフォームにはまったく影響しなかった。提供の複雑さは、AWS Trainium、NVIDIA GPU、Google TPUの3つのハードウェアプラットフォームにまたがって動作し、提供層ではPythonとJAXを使っていることに由来する。重なったバグは、<a href="https://simonwillison.net/2025/Sep/17/anthropic-postmortem/">独立した報道</a>が「単一の原因を指し示さない、混乱した報告の混ざり合い」と要約したような状況を生み出した。',
    'Anthropicは自社の評価が問題を見逃したことを認めた。<em>「私たちが実行した評価は、ユーザーが報告していた品質低下を単純に捉えきれていなかった。一部は、Claudeが孤立したミスからしばしばうまく回復するためだ。」</em>同社はまた、プライバシーとセキュリティ管理がデバッグを遅らせたとも述べた。<em>「社内のプライバシーとセキュリティ管理は、エンジニアがClaudeとのユーザー対話にアクセスできる方法やタイミングを制限しており、特にフィードバックとして報告されていない対話ではそうだ。」</em>需要や時間帯、サーバー負荷によって品質を落とすことはないと明言した。<em>「はっきり言おう。私たちは需要、時間帯、サーバー負荷によってモデルの品質を下げることは決してない。」</em>そしてこう認めた。<em>「ユーザーはClaudeから一貫した品質を期待していることを認識している。インフラ変更がモデル出力に影響を与えないよう、私たちは極めて高い基準を維持している。最近のこれらのインシデントでは、その基準を満たせなかった。」</em>',
    '今後、Anthropicはより敏感な評価、継続的な本番品質モニタリング、より高速なデバッグツールを導入すると述べ、ユーザーには<code>/bug</code>コマンドや親指を下に向けるボタンでフィードバックを送るよう求めた。事後分析は<a href="https://news.ycombinator.com/item?id=45281139">Hacker News</a>のトップページに掲載され、ストーリー45281139としておおよそ381ポイントと116件のコメントを集めた。議論は透明性を称賛する声と、クレジット提供の欠如への不満とで分かれた。',
  ],
  receipts: [
    "8月31日のピーク時、Sonnet 4リクエストの16%に影響が拡大した。ルーティングバグ開始時の8月5日は0.8%だった。",
    "ウィンドウ中にリクエストをしたClaude Codeユーザーの約30%は、少なくとも1回は誤振分されたメッセージを受け取った。",
    "Google Vertex AIではルーティングバグがピーク時でもSonnet 4リクエストの0.0004%未満、Amazon Bedrockでは約0.18%にとどまった。",
    "症状には、英語の応答にタイ語や中国語の文字が現れたり、コードに構文エラーが生じたりすることが含まれた。",
    "バグ3はbf16とfp32の混合精度ミスマッチであり、Haiku修正は9月4日、Opus修正は9月12日に出荷された。",
    "事後分析は9月17日に公開され、品質低下は8月5日に始まっていた。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "flutas",
      meta: "事後分析HNスレッド（45281139、約381ポイント）へのコメント",
      quote:
        "それでも、ユーザーに対して謝罪のクレジット提供はない。結局、支払った対価に対して性能が劣化していたのだから。反論があるだろうことはわかっているが、200ドルも払っているのに、時々ChatGPT Plus（20ドル）より役に立たないと感じたのは嫌な味が残った。",
      url: "https://news.ycombinator.com/item?id=45281869",
    },
    {
      platform: "hackernews",
      author: "blackqueeriroh",
      meta: "事後分析HNスレッドへの返信",
      quote:
        "利用規約を確認すれば、Anthropicは応答品質を保証しておらず、有料プランであっても全く保証しないと明記されているはずだ。",
      url: "https://news.ycombinator.com/item?id=45281869",
    },
    {
      platform: "hackernews",
      author: "deepdarkforest",
      meta: "事後分析HNスレッドへのコメント",
      quote:
        "彼らの事後分析は基本的に『評価は難しい、私たちは雰囲気チェックに頼っていた、これからさらに頻繁に雰囲気チェックをする』ということだ。",
      url: "https://news.ycombinator.com/item?id=45281139",
    },
    {
      platform: "news",
      author: "ilikekillnerds (Dwayne Charrington)",
      meta: "2025年9月9日のブログ投稿（公式事後分析の前に書かれた）",
      quote:
        "Anthropicは自分たちのsubredditが『解約する』スレッドで溢れている間、無線沈黙を保っていた。数百億ドル評価の企業にしては、これは素人の時間帯だ。",
      url: "https://ilikekillnerds.com/2025/09/09/anthropic-finally-admits-claude-quality-degradation/",
    },
    {
      platform: "other",
      author: "Simon Willison",
      meta: "2025年9月17日のブログ解説",
      quote:
        "Anthropicがこれほど詳細に公開していることは本当にうれしい。彼らのモデルを安定して提供するという評判は、かなり傷ついている。",
      url: "https://simonwillison.net/2025/Sep/17/anthropic-postmortem/",
    },
  ],
  images: [
    {
      src: "/events/september-postmortem/timeline.png",
      alt: "2025年8月から9月にかけて3つのClaudeインフラバグが検出され、悪化し、修正される様子を示すAnthropicのタイムラインチャート",
      caption:
        "2025年8月から9月にかけて、3つの問題それぞれが検出され、悪化し、修正された時期を色分けしたAnthropic公式タイムライン。Source: Anthropic。",
      sourceUrl: "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
      width: 3840,
      height: 1800,
    },
    {
      src: "/events/september-postmortem/topk-reproducer.png",
      alt: "Anthropicの事後分析からのコード再現例。近似top-kコンパイラバグを示している",
      caption:
        "事後分析に掲載されたコード再現例。誤ったトークン候補を返した近似top-k XLA:TPUコンパイラバグを示している。Source: Anthropic。",
      sourceUrl: "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
      width: 2400,
      height: 1404,
    },
    {
      src: "/events/september-postmortem/routing-impact-chart.png",
      alt: "Claude Sonnet 4のルーティングバグの影響がリクエストの約16%に達したピークを示すチャート",
      caption:
        "Implicator.aiのチャート。ルーティングバグの影響がSonnet 4リクエストの最大16%にまで拡大した様子。Source: Implicator.ai。",
      sourceUrl:
        "https://www.implicator.ai/anthropics-postmortem-three-bugs-pushed-claude-degradation-to-16-at-peak/",
      width: 1856,
      height: 794,
    },
  ],
  aftermath:
    "この事後分析は、一部の読者には異例の透明性があると映り、他の読者は数週間の沈黙とクレジットの不在に釘づけにされた。今後の検出メカニズムとして挙げられたのは、より敏感な評価、継続的な監視、そして有料モデルがタイ語で答え始めたときに親指を下に向けるユーザーたちである。",
};
