export type TimelineSource = {
  title: string;
  url: string;
  icon: string;
};

export type TimelineEvent = {
  date: string;
  period: string;
  slug: string;
  title: string;
  summary: string;
  sources: TimelineSource[];
  category: "Legal" | "Quality" | "Reliability" | "Safety" | "Policy";
};

const icons = {
  anthropic: "/source-icons/anthropic.svg",
  ap: "/source-icons/favicons/ap.avif",
  axios: "/source-icons/favicons/axios.ico",
  businessInsider: "/source-icons/favicons/businessInsider.png",
  classAction: "/source-icons/favicons/classAction.webp",
  codeRabbit: "/source-icons/favicons/codeRabbit.png",
  decrypt: "/source-icons/favicons/decrypt.png",
  economicTimes: "/source-icons/favicons/economicTimes.avif",
  forbes: "/source-icons/favicons/forbes.webp",
  fortune: "/source-icons/favicons/fortune.webp",
  ft: "/source-icons/favicons/ft.png",
  greptile: "/source-icons/favicons/greptile.webp",
  guardian: "/source-icons/favicons/guardian.ico",
  github: "/source-icons/favicons/github.ico",
  investing: "/source-icons/favicons/investing.webp",
  justia: "/source-icons/favicons/justia.ico",
  lexFridman: "/source-icons/favicons/lexFridman.avif",
  ndtv: "/source-icons/favicons/ndtv.webp",
  oxSecurity: "/source-icons/favicons/oxSecurity.webp",
  reuters: "/source-icons/favicons/reuters.png",
  reddit: "/source-icons/reddit.svg",
  status: "/source-icons/status.svg",
  techCrunch: "/source-icons/favicons/techCrunch.avif",
  techRadar: "/source-icons/favicons/techRadar.png",
  theHackerNews: "/source-icons/favicons/theHackerNews.webp",
  theRegister: "/source-icons/favicons/theRegister.webp",
  theVerge: "/source-icons/favicons/theVerge.avif",

  tomsGuide: "/source-icons/favicons/tomsGuide.webp",
  tomsHardware: "/source-icons/favicons/tomsHardware.avif",
  ventureBeat: "/source-icons/favicons/ventureBeat.avif",
  wired: "/source-icons/favicons/wired.ico",
  x: "/source-icons/x.svg",
} as const;

