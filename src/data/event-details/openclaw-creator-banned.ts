import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "openclaw-creator-banned",
  deck: "ClaudeサブスクリプションがOpenClawを含むサードパーティハーネスをカバーしなくなると発表してから数日後、AnthropicはとにかくOpenClawの創設者Peter SteinbergerにClaudeへのアクセスを禁止した。世論の抗議を受けて数時間以内に復旧させたが、どちらの行動についても説明しなかった。",
  body: [
    '2026年4月4日、Anthropicは顧客に対し、<a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">「OpenClawを含むサードパーティハーネス」</a>がClaudeサブスクリプションでカバーされなくなると告げ、このツールを別の従量制API課金に移行させた。同社は、当時Claude上で動作していた<a href="https://www.panewslab.com/en/articles/019d575f-927f-74a3-a42a-289c7694119b">135,000以上のOpenClawインスタンス</a>を「巨大なインフラ負担」と引き合いに出して政策変更を正当化した。この発表は、<a href="https://news.ycombinator.com/item?id=47633396">1,099ポイントと827コメント</a>に達するHacker Newsスレッドを生んだ。',
    '2026年4月10日、TechCrunchはAnthropicが一時的にPeter SteinbergerのClaudeアクセスを禁止したと報じた。彼が受けた停止通知は次のように書かれていた。<a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">「アカウントに関連する不審な信号の内部調査により、利用規約に違反していることが判明しました。その結果、Claudeへのアクセスを取り消しました。」</a>Steinbergerは、求められたことを正確に行っていたと主張し、<a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">「新しいルールに従いAPIを使っていたのに、それでも禁止された」</a>と投稿した。世論の抗議を受け、AnthropicのエンジニアがXで介入し、<a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">「AnthropicはOpenClawを使ったことで誰もBANしたことはない。手伝いたい」</a>と伝え、アカウントは数時間以内に復旧した。',
    'Steinbergerは、停止のきっかけが<a href="https://www.newsbytesapp.com/news/science/anthropic-temporarily-bans-openclaw-founder-peter-steinberger/story">「claude-pフォールバック機能」</a>の作業だったと推測し、Borisという人物に分類器のバグが確認されたと述べた。彼はまたタイミングを不審に思い、<a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">TechCrunchに</a>「タイミングが面白いものだ。まず人気機能をクローズドハーネスにコピーしてから、オープンソースを締め出す」と語った。これはAnthropicの競合する自社エージェント製品への言及だった。',
    'この出来事は、SteinbergerがOpenAIに雇用されている間に展開された。彼は自身の役割を区別することで文脈化した。<a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">「二つのことを分けて考える必要がある。どのモデルプロバイダにとってもOpenClawがうまく動作するようにしたいOpenClaw Foundationでの仕事と、OpenAIでの未来の製品戦略を手伝う仕事だ。」</a>彼は、<a href="https://techcrunch.com/2026/04/10/anthropic-temporarily-banned-openclaws-creator-from-accessing-claude/">「一方は歓迎してくれ、もう一方は法的脅しを送ってきた」</a>と対応の違いを要約した。',
    '2026年4月21日、禁止からおおよそ11日後、Anthropicは再び方向転換し、<a href="https://news.ycombinator.com/item?id=47844269">OpenClaw風のClaude CLI利用が許可されている</a>とユーザーに伝えた。方向転換のスレッドは<a href="https://news.ycombinator.com/item?id=47844269">511ポイントと293コメント</a>に達した。それでもユーザーは、Anthropicが<code>OpenClaw</code>という単語自体を<a href="https://news.ycombinator.com/item?id=47656695">ブラックリスト化している</a>ようだと報告した。システムプロンプトにその単語が含まれるだけで、ネイティブなClaude Codeを使っていてもAPI料金に押しやられるという。Anthropicは、Steinbergerのアカウント停止とその復旧のいずれに対しても<a href="https://explainx.ai/blog/is-openclaw-safe-anthropic-ban-peter-steinberger-2026">公の説明を提供しなかった</a>。',
  ],
  receipts: [
    "Steinbergerの停止通知は、Anthropicの利用規約に違反する「不審な信号」を引用した。",
    "停止時、Claude上で135,000以上のOpenClawインスタンスが動作していた。",
    "Steinbergerのアカウントは、エンジニアがXで公に介入してから数時間以内に復旧した。",
    "4月4日の政策変更のHacker Newsスレッド：1,099ポイント、827コメント。",
    "4月21日の方向転換のHacker Newsスレッド：511ポイント、293コメント。",
    "Anthropicは、禁止も復旧も公に説明しなかった。",
  ],
  reactions: [
    {
      platform: "x",
      author: "@steipete (Peter Steinberger)",
      meta: "2026年4月10日投稿。NewsBytesの報道で引用。",
      quote:
        "ああ、みんな、今後OpenClawがAnthropicのモデルで引き続き動作することを保証するのは難しくなるよ。",
      url: "https://www.newsbytesapp.com/news/science/anthropic-temporarily-bans-openclaw-founder-peter-steinberger/story",
    },
    {
      platform: "hackernews",
      author: "throwup238",
      meta: "「Anthropic、OpenClaw風のClaude CLI利用は再び許可される」（511ポイント、293コメント）へのコメント",
      quote:
        "Googleの愚かなGChatブランド変更シリーズ以来、これほど混乱しみじめとした製品戦略を見たことがない。",
      url: "https://news.ycombinator.com/item?id=47844269",
    },
    {
      platform: "hackernews",
      author: "jollymonATX",
      meta: "4月21日復旧スレッドへのコメント（511ポイント）",
      quote: "どうしてここまで下手なんだ？ じゃああれは何だったんだ？",
      url: "https://news.ycombinator.com/item?id=47844269",
    },
    {
      platform: "hackernews",
      author: "rvz",
      meta: "元の政策変更スレッドへのコメント（1,099ポイント、827コメント）",
      quote: "つまり、支払った容量をフルに使うと、それが多すぎるってことだな！",
      url: "https://news.ycombinator.com/item?id=47633396",
    },
    {
      platform: "hackernews",
      author: "SpicyLemonZest",
      meta: "元の政策変更スレッドへのコメント（1,099ポイント）",
      quote:
        "ISPの場合と同じように、人々はベイトアンドスイッチを感じると怒り出すと思う……人々があなたから購入したと信じているXの流れを創造的に使い始めるたびに、ルールを変えるのだから。",
      url: "https://news.ycombinator.com/item?id=47633396",
    },
    {
      platform: "hackernews",
      author: "avaer",
      meta: "「OpenClawという単語のブラックリスト化」スレッドへのコメント",
      quote:
        "システムプロンプトにOpenClawと書くだけで、ネイティブなClaude Codeを使っていても、チャットにAPI料金を適用させられる。画像に写っているのはまさにその状況だ。",
      url: "https://news.ycombinator.com/item?id=47656695",
    },
  ],
  images: [],
  aftermath:
    "4月21日、Anthropicはユーザーに対し、OpenClaw風のClaude CLI利用が再び許可されていると伝えた。Peter Steinbergerが「不審な信号」を理由にした停止通知を受けてからおおよそ11日後のことで、彼は新しいルールに従いAPIを使っていたと主張している。同社は、停止、復旧、またはシステムプロンプト内の「OpenClaw」という単語自体がレートペナルティを引き起こすという報告のいずれについても、公の説明を提供しなかった。",
};
