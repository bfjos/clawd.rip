import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "code-review-pricing",
  deck: "Anthropic は 2026年3月9日に Claude Code Review を立ち上げ、1プルリクエストあたり約 15〜25ドルのトークン課金に設定。すぐに月額定額の競合と比較され、批判を浴びた。",
  body: [
    'Anthropic は 2026年3月9日に<a href="https://claude.com/blog/code-review">Claude Code 用の Code Review</a> を Team/Enterprise プラン限定のリサーチプレビューとして公開した。機能はトークン使用量に応じて課金され、レビューは平均して<a href="https://claude.com/blog/code-review">1件 15〜25ドル</a>、プルリクエストのサイズや複雑さに応じて増える。Anthropic は明示的に、Code Review は既存の軽量なオープンソース GitHub Action とは異なり、<a href="https://claude.com/blog/code-review">「深さを最適化するため、より高価」</a>だと料金設定を位置づけた。',
    'このツールは<a href="https://claude.com/blog/code-review">「 superficial なレビューが見逃すバグを捕まえるため、すべての PR にエージェントチームを派遣する」</a>と説明され、Anthropic の内部レビュープロセスをモデルにしている。1回のレビューに約20分かかる。Claude Code 責任者の Boris Cherny は、内部で最初に作られた理由として<a href="https://x.com/bcherny/status/2031089411820228645">「Anthropic エンジニア1人あたりのコード出力は今年200%増えており、レビューがボトルネックだった」</a>と述べた。同社は、1,000行以上の大きな PR では<a href="https://claude.com/blog/code-review">84%に発見があり、平均 7.5件の問題</a>が見つかったと報告。50行未満の小さな PR では31%に発見があり平均0.5件で、エンジニアが誤りとマークしたのは1%未満だった。',
    '公式 Claude アカウントは料金を擁護し、<a href="https://x.com/claudeai/status/2031088175456903667">「Code Review は深さを最適化するため、他のソリューションより高価になる場合がある……レビューは一般的に 15〜25ドル平均で、トークン使用量に応じて課金され、PR の複雑さに応じて変動する」</a>と説明した。Anthropic エンジニアの Thariq Shihipar も、この機能は<a href="https://www.aol.com/articles/anthropic-launched-ai-code-reviewer-060929137.html">「はるかに多くの計算リソースを使い、より難しいバグを見つける傾向がある」</a>と付け加えた。批評家は、100人の開発者チームが営業日に1件の PR を出せば、月に約<a href="https://www.aol.com/articles/anthropic-launched-ai-code-reviewer-060929137.html">4万ドル、年間で約 48万ドル</a>になると計算した。ただしこれはコミュニティや報道の試算で、Anthropic の数字ではない。',
    '競合は定額制。<a href="https://www.coderabbit.ai/pricing">CodeRabbit の Pro プランは年払いで月額 24ドル/ユーザー</a>で、無料枠と14日間無料トライアル付き。<a href="https://www.greptile.com/pricing">Greptile は月額 30ドル/シート</a>で、シートあたり50件のコードレビューが含まれ、追加は1件 1ドル。開発者の Daniel Avila はこのツールをテストし、<code>claude.yml</code> GitHub Action をセットアップした場合と比べて<a href="https://x.com/dani_avila7/status/2031151975732002930">「全く追加の機能や改善が見られない」</a>と報告した。',
    'コスト管理機能は<a href="https://claude.com/blog/code-review">組織の月次上限、リポジトリ単位のコントロール、分析ダッシュボード</a>などがある。しかし Hacker News では、開発者の raflueder が 2月に Opus 4.6 を使って 200件以上の PR を2ラウンドずつ実行し、合計 <a href="https://news.ycombinator.com/item?id=47313787">19.50ドルだった</a>と報告。1レビューあたり約 0.04ドルだ。TechRadar と AOL の報道は<a href="https://www.techradar.com/pro/anthropic-launches-a-new-code-review-tool-to-check-ai-generated-content-but-it-might-cost-you-more-than-youd-hope">2026年3月10日</a>と日付を置いており、ブログの公開日（3月9日）の翌日だった。',
  ],
  receipts: [
    "Anthropic は 2026年3月9日に Code Review を Team/Enterprise 向けリサーチプレビューとして公開した。",
    "レビューは平均 15〜25ドル/PR で、トークン使用量に応じ、PR のサイズや複雑さに応じて増加する。",
    "競合: CodeRabbit Pro は月額 24ドル/ユーザー。Greptile は月額 30ドル/シートで 50件レビュー + 追加1ドル。",
    "コミュニティ/報道の試算: 100人の開発者チームが営業日に1件 PR 出すと、月約 4万ドル、年間約 48万ドル。",
    "開発者 raflueder は 2月に Opus 4.6 で 200件以上の PR を2ラウンドずつ実行し、合計 19.50ドル（1件約 0.04ドル）。",
    "大きな PR（1,000行以上）では 84%に発見があり平均 7.5件。誤りとマークされたのは 1%未満。",
  ],
  reactions: [
    {
      platform: "x",
      author: "@initjean (Jean P.D. Meijer)",
      meta: "X post",
      quote:
        "Claude Code Review が PR あたり 15〜25ドルってどういうこと？ 1回のレビューがほとんどのコードレビューアプリの無制限サブスクと同じ値段じゃないか。トークン補助を忘れたのか？",
      url: "https://x.com/initjean/status/2031143406336970755",
    },
    {
      platform: "x",
      author: "@JorgeCastilloPr (Jorge Castillo)",
      meta: "X post",
      quote:
        "えげつない。新しい Claude Code Review ツールは PR あたり 25ドルもする。少なくとも価格は正直に提示してるな 😅",
      url: "https://x.com/JorgeCastilloPr/status/2031125264172732794",
    },
    {
      platform: "x",
      author: "@nnennahacks (Nnenna)",
      meta: "X post, screenshot of cost breakdown",
      quote:
        "claude code review を試してみた。3つの異なるリポジトリでの実際のコストだ。下を見ると、2PR で平均 20.75ドル。変更コードは 150行しかない。",
      url: "https://x.com/nnennahacks/status/2031386841371353104",
    },
    {
      platform: "hackernews",
      author: "cbovis",
      meta: "HN: 'Code Review for Claude Code', 83 points, 48 comments",
      quote:
        "このコストは狂ってる。比較すると GitHub Copilot Code Review はクレジットを超えたら 1レビュー 4セントだ。",
      url: "https://news.ycombinator.com/item?id=47313787",
    },
    {
      platform: "hackernews",
      author: "8cvor6j844qw_d6",
      meta: "HN comment",
      quote:
        "Greptile は月 30ドルで 50レビュー、追加は 1ドル。平均 15〜25ドルなら、はるかに高い。",
      url: "https://news.ycombinator.com/item?id=47313787",
    },
    {
      platform: "hackernews",
      author: "SkyPuncher",
      meta: "HN comment, defending the price",
      quote:
        "シニア以上のエンジニアは簡単に時給 100ドル以上稼ぐ。これは最大でも彼らの15分に相当……20ドルは信じられないほど安い売り込みだ。",
      url: "https://news.ycombinator.com/item?id=47313787",
    },
  ],
  images: [],
  aftermath:
    "Claude Code Review は、月次上限とリポジトリ管理機能とともに、Team/Enterprise 顧客向けのリサーチプレビューとして引き続き 1レビューあたり約 15〜25ドルで提供されている。トークン課金と競合の定額モデルとの差、そして開発者が GitHub Action で数セントで同等のレビューを実行したという報告が、比較の中心になっている。",
};
