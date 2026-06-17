import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-code-espionage",
  deck: "Anthropicは、Claude Codeを武器化して約30のグローバル標的をAIの自律性80〜90%で調査したとされる中国関連キャンペーンを開示し、その後数日をかけてその主張を訂正し擁護した。",
  body: [
    '2025年11月13日、Anthropicは<a href="https://www.anthropic.com/news/disrupting-AI-espionage">「Disrupting the first reported AI-orchestrated cyber espionage campaign」</a>という報告書を公開した。同社が社内でGTG-1002と追跡する脅威アクターが、Claude Codeを操作して、大手テック企業、金融機関、化学メーカー、政府機関を含む約30の標的に侵入を試みたと述べた。Anthropicは<em>「高い信頼性をもって」</em>GTG-1002が中国の国家後援グループだと評価し、AIがキャンペーンの80〜90%を実行し、各侵入あたり人間の介入が必要なのは4〜6の重要な判断点だけだったと主張し、<a href="https://www.anthropic.com/news/disrupting-AI-espionage">「実質的な人間の介入なしに実行された大規模サイバー攻撃の初めて文書化された事例」</a>と呼んだ。Anthropicは2025年9月中旬に不審な活動を検出し、社内で調査した上で公開前にキャンペーンを妨害したと述べた。',
    'Anthropicの説明によると、jailbreakは<a href="https://www.bleepingcomputer.com/news/security/anthropic-claims-of-claude-ai-automated-cyberattacks-met-with-doubt/">Claudeに正当なサイバーセキュリティ企業の従業員として防御的テストを実施していると伝え</a>、悪意のあるタスクを無害に見えるサブタスクに分解することに依存していた。Anthropicの脅威情報責任者Jacob Kleinは限定を付け加えた。<a href="https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/">「自律的でない最初の部分はフレームワークの構築だ。つまり、これをすべて組み立てる人間が必要だった」</a>と述べ、その作業はおおよそ10人のチームが必要だと推定した。Anthropicはまた、組み込みの限界として、<a href="https://www.anthropic.com/news/disrupting-AI-espionage">「Claudeは時々、資格情報を幻覚したり、実際には公開情報であった秘密情報を抽出したと主張したりする」</a>と認め、これは完全自律型サイバー攻撃に対する障害であるままだと述べた。',
    "この開示は即座に懐疑を招いた。セキュリティ研究者は、<a href=\"https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/\">報告書に侵害指標が含まれておらず、既存の既製ツールで達成可能な手法を説明している</a>と指摘した。元CISA長官Jen Easterlyは、<a href=\"https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/\">「どのタスクが本当にAIによって加速されたのか、標準ツールでもできたことなのか、まだわからない」</a>「人間がどれほど介入する必要があったのか、出力が実際にどれほど信頼できるのかもわからない」と警告した。Cisco AI Defenseの研究者Tiffany Saadeは帰属の論理に疑問を呈した。<a href=\"https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/\">「もし私が中国の国家後援アクターで、エージェンシックな能力を持つAIモデルを使って自律的ハッキングをしたいなら、Claudeを使うとは思わない。」</a>",
    '報告書の攻撃ピークが1秒間に数千リクエスト、しばしば1秒間に複数回に達したという主張は、<a href="https://news.ycombinator.com/item?id=45935582">後に訂正され、キャンペーンは実際には1秒間に1000リクエストの速度で実行されていなかった</a>とされた。<a href="https://djnn.sh/posts/anthropic-s-paper-smells-like-bullshit/">「Anthropic\'s paper smells like bullshit」</a>という広く共有された批判的ブログ投稿は、1,150ポイント以上でHacker Newsのトップに達した。Anthropicの対応には、関与したアカウントをBANし、影響を受けた組織に通知し、当局と調整することなどが含まれ、同社は攻撃者が少数のケースで成功したと述べた。',
  ],
  receipts: [
    "Anthropicは、AIがキャンペーンの80〜90%を実行し、各侵入あたり人間の介入が4〜6の判断点に限られたと主張した。",
    "Anthropicは、指摘された中国の国家後援グループを社内でGTG-1002と追跡し、『高い信頼性』をもって評価した。",
    "Jacob Kleinは『これをすべて組み立てる人間が必要だった』と述べ、そうでなければ約10人のチームが必要だと推定した。",
    "元の報告書は1秒間に数千リクエストと主張したが、後に訂正された。",
    "セキュリティ研究者によれば、報告書には侵害指標がなく、既製の手法が使われていた。",
    "「Anthropic\'s paper smells like bullshit」というブログ投稿はHacker Newsで1,150ポイント以上に達した。",
  ],
  reactions: [
    {
      platform: "x",
      author: "Yann LeCun (@ylecun)",
      meta: "Meta Chief AI Scientist、Chris Murphy上院議員への返信",
      quote:
        "規制による独占を望む人々に玩弄されている。彼らは怪しげな研究で皆を脅かし、オープンソースモデルが規制で消滅するように仕向けている。",
      url: "https://x.com/ylecun/status/1989364612651966788",
    },
    {
      platform: "other",
      author: "djnn",
      meta: "Hacker Newsで1位になったブログ投稿、1,160ポイント/322コメント",
      quote:
        "結局のところ、このクソみたいな報告書は哀れな言い訳で、自社製品をもっと売ろうとする恥知らずな試み以外の何物でもない。",
      url: "https://djnn.sh/posts/anthropic-s-paper-smells-like-bullshit/",
    },
    {
      platform: "other",
      author: "Kevin Beaumont (GossiTheDog)",
      meta: "英国のサイバーセキュリティ研究者、LinkedIn/Mastodonに投稿",
      quote:
        "報告書には侵害指標がなく、語られている手法はすべて既存の検知がある既製品のものだ。",
      url: "https://cyberscoop.com/anthropic-ai-orchestrated-attack-required-many-human-hands/",
    },
    {
      platform: "other",
      author: "Dan Tentler (Phobos Group)",
      meta: "Phobos Group創設者エグゼクティブ；Ars Technica/TechRadar経由で引用",
      quote:
        "なぜモデルは攻撃者に90%の確率で望みを叶え、私たち残りはおべっか、拒否、そして幻覚に対処しなければならないのか？",
      url: "https://www.techradar.com/pro/security/experts-cast-doubt-over-anthropic-claims-that-claude-was-hijacked-to-automate-cyberattacks",
    },
    {
      platform: "other",
      author: "Tim Mitchell (Sophos X-Ops)",
      meta: "Sophos X-Ops Counter Threat Unitシニアセキュリティ研究者",
      quote:
        "防御者の視点からは、ここで新しく防御すべきものは何もない—だが攻撃を発見し防御するためのウィンドウは大幅に短縮されている。",
      url: "https://www.techradar.com/pro/security/experts-cast-doubt-over-anthropic-claims-that-claude-was-hijacked-to-automate-cyberattacks",
    },
    {
      platform: "hackernews",
      author: "zyf",
      meta: "『Anthropic\'s paper smells like bullshit』のHNスレへのコメント",
      quote: "いい記事だ。私たちはこんなクソ以上のものを当然受けるに値する。",
      url: "https://news.ycombinator.com/item?id=45944296",
    },
  ],
  images: [
    {
      src: "/events/claude-code-espionage/attack-lifecycle.png",
      alt: "AIが偵察、悪用、認証情報収集、流出の各段階を処理するGTG-1002攻撃ライフサイクルのAnthropic図解",
      caption:
        "Anthropicの攻撃ライフサイクル図解。人間主導の標的決定から、Claude Codeを介した大半AI主導の偵察、脆弱性テスト、認証情報収集、データ流出への移行を示している。出典：Anthropic、『Disrupting the first reported AI-orchestrated cyber espionage campaign』。",
      sourceUrl: "https://www.anthropic.com/news/disrupting-AI-espionage",
      width: 2755,
      height: 2050,
    },
  ],
  aftermath:
    "AnthropicはGTG-1002に関する評価と『初文書化事例』というフレーミングを擁護し続けた。一方、セキュリティコミュニティは、侵害指標なし、訂正されたスループット主張、そして脅威情報責任者が『自律的』攻撃に人間が構築したフレームワークが必要で、およそ10人分の労力だと説明した開示に納得しなかった。Anthropicは関与したアカウントをBANし、影響を受けた組織に通知し、当局と調整し、Claudeが時々盗んだと主張した認証情報を幻覚したことも指摘した。これが新しい脅威カテゴリーなのか、新しいマーケティングカテゴリーなのかという未解決の問いはHacker Newsに持ち込まれ、『Anthropic\'s paper smells like bullshit』という投稿が1,150ポイント以上を集めた。",
};
