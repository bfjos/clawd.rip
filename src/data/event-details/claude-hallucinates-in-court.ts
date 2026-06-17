import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-hallucinates-in-court",
  deck: "Anthropic の Claude は、自社の 7,500万ドル著作権防衛戦の専門家報告書の中で法律引用を幻覚化した。しかもその報告書は、Claude が著作権歌詞をめったに再現しないと主張するためのものだった。",
  body: [
    "2025年5月15日、Latham & Watkins の Ivana Dukanovic 弁護士は、カリフォルニア州北部地区の Susan van Keulen 治安判事に係属中の <em>Concord Music Group, Inc. v. Anthropic PBC</em>（7,500万ドルの著作権訴訟）で、Anthropic の Claude AI が生成した誤った引用について責任を認める宣誓供述書を提出した。この引用は、2025年4月30日の Anthropic データサイエンティスト Olivia Chen の専門家宣誓供述書に含まれていた。Chen は Claude が著作権保護された歌詞をどれほどめったに再現しないかを裏付けるために提出された。つまり、訴えられているのと同じモデルが、歌詞の再現頻度を証明するために引用を作り、それが誤りだった。基礎訴訟は 2023年10月に Universal Music Group、Concord、ABKCO などの音楽出版社が Anthropic が無断で著作権歌詞で Claude を学習したと主張して提起された。",
    'Dukanovic は、Claude.ai に実在するソースの引用形式を整えるよう依頼したと説明した。<a href="https://fortune.com/2025/05/18/anthropic-claude-lawyer-mistake-citation-legal-filing-large-language-model-llm-latham-watkins/">「Claude.ai に、正しい記事へのリンクを使ってそのソースの適切な法的引用を提供するよう求めました。残念ながら、正しい出版物名、出版年、提供されたソースへのリンクは返してくれましたが、返された引用には不正確なタイトルと誤った著者が含まれていました。」</a>本物の論文は Owen McGrath と Kevin Burke による <em>The American Statistician</em> 誌の "Binomial Confidence Intervals for Rare Events: Importance of Defining Margin of Error Relative to Magnitude of Proportion" だった。幻覚化された版では、実際には<a href="https://www.reuters.com/legal/legalindustry/anthropics-lawyers-take-blame-ai-hallucination-music-publishers-lawsuit-2025-05-15/">「共著したことのない」</a>著者名が記されていた。',
    '公聴会で、音楽出版社側の Matt Oppenheim 弁護士はその引用を<a href="https://decrypt.co/319683/anthropic-accused-of-citing-ai-hallucination-in-song-lyrics-lawsuit">「完全なでっち上げ」</a>と呼んだが、Chen が意図的に作ったとは信じていないと付け加え、おそらく Claude 自身を使ってソースを生成したのだろうと示唆した。van Keulen 判事はこの問題を<a href="https://reason.com/volokh/2025/05/26/judge-strikes-part-of-anthropic-claude-ai-experts-declaration-because-of-uncaught-ai-hallucination-in-part-of-citation/">「非常に深刻で重大な問題」</a>と呼び、<a href="https://reason.com/volokh/2025/05/26/judge-strikes-part-of-anthropic-claude-ai-experts-declaration-because-of-uncaught-ai-hallucination-in-part-of-citation/">「引用のミスと AI が生成した幻覚の間には大きな違いがある」</a>と述べた。判事は Anthropic に対する告発への回答を命じ、最終的に Chen の宣誓供述書の第9段落を却下。この問題は宣誓供述書全体の信頼性を損なうと判断した。',
    'Anthropic の提出書類はこのエラーを<a href="https://www.theregister.com/2025/05/15/anthopics_law_firm_blames_claude_hallucinations/">「権威の捏造ではない、正直な引用ミス」</a>と表現し、Dukanovic は<a href="https://www.theregister.com/2025/05/15/anthopics_law_firm_blames_claude_hallucinations/">「恥ずかしく意図しないミス」</a>と説明した。同社は「手動引用チェック」がこのエラーを見落としたと認め、Claude が引用整形プロセスで導入した追加の文言ミスも見逃していた。van Keulen 判事は、基礎となる論文は実在し Google 検索で見つけられたため、<a href="https://reason.com/volokh/2025/05/26/judge-strikes-part-of-anthropic-claude-ai-experts-declaration-because-of-uncaught-ai-hallucination-in-part-of-citation/">「弁護士や専門家が独自の判断を放棄した事例ではない」</a>と指摘したが、失敗した手動チェックと訴訟代理人による個人的な確認の欠如を指摘した。',
    "幻覚化された引用は、Claude が保護された歌詞コンテンツをどれほどの頻度で再現するかについて Chen の証言を裏付ける学術統計ソースだった。論文の実際のタイトルは稀な事象の二項信頼区間に関するもの。7,500万ドルの訴訟で Claude が著作権歌詞で学習されたかどうかが争われる中、モデルは自らの歌詞再現が統計的に稀だと証明しようとして欠陥のある引用を生み出し、その引用が Anthropic の専門家の信頼性を疑う証拠となった。",
  ],
  receipts: [
    "幻覚化された引用は、2025年4月30日の Anthropic データサイエンティスト Olivia Chen の専門家宣誓供述書に含まれていた。",
    "Latham & Watkins の Ivana Dukanovic 弁護士は 2025年5月15日に修正宣誓供述書を提出した。",
    '本物の論文は Owen McGrath と Kevin Burke による <em>The American Statistician</em> 誌の "Binomial Confidence Intervals for Rare Events: Importance of Defining Margin of Error Relative to Magnitude of Proportion"。',
    '音楽出版社側の Matt Oppenheim 弁護士はその引用を「完全なでっち上げ」と呼んだ。',
    "Susan van Keulen 判事は Chen の宣誓供述書の第9段落を却下し、専門家の全体の信頼性を損なうと判断した。",
    "基礎訴訟は 2023年10月に Universal Music Group などの出版社が提起し、7,500万ドルの訴訟とされている。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "JumpCrisscross",
      meta: "Hacker News, comment on The Verge submission",
      quote:
        "Anthropic には缺席判決を。そしてこれに署名した Latham の弁護士には制裁を。",
      url: "https://news.ycombinator.com/item?id=44025967",
    },
    {
      platform: "other",
      author: "gurps_npc",
      meta: "Slashdot, Score: 4, Interesting",
      quote:
        "もし私が裁判官に嘘をつけば、偽証罪で起訴されて刑務所に入れられる。使った機械が嘘をついたと主張しても、それは関係ない。",
      url: "https://yro.slashdot.org/story/25/05/15/2031207/anthropics-lawyer-forced-to-apologize-after-claude-hallucinated-legal-citation",
    },
    {
      platform: "other",
      author: "Jason Earl",
      meta: "Slashdot, Score: 4, Insightful",
      quote:
        "その防御の問題は、引用した論文が実際には存在しないことだ。…… 彼らがしたことは、権威の捏造の定義にぴったり当てはまる。",
      url: "https://yro.slashdot.org/story/25/05/15/2031207/anthropics-lawyer-forced-to-apologize-after-claude-hallucinated-legal-citation",
    },
    {
      platform: "other",
      author: "khb",
      meta: "Slashdot, Score: 5, Insightful",
      quote:
        "ここ2年でこの種のニュースは何度もある。ペナルティが彼らの注意を引くほど痛くなかったんだろうな。",
      url: "https://yro.slashdot.org/story/25/05/15/2031207/anthropics-lawyer-forced-to-apologize-after-claude-hallucinated-legal-citation",
    },
    {
      platform: "hackernews",
      author: "Kon-Peki",
      meta: "Hacker News, comment on The Verge submission",
      quote:
        "ああ、退屈で検証済みで決定論的な自動化ソフトウェアを、LLM に置き換えたんだね。",
      url: "https://news.ycombinator.com/item?id=44007968",
    },
  ],
  images: [],
  aftermath:
    "van Keulen 判事は Chen の宣誓供述書の第9段落を却下し、幻覚化は専門家の信頼性にとって打撃だとした。同時に、訴訟代理人が引用を個人的に確認しなかった点も指摘した。この判決は、Anthropic が Claude を著作権歌詞で学習したかどうかを巡る進行中の 7,500万ドル訴訟の記録の一部となっている。",
};
