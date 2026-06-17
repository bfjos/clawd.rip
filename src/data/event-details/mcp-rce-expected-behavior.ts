import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "mcp-rce-expected-behavior",
  deck: "OX Securityは、AnthropicのModel Context Protocolが全公式SDKで「先に実行、検証はしない」アーキテクチャを搭載していることを公表した。Anthropicの対応は、これが意図された動作だというものだった。",
  body: [
    '2026年4月15日、OX Securityは<a href="https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/">「The Mother of All AI Supply Chains」</a>を公開し、AnthropicのModel Context Protocolの中核にある体系的脆弱性を特定した。これは脆弱なMCP実装を実行するあらゆるシステムで任意コマンド実行を可能にする。欠陥は従来のコーディングバグではなく、Python、TypeScript、Java、Rustを含むAnthropicの公式MCP SDK全体に組み込まれたアーキテクチャ設計上の決定であり、MCP上に構築する開発者は知らずのうちにこのリスクを受け継いでいる。研究者のMoshe Siman Tov Bustan、Mustafa Naamnih、Nir Zadok、Roni Barは2025年11月からこの問題を調査しており、より早いLangFlowの開示は2026年1月11日に行われた。',
    '根本原因はMCPのSTDIOトランスポートであり、これはユーザー入力を直接コマンド実行にルーティングする。<a href="https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/">OXが論理を説明したとおり</a>、「任意のOSコマンドを実行できれば、STDIOサーバーの作成に成功すればハンドルが返される」——そして失敗しても、エラーが返される前にコマンドはすでに実行されている。これは「先に実行、検証はしない」パターンと呼べるだろう。これにより、攻撃者は機密性の高いユーザーデータ、内部データベース、APIキー、チャット履歴にアクセスできる。',
    'OXはこの曝露を<a href="https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/">1億5,000万以上のダウンロード</a>、7,000以上の公開アクセス可能サーバー、最大20万の脆弱なインスタンス、200以上の影響を受けるオープンソースプロジェクトと集計した。チームは有料顧客を抱える6つのライブ本番プラットフォームでコマンド実行に成功し、この単一の根本原因から10以上のHigh/Critical CVEを生み出した。概念実証ペイロードを11のMCPマーケットプレイスまたはディレクトリにアップロードしたところ、<a href="https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/">9つはセキュリティレビューなしに悪意のあるペイロードを公開した</a>。名前が挙がった影響プロジェクトには、<a href="https://thehackernews.com/2026/04/anthropic-mcp-design-vulnerability.html">915以上の公開アクセス可能なインスタンスが見つかった</a>LangFlowに加え、GPT Researcher、Flowise、Upsonic（CVE-2026-30625）、LiteLLM、Agent Zero、Bisheng、Langchain-Chatchat、Windsurf、DocsGPTがある。ゼロクリックのプロンプトインジェクション経路は、Cursor、Windsurf、Claude Code、Gemini-CLI、GitHub CopilotといったAI IDEで実証された。',
    'Anthropicはプロトコルのアーキテクチャを変更することを拒否した。<a href="https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/">同社はこの動作を「想定されたもの」</a>と呼び、STDIO実行モデルは「安全なデフォルトを表しており、サニタイゼーションは開発者の責任である」と述べ、悪用にはファイル変更の承認などの明示的なユーザー許可または行動が必要だと主張した。報告から1週間後、Anthropicは静かにセキュリティポリシーとドキュメントを更新し、STDIOアダプターへの注意を推奨するようになったが、研究者はこれはドキュメントだけの変更なので何も修正していないと述べた。AnthropicはThe Registerの問い合わせには答えなかった。',
    '下流プロジェクトは補償しようと試みた。<a href="https://venturebeat.com/security/mcp-stdio-flaw-200000-ai-agent-servers-exposed-ox-security-audit">Flowiseはコマンドをホワイトリスト化し特殊文字を除去する入力フィルタリングを実装した</a>が、OXは<code>npx</code>の<code>-c</code>フラグを使って1ステップで回避し、アーキテクチャが任意のサブプロセス実行を許可している限り、フィルタリングがその隙間を確実に塞ぐことはできないことを示した。<a href="https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/">OXは</a>「プロトコルレベルでの1つのアーキテクチャ変更が、すべての下流プロジェクト、すべての開発者、すべてのエンドユーザーを守ったはずだ」とし、「責任を実装者に移すことは、リスクを移すことにはならない。誰がリスクを作ったかを曖昧にするだけだ」と指摘した。',
    'ESETのセキュリティスペシャリストJake Mooreは、このジレンマをAI標準に組み込まれたトレードオフとして捉え、<a href="https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/">「機能性を損なわずに簡単には修正できない問題だ」</a>と述べ、現在のAI標準は「コントロールの前に能力」を念頭に作られていると語った。プロトコルは4つの公式SDKで元の形のまま出荷され続けており、アーキテクチャ上の決定はそのままで、サニタイゼーションは次に構築する誰かに委ねられている。',
  ],
  receipts: [
    "1億5,000万以上のダウンロードと、200以上のオープンソースプロジェクトにまたがる最大20万の脆弱なインスタンス。",
    "11のMCPマーケットプレイスに概念実証ペイロードをアップロードした。うち9つはセキュリティレビューなしに公開された。",
    "OXは6つのライブ本番プラットフォームでコマンドを実行し、10以上のHigh/Critical CVEを生み出した。",
    "LangFlow単独で915以上の公開アクセス可能インスタンスが見つかった。",
    "Flowiseのアプリケーション層フィルタは、npxの-cフラグを使って1ステップで迂回された。",
    "Anthropicはこの動作を「想定されたもの」と呼び、STDIOは「安全なデフォルトを表す」と述べた。",
  ],
  reactions: [
    {
      platform: "other",
      author: "Davi Ottenheimer (flyingpenguin)",
      meta: "セキュリティブロガー。OX報告書に関する意見記事",
      quote:
        "先に実行して、次に検証する。撃て、準備よし、照準——これはどんな脅威モデルでも失敗する。",
      url: "https://www.flyingpenguin.com/ox-security-report-anthropic-mcp-is-execute-first-validate-never/",
    },
    {
      platform: "other",
      author: "Davi Ottenheimer (flyingpenguin)",
      meta: "AnthropicのOX報告書に対する対応について",
      quote:
        "ドキュメントの変更だ。コードの変更ではない。脆弱性は、地雷を踏むようにあなたを待ち受けている。",
      url: "https://www.flyingpenguin.com/ox-security-report-anthropic-mcp-is-execute-first-validate-never/",
    },
    {
      platform: "other",
      author: "Davi Ottenheimer (flyingpenguin)",
      meta: "Anthropicのセキュリティ製品ポジショニングとの矛盾について",
      quote:
        "自社プロトコル内の任意コマンド実行を「想定された動作」と分類する企業に、あなたのコードの脆弱性を見つけてほしいなどと誰が思うだろうか。",
      url: "https://www.flyingpenguin.com/ox-security-report-anthropic-mcp-is-execute-first-validate-never/",
    },
    {
      platform: "news",
      author: "Jake Moore (ESET)",
      meta: "ESETグローバルサイバーセキュリティアドバイザー。TechTalksの引用",
      quote: "現在のAI標準は「コントロールの前に能力」を念頭に作られている。",
      url: "https://bdtechtalks.com/2026/04/20/anthropic-mcp-vulnerability/",
    },
    {
      platform: "other",
      author: "Jiten Oswal (Medium)",
      meta: "意見記事：「AnthropicのMCP設計上の欠陥はバグか、それとも機能か」",
      quote:
        "これを設計上の欠陥と見るか機能と見るかはともかく、エンドユーザーへのリスクは否定できない。",
      url: "https://medium.com/@jiten.p.oswal/the-200-000-server-question-is-anthropics-mcp-design-flaw-a-bug-or-a-feature-b120294f93a5",
    },
  ],
  images: [
    {
      src: "/events/mcp-rce-expected-behavior/anthropic-by-design-failure.png",
      alt: "OX Securityのインフォグラフィック：「Anthropic's By Design Failure at the Heart of the AI Ecosystem」",
      caption:
        "AIエコシステムの中核におけるAnthropicの「By Design」失敗を示すOX Securityのインフォグラフィック。Credit: OX Security。",
      sourceUrl:
        "https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/",
      width: 1056,
      height: 656,
    },
  ],
  aftermath:
    'LiteLLMは、<a href="https://docs.litellm.ai/blog/mcp-stdio-command-injection-april-2026">コミット7b7f304</a>で自らの脆弱性インスタンス（CVE-2026-30623）をパッチし、最初の安定版はv1.83.7-stableとなった。stdioコマンドをホワイトリストに制限し、PROXY_ADMINロールを要求することで、認証済みRCEは未認証で悪用できなくなった。Python、TypeScript、Java、Rust向けのAnthropic公式MCP SDKはプロトコルレベルで変更されておらず、STDIOアダプターへの注意を推奨するドキュメント更新が、この標準を設計した企業から見える唯一の調整である。サプライチェーンへの曝露は、推定1億5,000万以上のダウンロードと、アーキテクチャがデフォルトで安全だと仮定したすべての下流プロジェクトに対して持続している。',
};
