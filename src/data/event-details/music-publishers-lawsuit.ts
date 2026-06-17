import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "music-publishers-lawsuit",
  deck: "Universal Music Group、Concord、ABKCOは2023年10月18日、Anthropicを提訴した。Claudeが数百の楽曲の著作権付き歌詞を要求に応じて再現できるよう学習されたと主張して。",
  body: [
    '2023年10月18日、音楽出版社のUniversal Music Group、Concord、ABKCOは、米国テネシー州中地区連邦地方裁判所にAnthropicに対する著作権侵害訴訟を提起した。事件番号は3:23-cv-01092。<a href="https://variety.com/2023/music/news/universal-concord-abkco-sue-ai-company-anthropic-copyright-violation-1235761250/">Varietyの報道</a>によると、訴状はAnthropicが少なくとも500曲——具体的には499曲——の著作権付き歌詞を違法に複製・配布してClaude AIモデルの学習に使い、Claudeはプロンプトに応じてそれらの歌詞を再現できると主張した。',
    '訴状にはDon McLeanの「American Pie」、Rolling Stonesの「Gimme Shelter」、Mark RonsonとBruno Marsの「Uptown Funk」、Sam Cookeの「A Change Is Gonna Come」、The Beach Boysの「God Only Knows」、「What a Wonderful World」などが挙げられ、Beyoncé、Katy Perry、Otis Reddingなどのアーティストも含まれた。<a href="https://www.theregister.com/2023/10/20/music_publishers_sue_anthropic/">The Register</a>は、引用された例の一つとして、ClaudeにBuddy Hollyの死について書くよう求めると、「American Pie」の歌詞を返しながら、それを自分のオリジナル作品だと虚偽の主張をしたと指摘した。',
    '出版社は、侵害が最初のデータ取り込み、追加のファインチューニング、Claudeの出力としてほぼ同一の複製を生成するという3段階で起こったと主張した。訴状の核心部分には、「被告は、権利者から許可を得ることなく、他人の著作権作品を複製、配布、表示して自社の事業を構築することはできない。その原則は、企業がその侵害に『AI』という言葉を添えたからといって崩壊するわけではない」と記されていた。<a href="https://knowingmachines.org/knowing-legal-machines/legal-explainer/cases/concord-v-anthropic">Knowing Machines</a>が申立てを要約している。',
    "出版社は、侵害作品1件あたり最大15万ドルの法定損害賠償を求め、500曲で約7,500万ドル、さらに著作権管理情報違反1件あたり最大2万5,000ドルを求めた。出版社を代表したのは、Oppenheim + Zebrak法律事務所のMatthew J. Oppenheim弁護士であり、主要な音楽業界著作権訴訟で知られている。訴訟当時、Anthropicは最近約50億ドルの評価額を受け、Amazonから最大40億ドルの投資コミットメントを受けている過程にあった。",
    '2023年11月、出版社はAnthropicに対して歌詞の使用を停止させる予備的差止命令を裁判所に求めた。その申請は紛争の未解決部分となった。2025年1月、Eumi Lee連邦判事は<a href="https://www.hollywoodreporter.com/business/business-news/anthropic-enforce-copyright-guardrails-ai-tools-1236098152/">合意を承認し</a>、Anthropicに対し、出版社の著作権付き歌詞の再現や、それに由来する新しい歌詞の生成を防ぐ既存のガードレールを維持することを求めた。一方、Lee判事は、出版社がより広範な予備的差止命令を求める申請を却下し、Anthropicの使用が「不可逆的な害」を生じさせたり、歌詞サイトからのライセンス料を減らしたりしたことを示していないと判断した。',
    'Anthropicの中核的な抗弁は、歌詞を使った学習が変換的公平使用であるということだ。<a href="https://www.billboard.com/pro/anthropic-claude-ai-music-lawsuit-argues-fair-use-finding/">法廷提出書類</a>で同社は、「Claudeの変換的学習は、無数の有益な方法で使える柔軟な汎用モデルを生み出す——その圧倒的多数は歌詞や音楽とは全く関係ない」と主張した。',
    '事件は後にカリフォルニア州北部地区連邦地方裁判所に移管され、事件番号は5:24-cv-03811となった。2026年3月までに、出版社は部分的即決判決を求める申請を提出し、Anthropicの行為を「大規模な著作権侵害」と呼び、「この事件の証拠は圧倒的だ」と述べた。<a href="https://www.musicbusinessworldwide.com/infringement-on-a-massive-scale-umg-concord-and-abkco-ask-court-to-rule-against-ai-company-anthropic-ahead-of-trial/">Music Business Worldwide</a>がこの申請を報じた。',
  ],
  receipts: [
    "2023年10月18日、テネシー州中地区連邦地方裁判所に事件番号3:23-cv-01092で提起された。",
    "訴状は499曲を引用し、作品あたり最大15万ドル——約7,500万ドル——に加え、著作権管理情報違反ごとに2万5,000ドルを求めた。",
    "Buddy Hollyの死について促されると、ClaudeはDon McLeanの「American Pie」の歌詞を出力し、それを自分のオリジナル作品だと主張した。",
    "2025年1月、Eumi Lee判事はAnthropicに歌詞再現を防ぐガードレールを維持するよう命じたが、「不可逆的な害」の認定は却下した。",
    "事件はカリフォルニア州北部地区連邦地方裁判所（5:24-cv-03811）に移管された。2026年3月までに、出版社はAnthropicの行為を「大規模な著作権侵害」とする部分的即決判決申請を提出した。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "Our_Benefactors",
      meta: "「音楽出版社、歌詞を巡りAI企業Anthropicを提訴」（Reutersスレッド、14ポイント）へのコメント",
      quote:
        "歌詞を掲載するウェブサイトからのいわゆる「損害」はどこにある？ これは最も強く非難できる家賃的追求行為だ。",
      url: "https://news.ycombinator.com/item?id=37940732",
    },
    {
      platform: "hackernews",
      author: "artninja1988",
      meta: "ReutersのHNスレッドへの返信",
      quote: "そうだ、Rap Geniusはどうなる？ 早く棄却されるといいな。",
      url: "https://news.ycombinator.com/item?id=37940732",
    },
    {
      platform: "hackernews",
      author: "iamdelirium",
      meta: "ReutersのHNスレッドへの返信",
      quote: "あのサイトたちは通常、歌詞のライセンス料を支払っている。",
      url: "https://news.ycombinator.com/item?id=37940732",
    },
    {
      platform: "hackernews",
      author: "jarsin",
      meta: "「音楽出版社、AI巨大企業Anthropicと合意」スレッドへのコメント",
      quote:
        "なぜ今さら歌詞だけが著作権保護の対象とされ、インターネット全体の他の部分は違うのか？ ブログの詩も保護されるのか？ 短編小説はどうか？ インターネット全体で学習することは、かなり危険な流れだ。",
      url: "https://news.ycombinator.com/item?id=42582053",
    },
  ],
  images: [],
  aftermath:
    "訴訟はカリフォルニア州北部地区連邦地方裁判所で継続しており、Anthropicは歌詞をブロックするガードレールを維持しなければならない。裁判所は、著作権付き楽曲を使った学習が変換的公平使用に該当するのか、それとも「Gimme Shelter」の歌詞を全部覚えた50億ドルのチャットボットを作るための高価な方法に過ぎないのかを判断することになる。",
};
