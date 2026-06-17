import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "cache-ttl-regression",
  deck: "2026年2月から3月初旬にかけて33日連続でClaude Codeは1時間のプロンプトキャッシュを維持していたが、その後静かに5分に後退し、119,866回のAPIコールのデータセットが、AnthropicがGitHubで応答する前に、claude-sonnet-4-6で合計949.08ドル、claude-opus-4-6で1,581.80ドルの過払いを示した。",
  body: [
    '2026年2月1日から3月5日まで、Claude Codeは33日連続で1時間のプロンプトキャッシュTTLを維持したが、その後ウィンドウは静かに5分に崩壊した。GitHubユーザー@seanGSISGは、LinuxワークステーションとWindowsラップトップから収集した119,866回のAPIコールを<a href="https://github.com/anthropics/claude-code/issues/46829">issue #46829</a>で文書化し、4つの異なる段階を特定した。最初の1月の5分キャッシュのみの期間、2月の安定ウィンドウ、3月6日の短い移行期間、そして3月8日までに5分トークンがキャッシュ作成の83%を占めた4月11日までの最終期間だ。',
    "請求への影響は直接的だった。3か月で約2億2000万トークンが5分ティアに書き込まれ、57億回のキャッシュ読み出しを生んだ。Sonnetではキャッシュ書き込みコストが読み出しの12.5倍なので、5分以上の休止が入ると、安い読み出しではなく高価な再作成が強制された。統合データセットは、claude-sonnet-4-6で<strong>949.08ドル</strong>、claude-opus-4-6で<strong>1,581.80ドル</strong>の過払いを示し、両方のケースで17.1%の浪費率を反映した。Sonnetの月次浪費は2月の1.1%から3月には25.9%、4月には14.8%に急増した。",
    'ユーザーは自分のコードからこの変化を検出する術がなかった。リクエストボディ自体は変更されていない。<code>cache_control</code> type <code>ephemeral</code>は以前は1時間を生み出していたが、今は5分を生み出す。元のTTLを復元するには、明示的に<code>ttl 3600</code>を追加するか、APIキーで<code>ENABLE_PROMPT_CACHING_1H=1</code>を設定する必要があった。<a href="https://dev.to/recca0120/verify-whether-your-claude-code-uses-5m-or-1h-cache-ttl-with-60-lines-of-python-4548">1つの分析</a>は、Claudeのサブスクリプションは自動的に1時間ウィンドウを要求するが、加入者がプラン上限を超えて利用クレジットを使い始めると5分に落ちると指摘した。このタイミングは、影響を受けたユーザーが初めてクォータに達したと報告した時期と一致した。',
    'Anthropicは<a href="https://www.xda-developers.com/anthropic-quietly-nerfed-claude-code-hour-cache-token-budget/">4月12日</a>までGitHubでコメントしなかった。これは4月2日と3日に変更がユーザーに展開され始めてからおよそ10日後だった。その頃までに、1人のRedditユーザーはClaude Codeの日次コストが6.28ドルから15.54ドルに上昇し、この軌道では月額277.80ドル増加すると文書化していた。また、日次キャッシュ破棄は39から199に増加し、およそ5倍になった。',
    "このissueは<code>bug</code>と<code>has repro</code>のラベルが付けられたが、最終的に<a href=\"https://github.com/anthropics/claude-code/issues/46829\">Closed as not planned</a>となった。recca0120による2回目の監査は、その後95日間のネイティブセッションログをスキャンし、4月9日から始まる別の回帰を発見した。これは4,840回のAPIコールにわたり5日連続で、サブエージェントが100%5分TTLにロックされていたが、メインエージェントは1時間のままだった。AnthropicのエンジニアJarred Sumnerはその設定を擁護し、<em>「サブエージェントの5分はワンショットコールにとって安い」</em>、そして<em>「Claude Codeのリクエストのかなりの割合は、キャッシュされたコンテキストが一度だけ使われるワンショットコールだ」</em>と述べた。一方、Claude Codeの創造者Boris Chernyは関連issueで、メインエージェントに1時間のウィンドウがあることを確認する固定返信を投稿したが、その保証がすべての加入者に適用されるかどうかは明確にしなかった。",
    '別のプロジェクト<a href="https://github.com/cnighswonger/claude-code-cache-fix">claude-code-cache-fix</a>は、再開時に予想の0.50ドルではなく時間あたり5〜10ドルを消費するセッションを報告し、最初のウォームターンでキャッシュヒット率95.5%に対し、直接実行は82.3%を測定した。そのような介入なしでは、1万トークンのサンプルシステムプロンプトを1時間あたり100回コールする場合、1時間TTLでは月額約15ドル、5分TTLでは月額約1,500ドルと推定され、チェンジログなしに100倍の増加が訪れた。',
  ],
  receipts: [
    "claude-sonnet-4-6で文書化された過払い949.08ドル、claude-opus-4-6で1,581.80ドル。",
    "2台の独立したマシンで119,866回のAPIコールが回帰を証明するために使用された。",
    "2026年3月のSonnet浪費率25.9%、2月の1.1%から上昇。",
    "Jarred Sumnerは、ワンショットコールでは5分のサブエージェントTTLの方が安いと擁護した。",
    "1人のユーザーの日次キャッシュ破棄は39から199に急増し、およそ5倍になった。",
    "issue #46829はbug、has repro、area:costなどのラベルの後、Closed as not plannedとなった。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "sscaryterry",
      meta: "HNスレ『Anthropic downgraded cache TTL on March 6th』（552ポイント、420コメント）",
      quote:
        "Anthropicはあまりにも多くの証拠を残している…損害とパターンを証明するのが容易になりつつある",
      url: "https://news.ycombinator.com/item?id=47736476",
    },
    {
      platform: "hackernews",
      author: "cassianoleal",
      meta: "HNスレ、issueタイトルの5M/5m表記について",
      quote:
        "分のSI記号は『min』で、『M』ではない。妥協案としてはOP表記の『m』を使うことだ。",
      url: "https://news.ycombinator.com/item?id=47736476",
    },
    {
      platform: "github",
      author: "EGreg",
      meta: "関連するPro/Maxクォータ枯渇issue #45756でのコメント",
      quote: "Boris、KVキャッシュのTTLは1時間から5分に短縮されたのか？",
      url: "https://github.com/anthropics/claude-code/issues/45756",
    },
    {
      platform: "github",
      author: "Jarred Sumner (Anthropic)",
      meta: "Anthropicエンジニアによる5分サブエージェントTTLの擁護",
      quote: "サブエージェントの5分はワンショットコールにとって安い",
      url: "https://github.com/anthropics/claude-code/issues/46829",
    },
  ],
  images: [],
  aftermath:
    'リポジトリは<a href="https://github.com/anthropics/claude-code/issues/46829">issue #46829</a>をClosed as not plannedのままにしており、AnthropicエンジニアJarred Sumnerの5分サブエージェントTTL擁護が最も公式に近い説明として残り、クォータ枯渇が短縮されたキャッシュ存続期間を引き起こす場合にユーザーに通知するという公的な約束はなされなかった。',
};
