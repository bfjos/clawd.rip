import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "claudebot-hammers-ifixit",
  deck: "Anthropic の ClaudeBot は 7月のある日に iFixit のページを約 100万回リクエストし、その後 robots.txt が苦情の推奨チャンネルだと説明した。",
  body: [
    '2024年7月24日、iFixit CEO の Kyle Wiens は X で、Anthropic の ClaudeBot が 24時間で iFixit のサイトを約 100万回ヒットし、数時間にわたって毎分数千リクエストを送りつけたと公表した。<a href="https://www.theverge.com/2024/7/25/24205943/anthropic-ai-web-crawler-claudebot-ifixit-scraping-training-data">The Verge</a> も報じた。Wiens はツイートで「ねえ @AnthropicAI、データが欲しいのは分かる。Claude は本当に賢い！ でも 24時間で 100万回もサーバーを叩く必要がある？ お金を払わずにコンテンツを取るだけじゃなく、DevOps リソースも圧迫してる。カッコ悪いよ」と書いた。iFixit の利用規約は、iFixit の明示的な事前書面による許可なく、コンテンツを機械学習や AI モデルの学習に使用することを明示的に禁止している。Anthropic の立場は、利用規約だけでは技術的保護にならないというもの。同社は「クロール速度には配慮して、できるだけ迷惑をかけないよう目指している」と述べ、サイト運営者には robots.txt を変更して ClaudeBot をブロックすることを推奨した。',
    '負荷は iFixit だけではなかった。2024年4月、Linux Mint Web フォーラムの障害は ClaudeBot のスクレイピング活動による負荷が原因だとされた。Freelancer.com CEO の Matt Barrie は、ClaudeBot が 4時間で同サイトを約 350万回訪問したと述べ、「圧倒的に最も攻撃的なスクレイパー」「酷いスクレイピングでサイトが全員にとって遅くなる」と批判した。別に、Read the Docs 共同創業者の Eric Holscher は、2024年5月にある AI クローラーが 73 TB の zip 化 HTML ファイルをダウンロードし、1日で約 10 TB、帯域コストが 5,000ドル以上になったと記録した。Read the Docs は、この悪用は「クローラーのバグで同じファイルを何度も何度もダウンロードしていた」ことが原因で、帯域制限も Etag/Last-Modified ヘッダーサポートもなかったと述べた。',
    'Anthropic は「robots.txt を尊重している」と述べ、クローラーは「iFixit が実装したその信号を尊重した」と説明した。同社は The Register に対し、ClaudeBot は廃止予定のユーザーエージェント「ANTHROPIC-AI」と「CLAUDE-WEB」の robots.txt ルールのみを尊重していると説明。このニュアンスは、一部のサイトの古いブロックルールが実際には現在のクローラーを止めていなかったことを意味する。Data Provenance Initiative 研究者の Shayne Longpre は、核心の緊張関係をこう要約した。「利用規約は具体的で繊細だが、機械可読ではない。robots.txt は機械可読だが、信じられないほど粗い。」iFixit が robots.txt に ClaudeBot を追加した後、クロールは止まったが、Wiens は The Register に「クローリングは robots.txt に追加して止まった。今度は 30分ごとにそのファイルにアクセスしてくる」と語った。',
    'Wiens は、Anthropic のチャットボットをテストしたところ iFixit のコンテンツがアウトオブバウンズだと認識しており、Claude は不正確な修理手順を出したと指摘。Pixel 6a の例では「前面から開くので、これはうまくいかず、損傷を与える」と述べた。Dark Visitors 創業者の Gavin King は、この広範なトレンドを「インターネットをクロールする人工エージェントの生態系におけるカンブリア爆発」と表現した。Read the Docs は、AI クローラーをブロックした後、ダウンロードファイルの帯域が約 800GB/日から 200GB/日へと約 75%減少したと報告し、「AI クローラーはクロール先のサイトに対して敬意を持たない振る舞いをしており、それが AI クローラー全体に対する反発を招くだろう」と警告した。',
  ],
  receipts: [
    "ClaudeBot は 24時間で iFixit を約 100万回ヒットした。",
    "Freelancer.com: 4時間で約 350万リクエスト。",
    "Read the Docs: 2024年5月に 73 TB の zip HTML をダウンロードし、5,000ドル以上のコスト。",
    "ブロック後、ClaudeBot は iFixit の robots.txt を 30分ごとに確認した。",
    "2024年4月の Linux Mint フォーラム障害は ClaudeBot が原因とされた。",
    "Read the Docs は AI クローラーブロック後、帯域が約 75%減少した。",
  ],
  reactions: [
    {
      platform: "x",
      author: "Kyle Wiens (@kwiens, iFixit CEO)",
      meta: "original tweet, July 24, 2024",
      quote:
        "ねえ @AnthropicAI、データが欲しいのは分かる。Claude は本当に賢い！ でも 24時間で 100万回もサーバーを叩く必要がある？ お金を払わずにコンテンツを取るだけじゃなく、DevOps リソースも圧迫してる。カッコ悪いよ。",
      url: "https://twitter.com/kwiens/status/1816128302542905620",
    },
    {
      platform: "hackernews",
      author: "chintan",
      meta: "comment on 'iFixit CEO Kyle Wiens calls out Anthropic for disruptive crawling' (79 points)",
      quote:
        "これは本当だ。うちも彼らのボットでひどく攻撃され、サービスが応答しなくなった。",
      url: "https://news.ycombinator.com/item?id=41060559",
    },
    {
      platform: "hackernews",
      author: "bobsomers",
      meta: "comment, HN thread (former iFixit engineer)",
      quote:
        "iFixit で働いていたのは 12〜13年前だけど、すでに可能な限り積極的にキャッシュしていて、今はもっと改善されているはず。彼らにとってバーストトラフィックは未知ではない。新しい iDevice の分解記事が発売直後に公開されるたび、通常より何倍も大きなトラフィックの爆発を何度も経験していた。Kyle や DevOps の人たちが気づいているなら、間違いなく妨害行為だ。",
      url: "https://news.ycombinator.com/item?id=41060559",
    },
    {
      platform: "hackernews",
      author: "tstrimple",
      meta: "comment, HN thread",
      quote:
        "HTTP/1.1 304 Not Modified ヘッダー対応は、実装するのも尊重するのも難しすぎるのか？ 両側の失敗がこの状況を作ってるように見える。",
      url: "https://news.ycombinator.com/item?id=41060559",
    },
    {
      platform: "hackernews",
      author: "Woshiwuja",
      meta: "comment on PC Gamer story submission (51 points)",
      quote:
        "恥ずかしい。LLM に他の LLM にデータの場所を教えさせてたらループに入ったんだろう。",
      url: "https://news.ycombinator.com/item?id=41076459",
    },
  ],
  images: [
    {
      src: "/events/claudebot-hammers-ifixit/readthedocs-bandwidth-may-2024.png",
      alt: "2024年5月の AI クローラー悪用インシデント中に Read the Docs の帯域が急上昇したグラフ",
      caption:
        "2024年5月の AI クローラースパイク時の Read the Docs 帯域使用量。あるクローラーは約 73 TB（1日で約 10 TB）をダウンロードし、5,000ドル以上の帯域コストを発生させた。出典: Read the Docs。",
      sourceUrl: "https://about.readthedocs.com/blog/2024/07/ai-crawlers-abuse/",
      width: 1522,
      height: 1174,
    },
    {
      src: "/events/claudebot-hammers-ifixit/readthedocs-bandwidth-june-2024.png",
      alt: "2024年6月の Read the Docs クローラートラフィックスパイクを示す帯域グラフ",
      caption:
        "2024年6月の 2回目の Read the Docs 帯域スパイク。AI クローラーによる帯域悪用が繰り返されたことを示す。出典: Read the Docs。",
      sourceUrl: "https://about.readthedocs.com/blog/2024/07/ai-crawlers-abuse/",
      width: 1404,
      height: 1164,
    },
  ],
  aftermath:
    "Anthropic は、できるだけ迷惑をかけないよう目指しており、事態を調査していると述べ、ClaudeBot は robots.txt 信号を尊重すると主張し続けた。サイト運営者は、ブロックルールが現在のユーザーエージェントを対象にしていることを確認し、サーバーがすでに 100万回訪問されていないか監視する責任がある。",
};
