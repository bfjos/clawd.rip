import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "github-dmca-takedowns",
  deck: "Anthropicは、自社のソースコード流出をなかったことにしようとDMCA通知を出した結果、およそ8,100のGitHubリポジトリが無効化された。大半にはその漏洩物は含まれていなかった。",
  body: [
    '2026年3月31日、AnthropicはClaude Codeのnpmパッケージv2.1.88を公開した際、縮小されていないソースマップ——約59.8 MBのJavaScriptファイルで、約1,900ファイルにわたる約512,000行のTypeScriptソースを露出させていた——を同梱し、事実上、<code>npm install</code>を実行した誰にでもクローズドソースツールの内部を届けてしまった。セキュリティ研究者の<a href="https://decrypt.co/362917/anthropic-accidentally-leaked-claude-code-source-internet-keeping-forever">Chaofan Shou</a>がこの流出に気づき、公表した。それを受けてAnthropicは、<a href="https://www.techradar.com/ai-platforms-assistants/claude/the-irony-is-rich-anthropic-issues-copyright-takedown-requests-in-attempt-to-stem-claude-code-leak">「人的ミスによるリリースパッケージングの問題であり、セキュリティ侵害ではない」</a>と説明し、顧客データは流出していないと確認した。ただし、同じことがコードベースについても言えるわけではなかった。',
    '同社の対応は、同日、GitHubにDMCA取り下げ通知を提出することだった。対象はAnthropic自身の公開Claude Codeリポジトリに繋がるフォークネットワークの一部だったが、GitHubは通知をネットワーク全体で処理し、<a href="https://www.prismnews.com/hobbies/retro-game-emulation/anthropics-overbroad-dmca-takedown-briefly-nuked-8100">およそ8,100のリポジトリ</a>へのアクセスを無効化した。無効化されたものの中には、漏洩したソースコードを一切含まない——編集されたスキルやサンプル、ドキュメントだけの——Anthropicの公開リポジトリの正当なフォークも含まれていた。これは、治療よりも処方箋の方がやや広範囲だったことを示唆している。',
    '一つの集計によると、この一連の取り下げは合計で約8,150件発生し、そのうち漏洩ソースをホストしていた有効なリポジトリは約150件で、残りの約8,100件は無効だったという。アクセスは<a href="https://www.prismnews.com/hobbies/retro-game-emulation/anthropics-overbroad-dmca-takedown-briefly-nuked-8100">約24時間以内に復旧</a>したが、この行動はCIパイプラインを混乱させ、配布リンクを破壊し、ネットワーク全体で開発者のアクセスを凍結した。',
    '2026年4月1日、Anthropicは<a href="https://github.com/github/dmca/blob/master/2026/04/2026-04-01-anthropic-retraction.md">部分的撤回</a>を提出し、1つ指名されたリポジトリ——<code>github.com/nirholas/claude-code</code>——と元の申告書に個別に列挙された96のフォークURLを除くすべてのリポジトリについて通知を取り下げた。Claude Code責任者のBoris Chernyは、<a href="https://piunikaweb.com/2026/04/01/anthropic-dmca-claude-code-leak-github/">過剰対応は偶然だったと認め</a>、「これは意図的なものではない。GitHubと共に修正に取り組んでいる」と述べた。また、「デプロイプロセスにはいくつか手作業のステップがあり、そのうちの1つを正しく実行しなかった」と説明したが、この説明は流出に対しても、その後の法的書類に対しても等しく当てはまるように聞こえる。',
    'テックニュースレター作者の<a href="https://piunikaweb.com/2026/04/01/anthropic-dmca-claude-code-leak-github/">Gergely Oroszはこの一連を「DMCAの乱用」と呼び</a>、「著作権を侵害しないものに対してDMCA取り下げ通知を出すのは、法的にも倫理的にも許容できない」と指摘した。コメンテーターたちはまた、タイミングが気まずかったことにも注目した。Anthropicは、<a href="https://www.techradar.com/ai-platforms-assistants/claude/the-irony-is-rich-anthropic-issues-copyright-takedown-requests-in-attempt-to-stem-claude-code-leak">Claudeの学習のために海賊版にされた著者たちの訴えを和解するために15億ドルを支払うことに同意してから約1年後</a>に、自社コードの著作権を執行していた。この対比は同社に追加コストを生じさせるものではなかったが、大きな見かけ上のコストを生んだ。',
    '取り下げは流出の封じ込めにも失敗した。開発者たちは素早く他言語でクリーンルームの書き直しを行い、韓国の開発者Sigrid JinによるPython版<code>claw-code</code>は数時間以内に数万のスターを獲得した。<a href="https://ipkitten.blogspot.com/2026/04/the-claude-code-leak-that-spurred-8100.html">法的観察者らは</a>、そのようなプロジェクトは新しい創作物としてDMCAの対象外になると主張した。<a href="https://ipkitten.blogspot.com/2026/04/the-claude-code-leak-that-spurred-8100.html">IPKat法律ブログ</a>は、2025年に2,661件のDMCA通知が47,288のリポジトリに影響を与えていたことに言及し、著作権法がAI生成コードの紛争に適しているかどうか疑問視した。Anthropicは、自社の財産に対してのみ、その問いに肯定的な答えを出したように見える。',
  ],
  receipts: [
    "ソースマップは約59.8 MBで、約1,900ファイルにわたる約512,000行のTypeScriptを露出させた。",
    "取り下げにより約8,100のリポジトリが無効化された。有効な対象は約150件だけだった。",
    "Anthropicの部分的撤回により、指名された1つのリポジトリと個別に列挙された96のフォークだけが免れた。",
    "Gergely Oroszは、「著作権を侵害しないものに対してDMCA取り下げ通知を出すのは、倫理的にも法的にも許容できない」と述べた。",
    "Sigrid JinのPython版claw-codeを含むクリーンルームの書き直しは、数時間以内に数万のGitHubスターを集めた。",
    "Anthropicは、Claudeの学習に海賊版化された書籍を巡る著者たちの請求を和解するために、最近15億ドルの支払いに同意していた。",
  ],
  reactions: [
    {
      platform: "x",
      author: "Theo - t3.gg (@theo)",
      meta: "Xの投稿。本人が報告した初めてのGitHub著作権ストライクとされる。",
      quote:
        "Anthropicが俺のClaude CodeフォークにDMCAをぶち当てた。……フォークにはClaude Codeのソースなんて入っていない。数週間前にスキルを編集したPR用のものだけだ。まったく情けない。",
      url: "https://x.com/theo/status/2039411851919057339",
    },
    {
      platform: "x",
      author: "Gergely Orosz (@GergelyOrosz)",
      meta: "Xの投稿",
      quote:
        "これは天才的とも恐ろしいとも言える。Anthropicが誤ってClaude CodeのTypeScriptソースコード（クローズドソースだ）を流出させた。ソースを共有するリポジトリはDMCAで削除されている。しかし、このリポジトリはPythonでコードを書き直しているため、著作権を侵害せず、取り下げられない！",
      url: "https://x.com/GergelyOrosz/status/2038985760175505491",
    },
    {
      platform: "x",
      author: "Chaofan Shou (@Fried_rice)",
      meta: "最初の漏洩開示投稿。約1,600万ビューと報じられている。",
      quote: "Claude Codeのソースコードが、npmレジストリのマップファイルを経由して流出した！",
      url: "https://twitter.com/Fried_rice/status/2038894956459290963",
    },
    {
      platform: "hackernews",
      author: "cg505",
      meta: "Claude Codeフォーク取り下げに関するHNスレッドの投稿者。item 47594936",
      quote:
        "5月以来手をつけていない私のフォークにDMCA通知が届いた。もちろん、漏洩したソースコードは含まれていなかった。",
      url: "https://news.ycombinator.com/item?id=47594936",
    },
    {
      platform: "hackernews",
      author: "sva_",
      meta: "item 47594936へのHNコメント",
      quote: "自分には著作権、おまえにはなし",
      url: "https://news.ycombinator.com/item?id=47594936",
    },
    {
      platform: "hackernews",
      author: "verdverm",
      meta: "item 47594936へのHNコメント",
      quote:
        "手遅れだ。人々はすでにローカルに持っている。GitHubがAnthropicの言いなりになれば、他のソースフォージに出てくるだろう。",
      url: "https://news.ycombinator.com/item?id=47594936",
    },
  ],
  images: [],
  aftermath:
    'Anthropicは後に、<a href="https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/">GitHubが影響を受けたフォークへのアクセスを復旧させた</a>と述べた。だがこの事件は、同社がIPO準備を進めていると報じられていた時期に発生し、手作業のデプロイ工程や偶発的な法的無差別爆撃が通常招かないコンプライアンスと株主訴訟への懸念を巻き起こした。一方、ソースコードはさまざまな形で流通し続けており、その中にはインターネットを漂い続ける59.8 MBのJavaScriptファイルも含まれている。',
};
