import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "amd-regression-report",
  deck: "AMDのシニアディレクターがClaude Opus 4.6に6000を超える自らのセッションログを与え、仕事をしなくなった理由を説明するよう求めた。モデルは応じ、Anthropicは当初その診断を否定したが、数週間後のポストモーテムで3つの別々のプロダクト変更が製品を劣化させていたことを確認した。",
  body: [
    '2026年4月2日、Stella Laurenzo—GitHubハンドル<a href="https://github.com/stellaraccident">stellaraccident</a>、AMD AIグループのシニアディレクター—がanthropics/claude-codeに<a href="https://github.com/anthropics/claude-code/issues/42796">GitHub issue #42796</a>を立てた。タイトルは<em>[MODEL] Claude Code is unusable for complex engineering tasks with the Feb updates</em>で、その後に続いたのは感情の発露ではなく、6,852個のセッションJSONLファイル、17,871個のthinkingブロック（うち可視コンテンツ7,146個、編集済み10,725個）、234,760回のツールコール、2026年1月30日から4月1日までに及ぶ18,000件以上のユーザープロンプトだった。Laurenzoはすでにチームを競合プロバイダに切り替えていた。',
    "核心的な発見は定量的なものだった。モデルのRead:Edit比—ファイル編集前に行われるファイル読み込み—は、1月30日から2月12日のベースライン6.6から、3月8日から23日の2.0へと低下し、編集前の調査が70%減少した。Stop-hook違反、つまり早すぎる放棄と責任回避は、3月8日以前はゼロだったのが、3月下旬までに累計173件に増加した。ユーザーの割り込みや修正は約12倍に増えた。人間からのプロンプト量はほぼ横ばい：2月に5,608件、3月に5,701件。それにもかかわらず、Claudeはより悪い結果を出すために、APIリクエストを約80倍、出力トークンを約64倍消費した。Laurenzoはこのパターンを平易に表現した：<em>思考が浅くなると、モデルは最も安価な行動にデフォルトで回る。読まずに編集し、終わらずに停止し、失敗の責任を回避し、正しい修正ではなく最も簡単な修正を選ぶ。</em>",
    '報告書は犯人として<code>redact-thinking-2026-02-12</code>のロールアウトを挙げた。Laurenzoは、独立した品質クレームが3月8日に現れ始めたことに注目し、その日は編集済みthinkingブロックが50%を超えた正確な日付で、推定中央値のthinking長が約2,200文字から約600文字に崩壊したと推定した。4月6日、AnthropicのBoris Cherny（<a href="https://github.com/bcherny">@bcherny</a>）は固定コメントで、redact-thinkingは<em>UIのみの変更</em>であり、<em>thinking自体やthinking予算、内部での拡張推論の仕組みに影響を与えない</em>と述べ、<code>showThinkingSummaries: true</code>のオプトアウトを案内した。このissueは同日、<a href="https://news.ycombinator.com/item?id=47660925">Hacker News</a>のトップに達し、1,364ポイント、753コメントを集めた。LaurenzoはNDAに縛られ、Anthropicの対応を見て<em>判断を保留</em>すると述べた。',
    "報告書は、ある意味で被告自身によって書かれた。LaurenzoはClaude Opus 4.6に自らのセッションログを分析させた。issueには、モデルが一人称の反省的なメモを含んでおり、<em>自分のRead:Edit比が6.6から2.0に下がっているのがわかる</em>、そして<em>自分の出力について「それは怠慢で間違っていた」と書いている自分がいる</em>と観察している。4月7日、開発者Om Patelによる67%低下という別の拡散した主張には方法論的懐疑が向けられた。研究者Paul Calcraftは、比較が最初は6タスクに対し再テストでは30タスクを使ったものであり、共有タスクでは数値が87.6%から85.4%に動いたと指摘し、システミックな劣化というよりノイズを示唆した。対照的に、Laurenzoの分析は1月30日から4月1日までの一貫したデータに基づいていた。",
    'Anthropicの<a href="https://www.anthropic.com/engineering/april-23-postmortem">2026年4月23日のポストモーテム</a>は、3つの別々のプロダクト層の回帰を認めた。推論労力のデフォルトをhighからmediumに下げた変更（3月4日〜4月7日）、アイドルセッションごとに一度だったはずの推論コンテキストを毎ターンクリアしてしまうキャッシュバグ（3月26日〜4月10日、v2.1.101で修正）、そしてevalスコアを約3%低下させたシステムプロンプトの簡潔性指示（4月16日〜20日）だ。キャッシュバグは特に、<em>複数の人間および自動化されたコードレビュー、ユニットテスト、エンドツーエンドテスト、自動検証、ドッグフーディングを通過した</em>。Anthropicは4月23日にすべての加入者の利用上限をリセットした。Laurenzoは症状を正しく特定していたが、Anthropicは当初その特定の帰因を否定した。同社は最終的に、彼女が名指ししたものとは別の3つの原因による実際の回帰が存在したことを認めた。',
    '4月11日、Xユーザー<a href="https://x.com/Hesamation">@Hesamation</a>がLaurenzoの分析のスクリーンショットを投稿し、散らばっていた「Claudeが愚かになった」という感情を単一のデータ検証された参照点にまとめ上げた。Laurenzoは、<em>私のチームの上級エンジニア全員が同様の経験/逸話を報告している</em>と述べた。この事件はその構造の面で注目に値する。主要ベンダーのツールが、主要半導体メーカーのシニアエンジニアによって、そのツール自身の出力を使って故障と診断され、その診断報告書がツール自身が起草したものであり、ベンダーが複数の内部セーフガードが複数の別々の劣化を捉え損ねていたことを認めるに至った。',
  ],
  receipts: [
    "報告書で分析された6,852個のセッションJSONLファイルと234,760回のツールコール。",
    "Read:Edit比は6.6から2.0へ低下し、編集前の調査が70%減少。",
    "Stop-hook違反は3月8日から3月下旬にかけて0から173へ増加。",
    "3月は2月に比べAPIリクエストを80倍、出力トークンを64倍消費し、結果は劣化。",
    "自らを告発する報告書は、Claude Opus 4.6が自らのログを分析して作成した。",
    "Anthropicは、Laurenzoが指摘した1つのUI変更ではなく、3つの別々のプロダクト変更が劣化を引き起こしたと認めた。",
  ],
  reactions: [
    {
      platform: "github",
      author: "stellaraccident",
      meta: "issue #42796を立てたAMDディレクターのコメント",
      quote:
        "これは非常に深刻な回帰だ。私たちは皆、Anthropicがどう対処するか注視している。結局のところ、エンジニアリングツールの信頼できるパートナーが必要だ—それはエージェントにも、エージェントの製造元にも等しく当てはまる…半年前、Claudeは推論品質と実行力の点で独壇場だった。しかし他の選択肢も、非常に注意深く観察し評価する必要がある。Anthropicは、かつてOpusが占めていた能力ティアにおいて、決して一人ではいない。",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "eljojo",
      meta: "GitHub issueコメント",
      quote:
        "信じられない分析だ。ユーザーとして、ここ数週間これを経験していて、どこがおかしいのか指を止められなかった。`Research-First → Edit-First`の指摘が印象に残った。気づかないうちに、これに対抗するためだけにCLAUDE.mdをいじりまわしていた。",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "gbaraldi",
      meta: "GitHub issueコメント",
      quote:
        "おそらく同種のコードベース（LLVM/MLIR/コンパイラ全般）で働いている。`ここで止めるのにちょうどいい`という判定の多さに苛立った。何十回も無駄なコミットをして、全体として「頭が悪くなった」と感じた。",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "benvanik",
      meta: "GitHub issueコメント",
      quote:
        "もちろんのことながら、ログを公開はしないが、thinking編集が何を引き起こすか示すのに役立つなら、企業チャネル経由でAnthropicに送付した。まだ自動削除されていないなら、誰もが自分のログを確認することを強く勧める—read:edit比は最大の手がかりの一つだ。",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
    {
      platform: "github",
      author: "nukeop",
      meta: "GitHub issueコメント、AI生成の報告書について",
      quote: "このAIスロップの壁は何だ？",
      url: "https://github.com/anthropics/claude-code/issues/42796",
    },
  ],
  images: [
    {
      src: "/events/amd-regression-report/slack-screenshot.png",
      alt: "GitHub issueに投稿されたClaude Codeの品質劣化に関するSlackメッセージのスクリーンショット",
      caption:
        "コメント投稿者がissueスレッドに埋め込んだ職場Slackのメッセージ。同僚が独立してClaudeの劣化に気づいた瞬間を語っている。出典：GitHub issue #42796。",
      sourceUrl: "https://github.com/anthropics/claude-code/issues/42796",
      width: 1168,
      height: 596,
    },
  ],
  aftermath:
    "4月23日のポストモーテム時点で、Anthropicは推論労力の低下、キャッシュバグ、簡潔性指示のすべてを巻き戻したと述べ、キャッシュ修正はv2.1.101で出荷され、すべての加入者の利用上限がリセットされた。Laurenzoのチームは競合プロバイダに留まった。残る遺物は、AIコーディングツールをそのツール自身のログを使って診断し、そのツール自身が書いたバグレポートが、ツール自身に対するものとなったという報告書である。",
};
