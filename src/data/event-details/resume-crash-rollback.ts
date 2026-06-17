import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "resume-crash-rollback",
  deck: "2026年4月25日、AnthropicはJavaScriptランタイムエラー「g9H is not a function」によって<code>--resume</code>または<code>--continue</code>で再開されたセッションがすべてクラッシュしたため、<code>Claude Code v2.1.120</code>をロールバックした。新規セッションは空のメッセージから始まるため無条件コールバックが発火せず、このバグは生き延びていた。",
  body: [
    "01:45 UTC、Anthropicのステータスページに<a href=\"https://status.claude.com/incidents/zqsk02ryfmrd\">『Claude Code v2.1.120 起動時クラッシュ』</a>というインシデントが記録された。今回のアップデートはREPLにバグをもたらした。再開されたセッションにメッセージが含まれると無条件に呼ばれるはずの<code>useEffect</code> <code>onSessionRestored</code>があったが、そのコールバックを提供するフック<code>FXK</code>は<code>useMemo(() =&gt; false, [])</code>で<code>disabled</code>にハードコードされ、関数自体を省略していた。新規ユーザーには何も起きなかった。過去の作業に戻ったユーザーのみがクラッシュに遭遇した。",
    'エラーは難読化されたJavaScriptランタイム例外として発生した。<code>ERROR g9H is not a function. (In "g9H(K)", "g9H" is undefined)</code>、発生箇所は<code>/$bunfs/root/src/entrypoints/cli.js:9251:5663</code>。難読化されたシンボルはビルドごとに<code>g9H</code>、<code>FKH</code>、<code>g78</code>、<code>UKH</code>と変わったが、障害は<a href="https://github.com/anthropics/claude-code/issues/53093">macOS arm64、Linux Ubuntu、Windows 11のネイティブnpm、WSL</a>で一貫していた。コミュニティメンバーは、オプショナルチェーン<code>g9H?.(K)</code>、または無効化されたフックにno-opを返させることを提案した。',
    "即座の回避策として、ユーザーは<code>claude --new</code>を実行した後、REPL内から<code>/resume &lt;session-id&gt;</code>を実行すればよかった。これはクラッシュを迂回する2段階の回り道である。代表的なバグ報告である<a href=\"https://github.com/anthropics/claude-code/issues/53041\">issue #53041</a>には14件のコメントと19件のリアクションが集まり、関連issue 3件（回避策の#53086、Windowsの#53093、修正提案の#53568）はすべて重複としてクローズされた。",
    "Anthropicは02:35 UTCに自動アップデート機構を作動させてクライアントを<code>v2.1.119</code>にロールバックすることで事態を収束させ、手動では<code>claude install 2.1.119</code>がフォールバックとなった。ロールバックはどこでもスムーズではなかった。一部のWindowsユーザーは、<code>v2.1.120</code>が公開チャネルには到達していないにもかかわらず、バイナリ内蔵の自動アップデーターによって強制インストールされたと報告した。npmの<code>latest</code>は<code>2.1.118</code>のままで、GitHub Releasesには<code>2.1.119</code>が表示されていたという状況だった。また、ドキュメント化された無効化フラグ<code>DISABLE_AUTOUPDATER=1</code>と<code>DISABLE_UPDATES=1</code>が無視されたとの報告もあった。",
    "<a href=\"https://gist.github.com/yurukusa/a866b4cd2976486156a00c190c39cef6\">コミュニティの『Survival Checklist』gist</a>は、<code>v2.1.119</code>と<code>v2.1.120</code>が2026年4月24日の24時間以内に出荷され、合計8つのリグレッションを抱えていたと記録した。壊れた自動アップデーター、<code>claude-opus-4-7</code>を100万トークンコンテキスト版に静かに振り分けるモデル差し替え、UI重複バグ、WSL2フリーズ、そして2種類の再開時クラッシュである。このgistは<code>v2.1.117</code>へのロールバックを推奨していた。関連するmacOS特有のissue <a href=\"https://github.com/anthropics/claude-code/issues/53085\">#53085</a>も浮上した。再開したセッションが、sandbox.enabledをfalseに設定していても『sandbox required but unavailable』で失敗するというもので、<code>v2.1.119</code>では発生しなかった。",
    "修正は3日後の<code><a href=\"https://www.claudeupdates.dev/version/2.1.121\">Claude Code v2.1.121</a></code>（2026年4月28日リリース）に届いた。これは39件の変更からなる『安定化パス』の一部で、おおよそ46%がバグ修正だった。リリースノートには『外部ビルドでの--resume起動時クラッシュを修正』が、3件の数GB規模のメモリリーク修正と並んで記載された。",
  ],
  receipts: [
    "2026年4月25日01:45 UTCにステータス更新が投稿され、02:35 UTCに自動アップデートでv2.1.119へのロールバックが完了した。",
    "難読化されたエラーシンボルはビルドごとに異なり、g9H、FKH、g78、UKHが確認された。",
    "Issue #53041には14件のコメントと19件のリアクションがつき、関連Issue 3件が重複としてクローズされた。",
    "Survival Checklistのgistは、v2.1.119とv2.1.120の24時間以内に出荷された8つのリグレッションを記録している。",
    "2026年4月28日にリリースされたv2.1.121には39件の変更が含まれ、うち約46%がバグ修正だった。",
  ],
  reactions: [
    {
      platform: "github",
      author: "wolffiex",
      meta: "Claude Codeメンテナー / issue担当、2026年4月25日 01:27 UTC",
      quote: "ごめんなさい!!! 2.1.119にロールバックしてください。ポインターを戻しています。",
      url: "https://github.com/anthropics/claude-code/issues/53041",
    },
    {
      platform: "github",
      author: "wolffiex",
      meta: "Claude Codeメンテナー、2026年4月25日 03:17 UTC",
      quote:
        "自動アップデーターは今頃動作しているはずです。まだ問題がある場合は教えてください",
      url: "https://github.com/anthropics/claude-code/issues/53041",
    },
    {
      platform: "github",
      author: "Jolley71717",
      meta: "#53041の元報告者；issueは19リアクション、14コメントを集めた",
      quote:
        'Printモード（claude -p --resume <id> "…"）では同じセッションファイルで正常に動作するため、セッションデータ自体は健全だ。バグは対話型REPLのマウントパスだけにある。',
      url: "https://github.com/anthropics/claude-code/issues/53041",
    },
    {
      platform: "github",
      author: "ron1236",
      meta: "Windowsネイティブインストーラー報告、重複としてクローズ",
      quote:
        "クラッシュはセッションUIの読み込み前に発生する。過去のメッセージがあるセッションで必ず起きる。セッション名やプロジェクトは関係ない。",
      url: "https://github.com/anthropics/claude-code/issues/53093",
    },
    {
      platform: "github",
      author: "andromeda-vinicius",
      meta: "2026-04-26に投稿されたWindows 11（Git Bash）報告、重複としてクローズ",
      quote: "2.1.120でclaude --resumeが「FKH is not a function」でクラッシュする",
      url: "https://github.com/anthropics/claude-code/issues/53568",
    },
  ],
  images: [
    {
      src: "/events/resume-crash-rollback/issue-53041.png",
      alt: "2.1.120の再開クラッシュに関するclaude-code #53041のGitHub issueカード",
      caption:
        "v2.1.120再開クラッシュの代表的なバグ報告であるIssue #53041について、GitHubが自動生成したソーシャルカード。タイトル、クローズ済みステータス、リアクション数とコメント数が表示されている。Credit: GitHub。",
      sourceUrl: "https://github.com/anthropics/claude-code/issues/53041",
      width: 1200,
      height: 600,
    },
    {
      src: "/events/resume-crash-rollback/issue-53093.png",
      alt: "2.1.120再開クラッシュのWindows版に関するGitHub issueカード",
      caption:
        "v2.1.120再開クラッシュのWindowsネイティブインストーラー報告であるIssue #53093（「FKH is not a function」）についてのGitHubソーシャルカード。後に#53041の重複としてクローズされた。Credit: GitHub。",
      sourceUrl: "https://github.com/anthropics/claude-code/issues/53093",
      width: 1200,
      height: 600,
    },
  ],
  aftermath:
    "v2.1.121以降のClaude Codeユーザーは、未定義の難読化コールバックに悩まされることなくセッションを再開できる。ただし、2つの連続バージョンで8つのリグレッションを生み出した24時間は、自動リリースのスピードが帰ってきたユーザーをREPLが処理する能力を上回りうるという好例として残る。",
};
