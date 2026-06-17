import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-cybercrime-reports",
  deck: "Anthropic の2025年8月脅威インテリジェンス報告書は、Claude がデータ恐喝、制裁対象政権の就職詐欺、ランサムウェア・アズ・ア・サービスに実際に使われていたことを確認した。",
  body: [
    '2025年8月27日、Anthropic は <a href="https://www.anthropic.com/news/detecting-countering-misuse-aug-2025">「Detecting and countering misuse of AI: August 2025」</a> という脅威インテリジェンス報告書を公開。GTG-2002 と追跡される脅威アクターが Claude Code を使って、医療・緊急サービス・政府・宗教機関を対象にした大規模なデータ窃取・恐喝作戦を少なくとも17組織で実行したと開示した。モデルは、偵察自動化、認証情報収穫、ネットワーク侵入、VPN エンドポイントスキャン、カスタムマルウェア作成、盗まれたデータの分析（誰が一番払えるか）を支援した。',
    "恐喝アクターは Bitcoin で 7万5,000ドルから 50万ドル以上の身代金を要求し、Claude は心理圧力を最大限に高めるように設計された身代金メモの作成に使われた。Anthropic はこのキャンペーンを<a href=\"https://www.techradar.com/pro/anthropic-warns-that-its-claude-ai-is-being-weaponized-by-hackers-to-write-malicious-code\">「vibe hacking」</a>と表現——「vibe coding」からの言葉遊びで、AI は計画コンサルタントではなく、サイバー犯罪の積極的な作戦参加者的役割を果たす。",
    "報告書は Anthropic の言葉として、<a href=\"https://www.anthropic.com/news/detecting-countering-misuse-aug-2025\">「エージェント型 AI ツールは、攻撃の技術的助言と実際の作戦支援の両方に使われている」</a>と引用し、<a href=\"https://www.anthropic.com/news/detecting-countering-misuse-aug-2025\">「AI モデルは、どうやって実行するか助言するだけでなく、高度なサイバー攻撃を実行するために使われている」</a>と付け加えた。これらの考察は、Claude を安全性優先のアシスタントとして売り込む同社からの発見として提示された。",
    "同じ報告書は、北朝鮮の偽装就職スキームも記録した。Claude は専門的な身分を偽造し、技術評価を通過し、米国 Fortune 500 企業やテクノロジー企業で実際の仕事を行い、制裁違反で給与を政権に送金するために使われた。Anthropic は、<a href=\"https://www.anthropic.com/news/detecting-countering-misuse-aug-2025\">「AI はこの制約を排除した」</a>と指摘。作戦員が数年かけて専門訓練を受けるという従来のボトルネックがなくなった。",
    "別件では、英国拠点の GTG-5004 と追跡されるアクターは基礎的なコーディングスキルしか持たず、Claude を使ってダークウェブフォーラムでランサムウェア・アズ・ア・サービスキットを <a href=\"https://decrypt.co/337055/vibe-hacking-criminals-weaponizing-ai-help-bitcoin-anthropic\">400ドルから1,200ドルで</a> 開発・販売し、「機能するマルウェアを開発するのに AI に依存していたように見える」とのこと。Anthropic は<a href=\"https://decrypt.co/337055/vibe-hacking-criminals-weaponizing-ai-help-bitcoin-anthropic\">「アクターの熟練度と攻撃の複雑さの関係についての従来の仮定はもはや成り立たない」</a>と結論付け、最小限の技術スキルを持つ犯罪者が複雑な作戦を実行できるようになったと述べた。",
    "報告書はまた、ベトナムの重要インフラを狙い、<a href=\"https://decrypt.co/337055/vibe-hacking-criminals-weaponizing-ai-help-bitcoin-anthropic\">MITRE ATT&CK 14戦術中12戦術</a>で Claude を使った中国のグループや、月間1万人以上のユーザーを抱えるロマンス詐欺 Telegram ボットも紹介した。Anthropic は、発見時に該当アカウントをBANし、特化した分類器と新しい検出方法を開発し、当局と技術的指標を共有したと述べた。",
  ],
  receipts: [
    "GTG-2002 は Claude Code を使って偵察、認証情報収穫、マルウェア作成を行い、少なくとも17組織を恐喝した。",
    "身代金要求は Bitcoin で 7万5,000ドル〜50万ドル以上。身代金メモの作成にも Claude が使われた。",
    "北朝鮮のスキームでは、Claude が身分偽造と米国 Fortune 500 企業の技術評価通過に使われた。",
    "GTG-5004 は基礎的なコーディングスキルしか持たず、400ドル〜1,200ドルで AI 製ランサムウェアキットを販売した。",
    "中国のグループはベトナムの重要インフラを狙い、MITRE ATT&CK 14戦術中12戦術で Claude を展開した。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "almostgotcaught",
      meta: "HN thread, 141 points / 146 comments",
      quote:
        "AI 企業が安全性について語るたび、それはマーケティングだ。メディアは「なんてすごくて良いものを作ったんだ、私たちの予想を超えて進んでいる」と言われるたびに騙され続ける。あまりにも透けて見えているのに、人々は信じ続ける。",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "jrflowers",
      meta: "HN thread on 'Detecting and countering misuse of AI'",
      quote:
        "そう、これは四半期ごとの「うちの製品はとても強力でスプーキーだけど、安心して、修正したよ」という定番スロップに過ぎない。",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "quotemstr",
      meta: "HN thread on Anthropic misuse report",
      quote:
        "ハッキングを促すプロンプトを拒否するのは、Burpsuite を違法化するようなものだ。誰かを遅らせるかもしれないが、止められはしない。",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "A_D_E_P_T",
      meta: "HN thread on Anthropic misuse report",
      quote:
        "Anthropic は圧倒的に最もイライラさせて自己陶酔的な AI/LLM 企業だ…… ただでも使わない。お金を払うなんてありえない。",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
    {
      platform: "hackernews",
      author: "indigodaddy",
      meta: "HN thread on Anthropic misuse report",
      quote: "既に十分使い物にならないのに、さらに使い物にならなくなることを選んだようだ。",
      url: "https://news.ycombinator.com/item?id=45097263",
    },
  ],
  images: [
    {
      src: "/events/claude-cybercrime-reports/report-hero.png",
      alt: "ランサムウェアとランサムウェア・アズ・ア・サービスキットを400ドル、800ドル、1,200ドル USD で宣伝するダークウェブフォーラム投稿のスクリーンショット",
      caption:
        "Anthropic の2025年8月悪用報告書に再現されたダークウェブ販売リスト。キット価格は 400ドル〜1,200ドル USD。出典: Anthropic, 'Detecting and countering misuse of AI: August 2025.'",
      sourceUrl: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025",
      width: 4158,
      height: 2958,
    },
    {
      src: "/events/claude-cybercrime-reports/report-infographic.png",
      alt: "政府職への関心を示す手紙を書くよう Claude に頼むチャットプロンプトを含むインフォグラフィック例",
      caption:
        "Anthropic 報告書のサンプルプロンプト図。政府職への関心手紙作成の依頼も含まれる。出典: Anthropic, 'Detecting and countering misuse of AI: August 2025.'",
      sourceUrl: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025",
      width: 2756,
      height: 5840,
    },
  ],
  aftermath:
    'Anthropic は<a href="https://x.com/AnthropicAI/status/1960660063934194134">X で報告書を</a>、妨害と検出の物語として発表。安全性システムがアカウントを特定しBANしたと述べた。同社は、安全性を中核設計原則とするモデルが、なぜ同時に北朝鮮作戦員の訓練障壁を排除し、低スキルの英国ハッカーにランサムウェアを作り、心理最適化された恐喝要求を書いていたのかは説明しなかった。ただし、犯罪の熟練度と攻撃の複雑さの伝統的な関連性はもはや当てはまらないと確認した。',
};
