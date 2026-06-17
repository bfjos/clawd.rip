import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "openai-booted-from-claude",
  deck: "Anthropicは2025年8月1日、GPT-5の公開を数日後に控えたタイミングで、競合相手でありながらベンチマークを取っていたという罪により、OpenAIのClaude APIアクセスを取り消した。",
  body: [
    '2025年8月1日火曜日、<a href="https://winbuzzer.com/2025/08/02/anthropic-revokes-openais-api-access-to-claude-alleging-violation-ahead-of-gpt-5-launch-xcxwbn/">AnthropicはOpenAIのClaude APIアクセスを停止した</a>。OpenAIの技術者がGPT-5の開発とベンチマークにClaudeを使っていたと主張した。記事は翌日8月2日に表沙汰となり、8月7日にリリースされるGPT-5の直前という位置づけとなった。Anthropicの広報担当Christopher Nultyは<em>WIRED</em>に対し、<a href="https://www.newsbytesapp.com/news/science/anthropic-revokes-openai-s-access-to-claude-api-over-terms-violation/story">「Claude Codeはどこでもコーダーの定番になっており、OpenAIの技術者たちもGPT-5として最新版ChatGPTの発売前に私たちのコーディングツールを使っていたのは驚くことではない。残念ながら、これは利用規約への直接の違反だ」</a>と述べた。',
    'OpenAIは単にClaudeの消費者向けインターフェースでおしゃべりしていたわけではなかった。<a href="https://www.notebookcheck.net/Anthropic-cuts-OpenAI-s-Claude-API-access-over-alleged-terms-of-service-breach.1078560.0.html">「特別な開発者アクセス」を通じて</a>、OpenAIはClaudeを自社の内部ツールに接続し、コーディング、創作、安全性のカテゴリで比較テストを実行していた。テストには、自傷や名誉毀損といった機微な安全性シナリオも含まれたという。Anthropicの商用規約は、サービスを<a href="https://winbuzzer.com/2025/08/02/anthropic-revokes-openais-api-access-to-claude-alleging-violation-ahead-of-gpt-5-launch-xcxwbn/">「競合製品やサービスの構築、競合AIモデルの学習を含む」</a>目的で使用したり、「リバースエンジニアリングまたは複製」したりすることを明示的に禁止している。',
    'OpenAIの最高広報責任者Hannah Wongは異を唱え、<a href="https://americanbazaaronline.com/2025/08/04/anthropic-restricts-openais-access-to-claude-models-465835/">「他のAIシステムを評価して進捗と安全性を向上させることは業界標準だ」</a>と述べた。OpenAIの広報担当者は、傷ついた夕食会のような口調で付け加えた。<a href="https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/">「私たちはAnthropicが私たちのAPIアクセスを切った決定を尊重するが、私たちのAPIが彼らに利用可能なままであることを考えると残念だ」</a>と。一方Anthropicは、Nultyによれば、業界標準の慣行として<a href="https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/">「ベンチマークと安全性評価の目的で」</a>OpenAIへの提供を続けると述べた。どの目的が適格かは不明瞭なままだった。',
    'この動きには前例があった。Anthropicの共同創業者兼最高科学責任者Jared Kaplanは、2025年6月にOpenAI買収の噂の中でWindsurfのClaudeアクセスを切断し、<a href="https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai">「私たちがClaudeをOpenAIに売るのは奇妙だと思う」</a>と説明した。同じ論理は、借りる場合にも適用されたようだ。<a href="https://news.ycombinator.com/item?id=44762856">Hacker Newsの観察者</a>たちは、OpenAI自身のサービス契約にもほぼ同じ条項があり、出力を「OpenAIの製品やサービスと競合するAIモデルの開発に使用すること」を禁止していると指摘した。標準的な慣行とは、どうやら縄張り意識の強い生き物のようだ。',
  ],
  receipts: [
    "取り消し日：2025年8月1日。報道されたのは8月2日。GPT-5のローンチは2025年8月7日。",
    "OpenAIはAPI経由でClaudeを、コーディング、創作、安全性のカテゴリ——自傷や名誉毀損のシナリオを含む——でテストした。",
    "Christopher Nulty（Anthropic）：「残念ながら、これは私たちの利用規約への直接の違反だ」",
    "Hannah Wong（OpenAI）：「他のAIシステムを評価して進捗と安全性を向上させることは業界標準だ」",
    "OpenAI広報担当者：「私たちのAPIが彼らに利用可能なままであることを考えると残念だ」",
    "Hacker Newsの議論は294ポイントと124コメントに達した。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "modeless",
      meta: "「Anthropic、OpenAIのClaudeアクセスを取り消す」（294ポイント、124コメント）へのHNコメント",
      quote:
        "OpenAIサービス契約：「顧客は、OpenAIの製品やサービスと競合する人工知能モデルを開発するために出力を使用してはならない」剣で生きる者は剣で死ぬ。",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "chowells",
      meta: "「競合製品を構築する」利用規約条項へのHNコメント",
      quote:
        "それは……かなりのライセンス条項だ。ライセンスに使用制限のないツールが大好きだ。そういうのを使い続けることにするよ。",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "v5v3",
      meta: "Hacker Newsコメント",
      quote:
        "究極的に、これはAnthropicにとって素晴らしいPRだ。「私たちはとても優れているので、OpenAIも自社製品より私たちを使う」OpenAIは公式アカウントではなくとも再登録できることを十分に知っているはずだ。",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "bitwize",
      meta: "歴史的な前例を示すHNコメント",
      quote:
        "長年、Microsoftの開発ツールを使ってワープロやスプレッドシートを作るのはライセンス違反だった。Oracleを他のデータベースと比較するベンチマーク結果を公開するのも、Oracleライセンス違反だった。ベンダーと競合するなら……そのベンダーが仲良くしてくれたり、顧客として留めておいてくれたりすることを期待するな。",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
    {
      platform: "hackernews",
      author: "beefnugs",
      meta: "Hacker Newsコメント",
      quote: "彼らがとるべき最も愚かな行動だ。なぜ競合が何をしているかの洞察を断ち切る？",
      url: "https://news.ycombinator.com/item?id=44762856",
    },
  ],
  images: [],
  aftermath:
    "2025年8月の報道時点で、両社はほぼ同じ競合使用条項の下で自社のAPIを運用し続けており、それぞれが正当なベンチマークとみなすものを決定する権利を留保していた。OpenAIは自社のAPIがAnthropicに利用可能なままだと指摘し、Anthropicはベンチマークと安全性評価のためにOpenAIへのアクセスを継続すると述べた。つまり、用心棒は片足でドアを開けたままにしていた。",
};