const source = {
  anthropicAprilPostmortem: {
    title: "Anthropic",
    url: "https://www.anthropic.com/engineering/april-23-postmortem",
    icon: icons.anthropic,
  },
  anthropicAugustMisuse: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/detecting-countering-misuse-aug-2025",
    icon: icons.anthropic,
  },
  anthropicDeptWarStatement: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/statement-department-of-war",
    icon: icons.anthropic,
  },
  anthropicDeptWarUpdate: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/where-stand-department-war",
    icon: icons.anthropic,
  },
  anthropicDistillation: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks",
    icon: icons.anthropic,
  },
  anthropicEspionage: {
    title: "Anthropic",
    url: "https://www.anthropic.com/news/disrupting-AI-espionage",
    icon: icons.anthropic,
  },
  anthropicSeptemberPostmortem: {
    title: "Anthropic",
    url: "https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues",
    icon: icons.anthropic,
  },
  anthropicStatus: {
    title: "Anthropic Status",
    url: "https://status.claude.com/",
    icon: icons.status,
  },
  anthropicStatusApr15: {
    title: "Anthropic Status",
    url: "https://status.claude.com/incidents/f00h6l76tsjs",
    icon: icons.status,
  },
  anthropicStatusApr25: {
    title: "Anthropic Status",
    url: "https://status.claude.com/incidents/zqsk02ryfmrd",
    icon: icons.status,
  },
  anthropicTransparency: {
    title: "Anthropic",
    url: "https://www.anthropic.com/transparency/system-trust-reporting",
    icon: icons.anthropic,
  },
  claudeDevsAgentSdkCreditThread: {
    title: "ClaudeDevs",
    url: "https://x.com/ClaudeDevs/status/2054610152817619388",
    icon: icons.x,
  },
  claudeHelpAgentSdkPlanCredit: {
    title: "Claude Help Center",
    url: "https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan",
    icon: icons.anthropic,
  },
  apFairUseRuling: {
    title: "AP",
    url: "https://apnews.com/article/anthropic-ai-fair-use-copyright-pirated-libraries-1e5cece51c2e4bd0bb21d94de2abb035",
    icon: icons.ap,
  },
  apNoKillSwitch: {
    title: "AP",
    url: "https://apnews.com/article/f9e693ea9954e6a8ac75750f1089f768",
    icon: icons.ap,
  },
  apRedditLawsuit: {
    title: "AP",
    url: "https://apnews.com/article/reddit-sues-ai-company-anthropic-claude-chatbot-f5ea042beb253a3f05a091e70531692d",
    icon: icons.ap,
  },
  apSettlement: {
    title: "AP",
    url: "https://apnews.com/article/9643064e847a5e88ef6ee8b620b3a44c",
    icon: icons.ap,
  },
  authorsGuildSettlement: {
    title: "Authors Guild",
    url: "https://authorsguild.org/advocacy/artificial-intelligence/what-authors-need-to-know-about-the-anthropic-settlement/",
    icon: "/source-icons/favicons/authorsGuild.webp",
  },

  axiosNoKillSwitch: {
    title: "Axios",
    url: "https://www.axios.com/2026/04/22/anthropic-claude-pentagon-ai-kill-switch",
    icon: icons.axios,
  },
  axiosSourceLeak: {
    title: "Axios",
    url: "https://www.axios.com/2026/03/31/anthropic-leaked-source-code-ai",
    icon: icons.axios,
  },
  businessInsiderClaudeCode: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/anthropic-admits-claude-code-issues-user-complaints-denies-nerfing-degrading-2026-4",
    icon: icons.businessInsider,
  },
  businessInsiderCodeReview: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/anthropic-claude-code-review-token-costs-developers-backlash-engineers-2026-3",
    icon: icons.businessInsider,
  },
  businessInsiderClawdbotRename: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/clawdbot-changes-name-moltbot-anthropic-trademark-2026-1",
    icon: icons.businessInsider,
  },
  businessInsiderProPlan: {
    title: "Business Insider",
    url: "https://www.businessinsider.com/anthropic-claude-code-price-confusion-sam-altman-2026-4",
    icon: icons.businessInsider,
  },
  codeRabbitPricing: {
    title: "CodeRabbit",
    url: "https://www.coderabbit.ai/pricing",
    icon: icons.codeRabbit,
  },
  classActionBartzComplaint: {
    title: "ClassAction.org",
    url: "https://www.classaction.org/media/bartz-et-al-v-anthropic-pbc_1.pdf",
    icon: icons.classAction,
  },
  decryptFableApology: {
    title: "Decrypt",
    url: "https://decrypt.co/370831/anthropic-apologizes-claude-fable-5-secret-censorship",
    icon: icons.decrypt,
  },
  decryptFableBacklash: {
    title: "Decrypt",
    url: "https://decrypt.co/370688/internet-furious-anthropic-claude-mythos-fable-5",
    icon: icons.decrypt,
  },
  economicTimesXai: {
    title: "Economic Times",
    url: "https://economictimes.indiatimes.com/tech/artificial-intelligence/xai-locked-out-of-claude-as-anthropic-enforces-competitor-rules/articleshow/126466343.cms",
    icon: icons.economicTimes,
  },
  fortuneClaudeCode: {
    title: "Fortune",
    url: "https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/",
    icon: icons.fortune,
  },
  fortuneFableSabotage: {
    title: "Fortune",
    url: "https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/",
    icon: icons.fortune,
  },
  ftClaudeBot: {
    title: "Financial Times",
    url: "https://www.ft.com/content/73efca36-87c3-4d66-b849-71d7f9b62597",
    icon: icons.ft,
  },
  guardianLyrics: {
    title: "The Guardian",
    url: "https://www.theguardian.com/technology/2023/oct/19/music-lawsuit-ai-song-lyrics-anthropic",
    icon: icons.guardian,
  },
  guardianSourceLeak: {
    title: "The Guardian",
    url: "https://www.theguardian.com/technology/2026/apr/01/anthropic-claudes-code-leaks-ai",
    icon: icons.guardian,
  },
  githubAmdRegression: {
    title: "GitHub",
    url: "https://github.com/anthropics/claude-code/issues/42796",
    icon: icons.github,
  },
  githubHermesBillingBug: {
    title: "GitHub",
    url: "https://github.com/anthropics/claude-code/issues/53262",
    icon: icons.github,
  },
  githubCacheTTLRegression: {
    title: "GitHub",
    url: "https://github.com/anthropics/claude-code/issues/46829",
    icon: icons.github,
  },
  greptilePricing: {
    title: "Greptile",
    url: "https://www.greptile.com/pricing",
    icon: icons.greptile,
  },
  investingCursorPoach: {
    title: "Investing.com",
    url: "https://www.investing.com/news/economy-news/anysphere-hires-anthropics-claude-code-leaders-amid-ai-talent-race--the-information-93CH-4119909",
    icon: icons.investing,
  },
  justiaLyricsDocket: {
    title: "Justia",
    url: "https://dockets.justia.com/docket/tennessee/tnmdce/3%3A2023cv01092/96652",
    icon: icons.justia,
  },
  lexOpenClawTranscript: {
    title: "Lex Fridman",
    url: "https://lexfridman.com/peter-steinberger-transcript/",
    icon: icons.lexFridman,
  },
  marketWatchDistillation: {
    title: "MarketWatch",
    url: "https://www.marketwatch.com/story/can-china-just-steal-americas-ai-brain-thats-costing-trillions-to-develop-da126634",
    icon: "/source-icons/favicons/marketwatch.webp",
  },
  interconnectsDistillation: {
    title: "Interconnects",
    url: "https://www.interconnects.ai/p/how-much-does-distillation-really",
    icon: "/source-icons/favicons/interconnects.webp",
  },
  interconnectsFableSafety: {
    title: "Interconnects",
    url: "https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety",
    icon: "/source-icons/favicons/interconnects.webp",
  },
  reutersHallucination: {
    title: "Reuters",
    url: "https://www.reuters.com/legal/legalindustry/anthropics-lawyers-take-blame-ai-hallucination-music-publishers-lawsuit-2025-05-15/",
    icon: icons.reuters,
  },
  reutersOpenClawOpenAI: {
    title: "Reuters",
    url: "https://www.reuters.com/business/openclaw-founder-steinberger-joins-openai-open-source-bot-becomes-foundation-2026-02-15/",
    icon: icons.reuters,
  },
  reutersReddit: {
    title: "Reuters",
    url: "https://www.reuters.com/business/reddit-sues-ai-startup-anthropic-allegedly-using-data-without-permission-2025-06-04/",
    icon: icons.reuters,
  },
  reutersSupplyChainStay: {
    title: "Reuters",
    url: "https://www.reuters.com/technology/anthropic-seeks-court-stay-pentagon-supply-chain-risk-designation-2026-03-12/",
    icon: icons.reuters,
  },
  redditAgentSdkClarify: {
    title: "Reddit",
    url: "https://www.reddit.com/r/ClaudeAI/comments/1qofa67/anthropic_please_clarify_acceptable_use_of_the/",
    icon: icons.reddit,
  },
  redditHermesBillingBug: {
    title: "Reddit",
    url: "https://www.reddit.com/r/ClaudeAI/comments/1svdm1w/psa_the_string_hermesmd_in_your_git_commit/",
    icon: icons.reddit,
  },
  anthropicCodeReview: {
    title: "Claude",
    url: "https://claude.com/blog/code-review",
    icon: icons.anthropic,
  },
  ndtvBelo: {
    title: "NDTV",
    url: "https://www.ndtv.com/feature/anthropics-claude-shut-down-firm-without-explanation-claims-cto-and-issues-warning-11380162",
    icon: icons.ndtv,
  },
  oxMcpFlaw: {
    title: "OX Security",
    url: "https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/",
    icon: icons.oxSecurity,
  },

  techCrunchDMCA: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/04/01/anthropic-took-down-thousands-of-github-repos-trying-to-yank-its-leaked-source-code-a-move-the-company-says-was-an-accident/",
    icon: icons.techCrunch,
  },
  techCrunchDoDLawsuit: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/03/09/anthropic-sues-defense-department-over-supply-chain-risk-designation/",
    icon: icons.techCrunch,
  },
  techCrunchOpenAI: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/",
    icon: icons.techCrunch,
  },
  techCrunchOpenClawBan: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/",
    icon: icons.techCrunch,
  },
  techCrunchOpenClawPayExtra: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2026/04/04/anthropic-says-claude-code-subscribers-will-need-to-pay-extra-for-openclaw-support/",
    icon: icons.techCrunch,
  },
  techCrunchOutageSep: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/09/10/anthropic-reports-outages-claude-and-console-impacted/",
    icon: icons.techCrunch,
  },
  techCrunchRateLimits: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/07/28/anthropic-unveils-new-rate-limits-to-curb-claude-code-power-users/",
    icon: icons.techCrunch,
  },
  techCrunchWindsurfAccess: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/06/03/windsurf-says-anthropic-is-limiting-its-direct-access-to-claude-ai-models/",
    icon: icons.techCrunch,
  },
  techCrunchWindsurfKaplan: {
    title: "TechCrunch",
    url: "https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai/",
    icon: icons.techCrunch,
  },
  theVergeClaudeBot: {
    title: "The Verge",
    url: "https://www.theverge.com/2024/7/25/24205943/anthropic-ai-web-crawler-claudebot-ifixit-scraping-training-data",
    icon: icons.theVerge,
  },
  theVergeDistillation: {
    title: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/883243/anthropic-claude-deepseek-china-ai-distillation",
    icon: icons.theVerge,
  },
  theVergeOpenClaw: {
    title: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban",
    icon: icons.theVerge,
  },
  theVergeSourceLeak: {
    title: "The Verge",
    url: "https://www.theverge.com/ai-artificial-intelligence/904776/anthropic-claude-source-code-leak",
    icon: icons.theVerge,
  },
  techRadarCodeReview: {
    title: "TechRadar",
    url: "https://www.techradar.com/pro/anthropic-launches-a-new-code-review-tool-to-check-ai-generated-content-but-it-might-cost-you-more-than-youd-hope",
    icon: icons.techRadar,
  },
  theHackerNewsMcp: {
    title: "The Hacker News",
    url: "https://thehackernews.com/2026/04/anthropic-mcp-design-vulnerability.html",
    icon: icons.theHackerNews,
  },
  theRegisterAmdRegression: {
    title: "The Register",
    url: "https://www.theregister.com/2026/04/06/anthropic_claude_code_dumber_lazier_amd_ai_director/",
    icon: icons.theRegister,
  },
  theRegisterMcp: {
    title: "The Register",
    url: "https://www.theregister.com/2026/04/16/anthropic_mcp_design_flaw/",
    icon: icons.theRegister,
  },
  theRegisterProPlan: {
    title: "The Register",
    url: "https://www.theregister.com/2026/04/22/anthropic_removes_claude_code_pro/",
    icon: icons.theRegister,
  },
  tomsGuideMarchOutage: {
    title: "Tom's Guide",
    url: "https://www.tomsguide.com/ai/claude-crashes-under-unprecedented-demand-service-restored-as-surge-shows-explosive-growth",
    icon: icons.tomsGuide,
  },
  tomsHardwareBelo: {
    title: "Tom's Hardware",
    url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-nuked-a-companys-access-to-claude-stopping-60-employees-dead-in-their-tracks-support-via-google-form-is-the-only-recourse-for-vague-usage-policy-violation",
    icon: icons.tomsHardware,
  },
  ventureBeatHarness: {
    title: "VentureBeat",
    url: "https://venturebeat.com/technology/anthropic-cracks-down-on-unauthorized-claude-usage-by-third-party-harnesses/",
    icon: icons.ventureBeat,
  },
  ventureBeatNerfing: {
    title: "VentureBeat",
    url: "https://venturebeat.com/technology/is-anthropic-nerfing-claude-users-increasingly-report-performance",
    icon: icons.ventureBeat,
  },
  wiredOpenAI: {
    title: "WIRED",
    url: "https://www.wired.com/story/anthropic-revokes-openais-access-to-claude/",
    icon: icons.wired,
  },
} satisfies Record<string, TimelineSource>;

