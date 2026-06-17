import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "distillation-attacks",
  deck: "Anthropic は 3つの中国 AI 研究所に、2万4000の偽アカウントと 1600万回の Claude やり取りを通じた産業規模の蒸留攻撃を告発した。その開示は、「産業規模」の定義は一体何か、という疑問をすぐに招いた。",
  body: [
    '2026年2月23日、Anthropic は <a href="https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks">「Detecting and preventing distillation attacks」</a> という投稿を公開。DeepSeek、Moonshot AI、MiniMax を、約 2万4000の不正アカウントで 1,600万回以上のやり取りを生成し、Claude の能力を体系的に抽出したと告発した。研究所別の内訳は、DeepSeek が推論と報酬モデリングを狙った 15万件以上、Moonshot がエージェント型推論とコーディングを狙った 340万件以上、MiniMax がエージェント型コーディングとツールオーケストレーションを狙った 1,300万件以上。Anthropic は MiniMax のキャンペーンをリアルタイムで検出し、新しい Claude モデルがリリースされてから24時間以内に標的を切り替えるのを確認したと述べた。',
    'Anthropic はこの活動を国家安全保障リスクと位置づけ、蒸留が安全ガードレールを剥ぎ取り、攻撃的サイバー作戦、偽情報キャンペーン、大規模監視を可能にし、米国の半導体輸出規制を損なうと主張した。Silverado Policy Accelerator 会長で元 CrowdStrike CTO の Dmitri Alperovitch はこの枠組みを支持し、<a href="https://techcrunch.com/2026/02/23/anthropic-accuses-chinese-ai-labs-of-mining-claude-as-us-debates-ai-chip-exports/">「中国 AI モデルの急速な進歩の理由の一部は、米国のフロンティアモデルからの蒸留による盗用だというのは、しばらく前から明らかだった」</a>と述べた。開示は、Trump 政権が中国への先進 H200 チップ輸出を承認した後に行われ、Anthropic は制限されたチップアクセスが直接の学習と蒸留の規模の両方を制限すると主張した。',
    '批評家はすぐに、告発された研究所間の非対称性を指摘した。DeepSeek の推定シェアは約 15万件で、1,600万回の合計の約1%に過ぎず、大半は MiniMax と Moonshot に帰属していた。Interconnects の Nathan Lambert は<a href="https://www.interconnects.ai/p/how-much-does-distillation-really">「影響を測るのに数量はかなり粗い方法だ」</a>と主張。フロンティアモデルは現在、大規模強化学習に依存しており、生成が計算コストの大半を占め、「他のモデルからの生成では不可能だ」と指摘した。Lambert はまた、選択的執行を強調。API ベースの蒸留は長期にわたり利用規約違反だが、「この開示までは小規模なモデルビルダーに対して何も行動が取られていなかった」とし、「モデル蒸留を阻止することは GPU の規制……よりはるかに難しいだろう」と述べた。',
    '<a href="https://www.scmp.com/tech/tech-war/article/3344499/anthropics-distilling-charges-against-chinese-firms-expose-ai-training-grey-area">South China Morning Post</a> は歴史的文脈を加え、Geoffrey Hinton らが 2015年に基礎的な知識蒸留研究を発表したことを指摘し、この論争を「AI 学習のグレーゾーン」を暴いたものとして位置づけた。つまり、蒸留は標準的で数十年の歴史がある技術なのだ。',
    't3.gg の Theo Browne はトラフィックのベンチマークを提供し、1,600万回のやり取りは AI アプリにとって「そんなに多くない」と反応。自分の T3 Chat プロダクトはほとんどの月にそのボリュームに達すると述べた。Anthropic は、IP データ、アカウントメタデータ、共有支払い方法、同期されたトラフィックパターン、API 使用パターンを通じて活動を検出し、検出能力の強化、パートナーとの情報共有、API アクセス制御の厳格化で対応したと述べた。同社は、アクセス制御の厳格化が、月間の会話量がこの攻撃と似た開発者に影響するかどうかは明確にしなかった。',
  ],
  receipts: [
    "2万4000の不正アカウントが Claude と 1,600万回以上のやり取りを生成した。",
    "研究所別シェア: DeepSeek 15万件以上、Moonshot AI 340万件以上、MiniMax 1,300万件以上。",
    "DeepSeek のシェアは 1,600万回の合計の約1%に過ぎなかった。",
    "Anthropic は MiniMax が新しい Claude モデルリリースから24時間以内に標的を切り替えたと述べた。",
    'Nathan Lambert（Interconnects）: 「影響を測るのに数量はかなり粗い方法だ」。',
    "知識蒸留は Geoffrey Hinton らによって 2015年に発表された。",
  ],
  reactions: [
    {
      platform: "x",
      author: "@AnthropicAI",
      meta: "Official Anthropic announcement tweet",
      quote:
        "DeepSeek、Moonshot AI、MiniMax による、当社モデルに対する産業規模の蒸留攻撃を特定しました。これらの研究所は 2万4,000以上の不正アカウントを作成し、Claude と 1,600万回以上のやり取りを生成し、その能力を抽出して自社モデルの学習・改善に利用しました。",
      url: "https://x.com/AnthropicAI/status/2025997928242811253",
    },
    {
      platform: "hackernews",
      author: "dude250711",
      meta: "HN comment, distillation attacks thread",
      quote:
        "モデル蒸留が盗難であり、攻撃の一類である、などと主張されているのを見ると本当に信じられない。 meanwhile Meta は著作権侵害で法廷にいるし、Anthropic も作家たちと和解している。蒸留『攻撃』は少なくとも API 料金を払っている。",
      url: "https://news.ycombinator.com/item?id=48477189",
    },
    {
      platform: "hackernews",
      author: "anon373839",
      meta: "HN comment",
      quote:
        "蒸留は『攻撃』ではない。Anthropic 自身が自己奉仕的な言い回しとして『蒸留攻撃』という言葉を作ったとしても。そして他の人も指摘しているように、これは Anthropic 自身がモデルを学習させるのに使ってきた公開作品に対する『攻撃』とまったく同じ種類のものだ。",
      url: "https://news.ycombinator.com/item?id=48485901",
    },
    {
      platform: "hackernews",
      author: "ImprobableTruth",
      meta: "HN, 'Notes on DeepSeek' thread (203 points)",
      quote:
        "Anthropic は文字通り本を海賊版で使ったから作家たちと和解しなければならなかった。彼らの蒸留に対する振る舞いは、本当にパロディを超えている。",
      url: "https://news.ycombinator.com/item?id=48476474",
    },
    {
      platform: "hackernews",
      author: "amunozo",
      meta: "HN comment",
      quote:
        "教えてほしい。OpenAI も Anthropic も学習データはどこから得たの？ 公的なソースを正当な手段で？ 笑わせないでくれ。",
      url: "https://news.ycombinator.com/item?id=48476474",
    },
  ],
  images: [],
  aftermath:
    "Anthropic の開示は、告発された研究所から目に見える政策変更を引き出さず、同社は API アクセス制御を厳格化しながら運営を続けた。中国への H200 チップ輸出は進んだ。蒸留は、2015年に遡る標準的な学術技術であり、Anthropic によれば国家安全保障上の脅威でもあり、その区別はどうやらアカウントファームの規模とその運営主体の管轄区域に依存しているようだ。",
};
