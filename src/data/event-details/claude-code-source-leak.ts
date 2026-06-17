import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claude-code-source-leak",
  deck: "Anthropic は 59.8 MB のソースマップを同梱して出荷し、Claude Code を約 50万行の TypeScript に逆コンパイル可能にした。同社は顧客データの流出がないと強調したが、それは「被害がなかった」とは違う。",
  body: [
    '2026年3月30〜31日、Anthropic は <code>@anthropic-ai/claude-code</code> バージョン 2.1.88 を公開 npm レジストリに公開したが、59.8 MB の JavaScript ソースマップが同梱されていた。<code>.map</code> ファイルは本番の縮小コードを約 1,906ファイル、51万2,000〜51万3,000行の難読化されていない TypeScript にマッピングしており、事実上、アプリと一緒に読みやすい設計図を出荷したことになる。<a href="https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak">Zscaler</a> はこの露呈の規模を指摘した。',
    'セキュリティ研究者の Chaofan Shou（<a href="https://x.com/Fried_rice/status/2038894956459290963">@Fried_rice</a>）は2026年3月31日に X で漏洩を公開。npm レジストリの map ファイル経由で Claude Code のソースが漏れたと書き、投稿は 2,800万回以上の閲覧を集めた。数時間以内に、漏洩したコードベースは GitHub にミラーされ、再構築されたリポジトリは 8万4,000 stars と 8万2,000 forks を超えた。<a href="https://cybernews.com/tech/claude-code-leak-spawns-fastest-github-repo/">Cybernews</a> は、それが GitHub 史上成長速度最速のリポジトリの一つだと伝えた。',
    '約 51万2,000行を整理したアナリストは、未発表機能の機能フラグが約 44個あると特定した。中には永続的な自律型バックグラウンドエージェント「KAIROS」、18種類のバリエーションを持つたまごっち風ターミナルペット「BUDDY」、最大30分間続くリモート Opus 4.6 計画セッション「ULTRAPLAN」、Voice Mode、Bridge Mode、Multi-Agent Coordinator Mode などが含まれる。<a href="https://www.zscaler.com/blogs/security-research/anthropic-claude-code-leak">アナリスト</a>は、競合モデルの学習を妨害するため偽ツールを注入するアンチ蒸留モードや、暗号化請求ヘッダーによるクライアント証明も発見した。',
    "また、<code>wtf|ffs|shit</code> などの文字列にマッチする正規表現に依存した感情・フラストレーション検出器も含まれていた。コーディングアシスタントは、心理的なニュアンスはともかく、語彙的には正確にユーザーイライラを測定する準備ができていたようだ。",
    '根本原因は複合的なパッケージングミスだった。<a href="https://github.com/oven-sh/bun/issues/28001">Bun issue #28001</a> では、<code>development: false</code> が明示的に設定されていてもバンドラーがソースマップを生成する挙動が追跡されている。Anthropic はさらに <code>.npmignore</code> または <code>package.json</code> の <code>files</code> フィールドで <code>*.map</code> を除外せず、59.8 MB の地図資料を公開前に検出する CI チェックや手動レビューも行わなかった。リポジトリ管理を目的とした AI コーディングツールが、自分のリポジトリを監査できなかった。',
    'Anthropic の公式声明は<a href="https://officechai.com/ai/claude-code-leak-was-human-error-no-one-was-fired-claude-code-creator-boris-cherny/">この事件を</a>「セキュリティ侵害ではなく、人為的ミスによるリリースパッケージングの問題」と位置づけ、「機密性の高い顧客データや認証情報が関与または流出していない」と付け加えた。同社はその後、ミラーを抑止するための著作権削除要請を開始し、<a href="https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/">約 8,100のリポジトリに誤って影響</a>した後、<a href="https://www.techradar.com/ai-platforms-assistants/claude/the-irony-is-rich-anthropic-issues-copyright-takedown-requests-in-attempt-to-stem-claude-code-leak">1つのリポジトリと 96のフォークに範囲を縮小</a>した。AI に著作権素材を学習させることがフェアユースだと主張する企業が、自社の知的財産が自由に流通することにはそれほど寛容ではなかった。',
  ],
  receipts: [
    "漏洩した .map ファイルは 59.8 MB で、約 1,906ファイル、51万2,000〜51万3,000行の TypeScript にマッピングされた。",
    "2026年3月31日の @Fried_rice による開示投稿は 2,800万回以上の閲覧を集めた。",
    "再構築された GitHub リポジトリは 8万4,000 stars と 8万2,000 forks を超えた。",
    "コードベースには約 44個の機能フラグが露出し、18種類のバリエーションを持つたまごっち風ターミナルペットも含まれた。",
    "漏洩したコードにはアンチ蒸留モードや <code>wtf|ffs|shit</code> などにマッチする感情検出器も含まれていた。",
    "Bun issue #28001 では、<code>development: false</code> でもバンドラーがソースマップを生成する挙動が文書化されている。",
  ],
  reactions: [
    {
      platform: "x",
      author: "Chaofan Shou (@Fried_rice)",
      meta: "Original disclosure post; 28M+ views",
      quote: "Claude Code のソースコードが npm レジストリの map ファイルから漏れている！",
      url: "https://x.com/Fried_rice/status/2038894956459290963",
    },
    {
      platform: "x",
      author: "Alex Volkov (@altryne)",
      meta: "Reaction praising Boris Cherny's handling",
      quote:
        "Claude Code 創業者の Boris Cherny は、企業がやるべきことを正確にやっている。冷静でオープンな対応。これは @bunjavascript の問題ではなく、開発者のミスだ。AI エージェントではなく、人間の開発者の。",
      url: "https://x.com/altryne/status/2039169550122692608",
    },
    {
      platform: "hackernews",
      author: "treexs",
      meta: "Top comment on the main leak thread (2,095 points)",
      quote:
        "Anthropic にとって最大の損失は、機能フラグ経由で製品ロードマップが暴露されたことだ。大きなものの一つは、未発表の 'assistant mode'、コードネーム kairos だ。",
      url: "https://news.ycombinator.com/item?id=47584540",
    },
    {
      platform: "hackernews",
      author: "mdavid626",
      meta: "Comment on the 'Claude Code Unpacked' thread (1,128 points)",
      quote: "どうやって 50万行もあるんだ？",
      url: "https://news.ycombinator.com/item?id=47597085",
    },
    {
      platform: "hackernews",
      author: "jruohonen",
      meta: "Comment on the 'Claude Code Unpacked' visual guide thread",
      quote:
        "来週の授業で使わせてもらう（やってはいけない例として）。BashTool.ts :D でも全体的に、またしても皇帝に新衣はないってことだよな。",
      url: "https://news.ycombinator.com/item?id=47597085",
    },
    {
      platform: "hackernews",
      author: "AnimalMuppet",
      meta: "In the 'undercover mode' / fake tools thread (1,376 points), on the feature that hides AI authorship",
      quote: "嘘をつく相手とはビジネスをしない。",
      url: "https://news.ycombinator.com/item?id=47586778",
    },
  ],
  images: [],
  aftermath:
    "2026年4月初め現在、Anthropic は機密性の高い顧客データや認証情報が流出していないと主張し続けている。これは最も狭義の質問に答えている。しかし、ミラーはすでに 8万4,000 stars と 8万2,000 forks を集めており、その後の著作権削除キャンペーン——短いものだったが——は、同社の「自由に利用可能なコードへのコミットメント」が、自社のコードが対象になるまでしか持続しないことを示唆している。漏洍を助長したバンドラーの挙動は、まだ Bun issue #28001 に文書化されており、同じミスを繰り返したくない出版社向けの参考になっている。",
};
