import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "windsurf-cut-off",
  deck: "2025年6月3日、WindsurfはAnthropicが5日足らずの通知でClaude 3.xモデルへのほぼすべての直接アクセスを遮断したと述べた。Anthropicは後に、この措置がOpenAIが約30億ドルでWindsurfを買収しようとしているという報道と一部関係していると結びつけた。",
  body: [
    '2025年6月3日、Windsurfは<a href="https://techcrunch.com/2025/06/03/windsurf-says-anthropic-is-limiting-its-direct-access-to-claude-ai-models/">公に述べた</a>。AnthropicがClaude 3.5 Sonnet、3.7 Sonnet、3.7 Sonnet Thinkingを含むClaude 3.xモデルへのファーストパーティー容量のほぼすべてを遮断したと。Windsurf CEO Varun Mohanによると、Anthropicは遮断前に5日足らずの通知期間しか与えなかった。Mohanは<em>「私たちはAnthropicに対し、これは私たちの望みではないことをはっきり伝えてきた。私たちはフル容量に対して支払いたかった」</em>と述べ、<em>「この決定と短い通知期間にはがっかりしている」</em>と付け加えた。',
    'Anthropicの広報担当者Steve Mnichは、同社は<em>「より広範な開発者コミュニティを効果的にサービスできる持続可能なパートナーシップのために容量を優先している」</em>と応じた。この遮断は、OpenAIがWindsurfを約30億ドルで買収することに合意したというBloombergの報道の直後に行われた。Windsurfは2025年4月に年間経常収益（ARR）1億ドルに到達したと報じられていた。',
    '遮断時点で、Windsurfは2025年5月22日のClaude 4ローンチ時に直接アクセスを受け取っておらず、それでもなお持っていなかった。一方、Cursor、Devin、GitHub Copilotなどの競合コーディングツールは直接アクセスを持っていた。Anthropicはまた、自社のエージェンティックコーディング製品を推し進めており、2025年2月に<code>Claude Code</code>を立ち上げ、5月に「Code with Claude」開発者会議を開催し、Windsurfのようなツールの競合として位置づけていた。',
    '2025年6月5日、Anthropicの共同創業者兼Chief Science Officer Jared Kaplanは<a href="https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai/">この措置はOpenAI買収の噂がきっかけだと述べ</a>、<em>「私たちがOpenAIにClaudeを売っているようでは奇妙だと思う」</em>と語った。Kaplanはまた、顧客ロイヤルティーを重視した決定だと位置づけ、<em>「私たちは本当に、将来持続的に私たちと仕事をしてくれる顧客を支援しようとしているだけだ」</em>と述べた。さらに、Anthropicは計算リソースが逼迫しており、新しいAmazonコンピューティングクラスターで容量を解放していることに言及した。',
    'Windsurfはユーザーに対し、個人のAnthropic APIキーを使う「自有キー（bring-your-own-key）」回避策を案内した。これはより高価で複雑だと説明し、他のサードパーティー推論プロバイダーでの容量を急いで増強した。同社はまた、GoogleのGemini 2.5 Proのプロモーション料金を導入し、<em>「強力な代替案」</em>として位置づけた。Mohanは、Windsurfの価値は単一のモデルに限定されないと擁護し、<em>「Windsurfの魔法は決してモデルに限定されてこなかった...魔法は既存の知識に対する深い文脈理解にある」</em>と述べた。',
  ],
  receipts: [
    "AnthropicはWindsurfに、Claude 3.5 Sonnet、3.7 Sonnet、3.7 Sonnet Thinkingへのファーストパーティーアクセスを遮断する5日足らずの通知をした。",
    "OpenAIが約30億ドルでWindsurfを買収することで合意したと報じられた。",
    "Windsurfは2025年4月に年間経常収益1億ドルを達成したと報じられた。",
    "Windsurfは、Cursor、Devin、GitHub Copilotなどの競合ツールがすでに持っていたClaude 4への直接アクセスをまだ得ていなかった。",
    "Anthropicは計算リソースの制約を理由に挙げ、新しいAmazonコンピューティングクラスターで容量を解放していると述べた。",
    'WindsurfはGoogleのGemini 2.5 Proを「強力な代替案」としてプロモーション料金を導入した。',
  ],
  reactions: [
    {
      platform: "x",
      author: "@_mohansolo (Varun Mohan, Windsurf CEO)",
      meta: "2025年6月3日のX投稿",
      quote:
        "5日足らずの通知で、AnthropicはClaude 3.xモデル全てへの私たちのファーストパーティー容量のほぼすべてを遮断することを決定した。通知期間が短かったため、他の推論プロバイダーで非常に急速に容量を増強しているが、短期間のClaude 3.xモデル可用性の問題が発生する可能性がある...",
      url: "https://x.com/_mohansolo/status/1930034960385356174",
    },
    {
      platform: "hackernews",
      author: "princealiiiii",
      meta: "6月5日TechCrunch記事のトップコメント（114ポイント）",
      quote:
        "これらのモデルプロバイダーの上に構築されたアプリは、いずれプロバイダー自身の競合になりうる。モデルプロバイダーは現在、ビジネスで最もマージンの低い部分にいるため、アプリ層に進出しようとする可能性が高い。",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
    {
      platform: "hackernews",
      author: "icelancer",
      meta: "Hacker Newsコメント",
      quote:
        "私にはこれがかなり合理的に見える。OpenAIに買収される（とされる）Windsurfが、主要競合のAPIにアクセスできると当然期待する理由がよくわからない。",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
    {
      platform: "hackernews",
      author: "hiddencost",
      meta: "icelancerへの返信コメント",
      quote:
        "知らないけど、サービスにお金を払っているなら、契約条件が気まぐれな遮断から私を守ってくれることを期待する。",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
    {
      platform: "hackernews",
      author: "mountainriver",
      meta: "Hacker Newsコメント",
      quote:
        "これはコミュニティにとって、Anthropicが信頼できないという明確な信号のはずだ。OpenAIも同様。Googleは未定だ。",
      url: "https://news.ycombinator.com/item?id=44196807",
    },
  ],
  images: [],
  aftermath:
    "2025年6月5日までに、Windsurfはユーザーにより高価な自有APIキー（BYOK）構成とサードパーティー推論プロバイダーに誘導し、GoogleのGemini 2.5 Proのプロモーション価格を提供していた。Anthropicも、OpenAIによる買収報道がWindsurfにClaude容量を売ることを、Jared Kaplanの言葉を借りれば『奇妙』に感じさせたと公に認めていた。",
};
