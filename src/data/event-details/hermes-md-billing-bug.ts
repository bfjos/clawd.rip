import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "hermes-md-billing-bug",
  deck: "Claude Codeは、リポジトリのgit履歴に含まれる大文字小文字を区別した文字列HERMES.mdを、禁じられた競合ハーネスの痕跡と解釈し、Max 20x契約の顧客のリクエストを黙って追加課金に振り替えた。週間クォータの約86%が未使用のまま、200.98ドルを消し飛ばした。",
  body: [
    '2026年4月25日、ユーザーsasha-idが<a href="https://github.com/anthropics/claude-code/issues/53262">GitHub issue #53262</a>を立ち上げ、Claude Codeが追加利用料を請求するようになったと報告した。原因は、リポジトリの最近のgitコミット履歴に現れた大文字小文字を区別する文字列<code>HERMES.md</code>だった。ファイルがディスクに存在するわけではない。Claude Codeは最近のコミットをシステムプロンプトに含めるため、誰かが<code>HERMES.md</code>と入力したという記録だけで、Anthropicがそのセッションをどう価格設定するかが変わってしまった。<code>HERMES.md</code>は、Nous Researchのオープンソース自己改善エージェントであるHermesで使われる正当なコンテキストファイル規約だ。',
    "報告者は月額200ドルのMax 20xプランに加入していたが、週間プラン容量の約86%が未使用のまま、追加利用クレジットで200.98ドルを燃やしてしまった。消費量はわずか13%だった。追加利用枠が尽きると、プロジェクトは単に動作しなくなった。使い込んだはずの定額枠の大部分はまだ残っていたのに。彼は、git履歴を二分探索し、リポジトリをクローンし、孤立ブランチを試し、個別のコミットメッセージ文字列を切り離すことで、原因となる「魔法の言葉」を突き止めた。",
    "失敗は外科的な精度を持っていた。<code>HERMES.md</code>や<code>test HERMES.md test</code>を含むコミットメッセージは振り替えを引き起こしたが、小文字の<code>hermes.md</code>、拡張子なしの<code>HERMES</code>、<code>HERMES.txt</code>、<code>AGENTS.md</code>、<code>README.md</code>は何事もなく通過した。履歴のない孤立ブランチや、コミットメッセージがきれいな状態での実際の<code>HERMES.md</code>ファイルも正常に動作した。この挙動は、macOS Apple Silicon上のClaude Code v2.1.119で、モデル<code>claude-opus-4-6[1m]</code>および<code>claude-opus-4-7</code>に対して再現した。同日にDUMPDUMPYがLinux上のClaude Max 5x OAuthプランで提出した別の報告、issue #53171では、gitログに潜む同じバイト列から、<em>「追加利用枠を使い切りました。claude.ai/settings/usageで追加して続行してください」</em>というAPI Error 400が返ってきた。",
    "Anthropicのサポートは当初、返金を拒否した。<em>「サービスの低下や技術的エラーによって課金ルーティングが誤って行われた場合、補償を支払うことはできません」</em>と述べつつ、<em>「詳細な再現手順は、エンジニアリングチームにとって貴重です」</em>と感謝した。Claude Codeの協力者Boris Chernyは後にコメントし、<em>「ご報告ありがとう。過剰な反悪用システムでした。修正済みです」</em>と述べた。報告者は<em>「どういたしまして。じゃあ返金はもらえますか」</em>と返答した。根本原因は、Claude Codeのシステムプロンプトにgit statusを取り込み、競合エージェントに関連する文字列をパターンマッチングし、外部ハーネスが実際に接続されているかを確認することなく、定額プラン利用者を黙って従量制API課金に振り替える反悪用・サードパーティハーネス検出ルーチンだった。",
    '同じ検出ロジックは<code>OpenClaw</code>という文字列にも発火した。Theo Browneは、JSON blobの中に<code>OpenClaw</code>と書かれた最近のコミットがあるだけで、Claude Codeがリクエストを拒否したり追加課金したりするのを実証した。彼のスレッドはAnthropicが公に対応する前に約100万ビューを超えた。r/ClaudeAIの元のReddit PSAは約140万ビューに達したと報じられている。2026年4月29日にhomebrewerがHacker Newsのトップページに投稿したとき、<a href="https://news.ycombinator.com/item?id=47952722">その投稿</a>は1,251ポイントと531コメントを集めた。',
  ],
  receipts: [
    "GitHub issue #53262は、sasha-idが2026年4月25日に立ち上げた。ラベルはarea:cost、bug、has repro、platform:macos。",
    "Max 20xユーザーは、週間プランクォータの約86%が残っている状態で、追加利用料として200.98ドルを消費した。",
    "トリガーは大文字小文字と拡張子に依存した。正確な文字列HERMES.mdを含むコミットメッセージだけが失敗し、hermes.md、HERMES.txt、AGENTS.md、README.mdは通過した。",
    "Anthropicのサポートは当初、技術的エラーによる誤った課金ルーティングを補償できないとして返金を拒否した。",
    "Claude Codeの協力者Boris Chernyは、この問題を過剰な反悪用システムとして認め、修正済みとした。",
    "2026年4月29日、issue #53262のHacker News投稿は1,251ポイントと531コメントを獲得した。",
  ],
  reactions: [
    {
      platform: "github",
      author: "builder555",
      meta: "issue #53262へのコメント",
      quote:
        "つまりAnthropicには200ドルの追加課金を生むバグがあり、それを認めた上で、返金もクレジットもしないってことか？ 競争が激しくなっているときに、わざわざ自らの評判を公に傷つけることを選んだのか？ IPO、頑張ってくれよ。",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "ggPeti",
      meta: "issue #53262へのコメント",
      quote:
        "「できない」のではない。「したくない」のだ。人間性を取り戻す第一歩として、嘘をやめろ。",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "sircompo",
      meta: "issue #53262へのコメント",
      quote:
        "疑い深い観察者は、過剰な反悪用バグが報告された「HERMES.md」文字列だけでなく、他のものでも発火していて、Anthropicの顧客全体で数百万ドルの損失を生んでいる可能性があると考えるだろう。返金拒否は、高価な先例を作りたくないという動機に基づいているのかもしれない。",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "coopzr",
      meta: "issue #53262へのコメント",
      quote: "彼に返金するのは、世界一簡単なPR勝利だ。言っとくけど。",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "github",
      author: "computerex",
      meta: "issue #53262へのコメント",
      quote: "Anthropic、開発者の信頼を壊すスピードラン中だな。",
      url: "https://github.com/anthropics/claude-code/issues/53262",
    },
    {
      platform: "x",
      author: "Theo - t3.gg (@theo)",
      meta: "Xへの投稿。二次報道によると約100万ビュー。",
      quote:
        "豆知識——JSON blobの中にOpenClawを含む最近のコミットがあると、Claude Codeはリクエストを拒否するか、追加の課金をする。これは空のリポジトリだ。Claude Codeを直接呼んでいるだけなのに。狂ってる。",
      url: "https://x.com/theo/status/2049645973350363168",
    },
  ],
  images: [
    {
      src: "/events/hermes-md-billing-bug/issue-53262-card.png",
      alt: "GitHub issue #53262カード：gitコミットメッセージ内のHERMES.mdがリクエストを追加利用課金に振り替える",
      caption:
        "2026年4月25日にsasha-idが立ち上げたissue #53262のGitHub Open Graphカード。タイトルは「HERMES.md in git commit messages causes requests to rou...」、コメント数は92。Credit GitHub。",
      sourceUrl: "https://github.com/anthropics/claude-code/issues/53262",
      width: 1200,
      height: 600,
    },
  ],
  aftermath:
    "この話がHacker Newsに載った後、Anthropicの協力者ThariqSは、同社が影響を受けたユーザーに連絡し、返金に加えて1か月分のクレジットを提供している——報告者の場合はさらに200ドル分——と投稿し、影響を受けたユーザーはまもなくメールを受け取るはずだと述べた。issueは、閉鎖される前に最終的に92コメントを集めた。",
};