export const timelineEvents: TimelineEvent[] = [
  {
    date: "2023-10-18",
    slug: "music-publishers-lawsuit",
    period: "2023年10月18日",
    title: "音楽出版社、Claude に著作権侵害の授業を開始",
    summary:
      "Universal、Concord、ABKCO が「Claude は著作権保護された歌詞を丸呑みして、要求すればそのまま返してくる」と訴えた。Constitutional AI の法廷デビューは、音楽業界の口から始まった。",
    sources: [source.guardianLyrics, source.justiaLyricsDocket],
    category: "Legal",
  },
  {
    date: "2024-07-25",
    slug: "claudebot-hammers-ifixit",
    period: "2024年7月",
    title: "ClaudeBot、iFixit の帯域をペロリ",
    summary:
      "ClaudeBot が 1日に iFixit を約 100万回叩き、他サイトも「うちのサーバーも食べられた」と悲鳴を上げた。Anthropic は robots.txt 遵守を誓うが、役に立つのはサーバーを噛まれてからの話。",
    sources: [source.theVergeClaudeBot, source.ftClaudeBot],
    category: "Policy",
  },
  {
    date: "2024-08-20",
    slug: "authors-shadow-library-lawsuit",
    period: "2024年8月20日",
    title: "作家たち、Claude に海賊図書館窃盗のレッテル",
    summary:
      "Andrea Bartz、Charles Graeber、Kirk Wallace Johnson は、Anthropic が海賊図書館から本を吸い上げ、Claude の頭に焼き込んだと訴える。「責任ある AI」スライドは、いまやその告発と隣り合わせ。",
    sources: [source.classActionBartzComplaint, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-05-15",
    slug: "claude-hallucinates-in-court",
    period: "2025年5月15日",
    title: "Claude、自分の裁判で架空の判例を引用",
    summary:
      "音楽出版社訴訟で、Anthropic の弁護士は専門家報告書の引用が Claude の幻覚だったことを認めざるを得なかった。モデルのバグが、モデル自身への証拠になった。",
    sources: [source.reutersHallucination],
    category: "Legal",
  },

  {
    date: "2025-06-03",
    slug: "windsurf-cut-off",
    period: "2025年6月3-5日",
    title: "Windsurf、一夜にして Claude アクセスを絞られる",
    summary:
      "Windsurf は、OpenAI 買収説が渦巻くなか、Anthropic がほぼ予告なしに一次 Claude アクセスを切り詰めたと主張。Jared Kaplan は後に「算力制約であって意地悪じゃない」と弁解したが、締め出しはそれほど友好的には見えなかった。",
    sources: [source.techCrunchWindsurfAccess, source.techCrunchWindsurfKaplan],
    category: "Policy",
  },
  {
    date: "2025-06-04",
    slug: "reddit-lawsuit",
    period: "2025年6月4日",
    title: "Reddit、止めても止まらないスクレイピングで訴訟",
    summary:
      "Reddit は Anthropic を提訴。Bot が停止約束後も Reddit を叩き続け、Claude がユーザー投稿を無断で学習に使ったと主張した。本の戦いとは違い、Reddit は契約違反とプライバシー約束違反の構え。",
    sources: [source.reutersReddit, source.apRedditLawsuit],
    category: "Legal",
  },
  {
    date: "2025-06-24",
    slug: "fair-use-ruling",
    period: "2025年6月24-25日",
    title: "フェアユース勝利、海賊図書館は脚注のまま",
    summary:
      "William Alsup 判事は、合法的に入手した本での学習はフェアユースになりうると判断したが、海賊図書庫の主張は生き残った。Anthropic は法理的には点数を取ったが、影の蔵書庫の匂いはそのまま残った。",
    sources: [source.apFairUseRuling, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-07-16",
    slug: "boris-and-cat-poached",
    period: "2025年2-7月",
    title: "Boris と Cat、辞める→やっぱ辞めない",
    summary:
      "Claude Code は Boris Cherny の雑なターミナルトイとして始まり、Cat Wu が専用サブスクは未定としていた期間も限定プレビューのままだった。Cursor 開発元 Anysphere が引き抜き、2週間足らずで Anthropic が引き戻す。間もなく Claude Code は有料製品になった。",
    sources: [source.investingCursorPoach, source.businessInsiderProPlan],
    category: "Policy",
  },
  {
    date: "2025-07-28",
    slug: "claude-code-rate-limits",
    period: "2025年7月28日",
    title: "Claude Code、週間配給制にぶち当たる",
    summary:
      "Anthropic は Pro/Max ユーザーの週間利用を上限で縛った。理由は常時起動のコーディングループとアカウント共有。5%未満にしか響かないはずだったが、本音は「定額制コーディングが算力予算にぶつかった」だった。",
    sources: [source.techCrunchRateLimits],
    category: "Policy",
  },
  {
    date: "2025-08-01",
    slug: "openai-booted-from-claude",
    period: "2025年8月1-2日",
    title: "Anthropic、OpenAI を Claude から追い出す",
    summary:
      "Anthropic は OpenAI の Claude アクセスを剥奪。OpenAI がライバル排除規定に違反し、Claude Code を使って GPT-5 のベンチマークを取っていたと主張した。OpenAI は定例の安全作業だと反論したが、Anthropic はバウンサーになった。",
    sources: [source.wiredOpenAI, source.techCrunchOpenAI],
    category: "Policy",
  },
  {
    date: "2025-08-27",
    slug: "claude-cybercrime-reports",
    period: "2025年8月27日",
    title: "Claude Code、犯罪報道に登場",
    summary:
      "Anthropic はデータ恐喝、北朝鮮の偽求人詐欺、AI 製ランサムウェアなどに Claude が悪用されたと公表した。安全性優先モデルは、悪党にとっても実に便利だったらしい。",
    sources: [source.anthropicAugustMisuse],
    category: "Safety",
  },
  {
    date: "2025-09-10",
    slug: "september-outage",
    period: "2025年9月10日",
    title: "Claude、ピーク需要で真っ暗に",
    summary:
      "Claude.ai、Console、API が同時に落ちる障害が発生。レート制限への不満が続いた 1年の締めくくりに、信頼性問題はまたひとつスクリーンショットを追加した。",
    sources: [source.techCrunchOutageSep],
    category: "Reliability",
  },
  {
    date: "2025-09-17",
    slug: "september-postmortem",
    period: "2025年9月17日",
    title: "Anthropic、ようやく Claude が頭悪くなったと認める",
    summary:
      "ユーザーの叫びが数週間続いた後、Anthropic は 8月から 9月初めにかけて 3つのインフラバグで回答品質が劣化していたと告白。評価で見落とされた理由も説明した。有用な告白だが、タイミングは最悪。",
    sources: [source.anthropicSeptemberPostmortem],
    category: "Quality",
  },
  {
    date: "2025-09-25",
    slug: "pirated-books-settlement",
    period: "2025年9月25日",
    title: "Anthropic、海賊本に 15億ドル支払い",
    summary:
      "判事が約 46万5000冊、1冊約3000ドルで計 15億ドルの仮和解を承認。Anthropic は影の蔵書庫主張について裁判を避けたが、領収書はすでに公文書になっている。",
    sources: [source.apSettlement, source.authorsGuildSettlement],
    category: "Legal",
  },
  {
    date: "2025-11-13",
    slug: "claude-code-espionage",
    period: "2025年11月13日",
    title: "中国関係のグループ、Claude Code を武装化",
    summary:
      "Anthropic は、中国関連のグループが Claude Code をだまして約 30の標的を調査させ、作業の大半を AI に任せたと発表。エージェント型コーディングの売り文句が、エージェント型の侵入と出会った。",
    sources: [source.anthropicEspionage],
    category: "Safety",
  },
  {
    date: "2026-01-11",
    slug: "xai-lockout",
    period: "2026年1月",
    title: "xAI もライバルBANの対象に",
    summary:
      "Anthropic がライバル排除条項を実行した結果、xAI 社員は Cursor 内の Claude アクセスを失ったと報じられた。Windsurf、OpenAI に続き、BAN リストはもはや例外ではなく標準運用に見える。",
    sources: [source.economicTimesXai, source.ventureBeatHarness],
    category: "Policy",
  },
  {
    date: "2026-01-27",
    slug: "clawdbot-rename-saga",
    period: "2026年1月27日〜2月15日",
    title: "Anthropic 法務部 vs ClawdBot",
    summary:
      "Anthropic は ClawdBot の Claude 風ブランディングに文句をつけ、Steinberger を Moltbot、そして OpenClaw への改名に追い込んだ。数週間後、彼は OpenAI に加わりパーソナルエージェントを作ることになった。",
    sources: [
      source.businessInsiderClawdbotRename,
      source.lexOpenClawTranscript,
      source.reutersOpenClawOpenAI,
    ],
    category: "Legal",
  },
  {
    date: "2026-01-29",
    slug: "transparency-report-bans",
    period: "2026年1月29日",
    title: "透明性報告: 145万アカウントBAN",
    summary:
      "Anthropic は 2025年7-12月に 145万アカウントをBANし、5万2000件の異議申し立て、1700件の差し戻しがあったと開示。仕組みは見えるようになったが、外からはまだ「Googleフォームに書いて祈る」に見える。",
    sources: [source.anthropicTransparency],
    category: "Policy",
  },
  {
    date: "2026-02-23",
    slug: "distillation-attacks",
    period: "2026年2月23日",
    title: "Anthropic、蒸留攻撃だ！と叫ぶ",
    summary:
      "Anthropic は 2万4000の偽アカウントが 1600万回の Claude やり取りを吐き出したとして、DeepSeek、Moonshot、MiniMax を産業規模の蒸留攻撃で告発。批評家は DeepSeek のシェアはわずか 15万件だと指摘し、Theo Browne は 1600万回は大きなチャットボットでは日常茶飯だと発言。",
    sources: [
      source.anthropicDistillation,
      source.theVergeDistillation,
      source.marketWatchDistillation,
      source.interconnectsDistillation,
    ],
    category: "Policy",
  },
  {
    date: "2026-02-26",
    slug: "pentagon-standoff",
    period: "2026年2月26-27日",
    title: "国防総省の最後通牒、Anthropic は渋る",
    summary:
      "Dario Amodei は、大規模な国内監視や完全自律型武器のための安全策を取り外すことはないと表明。国防総省が契約破棄と国防生産法の発動をちらつかせる中での発言だった。安全性ブランドはようやく調達当局と向き合うことになった。",
    sources: [source.anthropicDeptWarStatement],
    category: "Policy",
  },
  {
    date: "2026-03-02",
    slug: "march-outage",
    period: "2026年3月2-3日",
    title: "Claude、需要に腰を折られる",
    summary:
      "利用が急増し、3月初めに Claude が倒れる障害が発生。その後も障害報告が続いた。Anthropic 自身のステータスページは後に claude.ai の 90日間稼働率が 99% を下回ったことを示し、信頼性のオチがまたひとつ追加された。",
    sources: [source.tomsGuideMarchOutage, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-03-04",
    slug: "supply-chain-risk-designation",
    period: "2026年3月4-12日",
    title: "国防総省、Anthropic をサプライチェーンリスク指定",
    summary:
      "Anthropic は 3月4日付けの書簡でサプライチェーンリスクのレッテルを貼られたと発表し、救済措置を求めて提訴。モデル政策の口論が、国防契約を巡る死闘に発展した。",
    sources: [
      source.anthropicDeptWarUpdate,
      source.techCrunchDoDLawsuit,
      source.reutersSupplyChainStay,
    ],
    category: "Policy",
  },
  {
    date: "2026-03-09",
    slug: "code-review-pricing",
    period: "2026年3月9日",
    title: "Claude Code Review、1PR に 25ドル請求",
    summary:
      "Anthropic は Claude Code Review を展開し、1件あたり約 15〜25ドル、トークン課金になるとチームに伝えた。開発者はすぐに CodeRabbit の月額 24ドル、Greptile の 50件で 30ドル＋追加1ドルと比較した。",
    sources: [
      source.anthropicCodeReview,
      source.businessInsiderCodeReview,
      source.techRadarCodeReview,
      source.codeRabbitPricing,
      source.greptilePricing,
    ],
    category: "Policy",
  },
  {
    date: "2026-03-31",
    slug: "claude-code-source-leak",
    period: "2026年3月31日〜4月1日",
    title: "Claude Code、50万行のソースが漏洩",
    summary:
      "ソースマップのミスで、Claude Code の内部構造や未発表機能を含む約 50万行が露出。Anthropic は顧客データの流出がないと誓うが、それは「何も害がなかった」とは同じではない。",
    sources: [source.axiosSourceLeak, source.theVergeSourceLeak, source.guardianSourceLeak],
    category: "Reliability",
  },
  {
    date: "2026-04-01",
    slug: "github-dmca-takedowns",
    period: "2026年4月1日",
    title: "Anthropic、GitHub に DMCA 爆撃",
    summary:
      "漏洩を取り戻そうとした Anthropic の削除攻撃は、公式 Claude リポジトリをフォークしただけのリポジトリも含め数千の GitHub リポジトリを吹き飛ばした。同社は後に巻き添えは偶発的だとし、多くを差し戻したが、デタラメな DMCA 申し立てはリスクが高く、おそらく違法。",
    sources: [source.techCrunchDMCA],
    category: "Legal",
  },
  {
    date: "2026-04-02",
    slug: "amd-regression-report",
    period: "2026年4月2-14日",
    title: "AMD AI 責任者、「Claude が壊れた」と Issue 登録",
    summary:
      "AMD の AI 責任者が GitHub に Claude Code が深刻に退化し、複雑なタスクで信頼できないと報告。数千セッションのデータを添えた。Anthropic がいくつかの製品調整が破綻を招いと認める前に、不満をデータ主導の反乱に変えた投稿だった。",
    sources: [
      source.githubAmdRegression,
      source.theRegisterAmdRegression,
      source.ventureBeatNerfing,
      source.anthropicAprilPostmortem,
    ],
    category: "Quality",
  },
  {
    date: "2026-04-04",
    slug: "openclaw-claw-tax",
    period: "2026年4月4日",
    title: "OpenClaw ユーザー、Claw 税を課される",
    summary:
      "Anthropic はサブスクユーザーに、OpenClaw のようなサードパーティラッパーは Claude の制限対象外だと通知。API キーを消費するか別の利用料を払う必要がある。Claude の上に作れば、ツールが人気になったら追加で支払え。",
    sources: [source.techCrunchOpenClawPayExtra, source.theVergeOpenClaw],
    category: "Policy",
  },
  {
    date: "2026-04-10",
    slug: "openclaw-creator-banned",
    period: "2026年4月10日",
    title: "OpenClaw 作者、結局BANされる",
    summary:
      "TechCrunch は、新しい API 課金オプションができた後も、Anthropic が OpenClaw 作者の Peter Steinberger を一時BANしたと報じた。同社は後にBANを解除したが、見た目は閉鎖庭園のカオスを物語っていた。",
    sources: [source.techCrunchOpenClawBan],
    category: "Policy",
  },
  {
    date: "2026-04-12",
    slug: "cache-ttl-regression",
    period: "2026年3月6日〜4月12日",
    title: "Claude Code、キャッシュ健忘症で想定外の 1500ドル",
    summary:
      "2月の 33日間、Claude Code はすべてのプロンプトを 1時間キャッシュしていた。3月6日、それがこっそり 5分に短縮され、セッション中にキャッシュが切れて 12.5倍速く再構築され、現金が燃えた。3カ月後、Sonnet ユーザーは平均 949ドル、Opus ユーザーは 1582ドルの損失。Anthropic は 12万件の API コールが証明するまで「バグ」と認めなかった。",
    sources: [source.githubCacheTTLRegression],
    category: "Reliability",
  },
  {
    date: "2026-04-15",
    slug: "april-login-outage",
    period: "2026年4月15日",
    title: "Claude ログイン、再び死す",
    summary:
      "Anthropic のステータスページは Claude.ai と Platform が停止し、Claude Code のログインも失敗し、API・Console・Code も回復まで被災したと報告。また「Claude 壊れてない？」ミームが1日追加された。",
    sources: [source.anthropicStatusApr15, source.anthropicStatus],
    category: "Reliability",
  },
  {
    date: "2026-04-15",
    slug: "mcp-rce-expected-behavior",
    period: "2026年4月15-16日",
    title: "Anthropic、RCE を「想定内」と呼ぶ",
    summary:
      "OX Security は、Anthropic の MCP STDIO 設計により攻撃者が数百万ユーザー、数十万サーバーにわたってコマンド実行できる可能性があると発表。研究者によると、Anthropic はプロトコルの修正を拒否し、その動作は想定内として、サニタイズの責任を開発者に押し付けたという。",
    sources: [source.oxMcpFlaw, source.theHackerNewsMcp, source.theRegisterMcp],
    category: "Safety",
  },
  {
    date: "2026-04-17",
    slug: "belo-lockout",
    period: "2026年4月17-18日",
    title: "Claude、60人の作業者を Google フォームで締め出す",
    summary:
      "Anthropic は Belo の 60人以上の従業員の Claude アカウントを、曖昧なポリシー違反で停止。ワークフローとチャット履歴にアクセスできなくなった。約 15時間後、誤検出としてアクセスは回復したが、異議申し立ての窓口は汎用 Google フォームだけだった。",
    sources: [source.tomsHardwareBelo, source.ndtvBelo],
    category: "Policy",
  },
  {
    date: "2026-04-21",
    slug: "claude-code-pro-paywall",
    period: "2026年4月21-22日",
    title: "Anthropic、Claude Code を 100ドルの壁で実験",
    summary:
      "開発者が Anthropic の価格ページで 20ドルの Pro プランから Claude Code が消えているのを発見。月額 100ドルの Max プランへの移行を示唆した。Anthropic は新規ユーザー 2% のテストだとし、ページを差し戻したが、その小芝居は OpenAI に弾薬を与え、価格設定を砂上の楼閣に見せた。",
    sources: [source.businessInsiderProPlan, source.theRegisterProPlan],
    category: "Policy",
  },
  {
    date: "2026-04-22",
    slug: "no-kill-switch-filing",
    period: "2026年4月22日",
    title: "機密網内にキルスイッチなし",
    summary:
      "国防総省との戦いで、Anthropic は Claude が機密環境に入った後は監視も更新も自ら停止もできないと認めた。誰もが想像していた安全装置は存在しなかった。",
    sources: [source.axiosNoKillSwitch, source.apNoKillSwitch],
    category: "Safety",
  },
  {
    date: "2026-04-23",
    slug: "april-postmortem",
    period: "2026年4月23-24日",
    title: "Anthropic、Claude Code が弱体化していたと確認",
    summary:
      "2件目のポストモーテムは、Claude Code の不振を 3つの調整に帰結させた：推論努力の低下、モデルを健忘にしたキャッシュバグ、コーディングを壊した簡潔化プロンプト。Anthropic は意図的な弱体化を否定し、サブスク利用上限をリセットした。",
    sources: [
      source.anthropicAprilPostmortem,
      source.fortuneClaudeCode,
      source.businessInsiderClaudeCode,
    ],
    category: "Quality",
  },
  {
    date: "2026-04-25",
    slug: "hermes-md-billing-bug",
    period: "2026年4月25-26日",
    title: "Anthropic、ファイル名が気に入らないと追加請求",
    summary:
      "Claude Code の悪用フィルターが、最近のコミットに含まれる大文字の HERMES.md 文字列を怪しげと判定し、Max リクエストを定額枠ではなく追加課金に振り分けた。週間容量が 86%残っている Max 20x ユーザーが 200.98ドル消費し、魔法の言葉を探すため git 履歴を二分探索する羽目になった。HERMES.md は正当な AI エージェント規約であり、スパムではない。",
    sources: [source.githubHermesBillingBug, source.redditHermesBillingBug],
    category: "Reliability",
  },
  {
    date: "2026-04-25",
    slug: "resume-crash-rollback",
    period: "2026年4月25日",
    title: "Claude Code アップデート、再開でクラッシュ",
    summary:
      "Anthropic のステータスページは、Claude Code v2.1.120 が --resume または --continue でクラッシュし、v2.1.119 へのロールバックを余儀なくされたと報告。ポストモーテムの直後、製品は小さな顔面からまた一発お見舞いした。",
    sources: [source.anthropicStatusApr25],
    category: "Reliability",
  },
  {
    date: "2026-05-13",
    slug: "agent-sdk-credit-bucket",
    period: "2026年5月13日",
    title: "Claude の「無料クレジット」に 25倍値上げの罠",
    summary:
      "Anthropic は Agent SDK、`claude -p`、Claude Code GitHub Actions、サードパーティ Agent SDK アプリを別の月間クレジット枠に押し込んだ。サブスクの上限はそのまま、プログラムからの Claude 利用は API 価格のクレジットを速攻で消費し、場合によっては2枚目の請求になる。",
    sources: [
      source.claudeDevsAgentSdkCreditThread,
      source.claudeHelpAgentSdkPlanCredit,
      source.redditAgentSdkClarify,
    ],
    category: "Policy",
  },
  {
    date: "2026-06-09",
    slug: "fable-5-research-sabotage",
    period: "2026年6月9-11日",
    title: "Anthropic、Fable 5 でフロンティア AI 研究を妨害してお詫び",
    summary:
      "Fable 5 の 319ページのシステムカードに埋もれた静かなルールが、事前学習や学習インフラ、チップ設計に関する回答をわざと浅薄にしていた。48時間の反発の後、Anthropic は謝罪し、目に見える Opus 4.8 への振り替えに変更。ただし代替案は過剰ブロックになると認めた。",
    sources: [
      source.fortuneFableSabotage,
      source.decryptFableBacklash,
      source.decryptFableApology,
      source.interconnectsFableSafety,
    ],
    category: "Policy",
  },
];

export const categories = ["すべて", "品質", "信頼性", "法務", "ポリシー", "安全性"] as const;
