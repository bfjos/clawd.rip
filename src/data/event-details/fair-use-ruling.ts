import type { EventDetail } from "@/data/event-detail";

export const detail: EventDetail = {
  slug: "fair-use-ruling",
  deck: '2025年6月23〜24日、William Alsup 判事は、合法的に入手した本で Claude を学習させることは「圧倒的に変換的な」フェアユースだと判断。一方、700万冊以上の海賊版を集めて中央図書館を作ったことは「本質的に、取り返しのつかない侵害」とした。',
  body: [
    '2025年6月23〜24日、カリフォルニア州北部地区の William Alsup 連邦判事は <em>Bartz v. Anthropic</em> で中間判決を下し、理論と実践の間を割った。合法的に入手した本を使って Claude とその前身モデルを学習させることはフェアユースだが、Anthropic が海賊版コピーから「中央図書館」を構築したとする主張は裁判に進むものとした。原告は Andrea Bartz、Charles Graeber、Kirk Wallace Johnson。<a href="https://www.npr.org/2025/06/25/nx-s1-5445242/federal-rules-in-ai-companys-favor-in-landmark-copyright-infringement-lawsuit-authors-bartz-graeber-wallace-johnson-anthropic">NPR</a> と <a href="https://dc.fortune.com/2025/06/24/ai-training-is-fair-use-federal-judge-rules-anthropic-copyright-case">Fortune</a> が判決を報じた。',
    'Alsup は AI 学習を「私たちの人生で最も変換的なものの一つ」と表現し、その本の使用を「変換的な典型」「圧倒的に変換的」「驚異的に変換的」と呼んだ。彼は<em>「作家になりたい読者と同じように、Anthropic の LLM は作品を競って複製したり置き換えたりするために学習したのではなく——困難な曲がり角を曲がり、何か違うものを作るために学習したのだ」</em>と書いた。<a href="https://simonwillison.net/2025/Jun/24/anthropic-training/">Simon Willison</a> の解説がこの熱意を捉えている。',
    '称賛は、支払いの壁の前で止まった。本を購入する前に、Anthropic は LibGen や PiLiMi のようなシャドーライブラリから 700万冊以上の海賊版を無料でダウンロードした。Alsup は<em>「研究図書館を構築するために海賊版をダウンロードし、何かの役に立つかもしれないと保持することは、それ自体の利用であり——変換的なものではない」</em>と書き、海賊行為を「本質的に、取り返しのつかない侵害」と認定した。彼はさらに<em>「Anthropic が以前にインターネットから盗んだ本の正規版を後で購入したとしても、窃盗の責任を免除するものではないが、法定損害賠償の額には影響しうる」</em>と述べ、海賊行為の責任と損害賠償に関する裁判を 2025年12月1日に予定した。<a href="https://www.boyarmiller.com/bartz-v-anthropic-a-split-decision-that-reshapes-ai-copyright-law/">BoyarMiller</a> がこの分割判決を分析した。',
    'Anthropic は、合法的に購入した物理書籍を破壊的にスキャンすること——実質的なフォーマット変換——は許容されると主張し、判事も同意した。本を読むたびに支払いを求めることは「考えられない」と推論した。フェアユースの支持は、米国司法において本を使った AI 学習に関する教義を初めて承認したものだが、<a href="https://www.whitecase.com/insight-alert/two-california-district-judges-rule-using-books-train-ai-fair-use">White & Case</a> は、数日後に別のカリフォルニア判事 Vince Chhabria が <em>Kadrey v. Meta</em> で同様のフェアユース判決を下したと指摘した。',
    'Authors Guild はこの判決を混合的な決定と呼び、<em>「裁判所が著作権法や法的問題、潜在的な害を十分に理解せずに判決を急いだように感じる」</em>と述べ、フェアユースの判断は<em>「最終的に覆されるだろう」</em>と予測した。彼らの評価は <a href="https://authorsguild.org/news/mixed-decision-in-anthropic-ai-case/">Authors Guild</a> の反応投稿に掲載された。',
    '当事者は12月の裁判前に和解した。事件は 15億ドル——史上最大級の著作権和解の一つ——で決着。LibGen と PiLiMi からダウンロードされた約700万冊のうち約50万タイトルをカバーし、手数料前の最低支払額はタイトルあたり約 3,000ドル。和解は調停を経て、2025年9月25日に Alsup 判事から仮承認された。デフォルトの分配は作者と出版社の 50/50 で、自費出版・権利戻り作者には 100%が支払われた。<a href="https://authorsguild.org/advocacy/artificial-intelligence/what-authors-need-to-know-about-the-anthropic-settlement/">Authors Guild</a> が支払い構造の解説を公開した。',
  ],
  receipts: [
    'Alsup 判事は AI 学習を「私たちの人生で最も変換的なものの一つ」と表現した。',
    "Anthropic は本を購入する前に、LibGen と PiLiMi から 700万冊以上の海賊版をダウンロードした。",
    "海賊行為の責任に関する裁判は 2025年12月1日に予定されたが、当事者は裁判前に和解した。",
    "和解額は 15億ドルで、約 50万タイトルをカバー。手数料前の最低額はタイトルあたり約 3,000ドル。",
    "仮承認は 2025年9月25日。デフォルトの分配は作者と出版社の 50/50。",
    "数日後、Vince Chhabria 判事は <em>Kadrey v. Meta</em> で同様のフェアユース判決を下した。",
  ],
  reactions: [
    {
      platform: "hackernews",
      author: "pseufaux",
      meta: "HN thread on the Anthropic ruling, item 44381639",
      quote:
        "私個人としては、入力素材の海賊版的性質だけで、現在のモデルの違法状態はかなり明確だと思う。私の知る限り、フェアユースは違法に入手された作品にはこれまで適用されたことがない。",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
    {
      platform: "hackernews",
      author: "hn_throwaway_99",
      meta: "HN comment on item 44381639",
      quote:
        "LLM が動作する速度と規模は、フェアユースが元々想定していたユースケースを完全に破壊している。",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
    {
      platform: "hackernews",
      author: "mystified5016",
      meta: "HN comment on item 44381639",
      quote:
        "DDoS は自動化の速度と規模のため違法攻撃だ。Slashdot でサイトが自然に DOS されるのは違法ではない。LLM が本を『読む』ことは、人間が本を読むことと同じではない——人気リンクを辿ることが DDoS に参加することではないのと同じだ。",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
    {
      platform: "hackernews",
      author: "pseufaux",
      meta: "HN comment on item 44381639",
      quote:
        "弁護士ではないが、出版社の許可なしに、海賊版の PDF がプリインストールされた『参考資料』として作家志望者に見せるコンピューターを作家に販売したら、法律はどう反応すると思う？ 問題は LLM が著作権コンテンツを思い出す能力にある。",
      url: "https://news.ycombinator.com/item?id=44381639",
    },
  ],
  aftermath:
    "判決は、Anthropic に購入した本での学習に関する基礎的なフェアユース判例を与えたが、同じコレクションの海賊版由来については 15億ドルの和解を残した。支払い構造は、自費出版・権利戻り作者に 100%支払われた。盗んだ本の中央図書館を、部分的に修復された収入源に変換する一つの方法だ。",
};
