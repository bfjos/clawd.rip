import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "xai-lockout",
  deck: "2026年1月、AnthropicはCursor内でxAI社員のClaudeアクセスを遮断した。Elon Muskのスタートアップを、7ヶ月以内にブロックされた3番目の競合にし、業界関係者がフロンティアラボの中で最も制限的だと評する条項の下で。",
  body: [
    '2026年1月初旬、Cursor内でClaudeモデルを使っていたxAI社員は、AnthropicがClaudeを使って競合AIシステムを構築または学習させることを禁じる商用条項を執行したことでアクセスできなくなった。<a href="https://www.storyboard18.com/digital/anthropic-blocks-xai-from-using-claude-deepening-rivalry-in-the-ai-race-87447.htm">この遮断</a>は記者<a href="https://x.com/kyliebytes/status/2009686466746822731">Kylie Robison</a>が最初に報じた。彼女は、xAI共同創業者Tony（Yuhuai）Wuが社員に「Hi team, I believe many of you have already discovered that Anthropic models are not responding on Cursor.」と伝えた内部Slackメッセージを引用した。<a href="https://officechai.com/ai/anthropic-cuts-off-xais-access-to-its-coding-models-xs-product-head-says-time-to-ban-anthropic-from-x/">Wuはこのロックアウトを「良くも悪くもある」と位置づけ</a>、xAIは「生産性に打撃を受ける」が、「自前のコーディング製品/モデルを開発するよう強く推進される」と書いた。',
    'xAIへの遮断は孤立した執行措置ではなかった。<a href="https://aihola.com/article/anthropic-cuts-xai-claude-access-cursor">これに先立ち</a>、Anthropicは2025年6月にWindsurfのアクセスを停止した。これはBloombergがOpenAIがWindsurfを30億ドルで買収すると報じた後で、Windsurf CEO Varun Mohanには5日足らずの通知期間しか与えられなかった。2025年7月下旬、Anthropicはまた、OpenAIがGPT-5ローンチに先立ち自社モデルのベンチマークのために内部ツールでClaudeを使っていたと主張して、OpenAIのAPIアクセスを取り消した。AnthropicのChief Science Officer Jared Kaplanは、OpenAIに関するこの方針を擁護し、<a href="https://aihola.com/article/anthropic-cuts-xai-claude-access-cursor">「私たちがOpenAIにClaudeを売っているようでは奇妙だと思う」</a>と述べた。',
    'タイミングはさらに皮肉的だった。xAIへの遮断は、Elon MuskがX上でAnthropicを称賛してからおよそ1ヶ月後に発生した。<a href="https://www.rswebsols.com/news/anthropic-restricts-xais-access-to-its-coding-models-xs-product-chief-advocates-for-a-ban-on-anthropic-from-x/">「I must give @AnthropicAI credit here: Opus4.5 is outstanding.」</a>ロックアウトを受け、Xのプロダクト責任者Nikita Bierは<a href="https://officechai.com/ai/anthropic-cuts-off-xais-access-to-its-coding-models-xs-product-head-says-time-to-ban-anthropic-from-x/">「Time to ban Anthropic from X.」</a>と投稿した。報道時点では、AnthropicのXアカウントは依然として活動していた。',
    'xAIの一件は、別の並行する取り締まりとも時期を同じくしていた。2026年1月9日頃、Anthropicは、<code>OpenCode</code>のようなサードパーティーツールが公式Claude Codeクライアントを装って、APIレートではなくサブスクリプション価格でClaudeモデルにアクセスするのを防ぐため、セーフガードを強化した。<a href="https://paddo.dev/blog/anthropic-walled-garden-crackdown/">ある開発者が文書化した</a>。',
    'Hacker Newsの業界関係者は、Anthropicの条項がフロンティアラボの中で最も制限的だと指摘した。同条項は、顧客が「当社のサービスと競合するあらゆる製品またはサービス」を構築することを禁止しており、OpenAIやGoogleのより狭いモデルのみに関する制限より広範囲だ。<a href="https://www.therundown.ai/p/anthropic-pulls-plug-on-xais-claude-access">報道</a>によると、xAI社員はCursor内でClaude 4.5を使ってGrokを開発しており、これは2025年8月にAnthropicがOpenAI社員向けのClaude Codeアクセスを停止した出来事と似ていた。',
  ],
  receipts: [
    'xAI共同創業者のTony WuはSlackで社員に「多くの人がすでに気づいていると思うが、Cursor上でAnthropicのモデルが応答していない」と伝えた。',
    "2025年6月、Anthropicがアクセスを遮断する前にWindsurf CEO Varun Mohanに与えられた通知は5日足らずだった。",
    "Elon MuskはxAI社員が締め出されるおよそ1ヶ月前、AnthropicのOpus4.5を『素晴らしい』と称賛した。",
    "Anthropicの条項は『当社のサービスと競合するあらゆる製品またはサービス』の構築を禁止しており、OpenAIやGoogleの制限より広範囲だ。",
    "xAIへの遮断は、2026年1月9日頃にAnthropicがClaude Codeクライアントを装ったサードパーティーツールを取り締まった時期と重なった。",
  ],
  reactions: [
    {
      platform: "x",
      author: "Nikita Bier（@nikitabier）、Xプロダクト責任者",
      meta: "xAIロックアウトを受けてXに投稿",
      quote: "AnthropicをXからBANする時だ",
      url: "https://officechai.com/ai/anthropic-cuts-off-xais-access-to-its-coding-models-xs-product-head-says-time-to-ban-anthropic-from-x/",
    },
    {
      platform: "x",
      author: "Kylie Robison（@kyliebytes）、記者",
      meta: "2026年1月の初報ツイート",
      quote:
        "スクープ：xAI社員はCursor経由で社内でAnthropicのモデルを使っていた。今週、Anthropicがそのスタートアップのアクセスを遮断するまで。",
      url: "https://x.com/kyliebytes/status/2009686466746822731",
    },
    {
      platform: "hackernews",
      author: "whs",
      meta: "HNスレッド『Anthropic bans xAI from using Claude in Cursor』36ポイント",
      quote:
        "これはCCのサードパーティー使用とは関係ないと思う。AnthropicがOpenAIのCCアクセスをブロックしたのと同じブロックだ。競合を助けたくないのは当然だと思う。",
      url: "https://news.ycombinator.com/item?id=46583111",
    },
    {
      platform: "hackernews",
      author: "derangedHorse",
      meta: "HNスレッド『Anthropic cut off xAI's Claude access in Cursor』14ポイント",
      quote:
        "Geminiはすでにこの市場に足を踏み入れ始めているが、Claude Codeと比べるとやや稚拙だ。xAIが何を用意しているか楽しみだ。",
      url: "https://news.ycombinator.com/item?id=46562949",
    },
    {
      platform: "x",
      author: "AI Leaks and News (@AILeaksAndNews)",
      meta: "X投稿",
      quote:
        "AnthropicはxAIのClaudeアクセスを遮断した。Elon MuskのAI企業のスタッフは、CursorでClaude 4.5を使ってGrokを開発していた。同様の出来事は8月にもあり、AnthropicはOpenAI社員向けのClaude Codeを停止した。AnthropicのAI競争政策についてどう思う？",
      url: "https://x.com/AILeaksAndNews/status/2009714766470857049",
    },
  ],
  images: [],
  aftermath:
    "Anthropicの競合禁止条項は、Windsurf、OpenAI、そして今やxAIに対して約7ヶ月のうちに執行され、一過性の措置というより標準手順のように見える。フロンティアラボの社員には、自前のコーディング製品とモデルを作るか、Claudeの代替品を探すかの選択が残された。",
};
