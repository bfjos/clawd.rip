import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "belo-lockout",
  deck: "2026年4月17日、Anthropicは予告なしに60を超えるBelo従業員アカウントを停止し、すべての異議申し立てを一般的なGoogle Formに誘導し、およそ15時間後にアクセスを回復した。これは事前告知のない誤検知だった。",
  body: [
    '2026年4月17日金曜日、Anthropicはアルゼンチンに拠点を置くフィンテック企業Beloの60を超えるClaudeアカウントを突然停止し、従業員の作業の真っ最中にアクセスを断った。大量停止は統合、スキル、ワークフロー、過去の会話履歴へのアクセスを切断し、会社全体の業務を混乱させた。<a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation">Tom\'s Hardware</a>は、この切断は突然で完全だったと報じた。',
    "従業員は、自動化システムが利用ポリシーの違反の可能性につながる信号を検出したという通知のみを受け取った。メッセージは特定のポリシー、会話、または責任のあるユーザーを特定しなかった。異議申し立ての唯一の手段は一般的なGoogle Formであり、直接的なサポート連絡先は提供されなかった。",
    '多くの報道でBeloのCTOと特定されたPatricio Molina—一部では当初CEOとされた—はXでこの事件を公表した。いくつかの報道は、彼の投稿が迅速な解決を促したと評価している。Molinaは直接的な被害をこう述べた。<a href="https://www.storyboard18.com/amp/trending/very-bad-ux-and-customer-service-cto-says-anthropic-shut-down-firms-claude-access-with-no-warning-95630.htm">「統合、スキル、会話履歴：すべて失われたか、最良の場合でも無期限に保留されている。」</a>',
    'アクセスはおよそ15時間後に回復し、停止は自動検知システムによって引き起こされた可能性が高い誤検知に帰因された。<a href="https://oecd.ai/en/incidents/2026-04-18-be9c">OECD.AIインシデントデータベース</a>はこの出来事をインシデント2026-04-18-be9cとして記録し、Anthropicの自動化セーフガードが誤ってアカウントを停止したこと、そして「後にアクセスが回復したことは、停止が誤作動（誤検知）であったことを確認するものだ」と述べた。報道で引用されたAnthropicからの公式声明はなく、誤検知の判断はアクセスが回復した後にしか表出しなかった。',
    'ほぼ同時期に、別の<a href="https://news.ycombinator.com/item?id=47853021">Hacker News投稿</a>は、農業技術企業で約110人の組織ユーザー—当初は70人と引用—が同様に予告なしに停止された並行事件を伝えた。これらのユーザーにも異議申し立てはGoogle Formのみが提供され、投稿によると返答はなく、これは単発ではなく繰り返しのパターンを示唆している。',
    'その後、Molinaは他のスタートアップに対し、単一のAIプロバイダーへの過度の依存を避けるよう警告し、<a href="https://www.businesstoday.in/technology/story/never-put-all-your-eggs-in-one-basket-fintech-cto-warns-after-anthropic-suspends-60-accounts-526442-2026-04-20">教訓を次のように要約した</a>。「すべての卵を一つのカゴに入れるな。」',
  ],
  receipts: [
    "2026年4月17日金曜日、Anthropicは60を超えるBelo従業員アカウントを停止した。",
    "提供された唯一の異議申し立てチャネルは一般的なGoogle Formで、直接的なサポート連絡先は提供されなかった。",
    "アクセスはおよそ15時間後に回復した。OECD.AIインシデントデータベース（2026-04-18-be9c）は停止を誤作動（誤検知）と分類した。",
    "Belo CTOのPatricio MolinaはXで事件を公表し、複数の報道は迅速な解決を促したと彼を評価した。",
    "別のHacker News投稿は、農業技術企業で約110人のユーザーが同様に停止され、Google Formのみが提供され返答がないことを伝えた。",
    "Molinaは他のスタートアップへの教訓を『すべての卵を一つのカゴに入れるな』と要約した。",
  ],
  reactions: [
    {
      platform: "x",
      author: "Pato Molina (@patomolina, Belo CTO)",
      meta: "元のX投稿、各種報道で引用",
      quote:
        "@claudeai、明確な理由も説明もなしに、正当な企業の60以上のアカウントで私たちの組織全体を停止した。異議を申し立てる唯一の方法はGoogle Formを記入することだと？非常に悪いUXとカスタマーサービスだ。",
      url: "https://www.storyboard18.com/amp/trending/very-bad-ux-and-customer-service-cto-says-anthropic-shut-down-firms-claude-access-with-no-warning-95630.htm",
    },
    {
      platform: "x",
      author: "Pato Molina (Belo CTO)",
      meta: 'フォローアップX投稿（スペイン語）：「アクセスが回復した。どうやら誤検知だった。そしていつものように：Twitterはカスタマーサービスだ。」',
      quote:
        "アクセスが回復された。どうやら誤検知だった。そしていつものように：Twitterはカスタマーサービスだ。",
      url: "https://www.storyboard18.com/amp/trending/very-bad-ux-and-customer-service-cto-says-anthropic-shut-down-firms-claude-access-with-no-warning-95630.htm",
    },
    {
      platform: "hackernews",
      author: "inquisitive-me",
      meta: "Anthropicの組織全体BANに関するHNスレ（Belo以外）",
      quote:
        "新しい攻撃ベクトルだ。TOS違反の質問をチャットボットにし始めて、会社全体をBANすればいい。",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
    {
      platform: "hackernews",
      author: "NikolaosC",
      meta: "Anthropicの組織全体BANに関するHNスレ（Belo以外）",
      quote: "沈黙が最悪の部分だ。誰も説明してくれないものは修正できない。",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
    {
      platform: "hackernews",
      author: "muzani",
      meta: "Anthropicの組織全体BANに関するHNスレ（Belo以外）",
      quote:
        "AIカスタマーサービスボットを通り抜けるのに3週間かかる。たとえ通れたとしてもだ。",
      url: "https://news.ycombinator.com/item?id=47853021",
    },
  ],
  images: [],
  aftermath:
    "AnthropicはBelo停止に関して報道で引用される公式声明を発表していない。文書化された顧客向け救済手段は依然として一般的なGoogle Formであり、誤検知の判断は15時間のロックアウトが終わった後にしか表出せず、同じフォームを通じて処理された並行する農業技術企業の報告—沈黙で応じられた—は、自動検知システムの仕組みが公式チャネルで説明されていないまま残されている。",
};
